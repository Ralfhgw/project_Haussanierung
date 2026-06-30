export const DOCUMENT_FILENAMES = [
  '20160429_Amazon.pdf',
  '2025-04-Rechnung-01.pdf',
  '2025-05-Rechnung-02.pdf',
  '20260427_C-E-E Manufaktur.pdf',
  '20260511_Thomas_Erfurth.pdf',
  '20260519_Amazon.pdf',
  '20260519_Obi.pdf',
  '20260530_Amazon.pdf',
  '20260601_SiChuanErMuQian.pdf',
  '20260605_Fuchs_GmbH.pdf',
  '20260605_Voltking.pdf',
  'Architekt.pdf',
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
