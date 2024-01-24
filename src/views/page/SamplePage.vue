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
import PrimaryButton from '@/components/basic/PrimaryButton.vue';
import InputText from '@/components/basic/InputText.vue'
import TextArea from '@/components/basic/TextArea.vue'
import SelectMenu from '@/components/basic/SelectMenu.vue'
import { useNotificationStore } from '@/stores/notification'
import { useDialogStore } from '@/stores/dialog'
import SlideOver from '@/components/basic/SlideOver.vue';
import FloatingButton from '@/components/basic/FloatingButton.vue'
import { ref } from 'vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import Banner from '@/components/basic/Banner.vue'
import DropDownMenu from '@/components/basic/DropDownMenu.vue'
import DatePicker from '@/components/basic/DatePicker.vue'
import Feed from '@/components/basic/Feed.vue'
import MainMenu from '@/components/basic/MainMenu.vue'
import SideBarMenu from '@/components/basic/SideBarMenu.vue'
import Footer from '@/components/basic/Footer.vue'
import DescriptionList from '@/components/basic/DescriptionList.vue'
import Pagination from '@/components/basic/Pagination.vue'
import Breadcrumb from '@/components/basic/Breadcrumb.vue'
import ActionPanel from '@/components/basic/ActionPanel.vue'
import Checkbox from '@/components/basic/Checkbox.vue'

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