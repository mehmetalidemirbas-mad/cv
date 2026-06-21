import Link from "next/link";
import BrandIcon from "./_components/BrandIcon";
import ContactCard from "./_components/ContactCard";
import LinkedInFeed from "./_components/LinkedInFeed";
import { IconArrowRight, IconLinkedIn } from "./_components/icons";
import { postIds } from "./_components/linkedin-posts";
import { socials } from "./_components/nav-items";

const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

// A curated cross-section of the full Stack page, surfaced on the home page.
const stackPreview = [
  { name: "Figma", domain: "figma.com", tag: "Design Tool" },
  { name: "GA4", domain: "analytics.google.com", tag: "Web Analytics" },
  { name: "Google Tag Manager", domain: "tagmanager.google.com", tag: "Tag Management" },
  { name: "Adjust", domain: "adjust.com", tag: "Mobile Attribution" },
  { name: "AppsFlyer", domain: "appsflyer.com", tag: "Mobile Attribution" },
  { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics" },
  { name: "Looker Studio", domain: "lookerstudio.google.com", tag: "Data Visualisation" },
  { name: "Insider", domain: "useinsider.com", tag: "Omnichannel Marketing" },
  { name: "Braze", domain: "braze.com", tag: "Customer Engagement" },
  { name: "Hotjar", domain: "hotjar.com", tag: "Heatmaps & Recordings" },
  { name: "Semrush", domain: "semrush.com", tag: "SEO & Marketing" },
  { name: "Notion", domain: "notion.so", tag: "Work Management" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="hero">
        <div className="wrap">
          <div className="hero-card">
            <h1 data-reveal>
              Hi, this is
              <br />
              Ali Demirbaş.
            </h1>
            <p className="sub" data-reveal>
              <b>Performance &amp; Growth Strategist.</b> I drive product scale through data-driven
              precision and engineered marketing.
            </p>
            <div className="hero-cta" data-reveal>
              <Link className="btn btn--primary" href="/about">
                About
                <IconArrowRight />
              </Link>
              <a
                className="btn btn--dark btn--icon"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <IconLinkedIn />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="block" id="about">
        <div className="wrap">
          <div className="about-bio" data-reveal>
            <span className="eyebrow">About</span>
            <p style={{ marginTop: 24 }}>
              I architect the core data framework that powers sustainable growth. I engineer
              precise GA4/GTM pipelines, optimize complex Adjust MMP setups, and run
              evidence-based CRO programs that convert traffic into high-value revenue. I treat
              marketing as an iterative engineering discipline built on rigorous instrumentation,
              data-driven optimization, and methodical execution.
            </p>
            <div className="foot-link" style={{ marginTop: 18 }}>
              <Link className="link-more" href="/about">
                More about me
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="block" id="content">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <div>
              <span className="eyebrow">Content</span>
              <h2>Latest content</h2>
            </div>
            <p className="sec-lede">
              Growth, CRO and analytics frameworks, unpacked one idea at a time on LinkedIn.
            </p>
          </div>
          <LinkedInFeed ids={postIds.slice(0, 6)} />
          <div className="foot-link">
            <Link className="link-more" href="/content">
              See all content
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="block" id="stack">
        <div className="wrap">
          <div className="sec-head" data-reveal>
            <div>
              <span className="eyebrow">Stack</span>
              <h2>Tools I work with</h2>
            </div>
            <p className="sec-lede">
              The software I instrument, query and optimize growth with every day.
            </p>
          </div>
          <div className="sg-grid" data-reveal>
            {stackPreview.map((tool) => (
              <div className="sg-tool" key={tool.name}>
                <BrandIcon name={tool.name} src={logoSrc(tool.domain)} />
                <span className="meta">
                  <span className="tname">{tool.name}</span>
                  <span className="ttag">{tool.tag}</span>
                </span>
              </div>
            ))}
          </div>
          <div className="foot-link">
            <Link className="link-more" href="/stack">
              See full stack
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
