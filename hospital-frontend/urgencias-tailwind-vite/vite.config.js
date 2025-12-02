import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),             // página principal del módulo
        registro: resolve(__dirname, 'registro-urgencias.html'),
        triaje: resolve(__dirname, 'triaje.html'),
      },
    },
  },
})