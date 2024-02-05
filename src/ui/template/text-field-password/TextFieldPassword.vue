<template>
  <TextField
   @change="change($event)"
   type="password"
   autocomplete="current-password"
   :required="true"
  />
</template>

<script setup lang="ts">
import TextField from '../../basic/text-field/TextField.vue';

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
