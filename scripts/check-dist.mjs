import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';

const require = createRequire(import.meta.url);
const RequiredOmikuji = require('../dist/omikuji.js');
const { default: ImportedOmikuji } = await import('../dist/omikuji.mjs');

assert.equal(typeof RequiredOmikuji, 'function');
assert.equal(typeof ImportedOmikuji, 'function');

const requiredOmikuji = new RequiredOmikuji(['大吉']);
const importedOmikuji = new ImportedOmikuji(['凶']);

assert.equal(requiredOmikuji.get(), '大吉');
assert.equal(importedOmikuji.get(), '凶');

await access('dist/omikuji.d.ts');
