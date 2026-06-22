"use client";

import { useState } from "react";
import BrandIcon from "./BrandIcon";

const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export type StackTool = {
  name: string;
  domain: string;
  tag: string;
  blurb: string;
};

// Cohesion-style flip cards: front shows the tool logo + name, the back reveals
// a short description. Flips on hover (pointer) and on tap/click (touch).
export default function StackFlip({ tools }: { tools: StackTool[] }) {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (name: string) =>
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  return (
    <div className="co-stack-grid" data-reveal>
      {tools.map((tool) => (
        <button
          type="button"
          key={tool.name}
          className={`co-flip${flipped.has(tool.name) ? " is-flipped" : ""}`}
          onClick={() => toggle(tool.name)}
          aria-label={`${tool.name} — ${tool.blurb}`}
        >
          <span className="co-flip-inner">
            <span className="co-flip-face co-flip-front">
              <BrandIcon name={tool.name} src={logoSrc(tool.domain)} />
              <span className="co-flip-name">{tool.name}</span>
              <span className="co-flip-tag">{tool.tag}</span>
              <span className="co-flip-hint">Tap to flip</span>
            </span>
            <span className="co-flip-face co-flip-back">
              <span className="co-flip-name">{tool.name}</span>
              <span className="co-flip-blurb">{tool.blurb}</span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}
