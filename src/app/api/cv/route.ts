import PDFDocument from "pdfkit";
import {
  education,
  experience,
  internships,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// A4 in points.
const PAGE_HEIGHT = 841.89;
const MARGIN = 48;

function slugName(name: string): string {
  return `${name.replace(/\s+/g, "-")}-CV.pdf`;
}

function buildPdf(): Promise<Buffer> {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
  });

  const chunks: Buffer[] = [];
  doc.on("data", (chunk: Buffer) => chunks.push(chunk));
  const done = new Promise<Buffer>((resolve) =>
    doc.on("end", () => resolve(Buffer.concat(chunks))),
  );

  const left = MARGIN;
  const right = doc.page.width - MARGIN;
  const width = right - left;
  const green = "#315c47";
  const ink = "#111111";
  const gray = "#555555";
  const body = "#333333";

  const ensureSpace = (needed: number) => {
    if (doc.y + needed > PAGE_HEIGHT - MARGIN) doc.addPage();
  };

  const heading = (text: string) => {
    ensureSpace(40);
    doc.moveDown(0.9);
    doc
      .font("Helvetica-Bold")
      .fontSize(8.5)
      .fillColor(green)
      .text(text.toUpperCase(), left, doc.y, { characterSpacing: 1.2 });
    doc.moveDown(0.35);
    const y = doc.y;
    doc
      .moveTo(left, y)
      .lineTo(right, y)
      .lineWidth(1)
      .strokeColor("#c9cabf")
      .stroke();
    doc.y = y + 8;
  };

  // Title on the left, right-aligned meta on the same baseline.
  const titleRow = (title: string, meta: string) => {
    const y = doc.y;
    doc.font("Helvetica-Bold").fontSize(11).fillColor(ink).text(title, left, y, {
      width: width - 130,
    });
    const titleH = doc.heightOfString(title, { width: width - 130 });
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor(gray)
      .text(meta, left, y, { width, align: "right" });
    const metaH = doc.heightOfString(meta, { width });
    doc.y = y + Math.max(titleH, metaH) + 1;
  };

  const timeline = (
    items: {
      period: string;
      title: string;
      org: string;
      desc?: string;
      link?: string;
    }[],
  ) => {
    items.forEach((item, i) => {
      ensureSpace(48);
      titleRow(item.title, item.period);
      doc
        .font("Helvetica-Bold")
        .fontSize(9.5)
        .fillColor(green)
        .text(item.org);
      if (item.desc) {
        doc
          .font("Helvetica")
          .fontSize(9)
          .fillColor(body)
          .text(item.desc);
      }
      if (item.link) {
        doc
          .font("Helvetica")
          .fontSize(8.5)
          .fillColor(gray)
          .text(item.link);
      }
      if (i < items.length - 1) doc.moveDown(0.55);
    });
  };

  // ---- Header -------------------------------------------------------------
  doc
    .font("Helvetica-Bold")
    .fontSize(26)
    .fillColor(ink)
    .text(profile.name, left, MARGIN, { width });
  doc
    .font("Helvetica")
    .fontSize(11)
    .fillColor(green)
    .text(`${profile.role} — ${profile.focus}`);

  const github = socialLinks.find((l) => l.label === "GitHub");
  const linkedin = socialLinks.find((l) => l.label === "LinkedIn");
  const contactBits = [
    profile.location,
    profile.email,
    github ? github.href.replace(/^https?:\/\//, "") : "",
    linkedin ? linkedin.href.replace(/^https?:\/\//, "") : "",
  ].filter(Boolean);
  doc
    .font("Helvetica")
    .fontSize(9)
    .fillColor(gray)
    .text(contactBits.join("   •   "), left, doc.y, { width });

  // ---- Profile ------------------------------------------------------------
  heading("Profile");
  doc.font("Helvetica").fontSize(9.5).fillColor(body).text(
    `${profile.role} and AI Master's student with a foundation in computer ` +
      "science. I build reliable digital products at the intersection of " +
      "full-stack development and applied AI — turning complex requirements " +
      "into clear, dependable systems.",
  );

  // ---- Education ----------------------------------------------------------
  if (education.length) {
    heading("Education");
    timeline(
      education.map((e) => ({
        period: e.period,
        title: e.degree,
        org: e.institution,
      })),
    );
  }

  // ---- Experience ---------------------------------------------------------
  if (experience.length) {
    heading("Experience");
    timeline(
      experience.map((e) => ({
        period: e.period,
        title: e.role,
        org: e.organization,
        desc: e.description,
        link: e.href ? e.href.replace(/^https?:\/\//, "") : undefined,
      })),
    );
  }

  // ---- Internships --------------------------------------------------------
  if (internships.length) {
    heading("Internships");
    timeline(
      internships.map((e) => ({
        period: e.period,
        title: e.role,
        org: e.organization,
        desc: e.description,
      })),
    );
  }

  // ---- Projects -----------------------------------------------------------
  if (projects.length) {
    heading("Selected Projects");
    timeline(
      projects.map((e) => ({
        period: e.category,
        title: e.title,
        org: e.stack.join("  ·  "),
        desc: e.description,
      })),
    );
  }

  // ---- Skills -------------------------------------------------------------
  if (skillGroups.length) {
    heading("Skills");
    skillGroups.forEach((group) => {
      ensureSpace(24);
      const y = doc.y;
      doc
        .font("Helvetica-Bold")
        .fontSize(9)
        .fillColor(ink)
        .text(group.title, left, y, { width: 120 });
      doc
        .font("Helvetica")
        .fontSize(9)
        .fillColor(body)
        .text(group.skills.join(", "), left + 130, y, { width: width - 130 });
      doc.y = Math.max(doc.y, y + 12) + 3;
    });
  }

  doc.end();
  return done;
}

export async function GET() {
  const pdf = await buildPdf();
  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${slugName(profile.name)}"`,
      "Cache-Control": "no-store",
    },
  });
}
