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
  // Horodatage unique de génération du sitemap : le site est entièrement
  // statique (données en dur dans lib/data/*), donc la date de build est le
  // seul signal de fraîcheur réel — pas de date par page sans source fiable.
  const lastModified = new Date();

  return [...staticPaths, ...etapePaths].map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
  }));
}
