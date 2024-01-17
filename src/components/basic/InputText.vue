<template>
  <div class="rounded-md px-3 pb-1.5 pt-2.5 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
    <label for="name" class="block text-xs font-medium text-gray-900">{{ label }}</label>
    <input @change="changeValue($event)" type="text" name="name" id="name" class="bg-white dark:bg-slate-800 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Jane Smith" />
  </div>
</template>

<script setup lang="ts">

// props を定義
defineProps<{
  label?: string
}>()

// emit を定義
const emit = defineEmits<{
  changeValue: [value: string]
}>()

// input の変更を受け取る
function changeValue(event: Event) {
  const target = event.target as HTMLInputElement | null
  if (target && target.value) {
    // change を発火し、値を渡す
    if (validate(target.value)) {
      // バリデーションに通ったら
      emit('changeValue', target.value)
    }
  }
}

// バリデーション
function validate(value: string): boolean {
  // バリデーションロジック
  return value.trim() !== '';
}
</script>