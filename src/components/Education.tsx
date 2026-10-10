import { education } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";

export function Education({ index = 4 }: { index?: number }) {
  return (
    <section className="section" aria-labelledby="education-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">{sectionLabel(index, "Education")}</p>
          <h2 id="education-title">Building the foundations.</h2>
        </div>

        <div className="education-list">
          {education.map((item) => (
            <article className="education-item" key={item.degree}>
              <p className="education-item__period">{item.period}</p>
              <div>
                <h3>{item.degree}</h3>
                <p>{item.institution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
