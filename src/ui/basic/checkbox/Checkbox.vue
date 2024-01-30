<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <fieldset>
    <legend class="sr-only">Notifications</legend>
    <div class="space-y-5">
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="comments" class="font-medium text-gray-900">{{ title }}</label>
          <slot />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  title: string
}

const props = defineProps<Props>()
</script>