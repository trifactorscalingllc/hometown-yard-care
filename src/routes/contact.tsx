import { useState, FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { SERVICES, SITE } from "../components/SiteData";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Free Quote Cason Landscaping" },
      { name: "description", content: "Request a free lawn care or landscape quote in Stephenville, TX. Call (254) 434-3838 or send a quick message." },
      { property: "og:title", content: "Contact Cason Landscaping" },
      { property: "og:description", content: "Free quotes from a real neighbor in Stephenville, TX." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", zip: "", service: "", notes: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Quote request ${form.service || "General"} ${form.name}`;
    const body =
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nZIP: ${form.zip}\nService: ${form.service}\n\nNotes:\n${form.notes}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <section className="border-b border-border bg-muted/40 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center md:px-8">
          <h1 className="font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight md:text-6xl">
            Tell us about your yard
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            Most quotes go out within 24 hours. Prefer to talk? Call the number below — we actually answer.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-[1.2fr_1fr] md:gap-14 md:px-8">
          {/* FORM */}
          <form onSubmit={onSubmit} className="rounded-sm border border-border bg-card p-7 shadow-sm md:p-9">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight">Free quote</h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Submitting opens an email to {SITE.owner}. No spam, no signup.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <Field label="Name" required>
                <input required value={form.name} onChange={set("name")} className={input} placeholder="Jane Smith" />
              </Field>
              <Field label="Phone" required>
                <input required type="tel" value={form.phone} onChange={set("phone")} className={input} placeholder="(254) 555-0100" />
              </Field>
              <Field label="Email">
                <input type="email" value={form.email} onChange={set("email")} className={input} placeholder="you@example.com" />
              </Field>
              <Field label="ZIP">
                <input value={form.zip} onChange={set("zip")} className={input} maxLength={5} placeholder="76401" />
              </Field>
              <Field label="Service" className="sm:col-span-2">
                <select value={form.service} onChange={set("service")} className={input}>
                  <option value="">Pick a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                  <option value="Not sure">Not sure / something else</option>
                </select>
              </Field>
              <Field label="Notes" className="sm:col-span-2">
                <textarea rows={5} value={form.notes} onChange={set("notes")} className={input} placeholder="Lot size, what you're hoping for, timeframe…" />
              </Field>
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
            >
              Send my quote request
            </button>
          </form>

          {/* DIRECT */}
          <aside className="space-y-4">
            <DirectRow icon={<Phone className="h-5 w-5" />} label="Call" value={SITE.phone} href={SITE.phoneHref} />
            <DirectRow icon={<Mail className="h-5 w-5" />} label="Email" value={SITE.email} href={SITE.emailHref} />
            <DirectRow
              icon={<MapPin className="h-5 w-5" />}
              label="Service area"
              value="Stephenville, TX"
              sub="Erath County and surrounding"
            />
            <DirectRow
              icon={<Clock className="h-5 w-5" />}
              label="Hours"
              value="Mon–Sat"
              sub="By appointment · we travel for jobs"
            />
            <DirectRow
              icon={<Facebook className="h-5 w-5" />}
              label="Facebook"
              value="Cason Landscaping"
              href={SITE.facebook}
              external
            />

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="Stephenville, TX map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-98.30%2C32.18%2C-98.15%2C32.27&amp;layer=mapnik&amp;marker=32.2206%2C-98.2025"
                className="h-60 w-full"
                loading="lazy"
              />
              <div className="bg-muted/60 px-4 py-2 text-xs text-muted-foreground">
                Based in Stephenville, TX
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 text-center md:px-8">
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Don't like forms? Just call.
          </h2>
          <a
            href={SITE.phoneHref}
            className="mt-2 inline-flex items-center gap-3 rounded-sm bg-secondary px-8 py-4 font-display text-xl font-bold uppercase tracking-wider text-white hover:bg-secondary/90 md:text-2xl"
          >
            <Phone className="h-5 w-5" /> {SITE.phone}
          </a>
          <p className="text-sm text-primary-foreground/75">Ask for {SITE.owner}.</p>
        </div>
      </section>
    </>
  );
}

const input =
  "mt-1.5 w-full rounded-sm border border-border bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/30";

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wider text-foreground/70">
        {label}{required && <span className="text-secondary"> *</span>}
      </span>
      {children}
    </label>
  );
}

function DirectRow({
  icon, label, value, sub, href, external,
}: { icon: React.ReactNode; label: string; value: string; sub?: string; href?: string; external?: boolean }) {
  const content = (
    <div className="flex gap-4 rounded-sm border border-border bg-card p-5 transition-colors hover:border-secondary">
      <div className="mt-0.5 text-secondary">{icon}</div>
      <div className="min-w-0 flex-1">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</div>
        {value && <div className="mt-1 break-words font-display text-lg font-semibold">{value}</div>}
        {sub && <div className="mt-1 text-sm text-muted-foreground">{sub}</div>}
      </div>
    </div>
  );
  if (!href) return content;
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a>
  ) : (
    <a href={href} className="block">{content}</a>
  );
}
