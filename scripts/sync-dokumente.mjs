import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dokumenteDir = path.resolve(__dirname, '../public/dokumente')
const outputPath = path.resolve(__dirname, '../src/data/dokumente.generated.ts')

const filenames = (await readdir(dokumenteDir))
  .filter((filename) => filename !== '.gitkeep')
  .filter((filename) => filename !== 'descriptions.json')
  .sort((left, right) => left.localeCompare(right))

const output = `${[
  'export const DOCUMENT_FILENAMES = [',
  ...filenames.map((filename) => `  '${filename}',`),
  '] as const',
  '',
].join('\n')}`

await writeFile(outputPath, output, 'utf8')
