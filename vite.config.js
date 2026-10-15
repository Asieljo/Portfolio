/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  // GitHub Pages serves the site under /Portfolio/; Vercel (which sets VERCEL=1
  // during its builds) serves it from the domain root.
  base: process.env.VERCEL ? '/' : '/Portfolio/',
  // `vite-react-ssg build` prerenders each route in src/routes.jsx to its own
  // HTML, so crawlers and link previews get the content without running JS.
  // GitHub Pages has no SPA fallback: flat files (/case-study -> case-study.html)
  // answer each route without a trailing-slash redirect, so the URL the page
  // hydrates on is the one it was rendered for, and 404.html (the prerendered
  // not-found page) covers every other path.
  ssgOptions: {
    entry: 'src/main.jsx',
    dirStyle: 'flat',
    includedRoutes: paths => [...paths.filter(path => !path.includes('*') && !path.includes(':')), '/404'],
    // vite-react-ssg preloads every image the route's chunks import (all three
    // hero tints included) with a crossorigin mode the <img> tags don't use,
    // so each would download twice. The prerendered <img> tags are already
    // discoverable without them.
    onPageRendered: (route, html) => html.replace(/<link\b[^>]*\bas="image"[^>]*>/g, '')
  },
  plugins: [react(), svgr({
    svgrOptions: {
      icon: true
    }
  })],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use "src/styles/_variables.scss" as *;
          @use "src/styles/_mixins.scss" as *;
          @use "src/styles/_functions.scss" as *;
        `,
        loadPaths: ['.']
      }
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});