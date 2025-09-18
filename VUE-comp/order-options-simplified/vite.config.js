import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // Import `resolve` from `path`

export default defineConfig({
  plugins: [vue()],
  // Use the same base as package.json homepage so GH Pages serves assets correctly
  base: '/ns-code/VUE-comp/order-options-simplified/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Add your index.html here
      }
    }
  }
})
