// LinkedIn post activity ids, newest first. The `posts` array below maps each id
// to its title + summary; the card links are derived from the id.
export const postIds = [
  "7470079770823901185",
  "7467539714124906498",
  "7462119181740617728",
  "7457125720335556609",
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

export type LinkedInPost = {
  id: string;
  title: string;
  summary: string;
};

export const posts: LinkedInPost[] = [
  {
    id: "7470079770823901185",
    title: "Pre-Send Email Checklist",
    summary:
      "Small email mistakes can have a major impact, from broken links and invisible CTAs to messages landing in spam. In this post, I share the practical checklist I review before every campaign goes live. These quick checks help identify issues early, reduce avoidable errors, and ensure each email reaches the audience as intended.",
  },
  {
    id: "7467539714124906498",
    title: "A $100K Path to Product-Market Fit",
    summary:
      "Finding product-market fit does not always require millions of dollars. In this post, I share a disciplined one-year, $100K growth plan for a B2B SaaS company with a working MVP. The framework covers preparation, customer discovery, validation, activation, and demand generation, while using AI as an operational partner rather than simply another tool.",
  },
  {
    id: "7462119181740617728",
    title: "In-House, Outsourced or Hybrid?",
    summary:
      "Growing companies eventually face an important decision: which capabilities should remain in-house, and which should be supported externally? In this post, I compare in-house, outsourced, and hybrid growth models. I also explain why the right structure depends on the company's stage, resources, existing capabilities, and growth objectives, and why that structure should evolve over time.",
  },
  {
    id: "7457125720335556609",
    title: "Building a Product with AI",
    summary:
      "AI may appear effortless in theory, but the real learning begins when you use it to build a working product. In this post, I share our experience creating numespace.com and treating AI as a collaborative partner across development, design, SEO, and user experience. The process showed us that speed matters only when it is supported by clear strategy and product thinking.",
  },
  {
    id: "7448339752757702656",
    title: "Mapping E-Commerce User Flows",
    summary:
      "A smooth e-commerce experience begins with understanding and mapping every step of the customer journey. In this post, I share a practical template covering essential flows such as registration, product discovery, ordering, referrals, and account management. The template can be copied, adapted, and expanded according to the needs of different e-commerce products.",
  },
  {
    id: "7444258376672354304",
    title: "Modern Marketing Case Studies",
    summary:
      "Many marketing interview case studies are outdated, overly generic, or disconnected from real business challenges. In this post, I share a collection of 13 detailed, data-driven case studies covering Growth Marketing, Performance Marketing, and CRM. The resource is designed to help companies select relevant interview questions and help candidates understand the analytical and strategic skills expected in modern marketing roles.",
  },
  {
    id: "7442933404221796353",
    title: "The Dark Side of Segmentation",
    summary:
      "More segments do not automatically create better personalization. In this post, I explain how excessive or poorly designed segmentation often increases operational complexity without changing the underlying strategy. I also share a simple way to audit a segmentation portfolio, remove unnecessary audiences, and focus only on groups that lead to genuinely different decisions or actions.",
  },
  {
    id: "7434669739295232002",
    title: "Site Speed Is a Revenue Metric",
    summary:
      "A slow website is not only a technical issue; it is a direct growth and revenue problem. In this post, I explain how poor site performance can increase abandonment, reduce conversion rates, and weaken advertising efficiency. Sometimes the biggest growth opportunity is not attracting more traffic, but creating a faster and more seamless experience for the traffic you already have.",
  },
  {
    id: "7430505676927340544",
    title: "The Mathematics of Growth",
    summary:
      "Sustainable growth requires more than monitoring revenue and campaign performance. In this post, I explain the financial and behavioural metrics behind healthy growth, including CAC, payback period, estimated lifetime value, activation, retention, and repeat purchase. The goal is to make growth mathematics easier to understand and help teams interpret the right metric at the right time.",
  },
  {
    id: "7427585109551345664",
    title: "Loyalty or Discount Dependency?",
    summary:
      "Repeat purchases do not always indicate genuine customer loyalty. In this post, I explore how frequent promotions can make customers loyal to discounts rather than to the brand itself. True loyalty becomes visible when customers continue purchasing without incentives, return for the overall experience, and recommend the brand because of its value, quality, or service.",
  },
  {
    id: "7426172976875868161",
    title: "A 10-Step CRM Audit",
    summary:
      "Starting a new CRM role often means entering a complex environment filled with data, journeys, campaigns, and competing priorities. In this post, I share a practical 10-step CRM audit designed to reveal where the biggest issues and opportunities are. The framework also includes a scoring method to help teams assess their current position and determine what to prioritize next.",
  },
];
