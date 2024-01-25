<template>
  <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
    <PrimaryButton>test</PrimaryButton>
  </SlideOver>

  <DefaultLayout>
    <Panel>
      <Feed></Feed>
    </Panel>
    
    <!-- <MainMenu></MainMenu> -->
  </DefaultLayout>

  <FloatingButton @click="toggleSlideOver">
    <QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" />
  </FloatingButton>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/ui/layout/DefaultLayout.vue'
import SlideOver from '@/ui/basic/SlideOver.vue';
import FloatingButton from '@/ui/basic/FloatingButton.vue'
import PrimaryButton from '@/ui/basic/PrimaryButton.vue';
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import MainMenu from '@/ui/basic/MainMenu.vue'
import Feed from '@/ui/basic/Feed.vue'
import Panel from '@/ui/basic/Panel.vue';

const isSlideOverOpen = ref(false)

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

// SlideOver コンポーネントからのイベントを処理する関数
function handleUpdateIsOpen(value: boolean) {
  isSlideOverOpen.value = value
}

</script>