import projectNexova from "@/assets/project-nexova.jpg";
import projectLuxe from "@/assets/project-luxe.jpg";
import projectGrain from "@/assets/project-grain.jpg";
import projectAtlas from "@/assets/project-atlas.jpg";

import nextronCard from "@/assets/Nextron-card.png";
import nextronBreakdown from "@/assets/Nextron-breakdown.png";
import nextron1 from "@/assets/project/nextron/Nextron1.png";
import nextron2 from "@/assets/project/nextron/Nextron2.png";
import nextron3 from "@/assets/project/nextron/Nextron3.png";
import nextron4 from "@/assets/project/nextron/Nextron4.png";
import nextron5 from "@/assets/project/nextron/Nextron5.png";
import nextron6 from "@/assets/project/nextron/Nextron6.png";
import caseNexovaIdentity from "@/assets/case-nexova-identity.jpg";
import caseNexovaApplications from "@/assets/case-nexova-applications.jpg";

import nextron from "@/assets/Nextron.png";
import purestart from "@/assets/BABY.png";
import davora from "@/assets/Davora.png";
import pixelore from "@/assets/PIXELORE.png";

export interface Paragraph {
  heading?: string;
  inlineHeading?: string;
  text?: string;
  bullets?: string[];
  closing?: string;
}

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
  summary: Paragraph[];
  challenge: Paragraph[];
  strategy: Paragraph[];
  logoBreakdown: Paragraph[];
  logoGridImage: string;
  identityImages: string[];
  applicationsImages: string[];
  colorPalette: { name: string; hex: string }[];
  typographyPrimary: string;
  typographySecondary: string;
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "nextron",
    title: "Nextron",
    category: "Brand Identity • Fintech",
    industry: "Fintech",
    client: "Nextron",
    services: ["Brand Strategy", "Logo Design", "Visual Identity", "Digital Brand Guidelines"],
    timeline: "6 Weeks",
    description:
      "Complete brand identity system for a next-gen fintech startup, including logo, typography system, color palette, and digital brand guidelines.",
    image: nextronCard,
    hero: nextron,
    summary: [
      { text: "Nextron needed a brand identity that communicated trust, innovation, and sophistication to both retail and institutional investors. I built a strategic identity system from the ground up — starting with positioning research and ending with a complete digital brand toolkit." }
    ],
    challenge: [
      { text: "The fintech space is saturated with brands that look interchangeable — generic blues, predictable sans-serifs, and forgettable marks. When building Nextron from the ground up, the challenge was to create a distinctive brand identity that could immediately position the company as a premium, trustworthy platform for high-net-worth individuals and institutional partners. With no existing visual system in place, the task was to craft a cohesive and scalable identity from scratch — one that would ensure consistency across digital touchpoints while inspiring confidence among users and investors alike." }
    ],
    strategy: [
      { text: "Nextron is a next-generation fintech brand built to simplify how people and businesses move, manage, and grow money. We combine cutting-edge technology with smart financial solutions to create fast, secure, and seamless digital experiences." },
      { text: "At Nextron, we believe finance should be intuitive, accessible, and built for the future. From payments to financial tools, our platform is designed to empower users with control, confidence, and clarity in every transaction. Driven by innovation and trust, Nextron is redefining modern finance—helping individuals and businesses stay ahead in a rapidly evolving digital economy." }
    ],
    logoBreakdown: [
      { heading: "ELEMENTS OF THE LOGO" },
      {
        inlineHeading: "1. Lightning Mark (Core Symbol)",
        text: "The primary element of the logo is a stylized lightning inspired mark. It represents speed, power, and financial momentum reflecting Nextron's ability to enable fast, seamless digital transactions. The sharp yet smooth edges communicate precision powered by technology"
      },
      {
        inlineHeading: "2. Secure Structure",
        text: "The continuous, enclosed shape of the symbol conveys protection and stability. This subtly reinforces Nextron's commitment to secure transactions, safe data systems, and trustworthy financial infrastructure.."
      },
      {
        inlineHeading: "3. Digital Flow & Connection",
        text: "The intersecting lines within the symbol represent networks and digital pathwayshighlighting how Nextron connects users, businesses, and financial systems effortlessly. It reflects innovation, integration, and smart financial ecosystems."
      }
    ],
    logoGridImage: nextronBreakdown,
    identityImages: [nextron1, nextron2, nextron3],
    applicationsImages: [nextron4, nextron5, nextron6],
    colorPalette: [
      { name: "Dark Indigo Blue", hex: "#021D56" },
      { name: "Bright Mint Green", hex: "#61E786" },
      { name: "Amber Orange", hex: "#FAAA40" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Black", hex: "#000000" },
    ],
    typographyPrimary: "Aktiv Grotesk Deva",
    typographySecondary: "Montserrat",
    results: [
      { label: "Brand Consistency", value: "100%" },
      { label: "Investor Confidence Lift", value: "+40%" },
      { label: "Digital Touchpoints Unified", value: "12+" },
      { label: "Time to Market", value: "8 Weeks" },
    ],
  },
  {
    slug: "davora",
    title: "Davora",
    category: "Brand Identity • Packaging Design • Luxury",
    industry: "Luxury Skincare",
    client: "Davora",
    services: ["Brand Identity", "Packaging Design", "Print Design", "Material Strategy"],
    timeline: "10 Weeks",
    description:
      "Premium packaging system for a luxury skincare brand, featuring foil-stamped boxes, custom typography, and sustainable material choices.",
    image: davora,
    hero: davora,
    summary: [
      { text: "Luxe Botanica required a premium packaging system that communicated natural luxury. We designed a cohesive identity spanning custom boxes, labels, and collateral — all rooted in a strategy of 'botanical elegance.'" }
    ],
    challenge: [
      { text: "The luxury skincare market demands visual perfection. Luxe Botanica's previous packaging felt generic and failed to justify its premium price point. The brand needed a complete visual overhaul to compete with established luxury houses while maintaining its natural, botanical roots." }
    ],
    strategy: [
      { text: "We positioned the brand around 'Nature, Refined.' The visual direction combines organic textures with architectural precision — hand-drawn botanical illustrations paired with rigorous grid systems and luxurious material finishes." }
    ],
    logoBreakdown: [
      { text: "The wordmark uses a custom-modified serif with delicate botanical flourishes integrated into key letterforms. The 'L' and 'B' monogram serves as a secondary mark for packaging stamps and embossing." }
    ],
    logoGridImage: nextronBreakdown,
    identityImages: [caseNexovaIdentity],
    applicationsImages: [caseNexovaApplications],
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
    slug: "purestart",
    title: "PureStart",
    category: "Packaging Design",
    industry: "Food & Beverage",
    client: "PureStart",
    services: ["Brand Strategy", "Logo Design", "Packaging Design", "Brand Guidelines"],
    timeline: "12 Weeks",
    description:
      "Full brand identity and packaging design for an artisanal food brand — from farm-to-table positioning to shelf-ready packaging.",
    image: purestart,
    hero: purestart,
    summary: [
      { text: "Grain & Gather needed a brand that told their farm-to-table story with authenticity and warmth while standing out on crowded supermarket shelves." }
    ],
    challenge: [
      { text: "The artisanal food market is flooded with brands using rustic clichés. Grain & Gather needed to feel authentic without falling into the 'kraft paper and burlap' trap. They required a modern interpretation of artisanal values that resonated with health-conscious millennials." }
    ],
    strategy: [
      { text: "We built the brand around 'Modern Craft' — combining clean, contemporary typography with hand-drawn illustrative elements. The visual system bridges artisanal warmth and modern sophistication." }
    ],
    logoBreakdown: [
      { text: "The wordmark pairs a bold geometric sans-serif with a hand-lettered ampersand that symbolizes the connection between farm and table. The wheat motif in the icon is abstracted into a minimal geometric form." }
    ],
    logoGridImage: nextronBreakdown,
    identityImages: [caseNexovaIdentity],
    applicationsImages: [caseNexovaApplications],
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
    slug: "pixelore",
    title: "Pixelore",
    category: "Brand Identity • Startup",
    industry: "3d video artistry",
    client: "Pixelore",
    services: ["Brand Strategy", "Logo design", "Corporate Identity"],
    timeline: "6 Weeks",
    description:
      "Strategic design for a 3D video artistry startup, building a bold, future-ready brand identity from the ground up for a new era of growth.",
    image: pixelore,
    hero: pixelore,
    summary: [
      {
        text: "Pixelore Studio is your exclusive portal to unparalleled 3D video artistry. As trailblazers in the realm of high-end 3D video creation, we are devoted to redefining the art of visual storytelling. Our masterful blend of animation, cinematic brilliance, and state-of-the-art technology crafts enchanting worlds that mesmerize and elevate. Every frame weaves a narrative, and every moment is a masterpiece of 3D opulence."
      }
    ],
    challenge: [
      {
        text: "In a creative industry saturated with generic visuals and predictable tech aesthetics, Pixelore needed a distinctive brand identity that reflected the depth, sophistication, and cinematic quality of its 3D artistry. The challenge was to build a premium visual system from the ground up — one that would capture its innovative spirit, communicate luxury-level craftsmanship, and position the studio as a leader in high-end visual storytelling industry."
      }
    ],
    strategy: [
      {
        text: "We crafted a bold and immersive brand identity rooted in cinematic expression and digital precision. The logo and visual system were designed to embody motion, dimension, and creative mastery — balancing artistic elegance with technological innovation. Through refined typography, a striking visual language, and a cohesive brand system, Pixelore was positioned as a premium 3D studio built to captivate audiences and elevate visual experiences."
      }
    ],
    logoBreakdown: [
      { heading: "ELEMENTS OF THE LOGO" },
      {
        inlineHeading: "1. Concept Foundation",
        text: "The Pixelore logo is built around the fusion of “Pixel” (technology, precision, digital craft) and “Lore” (storytelling, narrative depth). The identity visually expresses the studio's core philosophy: blending advanced 3D technology with cinematic storytelling to create immersive visual experiences."
      },
      {
        inlineHeading: "2. Custom Wordmark Construction",
        text: "The logo is a fully customized wordmark, designed to feel:",
        bullets: [
          "Modern and futuristic — reflecting cutting-edge 3D technology",
          "Fluid and cinematic — mirroring motion and animation",
          "Premium and minimal — aligning with high-end visual artistry",
        ],
        closing: "The rounded, monoline letterforms create a sense of softness and flow, avoiding rigid tech clichés while maintaining digital precision."
      },

    ],
    logoGridImage: nextronBreakdown,
    identityImages: [caseNexovaIdentity],
    applicationsImages: [caseNexovaApplications],
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
