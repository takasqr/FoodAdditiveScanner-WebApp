<template>
  <form class="animate-fadeRight">
    <div class="mt-4">
      <Table></Table>
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
        @click="request"
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
import Table from '../../basic/table/Table.vue';

const emits = defineEmits(['request', 'previous'])

function request() {
  emits('request')
}

function previous() {
  emits('previous')
}
</script>