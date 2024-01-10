<template>
  <PrimaryButton @click="clickButton">Button</PrimaryButton>

  <InputText @change="change" @change-value="changeValue" label="Name"></InputText>

  <TextArea></TextArea>

  <SelectMenu></SelectMenu>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/basic/PrimaryButton.vue';
import InputText from '@/components/basic/InputText.vue'
import TextArea from '@/components/basic/TextArea.vue'
import SelectMenu from '@/components/basic/SelectMenu.vue'

function clickButton() {
    console.log('c')
}

function change(value: Event) {
    const target = value.target as HTMLInputElement | null
    console.log('change', target?.value)
}

function changeValue(value: string) {
    console.log('changeValue', value)
}
</script>