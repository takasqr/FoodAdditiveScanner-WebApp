<template>
  <form class="animate-fadeRight">

    <div class="mt-4">
      <Select title="飲み物" :options="selectOptions"></Select>
    </div>

    <div class="mt-4">
      <TextArea :rows="6" :label="String('メモ')"></TextArea>
    </div>

    <div class="flex py-8">
      <div class="flex-none w-32">
        <SecondaryButton
         @click="previous"
         block
        >戻る</SecondaryButton>
      </div>

      <div class="grow">
      </div>

      <div class="flex-none w-32">
        <PrimaryButton
         @click="netx"
         block
        >次へ</PrimaryButton>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue'
import PrimaryButton from '../../template/primary-button/PrimaryButton.vue';
import SecondaryButton from '../../template/secondary-button/SecondaryButton.vue';
import Select from '../../basic/select/Select.vue';
import TextArea from '../../basic/text-area/TextArea.vue';

const emits = defineEmits(['next', 'previous'])

const selectOptions: SelectOption[] = [
  { key: 'milk', name: 'ミルク' },
  { key: 'orange', name: 'オレンジジュース' },
  { key: 'coffee', name: 'コーヒー' }
]

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

function previous() {
  emits('previous')
}
</script>