import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { Container } from "@/components/Container";
import { Eyebrow } from "@/components/Eyebrow";
import { Display } from "@/components/Display";
import { ProductCard } from "@/components/ProductCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { EASE, prefersReducedMotion } from "@/lib/motion";
import { newArrivals } from "@/data/products";
import { cn } from "@/lib/utils";

const FILTERS = [
  "Todos",
  "T-Shirts",
  "Suéteres",
  "Calças",
  "Cuecas",
  "Relógios",
  "Regatas",
  "Necessaires",
  "Bolsas",
];

export function ProductsGrid() {
  const ref = useRef(null);
  const gridRef = useRef(null);
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? newArrivals
      : newArrivals.filter((p) => p.category === filter);

  useScrollReveal(ref);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const children = Array.from(gridRef.current?.children ?? []);
    if (!children.length) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: EASE,
          stagger: 0.07,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 88%",
            once: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [filter]);

  return (
    <section id="novidades" ref={ref} className="scroll-mt-20 py-20 md:py-30">
      <Container>
        <div className="mb-12 flex flex-wrap items-center justify-between gap-5">
          <div data-reveal>
            <Eyebrow>Novidades</Eyebrow>
            <Display as="h2" size="md" className="mt-4">
              Acabaram de chegar.
            </Display>
          </div>
          <div
            data-reveal
            role="group"
            aria-label="Filtrar produtos"
            className="flex flex-wrap gap-2"
          >
            {FILTERS.map((pill) => (
              <button
                key={pill}
                type="button"
                onClick={() => setFilter(pill)}
                aria-pressed={filter === pill}
                className={cn(
                  "rounded-full border px-[18px] py-[9px] text-xs tracking-[0.03em] transition-colors duration-200",
                  filter === pill
                    ? "border-foreground bg-foreground text-white"
                    : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 xl:gap-x-6"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
