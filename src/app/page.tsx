import Link from "next/link";
import ContactCard from "./_components/ContactCard";
import LinkedInFeed from "./_components/LinkedInFeed";
import { IconArrowRight, IconLinkedIn } from "./_components/icons";
import { postIds } from "./_components/linkedin-posts";
import { socials } from "./_components/nav-items";

export default function Home() {
  return (
    <main id="top">
      <header className="hero">
        <div className="wrap hero-inner">
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
      </header>

      <section className="block" id="about">
        <div className="wrap">
          <div className="about-bio" data-reveal>
            <span className="eyebrow">About</span>
            <p style={{ marginTop: 24 }}>
              I architect the core data framework that powers sustainable growth — engineering
              precise GA4/GTM pipelines, optimizing complex Adjust MMP setups, and executing
              evidence-based CRO programs to convert traffic into high-value revenue. I approach
              marketing as an iterative engineering discipline: rigorous instrumentation,
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
              Growth, CRO and analytics frameworks — unpacked one idea at a time on LinkedIn.
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

      <ContactCard />
    </main>
  );
}
