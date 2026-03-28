import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:8000'
    }
  }
})

// Any request the React app makes to `/api/...` 
// gets silently forwarded to the FastAPI server. 
// The browser only ever sees `localhost:5173`,
// so no CORS errors in development.
