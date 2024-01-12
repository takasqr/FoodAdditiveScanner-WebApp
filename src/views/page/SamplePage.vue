<template>
  <PrimaryButton @click="clickButton">Button</PrimaryButton>

  <PrimaryButton @click="clickButton2">Button</PrimaryButton>

  <InputText @change="change" @change-value="changeValue" label="Name"></InputText>

  <TextArea></TextArea>

  <SelectMenu></SelectMenu>
</template>

<script setup lang="ts">
import PrimaryButton from '@/components/basic/PrimaryButton.vue';
import InputText from '@/components/basic/InputText.vue'
import TextArea from '@/components/basic/TextArea.vue'
import SelectMenu from '@/components/basic/SelectMenu.vue'
import { useNotificationStore } from '@/stores/notification'
import { useDialogStore } from '@/stores/dialog'


function clickButton() {

    // 通知をオン
    const notificationStore = useNotificationStore()
    notificationStore.isNotification = true

    // ダイアログを表示
    const dialogStore = useDialogStore()
    dialogStore.open({ title: 'titel', contentText: 'content', cancelButtonText: 'キャn', persistent: true, completion: (isConfirmed) => { console.log('閉じたよ。', isConfirmed) } })
}

function clickButton2() {

    // ダイアログを表示
    const dialogStore = useDialogStore()
    dialogStore.open({ title: 'titele', contentText: 'content', okButtonText: 'o', cancelButtonText: 'can', persistent: true })
}

function change(value: Event) {
    const target = value.target as HTMLInputElement | null
    console.log('change', target?.value)
}

function changeValue(value: string) {
    console.log('changeValue', value)
}
</script>