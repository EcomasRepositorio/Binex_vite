// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePostcss from 'vite-plugin-postcss';

export default defineConfig({
  plugins: [
    react(),
    VitePostcss(),  // Agrega el plugin de PostCSS
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
