import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';
import path from 'path'


import { resolve } from 'path';
const _src = resolve(__dirname, './src');
const _public = resolve(__dirname, './public');

export default defineConfig({
  // base: '/rezone-block/',
  plugins: [
    react(),
    legacy({ targets: ['IE >= 11'] }),
    {
      name: 'markdown-loader',
      transform: (code, id) => (id.slice(-3) === '.md') && `export default ${JSON.stringify(code)};`,
    },
  ],
  server: { port: 3030 },
  build: { minify: true },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {additionalData: `@import "@/styles/global/index.scss";`}
    },
    // postcss: { plugins: [autoprefixer()] }
  },
  resolve: {
    alias: {
      '@': resolve(_src),
      '&': resolve(_public),
      // assets
      '@images': resolve(_public, 'images'),
      '@icons': resolve(_public, 'icons'),
      '@fonts': resolve(_public, 'fonts'),
      '@data': resolve(_public, 'data'),
      '@sounds': resolve(_public, 'sounds'),
      '@videos': resolve(_public, 'videos'),
    }
  }
})