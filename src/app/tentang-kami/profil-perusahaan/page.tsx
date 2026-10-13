import type { Metadata } from "next";
import { Line, PhotoReveal, Reveal, SplitText } from "@/components/motion";
import { ValuesGrid } from "@/components/sections";
import { CtaBand, PageHeader, SectionHead } from "@/components/ui";
import {
  corporateValuesIntro,
  missionIntro,
  missions,
  philosophy,
  pillars,
  pillarsIntro,
  profile,
  vision,
} from "@/content/company";
import { photos } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Profil Perusahaan",
  description: profile.overview[0],
};

// Empat unsur yang dipadukan dalam ekosistem operasional (paragraf kedua profil).
const chain = [
  "Teknologi produksi terkini",
  "Prinsip kesejahteraan hewan",
  "Efisiensi rantai pasok",
  "Standar higienitas tertinggi",
];

const summary = [
  { label: "Nama perusahaan", value: site.legalName },
  { label: "Tahun berdiri", value: String(site.founded) },
  { label: "Bidang usaha", value: "Peternakan modern dan industri pendukung kebutuhan pokok terintegrasi" },
  { label: "Lokasi", value: `${site.address.region}, ${site.address.country}` },
];

export default function ProfilPerusahaanPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Tentang Kami", href: "/tentang-kami" }, { label: "Profil Perusahaan" }]}
        title={site.legalName}
        lead={<p>{site.tagline}.</p>}
      />

      {/* Sekilas */}
      <section className="section" aria-labelledby="sekilas">
        <div className="wrap grid gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="eyebrow">Sekilas Perusahaan</p>
            <SplitText id="sekilas" text="Memperkuat ketahanan pangan nasional" className="h2 mt-3" delay={0.1} />
            <p className="lead mt-6">{profile.overview[0]}</p>
            <p className="mt-5 text-muted">{profile.overview[1]}</p>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5">
            <dl className="rounded-md border border-line px-6 lg:px-7">
              {summary.map((row, i) => (
                <div key={row.label} className={`py-5 ${i > 0 ? "border-t border-line" : ""}`}>
                  <dt className="text-sm text-muted">{row.label}</dt>
                  <dd className="mt-1 font-semibold">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="wrap mt-14">
          <PhotoReveal
            photo={photos.kandangModern}
            className="aspect-[4/3] md:aspect-[21/9]"
            sizes="(min-width: 1280px) 1200px, 94vw"
            priority
            note
          />
        </div>

        {/* Hulu ke hilir */}
        <div className="wrap mt-14">
          <h3 className="h3">Ekosistem operasional dari hulu ke hilir</h3>
          <ol className="mt-6 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {chain.map((item, i) => (
              <li key={item} className="card-line bg-white transition-colors duration-500 hover:bg-mist/60">
                <Reveal delay={i * 0.08} className="p-6">
                  <span className="text-sm font-semibold tabular-nums text-brand">0{i + 1}</span>
                  <p className="mt-3 font-semibold leading-snug">{item}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Filosofi */}
      <section className="section bg-forest text-white" aria-labelledby="filosofi">
        <div className="wrap grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-mint">Filosofi Perusahaan</p>
            <SplitText id="filosofi" text={philosophy.motto.join(" ")} className="h2 mt-3" delay={0.05} />
            <p className="mt-6 text-white/80">{philosophy.paragraphs[0]}</p>
            <p className="mt-5 text-white/80">{philosophy.paragraphs[1]}</p>
          </Reveal>
          <div>
            <PhotoReveal
              photo={photos.bligoBuah}
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 40vw, 100vw"
              delay={0.1}
            />
            <p className="mt-3 text-sm text-white/55">Buah bligo (Benincasa hispida).</p>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="section" aria-labelledby="visi">
        <div className="wrap">
          <div className="grid gap-x-16 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">Visi</p>
            </div>
            <SplitText
              as="p"
              id="visi"
              text={vision}
              className="text-[clamp(1.4rem,2.4vw,2.1rem)] font-medium leading-[1.3] tracking-[-0.02em] text-forest lg:col-span-9"
            />
          </div>

          <Line className="mt-16 h-px bg-line" />
          <div className="grid gap-x-16 gap-y-6 pt-16 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="eyebrow">Misi</p>
            </div>
            <div className="lg:col-span-9">
              <p className="lead text-muted">{missionIntro}</p>
              <ol className="mt-10 grid gap-x-8 gap-y-8 md:grid-cols-3">
                {missions.map((mission, i) => (
                  <li key={mission.title}>
                    <Line className="h-0.5 bg-brand" delay={i * 0.12} />
                    <Reveal delay={0.15 + i * 0.1} className="pt-5">
                      <span className="text-sm font-semibold tabular-nums text-brand">0{i + 1}</span>
                      <h3 className="h3 mt-3">{mission.title}</h3>
                      <p className="mt-3 text-[0.98rem] text-muted">{mission.body}</p>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>
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

      {/* Pilar strategi */}
      <section className="section" aria-labelledby="pilar">
        <div className="wrap">
          <SectionHead eyebrow="Pilar Strategi Perusahaan" title="Lima pilar strategi" id="pilar">
            <p>{pillarsIntro}</p>
          </SectionHead>
          <ol className="mt-12 border-b border-line">
            {pillars.map((pillar, i) => (
              <li key={pillar.title}>
                <Line className="h-px bg-line" />
                <Reveal className="grid gap-x-8 gap-y-3 py-7 md:grid-cols-12 md:py-8">
                  <span className="text-sm font-semibold tabular-nums text-brand md:col-span-1 md:pt-1">0{i + 1}</span>
                  <div className="md:col-span-5">
                    <h3 className="h3">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-muted">{pillar.en}</p>
                  </div>
                  <p className="text-muted md:col-span-6">{pillar.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Keberlanjutan"
        body={`${site.sustainabilityTagline}.`}
        href="/keberlanjutan"
        label="Lihat komitmen kami"
      />
    </>
  );
}
