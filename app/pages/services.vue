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
        <span class="mb-4 text-[14px] tracking-widest opacity-50">
          {{ String(i + 1).padStart(2, '0') }}
        </span>

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
  title: "Luxury Interior Solutions | Seraphic Homes",
  description: "Premium interiors, kitchens & handcrafted beds."
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
      "Our specialists work closely with you to understand your vision and lifestyle. Each consultation is designed to bring personalized luxury into your home through curated solutions from Hästens and Küche.",
    image: img1
  },
  {
    title: "Interior Design Integration",
    text:
      "We collaborate with your architects and designers to integrate premium kitchens and handcrafted beds seamlessly. Every design complements your space while reflecting refined aesthetics.",
    image: img2
  },
  {
    title: "Customization",
    text:
      "Choose from a range of finishes, textures, and materials to create a design that’s uniquely yours. Our customization ensures every detail aligns with your personality and style.",
    image: img3
  },
  {
    title: "Professional Installation",
    text:
      "Our trained installation experts bring precision and care to every project. Each element is fitted flawlessly to deliver enduring performance and aesthetic excellence.",
    image: img4
  },
  {
    title: "After-Sales Support",
    text:
      "Our commitment extends beyond installation. From product guidance to maintenance, our after-sales team ensures your experience remains seamless and satisfying.",
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
