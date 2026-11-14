// Single source of truth for the site's content.
// To update the site after a new CV, edit this file only.

export const profile = {
  name: "Muhaiminul Hossain",
  headline: "Senior Product Leader",
  focus: "Digital Platforms, AI/GenAI & Customer Experience",
  current: "Director of Technology & Product Management, Spreeha Foundation",
  location: "Dhaka, Bangladesh",
  email: "hossain.muhaiminul@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhaiminulhossain/",
  github: "https://github.com/muhaiminulhossain",
  resume: "/assets/resume.pdf",
  photo: "/assets/portrait.jpg",
  intro:
    "Product leader with 10+ years building large-scale digital platforms, payments and credit ecosystems across emerging markets. I turn customer needs, data and new technology into products that ship and outcomes that show up in the numbers — from Bangladesh's first QR-based Farmer Payment Card to AI clinical decision support used across 100+ health centres.",
};

export const stats = [
  { value: "10+", label: "years building digital products" },
  { value: "143K+", label: "users on the iFarmer platform ecosystem" },
  { value: "$7.7M", label: "GMV, with 65% YoY growth" },
  { value: "$150M+", label: "agricultural investment facilitated" },
  { value: "2M+", label: "patients reached through Sneho" },
];

export const nowProducts = [
  {
    name: "Sneho",
    kind: "AI clinical decision support",
    text:
      "Gives partner doctors AI-assisted medication and diagnostic-test suggestions, with bilingual English/Bengali report interpretation. I led the move from an on-device SLM to a cloud-primary, model-agnostic build (GPT-4o-mini), removing a concurrency ceiling at ~150 users ahead of rollout to 129 doctors with Grameen Kallyan.",
    facts: ["2M+ patients", "100+ centres", "129 doctors in rollout"],
  },
  {
    name: "EyeScan",
    kind: "AI cataract screening",
    text:
      "A smartphone app that screens and stages cataract severity without specialist equipment, built for remote communities. Added user profiles and offline inference; next step is a 2,000-image dataset for clinical validation and peer-reviewed publication.",
    facts: ["96.2% F1", "675 ophthalmologist-verified images", "Works offline"],
  },
  {
    name: "M&E platform",
    kind: "Impact measurement",
    text:
      "Built from scratch to quantify health outcomes across all three products — the evidence base for grant applications and donor reporting, including the APHRC Kenya pilot and Novo Nordisk Foundation work.",
    facts: ["Cross-product outcomes", "Donor & grant reporting"],
  },
];

