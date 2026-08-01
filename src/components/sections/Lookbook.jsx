import { useRef } from 'react'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { looks } from '@/data/lookbook'
import { cn } from '@/lib/utils'

export function Lookbook() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section className="py-20 md:py-30">
      <Container>
        <SectionHeader
          eyebrow="Lookbook"
          title={
            <>
              <span className="block">Editorial</span>
              <span className="block">Noite Urbana.</span>
            </>
          }
          description="Uma narrativa visual sobre presença e atitude, capturada nas ruas de Luanda."
        />

        <div className="grid grid-cols-12 gap-5">
          {looks.map((look, index) => (
            <figure
              key={look.id}
              data-reveal
              data-reveal-delay={String(index * 0.06)}
              className={cn(
                'group relative col-span-12 overflow-hidden rounded-lg border border-border',
                look.span,
                look.aspect,
              )}
            >
              <img
                src={look.image}
                alt={look.alt}
                loading="lazy"
                decoding="async"
                className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-[18px] left-[18px] rounded-full bg-white/90 px-4 py-[9px] text-[11px] tracking-[0.05em] backdrop-blur-sm">
                {look.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
