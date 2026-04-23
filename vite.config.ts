import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Otimizações para build mais rápido
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar dependências grandes em chunks
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion'],
          router: ['react-router-dom'],
        }
      }
    },
    // Reduzir warnings de chunk size
    chunkSizeWarningLimit: 1000
  },
  // Otimizações para desenvolvimento
  server: {
    hmr: true,
    host: true
  },
  // Otimizar dependências
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-router-dom']
  }
})
