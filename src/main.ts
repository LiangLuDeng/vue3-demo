/*
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 19:02:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/icon/iconfont.js';
import '@/assets/style/reset.less'
import '@/assets/style/common.less'

createApp(App).use(store).use(vant).use(router).mount('#app')
