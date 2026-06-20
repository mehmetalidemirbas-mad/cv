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
          <span className="eyebrow-dash" data-reveal>
            <span className="dash" />
            Growth Marketer · Istanbul
          </span>
          <h1 data-reveal>
            Hi, this is
            <br />
            Ali Demirbaş.
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="sub" data-reveal>
            Discover my vision as a Growth Marketer with expertise in{" "}
            <b>scaling digital products and building data-driven growth strategies.</b>
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
            <span className="eyebrow">
              <span className="num">01</span> About
            </span>
            <p style={{ marginTop: 24 }}>
              I build the measurement layer behind growth — clean GA4/GTM pipelines, Adjust MMP
              setup, and CRO programs that turn traffic into revenue. I treat marketing as an
              engineering problem: instrument first, optimize on evidence, ship.
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
              <span className="eyebrow">
                <span className="num">02</span> Content
              </span>
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
