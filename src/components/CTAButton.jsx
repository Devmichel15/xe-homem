import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

/**
 * Brand call-to-action — pill, uppercase, letter-spaced. Variants follow the
 * editorial system: ink (primary), outline, and white.
 */
export function CTAButton({ variant = 'primary', size = 'default', className, ...props }) {
  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'h-auto rounded-full px-8 py-4 text-[12.5px] font-semibold tracking-[0.08em] uppercase',
        className,
      )}
      {...props}
    />
  )
}
