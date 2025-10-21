import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    // Ajout pour forcer Vite à pré-compiler vue-meta,
    // ce qui peut résoudre les erreurs "require is not defined".
    include: ['vue-meta'],
  },
})
