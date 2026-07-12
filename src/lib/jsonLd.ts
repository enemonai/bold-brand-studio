import { resolveCanonicalUrl, resolveOgImageUrl, resolveSiteOrigin } from '@/lib/siteUrl';

type JsonLd = Record<string, unknown>;

function compact<T extends Record<string, unknown>>(value: T): T {
  return Object.fromEntries(
    Object.entries(value).filter(([, entry]) => entry !== undefined && entry !== null && entry !== '')
  ) as T;
}

export function buildPersonJsonLd(input?: {
  name?: string;
  description?: string;
  image?: string;
  origin?: string;
}): JsonLd {
  const origin = input?.origin ?? resolveSiteOrigin();

  return compact({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input?.name ?? 'Enemona Isaac',
    description:
      input?.description ??
      'Strategic brand designer specializing in logo, brand identity, and premium packaging.',
    image: input?.image ? resolveOgImageUrl(input.image) : `${origin}/og-default.jpg`,
    url: origin,
    jobTitle: 'Strategic Brand Designer',
  });
}

export function buildCreativeWorkJsonLd(input: {
  title: string;
  description?: string;
  image?: string;
  slug: string;
  creatorName?: string;
  origin?: string;
}): JsonLd {
  const origin = input.origin ?? resolveSiteOrigin();
  const url = `${origin}/project/${input.slug}`;

  return compact({
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: input.title,
    description: input.description,
    image: input.image ? resolveOgImageUrl(input.image) : undefined,
    url,
    creator: {
      '@type': 'Person',
      name: input.creatorName ?? 'Enemona Isaac',
    },
    about: input.title,
  });
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
  origin?: string
): JsonLd {
  const base = origin ?? resolveSiteOrigin();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: resolveCanonicalUrl(item.path),
    })),
  };
}
