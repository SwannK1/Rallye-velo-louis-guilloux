// Registre centralisé de l'iconographie patrimoniale du site.
// Chaque entrée correspond à un fichier vérifié individuellement — voir docs/iconographie-sources.md
// pour l'historique de vérification. Ne jamais ajouter d'entrée sans avoir vérifié la licence
// affichée sur sa page source.

export type ImageRecord = {
  id: string;
  fileName: string;
  title: string;
  place: string;
  source: string;
  sourceUrl: string;
  creator?: string;
  date?: string;
  license: string;
  licenseUrl?: string;
  credit: string;
  alt: string;
  publicDomain?: boolean;
};

export const imagesData: ImageRecord[] = [
  {
    id: "gare-saint-brieuc-ancienne",
    fileName: "gare-saint-brieuc-ancienne.jpg",
    title: "Gare de l'Ouest-État, Saint-Brieuc",
    place: "Gare de Saint-Brieuc",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Gare_de_l%27Ouest-Etat_-_AD22_-_16FI4877.jpg",
    creator: "Amaury",
    date: "[1920-1930]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Amaury, Archives départementales des Côtes-d'Armor, 16 Fi 4877, Licence Ouverte 1.0",
    alt: "Carte postale ancienne montrant la façade de la gare de l'Ouest-État à Saint-Brieuc, vers 1920-1930.",
  },
  {
    id: "gare-saint-brieuc-contemporaine",
    fileName: "gare-saint-brieuc-contemporaine.jpg",
    title: "Façade de la gare de Saint-Brieuc",
    place: "Gare de Saint-Brieuc",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint-Brieuc,_Gare_(101).jpg",
    creator: "GilPe",
    date: "2019-04-25",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    credit: "Photo : GilPe / Wikimedia Commons, CC BY-SA 3.0",
    alt: "Photographie contemporaine de la façade de la gare de Saint-Brieuc.",
  },
  {
    id: "lycee-anatole-le-braz-ancienne",
    fileName: "lycee-anatole-le-braz-ancienne.jpg",
    title: "Champ de Mars, lycée et caserne des Ursulines, Saint-Brieuc",
    place: "Lycée Anatole Le Braz",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Champ_de_Mars_lyc%C3%A9e_et_caserne_des_Ursulines_-_AD22_-_16FI4835.jpg",
    creator: "A. Waron",
    date: "[1900-1903]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "A. Waron, Archives départementales des Côtes-d'Armor, 16 Fi 4835, Licence Ouverte 1.0",
    alt: "Carte postale ancienne montrant le Champ de Mars, le lycée et la caserne des Ursulines à Saint-Brieuc, vers 1900-1903.",
  },
  {
    id: "vallee-gouedic-ancienne",
    fileName: "vallee-gouedic-ancienne.jpg",
    title: "Vallée du Gouédic, Saint-Brieuc",
    place: "Vallée du Gouédic",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Vall%C3%A9e_du_Gou%C3%A9dic_-_AD22_-_16FI5064.jpg",
    date: "[1910-1920]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Archives départementales des Côtes-d'Armor, 16 Fi 5064, Licence Ouverte 1.0",
    alt: "Carte postale ancienne de la vallée du Gouédic à Saint-Brieuc, vers 1910-1920.",
  },
  {
    id: "vallee-gouedic-contemporaine",
    fileName: "vallee-gouedic-contemporaine.jpg",
    title: "Vallée du Gouédic",
    place: "Vallée du Gouédic",
    source: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Vall%C3%A9e_du_Gou%C3%ABdic_(11-2010).jpg",
    creator: "Kev22",
    date: "2010-12-02",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Kev22 / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie contemporaine de la vallée du Gouédic à Saint-Brieuc.",
  },
  {
    id: "plage-valais-greve-cesson-ancienne",
    fileName: "plage-valais-greve-cesson-ancienne.jpg",
    title: "Courses de chevaux sur la grève de Cesson, Saint-Brieuc",
    place: "Plage du Valais",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Courses_de_chevaux_sur_la_gr%C3%A8ve_de_Cesson_-_AD22_-_16FI4972.jpg",
    date: "[1902-1903]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Archives départementales des Côtes-d'Armor, 16 Fi 4972, Licence Ouverte 1.0",
    alt: "Carte postale ancienne montrant des courses de chevaux sur la grève de Cesson à Saint-Brieuc, vers 1902-1903.",
  },
  {
    id: "tour-cesson-ancienne",
    fileName: "tour-cesson-ancienne.jpg",
    title: "Tour de Cesson vue du bourg, Saint-Brieuc",
    place: "Tour de Cesson",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Tour_de_Cesson_vue_du_bourg_-_AD22_-_16FI5032.jpg",
    date: "[1904-1906]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Archives départementales des Côtes-d'Armor, 16 Fi 5032, Licence Ouverte 1.0",
    alt: "Carte postale ancienne de la Tour de Cesson vue depuis le bourg, à Saint-Brieuc, vers 1904-1906.",
  },
  {
    id: "tour-cesson-contemporaine",
    fileName: "tour-cesson-contemporaine.jpg",
    title: "Tour de Cesson",
    place: "Tour de Cesson",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Tour_de_Cesson_03.jpg",
    creator: "Kev22",
    date: "2013-03-17",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Kev22 / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie contemporaine de la Tour de Cesson à Saint-Brieuc.",
  },
  {
    id: "port-legue-ancienne",
    fileName: "port-legue-ancienne.jpg",
    title: "Le port du Légué (gravure)",
    place: "Port du Légué",
    source: "La France pittoresque, Jules Gourdault, Librairie Hachette, 1893",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Gourdault-1893-La_France_pittoresque-049.jpg",
    creator: "Illustrateur non identifié",
    date: "1893",
    license: "Domaine public",
    credit: "Gravure, in Jules Gourdault, La France pittoresque, Hachette, 1893 — domaine public",
    alt: "Gravure ancienne représentant le port du Légué à Saint-Brieuc, publiée en 1893.",
    publicDomain: true,
  },
  {
    id: "port-legue-contemporaine",
    fileName: "port-legue-contemporaine.jpg",
    title: "Entrée du port du Légué",
    place: "Port du Légué",
    source: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Port_du_L%C3%A9gu%C3%A9_(entr%C3%A9e)_01.jpg",
    creator: "Kev22",
    date: "2024-02-04",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Kev22 / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie contemporaine de l'entrée du port du Légué à Saint-Brieuc.",
  },
  {
    id: "cimetiere-saint-michel-ancienne",
    fileName: "cimetiere-saint-michel-ancienne.jpg",
    title: "Église Saint-Michel et place Saint-Michel, Saint-Brieuc",
    place: "Cimetière / place Saint-Michel",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_%C3%89glise_Saint-Michel_et_place_Saint-Michel_-_AD22_-_16FI4961.jpg",
    date: "[1904-1908]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Archives départementales des Côtes-d'Armor, 16 Fi 4961, Licence Ouverte 1.0",
    alt: "Carte postale ancienne de l'église et de la place Saint-Michel à Saint-Brieuc, vers 1904-1908.",
  },
  {
    id: "cimetiere-saint-michel-contemporaine",
    fileName: "cimetiere-saint-michel-contemporaine.jpg",
    title: "Église Saint-Michel",
    place: "Cimetière / place Saint-Michel",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_(22)_%C3%89glise_Saint-Michel_01.JPG",
    creator: "GO69",
    date: "2013-07-07",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    credit: "Photo : GO69 / Wikimedia Commons, CC BY-SA 3.0",
    alt: "Photographie contemporaine de l'église Saint-Michel à Saint-Brieuc.",
  },
  {
    id: "villa-rohannec-h-ancienne",
    fileName: "villa-rohannec-h-ancienne.jpg",
    title: "Villa Rohannec'h, Saint-Brieuc",
    place: "Villa Rohannec'h",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Rohanec%27h_-_AD22_-_16FI4808.jpg",
    creator: "Neurdein",
    date: "[1910-1920]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "Neurdein, Archives départementales des Côtes-d'Armor, 16 Fi 4808, Licence Ouverte 1.0",
    alt: "Carte postale ancienne de la villa Rohannec'h à Saint-Brieuc, vers 1910-1920.",
  },
  {
    id: "villa-rohannec-h-contemporaine",
    fileName: "villa-rohannec-h-contemporaine.jpg",
    title: "Villa Rohannec'h",
    place: "Villa Rohannec'h",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Saint-Brieuc_-_Villa_Rohannec%27h.jpg",
    creator: "Spendeau",
    date: "2017-03-11",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Spendeau / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie contemporaine de la villa Rohannec'h à Saint-Brieuc.",
  },
  {
    id: "hillion-bourg-ancienne",
    fileName: "hillion-bourg-ancienne.jpg",
    title: "Hillion, le bourg",
    place: "Hillion",
    source: "Archives départementales des Côtes-d'Armor",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Hillion_-_Bourg_-_AD22_-_16FI1777.jpg",
    creator: "E. Hamonic",
    date: "[1904-1908]",
    license: "Licence Ouverte 1.0 (Etalab)",
    licenseUrl: "https://www.etalab.gouv.fr/licence-ouverte-open-licence",
    credit: "E. Hamonic, Archives départementales des Côtes-d'Armor, 16 Fi 1777, Licence Ouverte 1.0",
    alt: "Carte postale ancienne du bourg d'Hillion, vers 1904-1908.",
  },
  {
    id: "hillion-eglise-contemporaine",
    fileName: "hillion-eglise-contemporaine.jpg",
    title: "Église Saint-Jean-Baptiste d'Hillion",
    place: "Hillion",
    source: "Wikimedia Commons",
    sourceUrl:
      "https://commons.wikimedia.org/wiki/File:Extérieur_de_l'église_Saint-Jean-Baptiste_(Hillion,_22)_-_01.jpg",
    creator: "Thérèse Gaigé",
    date: "2016-04-28",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Thérèse Gaigé / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie contemporaine de l'église Saint-Jean-Baptiste d'Hillion.",
  },
  {
    id: "villa-georges-palante-hillion",
    fileName: "villa-georges-palante-hillion.jpg",
    title: "Villa de La Grandville, Hillion",
    place: "Hillion — maison de Georges Palante",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Palante_Villa_Hillion.jpg",
    creator: "JLPC",
    date: "2010-06-04",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    credit: "Photo : JLPC / Wikimedia Commons, CC BY-SA 3.0",
    alt: "Photographie de la villa de La Grandville à Hillion, où vécut et mourut le philosophe Georges Palante en 1925.",
  },
  {
    id: "tombe-louis-guilloux",
    fileName: "tombe-louis-guilloux.jpg",
    title: "Tombe de Louis Guilloux, cimetière Saint-Michel",
    place: "Cimetière Saint-Michel, Saint-Brieuc",
    source: "Wikimedia Commons",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Tombe_Louis_Guilloux.jpg",
    creator: "Spendeau",
    date: "2017-03-11",
    license: "CC BY-SA 4.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    credit: "Photo : Spendeau / Wikimedia Commons, CC BY-SA 4.0",
    alt: "Photographie de la tombe de Louis Guilloux au cimetière Saint-Michel de Saint-Brieuc.",
  },
];

export function getImageById(id: string): ImageRecord {
  const image = imagesData.find((img) => img.id === id);
  if (!image) {
    throw new Error(`Image inconnue dans le registre iconographique : ${id}`);
  }
  return image;
}
