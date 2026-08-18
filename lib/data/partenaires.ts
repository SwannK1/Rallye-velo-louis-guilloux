// Partenaires réellement documentés du Rallye Vélo Louis Guilloux.
// Ne jamais ajouter une institution simplement citée comme source dans le corpus :
// seul un soutien ou une collaboration explicitement attestée qualifie un partenaire.

export type Partenaire = {
  id: string;
  name: string;
  role: string;
  url?: string;
  sourceNote: string;
};

export const partenairesData: Partenaire[] = [
  {
    id: "societe-amis-louis-guilloux",
    name: "Société des Amis de Louis Guilloux",
    role: "Rencontre avec le bureau de l'association à la Maison Louis Guilloux le 25 mai 2026 ; soutien au projet de parcours à vélo littéraire et patrimonial.",
    url: "http://www.louisguilloux.com/",
    sourceNote:
      "Courriel de remerciements et compte-rendu de la rencontre du 25 mai 2026",
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
