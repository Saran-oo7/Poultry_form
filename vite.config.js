import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves a project site from /<repo-name>/, so the build needs a
  // matching base path. The Actions workflow sets VITE_BASE for us; anywhere
  // else (local dev, Netlify, Vercel, a custom domain) '/' is correct.
  base: process.env.VITE_BASE || '/',
  server: { port: 5173 }
})
