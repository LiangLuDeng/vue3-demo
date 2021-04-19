/*
 * @Author: your name
 * @Date: 2021-04-19 11:16:34
 * @LastEditTime: 2021-04-19 15:04:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue3-ts-demo\src\router\index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home', // 标签
    component: Home
  },
  {
    path: '/about', // 记账
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list', // 统计
    name: 'List',
    component: () => { return import(/* webpackChunkName: "list" */ '../views/List.vue') }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
