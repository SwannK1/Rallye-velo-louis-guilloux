// Partenaires réellement documentés du Rallye Vélo Louis Guilloux.
// Ne jamais ajouter une institution simplement citée comme source dans le corpus :
// seul un soutien ou une collaboration explicitement attestée qualifie un partenaire.

export type PartenaireLogo = {
  fileName: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
  sourceUrl: string;
};

export type Partenaire = {
  id: string;
  name: string;
  role: string;
  url?: string;
  sourceNote: string;
  logo?: PartenaireLogo;
};

export const partenairesData: Partenaire[] = [
  {
    id: "bibliotheque-la-meaugon",
    name: "Bibliothèque de La Méaugon",
    role: "Partenaire du Rallye Vélo Louis Guilloux, mentionnée sur l'affiche officielle du projet.",
    url: "https://www.lameaugon.fr/Rallye-velo-louis-guilloux_fiche_1121.html",
    sourceNote:
      "Affiche officielle du Rallye Vélo Louis Guilloux (livret, page 1) ; un article dédié au rallye est publié sur le site de la commune de La Méaugon.",
    logo: {
      fileName: "bibliotheque-la-meaugon.webp",
      alt: "Blason de la commune de La Méaugon",
      width: 320,
      height: 443,
      credit:
        "Blason officiel de la commune, récupéré sur lameaugon.fr le 19 août 2026 (la bibliothèque, municipale, n'a pas de logo distinct).",
      sourceUrl: "https://www.lameaugon.fr/",
    },
  },
  {
    id: "bibliotheque-cotes-darmor",
    name: "Bibliothèque des Côtes-d'Armor",
    role: "Partenaire du Rallye Vélo Louis Guilloux, mentionnée sur l'affiche officielle du projet.",
    url: "https://bca.cotesdarmor.fr/",
    sourceNote: "Affiche officielle du Rallye Vélo Louis Guilloux (livret, page 1).",
    logo: {
      fileName: "bibliotheque-cotes-darmor.png",
      alt: "Logo de la Bibliothèque des Côtes-d'Armor",
      width: 306,
      height: 45,
      credit: "Logo officiel, récupéré sur bca.cotesdarmor.fr le 19 août 2026.",
      sourceUrl: "https://bca.cotesdarmor.fr/images/habillage/bm_BCA_300.png",
    },
  },
  {
    id: "reseau-mediatheques-baie",
    name: "Réseau des Médiathèques de la Baie",
    role: "Partenaire du Rallye Vélo Louis Guilloux, mentionné sur l'affiche officielle du projet.",
    url: "https://www.mediathequesdelabaie.fr/",
    sourceNote: "Affiche officielle du Rallye Vélo Louis Guilloux (livret, page 1).",
    logo: {
      fileName: "reseau-mediatheques-baie.gif",
      alt: "Logo des Médiathèques de la Baie",
      width: 250,
      height: 150,
      credit: "Logo officiel, récupéré sur mediathequesdelabaie.fr le 19 août 2026.",
      sourceUrl: "https://www.mediathequesdelabaie.fr/images/logos-banniere/logomediabaie1.gif",
    },
  },
  {
    id: "societe-amis-louis-guilloux",
    name: "Société des Amis de Louis Guilloux",
    role: "Rencontre avec le bureau de l'association à la Maison Louis Guilloux le 25 mai 2026 ; soutien au projet de parcours à vélo littéraire et patrimonial.",
    url: "http://www.louisguilloux.com/",
    sourceNote:
      "Courriel de remerciements et compte-rendu de la rencontre du 25 mai 2026",
    logo: {
      fileName: "societe-amis-louis-guilloux.png",
      alt: "Logo de la Société des Amis de Louis Guilloux",
      width: 320,
      height: 320,
      credit:
        "Logo officiel de l'association, récupéré sur son site le 19 août 2026 et redimensionné (format original : SVG).",
      sourceUrl: "https://www.louisguilloux.com/wp-content/uploads/2023/11/logo-lg.svg",
    },
  },
  {
    id: "velo-utile",
    name: "Vélo Utile",
    role: "Parcours conçu par Vélo Utile en collaboration avec la Société des Amis de Louis Guilloux : balades, pique-nique au Manoir Rohannec'h, lectures, jeux et moments de convivialité.",
    url: "https://velo-utile.fr/site/2026/07/rallye-velo-louis-guilloux/",
    sourceNote: "Article « Rallye Vélo Louis Guilloux », velo-utile.fr, juillet 2026.",
    logo: {
      fileName: "velo-utile.png",
      alt: "Logo de Vélo Utile",
      width: 128,
      height: 115,
      credit:
        "Badge officiel de l'association, recadré depuis la bannière d'en-tête de velo-utile.fr le 19 août 2026 (la bannière d'origine associait aussi 3 logos d'autres structures, non repris ici).",
      sourceUrl: "https://velo-utile.fr/site/wp-content/uploads/2026/04/entete.png",
    },
  },
  {
    id: "triporteur-vagabonheurs",
    name: "À Triporteur et les Vagabonheurs",
    role: "Partenaire du Rallye Vélo Louis Guilloux, mentionné sur l'affiche officielle du projet.",
    sourceNote:
      "Affiche officielle du Rallye Vélo Louis Guilloux (livret, page 1). Antenne briochine de l'association « À vélo sans âge », renommée « Les Vagabonheurs » début 2024 ; aucun site officiel ni logo numérique retrouvé au 19 août 2026.",
  },
];

export type CreditEntry = {
  id: string;
  label: string;
  description: string;
};

export const creditsData: CreditEntry[] = [
  {
    id: "iconographie",
    label: "Iconographie",
    description:
      "Cartes postales anciennes : Archives départementales des Côtes-d'Armor, Licence Ouverte 1.0 (Etalab). Photographies contemporaines : contributeurs de Wikimedia Commons, licences CC BY-SA. Le crédit complet de chaque image figure sur la fiche d'étape correspondante.",
  },
  {
    id: "cartes",
    label: "Cartes",
    description:
      "Fonds de carte et tracés des parcours réalisés avec uMap, sur fond de carte OpenStreetMap et ses contributeurs.",
  },
  {
    id: "sources-documentaires",
    label: "Sources documentaires",
    description:
      "Le parcours et son contenu s'appuient sur le compte-rendu de la réunion de préparation du 10 août 2026 (Maison Louis Guilloux), ainsi que sur des documents transmis par la famille de Louis Guilloux : discours de Mona Ozouf et de Frédérick Laurent lors de l'inauguration de la bibliothèque Renée Guilloux d'Étables, 2019.",
  },
];
