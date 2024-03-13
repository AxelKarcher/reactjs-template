import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return defineConfig({
    plugins: [react()],
    server: {
      port: 3000,
      proxy: {
        '/api': {
          target: process.env.VITE_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      },
    },
    resolve: {
      alias: {
        assets: '/src/assets',
        fonts: './src/assets/fonts',
        icons: '/src/assets/icons',
        images: '/src/assets/images',
        components: '/src/components',
        config: '/src/config',
        hooks: '/src/hooks',
        interfaces: '/src/interfaces',
        pages: '/src/pages',
        styles: '/src/styles',
        utils: '/src/utils'
      }
    }
  })
}
