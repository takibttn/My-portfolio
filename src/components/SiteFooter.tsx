import { profile, socialLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <a className="wordmark" href="#top" aria-label="Back to top">
            {profile.initials}
            <span aria-hidden="true">.</span>
          </a>
          <p>
            Designed &amp; built with care.
            <br />
            Based in {profile.location}.
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>
        <p className="site-footer__copyright">© {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  );
}
