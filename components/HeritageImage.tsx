import Image from "next/image";
import type { EtapeImage } from "@/lib/data/etapes";

function Figure({
  image,
  priority,
  sizes,
}: {
  image: EtapeImage;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <figure>
      <div
        className="relative w-full overflow-hidden rounded-xl border"
        style={{
          borderColor: "var(--frame)",
          background: "var(--muted)",
          aspectRatio: "4 / 3",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover"
          priority={priority}
        />
      </div>
      {(image.caption || image.credit) && (
        <figcaption
          className="mt-2 text-xs font-sans leading-snug"
          style={{ color: "var(--stone)" }}
        >
          {image.caption}
          {image.caption && image.credit && " — "}
          {image.credit}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Affiche l'iconographie patrimoniale d'une étape : une image seule,
 * ou deux images (hier / aujourd'hui) côte à côte sur les écrans larges.
 */
export default function HeritageImageGallery({
  images,
  priority = false,
}: {
  images: EtapeImage[];
  priority?: boolean;
}) {
  if (!images || images.length === 0) return null;

  const sizes =
    images.length > 1
      ? "(min-width: 640px) 340px, 100vw"
      : "(min-width: 768px) 700px, 100vw";

  return (
    <div
      className={
        images.length > 1
          ? "grid gap-4 sm:grid-cols-2"
          : "grid gap-4"
      }
    >
      {images.map((image, i) => (
        <Figure
          key={image.src}
          image={image}
          priority={priority && i === 0}
          sizes={sizes}
        />
      ))}
    </div>
  );
}
