import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fotosDir = path.resolve(__dirname, '../public/images/fotos')
const outputPath = path.resolve(__dirname, '../src/data/fotos.ts')

const supportedExtensions = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.mp4',
  '.mov',
  '.webm',
])

const filenames = (await readdir(fotosDir))
  .filter((filename) => filename !== '.gitkeep')
  .filter((filename) => supportedExtensions.has(path.extname(filename).toLowerCase()))
  .sort((left, right) => left.localeCompare(right))

const output = `export type PhotoEntry = {
  filename: string
  description?: string
}

export const PHOTO_ENTRIES: readonly PhotoEntry[] = [
${filenames.map((filename) => `  { filename: '${filename}' },`).join('\n')}
] as const
`

await writeFile(outputPath, output, 'utf8')
