import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Built assets go to /build so they never clash with the site's /assets images
  build: { assetsDir: 'build' },
})
