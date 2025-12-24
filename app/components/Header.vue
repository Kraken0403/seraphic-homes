<template>
  <header
    ref="headerRef"
    class="absolute top-0 left-0 right-0 z-50 w-full py-6 px-[15px] md:px-[30px] flex items-center justify-between"
  >
    <!-- LOGO -->
    <div class="logo-wrapper w-[50%] md:w-[35%]">
      <NuxtLink to="/" class="flex items-center">
        <img
          :src="computedLogo"
          alt="Seraphic Homes"
          class="w-[220px] h-auto"
        />
      </NuxtLink>
    </div>

    <!-- DESKTOP NAV -->
    <nav
      class="hidden md:flex items-center gap-10 text-[14px] uppercase tracking-wide font-[600]"
      :style="{ color: computedNavColor }"
    >


      <NuxtLink to="/about" class="nav-link">
        <span class="nav-inner"><span class="nav-flex">
          <span class="nav-text">About Us</span>
          <span class="nav-text">About Us</span>
        </span></span>
      </NuxtLink>

      <NuxtLink to="/gallery" class="nav-link">
        <span class="nav-inner"><span class="nav-flex">
          <span class="nav-text">Gallery</span>
          <span class="nav-text">Gallery</span>
        </span></span>
      </NuxtLink>

      

      <NuxtLink to="/stores" class="nav-link">
        <span class="nav-inner"><span class="nav-flex">
          <span class="nav-text">Store Locator</span>
          <span class="nav-text">Store Locator</span>
        </span></span>
      </NuxtLink>

      <NuxtLink to="/services" class="nav-link">
        <span class="nav-inner"><span class="nav-flex">
          <span class="nav-text">Services</span>
          <span class="nav-text">Services</span>
        </span></span>
      </NuxtLink>

      <NuxtLink to="/contact" class="nav-link">
        <span class="nav-inner"><span class="nav-flex">
          <span class="nav-text">Contact</span>
          <span class="nav-text">Contact</span>
        </span></span>
      </NuxtLink>
    </nav>

    <!-- DESKTOP BUTTON -->
    <div class="hidden md:block">
      <Button
        label="Catalogue"
        href="javascript:void(0)"
        @click.stop.prevent="openPopup = true"
      />
    </div>

    <!-- MOBILE HAMBURGER -->
    <button
      class="md:hidden w-[44px] h-[44px] rounded-full border border-current flex flex-col items-center justify-center gap-[5px]"
      :style="{ color: computedNavColor }"
      @click="toggleMenu"
    >
      <span ref="line1" class="w-[18px] h-[2px] bg-current"></span>
      <span ref="line2" class="w-[18px] h-[2px] bg-current"></span>
      <span ref="line3" class="w-[18px] h-[2px] bg-current"></span>
    </button>

    <!-- MOBILE MENU -->
    <Teleport to="body">
      <div
        ref="overlayRef"
        class="fixed inset-0 bg-black/40 opacity-0 pointer-events-none z-[40]"
        @click="closeMenu"
      />

      <div
        ref="menuRef"
        class="fixed inset-x-0 top-0 h-screen bg-[#111111] z-[45] md:hidden flex items-center"
      >
        <nav
          class="flex flex-col gap-[10px] px-[15px] py-[40px] text-[32px] font-[600] uppercase leading-[1] text-white"
        >
          <NuxtLink @click="closeMenu" to="/services">
            <AnimatedSplit ref="m1" text="Services" tag="p" :char-stagger="0" />
          </NuxtLink>
          <NuxtLink @click="closeMenu" to="/about">
            <AnimatedSplit ref="m2" text="About Us" tag="p" :char-stagger="0" />
          </NuxtLink>
          <NuxtLink @click="closeMenu" to="/gallery">
            <AnimatedSplit ref="m3" text="Gallery" tag="p" :char-stagger="0" />
          </NuxtLink>
          <NuxtLink @click="closeMenu" to="/stores">
            <AnimatedSplit ref="m4" text="Store Locator" tag="p" :char-stagger="0" />
          </NuxtLink>
          <NuxtLink @click="closeMenu" to="/contact">
            <AnimatedSplit ref="m5" text="Contact" tag="p" :char-stagger="0" />
          </NuxtLink>
        </nav>

        <div class="absolute bottom-0 w-full p-[30px] text-white">
          <p ref="insta">Instagram</p>
          <p ref="fb">Facebook</p>
        </div>
      </div>
    </Teleport>

    <CataloguePopup
      :open="openPopup"
      :logo="computedLogo"
      @close="openPopup = false"
    />
  </header>
