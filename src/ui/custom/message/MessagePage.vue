<template>
  <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
    <PrimaryButton>test</PrimaryButton>
  </SlideOver>

  <DefaultLayout>
    <MessageList></MessageList>
  </DefaultLayout>

  <FloatingButton @click="toggleSlideOver">
    <QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" />
  </FloatingButton>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/ui/layout/DefaultLayout.vue'
import SlideOver from '@/ui/basic/slide-over/SlideOver.vue';
import FloatingButton from '@/ui/basic/floating-button/FloatingButton.vue'
import PrimaryButton from '@/ui/template/primary-button/PrimaryButton.vue';
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import MessageList from '@/ui/custom/message/MessageList.vue';

const isSlideOverOpen = ref(false)

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

// SlideOver コンポーネントからのイベントを処理する関数
function handleUpdateIsOpen(value: boolean) {
  isSlideOverOpen.value = value
}

</script>