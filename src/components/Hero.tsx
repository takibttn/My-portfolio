import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero container" id="top" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">{profile.availability}</p>
        <h1 className="hero__title" id="hero-title">
          Boutoutane
          <br />
          Takey<span aria-hidden="true">.</span>
        </h1>
        <div className="hero__bottom">
          <p className="hero__intro">
            I build reliable digital products at the intersection of full-stack
            development and applied AI.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href={`mailto:${profile.email}`}
            >
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>

      <aside className="hero-card" aria-label="Profile summary">
        <div className="hero-card__top">
          <span>Profile / 01</span>
          <span aria-hidden="true">BT</span>
        </div>
        <div className="hero-card__monogram" aria-hidden="true">
          BT
        </div>
        <div className="hero-card__footer">
          <p>Information systems</p>
          <p>Applied artificial intelligence</p>
        </div>
      </aside>
    </section>
  );
}
