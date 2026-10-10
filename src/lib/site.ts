// Central site constants. Keep production host here so canonical/OG/JSON-LD agree.
export const SITE = {
  baseUrl: 'https://sufllaqegersi.com',
  brand: 'Sufllaqe Gersi',
  // Visual + social imagery
  logo: '/assets/brand/logo-on-cream.png',
  ogImage: '/assets/og-image.png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  heroImage: '/assets/food/hero-sufllaqe.webp',
  // Menu subdomain (the QR menu lives here)
  menuUrl: 'https://menu.sufllaqegersi.com'
} as const

export type Lang = 'sq' | 'en'
export const LANGS: Lang[] = ['sq', 'en']
export const DEFAULT_LANG: Lang = 'sq'

// Path for a language's home page (sq is root, en is /en/).
export function langHome(lang: Lang): string {
  return lang === 'sq' ? '/' : '/en/'
}

export function absUrl(path: string): string {
  return new URL(path, SITE.baseUrl + '/').href
}
