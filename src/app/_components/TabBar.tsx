"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "./nav-items";

export default function TabBar() {
  const pathname = usePathname();

  return (
    <nav className="tabbar" aria-label="Primary mobile">
      {primaryNav.map(({ label, href, Icon }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            className={`tab${active ? " active" : ""}`}
            aria-current={active ? "page" : undefined}
            href={href}
          >
            <Icon />
            <span className="tab-lb">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
