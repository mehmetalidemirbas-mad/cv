// LinkedIn post activity ids, newest first. Shared by the home "Latest content"
// preview and the full Content page.
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
  topic: string;
  summary: string;
};

// NOTE: these summaries are PLACEHOLDER copy used to preview the card layout.
// Replace each `summary` with the real English summary of the matching post
// before going live.
export const posts: LinkedInPost[] = [
  {
    id: "7470079770823901185",
    topic: "Analytics",
    summary:
      "A reliable measurement setup is the foundation of every growth decision. In this post I break down how I structure GA4 and GTM so events stay consistent across web and app. I share the naming conventions and validation checks I run before trusting a single number. The goal is simple: data you can actually build strategy on, not dashboards nobody trusts.",
  },
  {
    id: "7467539714124906498",
    topic: "Growth",
    summary:
      "Growth is rarely about one big lever; it is the compounding of many small, deliberate improvements. Here I walk through how I prioritize experiments when time and traffic are limited. I explain the framework I use to weigh impact against effort and confidence. I also cover why killing a losing test quickly matters as much as scaling a winning one.",
  },
  {
    id: "7462119181740617728",
    topic: "CRO",
    summary:
      "Most conversion problems are really clarity problems. In this post I look at how friction hides inside flows we assume are already fine. I share examples where a small copy or layout change moved the metric more than a full redesign would. I also explain how I separate real signal from noise when sample sizes are small. Optimization is a habit, not a one-time project.",
  },
  {
    id: "7457125720335556609",
    topic: "Attribution",
    summary:
      "Mobile attribution is where a lot of growth budgets quietly leak. Here I explain how I approach Adjust and MMP setups so installs and in-app events line up with reality. I cover the gap between what looks good in a dashboard and what actually drives revenue. I also share the checks I run to catch broken tracking before it skews an entire campaign.",
  },
  {
    id: "7448339752757702656",
    topic: "Experimentation",
    summary:
      "Experimentation only works when the question is sharp. In this post I describe how I frame a hypothesis so the result is actually usable. I talk through choosing the right metric, guarding against peeking, and documenting what we learned even when a test fails. The compounding value is not any single win; it is the system that keeps producing them.",
  },
  {
    id: "7444258376672354304",
    topic: "Data",
    summary:
      "Numbers do not speak for themselves; the way you structure them decides what you see. Here I share how I turn raw analytics into a view a team can act on in minutes. I cover the metrics I keep on the dashboard and the ones I deliberately leave off. I also explain why a smaller, trusted set of KPIs beats a wall of charts every time.",
  },
  {
    id: "7442933404221796353",
    topic: "Lifecycle",
    summary:
      "Retention is where sustainable growth is won or lost. In this post I unpack how I design lifecycle programs that reach users at the right moment instead of spamming them. I share how I segment by behavior rather than guesswork, and how I measure incremental impact. Good lifecycle marketing feels helpful to the user and shows up clearly in the numbers.",
  },
  {
    id: "7434669739295232002",
    topic: "Strategy",
    summary:
      "Marketing works best when every initiative ties back to a business goal. Here I explain how I connect channel work to revenue rather than vanity metrics. I walk through the questions I ask before launching anything and how I decide what to stop doing. The aim is focus: fewer, sharper bets that move the outcomes that matter.",
  },
];
