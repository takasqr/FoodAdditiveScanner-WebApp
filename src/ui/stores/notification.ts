import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {

  const isNotification = ref(false)

  return { isNotification }
})
