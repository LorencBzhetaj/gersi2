import type { Lang } from '../lib/site'

// All visible UI copy. Approved Albanian texts come from docs/IMPLEMENTATION.md.
export interface Dict {
  localeTag: string // for html lang / og:locale
  metaTitle: string
  metaDescription: string
  // nav
  navMenu: string
  navAbout: string
  navContact: string
  order: string
  skipToContent: string
  openMenu: string
  closeMenu: string
  // hero
  heroH1: string
  heroCaption: string
  viewMenu: string
  callToOrder: string
  prevProduct: string
  nextProduct: string
  viewProduct: string
  chooseProduct: string
  // menu section
  menuTitle: string
  menuSubtitle: string
  popular: string
  drinksTitle: string
  // about
  aboutTitle: string
  aboutLead: string
  aboutBody: string
  // contact
  contactTitle: string
  findHeading: string
  findSub: string
  address: string
  hours: string
  phone: string
  toBeAdded: string
  toBeAddedLater: string
  openInMaps: string
  mapTitle: string
  contactCtaTitle: string
  contactCtaSub: string
  phoneCall: string
  contactFallback: string
  directions: string
  // footer
  rights: string
  langButton: string // label shown on the toggle (the OTHER language)
  langSwitchAria: string
}

const sq: Dict = {
  localeTag: 'sq_AL',
  metaTitle: 'Sufllaqe Gersi – Fast Food në Tiranë | Menuja dhe Çmimet',
  metaDescription:
    'Sufllaqe Gersi, fast food familjar në Tiranë. Shiko menunë dhe çmimet për sufllaqe, doner, hotdog dhe ushqime të tjera, si dhe kontaktet tona.',
  navMenu: 'Menuja',
  navAbout: 'Rreth nesh',
  navContact: 'Kontakt',
  order: 'Porosit tani',
  skipToContent: 'Kalo te përmbajtja',
  openMenu: 'Hap menunë',
  closeMenu: 'Mbyll menunë',
  heroH1: 'Një kafshatë. Shumë shije.',
  heroCaption: 'Pita e ngrohtë, mish në grill dhe përbërës të freskët.',
  viewMenu: 'Shiko menunë',
  callToOrder: 'Porosit',
  prevProduct: 'Produkti i mëparshëm',
  nextProduct: 'Produkti tjetër',
  viewProduct: 'Shiko',
  chooseProduct: 'Zgjidh produktin',
  menuTitle: 'Zgjidh shijen tënde.',
  menuSubtitle:
    'Sufllaqe, doner dhe hotdog të përgatitura me përbërës të freskët dhe me shumë shije.',
  popular: 'Popullore',
  drinksTitle: 'Pije Freskuese',
  aboutTitle: 'Rreth nesh',
  aboutLead: 'Fast food familjar në Tiranë.',
  aboutBody:
    'Sufllaqe Gersi është një fast food familjar në Tiranë. Në menunë tonë gjeni sufllaqe pule dhe derri, sufllaqe të hapur, doner, hotdog, sandwich, tost dhe patate. Shikoni menunë dhe çmimet, ose na kontaktoni për më shumë informacion.',
  contactTitle: 'Kontakt',
  findHeading: 'Na gjeni këtu.',
  findSub: 'Ju mirëpresim të na vizitoni ose të na kontaktoni për çdo pyetje.',
  address: 'Adresa',
  hours: 'Orari',
  phone: 'Telefoni',
  toBeAdded: 'Për t’u plotësuar',
  toBeAddedLater: 'Për t’u plotësuar më vonë.',
  openInMaps: 'Hap në Google Maps',
  mapTitle: 'Harta e vendndodhjes — Sufllaqe Gersi',
  contactCtaTitle: 'Na kontaktoni.',
  contactCtaSub: 'Për çdo pyetje ose porosi, na telefononi drejtpërdrejt.',
  phoneCall: 'Telefono',
  contactFallback: 'Na kontaktoni së shpejti për adresën, orarin dhe telefonin.',
  directions: 'Hap në hartë',
  rights: 'Të gjitha të drejtat e rezervuara.',
  langButton: 'EN',
  langSwitchAria: 'Switch to English'
}

const en: Dict = {
  localeTag: 'en',
  metaTitle: 'Sufllaqe Gersi – Fast Food in Tirana | Menu and Prices',
  metaDescription:
    'Sufllaqe Gersi, a family fast food in Tirana. See the menu and prices for souvlaki, doner, hotdog and more, plus how to contact us.',
  navMenu: 'Menu',
  navAbout: 'About us',
  navContact: 'Contact',
  order: 'Order now',
  skipToContent: 'Skip to content',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  heroH1: 'One bite. So much flavour.',
  heroCaption: 'Warm pita, grilled meat and fresh ingredients.',
  viewMenu: 'View menu',
  callToOrder: 'Order',
  prevProduct: 'Previous product',
  nextProduct: 'Next product',
  viewProduct: 'View',
  chooseProduct: 'Choose product',
  menuTitle: 'Pick your flavour.',
  menuSubtitle:
    'Souvlaki, doner and hotdog made with fresh ingredients and loads of flavour.',
  popular: 'Popular',
  drinksTitle: 'Drinks',
  aboutTitle: 'About us',
  aboutLead: 'Family fast food in Tirana.',
  aboutBody:
    'Sufllaqe Gersi is a family fast food in Tirana. Our menu features chicken and pork souvlaki, open souvlaki, doner, hotdog, sandwich, toast and fries. Browse the menu and prices, or contact us for more information.',
  contactTitle: 'Contact',
  findHeading: 'Find us here.',
  findSub: 'We’d love to welcome you, or reach out with any question.',
  address: 'Address',
  hours: 'Hours',
  phone: 'Phone',
  toBeAdded: 'To be added',
  toBeAddedLater: 'To be added soon.',
  openInMaps: 'Open in Google Maps',
  mapTitle: 'Location map — Sufllaqe Gersi',
  contactCtaTitle: 'Contact us.',
  contactCtaSub: 'For any question or order, call us directly.',
  phoneCall: 'Call',
  contactFallback: 'Contact us soon for the address, hours and phone.',
  directions: 'Open in Maps',
  rights: 'All rights reserved.',
  langButton: 'SQ',
  langSwitchAria: 'Kalo në shqip'
}

export const dict: Record<Lang, Dict> = { sq, en }
export const useDict = (lang: Lang): Dict => dict[lang]
