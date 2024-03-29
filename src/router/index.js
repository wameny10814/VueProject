import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/productlist',
    name: 'productlist',
    component: () => import('../views/ProdictListView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/productManage',
    name: 'productManage',
    component: () => import('../views/ProductManage.vue')
  },
  {
    path: '/ordersmanage',
    name: 'ordersmanage',
    component: () => import('../views/OrdersManage.vue')
  },
  {
    path: '/couponmanage',
    name: 'couponmanage',
    component: () => import('../views/CouponManage.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
