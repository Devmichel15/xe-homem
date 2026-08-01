import { useMemo, useState } from 'react'
import { ArrowUpRight, Search } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { useStore } from '@/hooks/useStore'
import { allProducts } from '@/data/products'
import { formatPrice } from '@/lib/motion'

export function SearchDialog() {
  const { searchOpen, setSearchOpen, setQuickView } = useStore()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(q) || product.category.toLowerCase().includes(q),
    )
  }, [query])

  function handleOpenChange(open) {
    setSearchOpen(open)
    if (!open) setQuery('')
  }

  function openProduct(product) {
    setQuickView(product)
    handleOpenChange(false)
  }

  return (
    <Dialog open={searchOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="top-[18%] max-w-lg -translate-y-0 gap-0 p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>Pesquisar produtos</DialogTitle>
          <DialogDescription>
            Encontre peças por nome ou categoria.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-3 border-b border-border px-5">
          <Search className="size-4 shrink-0 text-faint" aria-hidden />
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Pesquisar peças…"
            aria-label="Pesquisar produtos"
            className="h-14 border-0 bg-transparent px-0 text-sm focus-visible:ring-0"
          />
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <p className="px-3 py-6 text-sm font-light text-faint">
              Pesquise por nome ou categoria, por exemplo “tee”, “calça” ou “boné”.
            </p>
          ) : results.length === 0 ? (
            <p className="px-3 py-6 text-sm font-light text-faint">
              Nenhum resultado para “{query}”.
            </p>
          ) : (
            <ul>
              {results.map((product) => (
                <li key={product.id}>
                  <button
                    type="button"
                    onClick={() => openProduct(product)}
                    className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-left transition-colors hover:bg-muted"
                  >
                    <img
                      src={product.image}
                      alt=""
                      className="size-12 shrink-0 rounded-md border border-border object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{product.name}</span>
                      <span className="block text-[10.5px] tracking-[0.1em] text-faint uppercase">
                        {product.category}
                      </span>
                    </span>
                    <span className="text-sm font-semibold">{formatPrice(product.price)}</span>
                    <ArrowUpRight className="size-4 text-faint" aria-hidden />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
