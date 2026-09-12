import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/media";

/**
 * Supplier logos are supplied as dark artwork on white, so each sits on its own
 * light plate rather than being inverted — an inverted wordmark is no longer the
 * manufacturer's mark.
 */
export function BrandLogo({ slug, href, className = "" }: { slug: string; href?: string; className?: string }) {
  const b = brand(slug);
  if (!b) return null;

  const img = (
    <span className="flex h-14 items-center justify-center bg-[#e9e7e1] px-5 py-3 transition-colors group-hover:bg-white">
      <Image
        src={b.logo}
        alt={`${b.name} logo`}
        width={b.logoWidth}
        height={b.logoHeight}
        sizes="200px"
        className="h-full w-auto object-contain"
      />
    </span>
  );

  if (!href) return <span className={`group inline-block ${className}`}>{img}</span>;

  return (
    <Link href={href} className={`group inline-block ${className}`} aria-label={b.name}>
      {img}
    </Link>
  );
}
