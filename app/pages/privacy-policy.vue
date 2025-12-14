<template>
    <div class="w-full bg-white text-[#1a1a1a] overflow-hidden">
  
      <!-- PAGE HEADER -->
      <div class="px-[15px] pt-[150px] md:px-[30px] md:pt-[200px] md:pb-[80px] text-center">
        <AnimatedSplit
          ref="pageTitle"
          text="Privacy Policy"
          tag="h1"
          wrap-class="text-[clamp(46px,5.1vw,72px)] font-normal leading-[1]"
        />
  
        <p class="mt-6 max-w-[720px] mx-auto text-[clamp(16px,3vw,22px)] opacity-70 leading-[1.5]">
          This Privacy Policy explains how Seraphic Homes collects, uses, and protects
          your personal information when you interact with our website, showrooms,
          services, and digital platforms.
        </p>
      </div>
  
      <!-- CONTENT -->
      <div class="px-[15px] md:px-[30px] pb-[110px] max-w-[920px] mx-auto">
  
        <!-- INTRO -->
        <section class="mb-12">
          <p class="text-[clamp(16px,3vw,22px)] leading-[1.7] opacity-90">
            At Seraphic Homes, we respect your privacy and are committed to safeguarding
            the personal information you share with us. This policy outlines what data
            we collect, why we collect it, how it is used, and the choices you have
            regarding your information.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Information We Collect
          </h2>
          <p class="leading-[1.7] opacity-90 mb-4">
            We may collect personal information when you:
          </p>
          <ul class="list-disc pl-6 space-y-2 opacity-90">
            <li>Visit or browse our website</li>
            <li>Submit enquiry or contact forms</li>
            <li>Book appointments, demos, or showroom visits</li>
            <li>Communicate with us via email, phone, WhatsApp, or chat</li>
          </ul>
  
          <p class="leading-[1.7] opacity-90 mt-4">
            This information may include your name, phone number, email address,
            location, preferences, and any details you voluntarily provide.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            How We Use Your Information
          </h2>
          <ul class="list-disc pl-6 space-y-2 opacity-90 leading-[1.7]">
            <li>To respond to your enquiries and requests</li>
            <li>To provide personalized consultations and services</li>
            <li>To improve our website, offerings, and customer experience</li>
            <li>To communicate updates, offers, or service-related information</li>
            <li>To comply with legal and regulatory obligations</li>
          </ul>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Data Sharing & Disclosure
          </h2>
          <p class="leading-[1.7] opacity-90">
            Seraphic Homes does not sell, trade, or rent your personal information to
            third parties. Your data may only be shared with trusted service providers
            who assist us in operating our business, strictly under confidentiality
            obligations, or where required by law.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Cookies & Tracking Technologies
          </h2>
          <p class="leading-[1.7] opacity-90">
            Our website may use cookies and similar technologies to enhance user
            experience, analyze traffic, and understand usage patterns. You can choose
            to disable cookies through your browser settings, though some features of
            the site may not function optimally.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Data Security
          </h2>
          <p class="leading-[1.7] opacity-90">
            We implement reasonable administrative, technical, and physical safeguards
            to protect your personal data against unauthorized access, loss, misuse, or
            disclosure. However, no method of online transmission or storage is
            completely secure.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Your Rights
          </h2>
          <p class="leading-[1.7] opacity-90">
            You have the right to request access, correction, or deletion of your
            personal information held by us, subject to applicable laws. You may also
            opt out of promotional communications at any time.
          </p>
        </section>
  
        <!-- SECTION -->
        <section class="mb-12">
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Policy Updates
          </h2>
          <p class="leading-[1.7] opacity-90">
            This Privacy Policy may be updated periodically to reflect changes in our
            practices or legal requirements. We encourage you to review this page from
            time to time.
          </p>
        </section>
  
        <!-- CONTACT -->
        <section>
          <h2 class="text-[26px] md:text-[32px] font-medium mb-4">
            Contact Us
          </h2>
          <p class="leading-[1.7] opacity-90">
            If you have any questions or concerns regarding this Privacy Policy or how
            your information is handled, please contact us through our official Seraphic
            Homes communication channels.
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
  