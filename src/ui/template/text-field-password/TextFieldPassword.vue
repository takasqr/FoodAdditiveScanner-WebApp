<template>
  <input @change="change($event)" id="password" name="password" type="password" autocomplete="current-password" required="true" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
</template>

<script setup lang="ts">

// イベントを定義
const emit = defineEmits({
  change: (value: string) => {
    return true
  }
})

function change(event: Event) {
  const target = event.target as HTMLInputElement | null;
  if (target && target.value) {
    // 'change' イベントを発行し、入力値を渡す
    emit('change', target.value);
  }
}
</script>
