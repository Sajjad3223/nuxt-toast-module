import { ToastManager } from './toastManager'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((_nuxtApp) => {
  _nuxtApp.provide('toaster', ToastManager)
})
