import { useRef } from 'react'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Display } from '@/components/Display'
import { ProductCard } from '@/components/ProductCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { trending } from '@/data/products'

const NAV_BUTTON = 'static translate-y-0 size-11 rounded-full border-border text-foreground hover:border-foreground hover:bg-transparent hover:text-foreground'

export function TrendingCarousel() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="acessorios" ref={ref} className="scroll-mt-20 py-20 md:py-30">
      <Container>
        <Carousel opts={{ align: 'start', dragFree: true }} className="w-full">
          <div data-reveal className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end md:mb-16 md:gap-10">
            <div>
              <Eyebrow>Em Alta</Eyebrow>
              <Display as="h2" size="md" className="mt-4">
                <span className="block">A tendência</span>
                <span className="block">do momento.</span>
              </Display>
            </div>
            <div className="flex gap-2.5">
              <CarouselPrevious className={NAV_BUTTON} aria-label="Anterior" />
              <CarouselNext className={NAV_BUTTON} aria-label="Seguinte" />
            </div>
          </div>

          <CarouselContent className="-ml-6">
            {trending.map((product) => (
              <CarouselItem
                key={product.id}
                className="basis-[78%] pl-6 sm:basis-[46%] md:basis-[38%] lg:basis-[31%] xl:basis-[24%]"
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  )
}
