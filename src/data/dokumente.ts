export const DOCUMENT_FILENAMES = [
  '2025-06-25_Architekt - Rechnung.pdf',
  '2025-07-08_Gartenzwerg - Rechnung.pdf',
  '2025-07-15_Gartenzwerg - Rechnung.pdf',
  '2026-07-08_Fuchs&Eule -  Vollmacht BAFA_Ralf Neumann.pdf',
  '2026-07-08_Fuchs&Eule - Ablauf.pdf',
  '2026-07-08_Fuchs&Eule - Angebot.pdf',
  '2026-07-08_Fuchs&Eule - Beispiel_Sanierungsfahrplan.pdf',
  '2026-07-08_IRB_Metallbau - Angebot.pdf',
  '2026-07-28_Elektroverkabelung.pdf',
] as const

export type DocumentDescriptionMap = Record<string, string>

export type DocumentEntry = {
  filename: string
  href: string
}

export const DOCUMENT_ENTRIES: DocumentEntry[] = [...DOCUMENT_FILENAMES].map(
  (filename) => ({
    filename,
    href: `/dokumente/${filename}`,
  }),
)
