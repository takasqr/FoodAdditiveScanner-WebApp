<template>
  <button @click="clickFileInput" type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
    </svg>
    <span class="mt-2 block text-sm font-semibold text-gray-900">画像をアップロード</span>
  </button>
  <input type="file" ref="fileInput" class="hidden" @change="handleFileChange">
  <img v-if="imageUrl" :src="imageUrl" class="max-w-xs">
</template>

<script setup lang="ts">
import { ref } from 'vue'
const fileInput = ref<HTMLInputElement | null>(null)
const imageUrl = ref<string | null>(null)

function clickFileInput() {
  if (fileInput.value) {
    fileInput.value.click();
  }
}

function handleFileChange(event: Event) {
  const files = (event.target as HTMLInputElement).files
  if (files && files[0]) {
    const reader = new FileReader()
    reader.onload = (e) => imageUrl.value = e.target?.result as string
    reader.readAsDataURL(files[0])
  }
}
</script>