import type { Lang } from '../lib/site'

// Hero carousel products (transparent PNG → alpha WebP in /assets/hero).
// Each slide owns its id, image, name, description and alt — image/name/desc
// are all driven by the same active index so they move together.
// `scale` optically balances each product within the fixed stage.
export interface HeroProduct {
  id: string
  name: { sq: string; en: string }
  desc: { sq: string; en: string }
  alt: { sq: string; en: string }
  scale: number
}

export const heroProducts: HeroProduct[] = [
  {
    id: 'sufllaqe',
    name: { sq: 'Sufllaqe', en: 'Souvlaki' },
    desc: {
      sq: 'Pite e ngrohtë me mish, patate, sallatë të freskët dhe salcë.',
      en: 'Warm pita with meat, fries, fresh salad and sauce.'
    },
    alt: {
      sq: 'Sufllaqe me mish në grill, patate, sallatë dhe salcë',
      en: 'Souvlaki wrap with grilled meat, fries, salad and sauce'
    },
    scale: 1.0
  },
  {
    id: 'doner',
    name: { sq: 'Doner', en: 'Doner' },
    desc: {
      sq: 'Mish i prerë hollë nga doneri, me sallatë të freskët dhe salcë.',
      en: 'Thinly sliced doner meat with fresh salad and sauce.'
    },
    alt: {
      sq: 'Doner me mish të prerë hollë, sallatë dhe salcë',
      en: 'Doner with thinly sliced meat, salad and sauce'
    },
    scale: 1.0
  },
  {
    id: 'hotdog',
    name: { sq: 'Hotdog', en: 'Hotdog' },
    desc: {
      sq: 'Salçiçe në bukë të butë me salcat klasike.',
      en: 'Sausage in a soft bun with classic sauces.'
    },
    alt: {
      sq: 'Hotdog me salçiçe, ketchup dhe mustardë',
      en: 'Hotdog with sausage, ketchup and mustard'
    },
    scale: 0.94
  },
  {
    id: 'sufllaqe-e-hapur',
    name: { sq: 'Sufllaqe e Hapur', en: 'Open Souvlaki' },
    desc: {
      sq: 'Mish i prerë hollë, patate, sallatë, pite e ngrohtë dhe salcë, të servirura në pjatë.',
      en: 'Thinly sliced meat, fries, salad, warm pita and sauce, served on a plate.'
    },
    alt: {
      sq: 'Sufllaqe e hapur në tabaka: pite, patate, mish, sallatë dhe salcë',
      en: 'Open souvlaki platter: pita, fries, meat, salad and sauce'
    },
    scale: 1.03
  }
]

export const heroImg = (id: string, w: 600 | 900) => `/assets/hero/${id}-${w}.webp`
export const productName = (p: HeroProduct, lang: Lang) => p.name[lang]
