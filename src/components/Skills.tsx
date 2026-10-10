import { skillGroups } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";

export function Skills({ index = 5 }: { index?: number }) {
  return (
    <section className="section section--tint" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">{sectionLabel(index, "Toolkit")}</p>
          <h2 id="skills-title">The tools behind the work.</h2>
        </div>

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <section className="skill-group" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
