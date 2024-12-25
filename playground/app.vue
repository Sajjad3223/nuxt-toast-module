<template>
  <div>
    Nuxt module playground!
  </div>
  <button @click="toast.addToast('asdadw')" class="ml-auto self-end flex">Show Toast</button>
  <ToastContainer />
</template>

<script setup>
const toast = ToastManager();
</script>
