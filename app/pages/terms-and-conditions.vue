<template>
    <div class="w-full bg-white text-[#1a1a1a] overflow-hidden">
  
      <!-- PAGE HEADER -->
      <div class="px-[15px] pt-[150px] md:px-[30px] md:pt-[200px] md:pb-[80px] text-center">
        <AnimatedSplit
          ref="pageTitle"
          text="Terms & Conditions"
          tag="h1"
          wrap-class="text-[clamp(46px,5.1vw,72px)] font-normal leading-[1]"
        />
  
        <p class="mt-6 max-w-[720px] mx-auto text-[clamp(16px,3vw,22px)] opacity-70 leading-[1.5]">
          These Terms & Conditions govern your access to and use of the Seraphic Homes
          website, services, showrooms, and all related interactions.
        </p>
      </div>
  
      <!-- CONTENT -->
      <div class="px-[15px] md:px-[30px] pb-[110px] max-w-[920px] mx-auto">
  
        <!-- INTRO -->
        <section class="mb-12">
          <p class="text-[clamp(16px,3vw,22px)] leading-[1.7] opacity-90">
            By accessing or using Seraphic Homes’ website or services, you agree to be
            bound by these Terms & Conditions. If you do not agree with any part of these
            terms, you should discontinue use of our platforms and services.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Use of Website
          </h2>
          <p class="leading-[1.7] opacity-90">
            The content on this website is provided for general information and
            promotional purposes only. You agree not to misuse, reproduce, distribute,
            or exploit any content without prior written permission from Seraphic Homes.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Intellectual Property
          </h2>
          <p class="leading-[1.7] opacity-90">
            All content, designs, images, videos, text, graphics, logos, and branding
            elements displayed on this website are the intellectual property of
            Seraphic Homes unless otherwise stated. Unauthorized use may result in legal
            action.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Services & Information
          </h2>
          <p class="leading-[1.7] opacity-90">
            All information related to products, layouts, pricing, availability,
            timelines, and specifications is indicative and subject to change without
            prior notice. Final details will be confirmed through official consultation
            or documentation.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            User Responsibilities
          </h2>
          <ul class="list-disc pl-6 space-y-2 opacity-90 leading-[1.7]">
            <li>Provide accurate and complete information when submitting forms</li>
            <li>Refrain from attempting to disrupt or compromise website security</li>
            <li>Use the website and services in compliance with applicable laws</li>
          </ul>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Third-Party Links
          </h2>
          <p class="leading-[1.7] opacity-90">
            This website may contain links to third-party websites for convenience.
            Seraphic Homes does not control or endorse the content, policies, or
            practices of such external sites and is not responsible for them.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Limitation of Liability
          </h2>
          <p class="leading-[1.7] opacity-90">
            Seraphic Homes shall not be liable for any direct, indirect, incidental, or
            consequential damages arising from your use of this website or reliance on
            its content, to the fullest extent permitted by law.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Indemnification
          </h2>
          <p class="leading-[1.7] opacity-90">
            You agree to indemnify and hold harmless Seraphic Homes, its directors,
            employees, partners, and affiliates from any claims, losses, damages, or
            liabilities arising out of your use of the website or violation of these
            terms.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Governing Law
          </h2>
          <p class="leading-[1.7] opacity-90">
            These Terms & Conditions shall be governed and interpreted in accordance
            with the laws of India. Any disputes shall be subject to the jurisdiction of
            courts located in India.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Changes to Terms
          </h2>
          <p class="leading-[1.7] opacity-90">
            Seraphic Homes reserves the right to modify or update these Terms &
            Conditions at any time without prior notice. Continued use of the website
            constitutes acceptance of the revised terms.
          </p>
        </section>
  
        <!-- CONTACT -->
        <section>
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Contact Information
          </h2>
          <p class="leading-[1.7] opacity-90">
            For any questions regarding these Terms & Conditions, please contact
            Seraphic Homes through our official communication channels.
          </p>
        </section>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, nextTick } from "vue"
  import AnimatedSplit from "@/components/AnimatedSplit.vue"
  
  definePageMeta({
    headerTheme: "dark"
  })
  
  const pageTitle = ref(null)
  
  onMounted(async () => {
    await nextTick()
    await new Promise(requestAnimationFrame)
    pageTitle.value?.setInitial?.()
    setTimeout(() => {
      pageTitle.value?.play?.()
    }, 60)
  })
  </script>
  
  <style scoped>
  /* intentionally clean */
  </style>
  