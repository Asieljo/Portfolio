import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// Routes from src/App.jsx (other than "/"); keep both lists in sync.
const routes = ['case-study', 'work-experience', 'design-system']

// GitHub Pages has no SPA fallback: a direct visit or refresh on a route like
// /Portfolio/case-study gets its 404 page. Each known route gets its own copy
// of index.html, so it answers 200 (indexable, and link previews work), and
// 404.html covers every other path so the app's not-found page renders.
const spaFallback = () => {
  let outDir
  return {
    name: 'spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const index = resolve(outDir, 'index.html')
      for (const route of routes) {
        mkdirSync(resolve(outDir, route), { recursive: true })
        copyFileSync(index, resolve(outDir, route, 'index.html'))
      }
      copyFileSync(index, resolve(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
    spaFallback(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
  ],
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
  }
})
