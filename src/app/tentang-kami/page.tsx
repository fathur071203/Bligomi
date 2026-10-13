import type { Metadata } from "next";
import { PhotoReveal, Reveal, SplitText } from "@/components/motion";
import { EntityCards } from "@/components/sections";
import { CtaBand, PageHeader, SectionHead } from "@/components/ui";
import { groupValues, welcome } from "@/content/company";
import { photos } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: welcome.paragraphs[0],
};

const pending = <span className="text-muted">Menyusul</span>;

export default function TentangKamiPage() {
  const { phone, whatsapp, email } = site.contact;
  const contactRows = [
    {
      label: "Alamat Perusahaan",
      value: (
        <>
          {site.address.street}
          <br />
          {site.address.region} — {site.address.country}
        </>
      ),
    },
    {
      label: "Telepon / WhatsApp",
      value: phone || whatsapp ? [phone, whatsapp].filter(Boolean).join(" · ") : pending,
    },
    {
      label: "Email Umum",
      value: email ? (
        <a href={`mailto:${email}`} className="underline-hover text-brand">
          {email}
        </a>
      ) : (
        pending
      ),
    },
    {
      label: "Situs Web",
      value: (
        <a href={site.url} className="underline-hover text-brand">
          {site.domain}
        </a>
      ),
    },
  ];

  return (
    <>
      <PageHeader crumbs={[{ label: "Tentang Kami" }]} title={welcome.subtitle} lead={<p>{welcome.paragraphs[0]}</p>} />

      {/* Sambutan */}
      <section className="section" aria-labelledby="sambutan">
        <div className="wrap grid items-start gap-x-16 gap-y-10 lg:grid-cols-2">
          <PhotoReveal
            photo={photos.sawahGunung}
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            delay={0.2}
          />
          <Reveal delay={0.08}>
            <p className="eyebrow">Sambutan</p>
            <SplitText id="sambutan" text={welcome.title} className="h2 mt-3" delay={0.1} />
            <p className="mt-5 text-muted">{welcome.paragraphs[1]}</p>
            <p className="mt-5 text-muted">{welcome.paragraphs[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* Ekosistem */}
      <section className="section bg-mist" aria-labelledby="ekosistem">
        <div className="wrap">
          <SectionHead eyebrow="Ekosistem Group Usaha" title="Dua entitas yang saling menguatkan" id="ekosistem">
            <p>Grup usaha kami terdiri dari dua entitas utama yang saling menguatkan.</p>
          </SectionHead>
          <div className="mt-12">
            <EntityCards />
          </div>
        </div>
      </section>

      {/* Nilai-nilai utama group */}
      <section className="section" aria-labelledby="nilai-group">
        <div className="wrap">
          <SectionHead eyebrow="Group Values" title="Nilai-nilai utama group" id="nilai-group" />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2">
            {groupValues.map((value, i) => (
              <li key={value.title} className="card-line bg-white transition-colors duration-500 hover:bg-mist/60">
                <Reveal delay={(i % 2) * 0.06} className="h-full p-6 lg:p-8">
                  <span className="text-sm font-semibold tabular-nums text-brand">0{i + 1}</span>
                  <h3 className="h3 mt-4">{value.title}</h3>
                  <p className="mt-3 text-muted">{value.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="section scroll-mt-16 bg-mist" aria-labelledby="kontak-judul">
        <div className="wrap grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Pusat Informasi Group</p>
            <SplitText id="kontak-judul" text="Hubungi Kami" className="h2 mt-3" />
            <p className="mt-5 text-muted">{groupValues[3].body}</p>
          </div>
          <Reveal delay={0.15} className="lg:col-span-7">
            <dl className="rounded-md border border-line bg-white px-6 lg:px-8">
            {contactRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid gap-1 py-5 sm:grid-cols-12 sm:gap-6 ${i > 0 ? "border-t border-line" : ""}`}
              >
                <dt className="text-sm text-muted sm:col-span-4 sm:pt-0.5">{row.label}</dt>
                <dd className="font-medium sm:col-span-8">{row.value}</dd>
              </div>
            ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Profil Perusahaan"
        body="Visi, misi, nilai, dan lima pilar strategi PT Bligo Mahia Inovasi."
        href="/tentang-kami/profil-perusahaan"
        label="Baca profil"
      />
    </>
  );
}
