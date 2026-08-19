import { getImageById } from "./images";

export type PublicationStatus =
  | "publishable"
  | "short-quote-only"
  | "reference-only"
  | "internal-only";

function etapeImage(id: string, caption?: string): EtapeImage {
  const image = getImageById(id);
  return {
    src: `/images/lieux/${image.fileName}`,
    alt: image.alt,
    caption: caption ?? image.title,
    credit: image.credit,
  };
}

export type LiteraryExtract = {
  author: string;
  work: string;
  text: string;
  pages?: string;
  edition?: string;
  verified: boolean;
  sourceNote?: string;
  sourceDocument?: string;
  publicationStatus: PublicationStatus;
};

export type HistoricalContent = {
  text: string;
  verified: boolean;
  sourceNote?: string;
};

export type EtapeLocation = {
  description?: string;
  coordinates?: { lat: number; lng: number };
  umapUrl?: string;
};

export type EtapeImage = {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
};

export type Etape = {
  id: string;
  slug: string;
  title: string;
  theme?: string;
  routeIds?: string[];
  order?: number;
  location?: EtapeLocation;
  introduction?: HistoricalContent;
  history?: HistoricalContent;
  guillouxConnection?: HistoricalContent;
  literaryExtracts?: LiteraryExtract[];
  interpretation?: HistoricalContent;
  images?: EtapeImage[];
  practicalInfo?: string;
  status: "draft" | "published";
  /** Mots-clés thématiques réellement portés par le contenu de l'étape. */
  motsCles?: string[];
  /** Phrases de liaison avec l'étape précédente / suivante, quand un lien réel existe. */
  filRouge?: {
    depuisPrecedente?: string;
    versSuivante?: string;
  };
  /** Étapes non adjacentes reliées par un thème, une œuvre ou un personnage commun. */
  etapesLiees?: string[];
};

