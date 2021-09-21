import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/mall',
    component: () => import('../views/ProductBoard.vue'),
    children: [
      {
        path: 'product',
        component: () => import('../views/Product.vue')
      },
      {
        path: 'item/:itemId',
        component: () => import('../views/ProductDetail.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/ProductCart.vue')
      },
      {
        path: 'order',
        component: () => import('../views/Order.vue')
      },
      {
        path: 'checkout/:orderId',
        component: () => import('../views/OrderCheckout.vue')
      }
    ]
  },
  {
    path: '/dashboard',
    component: () => import('../views/Dashboard.vue'),
    children: [
      {
        path: 'backstageproducts',
        component: () => import('../views/BackstageProducts.vue')
      }
    ]
  },
  {
    path: '/user',
    component: () => import('../views/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import('../views/UserCart.vue')
      },
      {
        path: 'product/:productId',
        component: () => import('../views/UserProduct.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.fullPath.match('mall')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
