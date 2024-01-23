<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
  <div class="bg-white dark:bg-slate-800 min-h-screen">
    <RouterView />

    <Notification></Notification>

    <Dialog></Dialog>
  </div>
</template>
