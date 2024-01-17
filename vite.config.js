// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: 'localhost', // Especifica el host como localhost
    port: 3500,        // Especifica el puerto como 3500
  },
  exclude: [
    '**/.git/**',
    '**/*.git',
    '**/node_modules/**',
  ],
});
