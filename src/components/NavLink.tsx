import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

/**
 * Uses next/link for internal routes (client-side navigation) and a plain
 * anchor for in-page anchors (#work) and external URLs.
 */
export function NavLink({ href, children, ...rest }: NavLinkProps) {
  if (href.startsWith("/")) {
    return <Link href={href}>{children}</Link>;
  }
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
