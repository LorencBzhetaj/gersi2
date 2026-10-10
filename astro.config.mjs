// @ts-check
import { defineConfig } from 'astro/config'

// Static site. `site` is required for absolute canonical URLs, sitemap and JSON-LD @ids.
export default defineConfig({
  site: 'https://sufllaqegersi.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
})
