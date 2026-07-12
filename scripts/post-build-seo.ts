/**
 * Post-build SEO artifacts: sitemap.xml, robots.txt, and prerender route verification.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'fs';
import { dirname, join, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const DIST_DIR = resolve(ROOT, 'dist');
const PUBLIC_DIR = resolve(ROOT, 'public');
const PROJECTS_FILE = resolve(ROOT, 'src/data/projects.generated.ts');

const SITE_URL = (process.env.VITE_SITE_URL || 'https://bold-brand-studio.vercel.app').replace(
  /\/$/,
  ''
);

function readProjectSlugs(): string[] {
  const source = readFileSync(PROJECTS_FILE, 'utf8');
  const matches = [...source.matchAll(/"slug":\s*"([^"]+)"/g)];
  return matches.map(match => match[1]);
}

function buildExpectedRoutes(slugs: string[]): string[] {
  return ['/', '/projects', ...slugs.map(slug => `/project/${slug}`)];
}

function collectHtmlFiles(dir: string, base = dir): string[] {
  if (!existsSync(dir)) {
    return [];
  }

  const entries = readdirSync(dir);

  return entries.flatMap(entry => {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory()) {
      return collectHtmlFiles(fullPath, base);
    }

    if (!entry.endsWith('.html')) {
      return [];
    }

    const relative = fullPath.slice(base.length).replace(/\\/g, '/');
    const routePath =
      relative === '/index.html' || relative === 'index.html'
        ? '/'
        : relative.replace(/\/index\.html$/, '').replace(/\.html$/, '');

    return [routePath.startsWith('/') ? routePath : `/${routePath}`];
  });
}

function buildSitemapXml(routes: string[]): string {
  const urls = routes
    .map(route => {
      const loc = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
      return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${route === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function buildRobotsTxt(): string {
  return `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
}

function main(): void {
  if (!existsSync(DIST_DIR)) {
    throw new Error('[post-build-seo] dist/ not found — run vite-react-ssg build first.');
  }

  const slugs = readProjectSlugs();
  const expectedRoutes = buildExpectedRoutes(slugs);
  const renderedRoutes = new Set(collectHtmlFiles(DIST_DIR));
  const missing = expectedRoutes.filter(route => !renderedRoutes.has(route));

  if (missing.length > 0) {
    throw new Error(
      `[post-build-seo] prerender route mismatch. Missing HTML for: ${missing.join(', ')}. Found: ${[...renderedRoutes].join(', ')}`
    );
  }

  const sitemap = buildSitemapXml(expectedRoutes);
  const robots = buildRobotsTxt();

  writeFileSync(join(DIST_DIR, 'sitemap.xml'), sitemap, 'utf8');
  writeFileSync(join(DIST_DIR, 'robots.txt'), robots, 'utf8');
  mkdirSync(PUBLIC_DIR, { recursive: true });
  writeFileSync(join(PUBLIC_DIR, 'sitemap.xml'), sitemap, 'utf8');
  writeFileSync(join(PUBLIC_DIR, 'robots.txt'), robots, 'utf8');

  console.log(
    `[post-build-seo] verified ${expectedRoutes.length} prerendered routes and wrote sitemap.xml + robots.txt`
  );
}

main();
