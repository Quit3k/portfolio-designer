import { defineConfig } from 'vite'
// ZMIANA: Importujemy poprawną wtyczkę, którą masz zainstalowaną
import react from '@vitejs/plugin-react-swc' 

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-designer/',
  plugins: [react()],
})