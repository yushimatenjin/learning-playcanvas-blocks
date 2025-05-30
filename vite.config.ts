import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "tailwindcss"

export default defineConfig({
  // GitHub Pages用のbase path設定
  base: process.env.NODE_ENV === 'production' ? '/learning-playcanvas-blocks/' : '/',
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}) 