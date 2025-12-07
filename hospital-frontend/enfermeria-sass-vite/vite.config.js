import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Hospital-Tecu-Ra---JaimeGavilanTorrero',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),             // página principal del módulo
        mapa: resolve(__dirname, 'mapa-camas.html'),    
        medicacion: resolve(__dirname, 'medicacion.html'),    
    },
    },
  },
})