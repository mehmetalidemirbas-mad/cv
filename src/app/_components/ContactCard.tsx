import { IconLinkedIn } from "./icons";
import { socials } from "./nav-items";

// The navy "Let's connect" contact card shown at the bottom of every page.
export default function ContactCard() {
  return (
    <section className="contact-wrap">
      <div className="wrap">
        <div className="contact-card" id="contact">
          <span className="eyebrow" data-reveal>
            <span className="num">03</span> Contact
          </span>
          <h2 data-reveal>Let&rsquo;s connect.</h2>
          <p data-reveal>
            Open to growth &amp; analytics consulting, measurement audits, and CRO programs. The
            fastest way to reach me is email.
          </p>
          <div className="contact-cta" data-reveal>
            <a className="btn btn--primary" href={`mailto:${socials.email}`}>
              {socials.email}
            </a>
            <a className="btn btn--dark" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
