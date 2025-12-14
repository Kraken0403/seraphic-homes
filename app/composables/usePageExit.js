export function usePageExit() {
    function playDefaultExit({ gsap, el, done }) {
      gsap.to(el, {
        opacity: 0,
        y: -40,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: done
      })
    }
  
    function playHomeExit({ gsap, done }) {
      const hero = document.querySelector("[data-home-hero]")
  
      if (!hero) {
        done()
        return
      }
  
      const tl = gsap.timeline({ onComplete: done })
  
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
  