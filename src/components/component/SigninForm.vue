<template>

  <form class="space-y-6" action="#" method="POST">
    <div>
      <label for="email" class="block text-sm font-medium leading-6 text-gray-900">メールアドレス</label>
      <div class="mt-2">
        
        <InputEmail />

      </div>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium leading-6 text-gray-900">パスワード</label>
      <div class="mt-2">
        
        <InputPassword />

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
import InputEmail from '../basic/InputEmail.vue'
import InputPassword from '../basic/InputPassword.vue'
</script>