<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import AccountService from './model/AccountService';
import router from './router';
import Notification from '@/components/basic/Notification.vue'
import Dialog from '@/components/basic/Dialog.vue'
import { useThemeStore } from '@/stores/theme'
import { useBannerStore } from '@/stores/banner';

// ダークモード設定
const themeStore = useThemeStore()
themeStore.setup()

// Banner
const bannerStore = useBannerStore()
bannerStore.open({ title: 'セール', contentText: '初回５０パーセントオフキャンペーン実施中！！'})

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

  <div class="bg-white dark:bg-slate-800 min-h-screen">
    <RouterView />

    <Notification></Notification>

    <Dialog></Dialog>
  </div>
</template>
