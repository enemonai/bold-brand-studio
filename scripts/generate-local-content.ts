/**
 * Dev helper: write projects.generated.ts from static bold-brand-studio projects.ts
 * using the same loader the migration script uses. Build/predev normally use sync-content.ts
 * against the Crelyst API instead.
 */
import { writeFileSync } from 'fs';
import { resolve } from 'path';
import { loadBoldBrandProjects } from '../../crelyst/scripts/lib/loadBoldBrandProjects.ts';

const out = resolve(process.cwd(), 'src/data/projects.generated.ts');

const projects = await loadBoldBrandProjects();
const json = JSON.stringify(projects, null, 2);

writeFileSync(
  out,
  `/**
 * AUTO-GENERATED — local static seed for dev/tsc when Crelyst API is unavailable.
 * Production builds use scripts/sync-content.ts against the public API.
 */
import type { Project, Paragraph, SectionHeading } from './projects';

export type { Project, Paragraph, SectionHeading };

export const projects: Project[] = ${json} as Project[];

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

console.log(`Wrote ${out} (${projects.length} projects)`);
