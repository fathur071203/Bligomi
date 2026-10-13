import type { MetadataRoute } from "next";
import { articles, categories } from "@/content/articles";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/tentang-kami", "/tentang-kami/profil-perusahaan", "/keberlanjutan", "/ruang-media"];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}` })),
    ...Object.keys(categories).map((key) => ({ url: `${site.url}/ruang-media/${key}` })),
    ...articles.map((a) => ({ url: `${site.url}/artikel/${a.slug}`, lastModified: a.date })),
  ];
}
