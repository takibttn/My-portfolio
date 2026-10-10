import { experience } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";

export function Experience({ index = 3 }: { index?: number }) {
  if (experience.length === 0) return null;

  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">{sectionLabel(index, "Experience")}</p>
          <h2 id="experience-title">Where I&apos;ve worked.</h2>
        </div>

        <div className="education-list">
          {experience.map((item) => (
            <article
              className="education-item"
              key={`${item.period}-${item.role}`}
            >
              <p className="education-item__period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
                {item.description ? <p>{item.description}</p> : null}
                {item.href ? (
                  <p>
                    <a
                      className="text-link"
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      Visit <span aria-hidden="true">&#8599;</span>
                    </a>
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
