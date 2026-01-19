<template>
    <section
      ref="sectionRef"
      class="relative w-full bg-[#ffffff] overflow-hidden pb-[80px] md:pb-[160px]"
    >
      <!-- TITLE + CAPTION -->
      <div class="flex flex-col items-center justify-center mb-[60px]">
        <p
          class="text-[#111] uppercase text-[16px] flex items-center gap-[5px]
                 font-[900] mb-[10px]"
        >
          <span class="w-[9px] h-[9px] block bg-[#111] rounded-full"></span>
          WHY US
        </p>
  
        <AnimatedSplit
          ref="title"
          text="What we do Best"
          tag="h2"
          wrap-class="text-[#111] leading-[0.95] text-center text-[clamp(42px,5.1vw,72px)] mb-5"
        />
  
        <p
          class="text-[#111] max-w-[692px] mb-7 text-[clamp(18px,3vw,20px)]
                 leading-[1.6] text-center"
        >
        Seraphic Homes is more than a showroom,  it is a destination for thoughtfully curated luxury for your next big change.
        </p>
  
        <Button label="Learn More" href="/about" />
      </div>
  
      <!-- DESKTOP FULLSCREEN -->
      <div class="hidden md:block relative w-screen h-[120vh] overflow-hidden">
  
        <!-- BACKGROUND IMAGES -->
        <div
          v-for="(item, i) in items"
          :key="i"
          class="absolute inset-0 w-full transition-opacity duration-[700ms]"
          :class="activeIndex === i ? 'opacity-100' : 'opacity-0'"
        >
          <img
            :ref="el => imageRefs[i] = el"
            :src="item.image"
            class="w-full h-full object-cover"
          />
        </div>
  
        <!-- DARK OVERLAY -->
        <div class="absolute inset-0 bg-black/45 z-[5]"></div>
  
        <!-- GRID -->
        <div class="relative z-10 h-full grid grid-cols-3 grid-rows-2">
          <div
            v-for="(item, i) in items"
            :key="item.title"
            class="group relative flex flex-col justify-end px-10 py-10 cursor-pointer
                   border-t border-l border-white/20
                   [&:nth-child(-n+3)]:border-t-0
                   [&:nth-child(3n+1)]:border-l-0"
            @mouseenter="setActive(i)"
          >
  
            <!-- DOT -->
            <span
              class="absolute top-6 left-6 w-2.5 h-2.5 rounded-full
                     bg-white/50 transition-all duration-300
                     group-hover:bg-white group-hover:scale-110"
            ></span>
  
            <!-- TITLE -->
            <h3
              class="text-white text-[clamp(18px,3vw,22px)]
                     font-[500] leading-[1.6] max-w-[75%]
                     transition-transform duration-500
                     group-hover:-translate-y-1"
            >
              {{ item.title }}
            </h3>
  
            <!-- ARROW -->
            <div
              class="absolute bottom-8 right-8 w-[44px] h-[44px]
                     rounded-full border border-white/40
                     flex items-center justify-center
                     opacity-0 translate-x-[-6px]
                     transition-all duration-500
                     group-hover:opacity-100
                     group-hover:translate-x-0"
            >
              <svg
                class="w-5 h-5 text-white -rotate-45 transition-transform duration-500
                       group-hover:rotate-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
  
          </div>
        </div>
      </div>
  
      <!-- MOBILE -->
      <div class="md:hidden px-[15px] py-[80px] space-y-10">
        <h2 class="text-[clamp(36px,6vw,48px)] leading-[1]">
          Why Seraphic Homes
        </h2>
  
        <p class="text-[clamp(16px,4vw,18px)] leading-[1.4]">
          Seraphic Homes is more than a showroom — it is a destination for
          thoughtfully curated luxury.
        </p>
  
        <div v-for="item in items" :key="item.title" class="space-y-4">
          <img :src="item.image" class="w-full h-[220px] object-cover rounded-lg" />
          <p class="font-[500]">{{ item.title }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useNuxtApp } from '#app'
  import AnimatedSplit from '@/components/AnimatedSplit.vue'
  import Button from '@/components/Button.vue'
  
  import img1 from '@/assets/images/about-hero.png'
  import img2 from '@/assets/images/ab-2.jpeg'
  import img3 from '@/assets/images/viv.jpg'
  import img4 from '@/assets/images/hero.jpg'
  import img5 from '@/assets/images/interior-2.jpg'
  import img6 from '@/assets/images/prof-installation.jpg'
  
  const sectionRef = ref(null)
  const title = ref(null)
  const activeIndex = ref(0)
  const imageRefs = []
  
  const items = [
    { title: 'Exclusive partnerships with Hästens and Küche 7', image: img1 },
    { title: 'A strong focus on craftsmanship, durability, and premium materials', image: img2 },
    { title: 'Bespoke consultations tailored to your lifestyle and space', image: img3 },
    { title: 'Seamless execution by certified installation teams', image: img4 },
    { title: 'A refined, end-to-end journey from concept to completion', image: img5 },
    { title: 'Thoughtfully curated solutions for modern living', image: img6 },
  ]
  
  function setActive(index) {
    if (index === activeIndex.value) return
  
    const { $gsap } = useNuxtApp()
  
    const img = imageRefs[index]
    if (!img) return
  
    // reset first
    $gsap.set(img, {
      scale: 1.15,
      filter: 'blur(12px)'
    })
  
    // animate in
    $gsap.to(img, {
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.1,
      ease: 'power3.out'
    })
  
    activeIndex.value = index
  }
  
  onMounted(() => {
    const { $gsap } = useNuxtApp()
  
    // initial image animation
    const firstImg = imageRefs[0]
    if (firstImg) {
      $gsap.set(firstImg, {
        scale: 1.15,
        filter: 'blur(12px)'
      })
  
      $gsap.to(firstImg, {
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.1,
        ease: 'power3.out'
      })
    }
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          title.value?.play()
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
  
    if (sectionRef.value) observer.observe(sectionRef.value)
  })
  </script>
  