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

## Deploy to Vercel

This project uses Vercel's standard Next.js setup. The included `vercel.json` explicitly identifies the framework, while Vercel uses the existing `npm run build` script automatically.

### Dashboard deployment

1. Push the project to a Git provider.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected framework as **Next.js** and the build command as `npm run build`.
4. Deploy the project.
5. Add a custom domain if desired, then set `NEXT_PUBLIC_SITE_URL` to the production origin, for example `https://portfolio.example.com`, and redeploy.

### CLI deployment

Install the Vercel CLI and follow its login prompt:

```bash
npm install -g vercel
vercel
```

Use `vercel --prod` for a production deployment. The app falls back to the Vercel deployment URL for metadata when `NEXT_PUBLIC_SITE_URL` is not set, and falls back to `http://localhost:3000` during local development.
