import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const SYNC_SCRIPT = resolve(process.cwd(), 'scripts/sync-content.ts');

describe('sync-content script', () => {
  it('fails loudly on fetch errors (no silent fallback)', () => {
    const source = readFileSync(SYNC_SCRIPT, 'utf8');
    expect(source).toContain('process.exit(1)');
    expect(source).toContain('FATAL');
    expect(source).not.toMatch(/catch[\s\S]*writeFileSync[\s\S]*\[\]/);
  });
});
