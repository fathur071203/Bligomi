import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MediaIndex from "@/components/MediaIndex";
import { categories, type CategoryKey } from "@/content/articles";

type Props = { params: Promise<{ kategori: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(categories).map((kategori) => ({ kategori }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const category = categories[kategori as CategoryKey];
  if (!category) return {};
  return { title: `${category.label} — Ruang Media`, description: category.blurb };
}

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  if (!(kategori in categories)) notFound();
  return <MediaIndex active={kategori as CategoryKey} />;
}
