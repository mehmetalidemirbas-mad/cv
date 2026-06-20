import type { Metadata } from "next";
import { IconArrowRight, IconExternal, IconInstagram, IconLinkedIn, IconMail } from "../_components/icons";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <span className="eyebrow-dash" data-reveal>
            <span className="dash" />
            Contact
          </span>
          <h1 data-reveal>Let&rsquo;s talk.</h1>
          <p className="ph-sub" data-reveal>
            I&rsquo;m always open to interesting conversations about{" "}
            <b>growth, analytics, and building things.</b>
          </p>
        </div>
      </header>

      <section className="block" id="reach" style={{ paddingTop: 64 }}>
        <div className="wrap">
          <div className="cblocks">
            <a className="cblock" href={socials.linkedin} target="_blank" rel="noopener noreferrer" data-reveal>
              <span className="cb-ic">
                <IconLinkedIn />
              </span>
              <span className="cb-label">Connect on LinkedIn</span>
              <span className="cb-sub">linkedin.com/in/ali-demirbas</span>
              <span className="cb-go">
                Open profile <IconExternal />
              </span>
            </a>

            <a className="cblock" href={`mailto:${socials.email}`} data-reveal style={{ transitionDelay: ".12s" }}>
              <span className="cb-ic">
                <IconMail />
              </span>
              <span className="cb-label">Send an email</span>
              <span className="cb-sub">{socials.email}</span>
              <span className="cb-go">
                Compose <IconExternal />
              </span>
            </a>

            <a className="cblock" href={socials.instagram} target="_blank" rel="noopener noreferrer" data-reveal style={{ transitionDelay: ".24s" }}>
              <span className="cb-ic">
                <IconInstagram />
              </span>
              <span className="cb-label">Follow on Instagram</span>
              <span className="cb-sub">@alidemirbaas</span>
              <span className="cb-go">
                Open profile <IconExternal />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="nudge">
        <div className="wrap inner">
          <p className="big" data-reveal>
            Prefer email? <a href={`mailto:${socials.email}`}>Write to me →</a>
          </p>
          <a className="btn btn--primary" data-reveal href={`mailto:${socials.email}`}>
            Email me
            <IconArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}
