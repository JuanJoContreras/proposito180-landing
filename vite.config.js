import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Base URL del sitio
  // Si el sitio va en la raíz del dominio: base: '/'
  // Si va en un subdirectorio, ej: base: '/proposito180/'
  base: '/',

  server: {
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: 'all',
  },

  build: {
    // Carpeta de salida del build (se sube al cPanel)
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',

    // Separar chunks para mejor rendimiento
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['react-icons'],
          motion: ['framer-motion'],
        },
      },
    },
  },

  preview: {
    port: 4173,
    host: true,
  },
})
