# Shanzey Asghar — Portfolio

A minimal, dark-themed portfolio for **Shanzey Asghar**, a graphic designer based in Lahore, Pakistan. Built as a single-page site with a Behance-inspired aesthetic — black grid background, lime accents, and clear contact channels.

**Live site:** [shanzey-design.vercel.app](https://shanzey-design.vercel.app)

---

## Overview

This portfolio presents Shanzey's work identity, rotating roles, and outbound links in a focused layout — no multi-page clutter, just a strong first impression and easy ways to connect.

**Specialties**

- Graphic Design
- Amazon A+ Content & EBC
- Listing Images & Brand Visuals
- Illustration & Creative Art

---

## Features

- Dark grid background with subtle motion and brand-colored floating tool icons (Photoshop, Illustrator, Figma, InDesign, Canva)
- Rotating role headline with smooth transitions
- Magnetic letter hover on name and links
- Social link cards with brand icons (Behance, WhatsApp, Upwork, Fiverr, Instagram, Email)
- Custom lime-accent cursor (desktop)
- Responsive layout for mobile and desktop
- SEO: Open Graph metadata, `robots.txt`, and `sitemap.xml`

---

## Tech Stack

| Layer | Tools |
|-------|-------|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | CSS + Tailwind CSS |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) |
| Fonts | Inter, Space Grotesk (Google Fonts) |
| Deploy | [Vercel](https://vercel.com/) |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install & run locally

```bash
git clone https://github.com/abdullah-imran-1713/shanzey-portfolio.git
cd shanzey-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
app/
  page.tsx          # Homepage
  layout.tsx        # Root layout, metadata, cursor
  client.css        # Theme styles
  globals.css       # Base styles
components/client/  # UI components (hero, links, grid, tools, cursor)
lib/
  client-site.ts    # Content, links, and site config (edit here)
```

**Updating content** — edit `lib/client-site.ts` for name, roles, social URLs, and contact links. No code changes needed elsewhere.

---

## Environment Variables (optional)

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for sitemap & Open Graph (e.g. `https://shanzey-design.vercel.app`) |

If unset on Vercel, the app falls back to `VERCEL_URL` automatically.

---

## Connect

| Channel | Link |
|---------|------|
| Portfolio | [Behance](https://www.behance.net/shanza_asghar1) |
| WhatsApp | [+92 321 6842027](https://wa.me/923216842027) |
| Email | [shanzeyasgharr@gmail.com](mailto:shanzeyasgharr@gmail.com) |

---

## License

Private project. All rights reserved © Shanzey Asghar.
