<template>
<section
  data-home-hero
  ref="heroRef"
  class="relative w-full h-screen overflow-hidden"
>
  <!-- IMAGE LAYER -->
  <div
    ref="imageWrapRef"
    class="absolute inset-0 z-0 overflow-hidden"
  >
    <Swiper
      ref="swiperRef"
      class="absolute w-[120%] h-[120%] "
      :modules="[Autoplay]"
      effect="slide"
      :loop="true"
      :speed="1200"
      :autoplay="{ delay: 3500, disableOnInteraction: false }"
    >
      <SwiperSlide v-for="(img, i) in heroImages" :key="i">
        <img
          :src="img"
          class="w-full h-full object-cover"
          draggable="false"
        />
      </SwiperSlide>
    </Swiper>

    <!-- OVERLAY -->
    <div
      ref="overlayRef"
      class="absolute z-[2] inset-0 bg-black pointer-events-none"
    />
  </div>

  <!-- HERO TEXT -->
  <div
    ref="textWrapRef"
    class="
      absolute w-full z-[10] h-screen 
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
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay, EffectFade } from "swiper/modules"
// import gsap from "gsap"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import heroImg from "@/assets/images/home-hero-2.jpg"
import heroImg2 from "@/assets/images/hero.jpg"
import heroImg3 from "@/assets/images/home-hero.jpg"
import heroImg4 from "@/assets/images/home-hero-3.jpeg"

import "swiper/css"
import "swiper/css/pagination"

const heroRef = ref(null)
const imageWrapRef = ref(null)
const heroImgRef = ref(null)
const overlayRef = ref(null)
const textWrapRef = ref(null)

const title1 = ref(null)
const title2 = ref(null)

const { $lenis, $gsap } = useNuxtApp()
const BASE_OPACITY = 0.35
const MAX_OPACITY = 0.75

const heroImages = [
  heroImg,
  heroImg2,
  heroImg3,
  heroImg4,
]

let rafId = null

onMounted(() => {

  $gsap.set(imageWrapRef.value, { y: 0 })
  $gsap.set(textWrapRef.value, { y: 0 })
  $gsap.set(overlayRef.value, { opacity: BASE_OPACITY })



  const update = () => {
    if (!heroRef.value) return

    const scrollY = $lenis.scroll
    const heroTop = heroRef.value.offsetTop
    const heroHeight = heroRef.value.offsetHeight

    // 0 → 1 progress through hero
    const progress = $gsap.utils.clamp(
      0,
      1,
      (scrollY - heroTop) / heroHeight
    )

    // IMAGE PARALLAX (slower than scroll)
    $gsap.set(imageWrapRef.value, {
      y: progress * 550
    })

    $gsap.set(textWrapRef.value, {
      y: progress * window.innerHeight
    })


    // OVERLAY DARKENING
    $gsap.set(overlayRef.value, {
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
  imageWrapRef,
  title1,
  title2
})
</script>
<style scoped></style>