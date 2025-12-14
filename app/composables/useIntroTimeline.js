import gsap from "gsap"

let hasPlayed = false

export function useIntroTimeline() {
  function resetIntro() {
    hasPlayed = false
  }

  function playIntro(payload) {
    // SAFETY GUARDS
    if (!payload || !payload.hero || !payload.header) return
    if (hasPlayed) return

    hasPlayed = true

    const { hero, header } = payload

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    })

    /* ----------------------------
       INITIAL STATES
    ---------------------------- */
    gsap.set(hero.heroImgRef, {
      scale: 1.15,
      filter: "blur(12px)"
    })

    gsap.set(header.headerRef, {
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
