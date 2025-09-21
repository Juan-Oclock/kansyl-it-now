# Kansyl Landing

A high-performance, accessible, production-ready landing site for the iOS app "Kansyl".

Tech stack: Next.js 14 (App Router, TypeScript), Tailwind CSS, shadcn/ui primitives, Framer Motion.

## Getting started

1. Install dependencies

```bash
npm install
```

2. Run the dev server

```bash
npm run dev
```

3. Build

```bash
npm run build && npm run start
```

## Project structure

- app/
  - page.tsx — Single-page landing with all sections
  - layout.tsx — Global layout, fonts, SEO metadata
  - api/subscribe/route.ts — Email capture stub API
- components/
  - ui/* — shadcn-style primitives (button, input, card, accordion, dialog, toast)
  - custom components for animations and sections
- lib/utils.ts — utilities (cn)
- public/images/screens/*.svg — placeholder screenshots

## Accessibility & performance

- Keyboard focus rings with adequate contrast
- Reduced motion handling via prefers-reduced-motion
- Next/Image used for assets; below-the-fold sections are lightweight
- Lighthouse targets: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95

## Notes

- Pricing is subject to change pre-launch
- Update metadataBase in layout.tsx with your production URL before deploying
