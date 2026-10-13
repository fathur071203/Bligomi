import Link from "next/link";
import { Arrow, PageHeader } from "@/components/ui";

export default function NotFound() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: "404" }]}
        title="Halaman tidak ditemukan"
        lead={<p>Alamat yang Anda tuju tidak tersedia atau sudah dipindahkan.</p>}
      >
        <Link href="/" className="btn btn--light">
          Kembali ke Beranda
          <Arrow />
        </Link>
      </PageHeader>
      <div className="h-24" />
    </>
  );
}
