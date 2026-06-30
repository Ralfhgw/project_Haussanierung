import { PHOTO_ENTRIES } from '../data/fotos'
import './Fotos.css'

type MediaKind = 'image' | 'video'

type MediaEntry = {
  capturedAt: Date
  description?: string
  displayDate: string
  filename: string
  kind: MediaKind
  monthKey: string
  monthLabel: string
  src: string
}

const monthFormatter = new Intl.DateTimeFormat('de-DE', {
  month: 'long',
  year: 'numeric',
})

const dateTimeFormatter = new Intl.DateTimeFormat('de-DE', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

const mediaEntries: MediaEntry[] = PHOTO_ENTRIES.map(({ filename, description }) => {
  const match = filename.match(
    /^(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})_(?<hour>\d{2})(?<minute>\d{2})(?<second>\d{2})(?:[-_][^.]+)?\.(?<extension>[a-z0-9]+)$/i,
  )

  if (!match?.groups) {
    throw new Error(`Ungueltiger Foto-Dateiname: ${filename}`)
  }

  const {
    year,
    month,
    day,
    hour,
    minute,
    second,
    extension,
  } = match.groups

  const capturedAt = new Date(
    Number(year),
    Number(month) - 1,
    Number(day),
    Number(hour),
    Number(minute),
    Number(second),
  )

  return {
    capturedAt,
    description,
    displayDate: dateTimeFormatter.format(capturedAt),
    filename,
    kind: (extension.toLowerCase() === 'mp4' ? 'video' : 'image') as MediaKind,
    monthKey: `${year}-${month}`,
    monthLabel: monthFormatter.format(capturedAt),
    src: `/images/fotos/${filename}`,
  }
}).sort((left, right) => right.capturedAt.getTime() - left.capturedAt.getTime())

const mediaGroups = mediaEntries.reduce<
  Array<{ items: MediaEntry[]; monthKey: string; monthLabel: string }>
>((groups, entry) => {
  const currentGroup = groups.at(-1)

  if (!currentGroup || currentGroup.monthKey !== entry.monthKey) {
    groups.push({
      items: [entry],
      monthKey: entry.monthKey,
      monthLabel: entry.monthLabel,
    })
    return groups
  }

  currentGroup.items.push(entry)
  return groups
}, [])

export default function Fotos() {
  return (
    <section className="fotos">
      <div className="fotos-header">
        <p className="fotos-kicker">Fotos</p>
        <h3>Fotodokumentation nach Monaten</h3>
        <p>
          Bilder und Videos werden anhand ihres Dateinamens chronologisch
          gruppiert.
        </p>
      </div>

      {mediaGroups.map((group) => (
        <section key={group.monthKey} className="photo-month">
          <div className="photo-month-header">
            <h4>{group.monthLabel}</h4>
            <span>{group.items.length} Dateien</span>
          </div>

          <div className="photo-grid">
            {group.items.map((item) => (
              <article key={item.filename} className="photo-card">
                {item.kind === 'image' ? (
                  <a
                    className="photo-link"
                    href={item.src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="photo-image"
                      src={item.src}
                      alt={item.displayDate}
                      loading="lazy"
                    />
                  </a>
                ) : (
                  <video
                    className="photo-image"
                    controls
                    preload="metadata"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}

                <div className="photo-meta">
                  <div>
                    <strong>{item.displayDate}</strong>
                    {item.description && <p>{item.description}</p>}
                  </div>
                  <span>{item.kind === 'video' ? 'Video' : 'Bild'}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </section>
  )
}
