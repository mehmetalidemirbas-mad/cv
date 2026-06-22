import Image from "next/image";
import Link from "next/link";
import AboutStack from "./_components/AboutStack";
import ContactCard from "./_components/ContactCard";
import LinkedInCards from "./_components/LinkedInCards";
import StackFlip, { type StackTool } from "./_components/StackFlip";
import { IconAbout, IconArrowRight, IconContact, IconContent, IconExternal } from "./_components/icons";
import { posts } from "./_components/linkedin-posts";
import { socials } from "./_components/nav-items";

// A curated cross-section of the full Stack page, surfaced on the home page.
const stackPreview: StackTool[] = [
  { name: "Figma", domain: "figma.com", tag: "Design & Prototyping", blurb: "Designing landing pages and experiment mockups before they go live." },
  { name: "Google Analytics 4", domain: "analytics.google.com", tag: "Web Analytics", blurb: "Event-based web and app analytics, funnels, and conversion tracking." },
  { name: "Google Tag Manager", domain: "tagmanager.google.com", tag: "Tag Management", blurb: "Deploying and governing tracking tags without shipping new code." },
  { name: "Adjust", domain: "adjust.com", tag: "Mobile Attribution", blurb: "Mobile attribution and measuring acquisition campaigns end to end." },
  { name: "Mixpanel", domain: "mixpanel.com", tag: "Product Analytics", blurb: "Product analytics for retention, cohorts, and user journeys." },
  { name: "Looker Studio", domain: "lookerstudio.google.com", tag: "Data Visualisation", blurb: "Dashboards that turn growth KPIs into something teams can act on." },
  { name: "Insider", domain: "useinsider.com", tag: "Omnichannel Marketing", blurb: "Omnichannel campaigns and personalization across the lifecycle." },
  { name: "Braze", domain: "braze.com", tag: "Customer Engagement", blurb: "Lifecycle messaging and customer engagement at scale." },
];

export default function Home() {
  return (
    <main id="top">
      <header className="mk-hero">
        <div className="mk-shell">
          <div className="mk-hero-inner" data-reveal>
            <h1 className="mk-hero-title">
              Hi, I&apos;m
              <span className="mk-hero-ava">
                <Image src="/foto.webp" alt="Ali Demirbaş" width={96} height={96} priority />
              </span>
              Ali Demirbaş.
            </h1>
            <p className="mk-hero-sub">
              Performance &amp; Growth Strategist. I help digital products scale through analytics,
              experimentation, and performance marketing.
            </p>
          </div>

          <div className="mk-cards" data-reveal>
            <Link className="mk-card" href="/about">
              <span className="mk-card-ic">
                <IconAbout />
              </span>
              <h3>About me</h3>
              <p>A closer look at my experience, skills, and growth approach.</p>
              <span className="mk-card-go">
                <IconArrowRight />
              </span>
            </Link>
            <Link className="mk-card" href="/content">
              <span className="mk-card-ic">
                <IconContent />
              </span>
              <h3>Insights</h3>
              <p>Growth, CRO, and analytics ideas, shared on LinkedIn.</p>
              <span className="mk-card-go">
                <IconArrowRight />
              </span>
            </Link>
            <Link className="mk-card" href="/contact">
              <span className="mk-card-ic">
                <IconContact />
              </span>
              <h3>Get in touch</h3>
              <p>Open to roles, collaborations, and interesting problems.</p>
              <span className="mk-card-go">
                <IconArrowRight />
              </span>
            </Link>
          </div>
        </div>
      </header>

      <section className="co-section" id="about">
        <AboutStack />
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

      <section className="co-section co-section--tint" id="stack">
        <div className="co-shell">
          <div className="co-stack-head" data-reveal>
            <span className="co-eyebrow">My toolkit</span>
            <h2 className="co-display">
              My <em>stack</em>
            </h2>
            <p className="co-lede">
              The tools I use to design experiments, build reliable measurement, analyze user
              behavior, and optimize growth.
            </p>
          </div>
          <StackFlip tools={stackPreview} />
          <div className="co-foot">
            <Link className="co-btn co-btn--ghost" href="/stack">
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
