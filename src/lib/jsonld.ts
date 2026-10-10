import { SITE, absUrl, langHome, type Lang } from './site'
import { useDict } from '../i18n/ui'
import {
  foods,
  drinks,
  sectionNames,
  foodDescription,
  foodPriceRange,
  currency
} from '../data/menu'
import { business, hasPhone, hasFullAddress } from '../data/business'

// Builds a schema.org @graph for a given language page.
// Rule: anything not confirmed in business.json is omitted — never invented.
export function buildJsonLd(lang: Lang) {
  const t = useDict(lang)
  const restaurantId = absUrl('/#restaurant')
  const websiteId = absUrl('/#website')
  const menuId = absUrl('/#menu')
  const pageUrl = absUrl(langHome(lang))
  const webpageId = pageUrl + '#webpage'

  // --- Restaurant (LocalBusiness subtype). No LodgingBusiness/Hotel props. ---
  const restaurant: Record<string, unknown> = {
    '@type': 'Restaurant',
    '@id': restaurantId,
    name: SITE.brand,
    url: absUrl('/'),
    description: t.aboutBody,
    logo: absUrl(SITE.logo),
    image: absUrl(SITE.heroImage),
    servesCuisine: ['Sufllaqe', 'Doner', 'Fast food'],
    priceRange: foodPriceRange, // '150–350 ALL'
    currenciesAccepted: currency,
    hasMenu: { '@id': menuId },
    menu: absUrl(langHome(lang)) + '#menuja'
  }
  // Only emit confirmed real-world facts.
  if (hasPhone) restaurant.telephone = business.telephone
  if (hasFullAddress) {
    restaurant.address = {
      '@type': 'PostalAddress',
      streetAddress: business.streetAddress,
      addressLocality: business.city ?? 'Tiranë',
      ...(business.postalCode ? { postalCode: business.postalCode } : {}),
      addressCountry: business.country ?? 'AL'
    }
  }
  if (business.latitude != null && business.longitude != null) {
    restaurant.geo = {
      '@type': 'GeoCoordinates',
      latitude: business.latitude,
      longitude: business.longitude
    }
  }
  if (business.googleMapsUrl) restaurant.hasMap = business.googleMapsUrl
  if (business.socialUrls.length) restaurant.sameAs = business.socialUrls
  if (business.openingHours) {
    restaurant.openingHoursSpecification = business.openingHours.spec.map((s) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: s.days.map((d) => `https://schema.org/${d}`),
      opens: s.opens,
      closes: s.closes
    }))
  }

  // --- WebSite ---
  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: absUrl('/'),
    name: SITE.brand,
    inLanguage: lang,
    publisher: { '@id': restaurantId }
  }

  // --- WebPage (per language) ---
  const webpage = {
    '@type': 'WebPage',
    '@id': webpageId,
    url: pageUrl,
    name: t.metaTitle,
    description: t.metaDescription,
    inLanguage: lang,
    isPartOf: { '@id': websiteId },
    about: { '@id': restaurantId },
    mainEntity: { '@id': restaurantId }
  }

  // --- Menu ---
  const foodItems = foods.map((f) => ({
    '@type': 'MenuItem',
    name: f.name,
    description: foodDescription(f, lang),
    image: absUrl(f.image),
    offers: {
      '@type': 'Offer',
      price: f.price,
      priceCurrency: f.currency
    }
  }))
  const drinkItems = drinks.map((d) => ({
    '@type': 'MenuItem',
    name: d.name,
    offers: {
      '@type': 'Offer',
      price: d.price,
      priceCurrency: d.currency
    }
  }))
  const menu = {
    '@type': 'Menu',
    '@id': menuId,
    name: lang === 'en' ? 'Menu' : 'Menuja',
    inLanguage: lang,
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: sectionNames.foods[lang],
        hasMenuItem: foodItems
      },
      {
        '@type': 'MenuSection',
        name: sectionNames.drinks[lang],
        hasMenuItem: drinkItems
      }
    ]
  }

  return {
    '@context': 'https://schema.org',
    '@graph': [restaurant, website, webpage, menu]
  }
}
