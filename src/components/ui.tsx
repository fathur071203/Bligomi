import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Photo as PhotoData } from "@/content/images";
import { Reveal, SplitText } from "./motion";

export function Arrow() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}

/** Foto persegi dengan sudut halus (dipakai di dalam kartu). `note` menandai foto yang bisa dikira fasilitas perusahaan. */
export function Photo({
  photo,
  className = "",
  sizes = "100vw",
  priority = false,
  note = false,
  zoom = false,
}: {
  photo: PhotoData;
  className?: string;
  sizes?: string;
  priority?: boolean;
  note?: boolean;
  zoom?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden rounded-md bg-mist ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={`object-cover ${zoom ? "transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]" : ""}`}
      />
      {note ? (
        <span className="absolute bottom-2.5 right-2.5 rounded bg-black/55 px-2 py-0.5 text-[0.7rem] font-medium text-white/90">
          Foto ilustrasi
        </span>
      ) : null}
    </div>
  );
}

/** Kepala bagian: label kecil, judul, dan (opsional) pengantar di kolom kanan. */
export function SectionHead({
  eyebrow,
  title,
  children,
  dark = false,
  id,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  dark?: boolean;
  id?: string;
}) {
  return (
    <div className="grid gap-x-12 gap-y-5 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <Reveal y={8}>
          <p className={`eyebrow ${dark ? "text-mint" : ""}`}>{eyebrow}</p>
        </Reveal>
        <SplitText id={id} text={title} className="h2 mt-3" delay={0.05} />
      </div>
      {children ? (
        <Reveal delay={0.2} className={`lg:col-span-5 ${dark ? "text-white/75" : "text-muted"}`}>
          {children}
        </Reveal>
      ) : null}
    </div>
  );
}

export type Crumb = { label: string; href?: string };

/** Kepala halaman dalam: remah roti, judul, pengantar. */
export function PageHeader({
  crumbs,
  title,
  lead,
  children,
}: {
  crumbs: Crumb[];
  title: string;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="bg-forest text-white">
      <div className="wrap pb-14 pt-32 md:pb-20 md:pt-40">
        <Reveal immediate y={8}>
          <nav aria-label="Remah roti" className="text-sm text-white/65">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {[{ label: "Beranda", href: "/" }, ...crumbs].map((item, i) => (
                <li key={item.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden>/</span> : null}
                  {item.href ? (
                    <Link href={item.href} className="underline-hover hover:text-white">
                      {item.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>
        <SplitText as="h1" text={title} delay={0.1} className="h1 mt-6 max-w-4xl" />
        {lead ? (
          <Reveal immediate delay={0.45}>
            <div className="lead mt-6 max-w-2xl text-white/80">{lead}</div>
          </Reveal>
        ) : null}
        {children ? (
          <Reveal immediate delay={0.55} className="mt-9">
            {children}
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}

/** Pita ajakan di akhir halaman. */
export function CtaBand({
  title,
  body,
  href,
  label,
}: {
  title: string;
  body: string;
  href: string;
  label: string;
}) {
  return (
    <section className="bg-brand text-white">
      <div className="wrap flex flex-col gap-8 py-14 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="max-w-2xl">
          <SplitText text={title} className="h2" />
          <Reveal delay={0.15}>
            <p className="lead mt-3 text-white/85">{body}</p>
          </Reveal>
        </div>
        <Reveal delay={0.25} className="shrink-0 self-start md:self-auto">
          <Link href={href} className="btn btn--light">
            {label}
            <Arrow />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
