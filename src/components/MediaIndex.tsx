import Link from "next/link";
import { articles, articlesIn, categories, type CategoryKey } from "@/content/articles";
import { Reveal } from "./motion";
import { ArticleCard, ArticleGrid } from "./sections";
import { PageHeader } from "./ui";

export default function MediaIndex({ active }: { active?: CategoryKey }) {
  const list = active ? articlesIn(active) : articles;
  const [featured, ...rest] = list;
  const tabs = [
    { key: undefined, label: "Semua", href: "/ruang-media", count: articles.length },
    ...(Object.keys(categories) as CategoryKey[]).map((key) => ({
      key,
      label: categories[key].label,
      href: `/ruang-media/${key}`,
      count: articlesIn(key).length,
    })),
  ];

  return (
    <>
      <PageHeader
        crumbs={
          active
            ? [{ label: "Ruang Media", href: "/ruang-media" }, { label: categories[active].label }]
            : [{ label: "Ruang Media" }]
        }
        title={active ? categories[active].label : "Ruang Media"}
        lead={
          <p>
            {active
              ? categories[active].blurb
              : "Berita bisnis, catatan keuangan, dan kabar wirausaha dari Bligomi."}
          </p>
        }
      />

      <nav aria-label="Rubrik" className="border-b border-line">
        <ul className="wrap flex gap-x-8 overflow-x-auto">
          {tabs.map((tab) => {
            const current = tab.key === active;
            return (
              <li key={tab.href} className="shrink-0">
                <Link
                  href={tab.href}
                  aria-current={current ? "page" : undefined}
                  className={`-mb-px inline-flex items-center gap-2 border-b-2 py-4 text-[0.95rem] font-semibold transition-colors duration-200 ${
                    current ? "border-brand text-brand" : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {tab.label}
                  <span className="text-xs font-medium tabular-nums opacity-70">{tab.count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="section">
        <div className="wrap">
          {featured ? (
            <Reveal>
              <ArticleCard article={featured} wide />
            </Reveal>
          ) : (
            <p className="lead text-muted">Belum ada artikel di rubrik ini.</p>
          )}

          {rest.length ? (
            <div className="mt-16 border-t border-line pt-16">
              <ArticleGrid items={rest} />
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
