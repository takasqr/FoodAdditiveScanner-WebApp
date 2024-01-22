<template>
  <div class="mb-4">
    <ActionPanel title="1/30 申し込み">
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:actionArea>
        <PrimaryButton>支払い</PrimaryButton>
      </template>
    </ActionPanel>
  </div>
  <div class="mb-4">
    <ActionPanel title="12/25 完了">
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:actionArea>
        <PrimaryButton>支払い</PrimaryButton>
      </template>
    </ActionPanel>
  </div>
  <Pagination></Pagination>
</template>

<script setup lang="ts">
import ActionPanel from '@/components/basic/ActionPanel.vue';
import Pagination from '@/components/basic/Pagination.vue'
import PrimaryButton from '@/components/basic/PrimaryButton.vue';
</script>