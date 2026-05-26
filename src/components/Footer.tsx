import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { SITE, SERVICES } from "./SiteData";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:gap-12 md:px-8 md:py-16">
        <div className="space-y-4">
          <Logo size={72} />
          <p className="max-w-xs text-sm text-primary-foreground/75">
            Locally owned lawn care &amp; landscape in {SITE.city}. Real people, real yards.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">Services</h3>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="text-primary-foreground/80 transition-colors hover:text-secondary">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-primary-foreground/80 transition-colors hover:text-secondary">Home</Link></li>
            <li><Link to="/gallery" className="text-primary-foreground/80 transition-colors hover:text-secondary">Gallery</Link></li>
            <li><Link to="/contact" className="text-primary-foreground/80 transition-colors hover:text-secondary">Get a Quote</Link></li>
            <li>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary-foreground/80 transition-colors hover:text-secondary">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-[0.2em] text-secondary">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={SITE.phoneHref} className="font-display text-base font-semibold hover:text-secondary">{SITE.phone}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={SITE.emailHref} className="break-all hover:text-secondary">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{SITE.city}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-primary-foreground/60 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. Owned by {SITE.owner}.</p>
          <p>Stephenville, TX · Erath County</p>
        </div>
      </div>
    </footer>
  );
}
