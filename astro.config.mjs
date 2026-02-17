// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://smz.sh',
  integrations: [
    expressiveCode({
      themes: ['github-dark-high-contrast'],
      defaultProps: {
        frame: 'auto',
      },
      styleOverrides: {
        borderRadius: '0',
        borderColor: '#262626',
        codeBackground: '#0a0a0a',
        frames: {
          editorBackground: '#0a0a0a',
          terminalBackground: '#0a0a0a',
          terminalTitlebarBackground: '#171717',
          terminalTitlebarBorderBottomColor: '#262626',
        },
      },
    }),
    react(),
    mdx(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
