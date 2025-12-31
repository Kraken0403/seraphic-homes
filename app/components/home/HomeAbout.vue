<template>
  <section
    ref="sectionEl"
    class="relative z-[20] bg-[#fff] w-full min-h-[100vh] py-[130px]
           flex items-center justify-center overflow-hidden px-[20px]"
  >
    <!-- LEFT IMAGE WRAPPER -->
    <div
      ref="leftWrap"
      class="absolute hidden md:block
             left-[5%] top-[60%] -translate-y-1/2
             w-[130px] md:w-[14vw] overflow-hidden"
    >
      <img
        ref="leftImg"
        :src="leftImage"
        class="w-full h-full object-cover"
        draggable="false"
      />
    </div>

    <!-- RIGHT IMAGE WRAPPER -->
    <div
      ref="rightWrap"
      class="absolute hidden md:block
             right-[4%] top-[45%] -translate-y-1/2
             w-[150px] md:w-[14vw] overflow-hidden"
    >
      <img
        ref="rightImg"
        :src="rightImage"
        class="w-full h-full object-cover"
        draggable="false"
      />
    </div>

    <!-- CENTER TEXT -->
    <div class="relative w-[100%] md:w-[60vw] text-center z-20">
      <AnimatedSplit
        ref="paragraph"
        tag="p"
        text="At Seraphic Homes, we curate exceptional living environments rooted in craftsmanship, comfort, and enduring design. With a legacy of over two decades in luxury interiors, we bring together the finest global and Indian brands to create spaces that are as functional as they are beautiful. "
        wrap-class="text-[clamp(22px,2vw,42px)] font-[500] leading-[1.4] text-[#1a1a1a]"
        :char-stagger="0"
        :word-styles="{
          'Seraphic Homes': 'text-[#E96B2C] font-[900]',
  
        }"
      />

      <AnimatedSplit
        ref="paragraphTwo"
        tag="p"
        text="As proud representatives of Hästens, the world’s most iconic handcrafted bed brand from Sweden, and Küche 7, India’s leading manufacturer of 100% stainless steel modular kitchens, Wardrobes and Vanities , we offer discerning homeowners an elevated approach to modern living  where every detail is intentional and every experience is seamless"
        wrap-class="text-[clamp(22px,2vw,42px)] font-[500] leading-[1.4] text-[#1a1a1a]"
        :char-stagger="0"
        :word-styles="{
          'Seraphic Homes': 'text-[#E96B2C] font-[900]',
          'Hästens': 'font-[900]',
          'Küche 7': 'font-[900]'
        }"
      />

      <div class="mt-10 flex justify-center">
        <Button label="Get in Touch" href="/contact" />
      </div>
    </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from "vue"
import { useNuxtApp } from "#app"


import AnimatedSplit from "@/components/AnimatedSplit.vue"
import Button from "@/components/Button.vue"

import leftImage from "@/assets/images/left.png"
import rightImage from "@/assets/images/right.jpg"

// gsap.registerPlugin(ScrollTrigger)

const sectionEl = ref(null)

const leftWrap = ref(null)
const rightWrap = ref(null)
const leftImg = ref(null)
const rightImg = ref(null)

const paragraph = ref(null)
const paragraphTwo = ref(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  /* -----------------------------
     INITIAL STATES (REVEAL)
  ----------------------------- */
  $gsap.set([leftImg.value, rightImg.value], {
    scale: 1.15,
    filter: "blur(12px)",
    y: 30
  })

  /* -----------------------------
     INTRO REVEAL (ONCE)
  ----------------------------- */
  const introTl = $gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl.value,
      start: "top 80%",
      once: true
    }
  })

  introTl
    .to([leftImg.value, rightImg.value], {
      scale: 1,
      filter: "blur(0px)",
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      stagger: 0.15
    })
    .add(() => {
      paragraph.value?.play?.()
    }, "-=0.6").add(() => {
      paragraphTwo.value?.play?.()
    }, "-=0.6")

  /* -----------------------------
     PARALLAX (ORIGINAL BEHAVIOR)
  ----------------------------- */

  // LEFT IMAGE — FAST, OPPOSITE
  $gsap.to(leftWrap.value, {
    y: "-300%",
    ease: "none",
    scrollTrigger: {
      trigger: sectionEl.value,
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    }
  })

  // RIGHT IMAGE — SUBTLE
  $gsap.to(rightWrap.value, {
    y: "20%",
    ease: "none",
    scrollTrigger: {
      trigger: sectionEl.value,
      scrub: true,
      start: "top bottom",
      end: "bottom top"
    }
  })
})
</script>



<style scoped>
section {
  perspective: 1000px;
}
</style>
