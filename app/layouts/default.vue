<template>
  <div class="relative flex min-h-screen flex-col">

    <!-- TRANSITION OVERLAY (CLIENT ONLY to avoid hydration mismatch) -->
    <ClientOnly>
      <TransitionLayer ref="transitionLayer" />
    </ClientOnly>

    <!-- Header -->
    <Header ref="headerInstance" class="pointer-events-auto" />

    <!-- Page content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, provide } from "vue"
import { useNuxtApp } from "#app"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import TransitionLayer from "@/components/TransitionLayer.vue"

const headerInstance = ref(null)
const transitionLayer = ref(null)

provide("headerInstance", headerInstance)

const nuxtApp = useNuxtApp()

onMounted(() => {
  // attach once layout is mounted (ClientOnly ensures this exists only on client)
  nuxtApp.$transitionLayer = transitionLayer
})
</script>
