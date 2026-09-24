import { education } from "@/data/portfolio";

export function Experience() {
  return (
    <section className="section" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">03 / Education</p>
          <h2 id="experience-title">Building the foundations.</h2>
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
