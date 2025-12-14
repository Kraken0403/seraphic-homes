<template>
  <section
    ref="sectionEl"
    class="relative w-full h-[90vh] md:h-[90vh] px-[15px] overflow-hidden"
  >
    <div class="relative w-full h-full">
      <!-- Background Image -->
      <div class="absolute inset-0 overflow-hidden">
        <img
          ref="imageRef"
          :src="image"
          class="w-full h-full object-cover"
          alt=""
          draggable="false"
        />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <!-- CONTENT -->
      <div
        class="relative h-full flex flex-col gap-[20px] md:gap-[0px]
               md:flex-row justify-end items-bottom
               md:justify-between md:items-end
               px-[20px] md:px-[40px] pb-[40px]"
      >
        <div class="flex flex-col w-[100%] md:w-[60%]">
          <h2 class="text-white text-[clamp(32px,4vw,52px)] mb-[20px] leading-tight">
            {{ title }}
          </h2>

          <p
            class="text-white/90 max-w-lg
                   text-[clamp(18px,3vw,20px)]
                   leading-relaxed"
          >
            {{ description }}
          </p>
        </div>

        <div
          class="w-[100%] md:w-[40%]
                 flex flex-col md:flex-row
                 md:items-end md:justify-end gap-4"
        >
          <Button
            v-if="buttonOneLabel"
            :label="buttonOneLabel"
            bgColor="transparent"
            class="!text-white !border-white"
            @click.prevent="emit('open-sleep-spa')"
          />

          <Button
            v-if="buttonTwoLabel"
            :label="buttonTwoLabel"
            bgColor="transparent"
            class="!text-white !border-white"
            @click.prevent="emit('open-catalogue')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useNuxtApp } from "#app"

defineProps({
  title: String,
  description: String,
  image: String,
  buttonOneLabel: String,
  buttonTwoLabel: String
})

const emit = defineEmits(["open-catalogue", "open-sleep-spa"])

const sectionEl = ref(null)
const imageRef = ref(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  // ✅ SAME AS HomeAbout: start zoomed + blur + slight y
  $gsap.set(imageRef.value, {
    scale: 1.15,
    filter: "blur(12px)",
    y: 30
  })

  // ✅ Reveal once when section enters
  $gsap.to(imageRef.value, {
    scale: 1,
    filter: "blur(0px)",
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: sectionEl.value,
      start: "top 85%",
      once: true
    }
  })
})
</script>

<style scoped></style>
