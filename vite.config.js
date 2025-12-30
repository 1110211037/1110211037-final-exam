import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: './',
  base: './',
  server: {
    port: 8080,
    open: true
  },
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  }
})