export const experience = [
  {
    role: "Director of Technology & Product Management",
    company: "Spreeha Foundation",
    period: "Sep 2026 – Present",
    location: "Dhaka, Bangladesh",
    current: true,
    points: [
      "Lead technology and product strategy for Spreeha's R&D function, with direct oversight of engineering, design, data and AI/ML teams across Sneho, EyeScan and the M&E platform.",
      "Drive architecture and product direction for EyeScan — AI cataract screening with offline inference; the model reaches 96.2% F1 on a 675-image ophthalmologist-verified dataset.",
      "Own Sneho's migration from on-device SLM to a cloud-primary, model-agnostic architecture, resolving a concurrency ceiling that blocked scale past ~150 users; driving rollout to 129 partner doctors with Grameen Kallyan.",
      "Represent Spreeha's AI and technology agenda with APHRC (Kenya pilot), the Novo Nordisk Foundation and the board, as a member of the Senior Leadership Team.",
    ],
  },
  {
    role: "Technical Advisor — Sneho",
    company: "Spreeha Foundation",
    period: "Jun 2026 – Sep 2026",
    location: "Remote · Contract, part-time",
    points: [
      "Owned product strategy, roadmap and technical architecture for Sneho, an AI clinical operating system for partner doctors.",
      "Spotted that the planned on-device SLM approach would hit a hard concurrency ceiling; secured Executive Director and CTO buy-in for a cloud-primary, model-agnostic design benchmarked against GPT-4-class models.",
      "Authored the Vision 2028 strategy, a clinical AI evaluation framework, and East Africa expansion materials for a Kenya pilot via APHRC supporting a Novo Nordisk Foundation grant application.",
    ],
  },
  {
    role: "AI Product Strategist",
    company: "Raven by MyAlice",
    period: "Dec 2025 – Mar 2026",
    location: "Remote · Contract",
    points: [
      "Led AI product strategy for Raven, an AI-first B2B SaaS platform; scoped and prioritised automation and conversation features for SME customer support.",
      "Defined requirements and the AI feature roadmap for LLM-powered reply suggestions, workflow automation and multichannel engagement.",
      "Shipped AI-assisted features with engineering and design, using experimentation and usage analytics to guide iteration.",
    ],
  },
  {
    role: "Head of Product Management → VP, Product",
    company: "iFarmer Limited",
    period: "Jul 2021 – Nov 2025",
    location: "Dhaka, Bangladesh",
    note: "Promoted to VP, Product in January 2024 · Visa Accelerator 2024 Winner",
    points: [
      "Owned company-wide product strategy across finance, commerce and agri-advisory, building a multi-sided ecosystem serving 143,000+ users.",
      "Delivered a Visa-backed QR Payment Card pilot during a nationwide shutdown, coordinating banks, regulators and engineering.",
      "Scaled Sofol, KriShop, Folon and iCore — repeat orders up 22%, transaction success rate to 81.6%.",
      "Designed AI-driven credit scoring enabling $14.6M in direct financing and $4.4M in co-financing with partner banks.",
      "Grew GMV to $7.7M through product-led growth loops, funnel optimisation and A/B-tested releases.",
      "Built an experimentation culture across activation, retention and transactions using Mixpanel and SQL; managed cross-functional teams aligned to OKRs and board goals.",
    ],
  },
  {
    role: "Product Manager",
    company: "iFarmer Limited",
    period: "Jul 2020 – Jun 2021",
    location: "Dhaka, Bangladesh",
    points: [
      "Conceived and shipped Sofol, the field-force and agri-financing platform, in under 3 months as sole PM with a two-person engineering team.",
      "Architected the three-stage “Project” financing framework — purchase orders, geo-tagged field verification, invoice reconciliation and profit-split settlement.",
      "Integrated the national ID (NID) database into onboarding and designed an offline-first sync model for rural connectivity.",
      "Designed OTP-based consent for farmer data-sharing with banks, API sync to partner banks' CBS for shared KYC, and instalment-based repayment.",
      "Built investor dashboards and digital payments in iFarmer App 2.0; piloted blockchain supply-chain traceability with InfoCorp.",
    ],
  },
  {
    role: "Product Analyst",
    company: "SureCash",
    period: "Aug 2019 – Feb 2020",
    location: "Dhaka, Bangladesh",
    points: [
      "Developed the TallyKhata and RechargeWalla MVPs for underserved micro-merchants.",
      "Designed the TallyPay digital wallet and a UNCDF-funded credit scoring model for merchants with thin credit files.",
    ],
  },
  {
    role: "Senior Executive",
    company: "BRAC",
    period: "Aug 2018 – May 2019",
    location: "Dhaka, Bangladesh",
    earlier: true,
    points: [
      "Managed digital loan servicing for microfinance and SME portfolios covering 100,000+ borrowers.",
      "Integrated bKash mobile loan repayment, improving on-time repayment by 28%, and led the wider BRAC–bKash wallet collaboration.",
      "Managed a 10-agent call centre and 700 customer service agents across 2,400 branches; co-led the BRAC Annual Fair reaching 5 million clients.",
      "Digitised BRAC International's and BRAC Bangladesh's SME loan application processes.",
    ],
  },
  {
    role: "Management Professional Staff",
    company: "BRAC",
    period: "May 2017 – Jul 2018",
    location: "Dhaka, Bangladesh",
    earlier: true,
    points: [
      "Led a cash-in-hand study on month-end unbanked liquidity that informed treasury policy.",
      "Wrote BRAC Microfinance's financial product design guideline and ran unit-cost analysis to inform loan pricing.",
      "Piloted the Job Holder's and Seasonal Loan products; led launch of the BRAC–ShopUp f-commerce loan for Facebook sellers.",
      "Led a cashless branch operations pilot and digital literacy initiatives across 2,000+ branches.",
    ],
  },
  {
    role: "Young Professional Trainee",
    company: "BRAC",
    period: "May 2016 – Apr 2017",
    location: "Dhaka, Bangladesh",
    earlier: true,
    points: [
      "Managed branch operations with a ~$455K loan portfolio and 3,000 active clients.",
      "Researched livestock product expansion (BRAC Chicken) to support go-to-market decisions.",
    ],
  },
  {
    role: "Order Processing Executive",
    company: "Kaymu Bangladesh (Daraz)",
    period: "Aug 2015 – Apr 2016",
    location: "Dhaka, Bangladesh",
    earlier: true,
    points: [
      "Managed end-to-end vendor order processing and fulfilment for one of Bangladesh's leading marketplaces.",
    ],
  },
];

