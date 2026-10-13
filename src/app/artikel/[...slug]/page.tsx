import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotoReveal, ReadingProgress, Reveal } from "@/components/motion";
import { ArticleGrid } from "@/components/sections";
import { PageHeader } from "@/components/ui";
import {
  articles,
  categories,
  formatDate,
  getArticle,
  readingMinutes,
  type Block,
} from "@/content/articles";
import { photos } from "@/content/images";
import { site } from "@/content/site";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug.join("/"));
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.date,
      images: [{ url: photos[article.cover].src.src }],
    },
  };
}

function Body({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        switch (block.t) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "note":
            return (
              <p key={i} className="note">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className={block.items.length > 20 ? "cols" : undefined}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "table":
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {block.head.map((h) => (
                        <th key={h} scope="col">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.join("|")}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}

export default async function ArtikelPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug.join("/"));
  if (!article) notFound();

  const category = article.categories[0];
  const minutes = readingMinutes(article);
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const isTax = article.categories.includes("keuangan-kita");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.legalName },
  };

  return (
    <article>
      <ReadingProgress />
      <PageHeader
        crumbs={[
          { label: "Ruang Media", href: "/ruang-media" },
          { label: categories[category].label, href: `/ruang-media/${category}` },
        ]}
        title={article.title}
      >
        <p className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/70">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span aria-hidden>·</span>
          <span>{site.name}</span>
          <span aria-hidden>·</span>
          <span>{minutes} menit baca</span>
        </p>
      </PageHeader>

      <div className="wrap max-w-[60rem] py-14 md:py-20">
        <PhotoReveal
          photo={photos[article.cover]}
          className="aspect-[16/9]"
          sizes="(min-width: 960px) 900px, 94vw"
          priority
          delay={0.3}
        />

        <div className="mx-auto mt-12 max-w-[44rem]">
          <Reveal delay={0.35} y={12}>
            <Body blocks={article.body} />
          </Reveal>

          {isTax ? (
            <p className="mt-12 border-t border-line pt-6 text-sm text-muted">
              Artikel ini diterbitkan pada {formatDate(article.date)}. Ketentuan perpajakan dapat berubah;
              pastikan merujuk pada peraturan terbaru sebelum mengambil keputusan.
            </p>
          ) : null}

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm">
            <ul className="flex flex-wrap gap-2">
              {article.categories.map((key) => (
                <li key={key}>
                  <Link
                    href={`/ruang-media/${key}`}
                    className="rounded border border-line px-3 py-1.5 font-medium transition-colors hover:border-brand hover:text-brand"
                  >
                    {categories[key].label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/ruang-media" className="font-semibold text-brand underline-hover">
              ← Semua artikel
            </Link>
          </div>
        </div>
      </div>

      <section className="section bg-mist" aria-labelledby="baca-juga">
        <div className="wrap">
          <h2 id="baca-juga" className="h2">
            Baca juga
          </h2>
          <div className="mt-10">
            <ArticleGrid items={more} />
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
