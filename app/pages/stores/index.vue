<template>
    <div class="w-full bg-white text-[#1a1a1a] overflow-hidden">
  
      <!-- PAGE HEADER -->
      <div class="px-[15px] pt-[150px] md:px-[50px] md:pt-[200px] md:pb-[110px] text-center">
        <AnimatedSplit
          ref="pageTitle"
          text="Our Stores"
          tag="h1"
          wrap-class="text-[clamp(46px,6vw,72px)] font-normal leading-[1]"
        />
  
        <!-- CAPTION -->
        <p class="mt-6 mb-6 max-w-[720px] mx-auto text-[clamp(18px,3vw,20px)] opacity-70 leading-[1.4]">
          Discover Seraphic Homes experience centers across India, where curated
          luxury meets craftsmanship. Visit our stores to explore bespoke interiors,
          handcrafted beds, and premium modular kitchens.
        </p>
      </div>
  
      <!-- STORES GRID -->
      <div class="px-[15px] md:px-[30px] pb-[80px] md:pb-[110px]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
  
          <NuxtLink
            v-for="store in stores"
            :key="store.slug"
            :to="`/stores/${store.slug}`"
            class="group block"
          >
            <!-- CARD -->
            <div class="relative w-full h-[100vh] overflow-hidden">
  
              <!-- IMAGE -->
              <div
                class="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                :style="{ backgroundImage: `url(${store.mainImage})` }"
              />
  
              <!-- DARK GRADIENT -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
  
              <!-- CONTENT -->
              <div class="absolute bottom-0 left-0 z-10 p-6 md:p-8 w-full">
                <div class="flex items-end justify-between gap-6">
  
                  <!-- TEXT -->
                  <div class="flex flex-col w-[80%]">
                    <p class="text-white text-[clamp(24px,3vw,40px)] leading-[1] mb-2">
                      {{ store.title }}
                    </p>
  
                    <p class="text-white/80 text-[clamp(16px,3vw,22px)] mb-3">
                      {{ store.city }}
                    </p>
  
                    <p class="text-white/70 text-[clamp(16px,3vw,22px)] leading-[1.4]">
                      {{ store.description }}
                    </p>
                  </div>
  
                  <!-- ARROW -->
                  <div class="w-[20%] flex justify-end">
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
          </NuxtLink>
  
        </div>
      </div>
  
    </div>
</template>

<script setup>
    import { ref, onMounted } from "vue"
    const nuxtApp = useNuxtApp()
    import AnimatedSplit from "@/components/AnimatedSplit.vue"
    import { stores } from "@/data/stores"
    import blackLogo from '@/assets/images/logo-h-black.png'

    // definePageMeta({
    //     layout: "special",
    //     headerLogo: blackLogo
    // })
    definePageMeta({
      headerTheme: "dark"
    })

    const pageTitle = ref(null)

    onMounted(async () => {
  // 1. wait for DOM
      await nextTick()

      // 2. wait for browser paint (important for big images / layouts)
      await new Promise(requestAnimationFrame)

      // 3. make sure text starts hidden
      pageTitle.value?.setInitial?.()

      // 4. small delay so route overlay + layout are fully settled
      setTimeout(() => {
        pageTitle.value?.play?.()
      }, 60)
    })

</script>
<style scoped>
/* intentionally empty */
</style>
