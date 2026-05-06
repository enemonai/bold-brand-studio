import nextronCard from "@/assets/Nextron-card.png";
import nextronBreakdown from "@/assets/Nextron-breakdown.png";
import nextron1 from "@/assets/project/nextron/Nextron1.png";
import nextron2 from "@/assets/project/nextron/Nextron2.png";
import nextron3 from "@/assets/project/nextron/Nextron3.png";
import nextron4 from "@/assets/project/nextron/Nextron4.png";
import nextron5 from "@/assets/project/nextron/Nextron5.png";
import nextron6 from "@/assets/project/nextron/Nextron6.png";

import techxforgeCard from "@/assets/techxforge.png";
import techxforge1 from "@/assets/project/techxforge/techxforge1.png";
import techxforge2 from "@/assets/project/techxforge/techxforge2.png";
import techxforge3 from "@/assets/project/techxforge/techxforge3.png";
import techxforge4 from "@/assets/project/techxforge/techxforge4.png";
import techxforge5 from "@/assets/project/techxforge/techxforge5.png";
import techxforge6 from "@/assets/project/techxforge/techxforge6.png";
import techxforge7 from "@/assets/project/techxforge/techxforge7.png";
import techxforge8 from "@/assets/project/techxforge/techxforge8.png";
import techlogo from "@/assets/project/techxforge/techlogo.png";

import pixelore1 from "@/assets/project/pixelore/pixelore1.png";
import pixelore2 from "@/assets/project/pixelore/pixelore2.png";
import pixelore3 from "@/assets/project/pixelore/pixelore3.png";
import pixelore4 from "@/assets/project/pixelore/pixelore4.png";
import pixelore5 from "@/assets/project/pixelore/pixelore5.png";

import abby1 from "@/assets/project/abbys/abbys1.png";
import abby2 from "@/assets/project/abbys/abbys2.png";
import abby3 from "@/assets/project/abbys/abbys3.png";
import abby4 from "@/assets/project/abbys/abbys4.png";
import abby5 from "@/assets/project/abbys/abbys5.png";
import abbycard from "@/assets/abbys.png";


import davora1 from "@/assets/project/davora/Davora1.png";
import davora2 from "@/assets/project/davora/Davora2.png";
import davora3 from "@/assets/project/davora/Davora3.png";
import davora4 from "@/assets/project/davora/Davora4.png";
import davora5 from "@/assets/project/davora/Davora5.png";
import davora6 from "@/assets/project/davora/Davora6.png";
import davora7 from "@/assets/project/davora/Davora7.png";
import davora8 from "@/assets/project/davora/Davora8.png";
import davora9 from "@/assets/project/davora/Davora9.png";

import purestart1 from "@/assets/project/purestart/BABY1.png";
import purestart2 from "@/assets/project/purestart/BABY2.png";
import purestart3 from "@/assets/project/purestart/BABY3.png";

import nextron from "@/assets/Nextron.png";
import purestart from "@/assets/BABY.png";
import davora from "@/assets/Davora.png";
import pixelore from "@/assets/PIXELORE.png";

