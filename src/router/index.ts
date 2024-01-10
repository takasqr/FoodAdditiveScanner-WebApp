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
