import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";

export default function Home() {
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
            <p className="section-heading__label">01 / About</p>
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

        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
