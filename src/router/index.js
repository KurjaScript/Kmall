import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('/src/views/Home.vue'),
      meta: {
        index: 1
      }
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('/src/views/Category.vue')
    },
    {
      path: '/user',
      name: 'name',
      component: () => import('/src/views/user.vue')
    },



    // test
    {
      path: '/ContentSlot',
      name: '内容插槽',
      component: () => import('/src/test/slot/内容插槽/Parent.vue'),
    },
    {
      path: '/DefaultContentSlot',
      name: '默认内容插槽',
      component: () => import('/src/test/slot/默认内容插槽/Parent.vue')
    }
  ]
})

export default router