import { SITE_NAME, SITE_URL } from "@/lib/seo";

// Données structurées schema.org.
// N'inclure que ce qui est réellement confirmé par le corpus de préparation
// du rallye (lib/data/*). Ne jamais inventer prix, inscription, disponibilité
// ou organisateur non attesté.

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Rallye vélo littéraire sur les traces de Louis Guilloux à Saint-Brieuc, le 20 septembre 2026.",
    inLanguage: "fr-FR",
  };
}

export function eventJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: SITE_NAME,
    startDate: "2026-09-20",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description:
      "Rallye à vélo littéraire sur les traces de Louis Guilloux à Saint-Brieuc : deux parcours, des étapes patrimoniales et des extraits lus en chemin.",
    location: {
      "@type": "Place",
      name: "Saint-Brieuc",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Saint-Brieuc",
        addressCountry: "FR",
      },
    },
    image: [`${SITE_URL}/images/lieux/tour-cesson-contemporaine.jpg`],
    url: SITE_URL,
  };
}

export type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  const withHome: BreadcrumbItem[] = [{ name: "Accueil", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: withHome.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
