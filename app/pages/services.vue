<template>
  <div ref="pageRef" class="w-full bg-white text-[#1a1a1a] overflow-hidden">

    <!-- ========================= -->
    <!-- SERVICE ROWS -->
    <!-- ========================= -->
    <div
      v-for="(service, i) in services"
      :key="i"
      :ref="el => serviceRows[i] = el"
      class="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      <!-- CONTENT -->
      <div
        class="
          flex flex-col justify-center items-center text-center
          px-[15px] md:px-[80px]
          py-[120px] md:py-0
          order-1
        "
        :class="i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
      >
        <!-- <span class="mb-4 text-[14px] tracking-widest opacity-50">
          {{ String(i + 1).padStart(2, '0') }}
        </span> -->

        <AnimatedSplit
          :ref="el => titleRefs[i] = el"
          :text="service.title"
          tag="h2"
          wrap-class="
            text-center leading-[0.95]
            text-[clamp(46px,5.1vw,72px)]
            mb-6
          "
        />

        <AnimatedSplit
          :ref="el => paraRefs[i] = el"
          :text="service.text"
          tag="p"
          wrap-class="
            text-center
            text-[clamp(16px,3vw,22px)]
            font-[400]
            leading-[1.4]
            opacity-80
            max-w-[640px]
          "
          :char-stagger="0"
        />
      </div>

      <!-- IMAGE -->
      <div
        class="h-[50vh] lg:h-screen order-2"
        :class="i % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
      >
        <img
          :src="service.image"
          class="w-full h-full object-cover"
          draggable="false"
        />
      </div>
    </div>

    <!-- ========================= -->
    <!-- CUSTOMER SERVICE FORM -->
    <!-- ========================= -->
    <div
      class="
        w-full bg-white text-center
        px-[15px] md:px-[30px]
        py-[80px] md:py-[110px]
      "
    >
      <AnimatedSplit
        ref="customerTitle"
        text="Customer Service"
        tag="h2"
        wrap-class="
          text-center leading-[0.95]
          text-[clamp(46px,5.1vw,72px)]
          mb-10
        "
      />

      <form class="max-w-[650px] mx-auto flex flex-col gap-6">
        <input class="border p-3 bg-gray-100" placeholder="Name" />
        <input class="border p-3 bg-gray-100" placeholder="Email" />
        <input class="border p-3 bg-gray-100" placeholder="Phone" />
        <textarea rows="4" class="border p-3 bg-gray-100" placeholder="Message" />
        <Button label="Submit" />
      </form>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue"
import { useSeoMeta } from "#imports"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import Button from "@/components/Button.vue"

/* SEO */
useSeoMeta({
  title: "Luxury Interior Solutions | Hästens Beds & Küche 7 Kitchens, Wardrobes and Vanities | Seraphic Homes",
  description: "From personalized consultation to installation and after-sales care, Seraphic Homes offers bespoke interior solutions featuring Hästens handcrafted beds and Küche 7 stainless steel modular kitchens, wardrobes and vanities with premium appliances."
})

definePageMeta({
  headerTheme: "dark"
})
// definePageMeta({ layout: "default" })

/* DATA */
import img1 from "@/assets/images/consultation.jpg"
import img2 from "@/assets/images/interior-2.jpg"
import img3 from "@/assets/images/customization.jpg"
import img4 from "@/assets/images/prof-installation.jpg"
import img5 from "@/assets/images/after-sales.jpg"

const services = ref([
  {
    title: "Luxury Consultation",
    text:
      "Our experts take the time to understand your lifestyle, preferences, and spatial requirements. Each consultation is tailored to curate the ideal solution using Hästens beds and Küche 7 kitchens wardrobes and vanities, ensuring a perfect balance of comfort, design, and performance.",
    image: img1
  },
  {
    title: "Interior Design Integration",
    text:
      "We collaborate seamlessly with architects and interior designers to integrate our products into your home. Every element is designed to complement your space while maintaining aesthetic harmony and functional excellence.",
    image: img2
  },
  {
    title: "Customization",
    text:
      "Choose from a wide range of finishes, configurations, and materials. From kitchen layouts to bed specifications, every detail is customised to reflect your personal style and requirements.",
    image: img3
  },
  {
    title: "Professional Installation",
    text:
      "Our trained specialists ensure precise installation with uncompromising attention to detail. Each project is executed to deliver lasting performance, durability, and visual elegance.",
    image: img4
  },
  {
    title: "After-Sales Support",
    text:
      "Our relationship continues beyond installation. From maintenance guidance to ongoing support, our after-sales team ensures peace of mind and long-term satisfaction",
    image: img5
  }
])

/* REFS */
const serviceRows = []
const titleRefs = []
const paraRefs = []
const customerTitle = ref(null)

/* OBSERVER */
function observeRow(row, title, para) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) return

      title?.setInitial?.()
      para?.setInitial?.()

      title?.play?.()
      para?.play?.()

      observer.disconnect()
    },
    { threshold: 0.3 }
  )

  observer.observe(row)
}

onMounted(async () => {
  await nextTick()

  serviceRows.forEach((row, i) => {
    observeRow(row, titleRefs[i], paraRefs[i])
  })

  // Customer title is safe (single element)
  customerTitle.value?.setInitial?.()
  customerTitle.value?.play?.()
})
</script>


<style scoped>
/* intentionally empty */
</style>
