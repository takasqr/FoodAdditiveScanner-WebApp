import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { User } from '@/model/domain/user/User'

export const useAuthStore = defineStore('auth', () => {

  const isAuth = ref(false)
  const signinedUser = ref<User>()

  // ログイン処理
  function signin(uid: string, name: string, email: string) {

    isAuth.value = true
    signinedUser.value = new User(uid, name, email)
  }

  return { isAuth, signinedUser, signin }
})
