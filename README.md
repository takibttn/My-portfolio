# Boutoutane Takey — Portfolio

A clean, editorial portfolio for a software engineer working across full-stack development and applied AI.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom CSS design system
- Light / dark theme with a persisted, no-flash toggle
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

All portfolio content lives in plain JSON files inside the [`content/`](content) directory. Edit these to add or change what appears on the site — you do **not** need to touch any TypeScript or component code.

| File                       | Controls                                                       |
| -------------------------- | -------------------------------------------------------------- |
| `content/profile.json`     | Name, role, location, email, availability line                  |
| `content/social.json`      | Social links (GitHub, LinkedIn, …)                             |
| `content/projects.json`    | Project cards                                                  |
| `content/experience.json`  | Work-experience entries (section hides when the array is empty) |
| `content/internships.json` | Internship entries (same shape; section hides when empty)       |
| `content/education.json`   | Education entries                                                |
| `content/skills.json`      | Skill groups                                                     |

### Adding a project

Append an object to the array in `content/projects.json`. The `01`, `02`, … numbers are generated automatically from the order, and `theme` is optional (it falls back to an alternating moss/sand scheme).

```json
{
  "slug": "my-app",
  "category": "Web platform",
  "title": "My App",
  "description": "What it does and why it matters.",
  "stack": ["Next.js", "TypeScript"],
  "href": "https://github.com/you/my-app"
}
```

### Adding work experience

Append an object to `content/experience.json`. Once it has at least one entry, the **Experience** section appears automatically and the section numbers below it shift down for you. Set `href` to make the role a link; `description` is optional.

```json
{
  "period": "2024 — Present",
  "role": "Software Engineer",
  "organization": "Company",
  "description": "What you did."
}
```

Adding or reordering entries in `education.json` and `skills.json` works the same way.

The layout and design system are in [`src/app/globals.css`](src/app/globals.css). The bridge between the JSON files and the UI is [`src/data/portfolio.ts`](src/data/portfolio.ts), which reads the content, validates it, and derives the auto-numbering and theme fallbacks — you normally won't need to edit it.

## Theming (light / dark)

The whole design system is built on CSS custom properties, so theming is just a second set of values:

- The light palette lives in `:root` and the dark palette in `[data-theme="dark"]` inside [`src/app/globals.css`](src/app/globals.css). Add a new color by defining a token in both blocks.
- The theme is chosen by the toggle in the header ([`src/components/ThemeToggle.tsx`](src/components/ThemeToggle.tsx)), stored in `localStorage`, and defaults to the visitor's system `prefers-color-scheme`.
- A tiny inline script ([`src/lib/theme.ts`](src/lib/theme.ts)) applies the saved theme to `<html>` before first paint, so there is no flash of the wrong theme.
- The Contact block is intentionally dark in both modes via the fixed `--panel-dark` / `--panel-dark-fg` tokens, so it stays correct regardless of the active theme.

## CV / resume page

A printable CV is generated automatically from the same JSON content at [`/cv`](http://localhost:3000/cv) ([`src/app/cv/page.tsx`](src/app/cv/page.tsx)). It renders as a fixed paper-style sheet (independent of the site theme) with two actions:

- **Download as PDF** — fetches a real PDF file from the `/api/cv` route handler ([`src/app/api/cv/route.ts`](file:///c:/Users/EM/OneDrive/Desktop/test/rkd/src/app/api/cv/route.ts), built with [pdfkit](https://pdfkit.org)) and saves it directly (no print dialog).
- **Print** — opens the browser print dialog (use "Save as PDF" there if you prefer the native exporter). The print stylesheet hides the site chrome and formats for A4.

The CV is linked from the header nav, the hero, and the contact section. Because both the page and the PDF read the same `content/` files, updating your projects, experience, internships, education, or skills updates them too — no separate file to maintain.

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
