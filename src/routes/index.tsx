import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { HeroCarousel } from "../components/HeroCarousel";
import { Reveal } from "../components/Reveal";
import { SERVICES, SITE } from "../components/SiteData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cason Landscaping · Lawn Care in Stephenville, TX" },
      { name: "description", content: "Locally owned lawn care and landscape in Stephenville, TX. Free quotes. Call (254) 434-3838." },
      { property: "og:title", content: "Cason Landscaping · Stephenville, TX" },
      { property: "og:description", content: "Lawn care, mulching, landscaping in Erath County." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const HERO_PHOTOS = [
  "/gallery/work-47.jpg",
  "/gallery/work-04.jpg",
  "/gallery/work-30.jpg",
  "/gallery/work-22.jpg",
  "/gallery/work-09.jpg",
  "/gallery/work-43.jpg",
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[640px] flex-col text-white md:min-h-[760px]">
        <HeroCarousel photos={HERO_PHOTOS} />

        {/* Location strip pinned to top */}
        <div className="relative z-10 border-b border-white/15 bg-black/30 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] md:px-8">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>Serving Stephenville, TX · Erath County</span>
          </div>
        </div>

        {/* Centered headline + CTAs */}
        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-24 text-center md:px-8">
          <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Honest lawn care.
            <br />
            Done right.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Lawn care, mulching, and landscape work from a local crew you'll see every week.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-colors hover:bg-secondary/90"
            >
              Book a free quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white hover:text-secondary"
            >
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-b border-border bg-background py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-14 max-w-2xl">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              What we do
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Seven services covering most properties in Erath County. One-time visits or a recurring schedule · your call.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 80}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="group flex h-full flex-col gap-3 bg-background p-7 transition-colors hover:bg-muted/60"
                >
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold uppercase tracking-wider text-primary">
                    Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal className="mb-10 flex items-end justify-between gap-4">
            <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Recent work
            </h2>
            <Link to="/gallery" className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary">
              See all <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal className="grid grid-cols-2 gap-2 md:grid-cols-4 md:grid-rows-2 md:gap-3">
            <PreviewTile className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" src="/gallery/work-04.jpg" label="Stone planter wall" />
            <PreviewTile className="aspect-square" src="/gallery/work-30.jpg" label="Rock & plant island" />
            <PreviewTile className="aspect-square" src="/gallery/work-22.jpg" label="Stone retaining wall" />
            <PreviewTile className="aspect-square" src="/gallery/work-18.jpg" label="Curved mulch bed" />
            <PreviewTile className="aspect-square" src="/gallery/work-43.jpg" label="Crisp edges" />
          </Reveal>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-5xl">
            Ready when you are.
          </h2>
          <p className="max-w-xl text-base text-primary-foreground/80 md:text-lg">
            Free, honest quotes. No call center, no contract pressure · just a price and a plan.
          </p>
          <div className="mt-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-5">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-secondary/90">
              Book a free quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 text-base font-bold uppercase tracking-wider text-white hover:text-secondary">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function PreviewTile({ className = "", src, label }: { className?: string; src: string; label: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-sm bg-muted ${className}`}>
      <img
        src={src}
        alt={`${label} by Cason Landscaping`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-3 text-xs font-medium uppercase tracking-wider text-white">
        {label}
      </figcaption>
    </figure>
  );
}