export const competencies = [
  {
    title: "Product & Delivery",
    items: [
      "Product roadmapping",
      "Product discovery",
      "Agile / Scrum delivery",
      "Requirements & PRDs",
      "User stories & acceptance criteria",
      "Backlog & release management",
      "Stakeholder alignment",
    ],
  },
  {
    title: "AI & Digital Platforms",
    items: [
      "AI / GenAI product integration",
      "Personalisation & recommendations",
      "RAG architectures",
      "OpenAI APIs",
      "Pinecone vector DB",
      "AWS Bedrock",
      "APIs & system integrations",
    ],
  },
  {
    title: "Analytics & Growth",
    items: [
      "Product analytics",
      "Mixpanel",
      "Google Analytics",
      "SQL",
      "A/B testing & experimentation",
      "Funnel optimisation",
      "User journey design",
    ],
  },
  {
    title: "Fintech & Platforms",
    items: [
      "Digital wallets",
      "QR payment systems",
      "Lending platforms",
      "Credit scoring",
      "Banking partnerships",
      "Marketplace & platform design",
    ],
  },
];

export const stack = [
  { group: "Product", items: ["Jira", "Confluence", "Notion", "Figma", "Miro"] },
  { group: "Analytics", items: ["Mixpanel", "SQL", "Google Analytics"] },
  { group: "AI / ML", items: ["OpenAI API", "Pinecone", "AWS Bedrock", "OpenClaw", "LangChain"] },
  { group: "Automation", items: ["n8n", "Zapier"] },
];

export const awards = [
  {
    title: "Visa Accelerator Program 2024 — Winner",
    text: "For launching Bangladesh's first Farmer QR Payment Card under extreme operational constraints.",
  },
  {
    title: "ADPList Top 100 Global Mentor (3×)",
    text: "Three consecutive times, across a 2.6-year mentorship journey spanning 5 countries and 19+ mentees.",
  },
  {
    title: "Rippleworks Fellowship 2023",
    text: "Selected as a Rippleworks Expert for scaling fintech impact in emerging markets.",
  },
  {
    title: "Google for Startups & Dvara E-Registry",
    text: "Recognised for agri-fintech innovation, digital financial inclusion and ecosystem-building in South Asia.",
  },
];

export const education = {
  degree: "BBA — Finance & Marketing",
  school: "North South University, Dhaka",
};

export const certifications = [
  { title: "Visa Fintech Accelerator Program", org: "Visa Inc.", year: "2024" },
  { title: "Code in Place — Python", org: "Stanford University", year: "2024" },
  { title: "Product Strategy Sprint", org: "Google for Startups", year: "2023" },
];
