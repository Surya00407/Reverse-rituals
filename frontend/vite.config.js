import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      output: {
        // Keep shared code in a few cached files instead of dozens of tiny
        // chunks; every file is a separate Vercel edge request.
        codeSplitting: {
          minSize: 20000,
          groups: [
            {
              name: 'vendor',
              test: /node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler|axios|lucide-react|framer-motion|motion-dom|motion-utils|react-toastify|clsx|tailwind-merge)[\\/]|src[\\/](context|utils|data)[\\/]/,
            },
          ],
        },
      },
    },
  },
})
