<template>
  <span class="relative group">
    <slot />
    <span v-show="isReact" class="absolute whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 bg-gray-600 py-1 px-2 text-white rounded">{{ reactiveText }}</span>
    <span v-show="!isReact" class="opacity-0 group-hover:opacity-100 absolute whitespace-nowrap -bottom-12 left-1/2 -translate-x-1/2 bg-gray-600 py-1 px-2 text-white rounded">{{ hoverText }}</span>
  </span>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, watch } from 'vue';

const props = defineProps({
  reactiveText: {
    type: String,
  },
  hoverText: {
    type: String,
  },
  isReact: {
    type: Boolean,
    default: false
  },
})

const emit = defineEmits(['update:isReact'])

// currentStep の変更を監視
watch(
  () => props.isReact, (newValue, oldValue) => {

    if (newValue === true) {
      setTimeout(() => { emit('update:isReact', false) }, 1000)
    }
  }
)
</script>
