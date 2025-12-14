<template>
  <section
    ref="sectionRef"
    class="relative w-full min-h-[100vh] bg-black text-[#FAE8D5] flex items-center justify-center overflow-hidden"
  >
    <!-- BACKGROUND IMAGE -->
    <img
      :src="heroImage"
      alt="Seraphic Homes"
      class="absolute inset-0 w-full h-full object-cover"
    />

    <!-- OVERLAY -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- CONTENT -->
    <div
      class="relative z-10 text-center px-[15px] md:px-[30px] max-w-[1100px] mx-auto"
    >
      <!-- MAIN TITLE -->
      <AnimatedSplit
        ref="title"
        text="Seraphic Homes"
        tag="h1"
        wrap-class="
          text-[#FAE8D5]
          text-[clamp(46px,5.1vw,72px)]
          leading-[0.9]
          font-normal
        "
      />

      <!-- SUBTITLE -->
      <AnimatedSplit
        ref="subtitle"
        text="A story of the ages | division of Patel Interiors"
        tag="p"
        wrap-class="
          mt-[15px]
          md:mt-[30px]
          text-[clamp(16px,3vw,22px)]
          opacity-90
        "
      />

      <!-- ESTD -->
      <p class="mt-10 text-[12px] tracking-[3px] opacity-80">
        ESTD • 1992
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import heroImage from "@/assets/images/about-hero.png"

const sectionRef = ref(null)
const title = ref(null)
const subtitle = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        title.value?.play()
        setTimeout(() => subtitle.value?.play(), 350)
        observer.disconnect()
      }
    },
    { threshold: 0.3 }
  )

  observer.observe(sectionRef.value)
})
</script>
