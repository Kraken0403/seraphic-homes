<template>
  <section
    ref="sectionEl"
    class="relative z-[20] bg-[#fff] w-full min-h-[100vh] py-[130px]
           flex items-center justify-center overflow-hidden px-[20px]"
  >

  <!-- <p class="text-[#111] text-[16px] absolute top-[5px] right-[10px] font-bold uppercase">(About Us)</p> -->
    <!-- LEFT IMAGE WRAPPER -->
    <!-- <div
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
    </div> -->

    <!-- RIGHT IMAGE WRAPPER -->
    <!-- <div
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
    </div> -->

    <!-- CENTER TEXT -->
    <div class="relative flex gap-[30px] w-[100%] z-20 h-[85vh] overflow-hidden justify-between">
        <div class="w-[48%] max-w-[590px] flex flex-col gap-[20px] relative">

          <p
            class="text-[#111] uppercase text-[16px] flex items-center gap-[5px]
                   font-[900] mb-[10px]"
          >
            <span class="w-[9px] h-[9px] block bg-[#111] rounded-full"></span>
            ABOUT US
         </p>

          <p class="text-[clamp(18px,3vw,20px)] text-justify font-[400] leading-[1.4] text-[#1a1a1a]">
            <span class="text-[#E96B2C] font-bold ">At Seraphic Homes,</span> we curate exceptional living environments rooted in craftsmanship, comfort, and enduring design. With a legacy of over two decades in luxury interiors, we bring together the finest global and Indian brands to create spaces that are as functional as they are beautiful. 
          </p>

          <p class="text-[clamp(18px,3vw,20px)] text-justify font-[400] leading-[1.4] text-[#1a1a1a]">
            As proud representatives of <span class="italic font-bold">Hästens</span>, the world’s most iconic handcrafted bed brand from Sweden, and <span class="italic font-bold">Küche 7</span>, India’s leading manufacturer of 100% stainless steel modular kitchens, Wardrobes and Vanities , we offer discerning homeowners an elevated approach to modern living  where every detail is intentional and every experience is seamless.
          </p>

        <div class="mt-auto flex justify-start">
          <Button label="Get in Touch" href="/contact" />
        </div>
      </div>

      <div class="w-[52%] h-full overflow-hidden">

        <img class="w-full h-full object-cover" :src="rightImage" alt="">
      </div>



    </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from "vue"
import { useNuxtApp } from "#app"


import AnimatedSplit from "@/components/AnimatedSplit.vue"
import Button from "@/components/Button.vue"
import rightImage from "@/assets/images/ab-3.png"

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
  // $gsap.set([leftImg.value, rightImg.value], {
  //   scale: 1.15,
  //   filter: "blur(12px)",
  //   y: 30
  // })

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
  .call(() => paragraph.value?.play?.(), null, 0)
  .call(() => paragraphTwo.value?.play?.(), null, 0.25)

  /* -----------------------------
     PARALLAX (ORIGINAL BEHAVIOR)
  ----------------------------- */

  // LEFT IMAGE — FAST, OPPOSITE
  // $gsap.to(leftWrap.value, {
  //   y: "-300%",
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: sectionEl.value,
  //     scrub: true,
  //     start: "top bottom",
  //     end: "bottom top"
  //   }
  // })

  // RIGHT IMAGE — SUBTLE
  // $gsap.to(rightWrap.value, {
  //   y: "20%",
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: sectionEl.value,
  //     scrub: true,
  //     start: "top bottom",
  //     end: "bottom top"
  //   }
  // })
})
</script>



<style scoped>
section {
  perspective: 1000px;
}
</style>
