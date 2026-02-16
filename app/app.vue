
<template>
  <NuxtLayout>
    <Preloader />
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { useRoute, useNuxtApp } from "#app"

import Preloader from "@/components/Preloader.vue"

useHead({
  meta: [
    {
      name: 'facebook-domain-verification',
      content: '7srzcjjuk0vguakzi4joho76u072dq'
    }
  ]
})
</script>

<style scoped>

</style>
