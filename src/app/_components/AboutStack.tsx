"use client";

import { useEffect, useRef } from "react";
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
    rot: -1.5,
    cta: true,
  },
];

// Cohesion-style "About me" block: a centered title with stacked, slightly
// rotated tinted cards that rise up from the bottom as they scroll into view.
export default function AboutStack() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = rootRef.current?.querySelectorAll("[data-rise]");
    if (!els || !els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="co-shell" ref={rootRef}>
      <div className="co-about-head">
        <span className="co-eyebrow">Get to know me</span>
        <h2 className="co-display">
          About <em>me</em>
        </h2>
      </div>

      <div className="co-about-stack">
        {cards.map((card, i) => (
          <article
            key={i}
            className="co-acard"
            data-rise
            style={{ ["--rot" as string]: `${card.rot}deg`, zIndex: i + 1 }}
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
