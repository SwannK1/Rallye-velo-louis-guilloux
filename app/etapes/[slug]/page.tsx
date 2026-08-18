import { notFound } from "next/navigation";
import Link from "next/link";
import { getEtapeBySlug, etapesData } from "@/lib/data/etapes";
import { parcoursData, getParcoursById } from "@/lib/data/parcours";
import HeritageImageGallery from "@/components/HeritageImage";
import JsonLd from "@/components/JsonLd";
import { pageMetadata, SITE_NAME } from "@/lib/seo";
import { breadcrumbJsonLd } from "@/lib/structuredData";

export function generateStaticParams() {
  return etapesData.map((etape) => ({ slug: etape.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/etapes/[slug]">) {
  const { slug } = await params;
  const etape = getEtapeBySlug(slug);
  if (!etape) return {};

  const parcours = etape.routeIds?.[0]
    ? getParcoursById(etape.routeIds[0])
    : undefined;
  const description = [
    etape.theme,
    parcours && etape.order !== undefined
      ? `Étape ${etape.order} du ${parcours.name.toLowerCase()} du Rallye Vélo Louis Guilloux, le 20 septembre 2026.`
      : "Étape du Rallye Vélo Louis Guilloux, le 20 septembre 2026 à Saint-Brieuc.",
  ]
    .filter(Boolean)
    .join(". ");

  const image = etape.images?.[0];

  return {
    title: etape.title,
    ...pageMetadata({
      ogTitle: `${etape.title} | ${SITE_NAME}`,
      description,
      path: `/etapes/${etape.slug}`,
      image: image ? { url: image.src, alt: image.alt } : undefined,
    }),
  };
}

export default async function EtapePage({
  params,
}: PageProps<"/etapes/[slug]">) {
  const { slug } = await params;
  const etape = getEtapeBySlug(slug);

  if (!etape) notFound();

  const index = etapesData.findIndex((e) => e.slug === slug);
  const prev = index > 0 ? etapesData[index - 1] : null;
  const next = index < etapesData.length - 1 ? etapesData[index + 1] : null;

  const parcours = parcoursData.filter((p) =>
    etape.routeIds?.some((id) => p.id === id)
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Étapes", path: "/etapes" },
          { name: etape.title, path: `/etapes/${etape.slug}` },
        ])}
      />
      {/* Fil d'Ariane */}
      <nav aria-label="Fil d'Ariane" className="mb-8">
        <Link
          href="/etapes"
          className="inline-block py-1 -my-1 text-sm font-sans transition-colors rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          style={{ color: "var(--stone)" }}
        >
          ← Toutes les étapes
        </Link>
      </nav>

      {/* En-tête */}
      <header className="mb-10">
        {parcours.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {parcours.map((p) => (
              <Link
                key={p.id}
                href={`/parcours/${p.slug}`}
                className="text-xs font-sans font-medium px-2.5 py-1 rounded-full border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: "var(--frame)",
                  color: "var(--stone)",
                }}
              >
                {p.name}
              </Link>
            ))}
          </div>
        )}
        {etape.order !== undefined && (
          <p
            className="text-sm font-sans mb-2"
            style={{ color: "var(--stone)" }}
          >
            Étape {etape.order}
          </p>
        )}
        <h1
          className="text-3xl sm:text-4xl"
          style={{ color: "var(--ink)" }}
        >
          {etape.title}
        </h1>
        {etape.theme && (
          <p
            className="mt-3 text-base italic leading-relaxed"
            style={{ color: "var(--ink-light)" }}
          >
            {etape.theme}
          </p>
        )}
        {etape.motsCles && etape.motsCles.length > 0 && (
          <ul className="flex flex-wrap gap-2 mt-4">
            {etape.motsCles.map((mot) => (
              <li
                key={mot}
                className="text-xs font-sans font-medium px-2.5 py-1 rounded-full uppercase tracking-wide"
                style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
              >
                {mot}
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Fil rouge — depuis l'étape précédente */}
      {etape.filRouge?.depuisPrecedente && (
        <p
          className="mb-10 text-sm italic leading-relaxed border-l-2 pl-4"
          style={{ color: "var(--stone)", borderColor: "var(--frame)" }}
        >
          {etape.filRouge.depuisPrecedente}
        </p>
      )}

      {/* Iconographie */}
      {etape.images && etape.images.length > 0 && (
        <div className="mb-10">
          <HeritageImageGallery images={etape.images} priority />
        </div>
      )}

      {/* Contenu principal */}
      <div className="space-y-10">
        {/* Introduction */}
        {etape.introduction && (
          <section>
            {!etape.introduction.verified && (
              <p
                className="text-xs font-sans px-3 py-2 rounded mb-3 border"
                style={{
                  color: "var(--accent)",
                  background: "var(--accent-bg)",
                  borderColor: "var(--accent)",
                }}
              >
                Contenu en cours de vérification
              </p>
            )}
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--ink-light)" }}
            >
              {etape.introduction.text}
            </p>
          </section>
        )}

        {/* Contexte historique */}
        {etape.history && (
          <section>
            <h2
              className="text-xl mb-3"
              style={{ color: "var(--ink)" }}
            >
              Ce qui s&apos;est passé ici
            </h2>
            {!etape.history.verified && (
              <p
                className="text-xs font-sans px-3 py-2 rounded mb-3 border"
                style={{
                  color: "var(--accent)",
                  background: "var(--accent-bg)",
                  borderColor: "var(--accent)",
                }}
              >
                Contenu en cours de vérification
              </p>
            )}
            <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
              {etape.history.text}
            </p>
          </section>
        )}

        {/* Lien avec Guilloux */}
        {etape.guillouxConnection && (
          <section
            className="rounded-xl p-5 border"
            style={{
              background: "var(--muted)",
              borderColor: "var(--frame)",
            }}
          >
            <h2
              className="text-sm font-sans font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--stone)" }}
            >
              Louis Guilloux et ce lieu
            </h2>
            {!etape.guillouxConnection.verified && (
              <p
                className="text-xs font-sans px-3 py-2 rounded mb-3 border"
                style={{
                  color: "var(--accent)",
                  background: "var(--accent-bg)",
                  borderColor: "var(--accent)",
                }}
              >
                Contenu en cours de vérification
              </p>
            )}
            <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
              {etape.guillouxConnection.text}
            </p>
          </section>
        )}

        {/* Extraits littéraires */}
        {etape.literaryExtracts && etape.literaryExtracts.length > 0 && (
          <section>
            <h2
              className="text-xl mb-6"
              style={{ color: "var(--ink)" }}
            >
              {etape.literaryExtracts.length > 1
                ? "Extraits littéraires"
                : "Extrait littéraire"}
            </h2>
            <div className="space-y-8">
              {etape.literaryExtracts.map((extract, i) => (
                <div key={i}>
                  <div
                    className="border-l-2 pl-5 py-1"
                    style={{ borderColor: "var(--accent)" }}
                  >
                    {extract.sourceNote && (
                      <p
                        className="text-xs font-sans uppercase tracking-wider mb-3"
                        style={{ color: "var(--stone)" }}
                      >
                        {extract.sourceNote}
                      </p>
                    )}
                    <blockquote
                      className="text-base leading-loose"
                      style={{
                        fontFamily:
                          "var(--font-lora), Georgia, 'Times New Roman', serif",
                        color: "var(--ink-light)",
                        fontStyle: "italic",
                        whiteSpace: "pre-wrap",
                      }}
                    >
                      {extract.text}
                    </blockquote>
                  </div>
                  <cite
                    className="not-italic text-sm font-sans mt-3 block"
                    style={{ color: "var(--stone)" }}
                  >
                    {extract.author}, <em>{extract.work}</em>
                    {extract.pages && `, p. ${extract.pages}`}
                    {extract.edition && ` (${extract.edition})`}
                  </cite>
                  {!extract.verified && (
                    <p
                      className="text-xs font-sans mt-1"
                      style={{ color: "var(--accent)" }}
                    >
                      Référence en cours de vérification
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Pour comprendre */}
        {etape.interpretation && (
          <section>
            <h2
              className="text-xl mb-3"
              style={{ color: "var(--ink)" }}
            >
              Pour comprendre
            </h2>
            {!etape.interpretation.verified && (
              <p
                className="text-xs font-sans px-3 py-2 rounded mb-3 border"
                style={{
                  color: "var(--accent)",
                  background: "var(--accent-bg)",
                  borderColor: "var(--accent)",
                }}
              >
                Contenu en cours de vérification
              </p>
            )}
            <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
              {etape.interpretation.text}
            </p>
          </section>
        )}

        {/* Infos pratiques */}
        {etape.practicalInfo && (
          <section>
            <h2
              className="text-xl mb-3"
              style={{ color: "var(--ink)" }}
            >
              Informations pratiques
            </h2>
            <p
              className="font-sans text-sm leading-relaxed"
              style={{ color: "var(--ink-light)" }}
            >
              {etape.practicalInfo}
            </p>
          </section>
        )}
      </div>

      {/* Fil rouge — vers l'étape suivante */}
      {etape.filRouge?.versSuivante && (
        <p
          className="mt-10 text-sm italic leading-relaxed border-l-2 pl-4"
          style={{ color: "var(--stone)", borderColor: "var(--frame)" }}
        >
          {etape.filRouge.versSuivante}
        </p>
      )}

      {/* Sur le même thème */}
      {etape.etapesLiees && etape.etapesLiees.length > 0 && (
        <section className="mt-10">
          <h2
            className="text-sm font-sans font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--stone)" }}
          >
            Sur le même thème
          </h2>
          <ul className="flex flex-wrap gap-2">
            {etape.etapesLiees.map((slug) => {
              const liee = getEtapeBySlug(slug);
              if (!liee) return null;
              return (
                <li key={slug}>
                  <Link
                    href={`/etapes/${slug}`}
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-sans border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    style={{ borderColor: "var(--frame)", color: "var(--ink-light)" }}
                  >
                    {liee.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Navigation entre étapes */}
      {(prev || next) && (
        <nav
          aria-label="Navigation entre étapes"
          className="mt-14 border-t pt-8"
          style={{ borderColor: "var(--frame)" }}
        >
          <h2
            className="text-sm font-sans font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--stone)" }}
          >
            Continuer le parcours
          </h2>
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link
                href={`/etapes/${prev.slug}`}
                className="flex flex-col border rounded-xl px-4 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: "var(--frame)",
                }}
              >
                <span
                  className="text-xs font-sans mb-1"
                  style={{ color: "var(--stone)" }}
                >
                  ← Étape précédente
                </span>
                <span
                  className="font-sans font-medium text-sm"
                  style={{ color: "var(--ink)" }}
                >
                  {prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/etapes/${next.slug}`}
                className="flex flex-col text-right border rounded-xl px-4 py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{
                  borderColor: "var(--frame)",
                }}
              >
                <span
                  className="text-xs font-sans mb-1"
                  style={{ color: "var(--stone)" }}
                >
                  Étape suivante →
                </span>
                <span
                  className="font-sans font-medium text-sm"
                  style={{ color: "var(--ink)" }}
                >
                  {next.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </nav>
      )}
    </div>
  );
}
