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
  caption: string;
  type: string; // "Mulch beds", etc.
  category: "Landscaping" | "Lawn Care" | "Mulching" | "Stone";
  span: string;
  tone: "primary" | "accent" | "secondary" | "muted";
};

const TILES: Tile[] = [
  { caption: "Front bed refresh", type: "Mulch beds", category: "Mulching", span: "md:col-span-2 md:row-span-2", tone: "primary" },
  { caption: "Backyard reshape", type: "Landscape design", category: "Landscaping", span: "md:col-span-1 md:row-span-1", tone: "secondary" },
  { caption: "Driveway edge", type: "Stone border", category: "Stone", span: "md:col-span-1 md:row-span-1", tone: "accent" },
  { caption: "Weekly mow", type: "Lawn care", category: "Lawn Care", span: "md:col-span-2 md:row-span-1", tone: "muted" },
  { caption: "Bermuda fill-in", type: "Overseeding", category: "Lawn Care", span: "md:col-span-1 md:row-span-2", tone: "primary" },
  { caption: "River-rock bed", type: "Stonework", category: "Stone", span: "md:col-span-1 md:row-span-1", tone: "accent" },
  { caption: "Shrub shaping", type: "Bush trim", category: "Landscaping", span: "md:col-span-2 md:row-span-1", tone: "secondary" },
  { caption: "Fresh hardwood", type: "Mulch install", category: "Mulching", span: "md:col-span-1 md:row-span-1", tone: "accent" },
  { caption: "Front walkway", type: "Stone path", category: "Stone", span: "md:col-span-1 md:row-span-1", tone: "muted" },
  { caption: "Clean edge work", type: "Lawn care", category: "Lawn Care", span: "md:col-span-2 md:row-span-1", tone: "primary" },
  { caption: "Bed extension", type: "Landscape add-on", category: "Landscaping", span: "md:col-span-1 md:row-span-1", tone: "secondary" },
  { caption: "Mulch + edge", type: "Mulch refresh", category: "Mulching", span: "md:col-span-1 md:row-span-1", tone: "accent" },
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
            Real yards, real projects. Photos are added as jobs wrap up.
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
            {tiles.map((t, i) => (
              <Tile key={i} tile={t} />
            ))}
          </div>
          <div className="client-placeholder mt-10 inline-block">
            [CLIENT: send real job photos — landscape orientation works best]
          </div>
        </div>
      </section>
    </>
  );
}

function Tile({ tile }: { tile: Tile }) {
  const toneClass = {
    primary: "from-primary/30 to-secondary/30",
    accent: "from-accent/30 to-muted",
    secondary: "from-secondary/40 to-primary/20",
    muted: "from-muted to-accent/15",
  }[tile.tone];
  return (
    <figure className={`group relative overflow-hidden rounded-sm border border-border bg-gradient-to-br ${toneClass} ${tile.span}`}>
      <div className="flex h-full w-full items-center justify-center p-3">
        <div className="client-placeholder">[CLIENT: photo]</div>
      </div>
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-white">
        <div className="text-sm font-semibold">{tile.caption}</div>
        <div className="text-xs opacity-80">{tile.type}</div>
      </figcaption>
    </figure>
  );
}