<template>
  <NavigationDrawer :navigationTop="navigationTop" :navigationBottom="navigationBottom">

    <Banner></Banner>

    <div class="mt-4 lg:mt-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

      <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
      <div class="mx-auto max-w-3xl">

        <Breadcrumb></Breadcrumb>

        <div class="mt-4 lg:mt-10">
          <!-- Content goes here -->
          <slot />
        </div>
      </div>
    </div>

    <FooterSimple></FooterSimple>

  </NavigationDrawer>
</template>

<script setup lang="ts">
import NavigationDrawer from '@/ui/basic/navigation-drawer/NavigationDrawer.vue'
import FooterSimple from '@/ui/template/footer-simple/FooterSimple.vue'
import Breadcrumb from '@/ui/basic/breadcrumb/Breadcrumb.vue'
import Banner from '@/ui/basic/banner/Banner.vue'
import {
  HomeIcon,
  BellAlertIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  CurrencyYenIcon,
  CubeIcon,
  BookOpenIcon,
} from '@heroicons/vue/24/outline'

const navigationTop: NavigationDrawerContent[] = [
  { name: 'メニュー', href: '/menu', onClick: undefined, icon: HomeIcon, current: false },
  { name: 'リクエスト', href: '/request', icon: CubeIcon, current: false },
  { name: '履歴', href: '/history', icon: BookOpenIcon, current: false },
  { name: '支払い', href: '/payment', icon: CurrencyYenIcon, current: false },
  { name: 'メッセージ', href: '/message', icon: BellAlertIcon, current: false },
  { name: '問い合わせ', href: '/contact', icon: ChatBubbleBottomCenterTextIcon, current: false },
  { name: '設定', href: '/setting', icon: Cog6ToothIcon, current: false },
]

const navigationBottom: NavigationDrawerContent[] = [
  { name: 'ログアウト', href: undefined, onClick: () => console.log('click.'), icon: null, current: null },
]
</script>