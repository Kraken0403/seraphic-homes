<template>
    <Teleport to="body">
      <div
        ref="layer"
        class="fixed inset-0 z-[9999] pointer-events-none"
      >
        <div
          ref="bg"
          class="absolute inset-0 bg-black"
        />
      </div>
    </Teleport>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue"
  import { useNuxtApp } from "#app"
  
  const layer = ref(null)
  const bg = ref(null)
  
  const nuxtApp = useNuxtApp()
  const gsap = nuxtApp.$gsap
  
  let _resolveReady
  const ready = new Promise((resolve) => {
    _resolveReady = resolve
  })
  
  onMounted(() => {
    // DOM is NOW guaranteed
    gsap.set(bg.value, {
      scaleY: 0,
      transformOrigin: "top"
    })
    _resolveReady()
  })
  
  async function playOut(done) {
    await ready
  
    gsap.set(bg.value, {
      scaleY: 0,
      transformOrigin: "bottom"
    })
  
    gsap.to(bg.value, {
      scaleY: 1,
      duration: 0.65,
      ease: "power3.inOut",
      onComplete: done
    })
  }
  
  async function playIn(done) {
    await ready
  
    gsap.to(bg.value, {
      scaleY: 0,
      transformOrigin: "top",
      duration: 0.65,
      ease: "power3.inOut",
      onComplete: done
    })
  }
  
  defineExpose({
    playOut,
    playIn,
    ready
  })
  </script>
  