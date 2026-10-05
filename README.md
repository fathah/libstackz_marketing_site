# Libstackz

Cloud-based library management platform for schools, colleges, and public libraries of any size.

## Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Smooth Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Routes

- `/` — Home page (Hero, Key Metrics, Feature Suite, OPAC Spotlight, Pricing, Final CTA)
- `/solutions` — Specialized library technology solutions (Digitization, White Label, Self-Checkout Kiosk, Contactless Circulation)
- `/contact` — Contact, sales inquiries, interactive location map, and multi-channel support

## Project Structure

```
├── app/                  # Next.js App Router pages, layout, and global CSS
├── components/           # Modular UI components
│   ├── home/             # Home page sections & feature cards
│   ├── solutions/        # Solutions showcase & feature lists
│   ├── contact/          # Contact form, channels, and location card
│   ├── layout/           # Global Header & Footer
│   ├── providers/        # Smooth scroll (Lenis) & page transition providers
│   └── ui/               # Reusable primitives (Button, Chip, Eyebrow, Heading, Counter)
├── data/                 # Canonical, typed content registries
├── types/                # TypeScript interface and type definitions
└── public/
    └── assets/           # Brand SVGs and WebP illustrations
```

## Development

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`.

## Validation

Verify types and build a production-ready bundle:

```bash
npm run typecheck
npm run build
```
