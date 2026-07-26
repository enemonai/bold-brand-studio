import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { siteContent } from '@/data/site-content.generated';
import { DEFAULT_SITE_CONTENT } from '@/data/site-content';

const SYNC_SCRIPT = resolve(process.cwd(), 'scripts/sync-content.ts');

describe('sync-content script', () => {
  it('fails loudly on fetch errors (no silent fallback)', () => {
    const source = readFileSync(SYNC_SCRIPT, 'utf8');
    expect(source).toContain('process.exit(1)');
    expect(source).toContain('FATAL');
    expect(source).toContain('bbs-site-content');
    expect(source).not.toMatch(/catch[\s\S]*writeFileSync[\s\S]*\[\]/);
  });
});

describe('site-content generated module', () => {
  it('exposes about and contact slices for About/Contact sections', () => {
    expect(siteContent.about.headingLine1).toBeTruthy();
    expect(siteContent.contact.email).toContain('@');
    expect(siteContent.contact.socials.length).toBeGreaterThan(0);
  });

  it('matches cutover defaults when using the local seed', () => {
    expect(siteContent.contact.email).toBe(DEFAULT_SITE_CONTENT.contact.email);
  });
});
