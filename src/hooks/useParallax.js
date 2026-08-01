import { useLayoutEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/motion'

/**
 * Subtle vertical parallax on the first <img> (or `selector`) inside `ref`.
 * The image must be oversized (scale-110) to avoid revealing gaps.
 */
export function useParallax(ref, { speed = 10, selector = 'img' } = {}) {
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        selector,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: 'none',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      )
    }, ref)

    return () => ctx.revert()
  }, [ref, speed, selector])
}
