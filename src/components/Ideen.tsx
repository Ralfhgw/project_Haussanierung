import { Fragment, useEffect, useState } from 'react'
import { ExternalLink, FileText, Lightbulb } from 'lucide-react'
import './Ideen.css'

type IdeaLink = {
  href: string
  label: string
  type: 'intern' | 'extern'
}

type IdeaChapter = {
  links?: IdeaLink[]
  notes?: string[]
  summary: string
  title: string
}

const IDEA_CHAPTERS: IdeaChapter[] = [
  {
    title: 'Gestaltung des vorderen Flures',
    summary:
      'Ansicht des Flures.',
    notes: [
      'Trockenbau-Lichtvoute (ca. 8 cm hoch)',
      'Höhe: 10–12 cm',
      'Ausladung: 8–10 cm',
      'LED-Band verdeckt eingebaut',
      'COB-LED, 24 V',
      '3000 K',
      'CRI >90',
    ],
    links: [
      {
        label: 'Fluransicht',
        href: '/ideen/Idee_Flurgestaltung.png',
        type: 'intern',
      },
    ],
  },
    {
    title: 'Wohnzimmertür',
    summary: 'Türansicht.',
    notes: [
    'Es gibt zwei unterschiedliche Türblattbreiten. In diesem speziellen Einsatzfall muss geprüft werden, ob die breite Variante in Frage kommt.',
    ],
    links: [
      {
        label: 'Türansicht',
        href: '/ideen/Tuer.txt',
        type: 'intern',
      },
      {
        label: 'Türansicht',
        href: '/ideen/Tuer.png',
        type: 'intern',
      },
    ],
  },
    {
    title: 'Durchreiche zwischen Küche und Wohnzimmer',
    summary: 'Ansicht als Beispiel',
    notes: [
    'Wie hatten uns auf eine Größe von etwa Breite/Höhe von 80/90 cm verständigt.',
    ],
    links: [
      {
        label: 'Durchreiche',
        href: '/ideen/Durchreiche.png',
        type: 'intern',
      },
    ],
  },
]

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg']
const TEXT_EXTENSIONS = ['.txt', '.md']

function getExtension(path: string) {
  const cleanPath = path.split('?')[0] ?? path
  const lastDotIndex = cleanPath.lastIndexOf('.')
  return lastDotIndex >= 0 ? cleanPath.slice(lastDotIndex).toLowerCase() : ''
}

function isImagePath(path: string) {
  return IMAGE_EXTENSIONS.includes(getExtension(path))
}

function isTextPath(path: string) {
  return TEXT_EXTENSIONS.includes(getExtension(path))
}

function renderTextWithLinks(text: string) {
  const lines = text.split(/\r?\n/)

  return lines.map((line, index) => {
    const key = line + '-' + index

    if (!line.trim()) {
      return <div key={key} className={'ideen-inline-text__spacer'} aria-hidden={true} />
    }

    const parts = line.split(/(https?:\/\/[^\s]+)/g)

    return (
      <p key={key} className={'ideen-inline-text__line'}>
        {parts.map((part, partIndex) => {
          if (/^https?:\/\/[^\s]+$/.test(part)) {
            return (
              <a
                key={part + '-' + partIndex}
                href={part}
                target={'_blank'}
                rel={'noopener noreferrer'}
              >
                {part}
              </a>
            )
          }

          return <Fragment key={key + '-' + partIndex}>{part}</Fragment>
        })}
      </p>
    )
  })
}

export default function Ideen() {
  const [inlineTextByHref, setInlineTextByHref] = useState<Record<string, string>>({})

  useEffect(() => {
    const textHrefs = [
      ...new Set(
        IDEA_CHAPTERS.flatMap((chapter) => chapter.links ?? [])
          .filter((link) => link.type === 'intern' && isTextPath(link.href))
          .map((link) => link.href),
      ),
    ]

    if (!textHrefs.length) {
      return
    }

    let cancelled = false

    Promise.all(
      textHrefs.map(async (href) => {
        const response = await fetch(href)

        if (!response.ok) {
          throw new Error('Fehler beim Laden von ' + href)
        }

        const content = await response.text()
        return [href, content] as const
      }),
    )
      .then((entries) => {
        if (cancelled) {
          return
        }

        setInlineTextByHref(Object.fromEntries(entries))
      })
      .catch((error) => {
        console.error('Interne Ideen-Inhalte konnten nicht geladen werden.', error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section className={'ideen'}>
      <div className={'ideen-header'}>
        <p className={'ideen-kicker'}>Ideen</p>
        <h3>Ideensammlung und weiterführende Inhalte</h3>
        <p>
          Interne Inhalte aus <code>/public/ideen</code> werden direkt im jeweiligen
          Artikel gezeigt. Externe Verweise bleiben als Links erhalten und öffnen sich
          in einem neuen Tab.
        </p>
      </div>

      <div className={'ideen-list'}>
        {IDEA_CHAPTERS.map((chapter) => (
          <article key={chapter.title} className={'ideen-card'}>
            <div className={'ideen-card__icon'} aria-hidden={true}>
              <Lightbulb size={18} />
            </div>

            <div className={'ideen-card__body'}>
              <h4>{chapter.title}</h4>
              <p>{chapter.summary}</p>

              {chapter.notes?.length ? (
                <ul className={'ideen-notes'}>
                  {chapter.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}

              {chapter.links?.length ? (
                <div className={'ideen-links'}>
                  {chapter.links.map((link) => {
                    if (link.type === 'intern' && isImagePath(link.href)) {
                      return (
                        <figure key={link.href} className={'ideen-inline-asset'}>
                          <figcaption className={'ideen-inline-asset__title'}>
                            <FileText size={16} aria-hidden={true} />
                            <span>{link.label}</span>
                          </figcaption>
                          <img className={'ideen-inline-image'} src={link.href} alt={link.label} />
                        </figure>
                      )
                    }

                    if (link.type === 'intern' && isTextPath(link.href)) {
                      return (
                        <section
                          key={link.href}
                          className={'ideen-inline-asset ideen-inline-asset--text'}
                        >
                          <div className={'ideen-inline-asset__title'}>
                            <FileText size={16} aria-hidden={true} />
                            <span>{link.label}</span>
                          </div>
                          <div className={'ideen-inline-text'}>
                            {inlineTextByHref[link.href] ? (
                              renderTextWithLinks(inlineTextByHref[link.href])
                            ) : (
                              <p className={'ideen-inline-text__loading'}>Inhalt wird geladen...</p>
                            )}
                          </div>
                        </section>
                      )
                    }

                    return (
                      <a
                        key={link.href}
                        className={'ideen-link'}
                        href={link.href}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                      >
                        <span className={'ideen-link__meta'}>
                          {link.type === 'intern' ? (
                            <FileText size={16} aria-hidden={true} />
                          ) : (
                            <ExternalLink size={16} aria-hidden={true} />
                          )}
                          <span>{link.type === 'intern' ? 'Datei' : 'Externer Link'}</span>
                        </span>
                        <strong>{link.label}</strong>
                      </a>
                    )
                  })}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
