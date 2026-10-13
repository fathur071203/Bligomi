import Link from "next/link";
import { categories, formatDate, type Article } from "@/content/articles";
import { corporateValues, entities, pillars } from "@/content/company";
import { photos } from "@/content/images";
import { Line, Reveal } from "./motion";
import { Arrow, Photo } from "./ui";

const entityPhoto = { pt: photos.kandangModern, foundation: photos.gotongRoyong } as const;

/** Dua entitas grup sebagai kartu sejajar. */
export function EntityCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      {entities.map((entity, i) => (
        <Reveal key={entity.key} delay={i * 0.08}>
          <Link
            href={entity.href}
            className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-white transition-[border-color,box-shadow,transform] duration-500 ease-out hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl hover:shadow-forest/[0.08]"
          >
            <Photo
              photo={entityPhoto[entity.key]}
              className="aspect-[16/9] rounded-none"
              sizes="(min-width: 768px) 40vw, 100vw"
              note={entity.key === "pt"}
              zoom
            />
            <div className="flex flex-1 flex-col p-6 lg:p-8">
              <p className="eyebrow">{entity.role}</p>
              <h3 className="h3 mt-3 text-[1.5rem]">{entity.name}</h3>
              {"legal" in entity ? <p className="mt-1 text-sm text-muted">{entity.legal}</p> : null}
              <p className="mt-4 text-muted">{entity.body}</p>
              <span className="link mt-auto pt-6">
                {entity.cta}
                <Arrow />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}

/** Lima pilar strategi dalam kisi bergaris tipis. */
export function PillarGrid() {
  return (
    <ol className="grid overflow-hidden rounded-md border border-line bg-line gap-px sm:grid-cols-2 lg:grid-cols-3">
      {pillars.map((pillar, i) => (
        <li key={pillar.title} className="card-line bg-white transition-colors duration-500 hover:bg-mist/60">
          <Reveal delay={(i % 3) * 0.06} className="flex h-full flex-col p-6 lg:p-8">
            <span className="text-sm font-semibold tabular-nums text-brand">0{i + 1}</span>
            <h3 className="h3 mt-5">{pillar.title}</h3>
            <p className="mt-1 text-sm text-muted">{pillar.en}</p>
            <p className="mt-4 text-[0.98rem] text-muted">{pillar.body}</p>
          </Reveal>
        </li>
      ))}
      <li className="bg-forest text-white transition-colors duration-500 hover:bg-brand-dark">
        <Link href="/tentang-kami/profil-perusahaan" className="group flex h-full flex-col justify-between gap-10 p-6 lg:p-8">
          <p className="h3">Visi, misi, dan nilai perusahaan selengkapnya</p>
          <span className="link text-mint">
            Profil Perusahaan
            <Arrow />
          </span>
        </Link>
      </li>
    </ol>
  );
}

/** Tiga nilai inti perusahaan. */
export function ValuesGrid() {
  return (
    <ol className="grid gap-x-8 gap-y-10 md:grid-cols-3">
      {corporateValues.map((value, i) => (
        <li key={value.title}>
          <Line className="h-0.5 bg-brand" delay={i * 0.12} />
          <Reveal delay={0.15 + i * 0.1} className="pt-6">
            <span className="text-sm font-semibold tabular-nums text-brand">0{i + 1}</span>
            <h3 className="mt-3 text-[1.6rem] font-semibold leading-tight tracking-[-0.02em]">{value.title}</h3>
            <p className="mt-1 text-sm text-muted">{value.en}</p>
            <p className="mt-4 text-[0.98rem] text-muted">{value.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function ArticleCard({ article, wide = false }: { article: Article; wide?: boolean }) {
  return (
    <Link
      href={`/artikel/${article.slug}`}
      className={`group flex h-full flex-col gap-5 ${wide ? "md:grid md:grid-cols-12 md:items-center md:gap-10" : ""}`}
    >
      <Photo
        photo={photos[article.cover]}
        className={wide ? "aspect-[16/10] md:col-span-7" : "aspect-[16/10]"}
        sizes={wide ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"}
        priority={wide}
        zoom
      />
      <div className={wide ? "md:col-span-5" : ""}>
        <p className="flex flex-wrap items-center gap-x-3 text-sm text-muted">
          <span className="font-semibold text-brand">{categories[article.categories[0]].label}</span>
          <span aria-hidden>·</span>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
        </p>
        <h3
          className={`mt-2.5 font-semibold tracking-[-0.02em] transition-colors duration-200 group-hover:text-brand ${
            wide ? "h2" : "text-[1.3rem] leading-snug"
          }`}
        >
          {article.title}
        </h3>
        <p className={`mt-3 text-muted ${wide ? "lead" : "text-[0.98rem]"}`}>{article.excerpt}</p>
        {wide ? (
          <span className="link mt-6">
            Baca artikel
            <Arrow />
          </span>
        ) : null}
      </div>
    </Link>
  );
}

export function ArticleGrid({ items }: { items: Article[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((article, i) => (
        <li key={article.slug}>
          <Reveal delay={(i % 3) * 0.06} className="h-full">
            <ArticleCard article={article} />
          </Reveal>
        </li>
      ))}
    </ul>
  );
}
