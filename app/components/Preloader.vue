<template>
  <div v-if="!isLoaded">
    <div
      ref="preloader"
      class="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#111]"
    >
      <!-- LOGO -->
      <h2 class="text-[#FAE8D5] text-[clamp(32px,5vw,52px)] leading-[1] mb-[15px]">
        Seraphic Homes
      </h2>

      <p class="text-[#FAE8D5] text-[clamp(16px,2vw,24px)] font-[500] leading-[1.4]">Your next Big Change</p>

      <!-- LOADING BAR -->
      <div class="mt-8 w-[160px] h-[2px] bg-white/20 overflow-hidden">
        <div
          ref="bar"
          class="h-full w-full bg-[#E96B2C] scale-x-0 origin-left"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useNuxtApp } from "#imports"
// import gsap from "gsap"
import imagesLoaded from "imagesloaded"
import { usePreloader } from "@/composables/usePreloader"
import { useIntroTimeline } from "@/composables/useIntroTimeline"

const { $gsap } = useNuxtApp()
const preloader = ref(null)
const bar = ref(null)

const { isLoaded, finishLoading } = usePreloader()
const { playIntro } = useIntroTimeline()

onMounted(async () => {
  // ----------------------------
  // INITIAL STATE
  // ----------------------------
  $gsap.set(preloader.value, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
  })

  $gsap.set(bar.value, { scaleX: 0 })

  // ----------------------------
  // WAIT FOR FONTS
  // ----------------------------
  if (document.fonts?.ready) {
    await document.fonts.ready
  }

  // ----------------------------
  // WAIT FOR IMAGES
  // ----------------------------
  imagesLoaded(document.body, { background: true }, () => {
    // BAR → 100% (ONLY ONCE)
    $gsap.to(bar.value, {
      scaleX: 1,
      duration: 1,
      ease: "power2.out"
    })

    // EXIT PRELOADER
    $gsap.to(preloader.value, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.15,
      onComplete: () => {
        finishLoading()
        playIntro()
      }
    })
  })
})
</script>
