<template>
  <div class="toast-container">
    <TransitionGroup
      name="toast"
      tag="div"
    >
      <ToastMessage
        v-for="toast in useToastStore().toasts"
        :key="toast.id"
        :toast="toast"
      />
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '../composables/useToastStore'
</script>

<style scoped>
.toast-move,
.toast-enter-active,
.toast-leave-active{
  transition: all 0.3s;
}
.toast-leave-active{
  position: absolute !important;
}

.toast-enter-from{
  transform: translateX(-100%) rotate(20deg);
  opacity: 0;
}
.toast-leave-to{
  transform: translateX(-100%) rotate(-20deg);
  opacity: 0;
}

.toast-container {
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
