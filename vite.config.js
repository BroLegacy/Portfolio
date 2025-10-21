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
  build: {
    // Configuration spécifique pour le build de production
    commonjsOptions: {
      // Cette option aide Rollup (le bundler de Vite) à gérer
      // les modules qui mélangent les syntaxes CommonJS (require) et ES Modules (import).
      // C'est souvent la clé pour résoudre les erreurs "require is not defined" sur Netlify.
      transformMixedEsModules: true,
    },
  },
})

