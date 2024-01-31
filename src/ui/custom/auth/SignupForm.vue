<template>

  <form class="space-y-6" @submit.prevent="submit">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">メールアドレス</label>
      <div class="mt-2">
        
        <TextFieldEmail @change="inputEmail" />

      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">パスワード</label>
      <div class="mt-2">
        
        <TextFieldPassword @change="inputPassword" />

      </div>
    </div>

    <div>
      <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ユーザー登録</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AccountService } from '@/model/domain/auth/AccountService';
import TextFieldEmail from '@/ui/template/text-field-email/TextFieldEmail.vue'
import TextFieldPassword from '@/ui/template/text-field-password/TextFieldPassword.vue'
import router from '@/ui/router';

const email = ref('')
const password = ref('')

function submit() {
  const accounService = new AccountService
  accounService.signup(email.value, password.value)
    .then(() => {
      router.push({ name: 'menu' })
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