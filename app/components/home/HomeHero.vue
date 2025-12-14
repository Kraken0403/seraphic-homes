<template>
  <section data-home-hero 
    ref="heroRef"
    class="relative w-full h-screen overflow-hidden"
  >
    <!-- IMAGE LAYER -->
    <div
      ref="imageWrapRef"
      class="absolute inset-0 z-0 overflow-hidden"
    >
      <img
        ref="heroImgRef"
        :src="heroImg"
        class="absolute w-[120%] h-[120%] object-cover"
        draggable="false"
      />

      <!-- OVERLAY (IMAGE ONLY) -->
      <div
        ref="overlayRef"
        class="absolute inset-0 bg-black  pointer-events-none"
      />
    </div>

    <!-- HERO TEXT (STICKY, SAFE) -->
    <div ref="textWrapRef"
      class="
        absolute w-full z-10 h-screen
        flex flex-col justify-end
        pb-[40px]
        px-[15px] md:px-[30px]
        pointer-events-none
      "
    >
      <AnimatedSplit
        ref="title1"
        text="Crafted Luxury"
        tag="h1"
        wrap-class="
          font-[300]
          text-[clamp(42px,8.5vw,95px)]
          leading-[0.99]
          text-[#FAE8D5]
        "
      />

      <AnimatedSplit
        ref="title2"
        text="for the Modern Home"
        tag="h1"
        wrap-class="
          text-[#FAE8D5]
          text-[clamp(42px,8.5vw,95px)]
          leading-[0.99]
        "
      />
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted, onUnmounted } from "vue"
import { useNuxtApp } from "#app"
import gsap from "gsap"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import heroImg from "@/assets/images/home-hero-2.jpg"

const heroRef = ref(null)
const imageWrapRef = ref(null)
const heroImgRef = ref(null)
const overlayRef = ref(null)
const textWrapRef = ref(null)

const title1 = ref(null)
const title2 = ref(null)

const { $lenis } = useNuxtApp()
const BASE_OPACITY = 0.35
const MAX_OPACITY = 0.75


let rafId = null

onMounted(() => {

  gsap.set(imageWrapRef.value, { y: 0 })
  gsap.set(textWrapRef.value, { y: 0 })
  gsap.set(overlayRef.value, { opacity: BASE_OPACITY })



  const update = () => {
    if (!heroRef.value) return

    const scrollY = $lenis.scroll
    const heroTop = heroRef.value.offsetTop
    const heroHeight = heroRef.value.offsetHeight

    // 0 → 1 progress through hero
    const progress = gsap.utils.clamp(
      0,
      1,
      (scrollY - heroTop) / heroHeight
    )

    // IMAGE PARALLAX (slower than scroll)
    gsap.set(imageWrapRef.value, {
      y: progress * 550
    })

    gsap.set(textWrapRef.value, {
      y: progress * window.innerHeight
    })


    // OVERLAY DARKENING
    gsap.set(overlayRef.value, {
        opacity: BASE_OPACITY + progress * (MAX_OPACITY - BASE_OPACITY)
      })

    rafId = requestAnimationFrame(update)
  }

  rafId = requestAnimationFrame(update)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
})

/* expose for intro timeline */
defineExpose({
  heroRef,
  heroImgRef,
  title1,
  title2
})
</script>
<style scoped></style>