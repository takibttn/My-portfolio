import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { experience } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";

export default function Home() {
  // Section numbers are assigned in order here. Add or remove a <section> and
  // the numbering updates automatically — no need to edit the components.
  // When the experience section has no entries it renders nothing, so the
  // sections after it shift up by one to avoid a gap in the numbering.
  const hasExperience = experience.length > 0;
  let next = 1;
  const aboutIndex = next++;
  const projectsIndex = next++;
  const experienceIndex = next++;
  const educationIndex = next++;
  const skillsIndex = next++;
  const contactIndex = next++;
  const offset = hasExperience ? 0 : 1;

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />

        <section className="about section" id="about" aria-labelledby="about-title">
          <div className="container about__grid">
            <p className="section-heading__label">{sectionLabel(aboutIndex, "About")}</p>
            <div className="about__content">
              <h2 id="about-title">
                Thoughtful engineering for{" "}
                <em>real-world problems.</em>
              </h2>
              <div className="about__copy">
                <p>
                  I&apos;m an AI Master&apos;s student and developer with a
                  foundation in computer science. I care about turning complex
                  requirements into clear, dependable products.
                </p>
                <p>
                  My work sits between information systems and artificial
                  intelligence: mobile experiences, backend services, databases,
                  and machine-learning applications.
                </p>
              </div>
              <ul className="about__disciplines" aria-label="Areas of focus">
                <li>Full-stack systems</li>
                <li>Applied machine learning</li>
                <li>Mobile products</li>
              </ul>
            </div>
          </div>
        </section>

        <Projects index={projectsIndex} />
        <Experience index={experienceIndex} />
        <Education index={educationIndex - offset} />
        <Skills index={skillsIndex - offset} />
        <Contact index={contactIndex - offset} />
      </main>
      <SiteFooter />
    </>
  );
}
