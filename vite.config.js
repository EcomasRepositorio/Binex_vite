// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [
    react(),
    // Agrega el plugin de PostCSS
  ],
  server: {
    port: 3500,
  },
  exclude: [
    '**/.git/**',
    '**/*.git',
    '**/node_modules/**',
  ],
});
