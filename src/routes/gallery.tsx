import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Cason Landscaping, Stephenville TX" },
      { name: "description", content: "Recent lawn care, landscaping, mulch, and stonework projects in and around Stephenville, Texas." },
      { property: "og:title", content: "Gallery — Cason Landscaping" },
      { property: "og:description", content: "See yards we've kept and projects we've put in." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

type Tile = {
  src: string;
  caption: string;
  type: string;
  category: "Landscaping" | "Lawn Care" | "Mulching" | "Stone";
  span: string;
};

const TILES: Tile[] = [
  { src: "/gallery/work-04.jpg", caption: "Stone planter wall", type: "Hardscape + plant install", category: "Stone", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work-09.jpg", caption: "Shaded front lawn", type: "Weekly mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-17.jpg", caption: "Front entry refresh", type: "Mulch + granite path", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-03.jpg", caption: "Stone-bordered beds", type: "Mulch install", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-05.jpg", caption: "Poolside island", type: "Landscape design", category: "Landscaping", span: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/work-15.jpg", caption: "Ranch house rock bed", type: "Landscape install", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-12.jpg", caption: "Tree-ring bed", type: "Mulch refresh", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-07.jpg", caption: "Commercial frontage", type: "Mulch + edging", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-08.jpg", caption: "Green steel edge", type: "Bed edging", category: "Stone", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-06.jpg", caption: "Pediatrics clinic", type: "Commercial upkeep", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-01.jpg", caption: "Open-lot mow", type: "Large-property lawn", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-11.jpg", caption: "Back-fence shrubs", type: "Trimming + mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-10.jpg", caption: "Backyard cleanup", type: "Bed shaping", category: "Landscaping", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-14.jpg", caption: "Ranch-house yard prep", type: "Sod + bed work", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-16.jpg", caption: "Front-yard reshape", type: "Grading + sod", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-02.jpg", caption: "Stone house beds", type: "Mulch + plant install", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
];

const FILTERS = ["All", "Landscaping", "Lawn Care", "Mulching", "Stone"] as const;

function GalleryPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>("All");
  const tiles = active === "All" ? TILES : TILES.filter((t) => t.category === active);

  return (
    <>
      <section className="border-b border-border py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-accent">Recent work</p>
          <h1 className="font-display text-5xl md:text-7xl">Around the <em>neighborhood</em>.</h1>
          <p className="mt-5 max-w-xl text-foreground/75">
            Real yards, real projects — pulled straight from recent jobs in and around Stephenville.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70 hover:border-foreground/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {tiles.map((t) => (
              <Tile key={t.src} tile={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Tile({ tile }: { tile: Tile }) {
  return (
    <figure className={`group relative overflow-hidden rounded-sm border border-border bg-muted ${tile.span}`}>
      <img
        src={tile.src}
        alt={`${tile.caption} — ${tile.type}`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-white">
        <div className="text-sm font-semibold">{tile.caption}</div>
        <div className="text-xs opacity-80">{tile.type}</div>
      </figcaption>
    </figure>
  );
}
