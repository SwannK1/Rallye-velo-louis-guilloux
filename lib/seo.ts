import type { Metadata } from "next";

export const SITE_URL = "https://randonnee-velo-louis-guilloux.vercel.app";
export const SITE_NAME = "Randonnée vélo Louis Guilloux";

type SeoImage = { url: string; alt: string };

const defaultImage: SeoImage = {
  url: "/images/lieux/tour-cesson-contemporaine.jpg",
  alt: "La tour de Cesson et le port du Légué, à Saint-Brieuc",
};

/**
 * Champs communs (canonical, Open Graph, Twitter card) partagés par toutes
 * les pages publiques. Le titre reste géré page par page pour profiter du
 * `title.template` défini dans le layout racine.
 */
export function pageMetadata({
  description,
  path,
  ogTitle,
  image = defaultImage,
}: {
  description: string;
  path: string;
  ogTitle: string;
  image?: SeoImage;
}): Metadata {
  return {
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: "fr_FR",
      type: "website",
      images: [{ url: image.url, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image.url],
    },
  };
}
