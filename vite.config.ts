import { defineConfig } from 'vite';

export default defineConfig({
  root: 'web',
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});

