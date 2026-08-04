import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/lib/gsap'
import { Container } from '@/components/Container'
import { CTAButton } from '@/components/CTAButton'
import { Marquee } from '@/components/sections/Marquee'
import { useParallax } from '@/hooks/useParallax'
import { EASE, prefersReducedMotion } from '@/lib/motion'
import { siteConfig } from '@/data/site'

const HERO_LINES = ['VISTA-SE', 'COM']

export function Hero() {
  const ref = useRef(null)
  const mediaRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion() || !ref.current) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: EASE } })

      tl.fromTo(
        '[data-hero-line]',
        { yPercent: 115 },
        { yPercent: 0, duration: 1.1, stagger: 0.09 },
      )
        .fromTo(
          '[data-hero-fade]',
          { y: 26, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.12 },
          '-=0.5',
        )
        .fromTo(
          '[data-hero-media]',
          { scale: 1.12, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 1.4, ease: 'power2.out' },
          '-=0.6',
        )
    }, ref)

    return () => ctx.revert()
  }, [])

  useParallax(mediaRef, { speed: 8 })

  return (
    <header ref={ref} id="home" className="scroll-mt-20">
      <Container className="pt-10 md:pt-16">
        <div className="grid items-end gap-9 pb-11 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <h1 className="font-display text-[clamp(52px,6.6vw,104px)] font-[650] leading-[0.98] tracking-[-0.02em]">
            {HERO_LINES.map((line) => (
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <span data-hero-line className="block">
                  {line}
                </span>
              </span>
            ))}
            <span className="block overflow-hidden pb-[0.08em]">
              <span data-hero-line className="block text-brand">
                ESTILO.
              </span>
            </span>
          </h1>

          <div data-hero-fade className="pb-3.5">
            <p className="mb-8 max-w-[380px] text-[15.5px] leading-[1.75] font-light text-muted-foreground">
              Peças essenciais e streetwear premium para o homem que constrói presença através da
              consistência, não do exagero.
            </p>
            <div className="flex flex-col gap-3.5 sm:flex-row">
              <CTAButton href="#novidades">Comprar Agora</CTAButton>
              <CTAButton variant="outline" href="#colecoes">
                Ver Coleção
              </CTAButton>
            </div>
          </div>
        </div>

        <div ref={mediaRef} data-hero-media className="relative aspect-[16/8.2] overflow-hidden rounded-lg">
          <img
            src={siteConfig.heroMedia}
            alt="Editorial XÊ HOMEM"
            fetchPriority="high"
            className="size-full scale-110 object-cover"
          />
          <div className="absolute top-7 right-7 flex size-[52px] items-center justify-center rounded-full bg-white/90 font-display text-[13px] font-bold backdrop-blur-sm">
            {siteConfig.heroIndex}
          </div>
          <div className="absolute bottom-7 left-7 flex items-center gap-2.5 rounded-full bg-white/90 px-5 py-3 text-xs tracking-[0.04em] backdrop-blur-sm">
            <span aria-hidden className="text-gold">
              ✦
            </span>
            {siteConfig.heroTag}
          </div>
        </div>
      </Container>

      <Marquee className="mt-14" />
    </header>
  )
}
