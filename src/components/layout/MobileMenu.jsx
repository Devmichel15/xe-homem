import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { navLinks, siteConfig } from '@/data/site'

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-brand lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-[85%] max-w-sm flex-col gap-10 border-r bg-background p-0">
        <SheetHeader className="flex-row items-center justify-between border-b border-border px-6 py-6">
          <SheetTitle>
            <a href="#home" aria-label={siteConfig.name} className="inline-flex">
              <img src={siteConfig.logo} alt={siteConfig.name} className="h-14 w-auto object-contain" />
            </a>
          </SheetTitle>
        </SheetHeader>

        <nav aria-label="Menu principal" className="flex flex-col px-6">
          {navLinks.map((link, index) => (
            <SheetClose asChild key={link.label}>
              <a
                href={link.href}
                className="group flex items-center justify-between border-b border-border py-4 text-[15px] font-medium text-foreground transition-colors hover:text-brand"
              >
                {link.label}
                <span
                  aria-hidden
                  className="font-display text-xs text-faint transition-colors group-hover:text-brand"
                >
                  0{index + 1}
                </span>
              </a>
            </SheetClose>
          ))}
        </nav>

        <p className="mt-auto border-t border-border px-6 py-5 text-xs text-faint">
          Luanda, Angola · +244 923 000 000
        </p>
      </SheetContent>
    </Sheet>
  )
}
