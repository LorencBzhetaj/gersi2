import rawMenu from './menu.json'
import type { Lang } from '../lib/site'

// menu.json is the single source of truth for names and prices.
// English descriptions are layered on by id; Albanian stays canonical in the JSON.

export interface FoodRaw {
  id: string
  name: string
  price: number
  currency: string
  description: string
  popular: boolean
  image: string
}
export interface DrinkRaw {
  name: string
  price: number
  currency: string
  alcohol18Plus: boolean
}

const data = rawMenu as {
  foods: FoodRaw[]
  drinks: DrinkRaw[]
  alcoholNotice: string
}

// English descriptions for each food, keyed by id (names stay as on the real menu).
const foodDescEn: Record<string, string> = {
  'sufllaqe-pule':
    'Marinated grilled chicken with fries, fresh salad and our house sauces.',
  'sufllaqe-derri': 'Tasty grilled pork with fries, salad and sauce.',
  'sufllaqe-e-hapur':
    'Open platter with grilled meat, fries, salad and warm pita.',
  'doner-derri':
    'Thinly sliced pork doner in pita with fresh salad and sauce.',
  'doner-pule': 'Chicken doner in pita with fresh salad and sauce.',
  hotdog: 'Sausage in a soft bun with classic sauces.',
  sandwich: 'Sandwich filled with meat, cheese and vegetables.',
  tost: 'Toasted sandwich with ham and cheese.',
  patate: 'Crispy golden fries with salt.'
}

export const foods = data.foods
export const drinks = data.drinks
export const alcoholNotice = { sq: data.alcoholNotice, en: 'Beers 18+ only' }

// Schema MenuSection names (kept stable regardless of page language label).
export const sectionNames = {
  foods: { sq: 'Ushqime', en: 'Food' },
  drinks: { sq: 'Pije Freskuese', en: 'Drinks' }
}

export function foodDescription(food: FoodRaw, lang: Lang): string {
  return lang === 'en' ? foodDescEn[food.id] ?? food.description : food.description
}

// Price range across foods, for Restaurant.priceRange (brief: '150–350 ALL').
export const foodPriceRange = (() => {
  const prices = data.foods.map((f) => f.price)
  return `${Math.min(...prices)}–${Math.max(...prices)} ALL`
})()

export const currency = 'ALL'
