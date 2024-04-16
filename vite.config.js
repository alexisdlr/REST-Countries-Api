import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// vite.config.js

export default defineConfig({
  plugins: [react()],
  // Otras opciones de configuración...
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages'
      // Otros alias según sea necesario
    },
  },
});
