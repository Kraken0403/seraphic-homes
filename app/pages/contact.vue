<template>
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
    </div>
  </template>
  
  <script setup>
  import ContactHero from "@/components/contact/ContactHero.vue";
  import ContactInfo from "@/components/contact/ContactInfo.vue";
  import ContactForm from "@/components/contact/ContactForm.vue";
  import ContactMap from "@/components/contact/ContactMap.vue";
  definePageMeta({
    headerTheme: "light"
  })

  </script>
  <style scoped>
  /* empty CSS or optional styles */
  </style>