<template>
  <div
    class="toast"
  >
    <div class="z-0 bg-indigo-400/20 outer-shadow w-[150%] right-8 translate-x-1/2 -bottom-16 translate-y-1/2 aspect-square rounded-full absolute" />
    <div class="z-[1] bg-indigo-300/20 outer-shadow w-3/4 right-8 translate-x-1/2 -bottom-4 translate-y-1/2 aspect-square rounded-full absolute" />
    <div class="flex z-[2] items-center gap-2">
      <i class="pi pi-info-circle text-xl text-white/50 animate-pulse" />
      <p>{{ toast.message }}</p>
    </div>
    <div
      v-if="toast.hasButtons"
      class="buttons z-[2]"
    >
      <button
        class="bg-green-300/20 text-green-300 hover:bg-green-300/40 transition-colors duration-300 flex items-center justify-center w-8 aspect-square rounded-full"
        @click="handleAction(toast, 'ok')"
      >
        <i class="pi pi-check text-sm" />
      </button>
      <button
        class="bg-red-300/20 text-red-400 hover:bg-red-300/40 transition-colors duration-300 flex items-center justify-center w-8 aspect-square rounded-full"
        @click="handleAction(toast, 'cancel')"
      >
        <i class="pi pi-times text-sm" />
      </button>
    </div>
    <button
      class="absolute right-2 z-[2] top-2 opacity-60"
      @click="dismissToast(toast.id)"
    >
      <i class="pi pi-times text-sm" />
    </button>
    <div
      v-if="toast.hasTimer"
      class="flex z-[2] h-0.5 toast-progress bg-white absolute bottom-0 inset-x-0"
    />
  </div>
</template>

<script setup lang="ts">
import type { Toast } from '../types'
import { ToastResult } from '../types'
import { useToastStore } from '../composables/useToastStore'

defineProps<{
  toast: Toast
}>()

const toastStore = useToastStore()

const dismissToast = (id: string) => {
  toastStore.removeToast(id)
}

const handleAction = (toast: Toast, action: string) => {
  if (action === 'ok') {
    toastStore.removeToast(toast.id)
    toast.resolve(ToastResult.Confirm)
  }
  else {
    toastStore.removeToast(toast.id)
    toast.resolve(ToastResult.Cancel)
  }
}
</script>

<style scoped>
.toast {
  @apply bg-indigo-500;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 0.5rem;
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: clip;
  width: 300px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
}

.toast-progress{
  animation: toast-progress-anim forwards 5s linear;
}
@keyframes toast-progress-anim {
  0%{
    width:0;
  }
  100%{
    width: 100%;
  }
}

.buttons{
  display: flex;
  align-self: end;
  align-items: center;
  gap: 0.25rem;
}

.inner-shadow{
  box-shadow: inset 0 0 15px 10px rgba(0,0,0,0.05);
}
.outer-shadow{
  box-shadow: 0 0 15px 10px rgba(0,0,0,0.05);
}
</style>
