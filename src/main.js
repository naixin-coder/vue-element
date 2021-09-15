/*
 * @Author: 刘林
 * @Date: 2021-09-14 16:58:39
 * @LastEditors: 刘林
 * @LastEditTime: 2021-09-15 10:42:23
 */
import { createApp } from 'vue';
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import App from './App.vue';
import router from './router'

const app = createApp(App);

app.use(ElementPlus, { size: 'small' });
app.use(router);
app.mount('#app');