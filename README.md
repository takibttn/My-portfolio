# Boutoutane Takey — Portfolio

A clean, editorial portfolio for a software engineer working across full-stack development and applied AI.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom CSS design system
- ESLint with the Next.js ruleset

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Updating content

Portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update the profile details, project links, education, and skill groups there. The layout and design system are in [`src/app/globals.css`](src/app/globals.css).

## Deployment

This is a standard Next.js application and can be deployed to Vercel or any platform that supports a Next.js build. Set `NEXT_PUBLIC_SITE_URL` to the production origin before building so social sharing metadata uses the correct domain.
