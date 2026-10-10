import type { ExperienceItem } from "@/data/types";
import { sectionLabel } from "@/lib/format";

type TimelineSectionProps = {
  id: string;
  index: number;
  label: string;
  heading: string;
  items: ExperienceItem[];
};

/**
 * Shared timeline list used by the Experience and Internships sections. Renders
 * nothing when `items` is empty so an unused section never shows up.
 */
export function TimelineSection({
  id,
  index,
  label,
  heading,
  items,
}: TimelineSectionProps) {
  if (items.length === 0) return null;

  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="section-heading section-heading--row">
          <p className="section-heading__label">{sectionLabel(index, label)}</p>
          <h2 id={`${id}-title`}>{heading}</h2>
        </div>

        <div className="education-list">
          {items.map((item) => (
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
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
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
