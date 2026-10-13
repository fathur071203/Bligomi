import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import { CountUp, Line, PhotoReveal, Reveal, SplitText } from "@/components/motion";
import { ArticleGrid, EntityCards, PillarGrid, ValuesGrid } from "@/components/sections";
import { Arrow, CtaBand, SectionHead } from "@/components/ui";
import { articles } from "@/content/articles";
import {
  corporateValuesIntro,
  entities,
  groupValues,
  philosophy,
  pillars,
  pillarsIntro,
  profile,
  welcome,
} from "@/content/company";
import { photos } from "@/content/images";
import { site } from "@/content/site";

const facts: { value: number | string; from?: number; label: string }[] = [
  { value: site.founded, from: 2000, label: "Tahun berdiri" },
  { value: "Boyolali", label: "Jawa Tengah, Indonesia" },
  { value: entities.length, label: "Entitas dalam grup usaha" },
  { value: pillars.length, label: "Pilar strategi perusahaan" },
];

// Empat unsur yang dipadukan dalam ekosistem operasional (Profil Perusahaan).
const focus = [
  "Teknologi produksi terkini",
  "Prinsip kesejahteraan hewan",
  "Efisiensi rantai pasok",
  "Standar higienitas tertinggi",
];

export default function HomePage() {
  const collaboration = groupValues[3];

  return (
    <>
      <HomeHero />

      {/* Fakta singkat */}
      <section aria-label="Fakta singkat" className="border-b border-line">
        <dl className="wrap grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.label}
              delay={i * 0.08}
              className={`flex flex-col-reverse gap-1 py-8 lg:py-10 ${i % 2 ? "pl-6" : ""} ${
                i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
              } ${i > 1 ? "border-t border-line lg:border-t-0" : ""}`}
            >
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="text-[clamp(1.7rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.03em] text-forest">
                {typeof fact.value === "number" ? <CountUp to={fact.value} from={fact.from} /> : fact.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* Tentang */}
      <section className="section" aria-labelledby="tentang">
        <div className="wrap grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal y={8}>
              <p className="eyebrow">Tentang Kami</p>
            </Reveal>
            <SplitText id="tentang" text={welcome.subtitle} className="h2 mt-3" delay={0.05} />
          </div>
          <Reveal className="lg:col-span-7">
            <p className="lead">{welcome.paragraphs[0]}</p>
            <p className="mt-5 text-muted">{welcome.paragraphs[1]}</p>
            <Link href="/tentang-kami" className="link mt-7">
              Selengkapnya tentang kami
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Profil perusahaan */}
      <section className="section bg-mist" aria-labelledby="profil">
        <div className="wrap grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <PhotoReveal
            photo={photos.docAyam}
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            note
          />
          <Reveal delay={0.08}>
            <p className="eyebrow">Profil Perusahaan</p>
            <SplitText id="profil" text="Memperkuat ketahanan pangan nasional" className="h2 mt-3" delay={0.1} />
            <p className="mt-5 text-muted">{profile.overview[0]}</p>
            <ul className="mt-7 grid gap-x-8 gap-y-3 border-t border-line pt-7 sm:grid-cols-2">
              {focus.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[0.98rem] font-medium">
                  <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/tentang-kami/profil-perusahaan" className="btn btn--primary mt-9">
              Baca profil perusahaan
              <Arrow />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Pilar strategi */}
      <section className="section" aria-labelledby="pilar">
        <div className="wrap">
          <SectionHead eyebrow="Pilar Strategi" title="Lima pilar strategi perusahaan" id="pilar">
            <p>{pillarsIntro}</p>
          </SectionHead>
          <div className="mt-12">
            <PillarGrid />
          </div>
        </div>
      </section>

      {/* Filosofi */}
      <section className="section bg-forest text-white" aria-labelledby="filosofi">
        <div className="wrap">
          <div className="grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <Reveal>
              <p className="eyebrow text-mint">Filosofi Perusahaan</p>
              <SplitText id="filosofi" text={philosophy.motto.join(" ")} className="h2 mt-3" delay={0.05} />
              <p className="mt-5 text-white/75">{philosophy.paragraphs[0]}</p>
            </Reveal>
            <PhotoReveal photo={photos.bligoBuah} className="aspect-[4/3]" sizes="(min-width: 1024px) 40vw, 100vw" delay={0.1} />
          </div>
          <Line className="mt-14 h-px bg-white/20" />
          <ol className="grid gap-x-8 gap-y-8 pt-10 md:grid-cols-3">
            {philosophy.steps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={0.15 + i * 0.1}>
                  <span className="text-sm font-semibold tabular-nums text-mint">0{i + 1}</span>
                  <h3 className="h3 mt-3">{step.title}</h3>
                  <p className="mt-3 text-[0.98rem] text-white/70">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ekosistem */}
      <section className="section" aria-labelledby="ekosistem">
        <div className="wrap">
          <SectionHead eyebrow="Ekosistem Group Usaha" title="Dua entitas yang saling menguatkan" id="ekosistem">
            <p>{welcome.wheel}</p>
          </SectionHead>
          <div className="mt-12">
            <EntityCards />
          </div>
        </div>
      </section>

      {/* Nilai */}
      <section className="section bg-mist" aria-labelledby="nilai">
        <div className="wrap">
          <SectionHead eyebrow="Nilai-Nilai Perusahaan" title="Barokah, Menguntungkan, Sejahtera Bersama" id="nilai">
            <p>{corporateValuesIntro}</p>
          </SectionHead>
          <div className="mt-12">
            <ValuesGrid />
          </div>
        </div>
      </section>

      {/* Ruang Media */}
      <section className="section" aria-labelledby="media">
        <div className="wrap">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Ruang Media</p>
              <SplitText id="media" text="Artikel terbaru" className="h2 mt-3" />
            </div>
            <Link href="/ruang-media" className="btn btn--outline">
              Semua artikel
              <Arrow />
            </Link>
          </div>
          <div className="mt-12">
            <ArticleGrid items={articles.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CtaBand
        title={collaboration.title}
        body={collaboration.body}
        href="/tentang-kami#kontak"
        label="Hubungi Kami"
      />
    </>
  );
}
