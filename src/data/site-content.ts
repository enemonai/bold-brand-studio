export type BbsSocialPlatform =
  | 'instagram'
  | 'twitter'
  | 'x'
  | 'whatsapp'
  | 'linkedin'
  | 'facebook'
  | 'tiktok'
  | 'youtube';

export type BbsAboutStat = {
  value: string;
  label: string;
};

export type BbsAboutContent = {
  eyebrow: string;
  headingLine1: string;
  headingHighlight: string;
  paragraphs: string[];
  imageUrl: string;
  imageAlt: string;
  stats: BbsAboutStat[];
};

export type BbsSocialLink = {
  platform: BbsSocialPlatform;
  href: string;
};

export type BbsContactContent = {
  eyebrow: string;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  email: string;
  socials: BbsSocialLink[];
};

export type BbsSeoContent = {
  metaTitle: string;
  metaDescription: string;
  siteName: string;
  ogImageUrl: string;
  faviconUrl: string;
};

export type BbsProjectsListingSeoContent = {
  metaTitle: string;
  metaDescription: string;
  ogImageUrl: string;
  keywords: string[];
};

export type BbsSiteContent = {
  about: BbsAboutContent;
  contact: BbsContactContent;
  seo: BbsSeoContent;
  projectsListingSeo: BbsProjectsListingSeoContent;
};

/** Cutover defaults matching the previous hardcoded About/Contact/SEO sections. */
export const DEFAULT_SITE_CONTENT: BbsSiteContent = {
  about: {
    eyebrow: 'About',
    headingLine1: 'Strategy First.',
    headingHighlight: 'Design Second.',
    paragraphs: [
      "I'm Onoja Enemona Isaac — a strategic brand designer who builds identities that don't just look good, but work. Every logo, every packaging system, every brand touchpoint is engineered to create market leadership.",
      'I believe great design starts with deep strategy. Before a single pixel is placed, I dive into your market, your audience, and your competitive landscape to craft brands that command attention and build trust.',
    ],
    imageUrl: '',
    imageAlt: 'Onoja Enemona Isaac — Brand Designer',
    stats: [
      { value: '50+', label: 'Brands Built' },
      { value: '5+', label: 'Years Experience' },
      { value: '100%', label: 'Client Satisfaction' },
      { value: '4', label: 'Industries Served' },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    headingPrefix: "Let's Build Something",
    headingHighlight: 'Bold.',
    description:
      "Have a project in mind? I'd love to hear about it. Let's create a brand that leads your industry.",
    email: 'enemonaisaaconoja@gmail.com',
    socials: [
      { platform: 'instagram', href: 'https://www.instagram.com/enemona.isaac' },
      { platform: 'x', href: 'https://x.com/enemonaisaaz' },
      { platform: 'whatsapp', href: 'https://wa.me/2349162045977' },
    ],
  },
  seo: {
    metaTitle: "Enemona Isaac's Design Portfolio",
    metaDescription:
      'Discover the design portfolio of Enemona Isaac, a product designer and digital experience creator.',
    siteName: 'Enemona Isaac',
    ogImageUrl: '',
    faviconUrl: '',
  },
  projectsListingSeo: {
    metaTitle: "Projects | Enemona Isaac's Design Portfolio",
    metaDescription: '',
    ogImageUrl: '',
    keywords: [],
  },
};
