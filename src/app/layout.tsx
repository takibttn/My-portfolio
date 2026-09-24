import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Software engineer and AI Master's student building reliable digital products across full-stack development and applied AI.",
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Boutoutane Takey",
    "software engineer",
    "full stack developer",
    "artificial intelligence",
    "machine learning",
  ],
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description:
      "Full-stack development and applied AI. Explore selected projects, education, and technical toolkit.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description:
      "Full-stack development and applied AI. Explore selected projects, education, and technical toolkit.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f4f3ed",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
