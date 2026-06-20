import type { Metadata } from "next";
import BrandIcon from "../_components/BrandIcon";
import ContactCard from "../_components/ContactCard";

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
      { name: "Figma", domain: "figma.com", tag: "Design Tool" },
      { name: "Framer", domain: "framer.com", tag: "Web Design Platform" },
      { name: "ChatGPT", domain: "openai.com", tag: "OpenAI" },
      { name: "Canva", domain: "canva.com", tag: "Design & Graphics" },
      { name: "Claude", domain: "claude.ai", tag: "Anthropic AI" },
      { name: "Midjourney", domain: "midjourney.com", tag: "AI Image Generation" },
    ],
  },
  {
    title: "Web & Product Analytics",
    tools: [
      { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics" },
      { name: "Hotjar", domain: "hotjar.com", tag: "Heatmaps & Recordings" },
      { name: "Microsoft Clarity", domain: "clarity.microsoft.com", tag: "Behavior Analytics" },
      { name: "GA4", domain: "analytics.google.com", tag: "Web Analytics" },
      { name: "Google Tag Manager", domain: "tagmanager.google.com", tag: "Tag Management" },
      { name: "Smartlook", domain: "smartlook.com", tag: "Session Analytics" },
    ],
  },
  {
    title: "Mobile / Attribution (MMP)",
    tools: [
      { name: "Adjust", domain: "adjust.com", tag: "Mobile App Analytics" },
      { name: "AppsFlyer", domain: "appsflyer.com", tag: "Mobile Attribution" },
      { name: "Firebase", domain: "firebase.google.com", tag: "App Platform & Analytics" },
      { name: "RevenueCat", domain: "revenuecat.com", tag: "In-App Subscriptions" },
    ],
  },
  {
    title: "BI / Data Visualization",
    tools: [
      { name: "Looker Studio", domain: "lookerstudio.google.com", tag: "Data Visualisation" },
      { name: "Tableau", domain: "tableau.com", tag: "Data Visualisation" },
      { name: "Power BI", domain: "powerbi.microsoft.com", tag: "Business Intelligence" },
      { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics" },
      { name: "Qlik", domain: "qlik.com", tag: "Business Intelligence" },
      { name: "Graylog", domain: "graylog.org", tag: "Log Management" },
      { name: "Kibana", domain: "elastic.co", tag: "Log & Data Analytics" },
    ],
  },
  {
    title: "CRM & Engagement",
    tools: [
      { name: "Insider", domain: "useinsider.com", tag: "Omnichannel Marketing" },
      { name: "Braze", domain: "braze.com", tag: "Customer Engagement" },
      { name: "Mailchimp", domain: "mailchimp.com", tag: "Email Marketing" },
      { name: "OneSignal", domain: "onesignal.com", tag: "Push Notifications" },
      { name: "D·engage", domain: "dengage.com", tag: "Marketing Automation" },
    ],
  },
  {
    title: "SEO & Content",
    tools: [
      { name: "Ahrefs", domain: "ahrefs.com", tag: "SEO Toolset" },
      { name: "Semrush", domain: "semrush.com", tag: "SEO & Marketing" },
      { name: "Screaming Frog", domain: "screamingfrog.co.uk", tag: "SEO Crawler" },
      { name: "Search Console", domain: "search.google.com", tag: "Search Analytics" },
    ],
  },
  {
    title: "CRO / A-B Test / Experimentation",
    tools: [
      { name: "Insider", domain: "useinsider.com", tag: "Web Personalization & A/B" },
    ],
  },
  {
    title: "Work Management",
    tools: [
      { name: "Jira", domain: "atlassian.com", tag: "Project Management" },
      { name: "Notion", domain: "notion.so", tag: "Work Management Tool" },
      { name: "Trello", domain: "trello.com", tag: "Task Boards" },
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

      <ContactCard />
    </main>
  );
}
