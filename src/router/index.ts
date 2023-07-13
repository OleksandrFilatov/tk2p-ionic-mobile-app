import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [

  {
    path: '/',
    component: Tabs,
    children: [
      {
        path: '/',
        component: () => import('@/views/Welcome.vue')
      },
      {
        path: '/start',
        component: () => import('@/views/Start.vue')
      },
      {
        path: '/register',
        component: () => import('@/views/ContactInfo.vue')
      },
      {
        path: '/contact',
        component: () => import('@/views/Contact.vue')
      },
      {
        path: '/verify-device',
        component: () => import('@/views/VerifyDevice.vue')
      },
      {
        path: '/notification',
        component: () => import('@/views/Notification.vue')
      },
      {
        path: '/home',
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/share',
        component: () => import('@/views/Share.vue')
      },
      {
        path: '/coach',
        component: () => import('@/views/Coach.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/About.vue')
      },
      {
        path: 'term',
        component: () => import('@/views/Term.vue')
      },
      {
        path: 'manage',
        component: () => import('@/views/Manage.vue')
      },
      {
        path: '/program-notification',
        component: () => import('@/views/ProgramNotification.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
