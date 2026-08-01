import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Brand social icons. Instagram and TikTok have no Lucide glyph in v1
 * (brand icons were removed), so they ship their own paths.
 */
export function SocialIcon({ name, className, ...props }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={cn('size-3.5', className)} aria-hidden {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    )
  }

  if (name === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={cn('size-3.5', className)} aria-hidden {...props}>
        <path d="M14 3v10.5a3.5 3.5 0 11-3-3.47M14 3a5 5 0 005 5" />
      </svg>
    )
  }

  return <MessageCircle className={cn('size-3.5', className)} strokeWidth={1.6} aria-hidden {...props} />
}
