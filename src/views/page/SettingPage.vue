<template>
  <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
    <PrimaryButton>test</PrimaryButton>
  </SlideOver>

  <DefaultLayout>
    <SettingForm></SettingForm>
    <NewPasswordArea></NewPasswordArea>
    <DeleteAccountArea></DeleteAccountArea>
  </DefaultLayout>

  <FloatingButton @click="toggleSlideOver">
    <QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" />
  </FloatingButton>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import SlideOver from '@/components/basic/SlideOver.vue';
import FloatingButton from '@/components/basic/FloatingButton.vue'
import PrimaryButton from '@/components/basic/PrimaryButton.vue';
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import SettingForm from '@/components/component/SettingForm.vue';
import NewPasswordArea from '@/components/component/NewPasswordArea.vue';
import DeleteAccountArea from '@/components/component/DeleteAccountArea.vue';

const isSlideOverOpen = ref(false)

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

// SlideOver コンポーネントからのイベントを処理する関数
function handleUpdateIsOpen(value: boolean) {
  isSlideOverOpen.value = value
}

</script>