export interface SectionHeading {
  headingTextStart?: string;
  headingTextSpecial?: string;
  headingTextEnd?: string;
}

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
  aboutClientHeading?: SectionHeading;
  aboutClient?: Paragraph[];
  services: string[];
  timeline: string;
  summary: Paragraph[];
  challengeHeading?: SectionHeading;
  challenge: Paragraph[];
  strategyHeading?: SectionHeading;
  strategy: Paragraph[];
  logoDesignHeading?: SectionHeading;
  logoDesign?: {
    breakdown: Paragraph[];
    gridImage: string;

  };
  visualIdentityHeading?: SectionHeading;
  identityImages: string[];
  applicationsHeading?: SectionHeading;
  applicationsImages?: string[];
  colorPalette: { name: string; hex: string }[];
  typographyPrimary: string;
  typographySecondary: string;
  resultsHeading?: SectionHeading;
  results: { label: string; value: string }[];
  keywords: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    featured: true,
    slug: "techxforge-global",
    title: "TechXForge Global",
    category: "Brand Identity",
    industry: "Tech Community",
    client: "TechXForge Global",

    aboutClientHeading: {
      headingTextStart: "About ",
      headingTextSpecial: "TechXForge Global"
    },

    aboutClient: [
      {
        text: "TechXForge Global is a mentorship-driven technology community dedicated to transforming beginners into highly skilled, job-ready professionals. Positioned at the intersection of education, discipline, and real-world application, the brand bridges the gap between learning and mastery, serving as a forging ground where raw potential evolves into technical excellence."
      }
    ],

    services: ["Brand Identity Design", "Strategy"],

    timeline: "2 Weeks",

    description:
      "Brand identity design for a mentorship-driven tech community, focused on transformation, precision, and structured growth. The visual system reflects discipline, evolution, and collaboration while positioning the brand as a global hub for developing world-class tech professionals.",

    image: techxforgeCard,
    hero: techxforgeCard,

    summary: [
      {
        text: "The TechXForge Global brand identity was designed to visually communicate transformation, discipline, and excellence. The goal was to create a bold and modern identity that represents growth through structured learning, mentorship, and real-world application, while appealing to ambitious individuals entering the tech industry."
      }
    ],

    challengeHeading: {
      headingTextStart: "Building a ",
      headingTextSpecial: "Transformation-Driven Identity"
    },

    challenge: [
      {
        text: "The challenge was to create a brand identity that clearly communicates growth, discipline, and technical excellence while differentiating TechXForge from generic learning platforms. The identity needed to feel aspirational, structured, and community-driven, appealing to beginners while maintaining credibility within the global tech space."
      }
    ],

    strategy: [
      {
        text: "The strategy focused on positioning TechXForge as a forging ground for talent rather than just a learning platform. The visual and brand system was built around transformation, precision, and continuous evolution—using bold design elements, structured compositions, and symbolic representation of growth, mastery, and collaboration."
      }
    ],

    logoDesign: {
      breakdown: [
        { text: "A forged “X” symbol that represents the transformation of individuals into world-class tech professionals through structured growth, precision training, and a strong collaborative community." }
      ],
      gridImage: techlogo,
    },

    identityImages: [techxforge1, techxforge2, techxforge3, techxforge4],
    applicationsImages: [techxforge5, techxforge6, techxforge7, techxforge8],

    colorPalette: [
      { name: "Electric Lime Green", hex: "#87E22D" },
      { name: "Deep Forest Green", hex: "#0D2702" },
      { name: "Pure Black", hex: "#000000" },
      { name: "Clean White", hex: "#FEFEFE" }
    ],

    typographyPrimary: "Aktiv Grotesk Geor",
    typographySecondary: "",

    results: [
      { label: "Brand Clarity", value: "Strong Positioning" },
      { label: "Audience Alignment", value: "High Engagement" },
      { label: "Visual Consistency", value: "Scalable System" },
      { label: "Perceived Value", value: "+80%" }
    ],

    keywords: [
      "TechXForge Global",
      "Brand Identity",
      "Tech Community",
      "Mentorship Platform",
      "Technology Education",
      "Talent Development",
      "Visual Identity",
      "Startup Branding"
    ]
  },
  {
    featured: true,
    slug: "abbys-fragrance",
    title: "Abby’s Fragrance",
    category: "Brand Identity",
    industry: "Beauty & Personal Care",
    client: "Abby’s Fragrance",

    aboutClientHeading: {
      headingTextStart: "About ",
      headingTextSpecial: "Abby’s Fragrance"
    },

    aboutClient: [
      {
        text: "Abby’s Fragrance is a premium scent brand dedicated to crafting enchanting fragrances that celebrate individuality, confidence, and elegance. With a diverse range of perfumes, body sprays, mists, deodorants, and oils, the brand focuses on delivering long-lasting scents that elevate everyday experiences and leave a memorable impression."
      }
    ],

    services: ["Brand Identity Design", "Strategy"],

    timeline: "4 Weeks",

    description:
      "Brand identity design for a fragrance brand focused on elegance, individuality, and sensory experience. The visual system reflects sophistication, luxury, and emotional connection, positioning the brand as a symbol of confidence and self-expression.",

    image: abbycard,
    hero: abbycard,

    summary: [
      {
        text: "The Abby’s Fragrance brand identity was designed to embody luxury, elegance, and individuality. The goal was to create a refined and memorable visual system that reflects the emotional power of scent while appealing to a modern, style-conscious audience seeking confidence and self-expression through fragrance."
      }
    ],

    challengeHeading: {
      headingTextStart: "Crafting a ",
      headingTextSpecial: "Luxurious Brand Identity"
    },

    challenge: [
      {
        text: "The challenge was to develop a brand identity that communicates sophistication, quality, and emotional appeal in a highly competitive fragrance market. The identity needed to feel premium and timeless while still being versatile across multiple product lines and packaging formats."
      }
    ],

    strategy: [
      {
        text: "The strategy focused on building a visually elegant and cohesive brand system that highlights luxury and individuality. Through minimal yet distinctive design elements, refined typography, and a bold yet graceful logo mark, the identity reinforces the brand’s promise of quality, authenticity, and lasting impressions."
      }
    ],

    identityImages: [abby1, abby2, abby3, abby4],
    applicationsImages: [abby5],

    colorPalette: [
      { name: "Signature Orange", hex: "#F27A0A" },
      { name: "Deep Black", hex: "#000000" },
      { name: "Soft Grey", hex: "#EDEDED" },
      { name: "Pure White", hex: "#FFFFFF" }
    ],

    typographyPrimary: "Publica Play",
    typographySecondary: "Nunito",

    results: [
      { label: "Brand Perception", value: "Premium Positioning" },
      { label: "Visual Consistency", value: "Cohesive Identity" },
      { label: "Product Appeal", value: "+65%" },
      { label: "Customer Recall", value: "High Recognition" }
    ],

    keywords: [
      "Abby’s Fragrance",
      "Brand Identity",
      "Perfume Brand",
      "Luxury Branding",
      "Beauty Brand",
      "Fragrance Design",
      "Packaging Identity",
      "Personal Care Branding"
    ]
  },
  {
    featured: true,
    slug: "purestart",
    title: "PureStart",
    category: "Packaging Design",
    industry: "Food & Beverage",
    client: "PureStart",
    aboutClientHeading: { headingTextStart: "About ", headingTextSpecial: "PureStart" },
    aboutClient: [
      { text: "PureStart is a family-first food brand committed to providing wholesome, safe, and nutritious meals for infants and toddlers. Their mission is to support early developmental stages with high-quality, transparently sourced ingredients that parents can trust." }
    ],
    services: ["Packaging Design"],
    timeline: "2 WeekS",
    description:
      "Packaging design for a healthy baby food product, featuring playful visuals, soft colors, and clear nutritional information to communicate natural ingredients and safe nutrition for babies 6+ months",
    image: purestart,
    hero: purestart,
    summary: [
      { text: "The PureStart Baby Food Packaging was designed to communicate freshness, safety, and natural nutrition for infants starting their food journey. The goal of the packaging was to create a warm, friendly, and trustworthy visual experience that appeals to parents while remaining playful and inviting for baby related products." }
    ],
    challengeHeading: {
      headingTextStart: "Attractive ",
      headingTextSpecial: "Product Packaging",
    },
    challenge: [
      { text: "Designing the packaging for PureStart Baby Food required creating a visual system that would immediately communicate trust, safety, and nutritional value to parents while remaining warm and approachable for a baby-focused product" }
    ],
    strategy: [
      { text: "The packaging strategy focused on creating a design that communicates health, trust, and simplicity—three key factors parents look for when choosing baby food products. The goal was to ensure the packaging feels both nurturing and informative, while still standing out on the shelf." }
    ],
    // logoDesign: {
    //   breakdown: [
    //     { text: "The wordmark pairs a bold geometric sans-serif with a hand-lettered ampersand that symbolizes the connection between farm and table. The wheat motif in the icon is abstracted into a minimal geometric form." }
    //   ],
    //   gridImage: nextronBreakdown,
    // },
    identityImages: [purestart1, purestart2, purestart3],
    // applicationsImages: [caseNexovaApplications],
    colorPalette: [
      { name: "Fresh Green", hex: "#9AC04D" },
      { name: "Bright Yellow", hex: "#FFF000" },
      { name: "Tomato Red", hex: "#E93D13" },
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Olive Dark Green", hex: "#414D35" },
    ],
    typographyPrimary: "Montserrat",
    typographySecondary: "Asdonuts",
    results: [
      { label: "Retail Placement", value: "120+ Stores" },
      { label: "Brand Recognition", value: "+70%" },
      { label: "Product Lines Designed", value: "8" },
      { label: "Social Engagement", value: "+55%" },
    ],
    keywords: ["PureStart", "Baby Food",
      "Packaging Design",
      "Product Packaging",
      "Food Packaging",
      "Infant Nutrition",
      "Healthy Baby Food"],
  },
  {
    featured: true,
    slug: "nextron",
    title: "Nextron",
    category: "Brand Identity • Fintech",
    industry: "Fintech",
    client: "Nextron",
    aboutClientHeading: { headingTextStart: "About ", headingTextSpecial: "Nextron" },
    aboutClient: [
      { text: "Nextron is a modern fintech organization striving to change how individuals and businesses interact with their finances. They partner with diverse teams to build secure financial systems." }
    ],
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
    logoDesign: {
      breakdown: [
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
      gridImage: nextronBreakdown,
    },
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
    keywords: ["Nextron", "Fintech", "Brand Identity", "Financial Startup", "Next-gen Fintech"],
  },
  {
    slug: "davora",
    title: "Davora",
    category: "Brand Identity • Packaging Design • Luxury",
    industry: "Luxury Skincare",
    client: "Davora",
    aboutClientHeading: { headingTextStart: "About ", headingTextSpecial: "Davora" },
    aboutClient: [
      { text: " DÁVORA Luxury is a refined blend of art, science, and self-expression  a brand born from the desire to elevate everyday rituals into moments of pure indulgence. Rooted in sophistication and crafted with intention, DÁVORA combines the allure of timeless fragrances with the nourishment of luxurious skincare." }
    ],
    services: ["Brand Identity", "Packaging Design"],
    timeline: "3 Weeks",
    description:
      " DÁVORA Luxury is a refined blend of art, science, and self-expression  a brand born from the desire to elevate everyday rituals into moments of pure indulgence. Rooted in sophistication and crafted with intention, DÁVORA combines the allure of timeless fragrances with the nourishment of luxurious skincare.",
    image: davora,
    hero: davora8,
    summary: [
      { text: "DÁVORA Luxury required a refined brand identity and packaging system that could express sophistication, sensuality, and modern luxury. We designed a cohesive visual language spanning the logo, packaging, labels, and brand assets — all rooted in a strategy of timeless elegance and sensory luxury." }
    ],
    challenge: [
      { text: "DÁVORA Luxury needed a brand identity that could capture the essence of sophistication, sensuality, and modern luxury while standing out in a highly competitive beauty and fragrance market. The challenge was to create a visual system that felt premium and timeless, while still reflecting the brand's focus on self-care, fragrance, and skincare. Beyond aesthetics, the identity had to communicate elegance and indulgence across multiple touchpoints — from the logo to the packaging and labels. The goal was to craft a design language that felt distinctive, memorable, and cohesive, transforming DÁVORA into a brand that visually expresses luxury, confidence, and refined beauty" }
    ],
    strategy: [
      { text: "To position DÁVORA Luxury as a refined and memorable beauty brand, we focused on building a visual identity rooted in elegance, symbolism, and sensory experience. The strategy was to create a brand system that communicates luxury while subtly reflecting the brand's focus on fragrance and skincare." },
      { text: "The visual language was then extended into the packaging and brand assets, using a minimal yet luxurious design approach. Rich colors, refined typography, and clean layouts were chosen to evoke sophistication, warmth, and timeless appeal, ensuring the brand feels premium across every touchpoint." }
    ],
    logoDesign: {
      breakdown: [
        { text: "We developed a distinctive logo mark inspired by an abstract “D”, combining a flowing outer swirl with a central circle to symbolize essence, balance, and the core of beauty. This approach allowed the logo to feel both artistic and meaningful, reinforcing the brand's narrative of self-care and indulgence." }
      ],
      gridImage: davora9,
    },
    identityImages: [davora1, davora2, davora3],
    applicationsImages: [davora4, davora5, davora6, davora7],
    colorPalette: [
      { name: "Ivory", hex: "#F5E4C3" },
      { name: "Forest Green", hex: "#1E4447" },
      { name: "Gold Foil", hex: "#972336" },
      // { name: "Blush", hex: "#E8D5C8" },
      // { name: "Deep Brown", hex: "#3A2A1A" },
    ],
    typographyPrimary: "KUGILE",
    typographySecondary: "POPPINS",
    results: [
      { label: "Shelf Appeal Score", value: "+65%" },
      { label: "Brand Perception Lift", value: "+50%" },
      { label: "Packaging SKUs Designed", value: "24" },
      { label: "Sustainable Materials", value: "100%" },
    ],
    keywords: ["Davora", "Luxury Skincare", "Premium Packaging", "Botanical Beauty", "Skincare Branding"],
  },
  {
    slug: "pixelore",
    title: "Pixelore",
    category: "Brand Identity • Startup",
    industry: "3d video artistry",
    client: "Pixelore",
    aboutClientHeading: { headingTextStart: "About ", headingTextSpecial: "Pixelore" },
    aboutClient: [
      { text: "Pixelore is a boundary-pushing 3D artistry and animation studio specializing in immersive visual storytelling. They collaborate with brands to craft breathtaking cinematic experiences, leveraging state-of-the-art technology to bring complex imaginative worlds to life." }
    ],
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
    // logoDesign: {
    //   breakdown: [
    //     { heading: "ELEMENTS OF THE LOGO" },
    //     {
    //       inlineHeading: "1. Concept Foundation",
    //       text: "The Pixelore logo is built around the fusion of “Pixel” (technology, precision, digital craft) and “Lore” (storytelling, narrative depth). The identity visually expresses the studio's core philosophy: blending advanced 3D technology with cinematic storytelling to create immersive visual experiences."
    //     },
    //     {
    //       inlineHeading: "2. Custom Wordmark Construction",
    //       text: "The logo is a fully customized wordmark, designed to feel:",
    //       bullets: [
    //         "Modern and futuristic — reflecting cutting-edge 3D technology",
    //         "Fluid and cinematic — mirroring motion and animation",
    //         "Premium and minimal — aligning with high-end visual artistry",
    //       ],
    //       closing: "The rounded, monoline letterforms create a sense of softness and flow, avoiding rigid tech clichés while maintaining digital precision."
    //     },

    //   ],
    //   gridImage: nextronBreakdown,
    // },
    identityImages: [pixelore1, pixelore2],
    applicationsImages: [pixelore3, pixelore4, pixelore5],
    colorPalette: [
      { name: "Flame Orange", hex: "#E53C11" },
      { name: "Lemon Yellow", hex: "#FFF212" },
      { name: "Jet Black", hex: "#000000" },
      { name: "Pure White", hex: "#FEFEFE" },

    ],
    typographyPrimary: "Ogotu-thin",
    typographySecondary: "Montserrat",
    results: [
      { label: "Talent Acquisition", value: "+35%" },
      { label: "Contract Win Rate", value: "+25%" },
      { label: "Brand Modernization", value: "Complete" },
      { label: "Stakeholder Approval", value: "100%" },
    ],
    keywords: ["Pixelore", "3D Video Artistry", "Visual Storytelling", "Cinematic Studio", "Animation Branding"],
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
