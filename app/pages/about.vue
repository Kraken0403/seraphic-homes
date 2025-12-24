<template>
  <div class="about-page w-full overflow-hidden">

    <!-- HERO -->
    <AboutHero />

    <!-- ORIGINS SECTION -->
    <AboutOrigins />
    <AboutProjects />
    <OurTeam />
  </div>
</template>

<script setup>
// Import sections
  import AboutHero from "@/components/about/AboutHero.vue";
  import AboutOrigins from "@/components/about/AboutOrigins.vue";
  import AboutProjects from '@/components/about/AboutProjects.vue'
  import OurTeam from '@/components/about/OurTeam.vue'
  definePageMeta({
    headerTheme: "light"
  })

</script>

<style scoped>
/* optional page-level styles */
</style>
