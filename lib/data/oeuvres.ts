import { etapesData } from "./etapes";

export type OeuvreEtapeRef = {
  etapeSlug: string;
  etapeTitle: string;
  pages?: string;
};

export type Oeuvre = {
  author: string;
  work: string;
  edition?: string;
  presentation?: string;
  /** Étapes où un extrait de cette œuvre est publié sur la fiche. */
  extraits: OeuvreEtapeRef[];
  /** Étapes qui évoquent cette œuvre (avec référence de pages) sans extrait publié à ce jour. */
  referencesSansExtrait: OeuvreEtapeRef[];
};

/**
 * Courtes présentations factuelles, sourcées depuis les contenus déjà
 * vérifiés des fiches étapes et de la page /louis-guilloux — aucun résumé
 * critique n'est ajouté ici, seulement des repères d'édition et de contexte
 * déjà documentés ailleurs sur le site.
 */
const presentations: Record<string, string> = {
  "Louis Guilloux::Le Sang Noir":
    "Roman d'une journée de 1917 dans une ville de l'arrière reconnaissable comme Saint-Brieuc, autour du professeur Cripure.",
  "Louis Guilloux::Dossier Confidentiel":
    "Roman évoquant Saint-Brieuc pendant la Première Guerre mondiale — le lycée transformé en hôpital, le camp de prisonniers de la vallée du Gouédic.",
  "Louis Guilloux::Le Jeu de Patience":
    "Plusieurs chroniques parallèles tissées ensemble, couvrant un demi-siècle d'histoire briochine.",
  "Louis Guilloux::L'Herbe d'oubli":
    "Textes autobiographiques publiés après sa mort, où Guilloux évoque son enfance, le port du Légué et son premier départ pour l'Angleterre.",
  "Louis Guilloux::Souvenirs sur Georges Palante":
    "Livre de souvenirs consacré par Guilloux à son ancien professeur, mort en 1925.",
  "Georges Palante::Essais et aphorismes":
    "Philosophe individualiste et sociologue, professeur au lycée Anatole Le Braz. Auteur, entre autres, de Combat pour l'individu (1903) et Les Antinomies entre l'individu et la société (1912).",
  "Mona Ozouf::Composition française : retour sur une enfance bretonne":
    "Mona Ozouf y évoque son ancienne professeure de français au collège Ernest Renan, Renée Guilloux.",
  "Mona Ozouf::Discours pour l'inauguration de la bibliothèque Renée Guilloux d'Étables":
    "Discours prononcé en 2019 pour l'inauguration de la bibliothèque d'Étables portant le nom de Renée Guilloux.",
  "Albert Camus::Le Premier Homme":
    "Camus y évoque la découverte de la tombe de son père, mort pendant la Première Guerre mondiale, au cimetière Saint-Michel.",
};

/**
 * Étapes qui évoquent une œuvre (avec pages, dans le corpus vérifié) sans
 * qu'un extrait n'ait encore été sélectionné et publié sur la fiche étape.
 */
const referencesSansExtraitData: Array<{
  author: string;
  work: string;
  edition?: string;
  etapeSlug: string;
  pages?: string;
}> = [
  {
    author: "Louis Guilloux",
    work: "Le Jeu de Patience",
    edition: "Gallimard, 1949",
    etapeSlug: "plage-du-valais",
    pages: "258-259",
  },
  {
    author: "Louis Guilloux",
    work: "Le Jeu de Patience",
    edition: "Gallimard, 1949",
    etapeSlug: "tour-de-cesson",
    pages: "264",
  },
  {
    author: "Albert Camus",
    work: "Le Premier Homme",
    edition: "Gallimard, 1994",
    etapeSlug: "cimetiere-saint-michel",
    pages: "28-29",
  },
];

function oeuvreKey(author: string, work: string): string {
  return `${author}::${work}`;
}

function etapeRef(etapeSlug: string, pages?: string): OeuvreEtapeRef | undefined {
  const etape = etapesData.find((e) => e.slug === etapeSlug);
  if (!etape) return undefined;
  return { etapeSlug: etape.slug, etapeTitle: etape.title, pages };
}

export function getOeuvres(): Oeuvre[] {
  const map = new Map<string, Oeuvre>();

  function getOrCreate(author: string, work: string, edition?: string): Oeuvre {
    const k = oeuvreKey(author, work);
    let oeuvre = map.get(k);
    if (!oeuvre) {
      oeuvre = {
        author,
        work,
        edition,
        presentation: presentations[k],
        extraits: [],
        referencesSansExtrait: [],
      };
      map.set(k, oeuvre);
    } else if (!oeuvre.edition && edition) {
      oeuvre.edition = edition;
    }
    return oeuvre;
  }

  for (const etape of etapesData) {
    for (const extract of etape.literaryExtracts ?? []) {
      const oeuvre = getOrCreate(extract.author, extract.work, extract.edition);
      const ref = etapeRef(etape.slug, extract.pages);
      if (ref) oeuvre.extraits.push(ref);
    }
  }

  for (const item of referencesSansExtraitData) {
    const oeuvre = getOrCreate(item.author, item.work, item.edition);
    const ref = etapeRef(item.etapeSlug, item.pages);
    if (ref) oeuvre.referencesSansExtrait.push(ref);
  }

  return Array.from(map.values());
}

export function getOeuvresByAuthor(): { author: string; oeuvres: Oeuvre[] }[] {
  const oeuvres = getOeuvres();
  const authorsOrder = ["Louis Guilloux", "Georges Palante", "Mona Ozouf", "Albert Camus"];
  return authorsOrder
    .map((author) => ({
      author,
      oeuvres: oeuvres.filter((o) => o.author === author),
    }))
    .filter((group) => group.oeuvres.length > 0);
}
