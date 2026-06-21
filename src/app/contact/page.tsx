import type { Metadata } from "next";
import { IconArrowRight, IconExternal, IconLinkedIn, IconMail } from "../_components/icons";
import { socials } from "../_components/nav-items";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap">
          <div className="ph-card">
            <h1 data-reveal>Let&rsquo;s connect.</h1>
            <p className="ph-sub" data-reveal>
              Have a question, an idea, or just want to say hello? Feel free to reach out through any
              of the channels below.
            </p>
          </div>
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
                View profile <IconExternal />
              </span>
            </a>

            <a className="cblock" href={`mailto:${socials.email}`} data-reveal style={{ transitionDelay: ".12s" }}>
              <span className="cb-ic">
                <IconMail />
              </span>
              <span className="cb-label">Send an email</span>
              <span className="cb-sub">{socials.email}</span>
              <span className="cb-go">
                Email me <IconArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
