<template>
  <div class="flex items-start space-x-4">
    <div class="min-w-0 flex-1">
      <form action="#" class="relative">
        <TextArea></TextArea>

        <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
          <div class="flex items-center space-x-5">

          </div>
          <div class="flex-shrink-0">
            <PrimaryButton @click="post">Post</PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import TextArea from '@/ui/basic/text-area/TextArea.vue';
import PrimaryButton from '@/ui/template/primary-button/PrimaryButton.vue'
import { ContactRepository } from '@/model/domain/contact/ContactRepository'
import { Contact } from '@/model/domain/contact/Contact'

// Contact を投稿する
function post() {
  const contactRepository = new ContactRepository

  const contact = new Contact('', 'komatteimasu')

  contactRepository.create(contact.toObject())
}
</script>
