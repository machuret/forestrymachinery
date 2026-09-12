import Link from "next/link";
import { CategoryGrid } from "@/components/CategoryGrid";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-[88rem] px-4 py-24 sm:px-6 sm:py-32 lg:px-10">
      <p className="eyebrow">Error 404</p>
      <h1 className="display mt-5 max-w-3xl text-[2.5rem] leading-[0.95] text-bone sm:text-6xl">
        That page is not in the yard.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-concrete">
        The link you followed does not match any guide in this cluster. Start from the pillar guide, or pick a category
        below.
      </p>
      <Link
        href="/forestry-machinery-guide/"
        className="mt-8 inline-flex items-center gap-2 bg-hazard px-7 py-4 font-mono text-[0.72rem] font-semibold tracking-[0.16em] text-steel-950 uppercase transition-colors hover:bg-moss-400"
      >
        Go to the full guide →
      </Link>
      <div className="mt-16">
        <CategoryGrid />
      </div>
    </section>
  );
}
