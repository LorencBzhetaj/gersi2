import raw from './business.json'

// Real-world business facts. Everything that is `null` is NOT yet confirmed and
// must be left out of the UI (production) and out of JSON-LD — never invented.
export interface Business {
  name: string
  url: string
  familyOwned: boolean
  city: string | null
  country: string | null
  streetAddress: string | null
  postalCode: string | null
  latitude: number | null
  longitude: number | null
  telephone: string | null
  openingHours: string | null
  googleMapsUrl: string | null
  orderUrl: string | null
  socialUrls: string[]
  deliveryAvailable: boolean | null
}

export const business = raw as Business

// A full PostalAddress (and LocalBusiness rich-result eligibility) needs the street.
export const hasFullAddress = Boolean(business.streetAddress)
export const hasPhone = Boolean(business.telephone)
export const hasHours = Boolean(business.openingHours)
export const hasMap = Boolean(business.googleMapsUrl)
export const hasOrder = Boolean(business.orderUrl)
export const hasSocial = business.socialUrls.length > 0
