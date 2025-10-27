import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    host: true,   // ✅ Allows LAN access
    port: 5173,   // Optional: Choose your port
  }
})
