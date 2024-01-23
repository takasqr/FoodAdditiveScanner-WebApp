<template>

  <form class="space-y-6" @submit.prevent="submit">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">メールアドレス</label>
      <div class="mt-2">
        
        <InputEmail @change="inputEmail" />

      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">パスワード</label>
      <div class="mt-2">
        
        <InputPassword @change="inputPassword" />

      </div>
    </div>

    <div class="flex items-center justify-between">

      <div class="text-sm leading-6">
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">パスワードをお忘れですか？</a>
      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ログイン</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AccountService } from '@/model/AccountService';
import InputEmail from '../basic/InputEmail.vue'
import InputPassword from '../basic/InputPassword.vue'
import router from '../../router';

const email = ref('')
const password = ref('')

function submit() {
  const accounService = new AccountService
  accounService.signin(email.value, password.value)
    .then(() => {
      router.push({ name: 'scanner' })
    })
    .catch((error) => {
      console.error(error)
    })
}

function inputEmail(value: string) {
  email.value = value
}

function inputPassword(value: string) {
  password.value = value
}

</script>