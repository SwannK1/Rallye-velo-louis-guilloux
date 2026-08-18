import type { ReactNode } from "react";

type QuoteProps = {
  children: ReactNode;
  author?: string;
  work?: string;
  reference?: string;
  size?: "default" | "large";
  className?: string;
};

/**
 * Composant éditorial pour un extrait littéraire : guillemets typographiques
 * décoratifs, filet vertical, référence distincte du texte cité. Ne modifie
 * jamais le texte transmis en `children`.
 */
export default function Quote({
  children,
  author,
  work,
  reference,
  size = "default",
  className = "",
}: QuoteProps) {
  const isLarge = size === "large";

  return (
    <figure className={className}>
      <div
        className="relative border-l-4 rounded-r-lg"
        style={{
          borderColor: "var(--accent)",
          background: isLarge ? "var(--muted)" : "transparent",
          backgroundImage: isLarge
            ? "radial-gradient(rgba(28,24,16,0.035) 1px, transparent 1px)"
            : undefined,
          backgroundSize: isLarge ? "10px 10px" : undefined,
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none select-none absolute -top-3 left-4 leading-none"
          style={{
            fontFamily: "var(--font-playfair), Georgia, serif",
            fontSize: isLarge ? "4.5rem" : "3rem",
            color: "var(--accent)",
            opacity: 0.22,
          }}
        >
          &laquo;
        </span>
        <blockquote
          className={
            isLarge
              ? "relative pl-6 pr-4 sm:pl-8 py-5 text-xl sm:text-2xl leading-snug"
              : "relative pl-5 pr-3 py-4 text-base leading-loose"
          }
          style={{
            fontFamily: isLarge
              ? "var(--font-playfair), Georgia, serif"
              : "var(--font-lora), Georgia, 'Times New Roman', serif",
            fontStyle: "italic",
            color: isLarge ? "var(--ink)" : "var(--ink-light)",
            whiteSpace: "pre-wrap",
          }}
        >
          {children}
        </blockquote>
      </div>
      {(author || work || reference) && (
        <figcaption
          className="not-italic text-sm font-sans mt-3"
          style={{ color: "var(--stone)" }}
        >
          {author}
          {work && (
            <>
              {author && ", "}
              <em>{work}</em>
            </>
          )}
          {reference && `, ${reference}`}
        </figcaption>
      )}
    </figure>
  );
}
