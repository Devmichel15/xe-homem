import { Eyebrow } from '@/components/Eyebrow'
import { Display } from '@/components/Display'
import { cn } from '@/lib/utils'

/**
 * Consistent section heading block: eyebrow + display title,
 * optional description or actions aligned to the right.
 */
export function SectionHeader({ eyebrow, title, description, actions, className, ...props }) {
  return (
    <div
      className={cn(
        'mb-14 flex flex-col items-start justify-between gap-4 md:mb-16 md:flex-row md:items-end md:gap-10',
        className,
      )}
      {...props}
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Display as="h2" size="md" className="mt-4">
          {title}
        </Display>
      </div>
      {description && (
        <p className="max-w-xs text-sm leading-[1.7] font-light text-muted-foreground">
          {description}
        </p>
      )}
      {actions}
    </div>
  )
}
