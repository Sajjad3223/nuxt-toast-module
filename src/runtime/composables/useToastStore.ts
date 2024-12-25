import {defineStore} from "pinia";
import {Ref,ref} from 'vue';
import type {Toast} from "../types";

export const useToastStore = defineStore('toast',() => {
  const toasts: Ref<Toast[]> = ref([])
  const addToast = (toast: Toast) => {
    toasts.value.push(toast)
    if (toast.hasTimer) {
      setTimeout(() => {
        removeToast(toast.id)
      }, 5000)
    }
  }
  const removeToast = (id: string) => {
    toasts.value = [...toasts.value].filter(toast => toast.id !== id)
  }

  return {
    toasts,
    addToast,
    removeToast,
  }
})
