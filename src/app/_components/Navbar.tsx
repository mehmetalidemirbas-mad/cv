"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, socials } from "./nav-items";
import { IconLinkedIn, IconMail } from "./icons";

// Top, centered "pill" navigation bar (Meeko-style, brand-adapted).
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="mk-nav-wrap">
      <nav className="mk-nav" aria-label="Primary">
        <Link href="/" className="mk-logo">
          Ali Demirbaş
        </Link>

        <ul className="mk-nav-links">
          {primaryNav.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`mk-nav-link${active ? " active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mk-nav-actions">
          <a
            className="mk-ic"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <IconLinkedIn />
          </a>
          <a className="mk-ic" href={`mailto:${socials.email}`} aria-label="Email">
            <IconMail />
          </a>
        </div>
      </nav>
    </header>
  );
}
