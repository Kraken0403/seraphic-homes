<template>
  <div
    ref="sectionRef"
    class="w-full bg-[#0f0f0f] text-white overflow-hidden
           px-[15px] md:px-[30px] py-[80px] md:py-[110px]"
  >
    <div class="w-full mx-auto">

      <!-- TITLE (UNCHANGED) -->
      <div class="px-[15px] pb-[60px] pt-[80px] md:px-[50px] md:pt-[110px] md:pb-[110px] text-center">
        <AnimatedSplit
          ref="title"
          text="Gallery"
          tag="h1"
          wrap-class="text-[clamp(42px,12vw,100px)] leading-[1] font-normal text-[#e8d9c8]"
        />
      </div>

      <!-- MASONRY GRID -->
      <div class="masonry">
        <div
          v-for="(img, i) in visibleImages"
          :key="img.id"
          class="masonry-item"
          @click="openLightbox(i)"
        >
          <div class="image-wrap">
            <img
              :src="img.src"
              loading="lazy"
              @load="onImageLoad(img.id)"
            />

            <!-- ORANGE LOADER -->
            <div
              v-if="loadingMap[img.id]"
              class="loader-ring"
            />
          </div>
        </div>
      </div>

      <!-- SCROLL TRIGGER -->
      <div ref="loadTrigger" class="h-[1px]" />

      <!-- LIGHTBOX -->
      <ClientOnly>
        <VueEasyLightbox
          :visible="lightboxVisible"
          :imgs="lightboxImages"
          :index="lightboxIndex"
          @hide="lightboxVisible = false"
        />
      </ClientOnly>


    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import VueEasyLightbox from "vue-easy-lightbox"

definePageMeta({
  headerTheme: "light"
})

/* -----------------------
   GALLERY DATA
----------------------- */

// create list dynamically (example: 60 images)
const allImages = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  src: `/gallery/img-${String(i + 1).padStart(3, "0")}.webp`

}))

const BATCH_SIZE = 12
const visibleImages = ref([])
const loadingMap = ref({})
const loadTrigger = ref(null)

let index = 0

function loadNextBatch() {
  const next = allImages.slice(index, index + BATCH_SIZE)
  next.forEach(img => (loadingMap.value[img.id] = true))
  visibleImages.value.push(...next)
  index += BATCH_SIZE
}

function onImageLoad(id) {
  loadingMap.value[id] = false
}

/* -----------------------
   LIGHTBOX
----------------------- */
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const lightboxImages = allImages.map(i => i.src)

function openLightbox(i) {
  lightboxIndex.value = i
  lightboxVisible.value = true
}

/* -----------------------
   TITLE ANIMATION
----------------------- */
const title = ref(null)
const sectionRef = ref(null)

onMounted(() => {
  // Title reveal
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        title.value?.play?.()
        observer.disconnect()
      }
    },
    { threshold: 0.2 }
  )

  if (sectionRef.value) observer.observe(sectionRef.value)

  // Initial load
  loadNextBatch()

  // Infinite scroll
  const loadObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) loadNextBatch()
    },
    { rootMargin: "300px" }
  )

  loadObserver.observe(loadTrigger.value)
})
</script>

<style scoped>
/* MASONRY */
.masonry {
  column-count: 1;
  column-gap: 16px;
}

@media (min-width: 768px) {
  .masonry {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .masonry {
    column-count: 3;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
  cursor: pointer;
}

.image-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.image-wrap img {
  width: 100%;
  height: auto;
  display: block;
  image-orientation: none;
  object-fit: contain; /* optional, prevents aggressive cropping if added later */
}
/* ORANGE LOADING RING */
.loader-ring {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 42px;
  height: 42px;
  border: 4px solid rgba(255, 165, 0, 0.25);
  border-top-color: orange;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
