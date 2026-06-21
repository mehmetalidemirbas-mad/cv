"use client";

import { useState } from "react";

const INITIAL = 8;
const STEP = 8;

// Renders official LinkedIn post embeds for the given activity ids, with a
// "show more" control so we don't mount all iframes up front.
export default function LinkedInFeed({ ids }: { ids: string[] }) {
  const [count, setCount] = useState(INITIAL);
  const shown = ids.slice(0, count);

  return (
    <>
      <div className="li-feed">
        {shown.map((id) => (
          <iframe
            key={id}
            className="li-frame"
            src={`https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}`}
            title="LinkedIn post"
            loading="lazy"
            allowFullScreen
          />
        ))}
      </div>

      {count < ids.length ? (
        <div className="li-more">
          <button className="btn btn--ghost" type="button" onClick={() => setCount((c) => c + STEP)}>
            Show more
          </button>
        </div>
      ) : null}
    </>
  );
}
