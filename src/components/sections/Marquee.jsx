import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { cn } from '@/lib/utils'
import { prefersReducedMotion } from '@/lib/motion'
import { marqueeItems } from '@/data/site'

/**
 * Infinite horizontal ticker — content is duplicated once so a -50% loop is seamless.
 */
export function Marquee({ items = marqueeItems, className }) {
  const trackRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !trackRef.current) return undefined

    const ctx = gsap.context(() => {
      gsap.to(trackRef.current, { xPercent: -50, duration: 30, ease: 'none', repeat: -1 })
    }, trackRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className={cn('overflow-hidden border-y border-border py-3.5', className)}>
      <div ref={trackRef} className="flex w-max" aria-hidden>
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-[26px] px-[26px] font-display text-[15px] font-semibold tracking-[-0.01em] text-muted-foreground"
          >
            {item}
            <span aria-hidden className="text-brand">
              —
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
