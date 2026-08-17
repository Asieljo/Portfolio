import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: "/Portfolio/",
  plugins: [
    react(),
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
