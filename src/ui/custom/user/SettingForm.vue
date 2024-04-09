<template>
  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

    <div class="sm:col-span-4">
      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">名前</label>
      <div class="mt-2">
        <TextField
         :value="userName"
         @input="inputUserName($event)"
        ></TextField>
      </div>
    </div>

    <div class="sm:col-span-4">
      <label for="username" class="block text-sm font-medium leading-6 text-gray-900">メールアドレス</label>
      <div class="mt-2">
        <TextFieldEmail></TextFieldEmail>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextField from '../../basic/text-field/TextField.vue';
import TextFieldEmail from '../../template/text-field-email/TextFieldEmail.vue';
import { ref } from 'vue'

const userName = ref('')

function inputUserName(event: Event) {

  const target = event.target as HTMLInputElement | null

  if (target) {
    
    userName.value = target.value
  }
}
</script>