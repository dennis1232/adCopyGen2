import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/adCopyGen2/',
  server: {
    port: 3000
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
});