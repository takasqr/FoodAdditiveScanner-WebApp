<template>
  <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
    <PrimaryButton>test</PrimaryButton>
  </SlideOver>

  <DefaultLayout>
    <Card>
      <Feed :timeline="timeline"></Feed>
    </Card>
    
    <!-- <MainMenu></MainMenu> -->
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
import Feed from '@/ui/basic/feed/Feed.vue'
import Card from '@/ui/basic/card/Card.vue';
import { CheckIcon, HandThumbUpIcon, UserIcon } from '@heroicons/vue/20/solid'

const isSlideOverOpen = ref(false)

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

// SlideOver コンポーネントからのイベントを処理する関数
function handleUpdateIsOpen(value: boolean) {
  isSlideOverOpen.value = value
}

const timeline: TimeLine[] = [
  {
    id: 1,
    content: 'Applied to',
    date: '2020-09-20',
    icon: UserIcon,
    iconBackground: 'bg-gray-400',
  },
  {
    id: 2,
    content: 'Advanced to phone screening by',
    date: '2020-09-22',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: 'Completed phone screening with',
    date: '2020-09-28',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
  {
    id: 4,
    content: 'Advanced to interview by',
    date: '2020-09-30',
    icon: HandThumbUpIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: 'Completed interview with',
    date: '2020-10-04',
    icon: CheckIcon,
    iconBackground: 'bg-green-500',
  },
]
</script>