import { createRouter, createWebHistory } from 'vue-router'
import { AccountService } from '@/model/domain/auth/AccountService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // リダイレクト
      // https://v3.router.vuejs.org/ja/guide/essentials/redirect-and-alias.html
      redirect: { name: 'menu'}
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/auth/SigninPage.vue'),
      meta: { requiresAuth: false, title: 'ログイン' }
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/auth/SignupPage.vue'),
      meta: { requiresAuth: false, title: 'ユーザー登録' }
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/auth/ForgetPasswordPage.vue'),
      meta: { requiresAuth: false, title: 'パスワード再発行' }
    },
    {
      path: '/request',
      name: 'request',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/request/RequestPage.vue'),
      meta: { requiresAuth: true, title: 'リクエスト' }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/contact/ContactPage.vue'),
      meta: { requiresAuth: true, title: '問い合わせ' }
    },
    {
      path: '/message',
      name: 'message',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/message/MessagePage.vue'),
      meta: { requiresAuth: true, title: 'メッセージ' }
    },
    {
      path: '/payment',
      name: 'payment',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/payment/PaymentPage.vue'),
      meta: { requiresAuth: true, title: '支払い' }
    },
    {
      path: '/history',
      name: 'history',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/request/HistoryPage.vue'),
      meta: { requiresAuth: true, title: '履歴' }
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/general/MenuPage.vue'),
      meta: { requiresAuth: true, title: 'メニュー' }
    },
    {
      path: '/setting',
      name: 'setting',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/user/SettingPage.vue'),
      meta: { requiresAuth: true, title: '設定' }
    },
    {
      path: '/404',
      name: '404',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/general/404Page.vue'),
      meta: { requiresAuth: false, title: '404' }
    },
    {
      path: '/service-provider',
      name: 'service-provider',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/general/ServiceProviderPage.vue'),
      meta: { requiresAuth: false, title: 'サービス提供者' }
    },
    {
      path: '/scanner',
      name: 'scanner',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/general/ScannerPage.vue'),
      meta: { requiresAuth: true, title: 'スキャナー' }
    },
    {
      path: '/sample',
      name: 'sample',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/ui/custom/general/SamplePage.vue'),
      meta: { requiresAuth: true, title: 'サンプル' }
    }
  ]
})

// ナビゲーションガード
router.beforeEach(async (to, from) => {

  // ログイン必須のページかどうか
  if (to.meta.requiresAuth === true) {

    // ログイン状態をチェック
    const accounService = new AccountService
    await accounService.checkAuthState()
      .then((isLoggedIn) => {
        // ログインしていなかったら
        if (isLoggedIn === false) {
          router.push({ name: 'signin' })
        }

      }).catch((error) => {
        // エラー処理
        console.error('エラー発生:', error);
        router.push({ name: 'signin' })
      }); 
  }
})

export default router
