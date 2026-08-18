const EMBED_PARAMS = new URLSearchParams({
  scaleControl: "false",
  miniMap: "false",
  scrollWheelZoom: "false",
  zoomControl: "true",
  editMode: "disabled",
  moreControl: "true",
  searchControl: "null",
  tilelayersControl: "null",
  embedControl: "null",
  datalayersControl: "false",
  onLoadPanel: "none",
  captionBar: "false",
});

/**
 * Intègre une carte uMap existante en iframe responsive. Le zoom à la molette est
 * désactivé pour que le défilement de la page ne soit jamais capturé par la carte —
 * important en usage mobile, pendant le rallye.
 */
export default function UMapEmbed({
  umapUrl,
  title,
  className = "",
}: {
  umapUrl: string;
  title: string;
  className?: string;
}) {
  const embedSrc = `${umapUrl}?${EMBED_PARAMS.toString()}`;

  return (
    <div className={className}>
      <div
        className="relative w-full overflow-hidden rounded-xl border h-[280px] sm:h-[380px]"
        style={{ borderColor: "var(--frame)", background: "var(--muted)" }}
      >
        <iframe
          src={embedSrc}
          title={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
        />
      </div>
      <div className="mt-2">
        <a
          href={umapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-sans font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 rounded"
          style={{ color: "var(--accent)" }}
        >
          Ouvrir la carte en plein écran ↗
          <span className="sr-only"> (s&apos;ouvre dans un nouvel onglet)</span>
        </a>
      </div>
    </div>
  );
}
