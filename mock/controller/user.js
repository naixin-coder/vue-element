/*
 * @Author: 刘林
 * @Date: 2021-09-22 20:21:31
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-23 10:41:52
 */
const Mock = require('mockjs');

// export default {
//   'GET /api/user/info': {
//     id: '@id',
//     userName: 'Admin',
//     phone: /^1[34578]\d{9}$/
//   }
// }

module.exports = {
  'GET /api/user/info': {
    id: '@id',
    userName: 'Admin',
    phone: /^1[34578]\d{9}$/
  }
}