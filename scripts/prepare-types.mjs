import { rename, rm } from 'node:fs/promises';

await rm('dist/omikuji.d.ts', { force: true });
await rename('dist/index.d.ts', 'dist/omikuji.d.ts');
