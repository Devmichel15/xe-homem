import { cn } from '@/lib/utils'

const TONES = {
  new: 'border-border text-foreground',
  top: 'border-border text-foreground',
  sale: 'border-brand text-brand',
}

/**
 * Product flag rendered on the media — white capsule, gold star for
 * editorial tones, red for sale.
 */
export function ProductBadge({ tone = 'new', className, children, ...props }) {
  const withStar = tone === 'new' || tone === 'top'
  return (
    <span
      className={cn(
        'absolute top-3.5 left-3.5 z-[2] inline-flex items-center gap-1 rounded-full border bg-white px-[11px] py-[6px] text-[10px] font-semibold tracking-[0.05em] uppercase',
        TONES[tone],
        className,
      )}
      {...props}
    >
      {withStar && (
        <span aria-hidden className="text-gold">
          ✦
        </span>
      )}
      {children}
    </span>
  )
}
