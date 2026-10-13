import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui";
import { photos } from "@/content/images";

export const metadata: Metadata = {
  title: "Kredit Foto",
  description: "Sumber dan lisensi foto ilustrasi yang digunakan di situs ini.",
};

export default function KreditFotoPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "Kredit Foto" }]}
        title="Kredit Foto"
        lead={
          <p>
            Foto di situs ini adalah foto ilustrasi berlisensi terbuka dari Wikimedia Commons, bukan
            dokumentasi fasilitas perusahaan. Beberapa foto dipotong menyesuaikan tata letak.
          </p>
        }
      />
      <section className="section">
        <ul className="wrap grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(photos).map(([key, photo]) => (
            <li key={key} className="flex gap-4 border-t border-line pt-5">
              <Image
                src={photo.src}
                alt={photo.alt}
                sizes="88px"
                placeholder="blur"
                className="h-[4.5rem] w-[5.5rem] shrink-0 rounded object-cover"
              />
              <div className="min-w-0 text-sm leading-snug">
                <p className="font-semibold">{photo.credit.title}</p>
                <p className="mt-1 text-muted">
                  {photo.credit.author} · {photo.credit.license}
                </p>
                <a
                  href={photo.credit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-hover mt-1.5 inline-block font-medium text-brand"
                >
                  Sumber di Wikimedia Commons
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
