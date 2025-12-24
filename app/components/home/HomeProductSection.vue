<template>
  <div class="w-[100%] bg-[#fff] flex flex-col gap-[15px] pb-[80px] md:pb-[110px]">
    <!-- Hästens -->
    <HomeProductBlock
      title="HÄSTENS"
      description="For over 170 years, Hästens has been handcrafting beds in Sweden using the finest natural materials. Each bed embodies precision, heritage, and the pursuit of perfect sleep, designed for those who value true rest and lasting comfort."
      :image="hastens"
      buttonOneLabel="BOOK A SLEEP SPA"
      buttonTwoLabel="CATALOGUE"
      @open-catalogue="openCatalogue"
      @open-sleep-spa="openSleepSpa"
    />

    <!-- Küche 7 -->
    <HomeProductBlock
      title="Küche 7"
      description="Indian brand driven by German precision and modern design, Küche 7 creates stainless steel modular kitchens that define contemporary sophistication. Each design balances innovation with functionality, creating spaces that are both beautiful and enduring."
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
import hastens from "@/assets/images/hastens.png"
import hero from "@/assets/images/hero.jpg"

const catalogueOpen = ref(false)
const sleepSpaOpen = ref(false)

const openCatalogue = () => (catalogueOpen.value = true)
const openSleepSpa = () => (sleepSpaOpen.value = true)
</script>
