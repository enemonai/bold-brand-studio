import { describe, expect, it } from 'vitest';
import { buildPrerenderRoutes, resolveCanonicalUrl, resolveOgImageUrl } from './siteUrl';

describe('siteUrl', () => {
  it('builds canonical URLs without duplicate slashes', () => {
    expect(resolveCanonicalUrl('/projects')).toMatch(/\/projects$/);
    expect(resolveCanonicalUrl('/')).not.toMatch(/\/$/);
  });

  it('resolves relative OG images to absolute URLs', () => {
    expect(resolveOgImageUrl('/og-default.jpg')).toMatch(/^https:\/\/.+\/og-default\.jpg$/);
  });

  it('lists home, projects index, and every project slug for prerender', () => {
    expect(buildPrerenderRoutes(['alpha', 'beta'])).toEqual([
      '/',
      '/projects',
      '/project/alpha',
      '/project/beta',
    ]);
  });
});
