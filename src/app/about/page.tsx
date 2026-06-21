import type { Metadata } from "next";
import Image from "next/image";
import BrandIcon from "../_components/BrandIcon";
import ContactCard from "../_components/ContactCard";

export const metadata: Metadata = {
  title: "About",
};

// Company logos are pulled from each company's own domain (via Google's favicon
// service) since most of these brands aren't on Simple Icons.
const logoSrc = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

type Role = { role: string; period: string; desc: string };
type SingleExp = { kind: "single"; year: string; domain: string; company: string } & Role;
type GroupExp = {
  kind: "group";
  year: string;
  domain: string;
  company: string;
  span: string;
  roles: Role[];
};

const experience: (SingleExp | GroupExp)[] = [
  {
    kind: "single",
    year: "2026",
    domain: "aksigorta.com.tr",
    role: "Mobile App Growth Lead",
    company: "Aksigorta",
    period: "Apr 2026 – Present",
    desc: "Leading mobile app growth strategy, driving user acquisition and engagement for one of Turkey's largest insurers.",
  },
  {
    kind: "single",
    year: "2024",
    domain: "vodafone.com.tr",
    role: "Growth Marketing Lead",
    company: "Vodafone",
    period: "Aug 2024 – Apr 2026",
    desc: "Led growth marketing across digital channels, combining data-driven acquisition with lifecycle programs.",
  },
  {
    kind: "single",
    year: "2023",
    domain: "getir.com",
    role: "Growth – CRM Analytics Executive",
    company: "Getir",
    period: "Sep 2023 – Aug 2024",
    desc: "Managed CRM analytics and growth initiatives for rapid commerce, optimizing retention and LTV.",
  },
  {
    kind: "group",
    year: "2021",
    domain: "enuygun.com",
    company: "Wingie Enuygun Group",
    span: "Full-time · 2 yrs",
    roles: [
      {
        role: "Experienced Lifecycle Marketing Specialist (Growth)",
        period: "Jan 2023 – Aug 2023",
        desc: "Owned lifecycle and CRM programs end-to-end across the group's travel brands.",
      },
      {
        role: "Lifecycle Marketing Specialist (Growth)",
        period: "Sep 2021 – Jan 2023",
        desc: "Built and ran lifecycle marketing programs for a leading online travel platform.",
      },
    ],
  },
  {
    kind: "single",
    year: "2020",
    domain: "albayrak.com.tr",
    role: "Digital Marketing Specialist",
    company: "Albayrak Grubu",
    period: "Oct 2020 – Aug 2021",
    desc: "Managed digital marketing campaigns across group companies.",
  },
  {
    kind: "single",
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
        <div className="wrap">
          <div className="ph-card">
            <h1 data-reveal>Professional Profile</h1>
            <p className="ph-sub" data-reveal>
              Digital Marketing · Analytics · Growth Strategy
            </p>
          </div>
        </div>
      </header>

      <section className="block bio" id="bio">
        <div className="wrap bio-wrap">
          <div className="about-prose" data-reveal>
            <p className="lead">
              With over eight years of experience in digital marketing and growth, I have worked on
              strategies designed to support the growth objectives of different products and business
              models.
            </p>
            <p>
              My experience spans analytics, user acquisition, product, and growth strategy. I use
              data to evaluate digital marketing performance, understand user behavior, and identify
              opportunities for growth. Across campaign management, measurement, and optimization, I
              focus on keeping marketing initiatives aligned with business goals and delivering
              measurable outcomes.
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
            {experience.map((item, i) =>
              item.kind === "group" ? (
                <div className="exp-item exp-group" data-reveal style={{ transitionDelay: `${i * 0.06}s` }} key={item.company}>
                  <span className="exp-year">{item.year}</span>
                  <BrandIcon name={item.company} src={logoSrc(item.domain)} />
                  <div className="exp-info">
                    <span className="exp-company-h">{item.company}</span>
                    <span className="exp-period">{item.span}</span>
                    <div className="exp-roles">
                      {item.roles.map((r) => (
                        <div className="exp-role-item" key={r.role}>
                          <span className="exp-role">{r.role}</span>
                          <span className="exp-period">{r.period}</span>
                          <p className="exp-desc">{r.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
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
              )
            )}
          </div>
        </div>
      </section>

      <ContactCard />
    </main>
  );
}
