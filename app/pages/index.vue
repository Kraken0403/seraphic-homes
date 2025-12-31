<template>
  <div>
    <HomeHero ref="heroRef" />
    <HomeAbout />
    <HomeProductSection />
    <WhySeraphic />
    <UpcomingProjects />
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, inject } from "vue"
import { useSeoMeta, useNuxtApp } from "#imports"
import { useIntroTimeline } from "@/composables/useIntroTimeline"

import HomeHero from "@/components/home/HomeHero.vue"
import HomeAbout from "@/components/home/HomeAbout.vue"
import HomeProductSection from "@/components/home/HomeProductSection.vue"
import WhySeraphic from "@/components/home/WhySeraphic.vue"
import UpcomingProjects from "@/components/home/UpcomingProjects.vue"

useSeoMeta({
  title: "Luxury Beds & Modular Kitchens in India | Seraphic Homes",
  description:
    "Seraphic Homes is India’s destination for refined luxury living, featuring Hästens handcrafted Swedish beds and Küche 7 premium stainless steel modular kitchens, Wardrobes and Vanities with Miele and Siemens appliances. Experience bespoke interiors in Ahmedabad and across 10 other locations pan India. "
})

const heroRef = ref(null)
const headerInstance = inject("headerInstance")

const { playIntro, resetIntro } = useIntroTimeline()

// ✅ get GSAP + ScrollTrigger from plugin
const { $gsap, $scrollTrigger, $lenis } = useNuxtApp()

onMounted(async () => {
  // 🔒 hard client guard (Nuxt 4 is strict)
  if (!process.client) return

  await nextTick()

  if (!heroRef.value || !headerInstance?.value) return

  // reset intro so it can replay when returning home
  resetIntro()

  // reset hero text state
  heroRef.value.title1?.setInitial?.()
  heroRef.value.title2?.setInitial?.()

  // stop scroll during intro
  $lenis?.stop()

  playIntro({
    hero: heroRef.value,
    header: headerInstance.value
  })

  // after intro, restart + refresh scrolltrigger positions
  setTimeout(() => {
    $lenis?.start()
    $lenis?.resize?.()
    $scrollTrigger?.refresh(true)
  }, 1600)
})
</script>
