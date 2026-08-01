import { useRef } from 'react'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Display } from '@/components/Display'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { instagramPosts } from '@/data/instagram'
import { siteConfig } from '@/data/site'

export function InstagramSection() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="py-20 md:py-30">
      <Container>
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-10">
          <div data-reveal>
            <Eyebrow>Comunidade</Eyebrow>
            <Display as="h2" size="md" className="mt-4">
              Siga {siteConfig.instagram}
            </Display>
          </div>
          <p
            data-reveal
            data-reveal-delay="0.1"
            className="max-w-xs text-sm leading-[1.7] font-light text-muted-foreground"
          >
            Marque as suas fotos com {siteConfig.hashtag} para aparecer aqui.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 lg:grid-cols-6 lg:gap-3.5">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="#"
              data-reveal
              data-reveal-delay={String((index % 6) * 0.05)}
              className="group relative aspect-square overflow-hidden rounded-lg border border-border"
              aria-label={`${post.alt} — abrir Instagram`}
            >
              <img
                src={post.image}
                alt={post.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center text-[11px] tracking-[0.06em] text-transparent transition-colors duration-300 group-hover:bg-foreground/35 group-hover:text-white">
                {siteConfig.instagram}
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
