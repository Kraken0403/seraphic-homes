<template>
  <component
    :is="tag"
    ref="root"
    :class="wrapClass"
  >
    <span
      v-for="(letters, wi) in words"
      :key="`w-${wi}`"
      class="word-wrapper"
      :class="getWordClass(wi)"
    >
      <span class="word-clip">
        <span class="word">
          <span
            v-for="(ch, ci) in letters"
            :key="`c-${wi}-${ci}`"
            class="char"
          >
            {{ ch }}
          </span>
        </span>
      </span>
      <span class="space">&nbsp;</span>
    </span>

    <!-- Accessibility / SEO -->
    <span class="sr-only">{{ text }}</span>
  </component>
</template>

<script setup>
import { ref, computed, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { useNuxtApp } from '#app'

const props = defineProps({
  text: { type: String, required: true },
  tag: { type: String, default: 'h1' },
  wrapClass: { type: String, default: '' },
  duration: { type: Number, default: 0.9 },
  charStagger: { type: Number, default: 0.025 },
  ease: { type: String, default: 'power3.out' },
  wordStyles: { type: Object, default: () => ({}) }
})

const root = ref(null)
const { $gsap } = useNuxtApp()

let destroyed = false
let rafId = null

/* ---------------------------------------
   WORD SPLITTING
--------------------------------------- */
const rawWords = computed(() => props.text.split(' '))
const words = computed(() =>
  rawWords.value.map(word => Array.from(word))
)

/* ---------------------------------------
   WORD CLASS MAP
--------------------------------------- */
const wordClassMap = computed(() => {
  const map = {}
  const wordsArr = rawWords.value

  Object.entries(props.wordStyles).forEach(([phrase, cls]) => {
    const phraseWords = phrase.split(' ')
    const len = phraseWords.length

    for (let i = 0; i <= wordsArr.length - len; i++) {
      if (wordsArr.slice(i, i + len).join(' ') === phrase) {
        for (let j = 0; j < len; j++) map[i + j] = cls
      }
    }
  })

  return map
})

const getWordClass = i => wordClassMap.value[i] || ''

/* ---------------------------------------
   HELPERS
--------------------------------------- */
function getChars() {
  return root.value?.querySelectorAll('.char') || []
}

/* ---------------------------------------
   ANIMATION API
--------------------------------------- */
async function setInitial() {
  if (destroyed) return
  await nextTick()
  if (destroyed) return

  const chars = getChars()
  if (!chars.length) return

  $gsap.killTweensOf(chars)
  $gsap.set(chars, { yPercent: 110, opacity: 0 })
}

async function play() {
  if (destroyed) return
  await setInitial()
  if (destroyed) return

  const chars = getChars()
  if (!chars.length) return

  rafId = requestAnimationFrame(() => {
    if (destroyed) return
    $gsap.to(chars, {
      yPercent: 0,
      opacity: 1,
      duration: props.duration,
      stagger: props.charStagger,
      ease: props.ease,
      clearProps: 'transform'
    })
  })
}

async function reverse() {
  if (destroyed) return
  await nextTick()
  if (destroyed) return

  const chars = getChars()
  if (!chars.length) return

  $gsap.killTweensOf(chars)
  $gsap.to(chars, {
    yPercent: 110,
    opacity: 0,
    duration: props.duration,
    stagger: props.charStagger,
    ease: props.ease
  })
}

/* ---------------------------------------
   LIFECYCLE
--------------------------------------- */
onMounted(setInitial)

onBeforeUnmount(() => {
  destroyed = true
  if (rafId) cancelAnimationFrame(rafId)

  const chars = getChars()
  if (chars.length) $gsap.killTweensOf(chars)
})

defineExpose({ play, setInitial, reverse })
</script>

<style scoped>
.word-wrapper {
  display: inline-flex;
  align-items: flex-start;
}

.word-clip {
  display: inline-block;
  overflow: hidden;
  height: 0.98em;
  line-height: 0.9;
}

.word {
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
}

.char {
  display: inline-block;
  font-size: inherit;
  line-height: inherit;
  will-change: transform, opacity;
}

.space {
  display: inline-block;
}

/* Screen-reader only text */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
}
</style>
