export const TOKENS = {
  ink: "#0B1524",
  ink2: "#0F1E33",
  panel: "#16283F",
  panelBorder: "#24405E",
  amber: "#E8963D",
  amberSoft: "rgba(232,150,61,0.14)",
  teal: "#46C2B0",
  tealSoft: "rgba(70,194,176,0.14)",
  red: "#E0625A",
  redSoft: "rgba(224,98,90,0.14)",
  paper: "#EDF1F7",
  fog: "#93A4BF",
};

export const SERVICE_TIERS = [
  {
    n: "01",
    name: "Assess",
    price: "$150 – $300 flat",
    desc: "A hands-on review of your network security and current tech stack, plus where AI tools could realistically help. You get a plain-English, prioritized report.",
  },
  {
    n: "02",
    name: "Implement",
    price: "$60 – $100 / hr",
    desc: 'Firewall rules, MFA rollout, phishing-awareness training, and one or two AI tools set up around your actual pain points — not just "add ChatGPT."',
  },
  {
    n: "03",
    name: "Sustain",
    price: "$200 – $500 / mo",
    desc: "Monthly check-ins to keep systems secure and help your team use new tools well as things change.",
  },
];

export const QUIZ = [
  {
    key: "size",
    q: "How many people work at your business?",
    options: ["Just me", "2 – 10", "11 – 50", "50+"],
  },
  {
    key: "mfa",
    q: "Does your team use multi-factor authentication (MFA)?",
    options: ["Yes, everywhere", "Only on some accounts", "No", "Not sure"],
  },
  {
    key: "training",
    q: "Has your team had phishing / social engineering training?",
    options: ["Yes, recently", "Yes, a while ago", "Never"],
  },
  {
    key: "ai",
    q: "Is your team currently using AI tools (ChatGPT, Copilot, etc.)?",
    options: ["Yes, with a clear policy", "Yes, informally", "Not yet"],
  },
];

export const CHATBOT_SYSTEM_PROMPT = `You are the AI assistant for Fortline IT & Security, a Denton, TX-based freelance IT and cybersecurity consultancy.
Services and pricing (quote these exactly if asked):
1. Assess - network & AI readiness audit, flat fee $150-$300.
2. Implement - fixes (firewall, MFA, phishing training) and AI tool setup, $60-$100/hr or flat project rate.
3. Sustain - ongoing monthly retainer, security check-ins and AI support, $200-$500/month.
The consultant is completing a B.S. in Information Technology at the University of North Texas, holds an A.A.S. in Cybersecurity from North Central Texas College, and has hands-on experience in network security, penetration testing, and PKI, plus real-world freelance IT consulting experience in the Denton, TX area.
Serves small businesses in the Denton / DFW area, both remote and on-site.
Answer visitor questions in a friendly, concise, non-salesy way. If asked something you don't know, suggest they use the contact form or book an assessment. Keep replies under 80 words.`;

export const ASSESSMENT_SYSTEM_PROMPT = `You generate a short IT security & AI-readiness assessment for a small business based on quiz answers. Respond with ONLY a raw JSON object, no markdown fences, no preamble, matching exactly this shape: {"score": number (0-100), "riskLevel": "Low"|"Moderate"|"High", "summary": string (1-2 sentences, plain English, no jargon), "recommendations": [string, string, string] (short, specific, actionable)}`;