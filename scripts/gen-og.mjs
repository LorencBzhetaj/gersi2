// Generates favicons + a 1200x630 Open Graph image from brand assets.
// Run: npm run og
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const PUB = join(ROOT, 'public')
const logo = join(PUB, 'assets', 'brand', 'logo-on-cream.png')
const hero = join(PUB, 'assets', 'food', 'hero-sufllaqe.webp')

const CREAM = '#FCF8F1'
const INK = '#351B0E'
const BROWN = '#513421'

async function favicons() {
  await sharp(logo)
    .resize(64, 64, { fit: 'contain', background: CREAM })
    .flatten({ background: CREAM })
    .png()
    .toFile(join(PUB, 'favicon.png'))

  await sharp(logo)
    .resize(180, 180, { fit: 'contain', background: CREAM })
    .flatten({ background: CREAM })
    .png()
    .toFile(join(PUB, 'apple-touch-icon.png'))
}

async function ogImage() {
  const W = 1200
  const H = 630
  // hero on the right
  const heroBuf = await sharp(hero)
    .resize({ height: 540, fit: 'inside' })
    .toBuffer()
  const heroMeta = await sharp(heroBuf).metadata()
  const heroW = heroMeta.width ?? 540

  // logo top-left
  const logoBuf = await sharp(logo)
    .resize({ height: 92, fit: 'inside' })
    .toBuffer()

  const textSvg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .brand { font-family: Georgia, 'Times New Roman', serif; fill: ${INK}; font-weight: 700; }
        .slogan { font-family: Georgia, 'Times New Roman', serif; fill: ${INK}; font-weight: 700; }
        .url { font-family: Arial, sans-serif; fill: ${BROWN}; font-weight: 700; letter-spacing: 1px; }
      </style>
      <text x="80" y="300" class="brand" font-size="40">Sufllaqe Gersi</text>
      <text x="80" y="372" class="slogan" font-size="60">Një kafshatë.</text>
      <text x="80" y="440" class="slogan" font-size="60">Shumë shije.</text>
      <text x="80" y="520" class="url" font-size="26">sufllaqegersi.com</text>
    </svg>`)

  await sharp({
    create: { width: W, height: H, channels: 3, background: CREAM }
  })
    .composite([
      { input: textSvg, top: 0, left: 0 },
      { input: logoBuf, top: 70, left: 80 },
      {
        input: heroBuf,
        top: Math.round((H - (heroMeta.height ?? 540)) / 2),
        left: Math.round(W - heroW - 60)
      }
    ])
    .png()
    .toFile(join(PUB, 'assets', 'og-image.png'))
}

await favicons()
await ogImage()
console.log('Generated: favicon.png, apple-touch-icon.png, assets/og-image.png')
