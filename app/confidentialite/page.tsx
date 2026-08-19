import type { Metadata } from "next";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Confidentialité";
const description =
  "Ce que le site de la Randonnée vélo Louis Guilloux collecte — et ne collecte pas — sur ses visiteurs.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/confidentialite",
  }),
};

export default function ConfidentialitePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Confidentialité
      </h1>
      <p
        className="text-lg leading-relaxed mb-10"
        style={{ color: "var(--ink-light)" }}
      >
        Ce site respecte la vie privée de ses visiteurs. Voici précisément ce
        qui est mesuré, et ce qui ne l&apos;est pas.
      </p>

      <div className="flex flex-col gap-8">
        <section
          className="border rounded-xl p-5 sm:p-6"
          style={{ borderColor: "var(--frame)" }}
        >
          <h2
            className="text-xl mb-3"
            style={{ color: "var(--ink)" }}
          >
            Mesure d&apos;audience
          </h2>
          <p
            className="leading-relaxed mb-3"
            style={{ color: "var(--ink-light)" }}
          >
            Ce site utilise Vercel Web Analytics pour compter, de façon
            agrégée et anonyme, les pages consultées. Cette mesure ne dépose
            aucun cookie, n&apos;utilise aucun identifiant permettant de
            reconnaître un visiteur d&apos;une visite à l&apos;autre, et ne
            collecte aucune donnée personnelle (pas de nom, pas d&apos;adresse
            e-mail, pas d&apos;adresse IP conservée).
          </p>
          <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
            Les seules informations agrégées sont : la page visitée, le pays
            ou la région approximative, le type d&apos;appareil (mobile ou
            ordinateur) et le site d&apos;où vient le visiteur, le cas
            échéant. Aucun profil individuel n&apos;est constitué.
          </p>
        </section>

        <section
          className="rounded-xl p-5 sm:p-6 border"
          style={{ background: "var(--muted)", borderColor: "var(--frame)" }}
        >
          <h2
            className="text-sm font-sans font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--stone)" }}
          >
            Cookies
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
            Ce site ne dépose aucun cookie, ni pour la mesure d&apos;audience,
            ni pour un autre usage.
          </p>
        </section>

        <section
          className="border rounded-xl p-5 sm:p-6"
          style={{ borderColor: "var(--frame)" }}
        >
          <h2
            className="text-xl mb-3"
            style={{ color: "var(--ink)" }}
          >
            Cartes et liens externes
          </h2>
          <p className="leading-relaxed" style={{ color: "var(--ink-light)" }}>
            Les cartes des parcours ouvrent uMap dans un nouvel onglet ; ce
            site externe applique sa propre politique de confidentialité,
            indépendante de celle de la Randonnée vélo Louis Guilloux.
          </p>
        </section>
      </div>
    </div>
  );
}
