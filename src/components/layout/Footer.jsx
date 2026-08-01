import { Container } from '@/components/Container'
import { SocialIcon } from '@/components/SocialIcon'
import { footerColumns, paymentMethods, siteConfig, socials } from '@/data/site'

export function Footer() {
  return (
    <footer id="contacto" className="scroll-mt-20 border-t border-white/10 bg-black pb-9 pt-[90px] text-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-14 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.3fr]">
          <div>
            <a href="#home" aria-label={siteConfig.name} className="mb-5 inline-flex">
              <img src={siteConfig.logo} alt={siteConfig.name} className="h-24 w-auto object-contain" />
            </a>
            <p className="mb-6 max-w-[250px] text-[13.5px] leading-[1.7] font-light text-white/60">
              Moda masculina streetwear e casual premium, feita para homens que sabem exatamente o
              valor da sua presença.
            </p>
            <ul className="flex gap-[10px]">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="flex size-9 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-brand hover:text-brand"
                  >
                    <SocialIcon name={social.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-5 text-[11.5px] tracking-[0.1em] text-white/40 uppercase">{col.title}</h4>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/70 transition-colors hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-7">
          <p className="text-xs text-white/40">
            © 2026 {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-2" aria-label="Métodos de pagamento">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="flex h-6 w-[38px] items-center justify-center rounded-[5px] border border-white/20 text-[8.5px] text-white/40"
              >
                {method}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
