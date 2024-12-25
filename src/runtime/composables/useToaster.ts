import {useToastStore} from "../composables/useToastStore";
import type {Toast, ToastResult} from "../types";

export const useToaster = () => {
  const toastStore = useToastStore();
  function showToast(message: string, hasButtons: boolean = false, hasTimer: boolean = true): Promise<ToastResult> {
    return new Promise<ToastResult>((resolve, reject) => {
      const id = Math.floor(Math.random() * 100000).toString() + (new Date().toString());

      const toast = {
        id,
        message,
        resolve,
        reject,
        hasButtons,
        hasTimer,
      } as Toast

      // Add toast to store
      toastStore.addToast(toast)
    })
  }

  return{showToast}
}
