import { useRef } from 'react'
import { Display } from '@/components/Display'
import { Eyebrow } from '@/components/Eyebrow'
import { CTAButton } from '@/components/CTAButton'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useParallax } from '@/hooks/useParallax'
import { editorials } from '@/data/editorials'
import { cn } from '@/lib/utils'

function EditorialBanner({ data, reverse }) {
  const mediaRef = useRef(null)
  useParallax(mediaRef, { speed: 8 })

  return (
    <div className="grid border-y border-border lg:grid-cols-2">
      <div
        ref={mediaRef}
        className={cn(
          'relative min-h-[380px] overflow-hidden lg:min-h-[640px]',
          reverse && 'lg:order-2',
        )}
      >
        <img
          src={data.image}
          alt={data.alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full scale-110 object-cover"
        />
      </div>

      <div
        className={cn(
          'flex flex-col justify-center px-5 py-11 md:px-10 lg:px-[80px] lg:py-[90px]',
          reverse && 'lg:order-1',
        )}
      >
        <Eyebrow data-reveal>{data.eyebrow}</Eyebrow>
        <Display
          as="h2"
          size="xl"
          className="mt-[18px] mb-6"
          data-reveal
          data-reveal-delay="0.05"
        >
          {data.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Display>
        <p
          data-reveal
          data-reveal-delay="0.1"
          className="mb-8 max-w-[400px] text-[15px] leading-[1.8] font-light text-muted-foreground"
        >
          {data.description}
        </p>
        <div data-reveal data-reveal-delay="0.15">
          <CTAButton variant={data.cta.variant} href={data.cta.href} className="w-fit">
            {data.cta.label}
          </CTAButton>
        </div>
      </div>
    </div>
  )
}

export function EditorialBanners() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section ref={ref} id="streetwear" className="scroll-mt-20">
      {editorials.map((editorial, index) => (
        <EditorialBanner key={editorial.eyebrow} data={editorial} reverse={index % 2 === 1} />
      ))}
    </section>
  )
}
