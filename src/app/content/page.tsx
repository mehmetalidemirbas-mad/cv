import type { Metadata } from "next";
import ContactCard from "../_components/ContactCard";
import LinkedInCards from "../_components/LinkedInCards";
import { IconExternal } from "../_components/icons";
import { posts } from "../_components/linkedin-posts";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Insights, frameworks, and practical lessons on growth, CRO, and analytics, shared on LinkedIn.",
};

export default function ContentPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap">
          <div className="ph-card">
            <h1 data-reveal>Insights.</h1>
            <p className="ph-sub" data-reveal>
              Insights, frameworks, and practical lessons on growth, CRO, and analytics, shared on
              LinkedIn.
            </p>
          </div>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <LinkedInCards posts={posts} />
          <div className="foot-link" style={{ marginTop: 26 }}>
            <a className="link-more" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              See all on LinkedIn
              <IconExternal />
            </a>
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
