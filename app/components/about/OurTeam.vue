<template>
    <section
      ref="sectionRef"
      class="w-full bg-white text-[#1a1a1a]
             px-[15px] md:px-[30px] py-[80px] md:py-[110px]"
    >
      
      <!-- TITLE -->
      <div class="mx-auto mb-16 text-center">
        <AnimatedSplit
          ref="title"
          text="Our Team"
          tag="h2"
          wrap-class="text-[clamp(46px,5.1vw,72px)] leading-[0.95] font-normal"
        />
      </div>
  
      <!-- TEAM BLOCKS -->
      <div class="w-full mx-auto space-y-24 md:space-y-[110px]">
  
        <!-- MEMBER 1 -->
        <div class="flex flex-col md:flex-row items-end md:items-end gap-10">
          
          <!-- IMAGE -->
          <img
            :src="img1"
            alt=""
            class="w-full md:w-1/2 h-[65vh] md:h-[100vh] object-cover"
          />
  
          <!-- TEXT -->
          <div class="w-full md:w-1/2 space-y-5">
            <p class="font-semibold text-[clamp(18px,3vw,22px)] w-[100%] md:max-w-[70%]">
              John Doe, CEO of xyz
            </p>
  
            <p class="text-[clamp(16px,3vw,18px)] leading-[1.55] w-[100%] md:max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna
              sit amet turpis varius lacinia. Pellentesque vitae varius erat, eget
              pulvinar enim. Morbi ac elit malesuada, dictum justo eget Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Morbi id magna sit amet
              varius lacinia.
            </p>
  
            <p class="text-[clamp(16px,3vw,18px)] leading-[1.55] w-[100%] md:max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id 
              magna sit amet turpis varius lacinia. Pellentesque vitae varius erat,
              eget pulvinar enim. Morbi ac elit malesuada, dictum justo eget Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna sit
              varius lacinia.
            </p>
          </div>
        </div>
  
        <!-- MEMBER 2 (REVERSED LAYOUT) -->
        <div class="flex flex-col md:flex-row-reverse items-end md:items-end gap-10">
          
          <!-- IMAGE -->
          <img
            :src="img2"
            alt=""
            class="w-full md:w-1/2 h-[65vh] md:h-[100vh] object-cover"
          />
  
          <!-- TEXT -->
          <div class="w-full md:w-1/2 space-y-5">
            <p class="font-semibold ml-auto text-[clamp(18px,3vw,22px)] w-[100%] md:max-w-[70%]">
              John Doe, CEO of xyz
            </p>
  
            <p class="text-[clamp(16px,3vw,18px)] ml-auto leading-[1.55] w-[100%] md:max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna
              sit amet turpis varius lacinia. Pellentesque vitae varius erat, eget
              pulvinar enim. Morbi ac elit malesuada, dictum justo eget Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Morbi id magna sit amet
              varius lacinia.
            </p>
  
            <p class="text-[clamp(16px,3vw,18px)] ml-auto leading-[1.55] w-[100%] md:max-w-[70%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id 
              magna sit amet turpis varius lacinia. Pellentesque vitae varius erat,
              eget pulvinar enim. Morbi ac elit malesuada, dictum justo eget Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna sit
              varius lacinia.
            </p>
          </div>
        </div>
  
      </div>
  
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import AnimatedSplit from "@/components/AnimatedSplit.vue";
  
  import img1 from "@/assets/images/hero.jpg";
  import img2 from "@/assets/images/hero.jpg";
  
  const sectionRef = ref(null);
  const title = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        title.value?.play();
        observer.disconnect();
      },
      { threshold: 0.2 }
    );
  
    if (sectionRef.value) observer.observe(sectionRef.value);
  });
  </script>
  
  <style scoped>
  /* nothing needed */
  </style>
  