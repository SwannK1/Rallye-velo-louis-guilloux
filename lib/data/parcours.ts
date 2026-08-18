export type Parcours = {
  id: string;
  slug: string;
  name: string;
  distance: string;
  route?: string;
  location?: string;
  description?: string;
  /** Courte accroche éditoriale caractérisant l'ambiance du parcours (identité visuelle matin/après-midi). */
  ambiance?: string;
  /** Id dans lib/data/images.ts — image de couverture pour ce parcours (accueil, hero /parcours/[slug]). */
  coverImageId?: string;
  umapUrl: string;
  etapeSlugs?: string[];
  practicalInfo?: string;
};

export const parcoursData: Parcours[] = [
  {
    id: "matin",
    slug: "matin",
    name: "Parcours du matin",
    distance: "13 km",
    location: "Saint-Brieuc",
    description:
      "Balade dans Saint-Brieuc sur les traces de Louis Guilloux, de la gare à la Villa Rohannec'h.",
    ambiance: "Ville, gare et patrimoine",
    coverImageId: "gare-saint-brieuc-contemporaine",
    umapUrl: "https://umap.openstreetmap.fr/fr/map/cyclo-biblio-matin_1419580",
    etapeSlugs: [
      "gare-de-saint-brieuc",
      "secteur-anatole-le-braz",
      "vallee-du-gouedic",
      "plage-du-valais",
      "tour-de-cesson",
      "port-du-legue",
      "cimetiere-saint-michel",
      "manoir-rohanneach",
    ],
  },
  {
    id: "apres-midi",
    slug: "apres-midi",
    name: "Parcours de l'après-midi",
    distance: "environ 30 km",
    route: "Saint-Brieuc → Hillion → Saint-Brieuc",
    description:
      "De Saint-Brieuc à Hillion sur la Vélomaritime, sur les pas de Georges Palante, ami et maître de Louis Guilloux.",
    ambiance: "Baie, route et horizon",
    coverImageId: "hillion-eglise-contemporaine",
    umapUrl:
      "https://umap.openstreetmap.fr/fr/map/cyclo-biblio-apres-midi_1419657",
    etapeSlugs: [
      "college-renan",
      "hillion",
      "georges-palante",
      "maison-louis-guilloux",
    ],
  },
];

export function getParcoursById(id: string): Parcours | undefined {
  return parcoursData.find((p) => p.id === id);
}
