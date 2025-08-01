import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // Import `resolve` from `path`

export default defineConfig({
  plugins: [vue()],
  base: '/ns-code/VUE-comp/order-options-simplified/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html') // Add your index.html here
      }
    }
  }
})
