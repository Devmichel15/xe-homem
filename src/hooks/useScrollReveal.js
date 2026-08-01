import { useLayoutEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { EASE, prefersReducedMotion } from '@/lib/motion'

const STARTS = {
  up: { y: 48 },
  down: { y: -48 },
  left: { x: -56 },
  right: { x: 56 },
  scale: { scale: 0.94 },
  fade: {},
}

function resolve(from) {
  const to = {}
  for (const key of Object.keys(from)) {
    if (key === 'x') to.x = 0
    if (key === 'y') to.y = 0
    if (key === 'scale') to.scale = 1
  }
  return to
}

/**
 * Reveals every element matching `selector` inside `ref` as it scrolls into view.
 *
 * Usage: <div data-reveal="left" data-reveal-delay="0.1" />.
 * Types: up | down | left | right | scale | fade.
 */
export function useScrollReveal(ref, { selector = '[data-reveal]', start = 'top 88%' } = {}) {
  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return undefined

    const ctx = gsap.context(() => {
      const items = ref.current.querySelectorAll(selector)
      items.forEach((el) => {
        const type = el.dataset.reveal || 'up'
        const from = STARTS[type] || STARTS.up
        const delay = Number.parseFloat(el.dataset.revealDelay || '0')

        gsap.fromTo(
          el,
          { autoAlpha: 0, ...from },
          {
            autoAlpha: 1,
            ...resolve(from),
            duration: 0.9,
            ease: EASE,
            delay,
            scrollTrigger: { trigger: el, start, once: true },
          },
        )
      })
    }, ref)

    return () => ctx.revert()
  }, [ref, selector, start])
}
