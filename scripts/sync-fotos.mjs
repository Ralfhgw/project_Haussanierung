import { readdir, readFile, writeFile } from 'node:fs/promises'
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

// Versuche, bestehende descriptions zu laden
let existingDescriptions = {}
try {
  const existingContent = await readFile(outputPath, 'utf8')
  const descriptionMatches = existingContent.matchAll(/filename:\s*'([^']+)',\s*description:\s*'([^']*)'/g)
  for (const match of descriptionMatches) {
    existingDescriptions[match[1]] = match[2]
  }
} catch {
  // Datei existiert noch nicht, kein Problem
}

const entries = filenames.map((filename) => {
  const existingDescription = existingDescriptions[filename]
  if (existingDescription !== undefined && existingDescription !== '') {
    return `  { filename: '${filename}', description: '${existingDescription}' },`
  }
  return `  { filename: '${filename}' },`
})

const output = `export type PhotoEntry = {
  filename: string
  description?: string
}

export const PHOTO_ENTRIES: readonly PhotoEntry[] = [
${entries.join('\n')}
] as const
`

await writeFile(outputPath, output, 'utf8')
