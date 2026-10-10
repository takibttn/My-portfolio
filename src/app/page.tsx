import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { TimelineSection } from "@/components/TimelineSection";
import { experience, internships } from "@/data/portfolio";
import { sectionLabel } from "@/lib/format";

export default function Home() {
  // Section numbers are assigned in render order here. Optional sections that
  // have no content render nothing, so we only number the ones that appear —
  // no gaps, and no need to edit the individual components.
  let n = 0;
  const aboutIndex = ++n;
  const projectsIndex = ++n;
  const experienceIndex = experience.length > 0 ? ++n : 0;
  const internshipsIndex = internships.length > 0 ? ++n : 0;
  const educationIndex = ++n;
  const skillsIndex = ++n;
  const contactIndex = ++n;

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

        <TimelineSection
          id="experience"
          index={experienceIndex}
          label="Experience"
          heading="Where I've worked."
          items={experience}
        />

        <TimelineSection
          id="internships"
          index={internshipsIndex}
          label="Internships"
          heading="Learning by doing."
          items={internships}
        />

        <Education index={educationIndex} />
        <Skills index={skillsIndex} />
        <Contact index={contactIndex} />
      </main>
      <SiteFooter />
    </>
  );
}
