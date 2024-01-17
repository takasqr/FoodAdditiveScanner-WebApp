import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AccountService from '@/model/AccountService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: false },
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/SigninPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/SignupPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/ForgetPasswordPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/request',
      name: 'request',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/RequestPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/ContactPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/message',
      name: 'message',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/MessagePage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/payment',
      name: 'payment',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/PaymentPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/HistoryPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/MenuPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/setting',
      name: 'setting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/SettingPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/404Page.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/service-provider',
      name: 'service-provider',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/ServiceProviderPage.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/scanner',
      name: 'scanner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/ScannerPage.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/sample',
      name: 'sample',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/page/SamplePage.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

// ナビゲーションガード
router.beforeEach(async (to, from) => {

  // // ログイン状態をチェック
  // const accounService = new AccountService
  // await accounService.checkAuthState()
  //   .then((isLoggedIn) => {

  //     if (isLoggedIn) {
  //       // メニューページへ移動
  //       router.push({ name: 'scanner' })
  //     } else {
  //       router.push({ name: 'signin' })
  //     }

  //   }).catch((error) => {
  //     // エラー処理
  //     console.error('エラー発生:', error);
  //     router.push({ name: 'signin' })
  //   }); 

  // if (
  //   // make sure the user is authenticated
  //   !isAuthenticated &&
  //   // ❗️ Avoid an infinite redirect
  //   to.meta.requiresAuth !== true
  // ) {
  //   // redirect the user to the login page
  //   return { name: 'signin' }
  // }
})

export default router
