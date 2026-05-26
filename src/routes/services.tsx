import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, MapPin } from "lucide-react";
import { HeroCarousel } from "../components/HeroCarousel";
import { SERVICES, SITE } from "../components/SiteData";

const HERO_PHOTOS = [
  "/gallery/work-47.jpg",
  "/gallery/work-04.jpg",
  "/gallery/work-30.jpg",
  "/gallery/work-22.jpg",
  "/gallery/work-09.jpg",
  "/gallery/work-43.jpg",
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Cason Landscaping, Stephenville TX" },
      { name: "description", content: "Lawn care, landscaping, mulching, bush trimming, leaf removal, overseeding, and aeration in Stephenville, TX." },
      { property: "og:title", content: "Services · Cason Landscaping" },
      { property: "og:description", content: "Seven services that cover almost any yard in Erath County." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative isolate flex min-h-[640px] flex-col text-white md:min-h-[760px]">
        <HeroCarousel photos={HERO_PHOTOS} />

        <div className="relative z-10 border-b border-white/15 bg-black/30 backdrop-blur-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] md:px-8">
            <MapPin className="h-3.5 w-3.5" aria-hidden />
            <span>Serving Stephenville, TX · Erath County</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-24 text-center md:px-8">
          <h1 className="max-w-3xl font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Seven services.
            <br />
            One local crew.
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/85 md:text-lg">
            Every service is offered as a one-time visit or a recurring schedule. Free quote, honest work, real follow-through.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-b border-border py-12 last:border-b-0 md:py-16"
            >
              <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <div>
                  <p className="font-display text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
                    {s.name}
                  </h2>
                </div>
                <div>
                  <p className="max-w-xl text-base leading-relaxed text-foreground/85">{s.long}</p>
                  <ul className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span className="text-foreground/85">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
                  >
                    Quote this service <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Not sure which one you need?
          </h2>
          <p className="max-w-md text-primary-foreground/80">
            Walk us through the yard. We'll point you to the right service or send a free quote.
          </p>
          <a
            href={SITE.phoneHref}
            className="mt-3 inline-flex items-center gap-2 rounded-sm bg-secondary px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white hover:bg-secondary/90"
          >
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
