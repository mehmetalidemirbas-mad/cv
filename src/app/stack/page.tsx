import type { Metadata } from "next";
import BrandIcon from "../_components/BrandIcon";

export const metadata: Metadata = {
  title: "Stack",
  description: "The tools Ali Demirbaş instruments, queries and optimizes growth with every day.",
};

const groups = [
  {
    title: "Design & Build",
    tools: [
      { name: "N8N", icon: "n8n", tag: "Automation" },
      { name: "ChatGPT", icon: "openai", tag: "OpenAI" },
      { name: "Framer", icon: "framer", tag: "Web Design Platform" },
      { name: "Lovable", icon: "lovable", tag: "AI Code Editor" },
      { name: "Figma", icon: "figma", tag: "Design Tool" },
    ],
  },
  {
    title: "Data & Analytics",
    tools: [
      { name: "Mixpanel", icon: "mixpanel", tag: "Product Analytics" },
      { name: "Looker Studio", icon: "looker", tag: "Data Visualisation" },
      { name: "Adjust", icon: "adjust", tag: "Mobile App Analytics" },
    ],
  },
  {
    title: "CRM & Engagement",
    tools: [
      { name: "Intercom", icon: "intercom", tag: "The complete customer service platform" },
      { name: "Hubspot", icon: "hubspot", tag: "Customer Relations Platform" },
      { name: "Insider", icon: "useinsider", tag: "Omnichannel Marketing" },
    ],
  },
  {
    title: "Work Management",
    tools: [
      { name: "Notion", icon: "notion", tag: "Work Management Tool" },
      { name: "Arc", icon: "arc", tag: "Browser" },
    ],
  },
];

export default function StackPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
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
                      <BrandIcon name={tool.name} icon={tool.icon} />
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
    </main>
  );
}
