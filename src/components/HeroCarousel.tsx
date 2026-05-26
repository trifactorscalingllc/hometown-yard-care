import { useEffect, useState } from "react";

type Props = {
  photos: string[];
  intervalMs?: number;
};

export function HeroCarousel({ photos, intervalMs = 6000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden bg-black">
      {photos.map((src, i) => (
        <div
          key={src}
          className={`hero-photo ${i === index ? "is-active" : ""}`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/75" />
    </div>
  );
}
