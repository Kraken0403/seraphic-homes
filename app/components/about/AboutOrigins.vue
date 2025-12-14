<template>
    <section
      ref="sectionRef"
      class="relative w-full bg-white text-[#1a1a1a] overflow-hidden
             px-[15px] md:px-[30px] py-[80px] md:py-[110px]"
    >
      <div
        class="w-full mx-auto flex md:flex-row flex-col
               gap-10 min-h-[95vh]"
      >
  
        <!-- LEFT COLUMN -->
        <div class="flex flex-col items-center justify-between w-[100%] md:w-[30%]">
          <AnimatedSplit
            ref="title"
            text="Our Origins"
            tag="h2"
            wrap-class="text-[clamp(46px,5.1vw,72px)] leading-[0.9] font-normal"
          />
  
          <Button
            label="Get in Touch"
            class="hidden md:inline-block mt-10 w-fit md:ml-auto"
          />
        </div>
  
        <!-- RIGHT SIDE (Image + Content) -->
        <div class="flex md:flex-row flex-col gap-10 md:items-end h-full w-full md:w-[70%]">
  
          <!-- FULL-HEIGHT IMAGE WRAPPER -->
          <div class="flex justify-center items-end h-full w-[100%] md:w-[50%]">
            <img
              :src="originImage"
              alt="Origins"
              class="h-[95vh] w-auto object-cover max-w-[520px]"
            />
          </div>
  
          <!-- TEXT COLUMN (NO OVERFLOW) -->
          <div class="flex flex-col w-[100%] justify-end h-full space-y-6 overflow-hidden">
  
            <AnimatedSplit
              ref="para1"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna sit amet turpis varius lacinia. Pellentesque vitae varius erat, eget pulvinar enim. Morbi ac elit malesuada, dictum justo eget."
              tag="p"
              wrap-class="text-[clamp(20px,3vw,22px)] font-[400] leading-[1.4]"
              :char-stagger="0"
            />
  
            <AnimatedSplit
              ref="para2"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id magna sit amet turpis varius lacinia. Pellentesque vitae varius erat, eget pulvinar enim."
              tag="p"
              wrap-class="text-[clamp(20px,3vw,22px)] font-[600] leading-[1.4]"
              :char-stagger="0"
            />
  
          </div>
        </div>
  
      </div>
  
      <!-- Button Mobile -->
      <div class="mt-10 block md:hidden text-center">
        <Button label="Get in Touch" class="w-fit mx-auto" />
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import AnimatedSplit from "@/components/AnimatedSplit.vue";
  import Button from "@/components/Button.vue";
  
  import originImage from "@/assets/images/hero.jpg";
  
  const sectionRef = ref(null);
  const title = ref(null);
  const para1 = ref(null);
  const para2 = ref(null);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
  
        title.value?.play();
        setTimeout(() => para1.value?.play(), 300);
        setTimeout(() => para2.value?.play(), 600);
  
        observer.disconnect();
      },
      { threshold: 0.25 }
    );
  
    observer.observe(sectionRef.value);
  });
  </script>
  