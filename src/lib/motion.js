export const EASE = 'power3.out'
export const EASE_CAMPAIGN = 'power2.out'

export const DURATION = {
  fast: 0.5,
  base: 0.9,
  slow: 1.2,
}

export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const formatPrice = (value) => {
  const formatted = new Intl.NumberFormat('pt-AO', { maximumFractionDigits: 0 }).format(value)
  return `${formatted} Kz`
}
