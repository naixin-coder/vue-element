/*
 * @Author: 刘林
 * @Date: 2021-09-14 16:58:39
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-14 20:53:00
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   return {
//     plugins: [vue(),],
//     resolve: {
//       extensions: ['.js', '.vue'],
//       alias: {
//         '@': resolve('src')
//       },
//     }
//   }
// })
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve('src')
    },
  }
})