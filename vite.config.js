import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// vite.config.js

export default defineConfig({
  plugins: [react()],
  // Otras opciones de configuración...
  resolve: {
    alias: {
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url))
      // Otros alias según sea necesario
    },
  },
});
