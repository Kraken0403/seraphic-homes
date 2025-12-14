import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const router = nuxtApp.$router

  let isFirstLoad = true

  router.beforeEach(async (to: any, from: any) => {
    // Skip on first load
    if (isFirstLoad) return true

    const layer = nuxtApp.$transitionLayer?.value
    if (!layer?.playOut) return true

    await new Promise<void>((resolve) => {
      layer.playOut(resolve)
    })

    return true
  })

  router.afterEach(async () => {
    if (isFirstLoad) {
      isFirstLoad = false
      return
    }

    const layer = nuxtApp.$transitionLayer?.value
    if (!layer?.playIn) return

    await new Promise<void>((resolve) => {
      layer.playIn(resolve)
    })

    nuxtApp.$lenis?.resize?.()
    nuxtApp.$lenis?.start()
  })
})
