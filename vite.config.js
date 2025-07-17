import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // TA LINIA JEST KLUCZOWA
  base: '/portfolio-designer/',
  plugins: [react()],
});