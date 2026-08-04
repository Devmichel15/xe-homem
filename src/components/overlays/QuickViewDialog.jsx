import { useState } from 'react'
import { CheckCircle2, Minus, Package, Plus, ShoppingBag } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { CTAButton } from '@/components/CTAButton'
import { ProductBadge } from '@/components/ProductBadge'
import { useStore } from '@/hooks/useStore'
import { formatPrice } from '@/lib/motion'
import { cn } from '@/lib/utils'

const SIZES = ['M', 'L', 'XL', 'XXL']

function QuickViewContent({ product }) {
  const { addToCart, setIsCartOpen } = useStore()
  const [size, setSize] = useState(SIZES[1])
  const [qty, setQty] = useState(1)

  const handleAdd = () => {
    addToCart(product, qty)
    setIsCartOpen(true)
  }

  return (
    <DialogContent className="max-h-[90vh] max-w-4xl gap-0 overflow-y-auto p-0">
      <div className="grid md:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg border-b border-border md:aspect-auto md:rounded-none md:rounded-l-lg md:border-r md:border-b-0">
          <img src={product.image} alt={product.name} className="size-full object-cover" />
          {product.badge && (
            <ProductBadge tone={product.badge.tone}>{product.badge.label}</ProductBadge>
          )}
        </div>

        <div className="flex flex-col p-6 md:p-8">
          <p className="text-[10.5px] tracking-[0.1em] text-faint uppercase">
            {product.category}
          </p>

          <DialogHeader className="mt-2">
            <DialogTitle className="font-display text-2xl font-[650] tracking-[-0.02em]">
              {product.name}
            </DialogTitle>
          </DialogHeader>

          <p className="mt-2 flex items-baseline gap-2 text-lg font-semibold">
            {formatPrice(product.price)}
            {product.compareAtPrice && (
              <s className="text-sm font-normal text-faint">
                {formatPrice(product.compareAtPrice)}
              </s>
            )}
          </p>

          <DialogDescription className="mt-4 text-sm leading-[1.7] font-light text-muted-foreground">
            {product.description}
          </DialogDescription>

          <fieldset className="mt-6">
            <legend className="text-[11px] tracking-[0.1em] text-faint uppercase">Tamanho</legend>
            <div className="mt-2.5 flex gap-2">
              {SIZES.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSize(option)}
                  aria-pressed={size === option}
                  className={cn(
                    'flex size-11 items-center justify-center rounded-full border text-sm transition-colors duration-200',
                    size === option
                      ? 'border-foreground bg-foreground text-white'
                      : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Diminuir quantidade"
              className="size-9 rounded-full border border-border hover:border-foreground hover:bg-transparent"
            >
              <Minus className="size-3.5" />
            </Button>
            <span className="w-6 text-center text-sm font-medium" aria-live="polite">
              {qty}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Aumentar quantidade"
              className="size-9 rounded-full border border-border hover:border-foreground hover:bg-transparent"
            >
              <Plus className="size-3.5" />
            </Button>
          </div>

          <div className="mt-8 flex flex-col gap-2.5">
            <CTAButton onClick={handleAdd} className="w-full">
              <ShoppingBag className="size-4" aria-hidden />
              Adicionar ao Carrinho
            </CTAButton>
            <Button
              variant="outline"
              onClick={handleAdd}
              className="h-auto w-full rounded-full px-8 py-4 text-[12.5px] font-semibold tracking-[0.08em] uppercase"
            >
              Comprar Agora
            </Button>
          </div>

          <Accordion type="single" collapsible className="mt-8 w-full">
            <AccordionItem value="size">
              <AccordionTrigger className="text-[12.5px] font-medium tracking-[0.08em] uppercase">
                Guia de Tamanhos
              </AccordionTrigger>
              <AccordionContent className="text-sm font-light leading-relaxed text-muted-foreground">
                Tabela de medidas disponível na página de cada coleção. Em caso de dúvida, a nossa
                equipa ajuda a escolher o tamanho certo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger className="text-[12.5px] font-medium tracking-[0.08em] uppercase">
                Envio e Devoluções
              </AccordionTrigger>
              <AccordionContent className="text-sm font-light leading-relaxed text-muted-foreground">
                <div className="space-y-3.5">
                  <div>
                    <p className="flex items-center gap-2 text-[12.5px] font-semibold tracking-[0.08em] text-foreground uppercase">
                      <Package className="size-4 shrink-0 text-brand" aria-hidden />
                      Informações Importantes
                    </p>
                    <p className="mt-2.5">
                      Verifique o <strong className="font-semibold text-foreground">seu tamanho</strong> e a{' '}
                      <strong className="font-semibold text-foreground">sua altura</strong> antes de finalizar o
                      pedido.
                    </p>
                    <p className="mt-2">
                      Os tamanhos e os preços estão indicados nas imagens dos produtos.
                    </p>
                    <p className="mt-2">
                      Trocas ou devoluções por erro de tamanho: o cliente assume apenas a{' '}
                      <strong className="font-semibold text-foreground">taxa de entrega</strong>.
                    </p>
                  </div>
                  <ul className="space-y-1.5 border-t border-border pt-3">
                    {['Evite devoluções', 'Escolha consciente', 'Compra sem stress'].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="size-3.5 shrink-0 text-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </DialogContent>
  )
}

export function QuickViewDialog() {
  const { quickView, setQuickView } = useStore()

  return (
    <Dialog open={!!quickView} onOpenChange={(open) => !open && setQuickView(null)}>
      {quickView && <QuickViewContent key={quickView.id} product={quickView} />}
    </Dialog>
  )
}
