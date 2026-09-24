type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;
  stack: readonly string[];
  href: string;
  theme: "moss" | "sand";
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const titleId = `project-${project.slug}`;

  return (
    <article className={`project-card project-card--${project.theme}`}>
      <div className="project-card__meta">
        <span>{project.number}</span>
        <span>{project.category}</span>
      </div>
      <div className="project-card__body">
        <h3 id={titleId}>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="project-card__stack" aria-label={`${project.title} technologies`}>
        {project.stack.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <a
        className="project-card__link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.title} repository on GitHub`}
      >
        <span>View repository</span>
        <span className="project-card__arrow" aria-hidden="true">
          ↗
        </span>
      </a>
    </article>
  );
}
