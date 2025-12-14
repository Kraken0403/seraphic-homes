<template>
  <section
    ref="heroRef"
    class="relative w-full h-[75vh] md:h-[90vh] overflow-hidden bg-black"
  >
    <!-- BACKGROUND IMAGE -->
    <img
      :src="heroImage"
      class="absolute inset-0 w-full h-full object-cover opacity-70"
    />

    <!-- CONTENT -->
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-center
             px-[15px] md:px-[30px]"
    >
      <AnimatedSplit
        ref="title"
        text="Contact Us"
        tag="h1"
        wrap-class="
          text-white
          text-[clamp(46px,5.1vw,72px)]
          md:text-[5vw]
          leading-[0.9]
          font-normal
        "
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import heroImage from "@/assets/images/contact-hero-2.jpg"

const heroRef = ref(null)
const title = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries[0].isIntersecting) return
      title.value?.play()
      observer.disconnect()
    },
    { threshold: 0.2 }
  )

  observer.observe(heroRef.value)
})
</script>
