import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { CTAButton } from '@/components/CTAButton'
import { useStore } from '@/hooks/useStore'
import { formatPrice } from '@/lib/motion'

function CartLine({ item }) {
  const { updateQuantity, removeFromCart } = useStore()

  return (
    <li className="flex gap-4 py-5">
      <div className="size-20 shrink-0 overflow-hidden rounded-md border border-border bg-muted">
        <img src={item.image} alt={item.name} className="size-full object-cover" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="truncate text-[10.5px] tracking-[0.1em] text-faint uppercase">
              {item.category}
            </p>
            <p className="truncate text-sm font-medium">{item.name}</p>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => removeFromCart(item.id)}
            aria-label={`Remover ${item.name} do carrinho`}
            className="text-faint hover:text-brand"
          >
            <X className="size-3.5" />
          </Button>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => updateQuantity(item.id, item.qty - 1)}
              aria-label={`Diminuir quantidade de ${item.name}`}
              className="border border-border text-foreground hover:border-foreground hover:bg-transparent"
            >
              <Minus className="size-3" />
            </Button>
            <span className="w-5 text-center text-sm font-medium" aria-live="polite">
              {item.qty}
            </span>
            <Button
              variant="ghost"
              size="icon-xs"
              onClick={() => updateQuantity(item.id, item.qty + 1)}
              aria-label={`Aumentar quantidade de ${item.name}`}
              className="border border-border text-foreground hover:border-foreground hover:bg-transparent"
            >
              <Plus className="size-3" />
            </Button>
          </div>
          <p className="text-sm font-semibold">{formatPrice(item.price * item.qty)}</p>
        </div>
      </div>
    </li>
  )
}

export function CartDrawer() {
  const { cart, cartCount, cartTotal, isCartOpen, setIsCartOpen } = useStore()

  return (
    <Drawer open={isCartOpen} onOpenChange={setIsCartOpen} direction="right">
      <DrawerContent className="h-full w-full rounded-none border-l border-border sm:max-w-md">
        <DrawerHeader className="flex-row items-center justify-between border-b border-border px-6 py-5">
          <DrawerTitle className="font-display text-lg font-bold">
            Carrinho ({cartCount})
          </DrawerTitle>
          <DrawerDescription className="sr-only">Itens no seu carrinho</DrawerDescription>
        </DrawerHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 px-6 py-20 text-center">
            <span className="flex size-14 items-center justify-center rounded-full border border-border text-faint">
              <ShoppingBag className="size-5" strokeWidth={1.6} />
            </span>
            <div>
              <p className="font-display text-lg">O seu carrinho está vazio.</p>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                Descubra as novidades da coleção.
              </p>
            </div>
            <CTAButton className="mt-2" onClick={() => setIsCartOpen(false)}>
              Continuar a comprar
            </CTAButton>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {cart.map((item) => (
                <CartLine key={item.id} item={item} />
              ))}
            </ul>

            <DrawerFooter className="gap-3 border-t border-border px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-light text-muted-foreground">Subtotal</span>
                <span className="font-display text-lg font-bold">{formatPrice(cartTotal)}</span>
              </div>
              <p className="text-xs font-light text-faint">
                Envio e impostos calculados no checkout.
              </p>
              <CTAButton className="mt-1 w-full">Finalizar Compra</CTAButton>
              <Button
                variant="ghost"
                className="h-auto w-full rounded-full text-[12.5px] font-semibold tracking-[0.08em] text-muted-foreground uppercase hover:bg-transparent hover:text-brand"
                onClick={() => setIsCartOpen(false)}
              >
                Continuar a comprar
              </Button>
            </DrawerFooter>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}
