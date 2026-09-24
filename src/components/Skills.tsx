import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section className="section section--tint" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">04 / Toolkit</p>
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
