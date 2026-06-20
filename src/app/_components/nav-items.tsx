import type { ComponentType } from "react";
import {
  IconHome,
  IconAbout,
  IconContent,
  IconStack,
  IconContact,
} from "./icons";

export type NavItem = {
  label: string;
  href: string;
  Icon: ComponentType<{ className?: string }>;
};

// Primary internal pages, in display order (used by the mobile tab bar).
export const primaryNav: NavItem[] = [
  { label: "Home", href: "/", Icon: IconHome },
  { label: "About", href: "/about", Icon: IconAbout },
  { label: "Content", href: "/content", Icon: IconContent },
  { label: "Stack", href: "/stack", Icon: IconStack },
  { label: "Contact", href: "/contact", Icon: IconContact },
];

// The desktop sidebar groups the same routes under labelled sections.
export const sidebarGroups: { label?: string; items: NavItem[] }[] = [
  { items: primaryNav.slice(0, 3) }, // Home / About / Content
  { label: "Resources", items: [primaryNav[3]] }, // Stack
  { label: "Connect", items: [primaryNav[4]] }, // Contact
];

export const socials = {
  linkedin: "https://www.linkedin.com/in/ali-demirbas/",
  instagram: "https://www.instagram.com/alidemirbaas/",
  email: "mehmetalidemirbas@gmail.com",
};