export const etapesData: Etape[] = [
  // ── PARCOURS DU MATIN ──────────────────────────────────────────────
  {
    id: "gare-de-saint-brieuc",
    slug: "gare-de-saint-brieuc",
    title: "Gare de Saint-Brieuc",
    theme: "Les mutineries de 1917 et les pacifistes briochins",
    routeIds: ["matin"],
    order: 1,
    introduction: {
      text: "En 1917, la gare de Saint-Brieuc est le théâtre d'une scène mémorable : des soldats mutinés, condamnés pour avoir refusé de retourner au front, transitent par la ville. Une foule de femmes, d'enfants et de civils se rassemble pour les accompagner jusqu'aux quais, que des factionnaires tentent d'interdire aux non-militaires. Louis Guilloux transpose cet événement dans Le Sang Noir, roman d'une journée de 1917 dans une ville de l'arrière.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; Le Sang Noir, Gallimard 1935",
    },
    guillouxConnection: {
      text: "Dans Le Sang Noir, Louis Guilloux place son personnage principal, le professeur de philosophie Cripure (Merlin de son vrai nom), au cœur de la scène. Témoin de la révolte des soldats, Cripure se retrouve face à Matrod, l'un de ses anciens locataires, défiguré par la guerre et renvoyé au front pour la cinquième fois. Cette confrontation est l'un des moments les plus intenses du roman.",
      verified: true,
      sourceNote: "Le Sang Noir, Gallimard 1935, p. 299-307",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "Le Sang Noir",
        text: `À mesure qu'ils approchaient de la gare une rumeur confuse leur parvenait, comme un grondement sourd dont ils ne comprirent d'abord pas la nature, mais qui fit dresser tout de même l'oreille à Cripure, toujours en éveil.
Ils entrèrent dans un petit square devant la gare. La clameur devenait distincte. Ce n'était point de chants qu'elle était faite, bien qu'on reconnût de temps en temps une tentative dans ce sens, un commencement d'Internationale, mais de cris, de sifflements, de menaces : « À mort ! À mort Poincaré… »
Ce cri de mort dominait tout. Des centaines de bouches le reprirent avec violence, longuement. Puis, comme un vent qui passe, la clameur s'atténua, dispersée aux quatre coins du ciel. Un chant monta.

Adieu la vie, adieu l'amour
Adieu toutes les femmes…

[…]

Les cris, autour de lui, faisaient un bruit de rafale. Il s'appuya de la main sur une épaule. L'homme tourna la tête : il était entièrement défiguré. Tout le bas du visage, arraché et recousu, ne formait plus qu'un bourrelet de chair rosâtre et granuleuse. On aurait dit une éponge. Les yeux pleins de fièvre de l'homme se fixèrent sur Cripure avec colère, puis s'adoucirent ; il dit avec surprise :
— Monsieur Merlin ! Vous ne me reconnaissez pas ? Pas étonnant. J'étais pas comme ça la dernière fois que je vous ai vu.
Il se nomma :
— Matrod.
— Non ! murmura Cripure. Non ! Ce n'est pas possible. Toi !
[…]
— Sans blague ? Des hommes comme vous…qui nous ont laissé tomber…
Empoignant Cripure par le col de sa peau de bique, comme prêt à le secouer, il le regarda droit dans les yeux :
— Je me fous de votre pitié, vous entendez.`,
        pages: "299-307",
        edition: "Gallimard, 1935",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Le Sang Noir",
        text: `Dans la gare, les poilus semblaient se calmer. La locomotive fut mystérieusement raccrochée et les hommes montèrent dans le train, où il ne restait plus une vitre, à peine une banquette. Quand le train se mit en marche, une bordée de sifflets jaillit. Les hommes penchés aux portières criaient : « Nous reviendrons ! »
L'un d'eux saisit au passage la main d'un officier.
[…]
— Tu ne veux pas venir avec nous ?
— Vous êtes fou, voyons, lâchez-moi.
— Viens avec nous, va.
L'homme sourit.
[…]
Plus un cri dans l'air. Rien. L'émeute était finie. Ils étaient matés.`,
        pages: "311-312",
        edition: "Gallimard, 1935",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "L'Herbe d'oubli",
        text: `En revenant de cette promenade autrefois, au lieu de reprendre le chemin que j'avais emprunté pour me rendre au bois, j'en prenais un autre pour rentrer en ville et m'arrêter d'abord sur la passerelle à regarder passer les trains. Quelle beauté, surtout le soir ! En ce temps-là, les trains marchaient au charbon. De grosses fumées grises, lourdes, enveloppaient tout au-dessus des trains arrêtés, et les foyers des locomotives, où l'on voyait des mécaniciens fouiller avec leurs ringards, jetaient de grandes lueurs dans la nuit. C'était autre chose, mais aussi beau que les spectacles que j'allais chercher au port, et c'était le même appel, le même espoir. Et les sifflets des locomotives ! Et l'odeur de la fumée ! Et le mouvement, les cris, les appels de gens qui avaient le bonheur de partir, tous de grands aventuriers !`,
        pages: "383",
        edition: "Gallimard, 1984",
        verified: true,
        sourceNote: "La passerelle de la gare",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [etapeImage("gare-saint-brieuc-ancienne"), etapeImage("gare-saint-brieuc-contemporaine")],
    status: "published",
    motsCles: ["guerre", "ville"],
    filRouge: {
      versSuivante:
        "De la gare, direction le lycée Anatole Le Braz, réquisitionné comme hôpital pendant la même guerre.",
    },
    etapesLiees: ["cimetiere-saint-michel", "port-du-legue"],
  },

  {
    id: "secteur-anatole-le-braz",
    slug: "secteur-anatole-le-braz",
    title: "Lycée Anatole Le Braz",
    theme: "Le lycée-hôpital et la trahison de classe",
    routeIds: ["matin"],
    order: 2,
    introduction: {
      text: "Pendant la Première Guerre mondiale, le lycée de Saint-Brieuc est réquisitionné pour accueillir les blessés du front. Dans ses romans, Louis Guilloux décrit les convois de blessés déchargés nuit et jour dans les couloirs de l'établissement. C'est aussi ici qu'enseignait Georges Palante, philosophe que le jeune Guilloux rencontra en 1916. L'étape interroge la question du rapport aux origines sociales — une thématique centrale chez un écrivain né fils de cordonnier dans une ville bourgeoise.",
      verified: true,
      sourceNote:
        "textes stage.docx ; Compte-rendu de la réunion de préparation du parcours, 10 août 2026",
    },
    guillouxConnection: {
      text: "Dans Dossier Confidentiel et dans Le Sang Noir, Guilloux montre le lycée transformé en hôpital de guerre : les blessés arrivent sur des brancards, leurs grands yeux ouverts « brûlés de fièvre ». Le narrateur de Dossier Confidentiel, lycéen, se lie d'amitié avec certains blessés dont il préfère les propos simples aux discours patriotiques de ses professeurs. Cette tension entre l'institution scolaire et la réalité de la guerre traverse toute l'œuvre de Guilloux.",
      verified: true,
      sourceNote:
        "Dossier Confidentiel, ch. 3 p. 25-27 ; ch. 12 p. 85-86 ; Le Sang Noir, p. 253",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "Dossier Confidentiel",
        text: `Des brancardiers s'avançaient lourdement, sans dire un mot, et leurs gros souliers ferrés grinçaient sur les dalles. Un vent glacé s'engouffrait dans le passage, faisait vaciller la lumière du gaz qui semblait près de s'éteindre. Alors les ombres des gens s'allongeaient sur les murs, et, un instant, nous étions plongés dans l'obscurité.
On amenait les blessés, l'un suivant l'autre. Sous la mauvaise lumière du gaz, je les voyais passer, étendus sur des brancards, raides comme des morts. Dans l'amas des couvertures, où des bouts de paille demeuraient accrochés, des capotes déchirées et sanglantes, saillaient des visages durs comme la pierre, blêmes, où de grands yeux battaient à peine. À chaque fois qu'on amenait un nouveau blessé, il semblait que le silence des spectateurs se fît plus profond.
[…]
Les blessés étaient indifférents à tout ce manège. Leurs grands yeux ouverts, brûlés de fièvre, ne regardaient nulle part.`,
        pages: "25-27",
        edition: "Chapitre 3, Les Cahiers Rouges, Grasset, 1930",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Le Sang Noir",
        text: `Son regard plongea dans une classe toute proche. Il en était séparé à peine par deux mètres : un petit vieillard à barbe posait sur la chaire un paquet, ôtait son chapeau, puis tirait du paquet un sabre flamboyant, qu'il tint entre ses bras comme un crucifix. C'était le sabre de son fils tué deux mois plus tôt et qu'on venait de lui renvoyer. « Messieurs, dit-il, tourné vers ses élèves, mes chers petits amis, je réclame aujourd'hui plus que votre attention : je réclame tout votre cœur… » Ses deux grosses mains, serrant passionnément le sabre, tremblaient si fort que la lame cliqueta dans le fourreau. Les élèves, muets d'épouvante, fixaient les yeux sur cet homme noir qui serrait sur sa maigre poitrine cette lame froide et naguère sanglante. Il en approcha le pommeau de ses lèvres, comme prêt à le baiser. « Messieurs, mes chers petits amis, voici le sabre de mon fils tué… »`,
        pages: "253",
        edition: "Gallimard, 1935",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Dossier Confidentiel",
        text: `Au contraire, pour moi, la guerre était partout : dans les rues, au lycée, où les professeurs ne cessaient d'en parler, où des blessés se promenaient dans les cours ; elle était derrière les grilles des casernes, où s'agrippaient les nouvelles recrues. […] Je pouvais bien être ému, et même pleurer, ma colère était plus forte que mes larmes. Ils obéissaient tous ! Je ne pouvais croire qu'ils partaient ainsi de leur propre gré, ou alors on les trompait. Mais qui ? Et pourquoi ?`,
        pages: "20-21",
        edition: "Chapitre 2, Les Cahiers Rouges, Grasset, 1930",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [etapeImage("lycee-anatole-le-braz-ancienne")],
    status: "published",
    motsCles: ["guerre"],
    filRouge: {
      depuisPrecedente:
        "Les mutins de la gare et les blessés du front convergent vers les mêmes lieux d'une ville en guerre : le lycée transformé en hôpital.",
      versSuivante:
        "Vers la vallée du Gouédic, où d'autres étrangers à la ville — prisonniers, puis réfugiés — ont laissé leur trace.",
    },
    etapesLiees: ["hillion", "georges-palante", "college-renan"],
  },

  {
    id: "vallee-du-gouedic",
    slug: "vallee-du-gouedic",
    title: "Vallée du Gouédic",
    theme: "Les prisonniers de guerre et le camp de réfugiés espagnols",
    routeIds: ["matin"],
    order: 3,
    introduction: {
      text: "La vallée du Gouédic a été, pendant la Première Guerre mondiale, un lieu de travaux pour les prisonniers de guerre allemands. Dans les années 1930-1940, elle accueillit un camp de réfugiés espagnols fuyant le franquisme — familles et enfants réfugiés dans la vallée. Louis Guilloux a évoqué ces deux réalités dans ses romans et dans ses engagements personnels.",
      verified: true,
      sourceNote:
        "Dossier Confidentiel, ch. 17, p. 109-110 ; Le Jeu de Patience, Tome 2, p. 229 ; compte-rendu de la réunion, 10 août 2026",
    },
    guillouxConnection: {
      text: "Fils de cordonnier, Louis Guilloux s'est personnellement engagé aux côtés de l'abbé Vallée pour aider les réfugiés espagnols. Avec une Citroën 4, ils ont fait le tour des commerçants briochins pour collecter chaussures et layettes — au début avec résistance (« ce sont des rouges, ils ont tué les bonnes sœurs »), puis avec succès. Guilloux raconte cette épopée avec la tendresse et le réalisme qui caractérisent son œuvre.",
      verified: true,
      sourceNote:
        "Transcription de la réunion de préparation (contexte des étapes)",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "Dossier Confidentiel",
        text: `La scène se passe dans la vallée du Gouédic.
Une équipe de prisonniers était occupée à ouvrir des sentiers parmi les aubépines et les genêts. Les uns montaient une cabane en planches destinée à leur servir d'abri. Leurs marteaux retentissaient sur le bois neuf ; d'autres creusaient la terre à coups de pelle et de pioche sous la direction d'un sergent. Un troisième groupe poussait de petits wagonnets remplis de terre et de cailloux. Le heurt sourd des pioches, le grincement des roues sur les rails, l'avalanche des pierres qui roulaient jusqu'au bas de la pente quand on renversait le wagonnet, tous ces bruits étaient élargis, emportés du fond de la vallée par-dessus ses bords, jusqu'aux maisons d'un petit village dont les ardoises étincelaient comme des miroirs, jusqu'à la mer.`,
        pages: "109-110",
        edition: "Chapitre 17, Les Cahiers Rouges, Grasset, 1930",
        verified: true,
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Le Jeu de Patience",
        text: `Par une brèche dans ce qui restait des feuillages, la vue plongeait droit sur le camp : des prisonniers se promenaient par petits groupes, d'autres déchargeaient des voitures de paille. À travers la porte ouverte d'une baraque, elle vit des hommes qui, dans une lourde poussière, comme une grosse fumée blonde, enlevaient à la pelle et chargeaient sur des brouettes la vieille paille hachée des couettes. Elle entendait leur toux, leurs éternuements et leurs rires. Il y en avait qui couraient après les rats pour les écraser à coups de pelles.
[…]
C'était cela le camp ! Quelques promeneurs innocents, quelques travailleurs joyeux, une dizaine de baraques en planches, sous les dorures de l'automne, dans le silence attentif des terres, sous le ciel humide. On pouvait vivre là aussi bien qu'ailleurs. Quelle paix ! Pas une sentinelle. Un certain nombre de prisonniers pêchaient au bord de la rivière. Ils mangeraient même de la truite !…`,
        pages: "229",
        edition: "Tome 2, Gallimard, 1949",
        verified: true,
        sourceNote: "Vue sur le camp depuis la vallée",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Dossier Confidentiel",
        text: `Depuis le début de la guerre, la population de la ville avait plus que doublé. Un grand nombre de réfugiés, la plupart misérables, vivaient chez nous, et il en arrivait encore. La garnison avait triplé, et souvent les artilleurs baraqués au port remontaient le soir en ville. Cela faisait, dans la rue principale, une foule épaisse, diverse, animée, bruyante, et qui semblait gaie. C'était partout des uniformes différents, des visages de tous les pays : des Sénégalais, des Marocains, une bande de « Tommies » qui traversait la rue en sifflant, un groupe de blessés qui sortaient d'un café, malgré la consigne, des Italiens, avec leurs petits manteaux verts trop courts.`,
        pages: "92-93",
        edition: "Chapitre 14, Les Cahiers Rouges, Grasset, 1930",
        verified: true,
        sourceNote: "Saint-Brieuc ville d'accueil pendant la guerre",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [etapeImage("vallee-gouedic-ancienne"), etapeImage("vallee-gouedic-contemporaine")],
    status: "published",
    motsCles: ["guerre", "engagement", "enfance"],
    filRouge: {
      depuisPrecedente:
        "Du lycée-hôpital à la vallée du Gouédic, la guerre continue de façonner la ville — prisonniers allemands hier, réfugiés espagnols vingt ans plus tard.",
      versSuivante:
        "Vers la plage du Valais, où la ville retrouve, l'espace d'une fête, son visage insouciant.",
    },
    etapesLiees: ["maison-louis-guilloux"],
  },

  {
    id: "plage-du-valais",
    slug: "plage-du-valais",
    title: "Plage du Valais",
    theme: "La fête de l'hippodrome",
    routeIds: ["matin"],
    order: 4,
    introduction: {
      text: "Chaque année, la plage du Valais — aussi appelée « la grève des courses » — se transformait en hippodrome le temps d'une grande fête. La plage est provisoirement aménagée, en fonction des marées, pour accueillir des courses de chevaux et un bal public. Louis Guilloux évoque cet événement dans Le Jeu de patience (pp. 258-259), où son personnage Roultabi, journaliste correspondant du « grand régional républicain », en rend compte : « tout ce que la ville comptait de plus remarquable en fait de hauts personnages, de notables et de beauté, se trouvait un instant réunis dans ce petit espace. »",
      verified: true,
      sourceNote:
        "Transcription de la réunion de préparation (contexte des étapes) ; Le Jeu de patience, Gallimard 1949, pp. 258-259 (pages disponibles dans le corpus scanné)",
    },
    images: [etapeImage("plage-valais-greve-cesson-ancienne")],
    status: "draft",
    motsCles: ["ville", "mémoire"],
    filRouge: {
      depuisPrecedente:
        "Après les prisonniers et les réfugiés du Gouédic, la plage du Valais offre un autre visage de la ville : celui de ses fêtes populaires.",
      versSuivante:
        "Vers la tour de Cesson, autre chronique du Jeu de patience, qui remonte cette fois jusqu'aux origines de la cité.",
    },
    etapesLiees: ["tour-de-cesson"],
  },

  {
    id: "tour-de-cesson",
    slug: "tour-de-cesson",
    title: "Tour de Cesson",
    theme: "L'arrivée des moines Brieuc en Armorique",
    routeIds: ["matin"],
    order: 5,
    introduction: {
      text: "La tour de Cesson marque l'entrée du port du Légué. C'est par là que, selon la tradition, le moine Brieuc et ses compagnons venus de Grande-Bretagne débarquèrent au Ve siècle, fuyant les Saxons, pour fonder la cité. Un seigneur local voulut d'abord les exterminer, mais un miracle retourna la situation : il se retira et laissa son château aux moines, qui fondèrent à la Fontaine Notre-Dame une première cité, puis construisirent un oratoire — origine de la cathédrale actuelle. Louis Guilloux intègre cette chronique du Ve siècle parmi les cinq ou six niveaux de chroniques qui structurent Le Jeu de patience (p. 264).",
      verified: true,
      sourceNote:
        "Transcription de la réunion de préparation (contexte des étapes) ; Le Jeu de patience, Gallimard 1949, p. 264 (page disponible dans le corpus scanné)",
    },
    images: [etapeImage("tour-cesson-ancienne"), etapeImage("tour-cesson-contemporaine")],
    status: "draft",
    motsCles: ["ville", "mémoire"],
    filRouge: {
      depuisPrecedente:
        "La fête de l'hippodrome racontée, Le Jeu de patience remonte le temps jusqu'à la fondation légendaire de la cité, à la tour de Cesson.",
      versSuivante:
        "Vers le port du Légué, où Louis Guilloux, enfant, regardait partir les bateaux.",
    },
    etapesLiees: ["plage-du-valais"],
  },

  {
    id: "port-du-legue",
    slug: "port-du-legue",
    title: "Port du Légué",
    theme: "Le port, les voyages et le départ pour l'Angleterre",
    routeIds: ["matin"],
    order: 6,
    introduction: {
      text: "Le port du Légué est à la fois fenêtre sur le large et porte d'entrée pour les voyageurs. C'est d'ici que le jeune Louis Guilloux, à l'âge de quatorze ans, embarqua à bord du Bégonia pour rejoindre son oncle Will en Angleterre, en 1914. Cet épisode, évoqué dans L'Herbe d'oubli (pp. 183-184), marque le premier contact de Guilloux avec les langues étrangères et l'horizon du monde au-delà de Saint-Brieuc.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; L'Herbe d'oubli, Gallimard 1984, pp. 183-184 (pages disponibles dans le corpus scanné)",
    },
    guillouxConnection: {
      text: "Dans L'Herbe d'oubli, Louis Guilloux décrit son attirance pour le port : les bateaux, les marins, l'odeur du charbon, « le même appel, le même espoir ». Il évoque les marins — comme son cousin François — qui partaient pour Toulon et Bizerte, peut-être jusqu'à l'Australie où était parti Pierre Étienne. Le départ pour l'Angleterre en 1914 est un des épisodes autobiographiques les plus évocateurs du livre (pp. 183-184, consultables dans le corpus de préparation).",
      verified: true,
      sourceNote: "L'Herbe d'oubli, Gallimard 1984, p. 383 et pp. 183-184",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "L'Herbe d'oubli",
        text: `En revenant de cette promenade autrefois, au lieu de reprendre le chemin que j'avais emprunté pour me rendre au bois, j'en prenais un autre pour rentrer en ville et m'arrêter d'abord sur la passerelle à regarder passer les trains. Quelle beauté, surtout le soir ! En ce temps-là, les trains marchaient au charbon. De grosses fumées grises, lourdes, enveloppaient tout au-dessus des trains arrêtés, et les foyers des locomotives, où l'on voyait des mécaniciens fouiller avec leurs ringards, jetaient de grandes lueurs dans la nuit. C'était autre chose, mais aussi beau que les spectacles que j'allais chercher au port, et c'était le même appel, le même espoir. Et les sifflets des locomotives ! Et l'odeur de la fumée ! Et le mouvement, les cris, les appels de gens qui avaient le bonheur de partir, tous de grands aventuriers ! Les marins, surtout, comme mon cousin François traînant leurs sacs, et s'embarquant si joyeusement pour Toulon, d'où ils iraient à Bizerte, et de Bizerte peut-être au bout du monde, vers l'Australie où était parti Pierre Étienne, ils verraient La-Croix-du-Sud.`,
        pages: "383",
        edition: "Gallimard, 1984",
        verified: true,
        sourceNote: "« les spectacles que j'allais chercher au port » — les marins, l'appel du large",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [etapeImage("port-legue-ancienne"), etapeImage("port-legue-contemporaine")],
    status: "published",
    motsCles: ["mer", "enfance"],
    filRouge: {
      depuisPrecedente:
        "Des origines légendaires de la ville aux départs bien réels de ses habitants : au port du Légué, c'est Louis Guilloux lui-même qui embarque, à quatorze ans, pour l'Angleterre.",
      versSuivante:
        "Vers la place Saint-Michel, où la ville règle ses comptes avec ses morts.",
    },
    etapesLiees: ["gare-de-saint-brieuc"],
  },

  {
    id: "cimetiere-saint-michel",
    slug: "cimetiere-saint-michel",
    title: "Place Saint-Michel",
    theme: "La ville des morts et les processions de guerre",
    routeIds: ["matin"],
    order: 7,
    introduction: {
      text: "Le cimetière Saint-Michel est au cœur de la fiction guillouxienne. Dans Le Sang Noir, le personnage de Cripure traverse la place de l'Église Saint-Michel dans un imaginaire fantasmagorique. Pendant la guerre, l'église était le lieu des messes pour les soldats morts et des cortèges funèbres. Le cimetière abrite par ailleurs la tombe du père d'Albert Camus — mort pendant la Première Guerre mondiale — évoquée dans Le Premier Homme (pp. 28-29).",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; Le Sang Noir, Gallimard 1935, p. 313-315 ; Le Premier Homme, Gallimard 1994, pp. 28-29 (pages disponibles dans le corpus scanné)",
    },
    guillouxConnection: {
      text: "Dans Le Sang Noir, le personnage de Cripure contemple l'église Saint-Michel dans un délire fantasmagorique : il la voit comme un bœuf gigantesque qui aurait éventré le cimetière, et ses morts transformés en vivants — fonctionnaires, professeurs, banquiers — qui peuplent les maisons alentour sous des « déguisements divers ». Dans Dossier Confidentiel, la même place accueille une cérémonie funèbre réelle, avec cortège, musique de Chopin et discours officiels au cimetière.",
      verified: true,
      sourceNote:
        "Le Sang Noir, Gallimard 1935, p. 313-315 ; Dossier Confidentiel, ch. 13, p. 90-91",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "Le Sang Noir",
        text: `Avec des peines infinies, il arriva sur la petite place où habitait Moka. Curieux désert. Rien. Pas même un chien. Une église, au centre – des pierres carrées, sans l'ombre d'une sculpture ou le commencement d'un sourire. Si l'on avait pu rêver que les bœufs aient jamais vécu en société à l'image des hommes, et qu'eût germé, dans leur cervelle de bœufs, l'idée de construire une église à leur image de bœufs, cette bâtisse opaque eût fourni un merveilleux exemple d'architecture bovine. Deux courtes tours, nues et carrées, péremptoires comme deux commandements quelconques du décalogue, figuraient assez bien les cornes aveugles de la bête et, entre les tours, le porche bas ne pouvait signifier autre chose qu'un front immense, épais, carré, obscur, avec, au-dessous, des piliers énormes, seules rondeurs dans cette carrière.
[…]
Or, ce bœuf, il n'y avait pas si longtemps qu'il était là. Les plus vieilles gens de la ville se souvenaient d'avoir connu à sa place du cimetière. Un beau jour, le bœuf était arrivé dans le cimetière, il s'y était rué, grattant la terre de ses sabots et faisant sauter les morts. Plus de cimetière. Mais les morts s'étaient vengés : ils avaient aussitôt transformé les maisons qui entouraient la place en tombeaux et c'est là qu'ils demeuraient depuis sous des déguisements divers. On pouvait sonner à leurs portes : ils ne se montraient jamais sans masques. Généralement, ils étaient très convenablement vêtus, ils avaient même des apparences de vivants, mais un œil un peu exercé pouvait aisément déceler la supercherie ; c'étaient bel et bien des morts à qui l'on avait affaire, et malgré toutes les précautions dont ils s'entouraient, allant jusqu'à se faire décorer et « fabriquer » des enfants pour mieux cacher leur jeu, jusqu'à devenir quelque chose dans la cité, les uns professeurs ou médecins, les autres employés de banque ou commis d'enregistrement, ou même soldats — ils étaient quand même bel et bien des morts, des fantômes.`,
        pages: "313-315",
        edition: "Gallimard, 1935",
        verified: true,
        sourceNote: "La vision fantasmagorique de Cripure — « Boeufgorod, Cloportgorod, Mortgorod »",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "Dossier Confidentiel",
        text: `Aujourd'hui la façade de l'église était nue et triste, noire de pluie ; il n'y avait plus de reposoir. Les gens gravissaient les degrés, en foule. On allait célébrer une messe pour les soldats morts… tout comme on avait célébré une messe le jour de la Fête-Dieu pour demander la victoire.
Après la messe, un long cortège se forma sur la place, l'évêque en tête, entouré d'officiers, du préfet, du maire et de toutes les autorités de la ville. Des musiciens aux instruments voilés de crêpe se mirent à jouer la marche funèbre de Chopin. La foule s'ébranla, lentement, sous la pluie qui s'était remise à tomber. Ce n'était pas une foule chantante, mais une foule triste et accablée. Par les allées bordées d'ifs taillés en cône, au cimetière, elle se répandit, entoura le carré des soldats. Les musiciens se turent. Une voix s'éleva. Les discours commençaient…`,
        pages: "90-91",
        edition: "Chapitre 13, Les Cahiers Rouges, Grasset, 1930",
        verified: true,
        sourceNote: "La cérémonie funèbre à l'église Saint-Michel et au cimetière",
        sourceDocument: "textes stage.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [
      etapeImage("cimetiere-saint-michel-ancienne"),
      etapeImage("cimetiere-saint-michel-contemporaine"),
    ],
    status: "published",
    motsCles: ["guerre", "mémoire"],
    filRouge: {
      depuisPrecedente:
        "Du port et de ses départs vers le large, retour au cœur de la ville, à la place Saint-Michel, où Cripure — croisé dès la gare — voit resurgir tous les morts de la cité.",
      versSuivante:
        "Le parcours du matin s'achève à la Villa Rohannec'h, pour le pique-nique.",
    },
    etapesLiees: ["gare-de-saint-brieuc"],
  },

  {
    id: "manoir-rohanneach",
    slug: "manoir-rohanneach",
    title: "Villa Rohannec'h",
    theme: "Pique-nique et activités littéraires",
    routeIds: ["matin"],
    order: 8,
    introduction: {
      text: "La villa Rohannec'h est le point de rendez-vous du pique-nique de mi-journée. Les participants pourront découvrir ce lieu et ses activités avant le départ du parcours de l'après-midi.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026",
    },
    images: [
      etapeImage("villa-rohannec-h-ancienne"),
      etapeImage("villa-rohannec-h-contemporaine"),
    ],
    status: "draft",
    filRouge: {
      depuisPrecedente:
        "Pause de mi-journée après un matin passé dans une ville en guerre et en mémoire.",
      versSuivante:
        "Le parcours de l'après-midi partira du collège Ernest Renan, en direction d'Hillion.",
    },
  },

  // ── PARCOURS DE L'APRÈS-MIDI ───────────────────────────────────────
  {
    id: "college-renan",
    slug: "college-renan",
    title: "Collège Ernest Renan",
    theme: "Renée Guilloux, enseignante et pédagogue",
    routeIds: ["apres-midi"],
    order: 1,
    introduction: {
      text: "Ancien établissement pour jeunes filles préparant au baccalauréat, le collège Ernest Renan est lié à la mémoire de Renée Guilloux, femme de Louis Guilloux, qui y enseigna le français pendant la guerre et au-delà. Connue pour la qualité exceptionnelle de son enseignement, elle a formé des générations d'élèves à la littérature française, russe et anglaise.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; Mona Ozouf, discours pour l'inauguration de la bibliothèque Renée Guilloux d'Étables",
    },
    guillouxConnection: {
      text: "Renée Guilloux, née Tricoire et d'origine toulousaine, enseigna les Lettres à l'École normale d'institutrices de Saint-Brieuc, puis au collège Ernest Renan. Dédicataire du Sang Noir (1935), elle fut la première lectrice et la première critique des manuscrits de Louis Guilloux. Pendant l'Occupation, elle continua d'enseigner au lycée Renan — selon les témoignages de sa famille, elle « narguait l'ennemi en chantant la Marseillaise sous les drapeaux nazis qui flottaient tristement sur l'établissement ».",
      verified: true,
      sourceNote:
        "Bibliothèque Renée Guilloux, document de présentation, 2019 ; Frédérick Laurent, discours d'inauguration, 2019",
    },
    literaryExtracts: [
      {
        author: "Mona Ozouf",
        work: "Composition française : retour sur une enfance bretonne",
        text: `Je la vois encore, tant d'années après, pousser la porte de la troisième B et s'avancer vers le bureau avec une royale nonchalance. Nous nous levions bien sûr, comme l'exigeaient alors les normes scolaires. Mais nous avions la certitude qu'elle s'en souciait peu, comme des rites convenus de la classe, appel, vérification des présences et des exercices, notes et copies. Elle s'acquittait distraitement de ces tâches indispensables, mais nous la sentions déjà ailleurs, tournée vers l'essentiel : le texte qu'elle tirait de son sac, avec l'ambition de nous le faire lire, comprendre, aimer peut-être.
[…]
Ce que j'ai appris d'elle alors, et pour la vie, c'est qu'en effet la littérature permet d'habiter des pays où on n'a jamais mis le pied ; de connaître des êtres qu'on n'a jamais rencontrés, de les aimer ou de les plaindre ; de jouir de bonheurs auxquels on n'a pas eu droit ; d'épouser cent destins différents, ce qui console de n'avoir qu'une vie à vivre. Ce n'est pas rien, à quatorze ans, d'avoir eu la chance d'une telle médiatrice.`,
        edition:
          "Gallimard, 2009 ; cité dans le document de présentation de la Bibliothèque Renée Guilloux, 2019",
        verified: true,
        sourceNote: "Mona Ozouf, ancienne élève de Renée Guilloux au collège Ernest Renan",
        sourceDocument: "BibliotheĢque Reneģe Guilloux.pdf",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Mona Ozouf",
        work: "Discours pour l'inauguration de la bibliothèque Renée Guilloux d'Étables",
        text: `Rien ne rend mieux justice à la mémoire de Renée Guilloux que d'avoir son nom inscrit au fronton d'une bibliothèque. Et rien ne sied mieux à une bibliothèque que de porter le nom d'une femme qui avait pour métier de transmettre l'amour des livres.
Elle avait été le professeur de français de ma mère, à l'École normale d'institutrices de Saint-Brieuc, et c'est à elle que la bibliothèque de la maison devait les classiques anglais et russes qui la peuplaient. Quand à mon tour j'ai eu la chance de l'avoir comme professeur en classe de troisième, au collège Ernest Renan cette fois, j'ai compris le prix de son enseignement. Elle nous considérait, collectivement, comme capables d'entrer dans les grands débats philosophiques, et, par exemple, pour mieux lire Racine, dans les querelles du jansénisme. Et nous sentions que son but dépassait les contraintes des programmes. Elle cherchait à munir les adolescentes que nous étions, incertaines d'elles-mêmes, de la seule expérience à laquelle nous pouvions prétendre : celle des grandes figures de la littérature. Grâce à elle, nous savions que les livres nous aident à mieux déchiffrer la vie. Pour saluer le lecteur au seuil d'une bibliothèque, elle est exactement la figure tutélaire qu'on peut souhaiter.`,
        verified: true,
        sourceDocument: "textes renée Guilloux  .docx",
        publicationStatus: "short-quote-only",
      },
    ],
    status: "published",
    motsCles: ["littérature"],
    filRouge: {
      depuisPrecedente:
        "Après la pause de midi, le parcours de l'après-midi commence là où Renée Guilloux, la femme de l'écrivain, a enseigné les lettres.",
      versSuivante:
        "Vers Hillion, sur les pas d'un autre professeur déterminant pour Louis Guilloux : Georges Palante.",
    },
    etapesLiees: ["secteur-anatole-le-braz", "hillion"],
  },

  {
    id: "hillion",
    slug: "hillion",
    title: "Hillion — Sur les pas de Palante",
    theme: "Georges Palante, philosophe et ami de Louis Guilloux",
    routeIds: ["apres-midi"],
    order: 2,
    introduction: {
      text: "Depuis Saint-Brieuc, le parcours de l'après-midi emprunte la Vélomaritime en direction d'Hillion, où vécut et mourut le philosophe Georges Palante (1862-1925). Palante se fit construire une maison en 1907 dans ce village où il se rendait chaque année pendant les vacances scolaires. Le cimetière d'Hillion abrite sa tombe.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; palanteV6.docx",
    },
    guillouxConnection: {
      text: "Louis Guilloux rencontra Georges Palante en 1916, alors qu'il était lycéen et Palante professeur au Lycée Anatole Le Braz. Dans ses Souvenirs sur Georges Palante, Guilloux raconte les voyages à Hillion : « Le départ pour Hillion était toujours une véritable expédition. Il fallait d'abord prendre le petit train de Saint-Brieuc et descendre au lieu-dit Les Aubiers : là, un voisin l'attendait avec son âne et une carriole. » Cette amitié, décisive pour la formation intellectuelle de Guilloux, prit fin douloureusement en 1921 suite à un différend lié à une nouvelle publiée par Guilloux inspirée des confidences de Palante.",
      verified: true,
      sourceNote:
        "Louis Guilloux, Souvenirs sur Georges Palante ; palanteV6.docx, corpus de préparation du parcours",
    },
    literaryExtracts: [
      {
        author: "Louis Guilloux",
        work: "Souvenirs sur Georges Palante",
        text: `Il a joué un tel rôle dans ma vie, sa rencontre a été pour moi un événement si considérable et j'ai si longtemps porté sa marque, que je ne puis, quand je me reporte à ces années où nous étions liés, imaginer ma personnalité distincte de la sienne.`,
        verified: true,
        sourceDocument: "palanteV6.docx",
        publicationStatus: "short-quote-only",
      },
      {
        author: "Louis Guilloux",
        work: "L'Herbe d'oubli",
        text: `Comment eussent-ils pu comprendre, ceux qui me reprochent la supposée caricature, que ce personnage — Cripure — n'était pas lui, mais nous, lui et moi ? Tu es toujours celui à qui je dois le plus, tu es toujours à l'origine des choses. J'ai toujours été avec toi et tes ennemis ont toujours été les miens…`,
        edition: "Gallimard, 1984",
        verified: true,
        sourceNote: "Hommage à Palante, figure tutélaire du personnage de Cripure",
        sourceDocument: "palanteV6.docx",
        publicationStatus: "short-quote-only",
      },
    ],
    images: [etapeImage("hillion-bourg-ancienne"), etapeImage("hillion-eglise-contemporaine")],
    status: "published",
    motsCles: ["amitié", "littérature"],
    filRouge: {
      depuisPrecedente:
        "Du collège Renan, où enseignait Renée, à Hillion, où vivait Georges Palante — deux figures qui ont façonné la vie et l'œuvre de Louis Guilloux.",
      versSuivante:
        "Vers la pensée même de Georges Palante, dont la tombe se trouve au cimetière d'Hillion.",
    },
    etapesLiees: ["college-renan", "georges-palante", "secteur-anatole-le-braz"],
  },

  {
    id: "georges-palante",
    slug: "georges-palante",
    title: "Georges Palante",
    theme: "La pensée individualiste d'un philosophe briochin",
    routeIds: ["apres-midi"],
    order: 3,
    introduction: {
      text: "Georges Palante (1862-1925) fut professeur de philosophie au Lycée Anatole Le Braz de Saint-Brieuc. Philosophe individualiste et sociologue, il développa une pensée critique de la société et de ses mécanismes de conformisme, exprimée dans plusieurs essais dont Combat pour l'individu (1903) et Les antinomies entre l'individu et la société (1912). Il se suicida en août 1925. Guilloux lui a consacré un livre de Souvenirs. Albert Camus le cite dans L'Homme révolté (1951).",
      verified: true,
      sourceNote: "palanteV6.docx, corpus de préparation du parcours",
    },
    literaryExtracts: [
      {
        author: "Georges Palante",
        work: "Essais et aphorismes",
        text: `La bêtise est l'étoffe des préjugés sans lesquels il n'y a pas de vie sociale possible ; elle est le ciment de l'édifice social.
Les conventions sociales ne subsistent que grâce à une bêtise générale qui enveloppe, soutient, garantit, protège et consacre la bêtise des individus.
C'est pourquoi l'intelligence critique, ironique et pessimiste est virtuellement un dissolvant social.
Elle est irrévérencieuse, pour ce qui est socialement respectable ; la médiocrité et la bêtise. Elle s'attaque au respect et à la crédulité, éléments conservateurs des sociétés.
Extirper la bêtise, quelle entreprise insensée… Rassurons-nous. Ce vœu sacrilège ne se réalisera pas.`,
        verified: true,
        sourceNote: "De la bêtise",
        sourceDocument: "palanteV6.docx",
        publicationStatus: "publishable",
      },
      {
        author: "Georges Palante",
        work: "Essais et aphorismes",
        text: `L'amitié est faite de la substance la plus précieuse des âmes qu'elle unit ; elle est le culte de la belle individualité.
[…]
L'amitié, sentiment individualiste, est par là même, un sentiment électif et aristocratique.`,
        verified: true,
        sourceNote: "De l'amitié",
        sourceDocument: "palanteV6.docx",
        publicationStatus: "publishable",
      },
      {
        author: "Georges Palante",
        work: "Essais et aphorismes",
        text: `Les premières influences sociales qui s'exercent sur l'individu sont les influences éducatives. C'est sous la forme pédagogique que se sont manifestées de nos jours avec le plus d'énergie, les prétentions de la société sur l'individu.
[…]
En un mot, le but de l'éducation est de prévenir l'originalité et de réduire l'exception. Or, l'éducation, quels que soient les procédés qu'elle met en œuvre, s'efforce toujours de faire triompher les ressemblances sur les différences.`,
        verified: true,
        sourceNote: "De l'enseignement et de la pédagogie",
        sourceDocument: "palanteV6.docx",
        publicationStatus: "publishable",
      },
    ],
    images: [
      etapeImage(
        "villa-georges-palante-hillion",
        "La villa de La Grandville, à Hillion, où vécut et mourut Georges Palante",
      ),
    ],
    status: "published",
    motsCles: ["amitié", "littérature"],
    filRouge: {
      depuisPrecedente:
        "Après l'itinéraire biographique jusqu'à Hillion, place à la pensée même de Georges Palante, telle que Guilloux en fut marqué toute sa vie.",
      versSuivante:
        "La randonnée s'achève à la maison de Louis Guilloux.",
    },
    etapesLiees: ["hillion", "secteur-anatole-le-braz"],
  },

  {
    id: "maison-louis-guilloux",
    slug: "maison-louis-guilloux",
    title: "Maison Louis Guilloux",
    theme: "Point d'arrivée de la randonnée",
    routeIds: ["apres-midi"],
    order: 4,
    introduction: {
      text: "La maison de Louis Guilloux, au 13 rue Lavoisier à Saint-Brieuc, est le point d'arrivée de la randonnée. C'est ici que Guilloux vécut avec Renée, que leur fille Yvonne naquit en 1932, et que la maison servit, pendant l'Occupation, de lieu de rencontre entre divers réseaux de résistants. La réunion de préparation du 10 août 2026 s'est tenue dans cette maison.",
      verified: true,
      sourceNote:
        "Compte-rendu de la réunion de préparation du parcours, 10 août 2026 ; Frédérick Laurent, discours d'inauguration de la bibliothèque Renée Guilloux d'Étables, 2019",
    },
    images: [
      etapeImage(
        "tombe-louis-guilloux",
        "La tombe de Louis Guilloux, cimetière Saint-Michel, Saint-Brieuc",
      ),
    ],
    status: "draft",
    motsCles: ["engagement", "mémoire"],
    filRouge: {
      depuisPrecedente:
        "De la pensée individualiste de Palante à la maison où Guilloux, avec Renée, ouvrit sa porte aux réseaux de résistance — un engagement qui prolonge celui vécu dans la vallée du Gouédic.",
    },
    etapesLiees: ["vallee-du-gouedic"],
  },
];

export function getEtapeBySlug(slug: string): Etape | undefined {
  return etapesData.find((e) => e.slug === slug);
}

export function getEtapesByRouteId(routeId: string): Etape[] {
  return etapesData.filter((e) => e.routeIds?.includes(routeId));
}
