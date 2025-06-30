import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
})
// https://www.figma.com/design/Fwuxe85BbCwfu8NPcaEk7y/Dev-Task?node-id=0-1&p=f&t=ukmQhzK6olro2e7P-0