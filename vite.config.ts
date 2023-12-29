import { defineConfig } from 'vite'
import { resolve } from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
export default defineConfig({
  
  build: {
    
    lib: {
      entry:  resolve("src", 'index.ts'),
      name: 'mynextevents',
      fileName: (format) => `mynextevents.${format}.js`,
      
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react(), dts()]
})