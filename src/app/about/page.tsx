import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandIcon from "../_components/BrandIcon";
import { IconArrowRight } from "../_components/icons";

export const metadata: Metadata = {
  title: "About",
};

// Company logos are pulled from each company's own domain (via Google's favicon
// service) since most of these brands aren't on Simple Icons.
const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

const experience = [
  {
    year: "2026",
    domain: "aksigorta.com.tr",
    role: "Mobile App Growth Lead",
    company: "Aksigorta",
    period: "Apr 2026 – Present",
    desc: "Leading mobile app growth strategy, driving user acquisition and engagement for one of Turkey's largest insurers.",
  },
  {
    year: "2024",
    domain: "vodafone.com.tr",
    role: "Growth Marketing Lead",
    company: "Vodafone",
    period: "Aug 2024 – Apr 2026",
    desc: "Led growth marketing across digital channels, combining data-driven acquisition with lifecycle programs.",
  },
  {
    year: "2023",
    domain: "getir.com",
    role: "Growth – CRM Analytics Executive",
    company: "Getir",
    period: "Sep 2023 – Aug 2024",
    desc: "Managed CRM analytics and growth initiatives for rapid commerce, optimizing retention and LTV.",
  },
  {
    year: "2021",
    domain: "enuygun.com",
    role: "Lifecycle Marketing Specialist (Growth)",
    company: "Wingie Enuygun Group",
    period: "Sep 2021 – Aug 2023",
    desc: "Built and executed lifecycle marketing programs for a leading online travel platform.",
  },
  {
    year: "2020",
    domain: "albayrak.com.tr",
    role: "Digital Marketing Specialist",
    company: "Albayrak Grubu",
    period: "Oct 2020 – Aug 2021",
    desc: "Managed digital marketing campaigns across group companies.",
  },
  {
    year: "2019",
    domain: "dogusoto.com.tr",
    role: "Jr. Digital Marketing Specialist",
    company: "Doğuş Oto",
    period: "Sep 2019 – Aug 2020",
    desc: "Digital marketing execution for one of Turkey's leading automotive dealer groups.",
  },
];

export default function AboutPage() {
  return (
    <main id="top">
      <header className="page-head">
        <div className="wrap inner">
          <h1 data-reveal>About me.</h1>
          <p className="ph-sub" data-reveal>
            Growth marketer. Data person. Builder.
          </p>
        </div>
      </header>

      <section className="block bio" id="bio">
        <div className="wrap bio-wrap">
          <div className="about-prose" data-reveal>
            <p className="lead">
              I&rsquo;m Ali Demirbaş — a growth marketer based in Istanbul, eight years deep in the
              part of marketing most people skip: the measurement layer.
            </p>
            <p>
              My work sits where analytics, acquisition and product meet. I build GA4 / GTM
              infrastructure that&rsquo;s actually trustworthy, set up mobile measurement with
              Adjust, run CRO programs, and manage paid media and SEO — then tie all of it back to
              revenue, not vanity metrics.
            </p>
          </div>
          <div className="about-photo" data-reveal>
            <Image
              src="/foto.webp"
              alt="Ali Demirbaş"
              width={560}
              height={560}
              sizes="(max-width: 640px) 100vw, 360px"
            />
          </div>
        </div>
      </section>

      <section className="block" id="experience">
        <div className="wrap">
          <h2 className="exp-title" data-reveal>
            Experience
          </h2>
          <div className="exp-divider" />
          <div className="exp-list">
            {experience.map((item, i) => (
              <div className="exp-item" data-reveal style={{ transitionDelay: `${i * 0.06}s` }} key={item.company + item.year}>
                <span className="exp-year">{item.year}</span>
                <BrandIcon name={item.company} src={logoSrc(item.domain)} />
                <div className="exp-info">
                  <span className="exp-role">{item.role}</span>
                  <span className="exp-company">{item.company}</span>
                  <span className="exp-period">{item.period}</span>
                  <p className="exp-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nudge">
        <div className="wrap inner">
          <p className="big" data-reveal>
            Want to work together? <Link href="/contact">Let&rsquo;s talk →</Link>
          </p>
          <Link className="btn btn--primary" data-reveal href="/contact">
            Contact
            <IconArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
