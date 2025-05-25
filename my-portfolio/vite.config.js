import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets',  // This is your existing folder
          dest: '.'       // This will copy to dist/assets/
        }
      ]
    })
  ]
});
