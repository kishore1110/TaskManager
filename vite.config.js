import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Add this base setting
export default defineConfig({
  base: '/TaskManager/',
  plugins: [react()],
})
