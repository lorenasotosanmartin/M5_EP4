import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "Content-Security-Policy": "frame-ancestors 'none';", 
      "X-Frame-Options": "DENY",
    },
    port: 3000,
  }
})

