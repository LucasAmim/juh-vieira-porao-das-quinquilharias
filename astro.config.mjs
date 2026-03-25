// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://lucasamim.github.io',
  base: '/juh-vieira-porao-das-quinquilharias',
  vite: {
    plugins: [tailwindcss()]
  }
});