import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mapa: resolve(__dirname, 'mapa-camas.html'),
        medicacion: resolve(__dirname, 'medicacion.html'),
      },
    },
  },
})
