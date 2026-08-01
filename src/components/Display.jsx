import { cn } from '@/lib/utils'

const SIZES = {
  hero: 'text-[clamp(52px,6.6vw,104px)]',
  xl: 'text-[clamp(40px,4.4vw,68px)]',
  lg: 'text-[clamp(36px,4vw,58px)]',
  md: 'text-[clamp(34px,3.6vw,54px)]',
  sm: 'text-[clamp(34px,4vw,52px)]',
}

/**
 * Editorial display heading — Bricolage Grotesque, tight tracking, 0.98 leading.
 */
export function Display({ as: Tag = 'h2', size = 'md', className, ...props }) {
  return (
    <Tag
      className={cn(
        'font-display font-[650] leading-[0.98] tracking-[-0.02em]',
        SIZES[size],
        className,
      )}
      {...props}
    />
  )
}
