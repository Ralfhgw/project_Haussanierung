import { useEffect, useState } from 'react'
import { DOCUMENT_ENTRIES, type DocumentDescriptionMap } from '../data/dokumente'
import './Dokumente.css'

export default function Dokumente() {
  const [descriptions, setDescriptions] = useState<DocumentDescriptionMap>({})

  useEffect(() => {
    let isActive = true

    const loadDescriptions = async () => {
      try {
        const response = await fetch('/dokumente/descriptions.json', {
          cache: 'no-store',
        })

        if (!response.ok) {
          return
        }

        const data = (await response.json()) as DocumentDescriptionMap

        if (isActive) {
          setDescriptions(data)
        }
      } catch {
        // Keep empty descriptions when the optional JSON file is missing.
      }
    }

    void loadDescriptions()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <section className="dokumente">
      <div className="dokumente-header">
        <p className="dokumente-kicker">Dokumente</p>
        <h3>Dokumentenablage</h3>
        <p>
          Die Dateiliste wird automatisch aus
          {' '}
          <code>/public/dokumente</code>
          {' '}
          erzeugt. Beschreibungen kannst du in
          {' '}
          <code>/public/dokumente/descriptions.json</code>
          {' '}
          pflegen und per Browser-Refresh aktualisieren.
        </p>
      </div>

      {DOCUMENT_ENTRIES.length > 0 ? (
        <div className="dokumente-table-wrap">
          <table className="dokumente-table">
            <thead>
              <tr>
                <th scope="col">Datei</th>
                <th scope="col">Beschreibung</th>
              </tr>
            </thead>
            <tbody>
              {DOCUMENT_ENTRIES.map((entry) => (
                <tr key={entry.filename}>
                  <td data-label="Datei">
                    <a
                      className="dokumente-filename"
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {entry.filename}
                    </a>
                  </td>
                  <td data-label="Beschreibung">
                    {descriptions[entry.filename] || (
                      <span className="dokumente-placeholder">
                        Beschreibung noch nicht hinterlegt
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="dokumente-empty">
          <strong>Noch keine Dokumente vorhanden</strong>
          <p>
            Lege Dateien in
            {' '}
            <code>/public/dokumente</code>
            {' '}
            ab. Beim nächsten Start oder Build wird die Liste automatisch
            aktualisiert.
          </p>
        </div>
      )}
    </section>
  )
}
