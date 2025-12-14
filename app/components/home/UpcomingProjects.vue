<template>
  <section
    ref="sectionRef"
    class="relative w-full bg-white overflow-hidden pb-[80px] md:pb-[110px] "
  >
    <!-- MAIN CONTAINER -->
    <div class="relative z-10 w-full mx-auto px-[20px] md:px-[30px]">
      <div class="grid grid-cols-1 md:grid-cols-[25%_75%] gap-10">

        <!-- LEFT COLUMN -->
        <div class="flex flex-col justify-between">
          <AnimatedSplit
            ref="title"
            text="Store Locations"
            tag="h2"
            wrap-class="text-[#1a1a1a] leading-[0.95] text-[clamp(46px,5.1vw,72px)]"
          />

          <div class="flex items-center justify-center md:items-end md:justify-end gap-[15px] mt-[15px]">
            <button
              @click="swiper?.slidePrev()"
              class="text-3xl opacity-60 hover:opacity-100 transition"
            >
              ←
            </button>

            <span class="text-xl opacity-70">
              {{ activeIndex + 1 }}/{{ projects.length }}
            </span>

            <button
              @click="swiper?.slideNext()"
              class="text-3xl opacity-60 hover:opacity-100 transition"
            >
              →
            </button>
          </div>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="relative">
          <!-- CLIP WRAPPER -->
          <div class="overflow-hidden pr-[15px] md:pr-[30px]">
            <Swiper
              class="w-full"
              :slides-per-view="1"
              :space-between="15"
              :breakpoints="{
                768: { slidesPerView: 2 }
              }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
            <SwiperSlide
              v-for="(item, i) in projects"
              :key="i"
            >
              <!-- FULL CARD LINK -->
              <a
                :href="item.map"
                target="_blank"
                rel="noopener"
                class="group block"
              >
                <!-- CARD -->
                <div
                  class="relative w-full h-[90vh] overflow-hidden card"
                  :style="{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }"
                >
                  <!-- IMAGE SCALE LAYER -->
                  <div class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.06]"
                    :style="{ backgroundImage: `url(${item.image})` }"
                  />

                  <!-- DARK GRADIENT -->
                  <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

                  <!-- CONTENT -->
                  <div class="absolute bottom-0 left-0 z-10 p-6 md:p-8 w-full">
                    <div class="flex items-end justify-between gap-6">
                      
                      <!-- TEXT -->
                      <div class="flex flex-col w-[80%]">
                        <p class="text-white text-[clamp(16px,3vw,22px)] font-[500] leading-[1]">
                          {{ item.title }}
                        </p>
                        <p class="text-white/80 text-[clamp(16px,3vw,22px)] mt-[5px]">
                          {{ item.caption }}
                        </p>
                        <p class="text-white/70 text-[clamp(16px,3vw,22px)] mt-[20px] leading-[1.4]">
                          {{ item.address }}
                        </p>
                      </div>

                      <!-- ARROW BUTTON -->
                      <div class="w-[20%]">
                        <div
                            class="w-[52px] h-[52px] rounded-full bg-[#1a1a1a] flex items-center justify-center transition-transform duration-500"
                          >
                            <svg
                              class="w-5 h-5 text-white transition-transform duration-500 -rotate-45 group-hover:rotate-0"
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
                </div>
              </a>
            </SwiperSlide>


            </Swiper>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import AnimatedSplit from "@/components/AnimatedSplit.vue";

import proj1 from "@/assets/images/kid.png";
import proj2 from "@/assets/images/rajkot.jpg";

const sectionRef = ref(null);
const title = ref(null);

const swiper = ref(null);
const activeIndex = ref(0);

const projects = ref([
  { 
    title: "Ahmedabad", 
    image: proj1,
    caption: 'Seraphic Homes', 
    address: '5th Floor, Eyecon Corporate House, Opp Allen Institute, Sindhubhavan hall Lane, Off Sindhu Bhavan Road, Ahmedabad 380054, Gujarat',
    map: 'https://maps.app.goo.gl/uHYFESMKGcY2csiC8'
  },
  { 
    title: "Rajkot", 
    image: proj2,
    caption: 'Patel Interiors PVT. LTD.', 
    address: 'Opp. Masoom School, Opp, Selenium Sky Apartment off Kalawad Road,Mota Mauva,Rajkot-360005',
    map: "https://maps.app.goo.gl/n3podk3YHd3s1hvK6"
  },
  { title: "Surat", image: proj1 },
  { title: "Vadodara", image: proj2 },
  { title: "Mumbai", image: proj1 }
]);

function onSwiper(instance) {
  swiper.value = instance;
}

function onSlideChange(instance) {
  activeIndex.value = instance.activeIndex;
}

let io = null;

onMounted(() => {
  // SSR safety: IntersectionObserver exists only in browser
  if (typeof window === "undefined") return;
  if (!("IntersectionObserver" in window)) {
    // fallback: just play immediately
    title.value?.play?.();
    return;
  }

  io = new IntersectionObserver(
    (entries) => {
      if (entries?.[0]?.isIntersecting) {
        title.value?.play?.();
        io?.disconnect();
        io = null;
      }
    },
    { threshold: 0.2 }
  );

  if (sectionRef.value) io.observe(sectionRef.value);
});

onBeforeUnmount(() => {
  io?.disconnect();
  io = null;
});
</script>

<style scoped>
/* intentionally empty */
</style>
