import Link from "next/link";
import BrandIcon from "./_components/BrandIcon";
import ContactCard from "./_components/ContactCard";
import LinkedInCards from "./_components/LinkedInCards";
import { IconArrowRight, IconExternal, IconLinkedIn } from "./_components/icons";
import { posts } from "./_components/linkedin-posts";
import { socials } from "./_components/nav-items";

const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

// A curated cross-section of the full Stack page, surfaced on the home page.
const stackPreview = [
  { name: "Figma", domain: "figma.com", tag: "Design & Prototyping" },
  { name: "Google Analytics 4", domain: "analytics.google.com", tag: "Web Analytics" },
  { name: "Google Tag Manager", domain: "tagmanager.google.com", tag: "Tag Management" },
  { name: "Adjust", domain: "adjust.com", tag: "Mobile Attribution" },
  { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics" },
  { name: "Looker Studio", domain: "lookerstudio.google.com", tag: "Data Visualisation" },
  { name: "Insider", domain: "useinsider.com", tag: "Omnichannel Marketing" },
  { name: "Braze", domain: "braze.com", tag: "Customer Engagement" },
];

export default function Home() {
  return (
    <main id="top">
      <header className="hero">
        <div className="wrap">
          <div className="hero-card">
            <h1 data-reveal>
              Hi, I&apos;m
              <br />
              Ali Demirbaş.
            </h1>
            <p className="sub" data-reveal>
              <b>Performance &amp; Growth Strategist.</b> I help digital products scale through
              analytics, experimentation, and performance marketing.
            </p>
            <div className="hero-cta" data-reveal>
              <Link className="btn btn--primary" href="/about">
                Explore my experience
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
              I build reliable measurement frameworks that help digital products grow sustainably.
              My work includes implementing GA4 and GTM tracking systems, optimizing Adjust MMP
              setups, and designing evidence-based CRO programs that turn user insights into
              measurable business growth. I approach marketing as an iterative process built on
              accurate data, structured experimentation, and continuous optimization.
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
              <span className="eyebrow">Insights</span>
              <h2>Latest posts</h2>
            </div>
            <p className="sec-lede">
              Insights, frameworks, and practical lessons on growth, CRO, and analytics, shared on
              LinkedIn.
            </p>
          </div>
          <LinkedInCards posts={posts.slice(0, 6)} />
          <div className="foot-link">
            <a className="link-more" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              See more on LinkedIn
              <IconExternal />
            </a>
          </div>
        </div>
      </section>

      <section className="block" id="stack">
        <div className="wrap">
          <div className="sec-head sec-head--stacked" data-reveal>
            <span className="eyebrow">Stack</span>
            <h2>Tools I use</h2>
            <p className="sec-lede">
              The tools I use to design experiments, build reliable measurement, analyze user
              behavior, and optimize growth.
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
              Explore my toolkit
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
