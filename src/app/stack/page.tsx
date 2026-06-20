import type { Metadata } from "next";
import Link from "next/link";
import BrandIcon from "../_components/BrandIcon";
import { IconArrowRight } from "../_components/icons";

export const metadata: Metadata = {
  title: "Stack",
  description: "The tools Ali Demirbaş instruments, queries and optimizes growth with every day.",
};

// Logos come from each tool's own domain (Google favicon service) so every
// tile renders — even brands that aren't on icon sets.
const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const groups = [
  {
    title: "Design & Build",
    tools: [
      { name: "N8N", domain: "n8n.io", tag: "Automation" },
      { name: "ChatGPT", domain: "openai.com", tag: "OpenAI" },
      { name: "Framer", domain: "framer.com", tag: "Web Design Platform" },
      { name: "Lovable", domain: "lovable.dev", tag: "AI Code Editor" },
      { name: "Figma", domain: "figma.com", tag: "Design Tool" },
    ],
  },
  {
    title: "Data & Analytics",
    tools: [
      { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics" },
      { name: "Looker Studio", domain: "lookerstudio.google.com", tag: "Data Visualisation" },
      { name: "Adjust", domain: "adjust.com", tag: "Mobile App Analytics" },
    ],
  },
  {
    title: "CRM & Engagement",
    tools: [
      { name: "Intercom", domain: "intercom.com", tag: "The complete customer service platform" },
      { name: "Hubspot", domain: "hubspot.com", tag: "Customer Relations Platform" },
      { name: "Insider", domain: "useinsider.com", tag: "Omnichannel Marketing" },
    ],
  },
  {
    title: "Work Management",
    tools: [
      { name: "Notion", domain: "notion.so", tag: "Work Management Tool" },
      { name: "Arc", domain: "arc.net", tag: "Browser" },
    ],
  },
];

export default function StackPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <span className="eyebrow-dash" data-reveal>
            <span className="dash" />
            Stack
          </span>
          <h1 data-reveal>Stack.</h1>
          <p className="ph-sub" data-reveal>
            Software I use to craft something valuable.
          </p>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <div className="stack-groups">
            {groups.map((group, gi) => (
              <div className="stack-group" data-reveal style={{ transitionDelay: `${gi * 0.06}s` }} key={group.title}>
                <h2 className="sg-title">{group.title}</h2>
                <div className="sg-grid">
                  {group.tools.map((tool) => (
                    <div className="sg-tool" key={tool.name}>
                      <BrandIcon name={tool.name} src={logoSrc(tool.domain)} />
                      <span className="meta">
                        <span className="tname">{tool.name}</span>
                        <span className="ttag">{tool.tag}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nudge">
        <div className="wrap inner">
          <p className="big" data-reveal>
            Want to work together? <Link href="/contact">Let&rsquo;s talk →</Link>
          </p>
          <Link className="btn btn--primary" data-reveal href="/contact">
            Contact
            <IconArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
