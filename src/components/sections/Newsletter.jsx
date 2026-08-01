import { useRef, useState } from 'react'
import { Check } from 'lucide-react'
import { Container } from '@/components/Container'
import { Eyebrow } from '@/components/Eyebrow'
import { Display } from '@/components/Display'
import { CTAButton } from '@/components/CTAButton'
import { Input } from '@/components/ui/input'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { newsletter } from '@/data/site'

export function Newsletter() {
  const ref = useRef(null)
  const [subscribed, setSubscribed] = useState(false)

  useScrollReveal(ref)

  function handleSubmit(event) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <section className="border-y border-border bg-secondary py-20 text-center md:py-30">
      <Container ref={ref} className="max-w-[600px]">
        <Eyebrow data-reveal className="justify-center">
          {newsletter.eyebrow}
        </Eyebrow>
        <Display as="h2" size="sm" className="my-[18px]" data-reveal data-reveal-delay="0.05">
          {newsletter.title.split('\n').map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </Display>
        <p
          data-reveal
          data-reveal-delay="0.1"
          className="mx-auto mb-8 max-w-md text-[14.5px] leading-[1.7] font-light text-muted-foreground"
        >
          {newsletter.description}
        </p>

        {subscribed ? (
          <div
            data-reveal
            className="flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-sm font-medium"
            role="status"
          >
            <Check className="size-4 text-brand" aria-hidden />
            Subscrição confirmada. Bem-vindo à XÊ HOMEM.
          </div>
        ) : (
          <form data-reveal data-reveal-delay="0.15" onSubmit={handleSubmit} className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
            <label htmlFor="newsletter-email" className="sr-only">
              O seu e-mail
            </label>
            <Input
              id="newsletter-email"
              type="email"
              required
              placeholder="O seu e-mail"
              className="h-auto rounded-full border-input bg-background px-6 py-[15px] text-sm text-foreground focus-visible:border-foreground focus-visible:ring-0 sm:w-[300px]"
            />
            <CTAButton type="submit">Subscrever</CTAButton>
          </form>
        )}
      </Container>
    </section>
  )
}
