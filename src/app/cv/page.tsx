import type { Metadata } from "next";
import Link from "next/link";
import { PrintButton } from "@/components/PrintButton";
import {
  education,
  experience,
  internships,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "@/data/portfolio";
import "./cv.css";

export const metadata: Metadata = {
  title: "CV",
  description: `Curriculum vitae of ${profile.name} — ${profile.role}.`,
};

function prettyUrl(href: string): string {
  return href.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

const github = socialLinks.find((link) => link.label === "GitHub");
const linkedin = socialLinks.find((link) => link.label === "LinkedIn");

export default function CvPage() {
  return (
    <main className="cv-page" id="main-content">
      <div className="cv-actions">
        <Link className="button button--outline" href="/">
          ← Back to portfolio
        </Link>
        <PrintButton />
      </div>

      <article className="cv-sheet">
        <header className="cv-header">
          <h1>{profile.name}</h1>
          <p className="cv-header__role">
            {profile.role} — {profile.focus}
          </p>
          <div className="cv-contact">
            <span>{profile.location}</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            {github ? (
              <a href={github.href} target="_blank" rel="noreferrer">
                {prettyUrl(github.href)}
              </a>
            ) : null}
            {linkedin ? (
              <a href={linkedin.href} target="_blank" rel="noreferrer">
                {prettyUrl(linkedin.href)}
              </a>
            ) : null}
          </div>
        </header>

        <section className="cv-section">
          <h2>Profile</h2>
          <p className="cv-summary">
            {profile.role} and AI Master&apos;s student with a foundation in
            computer science. I build reliable digital products at the
            intersection of full-stack development and applied AI — turning
            complex requirements into clear, dependable systems.
          </p>
        </section>

        {education.length > 0 ? (
          <section className="cv-section">
            <h2>Education</h2>
            {education.map((item) => (
              <div className="cv-entry" key={item.degree}>
                <div className="cv-entry__head">
                  <span className="cv-entry__title">{item.degree}</span>
                  <span className="cv-entry__period">{item.period}</span>
                </div>
                <p className="cv-entry__org">{item.institution}</p>
              </div>
            ))}
          </section>
        ) : null}

        {experience.length > 0 ? (
          <section className="cv-section">
            <h2>Experience</h2>
            {experience.map((item) => (
              <div className="cv-entry" key={`${item.period}-${item.role}`}>
                <div className="cv-entry__head">
                  <span className="cv-entry__title">{item.role}</span>
                  <span className="cv-entry__period">{item.period}</span>
                </div>
                <p className="cv-entry__org">{item.organization}</p>
                {item.description ? (
                  <p className="cv-entry__desc">{item.description}</p>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        {internships.length > 0 ? (
          <section className="cv-section">
            <h2>Internships</h2>
            {internships.map((item) => (
              <div className="cv-entry" key={`${item.period}-${item.role}`}>
                <div className="cv-entry__head">
                  <span className="cv-entry__title">{item.role}</span>
                  <span className="cv-entry__period">{item.period}</span>
                </div>
                <p className="cv-entry__org">{item.organization}</p>
                {item.description ? (
                  <p className="cv-entry__desc">{item.description}</p>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        {projects.length > 0 ? (
          <section className="cv-section">
            <h2>Selected Projects</h2>
            {projects.map((item) => (
              <div className="cv-entry" key={item.slug}>
                <div className="cv-entry__head">
                  <span className="cv-entry__title">{item.title}</span>
                  <span className="cv-entry__period">{item.category}</span>
                </div>
                {item.description ? (
                  <p className="cv-entry__desc">{item.description}</p>
                ) : null}
                {item.stack.length > 0 ? (
                  <p className="cv-entry__stack">{item.stack.join("  ·  ")}</p>
                ) : null}
              </div>
            ))}
          </section>
        ) : null}

        {skillGroups.length > 0 ? (
          <section className="cv-section">
            <h2>Skills</h2>
            <dl className="cv-skills">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <dt>{group.title}</dt>
                  <dd>{group.skills.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}
      </article>
    </main>
  );
}
