import { IconLinkedIn, IconMail } from "./icons";
import { socials } from "./nav-items";

// The navy "Let's connect" contact card shown at the bottom of every page.
export default function ContactCard() {
  return (
    <section className="contact-wrap">
      <div className="wrap">
        <div className="contact-card" id="contact">
          <span className="eyebrow" data-reveal>
            Contact
          </span>
          <h2 data-reveal>Let&rsquo;s connect.</h2>
          <p data-reveal>
            Have a question, an idea, or something you&rsquo;d like to discuss? Feel free to get in
            touch. You can reach me by email or connect with me on LinkedIn.
          </p>
          <div className="contact-cta" data-reveal>
            <a className="btn btn--primary" href={`mailto:${socials.email}`}>
              <IconMail />
              Email me
            </a>
            <a className="btn btn--dark" href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <IconLinkedIn />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
