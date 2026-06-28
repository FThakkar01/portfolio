import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    middlewareMode: false,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html'
    }
  },
  root: 'public'
})
