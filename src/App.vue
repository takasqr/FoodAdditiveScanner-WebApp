<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import router from './ui/router';
import Notification from '@/ui/basic/notification/Notification.vue'
import Dialog from '@/ui/basic/dialog/Dialog.vue'
import { ThemeStore } from '@/ui/stores/ThemeStore'
import { BannerStore } from '@/ui/basic/banner/BannerStore';
import { useHead } from '@unhead/vue'

useHead({
  script: [
    {
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${import.meta.env.VITE_GTM_ID}');` 
    }
  ],
  noscript: [
    {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${import.meta.env.VITE_GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen'
    }
  ]
})

// ダークモード設定
const themeStore = ThemeStore()
themeStore.setup()

// Banner
const bannerStore = BannerStore()
bannerStore.open({ title: 'セール', contentText: '初回５０パーセントオフキャンペーン実施中！！'})

</script>

<template>
  <div class="bg-white dark:bg-slate-800 min-h-screen">
    <RouterView />

    <Notification></Notification>

    <Dialog></Dialog>
  </div>
</template>
