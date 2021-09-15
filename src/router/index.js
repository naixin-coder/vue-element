/*
 * @Author: 刘林
 * @Date: 2021-09-14 20:01:47
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 21:10:57
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Layout from '@/layouts/Layout.vue';
import Dashborad from '@/pages/dashborad.vue';


const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Dashborad,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
