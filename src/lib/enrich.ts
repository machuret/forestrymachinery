import { lookupTable } from "./glossary";
import { anchorTable, type Source } from "./sources";

/* Minimal hast shapes — enough to walk and rewrite without pulling in types. */
interface TextNode {
  type: "text";
  value: string;
}
interface ElementNode {
  type: "element";
  tagName: string;
  properties?: Record<string, unknown>;
  children?: Node[];
}
type Node = TextNode | ElementNode | { type: string; children?: Node[] };

const isElement = (n: Node): n is ElementNode => n.type === "element";
const isText = (n: Node): n is TextNode => n.type === "text";

/**
 * Never rewrite inside these: links would nest, headings would gain markers the
 * table of contents does not expect, and code should stay literal.
 */
const SKIP = new Set(["a", "code", "pre", "h1", "h2", "h3", "h4", "h5", "h6", "th", "sup", "style", "script"]);

function el(tagName: string, properties: Record<string, unknown>, children: Node[] = []): ElementNode {
  return { type: "element", tagName, properties, children };
}

/** Walks text nodes, letting `replace` swap one for a run of nodes. */
function walkText(tree: Node, replace: (text: string) => Node[] | null): void {
  const visit = (node: Node) => {
    const children = (node as ElementNode).children;
    if (!children) return;
    const out: Node[] = [];
    let changed = false;

    for (const child of children) {
      if (isElement(child) && SKIP.has(child.tagName)) {
        out.push(child);
        continue;
      }
      if (isText(child)) {
        const parts = replace(child.value);
        if (parts) {
          out.push(...parts);
          changed = true;
          continue;
        }
        out.push(child);
        continue;
      }
      visit(child);
      out.push(child);
    }

    if (changed) (node as ElementNode).children = out;
  };
  visit(tree);
}

/** Word-boundary matcher that tolerates the term appearing mid-sentence. */
function findSurface(haystack: string, needle: string): number {
  const re = new RegExp(`(^|[^\\w-])(${needle.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(?![\\w-])`, "i");
  const m = re.exec(haystack);
  return m ? m.index + m[1].length : -1;
}

/**
 * Links the first occurrence of each glossary term in the document body. One
 * link per term per page — enough to be useful, not so many it reads as spam.
 */
export function linkGlossaryTerms(tree: Node, currentSlug?: string): string[] {
  const table = lookupTable();
  const used = new Set<string>();

  walkText(tree, (text) => {
    for (const { surface, term } of table) {
      if (used.has(term.id)) continue;
      if (term.seeAlso && term.seeAlso === currentSlug) continue;

      const at = findSurface(text, surface);
      if (at < 0) continue;

      used.add(term.id);
      const before = text.slice(0, at);
      const matched = text.slice(at, at + surface.length);
      const after = text.slice(at + surface.length);

      const link = el(
        "a",
        {
          href: `/glossary/#${term.id}`,
          className: ["term"],
          title: term.definition.slice(0, 140),
        },
        [{ type: "text", value: matched }],
      );

      const out: Node[] = [];
      if (before) out.push({ type: "text", value: before });
      out.push(link);
      if (after) out.push({ type: "text", value: after });
      return out;
    }
    return null;
  });

  return [...used];
}

/**
 * Places a numbered reference marker directly after each cited claim, and
 * reports the sources actually used so the page can render a matching
 * references block.
 */
export function attachCitations(tree: Node): Source[] {
  const table = anchorTable();
  const order: Source[] = [];
  const seen = new Set<string>();

  walkText(tree, (text) => {
    for (const { phrase, source } of table) {
      if (seen.has(source.id)) continue;

      const at = text.indexOf(phrase);
      if (at < 0) continue;

      seen.add(source.id);
      order.push(source);
      const n = order.length;

      const before = text.slice(0, at + phrase.length);
      const after = text.slice(at + phrase.length);

      const marker = el("sup", { className: ["cite"] }, [
        el("a", { href: `#ref-${source.id}`, id: `cite-${source.id}`, "aria-label": `Reference ${n}: ${source.publisher}` }, [
          { type: "text", value: String(n) },
        ]),
      ]);

      const out: Node[] = [{ type: "text", value: before }, marker];
      if (after) out.push({ type: "text", value: after });
      return out;
    }
    return null;
  });

  return order;
}
