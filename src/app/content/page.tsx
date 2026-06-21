import type { Metadata } from "next";
import ContactCard from "../_components/ContactCard";
import LinkedInFeed from "../_components/LinkedInFeed";
import { IconExternal } from "../_components/icons";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Content",
  description: "Growth, CRO and analytics frameworks — unpacked one idea at a time on LinkedIn.",
};

// LinkedIn post activity ids, newest first.
const postIds = [
  "7470079770823901185",
  "7467539714124906498",
  "7462119181740617728",
  "7457125720335556609",
  "7450441561085132801",
  "7448339752757702656",
  "7444258376672354304",
  "7442933404221796353",
  "7434669739295232002",
  "7430505676927340544",
  "7427585109551345664",
  "7426172976875868161",
  "7424319546389389312",
  "7417875248949362688",
  "7417868460937859072",
  "7416505450659045376",
  "7414893643796246528",
  "7412741952833474560",
  "7411647293143293952",
  "7409480629760983042",
  "7403686038243774464",
  "7398978823242977282",
  "7390651394313306112",
  "7386653795734216704",
  "7385916431923593217",
  "7382758990344171520",
  "7381576664243306496",
  "7379044904024313856",
  "7377730104652705792",
  "7377220432132898816",
  "7376873117358477312",
  "7375786010242256896",
];

export default function ContentPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <h1 data-reveal>Content.</h1>
          <p className="ph-sub" data-reveal>
            Growth, CRO and analytics frameworks — unpacked one idea at a time on LinkedIn.
          </p>
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
