import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port: 3000},
  resolve: {
    alias: {
      API: '/src/API',
      assets: '/src/assets',
      icons: '/src/assets/icons',
      images: '/src/assets/images',
      components: '/src/components',
      config: '/src/config',
      hooks: '/src/hooks',
      pages: '/src/pages',
      styles: '/src/styles'
    }
  }
})
