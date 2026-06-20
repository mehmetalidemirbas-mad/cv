import Link from "next/link";
import ContactCard from "./_components/ContactCard";
import { IconArrowRight, IconLinkedIn } from "./_components/icons";
import { socials } from "./_components/nav-items";

const posts = [
  {
    cat: "Analytics",
    title: "GTM Ownership Modeli",
    body: "Who owns the tag layer? A RACI for Google Tag Manager so tracking doesn't rot the moment a team reorganizes.",
    date: "May 2026 · Carousel",
  },
  {
    cat: "CRO",
    title: "Cart Abandonment CRM Flows",
    body: "The trigger logic, timing and copy behind abandoned-cart flows that recover revenue without nagging the customer.",
    date: "Apr 2026 · Carousel",
  },
  {
    cat: "Mobile Growth",
    title: "Adjust MMP Kurulum Rehberi",
    body: "A step-by-step Adjust setup: SDK, events, attribution windows and the SKAdNetwork gotchas nobody warns you about.",
    date: "Apr 2026 · Carousel",
  },
];

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
            <b>Performance &amp; Growth Strategist.</b> Partner with an expert focused on driving
            product scale through data-driven precision and engineered marketing.
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
              Architecting the core data framework that powers sustainable growth. We engineer
              precise GA4/GTM pipelines, optimize complex Adjust MMP setups, and execute
              evidence-based CRO programs to convert traffic into high-value revenue. We approach
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
          <div className="cards">
            {posts.map((post, i) => (
              <article className="card" data-reveal style={{ transitionDelay: `${i * 0.08}s` }} key={post.title}>
                <span className="cat">{post.cat}</span>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <span className="date">{post.date}</span>
              </article>
            ))}
          </div>
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
