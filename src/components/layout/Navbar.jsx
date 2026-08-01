import { useEffect, useState } from 'react'
import { Heart, Search, ShoppingBag, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MobileMenu } from '@/components/layout/MobileMenu'
import { useStore } from '@/hooks/useStore'
import { navLinks, siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { cartCount, wishlist, setIsCartOpen, setSearchOpen } = useStore()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b border-white/10 bg-black text-white transition-shadow duration-300',
        scrolled && 'shadow-[0_6px_24px_-16px_rgba(0,0,0,0.8)]',
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-4 md:px-8 xl:px-14">
        <a href="#home" aria-label={siteConfig.name} className="flex shrink-0 items-center">
          <img src={siteConfig.logo} alt={siteConfig.name} className="h-20 w-auto object-contain" />
        </a>

        <nav aria-label="Menu principal" className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative pb-[3px] text-[13px] font-medium text-white transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5 md:gap-6">
          <Button
            variant="ghost"
            size="icon"
            className="size-5 text-white hover:text-brand"
            onClick={() => setSearchOpen(true)}
            aria-label="Pesquisar"
          >
            <Search className="size-5" strokeWidth={1.6} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-5 text-white hover:text-brand"
                aria-label="A minha conta"
              >
                <User className="size-5" strokeWidth={1.6} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Heart className="size-4" aria-hidden />
                Favoritos
                {wishlist.length > 0 && (
                  <span className="ml-auto text-xs text-faint">{wishlist.length}</span>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem>Encomendas</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Iniciar sessão</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            className="relative size-5 text-white hover:text-brand"
            onClick={() => setIsCartOpen(true)}
            aria-label={`Abrir carrinho, ${cartCount} itens`}
          >
            <ShoppingBag className="size-5" strokeWidth={1.6} />
            {cartCount > 0 && (
              <span className="absolute -top-2.5 -right-2.5 flex size-[15px] items-center justify-center rounded-full bg-brand text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Button>

          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
