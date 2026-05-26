
# Cason Landscaping — Website Build Plan

A 4-page marketing site with a rustic, earthy, hometown feel. Built on the existing TanStack Start template (not raw HTML — the project is already a React/TanStack app, which gives us per-route SEO metadata, shared header/footer, and clean routing for free while still rendering as a static-feeling site).

## Design system (src/styles.css)

Replace the default token palette with the brand colors:

- `--background`: cream `#F4EDE0`
- `--foreground` / ink: `#14110D`
- `--primary`: deep forest green `#1F3A2E` (+ `--primary-foreground` cream)
- `--accent`: warm wheat `#B8954A`
- `--secondary` / moss: `#6B8E5A`
- `--muted`: soft cream-tan
- All values converted to `oklch()` per template convention.

Typography:
- Load Fraunces (display, with italic) + Inter (body) from Google Fonts in `__root.tsx` head links.
- `font-display: 'Fraunces'` used for h1/h2/h3; key words wrapped in `<em>` for italic emphasis.
- Inter for body, nav, buttons.

Texture:
- Subtle paper-grain dot pattern as a repeating SVG data-URL utility class `.bg-grain` applied to section backgrounds.

## Logo mark

Recreate the Facebook badge as inline SVG component `src/components/Logo.tsx`:
- Black circle, white "CASON LANDSCAPING" wordmark wrapped on two lines, two green sprig shapes flanking. Used at ~40px in header and ~64px in footer.

## Routes (TanStack file-based)

```
src/routes/
  __root.tsx          → adds <Header/> + <Outlet/> + <Footer/>, font links, base meta
  index.tsx           → Home
  services.tsx        → Services
  gallery.tsx         → Gallery
  contact.tsx         → Contact
```

Each route file sets its own `head()` with unique title + description + og tags.

## Shared components (src/components/)

- `Header.tsx` — sticky, cream bg w/ subtle border, logo + nav (Home, Services, Gallery, Contact) + phone CTA button `(254) 434-3838`. Mobile: hamburger → sheet.
- `Footer.tsx` — dark forest-green bg, three columns (Services / Company / Contact) + logo + Facebook link + copyright.
- `Logo.tsx` — SVG badge.
- `ServiceIcon.tsx` — line-icon SVG set (mower, shrub, mulch pile, shears, leaf, seeds, aerator spike, question mark).
- `CTAButton.tsx` — primary (wheat) and ghost variants.

## Home (`/`)

Sections in order:
1. **Hero** — large Fraunces headline "Yards that look like *home*." (italic on "home"), subhead about Stephenville-local care, two CTAs (Get a free quote → /contact, Call now → tel:), placeholder hero image area marked `[CLIENT: hero photo of finished yard]`.
2. **Services grid** — 7 cards (Lawn Care, Landscaping, Mulching, Bush Trimming, Leaf Removal, Overseeding, Aeration) each w/ line icon, title, 1-line description, "Learn more →" link to `/services#<slug>`. 8th dark card "Not sure what you need? Let's talk." → /contact.
3. **Locally owned** — dark forest-green band w/ grain, headline "Locally owned. *Stephenville* grown.", short owner blurb (placeholder marked `[CLIENT: short owner bio for Kade]`), two stat blocks (e.g. "Years serving Erath County — [CLIENT]", "Yards maintained weekly — [CLIENT]").
4. **Gallery preview** — 6 tiles, mixed aspect ratios via CSS grid spans, placeholder images marked `[CLIENT: photo]`, link "See the full gallery →".
5. **Green CTA band** — full-width forest green, "Ready for a yard you don't have to think about?" + Get a quote button.
6. Footer (shared).

## Services (`/services`)

Page header + 7 numbered rows (01–07). Each row:
- Left/main column: big `01` in wheat accent, Fraunces service name, paragraph description, 4 bullet checklist of what's included.
- Right meta column: Schedule (e.g. Weekly/Bi-weekly — placeholder `[CLIENT: typical cadence]`), Pricing (`[CLIENT: starting price]`), Timing (typical visit length).
- Separator hairline between rows.
- Anchor IDs (`#lawn-care`, etc.) for cross-linking from home grid.

## Gallery (`/gallery`)

- Filter chips: All, Landscaping, Lawn Care, Mulching, Stone — client-side `useState` filter on a static tile array.
- 12-tile grid using CSS grid with intentional `col-span` / `row-span` mix (tall, wide, regular) for an editorial feel.
- Each tile: placeholder image div (marked `[CLIENT: photo]`) + caption like "Front bed refresh · Mulch beds".

## Contact (`/contact`)

Two-column layout (stacks on mobile):
- **Left**: Quote form — Name, Phone, Email, ZIP, Service (select with the 7 services), Notes (textarea), Submit button. Form is a `mailto:` submission (composes email to Kade) so no backend needed; note this in a small helper line. Uses shadcn `Input`, `Select`, `Textarea`, `Label`, `Button`.
- **Right**: Direct contact stack — Call (tel link), Email (mailto), Service area (Stephenville, TX + `[CLIENT: radius in miles]`), Hours (`[CLIENT: business hours]`), Facebook link. Map placeholder = embedded Google Maps iframe centered on Stephenville, TX (public embed, no API key).

Below columns: green full-width band "Don't like forms? Just *call*." with phone number as huge tap target.

## Placeholders the client must fill

Render every placeholder as a visible dashed-border note styled `.client-placeholder` so Kade can see exactly what to send:
- Hero photo + gallery photos (real job photos)
- Owner bio paragraph
- Business hours
- Service-area radius / miles
- Per-service starting prices, schedules, visit times
- Stat numbers in "Locally owned" section

## SEO

- Per-route unique `<title>` (≤60 chars) and meta description (≤160 chars) including "Stephenville TX" + service keyword.
- Single H1 per page.
- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
- LocalBusiness JSON-LD injected from `__root.tsx` head with name, phone, area served, sameAs (Facebook URL).
- Alt text on every image / placeholder.
- Phone numbers as `tel:` links; email as `mailto:`.
- Responsive viewport already present.

## Accessibility

- All interactive elements keyboard-focusable with visible focus ring (wheat outline).
- Form fields have associated labels.
- Color pairs checked for AA contrast (cream/ink, forest/cream, wheat on forest).
- `prefers-reduced-motion` respected; no essential animation.

## Out of scope (not building)

- Backend / database / auth (no Lovable Cloud needed).
- Real form submission backend — using `mailto:` until client wants a backend.
- CMS for the gallery — tiles are a static array Kade can edit later or we can wire up.

## Build order

1. Update `styles.css` with brand tokens + grain utility; add font links in `__root.tsx`.
2. Build `Logo`, `Header`, `Footer`, `ServiceIcon`, `CTAButton`, `ClientPlaceholder` components.
3. Replace `index.tsx` placeholder with Home page.
4. Add `services.tsx`, `gallery.tsx`, `contact.tsx`.
5. Add JSON-LD + per-route meta.
6. Visual QA in preview at desktop + mobile widths.
