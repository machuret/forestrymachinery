import { isValidElement, type ReactNode } from "react";

/**
 * Flattens a ReactNode to plain text for structured data.
 *
 * FAQ answers are authored as JSX so they can carry links and typography.
 * Schema.org needs the same content as a string, and emitting anything else —
 * the question, a placeholder — produces markup that misrepresents the page.
 */
export function nodeToText(node: ReactNode): string {
  const out: string[] = [];

  const walk = (n: ReactNode): void => {
    if (n === null || n === undefined || typeof n === "boolean") return;
    if (typeof n === "string" || typeof n === "number") {
      out.push(String(n));
      return;
    }
    if (Array.isArray(n)) {
      n.forEach(walk);
      return;
    }
    if (isValidElement(n)) {
      const props = n.props as { children?: ReactNode };
      walk(props.children);
    }
  };

  walk(node);

  return out
    .join("")
    // Collapse the whitespace JSX introduces between elements and lines.
    .replace(/\s+/g, " ")
    .trim();
}
