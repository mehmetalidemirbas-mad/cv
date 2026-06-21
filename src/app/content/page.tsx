import type { Metadata } from "next";
import ContactCard from "../_components/ContactCard";
import LinkedInFeed from "../_components/LinkedInFeed";
import { IconExternal } from "../_components/icons";
import { postIds } from "../_components/linkedin-posts";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Content",
  description: "Growth, CRO and analytics frameworks, unpacked one idea at a time on LinkedIn.",
};

export default function ContentPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap">
          <div className="ph-card">
            <h1 data-reveal>Content.</h1>
            <p className="ph-sub" data-reveal>
              Growth, CRO and analytics frameworks, unpacked one idea at a time on LinkedIn.
            </p>
          </div>
        </div>
      </header>

      <section className="block" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <LinkedInFeed ids={postIds} />
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
