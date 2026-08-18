import Image from "next/image";
import type { Etape } from "@/lib/data/etapes";

export default function EtapeThumb({ etape }: { etape: Etape }) {
  const image = etape.images?.[0];

  if (!image) {
    return (
      <span
        className="w-12 h-12 flex-shrink-0 rounded-lg border"
        style={{ borderColor: "var(--frame)", background: "var(--muted)" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <span
      className="relative w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg border"
      style={{ borderColor: "var(--frame)" }}
    >
      <Image src={image.src} alt="" fill sizes="48px" className="object-cover" />
    </span>
  );
}
