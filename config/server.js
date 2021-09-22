/*
 * @Author: 刘林
 * @Date: 2021-09-17 09:30:33
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-17 09:37:16
 */
export default {
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    },
  }
}