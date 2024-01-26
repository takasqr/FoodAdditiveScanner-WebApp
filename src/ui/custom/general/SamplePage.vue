<template>

  <SideBarMenu>

    <Breadcrumb></Breadcrumb>

    <Banner></Banner>

    <PrimaryButton @click="clickButton">Button</PrimaryButton>

    <PrimaryButton @click="clickButton2">Button</PrimaryButton>

    <InputText @change="change" @change-value="changeValue" label="Name"></InputText>

    <DropDownMenu></DropDownMenu>

    <div class="flex justify-end">
      <div class="p-10">
        <DropDownMenu></DropDownMenu>
      </div>
    </div>

    <div class="flex justify-start">
      <div class="p-10">
        <DropDownMenu></DropDownMenu>
      </div>
    </div>

    <TextArea></TextArea>

    <SelectMenu></SelectMenu>


    <DatePicker></DatePicker>

    <Feed></Feed>

    <MainMenu></MainMenu>

    <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
      <PrimaryButton>test</PrimaryButton>
    </SlideOver>

    <FloatingButton @click="toggleSlideOver">
      <QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" />
    </FloatingButton>

    <DescriptionList></DescriptionList>

    <ActionPanel title="タイトル"></ActionPanel>

    <Pagination></Pagination>

    <Checkbox></Checkbox>

    <Footer></Footer>
  </SideBarMenu>
</template>

<script setup lang="ts">
import PrimaryButton from '@/ui/basic/PrimaryButton.vue';
import InputText from '@/ui/basic/InputText.vue'
import TextArea from '@/ui/basic/TextArea.vue'
import SelectMenu from '@/ui/basic/SelectMenu.vue'
import { useNotificationStore } from '@/ui/stores/notification'
import { useDialogStore } from '@/ui/stores/dialog'
import SlideOver from '@/ui/basic/SlideOver.vue';
import FloatingButton from '@/ui/basic/FloatingButton.vue'
import { ref } from 'vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import Banner from '@/ui/basic/Banner.vue'
import DropDownMenu from '@/ui/basic/DropDownMenu.vue'
import DatePicker from '@/ui/basic/DatePicker.vue'
import Feed from '@/ui/basic/Feed.vue'
import MainMenu from '@/ui/basic/MainMenu.vue'
import SideBarMenu from '@/ui/basic/SideBarMenu.vue'
import Footer from '@/ui/basic/Footer.vue'
import DescriptionList from '@/ui/basic/DescriptionList.vue'
import Pagination from '@/ui/basic/Pagination.vue'
import Breadcrumb from '@/ui/basic/Breadcrumb.vue'
import ActionPanel from '@/ui/templete/ActionPanel.vue'
import Checkbox from '@/ui/basic/Checkbox.vue'

const isSlideOverOpen = ref(false)

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

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

// SlideOver コンポーネントからのイベントを処理する関数
function handleUpdateIsOpen(value: boolean) {
  isSlideOverOpen.value = value
}
</script>