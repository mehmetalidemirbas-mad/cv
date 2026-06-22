import type { CSSProperties } from "react";
import Link from "next/link";
import { IconArrowRight } from "./icons";

type Card = { text: string; rot: number; cta?: boolean };

const cards: Card[] = [
  {
    text:
      "I'm a Growth Marketer with 8+ years working at the intersection of data and user behavior. I help digital products grow sustainably by turning analytics into decisions, and decisions into measurable outcomes.",
    rot: -2,
  },
  {
    text:
      "My work spans measurement frameworks, user acquisition, and CRO. I implement GA4 and GTM tracking, optimize Adjust MMP setups, and design evidence-based experiments that turn user insights into business growth.",
    rot: 2,
  },
  {
    text:
      "I approach marketing as an iterative process built on accurate data, structured experimentation, and continuous optimization, keeping every initiative aligned with the business goals behind it.",
    rot: -2,
    cta: true,
  },
];

// Cohesion-style "About me": the title stays pinned while the cards rise up
// from the bottom and stack on top of one another as you scroll (CSS sticky).
export default function AboutStack() {
  return (
    <div className="co-about-wrap">
      <div className="co-shell co-about-head">
        <span className="co-eyebrow">Get to know me</span>
        <h2 className="co-display">
          About <em>me</em>
        </h2>
      </div>

      <div className="co-shell co-about-stack">
        {cards.map((card, i) => (
          <article
            key={i}
            className="co-acard"
            style={{ "--rot": `${card.rot}deg`, zIndex: i + 1 } as CSSProperties}
          >
            <div className="co-acard-inner">
              <p>{card.text}</p>
              {card.cta && (
                <Link className="co-btn" href="/about">
                  Read my CV
                  <IconArrowRight />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
