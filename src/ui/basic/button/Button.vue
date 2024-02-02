<template>
  <button v-if="!href" :class="{ 'w-full': block }" class="bg-white border border-gray-200 font-bold py-2 px-4 rounded-full hover:bg-gray-50">
    <slot></slot>
  </button>

  <a v-else :class="{ 'w-full text-center': block }" :href="href" class="inline-block bg-white border border-gray-200 font-bold py-2 px-4 rounded-full hover:bg-gray-50">
    <slot></slot>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  block: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
  }
})
</script>