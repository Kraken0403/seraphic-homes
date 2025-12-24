<template>
  <footer class="footer pt-[80px] md:pt-[110px] pb-[15px] px-[20px] md:px-[30px]" ref="footerRef">
    <!-- CTA -->
    <div class="footer-cta px-[20px] flex flex-col gap-[0px]">
      <div class="footer-logo">
        <img src="@/assets/images/logo-h-black.png" alt="Seraphic Homes" />
      </div>

      <AnimatedSplit
        ref="titleFooter"
        text="Visit Us"
        tag="h2"
        wrap-class="font-[300] text-[clamp(42px,8.5vw,95px)] leading-[0.9] text-[#1a1a1a]"
      />

      <p
        class="w-full text-center md:w-[50%] text-[clamp(16px,3vw,22px)] font-[500] text-[#1a1a1a] -mt-[20px] md:-mt-[40px]"
      >
        Experience the world of curated luxury living. Book a demo or visit our
        Seraphic Homes showrooms to discover Hästens handcrafted beds and Küche 7
        modular kitchens.
      </p>

      <Button
        label="Book a Demo"
        href="javascript:void(0)"
        @click.prevent="demoOpen = true"
      />
    </div>

    <!-- FOOTER LINKS -->
    <div class="pt-[60px] md:pt-[110px] footer-inner">
      <!-- Left Column -->
      <div class="footer-col">
        <NuxtLink to="/" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Home</span>
              <span class="link-text">Home</span>
            </span>
          </span>
        </NuxtLink>

        <NuxtLink to="/about" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">About Us</span>
              <span class="link-text">About Us</span>
            </span>
          </span>
        </NuxtLink>

        <NuxtLink to="/gallery" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Gallery</span>
              <span class="link-text">Gallery</span>
            </span>
          </span>
        </NuxtLink>

        <NuxtLink to="/contact" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Contact Us</span>
              <span class="link-text">Contact Us</span>
            </span>
          </span>
        </NuxtLink>
      </div>

      <!-- Middle Column -->
      <div class="footer-col">
        <NuxtLink to="/privacy-policy" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Privacy Policy</span>
              <span class="link-text">Privacy Policy</span>
            </span>
          </span>
        </NuxtLink>

        <NuxtLink to="/terms-and-conditions" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Terms & Conditions</span>
              <span class="link-text">Terms & Conditions</span>
            </span>
          </span>
        </NuxtLink>
      </div>

      <!-- Social Column -->
      <div class="footer-col right">
        <a
          href="https://www.instagram.com/seraphichomes/"
          target="_blank"
          rel="noopener"
          class="footer-link"
        >
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Instagram</span>
              <span class="link-text">Instagram</span>
            </span>
          </span>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100090025246960"
          target="_blank"
          rel="noopener"
          class="footer-link"
        >
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">Facebook</span>
              <span class="link-text">Facebook</span>
            </span>
          </span>
        </a>
      </div>

      <!-- Contact Column -->
      <div class="footer-col right">
        <a href="tel:+9198998087532" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">+91-9898087501</span>
              <span class="link-text">+91-9898087501</span>
            </span>
          </span>
        </a>

        <a href="tel:+919898087501" class="footer-link">
          <span class="link-inner">
            <span class="link-flex">
              <span class="link-text">+91-9898087532</span>
              <span class="link-text">+91-98998087532</span>
            </span>
          </span>
        </a>
      </div>
    </div>

    <DemoPopup :open="demoOpen" @close="demoOpen = false" />
  </footer>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import AnimatedSplit from "@/components/AnimatedSplit.vue"
import Button from "@/components/Button.vue"
import DemoPopup from "@/components/DemoPopup.vue"

const footerRef = ref(null)
const titleFooter = ref(null)
let io = null
const demoOpen = ref(false)
onMounted(() => {
  if (typeof window === "undefined") return

  if (!("IntersectionObserver" in window)) {
    titleFooter.value?.play?.()
    return
  }

  io = new IntersectionObserver(
    (entries) => {
      if (entries[0]?.isIntersecting) {
        titleFooter.value?.play?.()
        io.disconnect()
        io = null
      }
    },
    { threshold: 0.2 }
  )

  footerRef.value && io.observe(footerRef.value)
})

onBeforeUnmount(() => {
  io?.disconnect()
  io = null
})
</script>

<style scoped>
.footer-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #1a1a1a;
  cursor: pointer;
}

/* TEXT STACK */
.link-inner {
  height: 1.3em;
  overflow: hidden;
  line-height: 1.3em;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-text {
  line-height: 1.3em;
  white-space: nowrap;
  transform: translateY(0);
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.link-flex {
  display: flex;
  flex-direction: column;
  gap: 0;
  transition: all 0.38s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* HOVER */
.footer-link:hover .link-flex {
  transform: translateY(-50%);
}
</style>

<style scoped src="@/assets/scss/Footer.scss"></style>
