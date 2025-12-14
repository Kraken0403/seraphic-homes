let hasPlayed = false

export function useIntroTimeline() {
  function resetIntro() {
    hasPlayed = false
  }

  async function waitForRefs(hero, header, maxTries = 20) {
    let tries = 0

    return new Promise((resolve) => {
      const check = () => {
        if (
          hero?.heroImgRef &&
          header?.headerRef &&
          hero?.title1 &&
          hero?.title2
        ) {
          resolve(true)
        } else if (tries < maxTries) {
          tries++
          requestAnimationFrame(check)
        } else {
          resolve(false)
        }
      }

      check()
    })
  }

  async function playIntro(payload) {
    // 🔒 SSR + SAFETY
    if (!process.client) return
    if (!payload || !payload.hero || !payload.header) return
    if (hasPlayed) return

    const { hero, header } = payload

    // ✅ wait until refs actually exist (KEY FIX)
    const ready = await waitForRefs(hero, header)
    if (!ready) return

    hasPlayed = true

    const { $gsap } = useNuxtApp()
    if (!$gsap) return

    const tl = $gsap.timeline({
      defaults: { ease: "power3.out" }
    })

    /* ----------------------------
       INITIAL STATES
    ---------------------------- */
    $gsap.set(hero.heroImgRef, {
      scale: 1.15,
      filter: "blur(12px)"
    })

    $gsap.set(header.headerRef, {
      y: -30,
      opacity: 0
    })

    hero.title1?.setInitial?.()
    hero.title2?.setInitial?.()

    /* ----------------------------
       HERO IMAGE
    ---------------------------- */
    tl.to(hero.heroImgRef, {
      scale: 1,
      filter: "blur(0px)",
      duration: 1.4
    })

    /* ----------------------------
       HERO TEXT
    ---------------------------- */
    tl.add(() => hero.title1?.play?.(), "-=0.9")
    tl.add(() => hero.title2?.play?.(), "-=0.6")

    /* ----------------------------
       HEADER
    ---------------------------- */
    tl.to(
      header.headerRef,
      {
        y: 0,
        opacity: 1,
        duration: 0.6
      },
      "-=0.5"
    )
  }

  return {
    playIntro,
    resetIntro
  }
}
