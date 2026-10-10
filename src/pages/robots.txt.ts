import type { APIRoute } from 'astro'
import { absUrl } from '../lib/site'

// Production robots: allow all, point to the sitemap.
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

Sitemap: ${absUrl('/sitemap.xml')}
`
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' }
  })
}
