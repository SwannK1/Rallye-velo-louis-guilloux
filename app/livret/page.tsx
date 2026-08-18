import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata, SITE_NAME } from "@/lib/seo";

const title = "Livret";
const description =
  "Le livret du participant du Rallye Vélo Louis Guilloux, 20 septembre 2026 à Saint-Brieuc.";

export const metadata: Metadata = {
  title,
  ...pageMetadata({
    ogTitle: `${title} | ${SITE_NAME}`,
    description,
    path: "/livret",
  }),
};

export default function LivretPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <h1
        className="text-3xl sm:text-4xl mb-4"
        style={{ color: "var(--ink)" }}
      >
        Livret du participant
      </h1>
      <p
        className="text-lg leading-relaxed mb-6"
        style={{ color: "var(--ink-light)" }}
      >
        Le livret accompagne le rallye étape par étape, avec les extraits
        littéraires et les informations pratiques de chaque lieu.
      </p>
      <p
        className="text-sm font-sans"
        style={{ color: "var(--stone)" }}
      >
        Sa version imprimable n&apos;est pas encore publiée. En attendant,
        chaque étape est consultable en ligne depuis la page{" "}
        <Link
          href="/etapes"
          className="underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Étapes
        </Link>
        .
      </p>
    </div>
  );
}
