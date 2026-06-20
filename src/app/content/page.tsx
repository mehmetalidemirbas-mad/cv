import type { Metadata } from "next";
import ContactCard from "../_components/ContactCard";
import { IconExternal } from "../_components/icons";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Content",
  description: "Growth, CRO and analytics frameworks — unpacked one idea at a time on LinkedIn.",
};

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

export default function ContentPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <span className="eyebrow-dash" data-reveal>
            <span className="dash" />
            Content
          </span>
          <h1 data-reveal>Content.</h1>
          <p className="ph-sub" data-reveal>
            Growth, CRO and analytics frameworks — unpacked one idea at a time on LinkedIn.
          </p>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 48 }}>
        <div className="wrap">
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
            <a className="link-more" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              Follow on LinkedIn
              <IconExternal />
            </a>
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
