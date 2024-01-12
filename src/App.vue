<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AccountService from './model/AccountService';
import router from './router';
import Notification from '@/components/basic/Notification.vue'
import Dialog from '@/components/basic/Dialog.vue'

// ログイン状態をチェック
const accountService = new AccountService
accountService.checkAuthState()
  .then((isLoggedIn) => {

    if (isLoggedIn) {
      // メニューページへ移動
      router.push({ name: 'sample' })
    } else {
      router.push({ name: 'signin' })
    }

  }).catch((error) => {
    // エラー処理
    console.error('エラー発生:', error);
  });
  
</script>

<template>
  <!-- <header>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />

  <Notification></Notification>

  <Dialog></Dialog>
</template>
