import { profile, socialLinks } from "@/data/portfolio";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
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
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="header-cta"
          href={socialLinks[0].href}
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>

        <details className="mobile-nav">
          <summary>
            Menu <span aria-hidden="true">+</span>
          </summary>
          <nav className="mobile-nav__panel" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
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
