"use client";

import Image from "next/image";
import { useRef } from "react";
import { IconExternal, IconLinkedIn } from "./icons";
import type { LinkedInPost } from "./linkedin-posts";

const postUrl = (id: string) =>
  `https://www.linkedin.com/feed/update/urn:li:activity:${id}/`;

// Horizontal, swipeable row of short summary cards. Each card links out to the
// original LinkedIn post.
export default function LinkedInCards({ posts }: { posts: LinkedInPost[] }) {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: "smooth" });
  };

  return (
    <div className="li-cards">
      <div className="li-toolbar">
        <div className="li-nav-group">
          <button className="li-nav" type="button" aria-label="Previous" onClick={() => scroll(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button className="li-nav" type="button" aria-label="Next" onClick={() => scroll(1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="li-track" ref={ref}>
        {posts.map((post) => (
          <a
            className="li-post"
            key={post.id}
            href={postUrl(post.id)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="li-post-head">
              <Image
                className="li-ava"
                src="/foto.webp"
                alt="Ali Demirbaş"
                width={48}
                height={48}
              />
              <span className="li-who">
                <span className="li-name">Ali Demirbaş</span>
                <span className="li-role">Growth Marketing | CRM Marketing</span>
              </span>
              <IconLinkedIn />
            </span>
            <p className="li-post-text">{post.summary}</p>
            <span className="li-post-go">
              Read on LinkedIn <IconExternal />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
