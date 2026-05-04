const input = '.build/esm/index.js';

export default [
  {
    input,
    output: {
      file: 'dist/omikuji.js',
      format: 'cjs',
      exports: 'default'
    }
  },
  {
    input,
    output: {
      file: 'dist/omikuji.mjs',
      format: 'es'
    }
  }
];
