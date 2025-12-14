<template>
  <NuxtLayout>
    <Preloader />
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
import { useRoute, useNuxtApp } from "#app"
import { nextTick } from "vue"
import Preloader from "@/components/Preloader.vue"

const route = useRoute()
const nuxtApp = useNuxtApp()


</script>

<style scoped>

</style>
