import Link from "next/link";

const PATHS = [
  { step: "01", label: "Fell", note: "Control standing timber", href: "/tree-shears-guide/", tool: "Shear" },
  { step: "02", label: "Reduce", note: "Process in place", href: "/forestry-mulcher-guide/", tool: "Mulcher" },
  { step: "03", label: "Handle", note: "Sort and load", href: "/log-grab-guide/", tool: "Grab" },
  { step: "04", label: "Finish", note: "Prepare the ground", href: "/tillage-guide/", tool: "Tillage" },
];

export function JobPath() {
  return (
    <div className="overflow-hidden border border-steel-700 bg-steel-950/80">
      <div className="grid gap-px bg-steel-700 sm:grid-cols-2 lg:grid-cols-4">
        {PATHS.map((item, index) => (
          <Link key={item.href} href={item.href} className="group relative bg-steel-900 p-6 transition-colors hover:bg-steel-850">
            {index < PATHS.length - 1 && (
              <span aria-hidden="true" className="absolute top-1/2 -right-2 z-10 hidden h-4 w-4 rotate-45 border-t border-r border-steel-600 bg-steel-900 lg:block" />
            )}
            <div className="flex items-center justify-between">
              <span className="font-mono text-[0.65rem] tracking-[0.18em] text-hazard">{item.step}</span>
              <span className="rounded-full border border-moss-500/30 bg-moss-500/10 px-2.5 py-1 font-mono text-[0.58rem] tracking-[0.12em] text-moss-400 uppercase">{item.tool}</span>
            </div>
            <p className="display mt-8 text-2xl text-bone group-hover:text-hazard">{item.label}</p>
            <p className="mt-2 text-sm text-concrete">{item.note}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
