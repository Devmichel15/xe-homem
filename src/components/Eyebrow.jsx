import { cn } from '@/lib/utils'

/**
 * Small uppercase section marker with a gold star accent.
 */
export function Eyebrow({ className, children, ...props }) {
  return (
    <p
      className={cn(
        'flex items-center gap-[9px] text-[11.5px] font-medium tracking-[0.18em] text-muted-foreground uppercase',
        className,
      )}
      {...props}
    >
      <span aria-hidden className="text-[13px] text-gold">
        ✦
      </span>
      {children}
    </p>
  )
}
