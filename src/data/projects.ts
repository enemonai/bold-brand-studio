import projectNexova from "@/assets/project-nexova.jpg";
import projectLuxe from "@/assets/project-luxe.jpg";
import projectGrain from "@/assets/project-grain.jpg";
import projectAtlas from "@/assets/project-atlas.jpg";

import caseNexovaHero from "@/assets/case-nexova-hero.jpg";
import caseNexovaLogoGrid from "@/assets/case-nexova-logo-grid.jpg";
import caseNexovaIdentity from "@/assets/case-nexova-identity.jpg";
import caseNexovaApplications from "@/assets/case-nexova-applications.jpg";

import nextron from "@/assets/Nextron.png";
import purestart from "@/assets/BABY.png";
import davora from "@/assets/Davora.png";
import pixelore from "@/assets/PIXELORE.png";

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  hero: string;
  industry: string;
  client: string;
  services: string[];
  timeline: string;
  summary: string;
  challenge: string;
  strategy: string;
  logoBreakdown: string;
  logoGridImage: string;
  identityImage: string;
  applicationsImage: string;
  colorPalette: { name: string; hex: string }[];
  typographyPrimary: string;
  typographySecondary: string;
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "nexova-fintech",
    title: "Nextron",
    category: "Brand Identity • Fintech",
    industry: "Fintech",
    client: "Nextron",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Digital Brand Guidelines"],
    timeline: "6 Weeks",
    description:
      "Complete brand identity system for a next-gen fintech startup, including logo, typography system, color palette, and digital brand guidelines.",
    image: nextron,
    hero: nextron,
    summary:
      "Nexova needed a brand identity that communicated trust, innovation, and sophistication to both retail and institutional investors. We built a strategic identity system from the ground up — starting with positioning research and ending with a complete digital brand toolkit.",
    challenge:
      "The fintech space is saturated with brands that look interchangeable — generic blues, predictable sans-serifs, and forgettable marks. Nexova needed to stand apart as a premium, trustworthy platform targeting high-net-worth individuals and institutional partners. The existing brand lacked a cohesive visual language, causing inconsistent experiences across digital touchpoints and undermining investor confidence.",
    strategy:
      "We positioned Nexova at the intersection of 'institutional trust' and 'forward innovation.' The visual direction draws from architectural precision — structured, geometric, and intentionally restrained. The brand personality centers on three pillars: Authority, Clarity, and Intelligence. Every design decision was filtered through these traits to ensure strategic coherence across all touchpoints.",
    logoBreakdown:
      "The Nexova mark is built on a geometric grid system rooted in the golden ratio. The interlocking diamond forms symbolize connectivity and structured growth — core themes in fintech. The letterforms were custom-drawn to balance approachability with institutional weight, avoiding the coldness of purely geometric type.",
    logoGridImage: caseNexovaLogoGrid,
    identityImage: caseNexovaIdentity,
    applicationsImage: caseNexovaApplications,
    colorPalette: [
      { name: "Deep Navy", hex: "#152032" },
      { name: "Gold Accent", hex: "#C9A96E" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Soft Gray", hex: "#E8E8E8" },
      { name: "Charcoal", hex: "#2A2A2A" },
    ],
    typographyPrimary: "Space Grotesk",
    typographySecondary: "Montserrat",
    results: [
      { label: "Brand Consistency", value: "100%" },
      { label: "Investor Confidence Lift", value: "+40%" },
      { label: "Digital Touchpoints Unified", value: "12+" },
      { label: "Time to Market", value: "8 Weeks" },
    ],
  },
  {
    slug: "luxe-botanica",
    title: "Davora",
    category: "Packaging Design • Luxury",
    industry: "Luxury Skincare",
    client: "Davora",
    services: ["Brand Identity", "Packaging Design", "Print Design", "Material Strategy"],
    timeline: "10 Weeks",
    description:
      "Premium packaging system for a luxury skincare brand, featuring foil-stamped boxes, custom typography, and sustainable material choices.",
    image: davora,
    hero: davora,
    summary:
      "Luxe Botanica required a premium packaging system that communicated natural luxury. We designed a cohesive identity spanning custom boxes, labels, and collateral — all rooted in a strategy of 'botanical elegance.'",
    challenge:
      "The luxury skincare market demands visual perfection. Luxe Botanica's previous packaging felt generic and failed to justify its premium price point. The brand needed a complete visual overhaul to compete with established luxury houses while maintaining its natural, botanical roots.",
    strategy:
      "We positioned the brand around 'Nature, Refined.' The visual direction combines organic textures with architectural precision — hand-drawn botanical illustrations paired with rigorous grid systems and luxurious material finishes.",
    logoBreakdown:
      "The wordmark uses a custom-modified serif with delicate botanical flourishes integrated into key letterforms. The 'L' and 'B' monogram serves as a secondary mark for packaging stamps and embossing.",
    logoGridImage: caseNexovaLogoGrid,
    identityImage: caseNexovaIdentity,
    applicationsImage: caseNexovaApplications,
    colorPalette: [
      { name: "Ivory", hex: "#F5F0E8" },
      { name: "Forest Green", hex: "#2D4A3E" },
      { name: "Gold Foil", hex: "#C9A96E" },
      { name: "Blush", hex: "#E8D5C8" },
      { name: "Deep Brown", hex: "#3A2A1A" },
    ],
    typographyPrimary: "Playfair Display",
    typographySecondary: "Montserrat",
    results: [
      { label: "Shelf Appeal Score", value: "+65%" },
      { label: "Brand Perception Lift", value: "+50%" },
      { label: "Packaging SKUs Designed", value: "24" },
      { label: "Sustainable Materials", value: "100%" },
    ],
  },
  {
    slug: "grain-and-gather",
    title: "PureStart",
    category: "Brand Identity • Food & Beverage",
    industry: "Food & Beverage",
    client: "PureStart",
    services: ["Brand Strategy", "Logo Design", "Packaging Design", "Brand Guidelines"],
    timeline: "12 Weeks",
    description:
      "Full brand identity and packaging design for an artisanal food brand — from farm-to-table positioning to shelf-ready packaging.",
    image: purestart,
    hero: purestart,
    summary:
      "Grain & Gather needed a brand that told their farm-to-table story with authenticity and warmth while standing out on crowded supermarket shelves.",
    challenge:
      "The artisanal food market is flooded with brands using rustic clichés. Grain & Gather needed to feel authentic without falling into the 'kraft paper and burlap' trap. They required a modern interpretation of artisanal values that resonated with health-conscious millennials.",
    strategy:
      "We built the brand around 'Modern Craft' — combining clean, contemporary typography with hand-drawn illustrative elements. The visual system bridges artisanal warmth and modern sophistication.",
    logoBreakdown:
      "The wordmark pairs a bold geometric sans-serif with a hand-lettered ampersand that symbolizes the connection between farm and table. The wheat motif in the icon is abstracted into a minimal geometric form.",
    logoGridImage: caseNexovaLogoGrid,
    identityImage: caseNexovaIdentity,
    applicationsImage: caseNexovaApplications,
    colorPalette: [
      { name: "Warm Cream", hex: "#F5EDE0" },
      { name: "Harvest Gold", hex: "#D4A853" },
      { name: "Earth Brown", hex: "#5C4033" },
      { name: "Sage Green", hex: "#7A8B6F" },
      { name: "Charcoal", hex: "#2A2A2A" },
    ],
    typographyPrimary: "DM Serif Display",
    typographySecondary: "Montserrat",
    results: [
      { label: "Retail Placement", value: "120+ Stores" },
      { label: "Brand Recognition", value: "+70%" },
      { label: "Product Lines Designed", value: "8" },
      { label: "Social Engagement", value: "+55%" },
    ],
  },
  {
    slug: "atlas-industrial",
    title: "Pixelore",
    category: "Brand Strategy • Industrial",
    industry: "Industrial Manufacturing",
    client: "Pixelore",
    services: ["Brand Strategy", "Logo Redesign", "Corporate Identity", "Environmental Design"],
    timeline: "6 Weeks",
    description:
      "Strategic rebrand for an industrial manufacturing company — modernizing a 20-year-old brand for a new era of growth.",
    image: pixelore,
    hero: pixelore,
    summary:
      "Atlas Industrial needed to shed its outdated image and reposition for a new chapter of growth, M&A activity, and talent acquisition in the modern manufacturing landscape.",
    challenge:
      "A 20-year-old brand built for a different era was holding back a company that had evolved significantly. The dated identity was making it harder to attract top engineering talent, win modern contracts, and pursue acquisition targets that expected a polished corporate partner.",
    strategy:
      "We positioned Atlas at the intersection of 'Heritage Strength' and 'Modern Precision.' The rebrand honored the company's industrial roots while projecting the sophistication expected by today's stakeholders.",
    logoBreakdown:
      "The new Atlas mark distills the original's complexity into a bold, geometric 'A' built from structural steel beam cross-sections. It communicates strength, precision, and forward momentum in a single, memorable form.",
    logoGridImage: caseNexovaLogoGrid,
    identityImage: caseNexovaIdentity,
    applicationsImage: caseNexovaApplications,
    colorPalette: [
      { name: "Steel Blue", hex: "#2C3E50" },
      { name: "Industrial Orange", hex: "#E67E22" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Concrete Gray", hex: "#95A5A6" },
      { name: "Deep Black", hex: "#1A1A1A" },
    ],
    typographyPrimary: "Space Grotesk",
    typographySecondary: "Montserrat",
    results: [
      { label: "Talent Acquisition", value: "+35%" },
      { label: "Contract Win Rate", value: "+25%" },
      { label: "Brand Modernization", value: "Complete" },
      { label: "Stakeholder Approval", value: "100%" },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}
