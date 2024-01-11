import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3500
  },
  exclude: [
    '**/.git/**',  // Excluir el directorio .git y sus subdirectorios
    '**/*.git',    // Excluir cualquier archivo o directorio con el nombre .git
    '**/node_modules/**',  // Excluir el directorio node_modules y sus subdirectorios
  ],
})
