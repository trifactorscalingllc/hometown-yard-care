import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Phone } from "lucide-react";
import { ServiceIcon } from "../components/ServiceIcon";
import { SERVICES, SITE } from "../components/SiteData";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cason Landscaping, Stephenville TX" },
      { name: "description", content: "Lawn care, landscaping, mulching, bush trimming, leaf removal, overseeding, and aeration in Stephenville, TX." },
      { property: "og:title", content: "Services — Cason Landscaping" },
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
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-4 font-display text-xs uppercase tracking-[0.25em] text-accent">Our services</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[1] md:text-7xl">
            Seven ways we keep your <em>place looking right</em>.
          </h1>
          <p className="mt-6 max-w-xl text-foreground/75">
            Every service is offered as a one-time visit or a recurring schedule. Quote is free, work is honest.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-b border-border py-14 last:border-b-0"
            >
              <div className="grid gap-10 md:grid-cols-[80px_1fr_280px]">
                <div className="flex flex-col items-start gap-3">
                  <span className="font-display text-5xl text-accent">0{i + 1}</span>
                  <span className="text-primary"><ServiceIcon name={s.icon} className="h-10 w-10" /></span>
                </div>
                <div>
                  <h2 className="font-display text-3xl md:text-4xl">{s.name}</h2>
                  <p className="mt-4 max-w-xl text-foreground/75">{s.long}</p>
                  <ul className="mt-6 grid max-w-xl gap-3 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <aside className="space-y-4 rounded-sm border border-border bg-muted/40 p-6 text-sm">
                  <MetaRow label="Schedule" value="[CLIENT: typical cadence]" />
                  <MetaRow label="Pricing" value="[CLIENT: starting price]" />
                  <MetaRow label="Timing" value="[CLIENT: typical visit length]" />
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
                  >
                    Quote this service <ArrowRight className="h-3 w-3" />
                  </Link>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-5 text-center md:px-8">
          <h2 className="font-display text-4xl md:text-5xl">Not sure which one you need?</h2>
          <a href={SITE.phoneHref} className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground">
            <Phone className="h-4 w-4" /> Call {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  const isPlaceholder = value.startsWith("[CLIENT");
  return (
    <div>
      <div className="text-xs uppercase tracking-[0.18em] text-foreground/50">{label}</div>
      <div className="mt-1">
        {isPlaceholder ? <span className="client-placeholder">{value}</span> : <span className="font-display text-lg">{value}</span>}
      </div>
    </div>
  );
}