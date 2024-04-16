import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'; // Utiliza 'path' en lugar de 'node:url'


// vite.config.js

export default defineConfig({
  plugins: [react()],
  // Otras opciones de configuración...
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@pages': resolve(__dirname, './src/pages'),
      // Otros alias según sea necesario
    },
  },
});
