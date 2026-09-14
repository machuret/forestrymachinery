import Image from "next/image";

export function EditorialImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="overflow-hidden border border-steel-700 bg-steel-950">
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 22rem" className="field-image object-cover" />
        <span className="absolute top-3 left-3 bg-steel-950/85 px-2.5 py-1.5 font-mono text-[0.54rem] tracking-[0.14em] text-hazard uppercase backdrop-blur-sm">
          Field context
        </span>
      </div>
      <figcaption className="border-t border-steel-700 px-4 py-3 font-mono text-[0.58rem] leading-relaxed tracking-[0.08em] text-concrete uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
