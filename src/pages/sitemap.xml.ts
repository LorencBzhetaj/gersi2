import type { APIRoute } from 'astro'
import { absUrl } from '../lib/site'

// Only real, indexable URLs (no #anchors). Two language homes with hreflang.
export const GET: APIRoute = () => {
  const sq = absUrl('/')
  const en = absUrl('/en/')
  const alternates = `    <xhtml:link rel="alternate" hreflang="sq" href="${sq}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${sq}"/>`

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${sq}</loc>
${alternates}
  </url>
  <url>
    <loc>${en}</loc>
${alternates}
  </url>
</urlset>
`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' }
  })
}
