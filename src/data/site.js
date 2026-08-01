export const siteConfig = {
  name: 'XÊ HOMEM',
  logo: '/logo.jpeg',
  tagline: 'Vestir sem pedir atenção.',
  description:
    'Peças essenciais e streetwear premium para o homem que constrói presença através da consistência, não do exagero.',
  email: 'geral@xehomem.co.ao',
  phone: '+244 923 000 000',
  address: 'Luanda, Angola',
  instagram: '@xehomem',
  hashtag: '#VistaXeHomem',
  heroMedia: '/tshirt1.jpeg',
  heroIndex: '01',
  heroTag: 'Coleção Primavera 2026',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Coleções', href: '#colecoes' },
  { label: 'Novidades', href: '#novidades' },
  { label: 'Streetwear', href: '#streetwear' },
  { label: 'Acessórios', href: '#acessorios' },
  { label: 'Contacto', href: '#contacto' },
]

export const marqueeItems = [
  'Streetwear Premium',
  'Nova Coleção Primavera 2026',
  'Entrega em 24H em Luanda',
  'Edições Limitadas',
]

export const footerColumns = [
  {
    title: 'Links Rápidos',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Coleções', href: '#colecoes' },
      { label: 'Novidades', href: '#novidades' },
      { label: 'Promoções', href: '#' },
    ],
  },
  {
    title: 'Apoio ao Cliente',
    links: [
      { label: 'Contactos', href: '#contacto' },
      { label: 'Trocas e Devoluções', href: '#' },
      { label: 'Guia de Tamanhos', href: '#' },
      { label: 'Perguntas Frequentes', href: '#' },
    ],
  },
  {
    title: 'Políticas',
    links: [
      { label: 'Termos de Uso', href: '#' },
      { label: 'Privacidade', href: '#' },
      { label: 'Política de Envio', href: '#' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: siteConfig.email, href: `mailto:${siteConfig.email}` },
      { label: siteConfig.phone, href: `tel:+244923000000` },
      { label: siteConfig.address, href: '#' },
    ],
  },
]

export const socials = [
  { label: 'Instagram', icon: 'instagram', href: '#' },
  { label: 'TikTok', icon: 'tiktok', href: '#' },
  { label: 'WhatsApp', icon: 'whatsapp', href: '#' },
]

export const paymentMethods = ['Visa', 'MC', 'Multi', 'UP']

export const newsletter = {
  eyebrow: 'Newsletter',
  title: 'Não perca\nnenhum lançamento.',
  description:
    'Receba em primeira mão as novas coleções, campanhas exclusivas e acesso antecipado a edições limitadas.',
}
