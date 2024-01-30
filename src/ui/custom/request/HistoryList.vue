<template>
  <div class="mb-4">
    <ActionCard title="1/30 申し込み">
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:actionArea>
        <PrimaryButton>支払い</PrimaryButton>
      </template>
    </ActionCard>
  </div>
  <div class="mb-4">
    <ActionCard title="12/25 完了">
      <template #default>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
      </template>

      <template v-slot:actionArea>
        <PrimaryButton>支払い</PrimaryButton>
      </template>
    </ActionCard>
  </div>
  <Pagination></Pagination>
</template>

<script setup lang="ts">
import ActionCard from '@/ui/template/action-card/ActionCard.vue';
import Pagination from '@/ui/basic/pagination/Pagination.vue'
import PrimaryButton from '@/ui/template/primary-button/PrimaryButton.vue';
</script>