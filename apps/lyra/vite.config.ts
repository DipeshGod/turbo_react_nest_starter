import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
      },
    },
  },
  resolve: {
    alias: {
      '@antd': path.resolve(__dirname, 'src/ui/antd'),
      '@icons': path.resolve(__dirname, 'src/ui/icons'),
      '@components': path.resolve(__dirname, 'src/ui/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
    },
  },
});
