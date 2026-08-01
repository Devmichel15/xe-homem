import { cn } from '@/lib/utils'

export function Container({ className, ...props }) {
  return <div className={cn('mx-auto w-full max-w-[1440px] px-5 md:px-8 xl:px-14', className)} {...props} />
}
