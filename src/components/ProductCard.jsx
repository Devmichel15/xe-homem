import { useState } from "react";
import { Heart, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ProductBadge } from "@/components/ProductBadge";
import { useStore } from "@/hooks/useStore";
import { formatPrice } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Product card — dual image hover swap, wishlist toggle and quick add.
 * Clicking the media opens the quick-view dialog.
 */
export function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart, setQuickView } = useStore();
  const [mainLoaded, setMainLoaded] = useState(false);

  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="group relative">
      <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg border border-border bg-muted">
        {!mainLoaded && <Skeleton className="absolute inset-0 rounded-none" />}

        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          onLoad={() => setMainLoaded(true)}
          className={cn(
            "absolute inset-0 size-full object-cover transition-[opacity,transform] duration-500 ease-out",
            mainLoaded ? "opacity-100" : "opacity-0",
            "group-hover:opacity-0 group-hover:scale-105",
          )}
        />
        <img
          src={product.imageAlt}
          alt=""
          aria-hidden
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
        />

        {product.badge && (
          <ProductBadge tone={product.badge.tone}>
            {product.badge.label}
          </ProductBadge>
        )}

        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={isWishlisted}
          aria-label={
            isWishlisted ? "Remover dos favoritos" : "Adicionar aos favoritos"
          }
          className="absolute top-3 right-3 z-[2] flex size-[34px] items-center justify-center rounded-full border border-border bg-white text-foreground shadow-[6px_12px_24px_-8px_rgba(199,26,26,0.08)] transition-colors duration-200 hover:border-brand hover:text-brand"
        >
          <Heart
            className={cn(
              "size-[15px]",
              isWishlisted && "fill-brand text-brand",
            )}
            strokeWidth={1.8}
          />
        </button>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="absolute right-3 bottom-3 left-3 z-[2] flex translate-y-2 items-center justify-center gap-1.5 rounded-full bg-foreground py-3 text-[11px] font-semibold tracking-[0.08em] text-white uppercase opacity-0 transition-all duration-300 focus-visible:translate-y-0 focus-visible:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-brand"
        >
          <Plus className="size-3.5" aria-hidden />
          Adicionar Rápido
        </button>

        <button
          type="button"
          onClick={() => setQuickView(product)}
          aria-label={`Ver ${product.name}`}
          className="absolute inset-0 z-[1]"
        />
      </div>

      <p className="mb-[6px] text-[10.5px] tracking-[0.1em] text-faint uppercase">
        {product.category}
      </p>
      <h3 className="mb-2 text-[14.5px] font-medium">{product.name}</h3>
      <p className="flex items-center gap-[9px]">
        <span className="text-sm font-semibold">
          {formatPrice(product.price)}
        </span>
        {product.compareAtPrice && (
          <span className="text-[12.5px] text-faint line-through">
            {formatPrice(product.compareAtPrice)}
          </span>
        )}
      </p>
      {product.priceText && (
        <p className="mt-1 text-[11px] uppercase tracking-[0.08em] text-faint">
          {product.priceText}
        </p>
      )}
      {(product.sizes || product.size) && (
        <p className="mt-2 text-[12px] uppercase tracking-[0.08em] text-faint">
          {[product.sizes ?? (product.size ? [product.size] : [])]
            .flat()
            .join(" • ")}
        </p>
      )}
    </article>
  );
}
