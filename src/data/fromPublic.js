// Auto-generated from images in /public
// Each image is named after its product, so the site catalogue
// is built directly from the file names (e.g. tshirt1.jpeg → "T-Shirt 1").

const CATEGORIES = [
  {
    prefix: 'tshirt',
    category: 'T-Shirts',
    name: 'T-Shirt',
    defaultPrice: 7000,
    description: 'T-shirt de algodão com corte regular e acabamento reforçado.',
    suffixes: [1, 2, 3, 4, 5, 6, 7],
  },
  {
    prefix: 'sueter',
    category: 'Suéteres',
    name: 'Suéter',
    defaultPrice: 9000,
    description: 'Suéter de malha quente com toque suave e acabamento canelado.',
    suffixes: [1, 2, 3, 4],
  },
  {
    prefix: 'relogio',
    category: 'Relógios',
    name: 'Relógio',
    defaultPrice: 17000,
    description: 'Relógio de pulso com mostrador clássico e bracelete em aço.',
    suffixes: [1, 2],
  },
  {
    prefix: 'regata',
    category: 'Regatas',
    name: 'Regata',
    defaultPrice: 10500,
    description: 'Regata de algodão leve com modelagem confortável.',
    suffixes: [],
  },
  {
    prefix: 'necessary',
    category: 'Necessaires',
    name: 'Necessaire',
    defaultPrice: 5000,
    description: 'Necessaire de viagem compacta com dois compartimentos.',
    suffixes: [1],
  },
  {
    prefix: 'cueca',
    category: 'Cuecas',
    name: 'Cueca',
    defaultPrice: 9500,
    description: 'Cuecas boxer em algodão stretch com cós elástico.',
    suffixes: [1, 2],
  },
  {
    prefix: 'calca',
    category: 'Calças',
    name: 'Calça',
    defaultPrice: 10000,
    description: 'Calça com corte preciso e tecido de boa durabilidade.',
    suffixes: [1, 2, 3],
  },
  {
    prefix: 'bolsa',
    category: 'Bolsas',
    name: 'Bolsa',
    defaultPrice: 10500,
    description: 'Bolsa transversal compacta para o dia a dia.',
    suffixes: [1],
  },
]

// Preço individual por produto (em centavos), chaveado pelo nome do arquivo.
// Cada produto tem o seu próprio preço, mesmo dentro da mesma categoria.
// Ex.: 'tshirt1.jpeg': 6500, 'tshirt2.jpeg': 7500
// Se um produto não estiver listado, usa o defaultPrice da categoria.
const PRICES = {}

let id = 1

export const publicProducts = CATEGORIES.flatMap(
  ({ prefix, category, name, defaultPrice, description, suffixes }) => {
    const variants = suffixes.length ? suffixes : [null]
    return variants.map((suffix) => {
      const fileName = suffix ? `${prefix}${suffix}.jpeg` : `${prefix}.jpeg`
      const productName = suffix ? `${name} ${suffix}` : name
      return {
        id: id++,
        name: productName,
        category,
        price: PRICES[fileName] ?? defaultPrice,
        compareAtPrice: null,
        badge: null,
        image: `/${fileName}`,
        imageAlt: `/${fileName.replace(/\.jpeg$/, '-alt.jpeg')}`,
        description,
      }
    })
  },
)

export default publicProducts
