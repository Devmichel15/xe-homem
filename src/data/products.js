import { publicProducts } from './fromPublic'

export const newArrivals = publicProducts

// Em Alta — curated picks across categories, distributed by name.
const TRENDING_IDS = [12, 13, 15, 21, 14, 7, 11]

const BADGES = {
  12: { label: 'Novo', tone: 'new' },
  13: { label: 'Novo', tone: 'new' },
  15: { label: 'Top', tone: 'top' },
  21: { label: 'Novo', tone: 'new' },
}

export const trending = TRENDING_IDS.map((id) => publicProducts.find((p) => p.id === id))
  .filter(Boolean)
  .map((product) => ({
    ...product,
    badge: BADGES[product.id] ?? product.badge,
  }))

export const allProducts = Array.from(
  new Map([...newArrivals, ...trending].map((product) => [product.id, product])).values(),
)