</template>

<script setup>
import { ref, onMounted, computed, watch, onUnmounted  } from "vue"
import { useRoute, useNuxtApp } from "#app"
// import gsap from "gsap"

import AnimatedSplit from "@/components/AnimatedSplit.vue"
import Button from "@/components/Button.vue"
import CataloguePopup from "@/components/CataloguePopup.vue"

import lightLogo from "@/assets/images/logo-h-white.png"
import darkLogo from "@/assets/images/logo-h-black.png"

const route = useRoute()
const { $lenis, $gsap } = useNuxtApp()

/* -------------------------
   HEADER THEME (ONLY ADDITION)
------------------------- */
const headerTheme = computed(() => route.meta?.headerTheme || "light")

const computedLogo = computed(() =>
  headerTheme.value === "dark" ? darkLogo : lightLogo
)

const computedNavColor = computed(() =>
  headerTheme.value === "dark" ? "#1a1a1a" : "#ffffff"
)

/* -------------------------
   EXISTING STATE (UNCHANGED)
------------------------- */
const openPopup = ref(false)
const menuOpen = ref(false)

const menuRef = ref(null)
const overlayRef = ref(null)
const line1 = ref(null)
const line2 = ref(null)
const line3 = ref(null)
const headerRef = ref(null)

const m1 = ref(null)
const m2 = ref(null)
const m3 = ref(null)
const m4 = ref(null)
const m5 = ref(null)
const insta = ref(null)
const fb = ref(null)

let textPlayed = false
let tl

onMounted(() => {
  $gsap.set(menuRef.value, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
  })

  $gsap.set(overlayRef.value, {
    opacity: 0,
    pointerEvents: "none"
  })

  tl = $gsap.timeline({ paused: true, defaults: { ease: "power4.out" } })

  tl.to(menuRef.value, {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 0.7
  })

  tl.add(() => {
    if (!menuOpen.value || textPlayed) return
    textPlayed = true
    ;[m1, m2, m3, m4, m5, insta, fb].forEach(r => r.value?.play?.())
  }, 0.55)

  tl.to(overlayRef.value, { opacity: 1, pointerEvents: "auto", duration: 0.3 }, 0)
  tl.to(line1.value, { y: 7, rotate: 45, duration: 0.3 }, 0)
  tl.to(line2.value, { opacity: 0, duration: 0.2 }, 0)
  tl.to(line3.value, { y: -7, rotate: -45, duration: 0.3 }, 0)
})

function toggleMenu() {
  menuOpen.value ? closeMenu() : openMenu()
}

function openMenu() {
  menuOpen.value = true
  textPlayed = false
  ;[m1, m2, m3, m4, m5, insta, fb].forEach(r => r.value?.setInitial?.())
  $lenis?.stop()
  tl.timeScale(1).play()
}

function closeMenu() {
  menuOpen.value = false
  tl.timeScale(1.5).reverse().eventCallback("onReverseComplete", () => {
    $lenis?.start()
  })
}

defineExpose({ headerRef })
</script>

<style scoped>
/* unchanged styles */
.nav-link { display: inline-flex; align-items: center; color: inherit }
.nav-inner { height: 1em; overflow: hidden }
.nav-flex { display: flex; flex-direction: column; transition: transform 0.38s cubic-bezier(0.25,0.46,0.45,0.94) }
.nav-text { line-height: 1em; white-space: nowrap }
.nav-link:hover .nav-flex { transform: translateY(-50%) }
</style>
