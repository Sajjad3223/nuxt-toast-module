<template>
  <div>
    Nuxt module playground!
  </div>
  <button
    class="ml-auto self-end flex"
    @click="toast.addToast('asdadw')"
  >
    Show Toast
  </button>
  <ToastContainer />
</template>

<script setup>
const toast = ToastManager()
</script>
