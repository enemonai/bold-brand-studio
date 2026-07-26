/**
 * Dev helper: write projects.generated.ts + site-content.generated.ts from local
 * static sources when Crelyst API is unavailable.
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { loadBoldBrandProjects } from '../../crelyst/scripts/lib/loadBoldBrandProjects.ts';
import { DEFAULT_SITE_CONTENT } from '../src/data/site-content.ts';

const projectsOut = resolve(process.cwd(), 'src/data/projects.generated.ts');
const siteOut = resolve(process.cwd(), 'src/data/site-content.generated.ts');

const projects = await loadBoldBrandProjects();
const projectsJson = JSON.stringify(projects, null, 2);
const siteJson = JSON.stringify(DEFAULT_SITE_CONTENT, null, 2);

writeFileSync(
  projectsOut,
  `/**
 * AUTO-GENERATED — local static seed for dev/tsc when Crelyst API is unavailable.
 * Production builds use scripts/sync-content.ts against the public API.
 */
import type { Project, Paragraph, SectionHeading } from './projects';

export type { Project, Paragraph, SectionHeading };

export const projects: Project[] = ${projectsJson} as Project[];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}
`,
  'utf8'
);

writeFileSync(
  siteOut,
  `/**
 * AUTO-GENERATED — local static seed for dev/tsc when Crelyst API is unavailable.
 * Production builds use scripts/sync-content.ts against the public API.
 */
import type { BbsSiteContent } from './site-content';

export type { BbsSiteContent };

export const siteContent: BbsSiteContent = ${siteJson} as BbsSiteContent;
`,
  'utf8'
);

console.log(`Wrote ${projectsOut} (${projects.length} projects)`);
console.log(`Wrote ${siteOut}`);
