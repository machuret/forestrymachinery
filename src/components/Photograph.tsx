import Image from "next/image";
import { photo as lookup, type PhotoKey, type Photo } from "@/lib/media";

interface Props {
  photo: PhotoKey | Photo;
  /** Fixed aspect ratio for the frame, e.g. "16/9". Omit to keep intrinsic. */
  ratio?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Hide the caption strip even when the photo has one. */
  bare?: boolean;
}

function resolve(p: PhotoKey | Photo): Photo {
  return typeof p === "string" ? lookup(p) : p;
}

/**
 * A photograph in an industrial frame: hairline steel border, a hazard tick in
 * the corner, and a monospace caption strip. Cut-out studio shots get a light
 * plate behind them so they do not float on the dark ground.
 */
export function Photograph({ photo, ratio, priority, sizes = "(max-width: 1024px) 100vw, 45rem", className = "", bare }: Props) {
  const p = resolve(photo);

  return (
    <figure className={`group relative border border-steel-700 bg-steel-900 ${className}`}>
      <div
        className={`relative overflow-hidden ${p.cutout ? "bg-gradient-to-b from-[#d3d6ce] to-[#b6bab1] p-6" : ""}`}
        style={ratio ?? (p.cutout ? "4/3" : undefined) ? { aspectRatio: ratio ?? "4/3" } : undefined}
      >
        <Image
          src={p.src}
          alt={p.alt}
          width={p.width}
          height={p.height}
          sizes={sizes}
          priority={priority}
          className={
            p.cutout ? "h-full w-full object-contain" : ratio ? "h-full w-full object-cover" : "h-auto w-full"
          }
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-8 w-8 border-t-[3px] border-l-[3px] border-hazard opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>
      {p.caption && !bare && (
        <figcaption className="flex items-start gap-3 border-t border-steel-700 px-4 py-3">
          <span aria-hidden="true" className="mt-[0.35rem] h-1.5 w-1.5 shrink-0 rotate-45 bg-hazard" />
          <span className="font-mono text-[0.68rem] leading-relaxed tracking-[0.06em] text-concrete uppercase">
            {p.caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
