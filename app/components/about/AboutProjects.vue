<template>
    <section
      ref="sectionRef"
      class="w-full bg-white text-[#1a1a1a]
             px-[15px] md:px-[30px] py-[0px] md:py-[110px] overflow-hidden"
    >
      <div class="mx-auto text-center">
  
        <!-- TITLE -->
        <AnimatedSplit
          ref="title"
          text="Our Projects"
          tag="h2"
          wrap-class="text-[clamp(46px,5.1vw,72px)]  leading-[0.9] font-normal mb-10"
        />
  
        <!-- FLEX PROJECTS ROW -->
        <div
          class="flex flex-col sm:flex-row justify-between gap-12 md:gap-[25px]"
        >
          <div
            v-for="(item, i) in projects"
            :key="i"
            class="flex flex-col w-full sm:w-1/3"
          >
            <img
              :src="item.image"
              alt=""
              class="w-full h-[60vh] md:h-[80vh] object-cover"
            />
  
            <p class="mt-4 text-[clamp(18px,3vw,22px)] font-normal text-left">
              {{ item.title }}
            </p>
          </div>
        </div>
  
        <!-- BUTTON -->
        <div class="mt-12 flex justify-center">
          <Button label="Explore" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import AnimatedSplit from "@/components/AnimatedSplit.vue";
  import Button from "@/components/Button.vue";
  
  // Placeholder images
  import img1 from "@/assets/images/hero.jpg";
  import img2 from "@/assets/images/hero.jpg";
  import img3 from "@/assets/images/hero.jpg";
  
  const sectionRef = ref(null);
  const title = ref(null);
  
  const projects = ref([
    { title: "Project 1", image: img1 },
    { title: "Project 2", image: img2 },
    { title: "Project 3", image: img3 },
  ]);
  
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        title.value?.play();
        observer.disconnect();
      },
      { threshold: 0.25 }
    );
  
    observer.observe(sectionRef.value);
  });
  </script>
  
  <style scoped>
  /* No extra styling required */
  </style>
  