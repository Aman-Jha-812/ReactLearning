import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Make sure it has '@tailwindcss/' at the front

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
