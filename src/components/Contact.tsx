import { profile, socialLinks } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <p className="contact__label">05 / Get in touch</p>
        <div className="contact__content">
          <h2 id="contact-title">
            Let&apos;s build something
            <br />
            <em>worth using.</em>
          </h2>
          <div className="contact__details">
            <p>
              Have a role, project, or idea in mind? I&apos;d be glad to hear
              about it.
            </p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
              <span aria-hidden="true">↗</span>
            </a>
            <div className="contact__links">
              <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href={socialLinks[1].href} target="_blank" rel="noreferrer">
                LinkedIn <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
