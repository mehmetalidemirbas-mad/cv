"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarGroups, socials } from "./nav-items";
import { IconExternal, IconInstagram, IconLinkedIn } from "./icons";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <Link aria-label="Ali Demirbaş — home" style={{ display: "block" }} href="/">
        <div className="sb-profile">
          <Image
            className="sb-avatar"
            src="/foto.webp"
            alt="Ali Demirbaş"
            width={92}
            height={92}
            priority
          />
          <span className="sb-id">
            <span className="sb-name">Ali Demirbaş</span>
            <span className="sb-role">Growth Marketer</span>
          </span>
        </div>
      </Link>

      <nav className="sb-nav" aria-label="Primary">
        {sidebarGroups.map((group, gi) => (
          <div key={gi}>
            {group.label ? <span className="sb-label">{group.label}</span> : null}
            <ul className="sb-group">
              {group.items.map(({ label, href, Icon }) => {
                const active = pathname === href;
                return (
                  <li key={href}>
                    <Link
                      className={`sb-link${active ? " active" : ""}`}
                      aria-current={active ? "page" : undefined}
                      href={href}
                    >
                      <Icon />
                      {label}
                    </Link>
                  </li>
                );
              })}

              {/* External links live under the Connect group. */}
              {group.label === "Connect" ? (
                <>
                  <li>
                    <a className="sb-link" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                      <IconLinkedIn />
                      LinkedIn
                      <span className="sb-ext">
                        <IconExternal />
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="sb-link" href={socials.instagram} target="_blank" rel="noopener noreferrer">
                      <IconInstagram />
                      Instagram
                      <span className="sb-ext">
                        <IconExternal />
                      </span>
                    </a>
                  </li>
                </>
              ) : null}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
