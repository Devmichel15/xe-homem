import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/Container'
import { SectionHeader } from '@/components/SectionHeader'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { categories } from '@/data/categories'
import { cn } from '@/lib/utils'

function CategoryCard({ data, className }) {
  return (
    <a
      href={data.href}
      data-reveal
      className={cn(
        'group relative block overflow-hidden rounded-lg border border-border',
        className,
      )}
    >
      <img
        src={data.image}
        alt={data.alt}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 to-transparent p-7">
        <div>
          <span className="font-display text-[26px] font-[650] text-white">{data.name}</span>
          <span className="mt-1 block text-[11.5px] tracking-[0.1em] text-white/75 uppercase">
            {data.count}
          </span>
        </div>
        <span className="flex size-[38px] shrink-0 items-center justify-center rounded-full bg-white text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:bg-brand group-hover:text-white">
          <ArrowUpRight className="size-3.5" strokeWidth={2} />
        </span>
      </div>
    </a>
  )
}

export function Categories() {
  const ref = useRef(null)
  useScrollReveal(ref)

  return (
    <section id="colecoes" ref={ref} className="scroll-mt-20 py-20 md:py-30">
      <Container>
        <SectionHeader
          eyebrow="Categorias"
          title={
            <>
              <span className="block">O guarda-roupa,</span>
              <span className="block">organizado.</span>
            </>
          }
          actions={
            <a
              href="#novidades"
              className="inline-flex items-center gap-2 whitespace-nowrap border-b border-foreground pb-[5px] text-[12.5px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 hover:gap-3.5 hover:border-brand hover:text-brand"
            >
              Ver todas
              <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          }
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <CategoryCard data={categories.main} className="aspect-[4/5] lg:aspect-auto lg:min-h-full" />

          <div className="flex flex-col gap-6 md:flex-row lg:flex-col">
            {categories.stack.map((category) => (
              <CategoryCard
                key={category.name}
                data={category}
                className="aspect-[16/9.4] md:flex-1 lg:flex-none"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
