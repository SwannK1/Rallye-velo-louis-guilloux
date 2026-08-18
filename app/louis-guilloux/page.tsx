import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getChronologieHighlights } from "@/lib/data/chronologie";
import { getImageById } from "@/lib/data/images";
import RouteDivider from "@/components/RouteDivider";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

function SectionPhoto({ imageId, caption }: { imageId: string; caption?: string }) {
  const image = getImageById(imageId);
  return (
    <figure className="mb-5 max-w-xs">
      <div
        className="relative w-full overflow-hidden rounded-xl border"
        style={{ borderColor: "var(--frame)", aspectRatio: "3 / 2" }}
      >
        <Image
          src={`/images/lieux/${image.fileName}`}
          alt={image.alt}
          fill
          sizes="320px"
          className="object-cover"
          loading="lazy"
        />
      </div>
      <figcaption
        className="mt-1.5 text-xs font-sans"
        style={{ color: "var(--stone)" }}
      >
        {caption ?? image.title} — {image.credit}
      </figcaption>
    </figure>
  );
}

const title = "Louis Guilloux";
const description =
  "Découvrez la vie et l'œuvre de Louis Guilloux, écrivain briochin, à travers les lieux qui ont nourri son univers.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/louis-guilloux",
  }),
};

export default function LouisGuillouxPage() {
  const reperes = getChronologieHighlights();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Louis Guilloux
      </h1>
      <p
        className="text-lg italic mb-10"
        style={{ color: "var(--ink-light)" }}
      >
        Écrivain briochin
      </p>

      {/* Un écrivain enraciné */}
      <section className="mb-10">
        <h2 className="text-xl mb-4" style={{ color: "var(--ink)" }}>
          Un écrivain enraciné dans sa ville
        </h2>
        <p className="leading-relaxed mb-4" style={{ color: "var(--ink-light)" }}>
          Né à Saint-Brieuc, fils de cordonnier, Louis Guilloux a fait de sa
          ville natale le théâtre principal de son œuvre. <em>Le Sang Noir</em>{" "}
          (1935), son roman le plus célèbre, se déroule en une seule journée de
          1917 dans une ville de l&apos;arrière reconnaissable comme Saint-Brieuc
          — sa gare, ses lycées transformés en hôpitaux de guerre, ses places et
          ses cimetières.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
          <em>Le Jeu de Patience</em> (1949) tisse plusieurs chroniques
          parallèles couvrant un demi-siècle d&apos;histoire briochine.{" "}
          <em>L&apos;Herbe d&apos;oubli</em>, publié posthumément en 1984 chez
          Gallimard, rassemble des textes autobiographiques dans lesquels
          Guilloux évoque son enfance, le port du Légué et son premier départ
          pour l&apos;Angleterre.
        </p>
      </section>

      {/* Le départ pour l'Angleterre */}
      <section
        className="rounded-xl p-5 border mb-10"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <h2
          className="text-sm font-sans font-medium tracking-widest uppercase mb-3"
          style={{ color: "var(--stone)" }}
        >
          Le départ pour l&apos;Angleterre
        </h2>
        <SectionPhoto
          imageId="port-legue-contemporaine"
          caption="Le port du Légué aujourd'hui, point de départ du jeune Guilloux en 1914"
        />
        <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
          À quatorze ans, en 1914, le jeune Louis Guilloux embarqua au port du
          Légué à bord du <em>Bégonia</em>, invité par son oncle Will en
          Angleterre. Cet épisode, évoqué dans <em>L&apos;Herbe d&apos;oubli</em>{" "}
          (p. 184-185), marque le premier contact de Guilloux avec les langues
          étrangères et l&apos;horizon du monde au-delà de Saint-Brieuc.
        </p>
        <div className="mt-3">
          <Link
            href="/etapes/port-du-legue"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Étape Port du Légué →
          </Link>
        </div>
      </section>

      {/* Georges Palante */}
      <section className="mb-10">
        <h2 className="text-xl mb-4" style={{ color: "var(--ink)" }}>
          La rencontre avec Georges Palante
        </h2>
        <SectionPhoto
          imageId="villa-georges-palante-hillion"
          caption="La villa de La Grandville, à Hillion, où vécut et mourut Georges Palante"
        />
        <p className="leading-relaxed mb-4" style={{ color: "var(--ink-light)" }}>
          En 1916, le jeune Louis Guilloux fit la rencontre de Georges Palante
          (1862-1925), professeur de philosophie au Lycée Anatole Le Braz.
          Individualiste, critique des conformismes sociaux, Palante fut pour
          Guilloux une figure intellectuelle déterminante. À sa mort en 1925,
          Guilloux lui consacra ses <em>Souvenirs sur Georges Palante</em>.
        </p>
        <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
          Dans <em>L&apos;Herbe d&apos;oubli</em>, Guilloux évoque également sa
          relation à Palante (p. 338). Le parcours de l&apos;après-midi emprunte
          la Vélomaritime pour rejoindre Hillion, où Palante vécut et est
          enterré.
        </p>
        <div className="mt-4">
          <Link
            href="/etapes/georges-palante"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Étape Georges Palante →
          </Link>
        </div>
      </section>

      {/* Réfugiés espagnols */}
      <section className="mb-10">
        <h2 className="text-xl mb-4" style={{ color: "var(--ink)" }}>
          L&apos;engagement auprès des réfugiés espagnols
        </h2>
        <SectionPhoto
          imageId="vallee-gouedic-contemporaine"
          caption="La vallée du Gouédic aujourd'hui"
        />
        <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
          Fils de cordonnier, Louis Guilloux s&apos;engagea aux côtés de
          l&apos;abbé Vallée pour aider les réfugiés espagnols accueillis dans
          la Vallée du Gouédic. Ensemble, ils parcoururent les commerçants
          briochins pour réunir chaussures, layettes et manteaux — non sans
          résistance initiale, mais avec succès. Guilloux raconte cette épopée
          avec son sens du concret et de la complexité humaine.
        </p>
        <div className="mt-4">
          <Link
            href="/etapes/vallee-du-gouedic"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Étape Vallée du Gouédic →
          </Link>
        </div>
      </section>

      {/* Renée Guilloux */}
      <section
        className="rounded-xl p-5 border mb-10"
        style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
      >
        <h2
          className="text-sm font-sans font-medium tracking-widest uppercase mb-3"
          style={{ color: "var(--stone)" }}
        >
          Renée Guilloux
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
          Renée Guilloux, née Tricoire, était enseignante de lettres au collège
          Ernest Renan à Saint-Brieuc. Elle est notamment évoquée par Mona
          Ozouf, qui fut son élève, comme un « merveilleux professeur de
          français » doté du « génie de l&apos;explication de texte » et
          d&apos;une « ouverture sur les littératures étrangères, russe et
          anglaise notamment ». Une bibliothèque d&apos;Étables porte son nom.
        </p>
        <div className="mt-3">
          <Link
            href="/etapes/college-renan"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Étape Collège Ernest Renan →
          </Link>
        </div>
      </section>

      {/* Œuvres */}
      <section className="mb-10">
        <h2 className="text-xl mb-4" style={{ color: "var(--ink)" }}>
          Quelques œuvres
        </h2>
        <ul
          className="space-y-3 font-sans text-sm mb-4"
          style={{ color: "var(--ink-light)" }}
        >
          <li>
            <em className="font-medium" style={{ color: "var(--ink)" }}>
              Dossier Confidentiel
            </em>{" "}
            — Les Cahiers Rouges, Grasset, 1930
          </li>
          <li>
            <em className="font-medium" style={{ color: "var(--ink)" }}>
              Le Sang Noir
            </em>{" "}
            — Gallimard, 1935
          </li>
          <li>
            <em className="font-medium" style={{ color: "var(--ink)" }}>
              Le Jeu de Patience
            </em>{" "}
            — Gallimard, 1949
          </li>
          <li>
            <em className="font-medium" style={{ color: "var(--ink)" }}>
              Souvenirs sur Georges Palante
            </em>
          </li>
          <li>
            <em className="font-medium" style={{ color: "var(--ink)" }}>
              L&apos;Herbe d&apos;oubli
            </em>{" "}
            — Gallimard, 1984 (posthume)
          </li>
        </ul>
        <Link
          href="/lectures"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Voir les extraits lus, œuvre par œuvre →
        </Link>
      </section>

      <RouteDivider className="mb-10" />

      {/* Repères chronologiques */}
      <section className="mb-10">
        <h2 className="text-xl mb-2" style={{ color: "var(--ink)" }}>
          Repères chronologiques
        </h2>
        <p
          className="text-sm font-sans mb-6"
          style={{ color: "var(--stone)" }}
        >
          Quelques dates attestées, de la vie de Georges Palante à la
          publication posthume de L&apos;Herbe d&apos;oubli.
        </p>
        <ol className="space-y-5">
          {reperes.map((repere) => (
            <li
              key={repere.id}
              className="border-l-2 pl-5 py-1"
              style={{ borderColor: "var(--accent)" }}
            >
              <p
                className="text-sm font-sans font-medium tracking-widest uppercase mb-1"
                style={{ color: "var(--accent)" }}
              >
                {repere.yearLabel ?? repere.year}
              </p>
              <p className="font-medium mb-1" style={{ color: "var(--ink)" }}>
                {repere.title}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ink-light)" }}
              >
                {repere.description}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-6">
          <Link
            href="/louis-guilloux/chronologie"
            className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
            style={{ color: "var(--accent)" }}
          >
            Voir la chronologie complète →
          </Link>
        </div>
      </section>

      {/* Lien vers les étapes */}
      <div className="border-t pt-8" style={{ borderColor: "var(--frame)" }}>
        <p className="text-sm font-sans mb-4" style={{ color: "var(--stone)" }}>
          Les lieux évoqués dans son œuvre jalonnent le parcours du rallye.
        </p>
        <Link
          href="/etapes"
          className="inline-block py-1 -my-1 text-sm font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Voir toutes les étapes →
        </Link>
      </div>
    </div>
  );
}
