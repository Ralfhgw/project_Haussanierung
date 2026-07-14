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
    title: 'Foerderung und Nachweise',
    summary:
      'Sammlung fuer Unterlagen, Foerderwege und offene Fragen, die vor einer Umsetzung sauber geklaert werden sollten.',
    notes: [
      'Foerderfaehige Massnahmen und Reihenfolge frueh abstimmen.',
      'Nachweise und Vollmachten gesammelt an einer Stelle ablegen.',
      'Zeitkritische Punkte fuer BAFA oder Energieberatung dokumentieren.',
    ],
    links: [
      {
        label: 'Projektnotiz im Ideen-Ordner',
        href: '/ideen/Hinweise.txt',
        type: 'intern',
      },
      {
        label: 'BAFA - Energie im Gebaeude',
        href: 'https://www.bafa.de/de/energie/gebaeude',
        type: 'extern',
      },
    ],
  },
  {
    title: 'Ausbau und Priorisierung',
    summary:
      'Gedanken fuer spaetere Bauabschnitte, damit Entscheidungen nicht nur spontan aus dem Tagesgeschaeft getroffen werden.',
    notes: [
      'Massnahmen nach Aufwand, Nutzen und Abhaengigkeiten sortieren.',
      'Frueh festhalten, was Eigenleistung bleibt und was vergeben wird.',
      'Ideen mit groben Kostenschaetzungen oder benoetigten Dokumenten versehen.',
    ],
    links: [
      {
        label: 'Checkliste fuer naechste Schritte',
        href: '/ideen/Checkliste.txt',
        type: 'intern',
      },
    ],
  },
  {
    title: 'Inspiration und Recherche',
    summary:
      'Bereich fuer externe Quellen, Herstellerseiten oder Vergleichsseiten, die spaeter noch einmal gebraucht werden koennen.',
    notes: [
      'Nur belastbare Quellen aufnehmen und kurz kommentieren.',
      'Bei jeder Quelle notieren, warum sie relevant ist.',
    ],
    links: [
      {
        label: 'Praxiswissen Modernisierung - Verbraucherzentrale',
        href: 'https://www.verbraucherzentrale.de/wissen/energie',
        type: 'extern',
      },
    ],
  },
]

export default function Ideen() {
  return (
    <section className="ideen">
      <div className="ideen-header">
        <p className="ideen-kicker">Ideen</p>
        <h3>Ideensammlung und weiterfuehrende Links</h3>
        <p>
          Kapitel koennen interne Dateien aus <code>/public/ideen</code> und
          externe Quellen enthalten. So bleibt alles an einem Ort gesammelt.
        </p>
      </div>

      <div className="ideen-grid">
        {IDEA_CHAPTERS.map((chapter) => (
          <article key={chapter.title} className="ideen-card">
            <div className="ideen-card__icon" aria-hidden="true">
              <Lightbulb size={18} />
            </div>

            <div className="ideen-card__body">
              <h4>{chapter.title}</h4>
              <p>{chapter.summary}</p>

              {chapter.notes?.length ? (
                <ul className="ideen-notes">
                  {chapter.notes.map((note) => (
                    <li key={note}>{note}</li>
                  ))}
                </ul>
              ) : null}

              {chapter.links?.length ? (
                <div className="ideen-links">
                  {chapter.links.map((link) => (
                    <a
                      key={link.href}
                      className="ideen-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ideen-link__meta">
                        {link.type === 'intern' ? (
                          <FileText size={16} aria-hidden="true" />
                        ) : (
                          <ExternalLink size={16} aria-hidden="true" />
                        )}
                        <span>{link.type === 'intern' ? 'Intern' : 'Extern'}</span>
                      </span>
                      <strong>{link.label}</strong>
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
