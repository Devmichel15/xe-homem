import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { prefersReducedMotion } from '@/lib/motion'

/**
 * Animated number that counts up when it scrolls into view.
 */
export function CountUp({ value, decimals = 0, suffix = '', className }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (prefersReducedMotion()) {
      el.textContent = `${value.toFixed(decimals)}${suffix}`
      return undefined
    }

    const state = { current: 0 }
    const tween = gsap.to(state, {
      current: value,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      onUpdate: () => {
        el.textContent = `${state.current.toFixed(decimals)}${suffix}`
      },
    })

    return () => {
      tween.kill()
      tween.scrollTrigger?.kill?.()
    }
  }, [value, decimals, suffix])

  return (
    <span ref={ref} className={className}>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}
