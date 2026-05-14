import path from 'path'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: true,
    target: 'esnext',
  },
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      assets: `${path.resolve(__dirname, './src/assets/')}`,
      config: `${path.resolve(__dirname, './src/config/')}`,
      constants: `${path.resolve(__dirname, './src/constants/')}`,
      core: `${path.resolve(__dirname, './src/core/')}`,
      layout: `${path.resolve(__dirname, './src/layout/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      lib: `${path.resolve(__dirname, './src/lib/')}`,
      types: `${path.resolve(__dirname, './src/types')}`,
    },
  },
})
