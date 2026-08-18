import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { etapesData } from "@/lib/data/etapes";

const staticPaths = [
  "/",
  "/programme",
  "/parcours",
  "/parcours/matin",
  "/parcours/apres-midi",
  "/etapes",
  "/louis-guilloux",
  "/louis-guilloux/chronologie",
  "/lectures",
  "/livret",
  "/infos-pratiques",
  "/partenaires",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const etapePaths = etapesData.map((etape) => `/etapes/${etape.slug}`);

  return [...staticPaths, ...etapePaths].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));
}
