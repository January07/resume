import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/resume',

  // server: {
  //   host: '0.0.0.0'
  // },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "src/assets/styles/main";'
      }
    }
  }
})
