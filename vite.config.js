import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'CharCycle',
      formats: ['es', 'cjs'],
      fileName: (format) => `charcycle.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        exports: 'named',
        globals: {
          react: 'React',
          'react/jsx-runtime': 'ReactJSXRuntime',
        },
      },
    },
  },
});
