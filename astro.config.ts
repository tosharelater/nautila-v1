import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Frozen v1 backup: https://tosharelater.github.io/nautila-v1/
  site: 'https://tosharelater.github.io',
  base: '/nautila-v1/',
  output: 'static',
  compressHTML: true,
});
