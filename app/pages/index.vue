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
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import HomeHero from "@/components/home/HomeHero.vue"
import HomeAbout from "@/components/home/HomeAbout.vue"
import HomeProductSection from "@/components/home/HomeProductSection.vue"
import WhySeraphic from "@/components/home/WhySeraphic.vue"
import UpcomingProjects from "@/components/home/UpcomingProjects.vue"

gsap.registerPlugin(ScrollTrigger)

useSeoMeta({
  title: "Seraphic Homes | Luxury Living Redefined",
  description:
    "Seraphic Homes creates thoughtfully designed luxury residences that blend architecture, comfort, and timeless elegance."
})

const heroRef = ref(null)
const headerInstance = inject("headerInstance")

const { playIntro, resetIntro } = useIntroTimeline()
const { $lenis } = useNuxtApp()

onMounted(async () => {
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
    ScrollTrigger.refresh(true)
  }, 1600)
})
</script>
