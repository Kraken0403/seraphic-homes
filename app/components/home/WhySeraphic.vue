<template>
    <section
      ref="sectionRef"
      class="relative w-full bg-[#ffffff] overflow-hidden pb-[80px] md:pb-[110px] "
    >
      <!-- ORANGE PATTERN (absolute) -->
      <img
        :src="patternImg"
        alt=""
        class="pointer-events-none select-none absolute left-0 bottom-0 w-[65%] max-w-[460px] opacity-20"
      />
  
      <!-- FLOATING IMAGE (absolute) -->
      <img
        ref="floatImgEl"
        :src="floatImgSrc"
        alt="Why Seraphic Homes"
        class="hidden md:block pointer-events-none select-none absolute right-6 md:right-16 top-1/2 -translate-y-1/2 w-[180px] md:w-[14vw] lg:w-[15.5vw] shadow-xl object-cover"
      />
  
      <!-- GRID: 35% / 65% COLUMNS -->
      <div
        class="relative z-10 w-[100%] mx-auto px-[20px] md:px-[30px]"
      >
        <div class="grid h-auto md:h-screen grid-cols-1 md:grid-cols-[35%_65%] gap-10">
  
          <!-- LEFT COLUMN (TITLE TOP, COLUMN STRETCHED FULL HEIGHT) -->
          <div class="flex flex-col justify-between py-0 ">
            <div>
              <AnimatedSplit
                ref="title"
                text="Why Seraphic Homes"
                tag="h2"
                wrap-class="text-[#1a1a1a] leading-[0.95] text-[clamp(46px,5.1vw,72px)]"
              />
            </div>
            <!-- bottom of column is visually taken by the absolute pattern -->
            <!-- <div class="h-[120px] md:h-[160px]"></div> -->
          </div>
  
          <!-- RIGHT COLUMN (TEXT TOP, BUTTON BOTTOM, FULL HEIGHT) -->
          <div class="flex flex-col justify-end align-bottom py-0  h-full">
            <div class="max-w-[100%] md:max-w-[55%] lg:max-w-[60%]">
              <!-- <AnimatedSplit
                ref="content"
                :text="contentText"
                tag="p"
                wrap-class="text-[#1a1a1a] leading-[1.4] text-[clamp(1rem,1.3vw,1.2rem)] mb-[30px]"
              /> -->
              <p class="text-[clamp(16px,3vw,22px)] text-[#1a1a1a] font-[500] leading-[1.4] mb-[15px]">Seraphic Homes redefines luxury living through authenticity, craftsmanship, and curation.</p>
              <ul class="text-[#1a1a1a] leading-[1.4] text-[clamp(16px,3vw,22px)] mb-[60px] font-[500] space-y-2 list-none">

                <li class="relative pl-[20px] font-[500] leading-[1.4]">
                  <span class="absolute left-0 top-[0.55em] w-2 h-2 bg-[#1a1a1a] rounded-full"></span>
                  <p class="font-[500]"><strong>Exclusive global partnerships</strong> with Hästens & Küche 7.</p>
                </li>

                <li class="relative pl-[20px] font-[500] leading-[1.4]">
                  <span class="absolute left-0 top-[0.55em] w-2 h-2 bg-[#1a1a1a] rounded-full"></span>
                  <p class="font-[500]"><strong>Heritage craftsmanship</strong> and sustainable materials.</p>
  
                </li>

                <li class="relative pl-[20px] font-[500] leading-[1.4]" >
                  <span class="absolute font-[500] leading-[1.4] left-0 top-[0.55em] w-2 h-2 bg-[#1a1a1a] rounded-full"></span>
                  <p class="font-[500]"><strong>Personilzed Luxury Consultations</strong> for every client.</p>
                  
                </li>

                <li class="relative pl-[20px] font-[500] leading-[1.4]">
                  <span class="absolute font-[500] leading-[1.4] left-0 top-[0.55em] w-2 h-2 bg-[#1a1a1a] rounded-full"></span>
                  <p class="font-[500]"><strong>Seemless delivery & installations</strong> by certified experts.</p>
                          
                </li>

                <li class="relative pl-[20px] font-[500] leading-[1.4]">
                  <span class="absolute font-[500] leading-[1.4] left-0 top-[0.55em] w-2 h-2 bg-[#1a1a1a] rounded-full"></span>
                  <p class="font-[500]"><strong>An elevated design journey</strong> ,from concept to completion.</p>
          
                </li>
              </ul>


              <div class="mt-10 md:mt-[30px] w-fit">
                    <Button label="Get in Touch" href="/contact"/>
              </div>
            </div>
  

          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { useNuxtApp } from "#app";
  
  import AnimatedSplit from "@/components/AnimatedSplit.vue";
  import Button from "@/components/Button.vue";
  
  import patternImg from "@/assets/images/icons-group.png";
  import floatImgSrc from "@/assets/images/kids.png";
  
  const sectionRef = ref(null);
  const floatImgEl = ref(null);
  
  const title = ref(null);
  const content = ref(null);
  
  
  
  onMounted(() => {
    const { $gsap } = useNuxtApp();
  
    // Trigger AnimatedSplit when section comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          title.value?.play();
          setTimeout(() => content.value?.play(), 250);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
  
    if (sectionRef.value) observer.observe(sectionRef.value);
  
    // Floating image parallax
    $gsap.to(floatImgEl.value, {
      y: '-340%',
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.value,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });
  </script>
  
  <style scoped>
  /* nothing extra for now */
  </style>
  