<template>
  <NuxtLayout>
    <Preloader />
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { useRoute, useNuxtApp } from "#app"

import Preloader from "@/components/Preloader.vue"


</script>

<style scoped>

</style>
