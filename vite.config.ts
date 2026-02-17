import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  appType: 'spa',
  server: {
    host: 'localhost',
    port: 5173,
    watch: {
      usePolling: false,
      ignored: [
        '**/node_modules/**',
        '**/.git/**',
        '**/vite.config.ts.timestamp*',
        '**/public/**',
        '**/user_read_only_context/**',
      ],
    },
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: true,
    port: 5173,
  },
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Pages at project root
      '@pages': path.resolve(__dirname, './pages'),
    },
  },
})
