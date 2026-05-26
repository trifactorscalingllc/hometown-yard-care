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

// 48 work photos from Facebook (work-13 skipped — it's a promo graphic).
// Spans alternate to keep the grid lively; hero-style large tiles every ~8 photos.
const TILES: Tile[] = [
  { src: "/gallery/work-47.jpg", caption: "Golden-hour mow", type: "Large-lot lawn care", category: "Lawn Care", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work-30.jpg", caption: "Crepe myrtle island", type: "Rock + plant install", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-18.jpg", caption: "Curved mulch bed", type: "Mulch refresh", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-22.jpg", caption: "Stone retaining wall", type: "Hardscape build", category: "Stone", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-01.jpg", caption: "Open-lot stripes", type: "Weekly mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/work-40.jpg", caption: "Fresh sod cut", type: "Lawn renew", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-26.jpg", caption: "Side-yard reset", type: "Sod + cleanup", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-17.jpg", caption: "Front walk borders", type: "Bed cleanup", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-04.jpg", caption: "Stone planter wall", type: "Hardscape + plants", category: "Stone", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work-19.jpg", caption: "Driveway-side bed", type: "Mulch + edge", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-20.jpg", caption: "Bed reshape", type: "Mulch install", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-05.jpg", caption: "Poolside island", type: "Landscape design", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-21.jpg", caption: "Trim & tidy", type: "Bed maintenance", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-25.jpg", caption: "Back-corner cleanup", type: "Trim + mow", category: "Lawn Care", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-32.jpg", caption: "Ranch entry", type: "Front-yard install", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-23.jpg", caption: "Front-bed install", type: "Mulch + plant", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-43.jpg", caption: "Crisp edges", type: "Edge & mow", category: "Lawn Care", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work-24.jpg", caption: "Cleanup finish", type: "Bed touch-up", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-27.jpg", caption: "Curb stripes", type: "Mow + line trim", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-28.jpg", caption: "Property edge", type: "Trim work", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-29.jpg", caption: "Yard reset", type: "Cleanup + mow", category: "Lawn Care", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-31.jpg", caption: "Ranch driveway", type: "Drive-side cleanup", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-33.jpg", caption: "Country lot", type: "Acreage mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-34.jpg", caption: "Big property", type: "Large-lot lawn", category: "Lawn Care", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-15.jpg", caption: "Ranch rock bed", type: "Landscape install", category: "Landscaping", span: "md:col-span-1 md:row-span-2" },
  { src: "/gallery/work-36.jpg", caption: "Backyard mow", type: "Routine mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-37.jpg", caption: "Side-yard mow", type: "Routine mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-38.jpg", caption: "Bed restoration", type: "Mulch + planting", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-39.jpg", caption: "Mulch refresh", type: "Bed maintenance", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-41.jpg", caption: "Curbside trim", type: "Edge & blow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-12.jpg", caption: "Tree-ring bed", type: "Mulch refresh", category: "Mulching", span: "md:col-span-2 md:row-span-2" },
  { src: "/gallery/work-42.jpg", caption: "Stone walkway", type: "Hardscape", category: "Stone", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-44.jpg", caption: "Bed extension", type: "Mulch + plant", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-45.jpg", caption: "Driveway approach", type: "Front-yard refresh", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-46.jpg", caption: "Lawn touch-up", type: "Sod + seed", category: "Lawn Care", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-48.jpg", caption: "Property entry", type: "Front install", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-49.jpg", caption: "Ranch frontage", type: "Lawn + bed work", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-02.jpg", caption: "Stone house beds", type: "Mulch + plant", category: "Mulching", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-03.jpg", caption: "Stone-bordered beds", type: "Mulch install", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-06.jpg", caption: "Commercial frontage", type: "Mulch + edging", category: "Mulching", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-07.jpg", caption: "Building edge work", type: "Mulch + edge", category: "Stone", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-08.jpg", caption: "Green steel edge", type: "Bed edging", category: "Stone", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-09.jpg", caption: "Shaded mow", type: "Routine mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-10.jpg", caption: "Back-corner shrubs", type: "Trim + mow", category: "Lawn Care", span: "md:col-span-2 md:row-span-1" },
  { src: "/gallery/work-11.jpg", caption: "Long fence line", type: "Property mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-14.jpg", caption: "Ranch yard prep", type: "Sod + bed work", category: "Landscaping", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-16.jpg", caption: "Front-yard reshape", type: "Grading + sod", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
  { src: "/gallery/work-35.jpg", caption: "Quiet backyard", type: "Routine mow", category: "Lawn Care", span: "md:col-span-1 md:row-span-1" },
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
            Real yards, real projects — {TILES.length} recent jobs in and around Stephenville.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const count = f === "All" ? TILES.length : TILES.filter((t) => t.category === f).length;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    active === f
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground/70 hover:border-foreground/40"
                  }`}
                >
                  {f} <span className="opacity-60">· {count}</span>
                </button>
              );
            })}
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
