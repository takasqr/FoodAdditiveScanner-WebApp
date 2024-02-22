<template>
  <form class="animate-fadeRight">
    <DatePicker @change="changeDatePicker" locale="ja"></DatePicker>

    <div class="flex py-8">
      <div class="grow">
      </div>

      <div class="flex-none w-32">
        <PrimaryButton :disabled="disabled" block @click="netx()">次へ</PrimaryButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import DatePicker from '../../basic/date-picker/DatePicker.vue';
import PrimaryButton from '../../template/primary-button/PrimaryButton.vue';

const date = ref('')
const disabled = ref(true)

const emits = defineEmits(['next'])

function changeDatePicker(event: Event) {

  const target = event.target as HTMLInputElement

  // 日付を入れる
  date.value = target.value

  validate()
}

function validate() {
  if (date.value.length > 0) {
    // バリデーション合格
    disabled.value = false
  } else {
    disabled.value = true
  }
}

function netx() {
  emits('next')
}
</script>