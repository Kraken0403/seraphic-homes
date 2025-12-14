<template>
  <section
    v-if="store"
    class="w-full bg-white text-[#1a1a1a] overflow-hidden"
  >
    <!-- ============================== -->
    <!-- HERO SECTION -->
    <!-- ============================== -->
    <div
      class="min-h-screen flex flex-col md:flex-row lg:flex-row px-[15px] pt-[120px] pb-[15px] md:px-[30px] md:pt-[110px] md:gap-[30px] gap-[15px]"
    >
      <!-- LEFT COLUMN -->
      <div class="w-full md:w-[40%] lg:w-[25%] flex flex-col justify-center">

        <!-- TITLE -->
        <AnimatedSplit
          ref="title"
          :text="store.title"
          tag="h1"
          wrap-class="text-[clamp(46px,5vw,50px)] font-normal leading-[1] mb-2"
        />

        <!-- CITY -->
        <p class="text-[16px] md:text-[20px] opacity-70 mb-6">
          {{ store.city.toUpperCase() }}
        </p>

        <!-- DESCRIPTION -->
        <p class="max-w-[380px] text-[15px] leading-[1.7] opacity-80 mb-8">
          {{ store.description }}
        </p>

        <!-- PHONE -->
        <p class="text-[14px] font-semibold mb-1">PHONE NUMBER</p>
        <p class="text-[15px] mb-6">{{ store.phone }}</p>

        <!-- EMAIL -->
        <p class="text-[14px] font-semibold mb-1">EMAIL ID</p>
        <p class="text-[15px] mb-6">{{ store.email }}</p>

        <!-- BUTTON (LOCAL, EXTERNAL SAFE) -->
        <a
          :href="store.mapLink"
          target="_blank"
          rel="noopener"
          class="mt-4 inline-flex w-fit"
        >
          <button class="btn-pill">
            <div class="btn-inner">
              <div class="btn-flex">
                <div class="btn-text top">Get Directions</div>
                <div class="btn-text bottom">Get Directions</div>
              </div>
            </div>
          </button>
        </a>
      </div>

      <!-- RIGHT COLUMN IMAGE -->
      <div class="w-full md:w-[60%] lg:w-[75%] flex items-center justify-center">
        <img
          :src="store.mainImage"
          class="w-full h-[95vh] object-cover"
          draggable="false"
        />
      </div>
    </div>

    <!-- ============================== -->
    <!-- STACKED GALLERY -->
    <!-- ============================== -->
    <div
      class="px-[15px] md:px-[30px] pb-[80px] md:pb-[110px] flex flex-col mx-auto gap-[15px] md:gap-[30px]"
    >
    <img
      v-for="(img, i) in store.gallery"
      :key="i"
      :src="img"
      loading="lazy"
      class="w-full h-[480px] md:h-[600px] object-cover"
      draggable="false"
    />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute, useSeoMeta, createError } from "#imports"

import AnimatedSplit from "@/components/AnimatedSplit.vue"
import { stores } from "@/data/stores"

/* =========================
   PAGE META
========================= */
// definePageMeta({
//   layout: "special",
//   headerLogo: blackLogo
// })
definePageMeta({
  headerTheme: "dark"
})
/* =========================
   ROUTE & DATA
========================= */
const route = useRoute()

const store = computed(() =>
  stores.find(s => s.slug === route.params.slug)
)

if (!store.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Store not found"
  })
}

/* =========================
   SEO
========================= */
useSeoMeta({
  title: `${store.value.title} | Seraphic Homes`,
  description: store.value.description,
  ogTitle: `${store.value.title} | Seraphic Homes`,
  ogDescription: store.value.description,
  ogType: "website"
})

/* =========================
   ANIMATION
========================= */
const title = ref(null)

onMounted(() => {
  title.value?.play?.()
})
</script>

<style scoped>
.btn-pill {
  padding: 12px 22px;
  border-radius: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Instrument Sans", sans-serif;
  font-size: 14px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-variation-settings: "wght" 650;
  cursor: pointer;
  background: #1a1a1a;
  color: #ffffff;
  border: none;
}

/* TEXT STACK — COPIED EXACTLY */
.btn-inner {
  height: 1em;
  overflow: hidden;
  line-height: 1em;
}

.btn-flex {
  display: flex;
  flex-direction: column;
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.btn-pill:hover .btn-flex {
  transform: translateY(-50%);
}
</style>
