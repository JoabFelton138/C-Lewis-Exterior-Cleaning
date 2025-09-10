import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor';
          }
          // Router
          if (id.includes('node_modules/react-router-dom')) {
            return 'router';
          }
          // Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'ui';
          }
          // Framer Motion
          if (id.includes('node_modules/framer-motion')) {
            return 'animations';
          }
          // Form libraries
          if (id.includes('node_modules/react-hook-form') || 
              id.includes('node_modules/zod') || 
              id.includes('node_modules/@emailjs') ||
              id.includes('node_modules/@hookform')) {
            return 'forms';
          }
          // Carousel libraries
          if (id.includes('node_modules/embla-carousel')) {
            return 'carousel';
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
