import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import GithubSlugger from "github-slugger";
import { linkGlossaryTerms, attachCitations } from "./enrich";
import type { Source } from "./sources";

export { CATEGORY_META, categoryMeta } from "./categories";
export type { CategoryMeta } from "./categories";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type PageType = "pillar" | "category_guide";

export interface Frontmatter {
  page_type: PageType;
  suggested_slug: string;
  h1: string;
  meta_title: string;
  meta_description: string;
  primary_keyword: string;
  secondary_keywords: string;
  search_intent: string;
  parent_page?: string;
  /** Editorial review date, used for lastmod and the visible review line. */
  last_reviewed: string;
}

export interface FaqItem {
  question: string;
  answerHtml: string;
  answerText: string;
}

export interface TocItem {
  id: string;
  title: string;
}

export interface NextLink {
  label: string;
  href: string;
}

export interface GuidePage {
  /** URL slug without slashes, e.g. "tree-shears-guide" */
  slug: string;
  /** Canonical path with leading and trailing slash */
  href: string;
  order: number;
  frontmatter: Frontmatter;
  title: string;
  /** First paragraph, used as the hero standfirst */
  leadHtml: string;
  bodyHtml: string;
  faqs: FaqItem[];
  toc: TocItem[];
  nextLinks: NextLink[];
  readingMinutes: number;
  /** Sources cited in this page's body, in the order the markers appear. */
  citations: Source[];
  /** Glossary term ids linked in this page's body. */
  terms: string[];
  lastReviewed: Date;
}

/** Markdown → hast. Enrichment happens on the tree, before stringifying. */
const toTree = unified().use(remarkParse).use(remarkGfm).use(remarkRehype).use(rehypeSlug);
const stringify = unified().use(rehypeStringify);

interface RenderOptions {
  /** Link glossary terms and attach citation markers. Off for short fragments. */
  enrich?: boolean;
  /** The page's own slug, so a term does not link to the page you are on. */
  slug?: string;
}

interface Rendered {
  html: string;
  citations: Source[];
  terms: string[];
}

function render(markdown: string, options: RenderOptions = {}): Rendered {
  const tree = toTree.runSync(toTree.parse(markdown));

  let citations: Source[] = [];
  let terms: string[] = [];
  if (options.enrich) {
    citations = attachCitations(tree as never);
    terms = linkGlossaryTerms(tree as never, options.slug);
  }

  // Wrap tables so wide spec sheets scroll horizontally instead of forcing
  // the whole page to scroll on a phone.
  const html = String(stringify.stringify(tree as never))
    .replace(
      /<table>/g,
      // tabindex and role so a keyboard user can scroll a wide spec table.
      '<div class="table-wrap" tabindex="0" role="region" aria-label="Scrollable specification table"><table>',
    )
    .replace(/<\/table>/g, "</table></div>")
    .replace(
      /<pre>/g,
      '<pre tabindex="0" role="region" aria-label="Scrollable formula">',
    );

  return { html, citations, terms };
}

function toHtml(markdown: string): string {
  return render(markdown).html;
}

/** Matches the ids rehype-slug writes into the rendered headings. */
function slugify(text: string): string {
  return new GithubSlugger().slug(text);
}

/** Pulls the `**Next:** [A](/a/) | [B](/b/)` line out of the tail of a page. */
function parseNextLinks(markdown: string): NextLink[] {
  const line = markdown.match(/^\*\*Next:\*\*(.+)$/m);
  if (!line) return [];
  const links: NextLink[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(line[1])) !== null) {
    links.push({ label: match[1], href: match[2] });
  }
  return links;
}

/**
 * FAQ entries are authored as a bolded question line followed by a single
 * answer paragraph. Parsing them out lets us render an accordion and emit
 * FAQPage schema instead of dumping raw prose.
 */
function parseFaqs(faqMarkdown: string): FaqItem[] {
  const faqs: FaqItem[] = [];
  for (const raw of faqMarkdown.split(/\n{2,}/)) {
    const block = raw.trim();
    // A bolded question line, then the answer on the lines below it.
    const match = block.match(/^\*\*(.+?)\*\*\s*\n([\s\S]+)$/);
    if (!match) continue;
    const answer = match[2].trim();
    if (!answer) continue;
    faqs.push({
      question: match[1].trim(),
      answerHtml: toHtml(answer),
      answerText: answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/[*_`]/g, ""),
    });
  }
  return faqs;
}

function parseToc(markdown: string): TocItem[] {
  const toc: TocItem[] = [];
  const re = /^##\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = re.exec(markdown)) !== null) {
    const title = match[1].trim();
    toc.push({ id: slugify(title), title });
  }
  return toc;
}

function parseFile(filename: string): GuidePage {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;

  const href = frontmatter.suggested_slug;
  const slug = href.replace(/^\/|\/$/g, "");
  const order = Number(filename.slice(0, 2));

  // Strip the H1 (the hero renders it) and everything from the trailing rule
  // onwards (the "Next:" nav and CTA become designed components).
  let markdown = content.replace(/^#\s+.*$/m, "").trim();
  const nextLinks = parseNextLinks(markdown);
  markdown = markdown.replace(/\n---\s*\n[\s\S]*$/, "").trim();

  const faqSplit = markdown.split(/^##\s+Frequently asked questions\s*$/m);
  const beforeFaq = faqSplit[0].trim();
  const faqs = faqSplit[1] ? parseFaqs(faqSplit[1]) : [];

  // The first paragraph becomes the hero standfirst.
  const paragraphs = beforeFaq.split(/\n{2,}/);
  const leadMarkdown = paragraphs[0].trim();
  const restMarkdown = paragraphs.slice(1).join("\n\n").trim();

  const words = content.split(/\s+/).length;
  const body = render(restMarkdown, { enrich: true, slug });

  return {
    slug,
    href,
    order,
    frontmatter,
    title: frontmatter.h1,
    leadHtml: toHtml(leadMarkdown),
    bodyHtml: body.html,
    faqs,
    toc: parseToc(beforeFaq).concat(faqs.length ? [{ id: "faq", title: "Frequently asked questions" }] : []),
    nextLinks,
    readingMinutes: Math.max(1, Math.round(words / 220)),
    citations: body.citations,
    terms: body.terms,
    lastReviewed: new Date(frontmatter.last_reviewed),
  };
}

let cache: GuidePage[] | null = null;

export function getAllPages(): GuidePage[] {
  if (!cache) {
    cache = fs
      .readdirSync(CONTENT_DIR)
      .filter((f) => f.endsWith(".md"))
      .sort()
      .map(parseFile);
  }
  return cache;
}

export function getPillar(): GuidePage {
  const pillar = getAllPages().find((p) => p.frontmatter.page_type === "pillar");
  if (!pillar) throw new Error("No pillar page found in content/");
  return pillar;
}

export function getGuides(): GuidePage[] {
  return getAllPages().filter((p) => p.frontmatter.page_type !== "pillar");
}

export function getPageBySlug(slug: string): GuidePage | undefined {
  return getAllPages().find((p) => p.slug === slug);
}
