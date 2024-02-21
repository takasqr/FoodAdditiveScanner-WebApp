<template>

  <!-- <NavigationDrawer> -->

    <Breadcrumb></Breadcrumb>

    <Banner></Banner>

    <PrimaryButton @click="clickButton">Button</PrimaryButton>

    <PrimaryButton @click="clickButton2">Button</PrimaryButton>

    <TextField @change="change" @change-value="changeValue" label="Name"></TextField>

    <Menu></Menu>

    <div class="flex justify-end">
      <div class="p-10">
        <Menu></Menu>
      </div>
    </div>

    <div class="flex justify-start">
      <div class="p-10">
        <Menu></Menu>
      </div>
    </div>

    <TextArea></TextArea>

    <!-- <Select :data="options"></Select> -->


    <DatePicker></DatePicker>

    <!-- <Feed></Feed> -->


    <SlideOver :is-open="isSlideOverOpen" @update:isOpen="handleUpdateIsOpen">
      <PrimaryButton>test</PrimaryButton>
    </SlideOver>

    <FloatingButton @click="toggleSlideOver">
      <QuestionMarkCircleIcon class="h-12 w-12" aria-hidden="true" />
    </FloatingButton>

    <Table></Table>

    <ActionCard title="タイトル"></ActionCard>

    <Pagination></Pagination>

    <Checkbox title="利用規約に同意"></Checkbox>

    <Footer></Footer>
  <!-- </NavigationDrawer> -->
</template>

<script setup lang="ts">
import PrimaryButton from '@/ui/template/primary-button/PrimaryButton.vue';
import TextField from '@/ui/basic/text-field/TextField.vue'
import TextArea from '@/ui/basic/text-area/TextArea.vue'
import Select from '@/ui/basic/select/Select.vue'
import { NotificationStore } from '@/ui/basic/notification/NotificationStore'
import { DialogStore } from '@/ui/basic/dialog/DialogStore'
import SlideOver from '@/ui/basic/slide-over/SlideOver.vue';
import FloatingButton from '@/ui/basic/floating-button/FloatingButton.vue'
import { ref } from 'vue'
import { QuestionMarkCircleIcon } from '@heroicons/vue/24/outline'
import Banner from '@/ui/basic/banner/Banner.vue'
import Menu from '@/ui/basic/menu/Menu.vue'
import DatePicker from '@/ui/basic/date-picker/DatePicker.vue'
import Feed from '@/ui/basic/feed/Feed.vue'
import NavigationDrawer from '@/ui/basic/navigation-drawer/NavigationDrawer.vue'
import Footer from '@/ui/template/footer-simple/FooterSimple.vue'
import Table from '@/ui/basic/table/Table.vue'
import Pagination from '@/ui/basic/pagination/Pagination.vue'
import Breadcrumb from '@/ui/basic/breadcrumb/Breadcrumb.vue'
import ActionCard from '@/ui/template/action-card/ActionCard.vue'
import Checkbox from '@/ui/basic/checkbox/Checkbox.vue'

const isSlideOverOpen = ref(false)

interface Option {
  id: number;
  name: string;
}

const options: Option[] = [
  { id: 1, name: 'SPY' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
  { id: 7, name: 'Caroline Schultz' },
  { id: 8, name: 'Mason Heaney' },
  { id: 9, name: 'Claudie Smitham' },
  { id: 10, name: 'Emil Schaefer' },
]

function toggleSlideOver() {
  isSlideOverOpen.value = !isSlideOverOpen.value
}

function clickButton() {

    // 通知をオン
    const notificationStore = NotificationStore()
    notificationStore.isNotification = true

    // ダイアログを表示
    const dialogStore = DialogStore()
    dialogStore.open({ title: 'titel', contentText: 'content', cancelButtonText: 'キャn', persistent: true, completion: (isConfirmed) => { console.log('閉じたよ。', isConfirmed) } })
}

function clickButton2() {

    // ダイアログを表示
    const dialogStore = DialogStore()
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