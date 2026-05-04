import { rename } from 'node:fs/promises';

await rename('dist/index.d.ts', 'dist/omikuji.d.ts');
