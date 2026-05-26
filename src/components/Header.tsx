import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { SITE } from "./SiteData";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 py-3 md:px-8">
        <Link to="/" className="flex items-center justify-self-start" aria-label="Cason Landscaping Home">
          <Logo size={52} />
        </Link>

        <nav className="hidden items-center justify-self-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground font-semibold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
            aria-label={`Call ${SITE.phone}`}
          >
            <span aria-hidden>📞</span>
            Call
          </a>
          <button
            type="button"
            className="rounded-sm border border-border p-2 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-2 text-base font-medium text-foreground/85 hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className="mt-2 inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
              aria-label={`Call ${SITE.phone}`}
            >
              <span aria-hidden>📞</span>
              Call
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}