// Produces alpha WebP (responsive sizes) for the hero carousel from the
// preserved PNG originals in assets-src/hero. Also refreshes the open-platter
// photo used on the menu card. Originals are never modified.
// Run: npm run hero
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const SRC = join(ROOT, 'assets-src', 'hero')
const HERO_OUT = join(ROOT, 'public', 'assets', 'hero')
const FOOD_OUT = join(ROOT, 'public', 'assets', 'food')

const ids = ['sufllaqe', 'doner', 'hotdog', 'sufllaqe-e-hapur']
const sizes = [600, 900]

async function main() {
  for (const id of ids) {
    const input = join(SRC, `${id}.png`)
    // trim transparent margins so each product fills the stage consistently
    const trimmed = await sharp(input).trim({ threshold: 12 }).toBuffer()
    const m = await sharp(trimmed).metadata()
    console.log(
      `${id}: content ${m.width}x${m.height} (ratio ${(m.width / m.height).toFixed(2)})`
    )
    for (const w of sizes) {
      await sharp(trimmed)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: 82, alphaQuality: 90, effort: 5 })
        .toFile(join(HERO_OUT, `${id}-${w}.webp`))
    }
  }

  // Menu card image for the open platter (trimmed, keep alpha).
  await sharp(join(SRC, 'sufllaqe-e-hapur.png'))
    .trim({ threshold: 12 })
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 90, effort: 5 })
    .toFile(join(FOOD_OUT, 'sufllaqe-e-hapur.webp'))

  console.log('Menu open-platter image refreshed.')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
