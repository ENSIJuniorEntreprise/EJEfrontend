import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    assetsInclude: "**/*.JPG",
    build: {
      outDir: 'build',
    },
    plugins: [react()],
  };
});