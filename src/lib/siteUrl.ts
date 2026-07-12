const DEFAULT_SITE_URL = 'https://bold-brand-studio.vercel.app';

/** Canonical site origin without trailing slash. */
export function resolveSiteOrigin(): string {
  const raw = import.meta.env.VITE_SITE_URL?.trim() || DEFAULT_SITE_URL;
  return raw.replace(/\/$/, '');
}

export function resolveCanonicalUrl(pathname = '/'): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${resolveSiteOrigin()}${path === '/' ? '' : path}` || resolveSiteOrigin();
}

/** Resolve OG/social image URLs to absolute HTTPS URLs for crawlers. */
export function resolveOgImageUrl(image?: string): string {
  const origin = resolveSiteOrigin();
  const fallback = `${origin}/og-default.jpg`;

  if (!image?.trim()) {
    return fallback;
  }

  const value = image.trim();

  if (/^[a-zA-Z]:[\\/]/.test(value) || value.includes('\\')) {
    return fallback;
  }

  if (value.startsWith('http://') || value.startsWith('https://') || value.startsWith('data:')) {
    return value;
  }

  if (value.startsWith('/')) {
    return `${origin}${value}`;
  }

  return `${origin}/${value.replace(/^\.?\//, '')}`;
}

export const PRERENDER_STATIC_ROUTES = ['/', '/projects'] as const;

export function buildPrerenderRoutes(projectSlugs: string[]): string[] {
  return [
    ...PRERENDER_STATIC_ROUTES,
    ...projectSlugs.map(slug => `/project/${slug}`),
  ];
}
