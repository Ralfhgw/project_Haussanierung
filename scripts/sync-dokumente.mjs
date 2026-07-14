import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const dokumenteDir = path.resolve(__dirname, '../public/dokumente')
const outputPath = path.resolve(__dirname, '../src/data/dokumente.ts')

const filenames = (await readdir(dokumenteDir))
  .filter((filename) => filename !== '.gitkeep')
  .filter((filename) => filename !== 'descriptions.json')
  .filter((filename) => !/^\d{8}/.test(filename))
  .sort((left, right) => left.localeCompare(right))

const output = `export const DOCUMENT_FILENAMES = [
${filenames.map((filename) => `  '${filename}',`).join('\n')}
] as const

export type DocumentDescriptionMap = Record<string, string>

export type DocumentEntry = {
  filename: string
  href: string
}

export const DOCUMENT_ENTRIES: DocumentEntry[] = [...DOCUMENT_FILENAMES].map(
  (filename) => ({
    filename,
    href: \`/dokumente/\${filename}\`,
  }),
)
`

await writeFile(outputPath, output, 'utf8')
