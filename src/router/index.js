/*
 * @Author: 刘林
 * @Date: 2021-09-14 20:01:47
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-17 15:13:21
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
        name: '首页',
        component: Dashborad,
      }
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, form, savedPosition) {
    return { top: 0 }
  }
})

export default router;
