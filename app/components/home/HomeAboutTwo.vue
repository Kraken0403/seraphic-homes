<template>
    <section
      ref="sectionEl"
      class="relative z-[20] bg-[#fff] w-full py-[60px] md:py-[160px] px-[20px] md:px-[20px]"
    >
      <!-- MAIN GRID -->
      <div class="grid grid-cols-12 gap-x-[130px] items-start">
  
        <!-- LEFT COLUMN (ABOUT + IMAGE + LIST) -->
        <div class="col-span-12 md:col-span-4">
  
          <!-- ABOUT US LABEL -->
          <p
            class="text-[#111] uppercase text-[16px] flex items-center gap-[5px]
                   font-[900] mb-[10px]"
          >
            <span class="w-[9px] h-[9px] block bg-[#111] rounded-full"></span>
            ABOUT US
          </p>
  
          <!-- IMAGE -->
          <div class="w-full overflow-hidden mb-[10px]">
            <img
              ref="leftImg"
              :src="leftImage"
              class="w-full h-[500px] object-cover"
              draggable="false"
            />
          </div>

          <ul class="space-y-[8px] text-[#111] font-[500] text-[clamp(14px,2vw,18px)]">

            <li class="flex justify-start gap-[5px] border-b border-[#a3a3a3] pb-[5px]">
                <!-- <span class="font-[400] leading-1">10+</span> -->
                <span class="text-[#111] leading-1">10+ Showrooms across India</span>
            </li>

            <li class="flex justify-start gap-[5px] border-b border-[#a3a3a3] pb-1">
                <!-- <span class="font-[400] leading-1"></span> -->
                <span class="text-[#111] leading-1">Exclusive Hästens & Küche 7 partners</span>
            </li>

            <li class="flex justify-start gap-[5px] border-b border-[#a3a3a3] pb-1">
                <!-- <span class="font-[400]"></span> -->
                <span class="text-[#111]">20+ Years Luxury interiors expertise</span>
            </li>

            <li class="flex justify-start gap-[5px] border-b border-[#a3a3a3] pb-1">
                <!-- <span class="font-[400]"></span> -->
                <span class="text-[#111]">Pan-India Presence across key metropolitan cities</span>
                </li>

                <li class="flex justify-start gap-[5px] border-b border-[#a3a3a3] pb-1">
                <!-- <span class="font-[400]"></span> -->
                <span class="text-[#111]">240 Collaborations with world-class brands</span>
                </li>


            </ul>

  
        </div>
  
        <!-- RIGHT COLUMN (TEXT) -->
        <div class="col-span-12 md:col-start-5 md:col-end-11 space-y-[40px]">
  
            <AnimatedSplit
                ref="paragraph"
                tag="p"
                text="At Seraphic Homes, we curate exceptional living environments rooted in craftsmanship, comfort, and enduring design. With a legacy of over two decades in luxury interiors, we bring together the finest global and Indian brands to create spaces that are as functional as they are beautiful."
                wrap-class="text-[clamp(22px,4vw,38px)] font-[700]
                            leading-[1.2] text-[#111]
                            before:content-['']
                            before:inline-block
                            before:w-[5.5rem]
                            before:h-0"
                :char-stagger="0"
                />

  
                <AnimatedSplit
                ref="paragraphTwo"
                tag="p"
                text="As representatives of Hästens, the iconic handcrafted bed brand from Sweden, and Küche 7, India’s leading stainless steel kitchen brand, we deliver a refined approach to modern living—where every detail is intentional and every experience seamless."
                wrap-class="text-[clamp(22px,4vw,38px)] font-[700]
                            leading-[1.2] text-[#111]"
                :char-stagger="0"
                />
  
          <div>
            <Button class="w-auto" label="Get to Know us" href="/contact" />
          </div>
  
        </div>
  
      </div>
    </section>
  </template>
  
  
  
  
  <script setup>
  import { ref, onMounted } from "vue"
  import { useNuxtApp } from "#app"
  
  
  import AnimatedSplit from "@/components/AnimatedSplit.vue"
  import Button from "@/components/Button.vue"
  
  import leftImage from "@/assets/images/ab-3.png"
//   import rightImage from "@/assets/images/right.jpg"
  
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
    $gsap.set([leftImg.value], {
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
      .to([leftImg.value], {
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
  
    // // RIGHT IMAGE — SUBTLE
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
  