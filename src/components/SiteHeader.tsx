import { profile, socialLinks } from "@/data/portfolio";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="wordmark" href="#top" aria-label={`${profile.name}, back to top`}>
          {profile.initials}
          <span aria-hidden="true">.</span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a
            className="header-cta"
            href={socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>

        <details className="mobile-nav">
          <summary>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <a href={socialLinks[0].href} target="_blank" rel="noreferrer">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
