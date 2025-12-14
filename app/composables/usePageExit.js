export function usePageExit() {
  function playDefaultExit({ el, done }) {
    if (!process.client) {
      done?.()
      return
    }

    const { $gsap } = useNuxtApp()
    if (!$gsap || !el) {
      done?.()
      return
    }

    $gsap.to(el, {
      opacity: 0,
      y: -40,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: done
    })
  }

  function playHomeExit({ done }) {
    if (!process.client) {
      done?.()
      return
    }

    const { $gsap } = useNuxtApp()
    if (!$gsap) {
      done?.()
      return
    }

    const hero = document.querySelector("[data-home-hero]")

    if (!hero) {
      done?.()
      return
    }

    const tl = $gsap.timeline({
      onComplete: done
    })

    tl.to(hero, {
      scale: 0.92,
      filter: "blur(10px)",
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut"
    })
  }

  return {
    playDefaultExit,
    playHomeExit
  }
}
