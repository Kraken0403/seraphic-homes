<template>
  <div class="w-[100%] bg-[#fff] flex flex-col gap-[15px] pb-[80px] md:pb-[110px]">
    <!-- Hästens -->
    <HomeProductBlock
      title="HÄSTENS"
      description="Handcrafted in Sweden since 1852, Hästens beds are handcrafted using the finest natural materials like horse tail hair, wool and cotton and hand-crafter and completely time-honoured techniques. Every bed is a testament to precision, heritage, and the pursuit of exceptional sleep, designed for those who believe true luxury begins with rest."
      :image="hastens"
      buttonOneLabel="BOOK A SLEEP SPA"
      buttonTwoLabel="CATALOGUE"
      @open-catalogue="openCatalogue"
      @open-sleep-spa="openSleepSpa"
    />

    <!-- Küche 7 -->
    <HomeProductBlock
      title="Küche 7"
      description="Küche 7 is one of India’s most premium modular kitchen, wardrobes and vanities, specialising in 100% stainless steel kitchens manufactured entirely in India. Engineered for longevity, hygiene, and modern living, Küche 7 kitchens combine advanced manufacturing with contemporary design.
At Seraphic Homes, Küche 7 kitchens are offered with integrated luxury appliances from Miele and Siemens, ensuring world-class performance, intelligent functionality, and refined aesthetics, creating kitchens, Wardrobes and Vanities that are not only visually striking but built to last a lifetime"
      :image="hero"
      buttonTwoLabel="CATALOGUE"
      @open-catalogue="openCatalogue"
    />

    <!-- 🔥 SHARED POPUP -->
    <CataloguePopup
      :open="catalogueOpen"
      @close="catalogueOpen = false"
    />
    <SleepSpaPopup
      :open="sleepSpaOpen"
      @close="sleepSpaOpen = false"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"

import HomeProductBlock from "@/components/HomeProductBlock.vue"
import CataloguePopup from "@/components/CataloguePopup.vue"
import SleepSpaPopup from "@/components/SleepSpaPopup.vue"
import hastens from "@/assets/images/vividus_interior.jpg"
import hero from "@/assets/images/bar-throw-light.jpeg"

const catalogueOpen = ref(false)
const sleepSpaOpen = ref(false)

const openCatalogue = () => (catalogueOpen.value = true)
const openSleepSpa = () => (sleepSpaOpen.value = true)
</script>
