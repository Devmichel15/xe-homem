import { useRef } from 'react'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Display } from '@/components/Display'
import { CTAButton } from '@/components/CTAButton'
import { CountUp } from '@/components/CountUp'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { featuredCollection } from '@/data/featuredCollection'

export function FeaturedCollection() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="border-y border-border bg-secondary py-20 md:py-30">
      <Container>
        <div className="grid items-center gap-11 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[70px]">
          <div data-reveal>
            <Eyebrow>{featuredCollection.eyebrow}</Eyebrow>
            <Display as="h2" size="lg" className="my-5 md:mb-6">
              {featuredCollection.title}
            </Display>
            <p className="mb-9 max-w-[400px] text-[15px] leading-[1.8] font-light text-muted-foreground">
              {featuredCollection.description}
            </p>

            <div className="mb-10 flex gap-11">
              {featuredCollection.stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    className="font-display text-[34px] font-bold"
                  />
                  <p className="mt-1 text-[11.5px] tracking-[0.06em] text-faint uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <CTAButton href={featuredCollection.cta.href}>
              {featuredCollection.cta.label}
            </CTAButton>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <img
              data-reveal="left"
              src={featuredCollection.images.tall}
              alt={featuredCollection.images.tallAlt}
              loading="lazy"
              decoding="async"
              className="row-span-2 aspect-[0.62/1] w-full rounded-lg border border-border object-cover"
            />
            {featuredCollection.images.short.map((image, index) => (
              <img
                key={image.alt}
                data-reveal="right"
                data-reveal-delay={String(index * 0.1)}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[1.1/1] w-full rounded-lg border border-border object-cover"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
