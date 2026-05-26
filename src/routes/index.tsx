import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceIcon } from "../components/ServiceIcon";
import { SERVICES, SITE } from "../components/SiteData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cason Landscaping Lawn Care in Stephenville, TX" },
      { name: "description", content: "Locally owned lawn care and landscape in Stephenville, TX. Free quotes from a real neighbor. Call (254) 434-3838." },
      { property: "og:title", content: "Cason Landscaping Stephenville, TX" },
      { property: "og:description", content: "Yards that look like home. Lawn care, mulching, landscaping in Erath County." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-16 md:grid-cols-2 md:gap-16 md:px-8 md:pt-24">
          <div className="flex flex-col justify-center">
            <p className="mb-5 inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-8 bg-accent" /> Stephenville, Texas
            </p>
            <h1 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Yards that look like <em>home</em>.
            </h1>
            <p className="mt-6 max-w-md text-base text-foreground/75 md:text-lg">
              Lawn care and landscape work done by a neighbor, not a corporation.
              Honest quotes, careful work, and yards your family will actually want to sit in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5"
              >
                Get a free quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 rounded-sm border border-foreground/20 bg-transparent px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-foreground/60">
              <span>● Free estimates</span>
              <span>● Weekly &amp; one-time</span>
              <span>● Locally owned</span>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-muted">
              <img
                src="/gallery/work-47.jpg"
                alt="A finished yard cared for by Cason Landscaping in Stephenville, TX"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden h-24 w-24 rounded-sm bg-accent md:block" aria-hidden />
            <div className="absolute -top-4 -right-4 hidden h-16 w-16 rounded-sm border border-primary md:block" aria-hidden />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-accent">What we do</p>
              <h2 className="font-display text-4xl md:text-5xl">Honest work, <em>start to finish</em>.</h2>
            </div>
            <p className="max-w-sm text-sm text-foreground/70">
              Seven services that cover most yards in Erath County. Need something not listed? Just ask.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className="group flex flex-col gap-4 bg-background p-7 transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-primary"><ServiceIcon name={s.icon} /></span>
                  <span className="font-display text-xs text-foreground/40">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl leading-tight">{s.name}</h3>
                <p className="text-sm text-foreground/65">{s.short}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  Learn more <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
            {/* 8th dark card */}
            <Link
              to="/contact"
              className="group flex flex-col gap-4 bg-primary p-7 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <div className="flex items-center justify-between">
                <span className="text-accent"><ServiceIcon name="question" /></span>
                <span className="font-display text-xs text-primary-foreground/40">+</span>
              </div>
              <h3 className="font-display text-2xl leading-tight">Not sure what you need?</h3>
              <p className="text-sm text-primary-foreground/75">Tell us what's going on with your yard. We'll figure it out together.</p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Let's talk <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* LOCALLY OWNED */}
      <section className="bg-grain-dark bg-primary py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
          <div>
            <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-accent">Who we are</p>
            <h2 className="font-display text-4xl md:text-5xl">Locally owned. <em>Stephenville</em> grown.</h2>
            <p className="mt-6 max-w-md text-base text-primary-foreground/75">
              Cason Landscaping is owned and operated by {SITE.owner} your neighbor, not a franchise.
              Every yard gets the same care he'd give his own.
            </p>
            <div className="client-placeholder mt-6 max-w-md !border-accent !bg-accent/10 !text-primary-foreground">
              [CLIENT: short owner bio paragraph how Kade started, what he loves about the work]
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px self-center bg-primary-foreground/15">
            <div className="bg-primary p-8">
              <p className="font-display text-5xl text-accent md:text-6xl">
                <span className="client-placeholder !inline !border-accent !p-1 !text-xs !text-accent">[#]</span>
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Years serving Erath County</p>
            </div>
            <div className="bg-primary p-8">
              <p className="font-display text-5xl text-accent md:text-6xl">
                <span className="client-placeholder !inline !border-accent !p-1 !text-xs !text-accent">[#]</span>
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">Yards maintained weekly</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 font-display text-xs uppercase tracking-[0.25em] text-accent">Recent work</p>
              <h2 className="font-display text-4xl md:text-5xl">A look <em>around</em>.</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent">
              See the full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2 md:gap-4">
            <GalleryTile className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" src="/gallery/work-04.jpg" label="Stone planter wall" />
            <GalleryTile className="aspect-square" src="/gallery/work-30.jpg" label="Rock & plant island" />
            <GalleryTile className="aspect-square" src="/gallery/work-22.jpg" label="Stone retaining wall" />
            <GalleryTile className="aspect-square" src="/gallery/work-18.jpg" label="Curved mulch bed" />
            <GalleryTile className="aspect-square" src="/gallery/work-43.jpg" label="Crisp edges" />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 text-center md:px-8">
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Ready for a yard you <em>don't have to think about</em>?
          </h2>
          <p className="max-w-xl text-primary-foreground/75">
            Free, honest quotes. No pressure, no upsell. Just a price and a plan.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
              Get a free quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/30 px-7 py-4 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5">
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function GalleryTile({ className = "", src, label }: { className?: string; src: string; label: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-sm border border-border bg-muted ${className}`}>
      <img
        src={src}
        alt={`${label} by Cason Landscaping`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3 text-xs text-white">
        {label} · <span className="opacity-75">Cason Landscaping</span>
      </figcaption>
    </figure>
  );
}
