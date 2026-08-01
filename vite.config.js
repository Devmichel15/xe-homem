import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(dirname, './src'),
    },
  },
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          const modulePath = id.replaceAll('\\', '/').split('node_modules/')[1] ?? ''
          if (modulePath.startsWith('gsap')) return 'gsap'
          if (modulePath.startsWith('react') || modulePath.startsWith('scheduler')) return 'vendor'
          if (modulePath.startsWith('radix-ui')) return 'radix'
          if (modulePath.startsWith('embla')) return 'carousel'
          if (modulePath.startsWith('vaul')) return 'drawer'
          return undefined
        },
      },
    },
  },
})
