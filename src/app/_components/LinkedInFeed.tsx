"use client";

import { useRef } from "react";

// Horizontal, swipeable carousel of official LinkedIn post embeds.
export default function LinkedInFeed({ ids }: { ids: string[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="li-scroller-wrap">
      <button className="li-nav li-prev" type="button" aria-label="Previous" onClick={() => scroll(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>

      <div className="li-scroller" ref={ref}>
        {ids.map((id) => (
          <div className="li-card" key={id}>
            <iframe
              className="li-frame"
              src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
              title="LinkedIn post"
              loading="lazy"
              allowFullScreen
            />
          </div>
        ))}
      </div>

      <button className="li-nav li-next" type="button" aria-label="Next" onClick={() => scroll(1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}
