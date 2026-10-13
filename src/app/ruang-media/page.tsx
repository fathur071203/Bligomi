import type { Metadata } from "next";
import MediaIndex from "@/components/MediaIndex";

export const metadata: Metadata = {
  title: "Ruang Media",
  description: "Berita bisnis, catatan keuangan, dan kabar wirausaha dari Bligomi.",
};

export default function RuangMediaPage() {
  return <MediaIndex />;
}
