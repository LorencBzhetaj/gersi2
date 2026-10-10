import type { Lang } from '../lib/site'

// Hero carousel products (transparent PNG → alpha WebP in /assets/hero).
// `scale` optically balances each product within the fixed stage.
export interface HeroProduct {
  id: string
  name: { sq: string; en: string }
  alt: { sq: string; en: string }
  scale: number
}

export const heroProducts: HeroProduct[] = [
  {
    id: 'sufllaqe',
    name: { sq: 'Sufllaqe', en: 'Souvlaki' },
    alt: {
      sq: 'Sufllaqe me mish në grill, patate, sallatë dhe salcë',
      en: 'Souvlaki wrap with grilled meat, fries, salad and sauce'
    },
    scale: 1.0
  },
  {
    id: 'doner',
    name: { sq: 'Doner', en: 'Doner' },
    alt: {
      sq: 'Doner me mish të prerë hollë, sallatë dhe salcë',
      en: 'Doner with thinly sliced meat, salad and sauce'
    },
    scale: 1.0
  },
  {
    id: 'hotdog',
    name: { sq: 'Hotdog', en: 'Hotdog' },
    alt: {
      sq: 'Hotdog me salçiçe, ketchup dhe mustardë',
      en: 'Hotdog with sausage, ketchup and mustard'
    },
    scale: 0.94
  },
  {
    id: 'sufllaqe-e-hapur',
    name: { sq: 'Sufllaqe e Hapur', en: 'Open Souvlaki' },
    alt: {
      sq: 'Sufllaqe e hapur në tabaka: pite, patate, mish, sallatë dhe salcë',
      en: 'Open souvlaki platter: pita, fries, meat, salad and sauce'
    },
    scale: 1.03
  }
]

export const heroImg = (id: string, w: 600 | 900) => `/assets/hero/${id}-${w}.webp`
export const productName = (p: HeroProduct, lang: Lang) => p.name[lang]
