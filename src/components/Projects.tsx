import { projects, socialLinks } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";
import { ProjectCard } from "./ProjectCard";

export function Projects({ index = 2 }: { index?: number }) {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-heading__label">{sectionLabel(index, "Selected work")}</p>
          <h2 id="work-title">Projects with a purpose.</h2>
          <p>
            A focused selection of work across mobile engineering and applied
            machine learning.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <a
          className="button button--outline projects__all-link"
          href={socialLinks[0].href}
          target="_blank"
          rel="noreferrer"
        >
          Browse all repositories <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
