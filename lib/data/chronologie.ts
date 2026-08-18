// Repères chronologiques — Louis Guilloux, Georges Palante, Renée Guilloux.
// Seules des dates certaines, attestées dans le corpus de préparation du parcours,
// figurent ici. Aucune date n'est déduite ou estimée : voir sourceDocument/sourceNote.

export type ChronologyCategory =
  | "biographie"
  | "oeuvre"
  | "rencontre"
  | "historique"
  | "posterite";

export type ChronologyEntry = {
  id: string;
  year: number;
  yearLabel?: string;
  title: string;
  description: string;
  category: ChronologyCategory;
  sourceNote: string;
  sourceDocument?: string;
  etapeSlug?: string;
  highlight?: boolean;
  /** Référence optionnelle vers lib/data/images.ts — illustration ponctuelle, pas systématique. */
  imageId?: string;
};

export const chronologieData: ChronologyEntry[] = [
  {
    id: "palante-naissance",
    year: 1862,
    title: "Naissance de Georges Palante",
    description: "Georges Palante naît à Blangy-les-Arras, de parents belges.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "palante-agregation",
    year: 1888,
    title: "Palante reçu à l'agrégation",
    description:
      "Après plusieurs postes (Châteauroux, Valenciennes, La Rochelle, Niort), Georges Palante demande à revenir s'installer définitivement à Saint-Brieuc dix ans plus tard.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "renee-naissance",
    year: 1895,
    title: "Naissance de Renée Guilloux",
    description:
      "Renée Tricoire naît à Toulouse, route de Castres, fille d'une aristocrate occitane et d'un tailleur de pierres socialiste.",
    category: "biographie",
    sourceNote: "Discours de Frédérick Laurent, petit-fils de Louis et Renée Guilloux",
  },
  {
    id: "palante-combat-individu",
    year: 1903,
    title: "« Combat pour l'individu »",
    description:
      "Georges Palante publie cet essai qui analyse l'organisation de la société industrielle, commerçante, administrative et familiale de son temps.",
    category: "oeuvre",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "palante-maison-hillion",
    year: 1907,
    title: "Palante fait construire sa maison à Hillion",
    description:
      "Il s'y rend chaque année pendant les vacances scolaires, au lieu-dit La Grandville.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
    etapeSlug: "hillion",
    highlight: true,
    imageId: "villa-georges-palante-hillion",
  },
  {
    id: "guilloux-lycee",
    year: 1912,
    title: "Louis Guilloux entre au lycée",
    description:
      "Il entre au Lycée Anatole Le Braz, où enseigne le philosophe Georges Palante.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
    etapeSlug: "secteur-anatole-le-braz",
    highlight: true,
  },
  {
    id: "palante-antinomies",
    year: 1912,
    title: "« Les antinomies entre l'individu et la société »",
    description:
      "Georges Palante publie cet ouvrage, sujet d'une thèse qu'il n'a pu soutenir en Sorbonne la même année.",
    category: "oeuvre",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "guilloux-depart-angleterre",
    year: 1914,
    title: "Départ pour l'Angleterre",
    description:
      "À quatorze ans, Louis Guilloux embarque au port du Légué, invité par son oncle Will en Angleterre.",
    category: "biographie",
    sourceNote:
      "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; L'Herbe d'oubli, Gallimard 1984",
    etapeSlug: "port-du-legue",
    highlight: true,
    imageId: "port-legue-ancienne",
  },
  {
    id: "guilloux-palante-rencontre",
    year: 1916,
    title: "Rencontre avec Georges Palante",
    description:
      "Louis Guilloux rencontre Georges Palante, professeur de philosophie déterminant pour sa formation intellectuelle.",
    category: "rencontre",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
    etapeSlug: "georges-palante",
    highlight: true,
  },
  {
    id: "mutineries-gare",
    year: 1917,
    title: "Mutineries à la gare de Saint-Brieuc",
    description:
      "Des soldats mutinés transitent par la gare ; une foule de civils tente de les accompagner jusqu'aux quais. Louis Guilloux transposera cette scène dans Le Sang Noir.",
    category: "historique",
    sourceNote:
      "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; Le Sang Noir, Gallimard 1935",
    etapeSlug: "gare-de-saint-brieuc",
    highlight: true,
  },
  {
    id: "guilloux-palante-rupture",
    year: 1921,
    title: "Rupture avec Georges Palante",
    description:
      "Leur amitié prend fin après un différend, lorsque Louis Guilloux publie une nouvelle inspirée des confidences de Palante.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "guilloux-indesirable",
    year: 1923,
    title: "« L'Indésirable »",
    description:
      "Louis Guilloux écrit son premier roman, resté inédit pendant plusieurs décennies.",
    category: "oeuvre",
    sourceNote: "Discours de Frédérick Laurent, petit-fils de Louis et Renée Guilloux",
  },
  {
    id: "palante-mort",
    year: 1925,
    yearLabel: "août 1925",
    title: "Mort de Georges Palante",
    description: "Georges Palante se donne la mort à Hillion.",
    category: "biographie",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
    etapeSlug: "hillion",
    highlight: true,
  },
  {
    id: "dossier-confidentiel",
    year: 1930,
    title: "« Dossier Confidentiel »",
    description:
      "Publication chez Grasset (Les Cahiers Rouges) — trois adolescents briochins pendant la Grande Guerre.",
    category: "oeuvre",
    sourceNote: "textes stage.docx",
  },
  {
    id: "yvonne-naissance",
    year: 1932,
    title: "Naissance d'Yvonne Guilloux",
    description:
      "La fille de Louis et Renée Guilloux naît dans leur maison de la rue Lavoisier, à Saint-Brieuc.",
    category: "biographie",
    sourceNote: "Discours de Frédérick Laurent, petit-fils de Louis et Renée Guilloux",
    etapeSlug: "maison-louis-guilloux",
  },
  {
    id: "sang-noir",
    year: 1935,
    title: "« Le Sang Noir »",
    description:
      "Publication chez Gallimard du roman le plus célèbre de Louis Guilloux, dédié à Renée Guilloux.",
    category: "oeuvre",
    sourceNote: "textes stage.docx ; discours de Frédérick Laurent",
    highlight: true,
  },
  {
    id: "renee-madeleine",
    year: 1942,
    title: "Renée Guilloux et Madeleine Tourillon",
    description:
      "Sous l'Occupation, Renée Guilloux rencontre, rue Lavoisier, la jeune Madeleine Tourillon, qu'elle aidera à devenir couturière puis professeure de couture.",
    category: "biographie",
    sourceNote: "Discours de Frédérick Laurent, petit-fils de Louis et Renée Guilloux",
    etapeSlug: "maison-louis-guilloux",
  },
  {
    id: "jeu-de-patience",
    year: 1949,
    title: "« Le Jeu de Patience »",
    description:
      "Publication chez Gallimard — plusieurs chroniques parallèles couvrant un demi-siècle d'histoire briochine.",
    category: "oeuvre",
    sourceNote: "textes stage.docx",
    highlight: true,
  },
  {
    id: "camus-palante",
    year: 1951,
    title: "Camus cite Georges Palante",
    description:
      "Albert Camus cite Georges Palante dans L'Homme révolté.",
    category: "posterite",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "herbe-oubli",
    year: 1984,
    title: "« L'Herbe d'oubli »",
    description:
      "Publication posthume chez Gallimard des textes autobiographiques de Louis Guilloux.",
    category: "oeuvre",
    sourceNote: "textes stage.docx",
    highlight: true,
  },
  {
    id: "colloque-onfray",
    year: 1990,
    title: "Colloque Georges Palante à Saint-Brieuc",
    description:
      "Michel Onfray dirige un colloque sur les écrits de Georges Palante, qui inspirera son essai Georges Palante, essai sur un nietzschéen de gauche.",
    category: "posterite",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "site-stephane-beau",
    year: 2001,
    title: "Un site consacré à Georges Palante",
    description: "Stéphane Beau consacre un site internet à Georges Palante.",
    category: "posterite",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
  {
    id: "bibliotheque-renee-guilloux",
    year: 2019,
    title: "Bibliothèque Renée Guilloux",
    description:
      "Inauguration à Étables-sur-Mer de la bibliothèque municipale portant le nom de Renée Guilloux, en présence de Mona Ozouf.",
    category: "posterite",
    sourceNote: "Discours de Frédérick Laurent ; discours de Mona Ozouf",
    etapeSlug: "college-renan",
  },
  {
    id: "becherel-2024",
    year: 2024,
    yearLabel: "fin août 2024",
    title: "« Georges Palante ou le combat pour l'individu »",
    description:
      "Stéphane Beau présente son livre sur Georges Palante à Bécherel.",
    category: "posterite",
    sourceNote: "Corpus de préparation du parcours",
    sourceDocument: "palanteV6.docx",
  },
];

export function getChronologieSorted(): ChronologyEntry[] {
  return [...chronologieData].sort((a, b) => a.year - b.year);
}

export function getChronologieHighlights(): ChronologyEntry[] {
  return getChronologieSorted().filter((entry) => entry.highlight);
}
