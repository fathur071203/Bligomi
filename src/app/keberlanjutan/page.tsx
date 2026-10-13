import type { Metadata } from "next";
import { PhotoReveal, Reveal, SplitText } from "@/components/motion";
import { CtaBand, PageHeader, Photo, SectionHead } from "@/components/ui";
import { entities, foundationPillars, groupValues, welcome } from "@/content/company";
import { photos } from "@/content/images";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Keberlanjutan",
  description: `${site.sustainabilityTagline}. ${entities[1].body}`,
};

const pillarPhoto = [photos.gotongRoyong, photos.tanamPadi, photos.desaSelo];

export default function KeberlanjutanPage() {
  const foundation = entities[1];
  const governance = groupValues[1];

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Keberlanjutan" }]}
        title={site.sustainabilityTagline}
        lead={<p>{foundation.body}</p>}
      />

      {/* Bligo Foundation */}
      <section className="section" aria-labelledby="yayasan">
        <div className="wrap grid items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{foundation.role}</p>
            <SplitText id="yayasan" text={foundation.name} className="h2 mt-3" delay={0.1} />
            <p className="mt-1 text-muted">{site.foundationLegal}</p>
            <p className="lead mt-6">{welcome.paragraphs[2]}</p>
            <p className="mt-5 text-muted">{welcome.wheel}</p>
          </Reveal>
          <PhotoReveal
            photo={photos.penggembalaItik}
            className="aspect-[4/3]"
            sizes="(min-width: 1024px) 40vw, 100vw"
            priority
            delay={0.2}
          />
        </div>
      </section>

      {/* Tiga pilar */}
      <section className="section bg-mist" aria-labelledby="tiga-pilar">
        <div className="wrap">
          <SectionHead eyebrow="Tiga Pilar Utama" title="Insan, masyarakat, dan lingkungan" id="tiga-pilar" />
          <ol className="mt-12 space-y-6">
            {foundationPillars.map((pillar, i) => (
              <li key={pillar.title}>
                <Reveal className="group grid overflow-hidden rounded-md border border-line bg-white transition-shadow duration-500 hover:shadow-xl hover:shadow-forest/[0.07] md:grid-cols-2">
                  <Photo
                    zoom
                    photo={pillarPhoto[i]}
                    className={`aspect-[16/10] rounded-none md:aspect-auto md:min-h-[20rem] ${i % 2 ? "md:order-2" : ""}`}
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                  <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                    <span className="text-sm font-semibold tabular-nums text-brand">Pilar 0{i + 1}</span>
                    <h3 className="mt-3 text-[clamp(1.4rem,2.1vw,1.85rem)] font-semibold leading-tight tracking-[-0.02em]">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{pillar.verb}</p>
                    <p className="mt-5 text-muted">{pillar.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Tata kelola */}
      <section className="section" aria-labelledby="tata-kelola">
        <div className="wrap grid gap-x-16 gap-y-6 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Tata Kelola Program</p>
            <SplitText id="tata-kelola" text={governance.title} className="h2 mt-3" />
          </div>
          <SplitText
            as="p"
            text={governance.body}
            delay={0.15}
            className="text-[clamp(1.3rem,2vw,1.75rem)] font-medium leading-[1.35] tracking-[-0.015em] text-forest lg:col-span-8"
          />
        </div>
      </section>

      <CtaBand
        title={groupValues[3].title}
        body={groupValues[3].body}
        href="/tentang-kami#kontak"
        label="Jalin kolaborasi"
      />
    </>
  );
}
