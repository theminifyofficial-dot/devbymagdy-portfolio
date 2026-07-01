# devbymagdy — Freelance Developer Portfolio

A one-page portfolio and booking site for **Mahmoud Magdy (devbymagdy)** —
Shopify theme development and custom web development for Egyptian and
international brands.

Built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **TypeScript**.
No backend, no database — fully static and deploy-ready for Vercel.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS 3
- TypeScript
- Google Fonts (Inter) via `next/font`
- Calendly inline embed for booking (no backend required)

## Project structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx        Assembles all sections
  globals.css     Tailwind directives + shared utility classes
components/
  Navbar.tsx      Sticky nav with mobile menu
  Hero.tsx        Headline + CTAs
  Services.tsx    Three service cards
  Portfolio.tsx   YASSYS project card
  HowItWorks.tsx  4-step process
  Booking.tsx     Calendly embed + fallback
  Footer.tsx      Links, contact, copyright
```

## Getting started (local development)

Requires Node.js 18.17+ (Node 20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customizing content

- **Portfolio screenshot:** drop a screenshot of the YASSYS store into
  `public/` (e.g. `public/yassys.png`) and swap the placeholder block in
  `components/Portfolio.tsx` for an `<Image src="/yassys.png" ... />`.
- **Calendly link:** update `CALENDLY_URL` in `components/Booking.tsx` if the
  booking link ever changes.
- **Colors:** the navy/electric-blue palette is defined in
  `tailwind.config.ts` under `theme.extend.colors` (`navy`, `navy-light`,
  `accent`, `accent-light`).

## Deploying to Vercel

### Option A — Vercel dashboard (recommended)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Next.js — no configuration needed (the included
   `vercel.json` sets sane defaults).
4. Click **Deploy**. Every push to the main branch will auto-deploy.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel        # deploy a preview
vercel --prod # deploy to production
```

## Build for production locally

```bash
npm run build
npm start
```

## License

Private project for devbymagdy. All rights reserved.
