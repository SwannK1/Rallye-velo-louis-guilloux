/**
 * Séparateur décoratif évoquant un tracé d'itinéraire — un trait discret
 * ponctué d'un point de carte. Purement ornemental : aria-hidden, aucune
 * information n'y est jamais portée.
 *
 * `tone="accent-secondary"` reprend le même motif avec l'accent secondaire
 * (registre « après-midi / baie ») — pas une nouvelle palette, juste la
 * même pastille rendue avec l'autre variable de couleur déjà déclarée
 * dans globals.css.
 */
export default function RouteDivider({
  className = "",
  tone = "accent",
}: {
  className?: string;
  tone?: "accent" | "accent-secondary";
}) {
  const dotColor = tone === "accent-secondary" ? "var(--accent-secondary)" : "var(--accent)";

  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center gap-3 ${className}`}
    >
      <span
        className="h-px flex-1 max-w-24"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, var(--frame) 0 6px, transparent 6px 12px)",
        }}
      />
      <svg width="10" height="10" viewBox="0 0 10 10" className="flex-shrink-0">
        <circle cx="5" cy="5" r="4" fill="none" stroke={dotColor} strokeWidth="1.5" />
        <circle cx="5" cy="5" r="1.5" fill={dotColor} />
      </svg>
      <span
        className="h-px flex-1 max-w-24"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, var(--frame) 0 6px, transparent 6px 12px)",
        }}
      />
    </div>
  );
}
