import { useState } from 'react'
import { APP_USERS } from './data/users'
import Atg from './components/Atg'
import Dokumente from './components/Dokumente'
import Fotos from './components/Fotos'
import Kosten from './components/Kosten'
import './App.css'

const AUTH_KEY = 'haussanierung-auth-token'
type Tab = 'start' | 'kosten' | 'dokumente' | 'fotos' | 'atg'
type ExpandableListItem = {
  label: string
  children: string[]
}

type ProjectArea = {
  title: string
  text?: string
  items?: ExpandableListItem[]
}

const PROJECT_STATS = [
  { label: 'Projektphase', value: 'Innenausbau (Stromnetzerneuerung)' },
  { label: 'Nächster Termin', value: '24.06.2026 - Suche nach Trockenbauer / Maurer für Kleinauftrag' },
  { label: 'Dokumentation', value: 'Firmenverträge und Rechnungen sind über den Tab Dokumente abrufbar.' },
]

const PROJECT_AREAS: ProjectArea[] = [
  {
    title: 'Baufortschritt',
    text: 'Momentan läuft die Erneuerung der Stromleitungen. Es waren ursprünglich Aluminiumkabel verlegt worden und ohne gelb/grün. Deckenplatten wurden im Wohnzimmer entfernt.',
  },
  {
    title: 'Aktuelles',
    text: 'Hager ZB32ET215W2 Komplettschrank wurde geliefert.' ,
  },
  {
    title: 'Abstimmungen',
    items: [
      {
        label: '23.06.2026 - Anwohnerversammlung - Straßensanierung',
        children: [
          'Haupt-Trinkwasserversorgung wird erneuert und die Grundstücke angebunden.',
          'Haupt-Stromleitung wird erneuert und die Grundstücke angebunden.',
          'Verlegung von Leerrohren für den späteren Breitbandausbau.',
          'Dauer der Baumaßnahme bis Weihnachten 2027 und Startbeginn 20.07.2026',
          'Mülltonnen / Gelbe Säcke bis 07:00 rausstellen, Bauleute transportieren diese zum Sammelpunkt',
          'Bei Problemen an Herrn Müller-Tittel wenden',
          '1 x pro Woche ist Bauberatungaller Gewerke + Ing.-Büro',
          'Optional (auf eigene Kosten) - zwei Anschlussschächte für Schmutz- und Regenwasser, ca. 1m hinter Grundstückgrenze'
        ],
      },
    ],
  },
]

const HOUSE_DRAWINGS = [
  {
    title: 'Animation Erdgeschoss',
    href: '/zeichnungen/Animation Erdgeschoss.pdf',
  },
  {
    title: 'Animation KG und EG und Dachkonstruktion',
    href: '/zeichnungen/Animation KG und EG und Dachkonstruktion.pdf',
  },
  {
    title: 'Animation Kellergeschoss',
    href: '/zeichnungen/Animation Kellergeschoss.pdf',
  },
  {
    title: 'Animation mit Wintergarten',
    href: '/zeichnungen/Animation mit Wintergarten.pdf',
  },
  {
    title: 'Drahtmodell Bauwerk',
    href: '/zeichnungen/Drahtmodell Bauwerk.pdf',
  },
  {
    title: 'EG Grundriss mit Wintergarten',
    href: '/zeichnungen/EG Grundriss mit Wintergarten.pdf',
  },
  {
    title: 'Grundriss Erdgeschoss',
    href: '/zeichnungen/Grundriss ERDGESCHOSS.pdf',
  },
  {
    title: 'Grundriss Kellergeschoss',
    href: '/zeichnungen/Grundriss KELLERGESCHOSS.pdf',
  },
  {
    title: 'Wintergarten System 3D - 1',
    href: '/zeichnungen/Wintergarten System 3D -1.pdf',
  },
  {
    title: 'Wintergarten System 3D - 2',
    href: '/zeichnungen/Wintergarten System 3D-2.pdf',
  },
  {
    title: 'Wintergarten Systemschnitt',
    href: '/zeichnungen/Wintergarten Systemschnitt.pdf',
  },
]

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window === 'undefined') return false
    return Boolean(window.localStorage.getItem(AUTH_KEY))
  })

  const handleLogin = async () => {
    setError('')
    setLoading(true)

    try {
      const user = APP_USERS.find((item) => item.username === username.trim())

      if (!user) {
        setError('Ungültige Zugangsdaten.')
        return
      }

      const passwordMatches = await window.dcodeIO.bcrypt.compare(
        password,
        user.passwordHash,
      )

      if (!passwordMatches) {
        setError('Ungültige Zugangsdaten.')
        return
      }

      localStorage.setItem(AUTH_KEY, `${user.username}:${Date.now()}`)
      setIsAuthenticated(true)
      setPassword('')
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY)
    setIsAuthenticated(false)
  }

  const [tab, setTab] = useState<Tab>('start')

  const toggleItem = (key: string) => {
    setExpandedItems((current) => ({
      ...current,
      [key]: !current[key],
    }))
  }
  if (!isAuthenticated) {
    return (
      <main className="auth-page">
        <section className="auth-card">
          <h1>Haussanierung Klaus-Groth-Str.</h1>
          <p className="subtitle">Informationen zum Sanierungsstand</p>

          <form
            className="auth-form"
            onSubmit={(event) => {
              event.preventDefault()
              void handleLogin()
            }}
          >
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              autoComplete="username"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
            />

            {error ? <p className="error">{error}</p> : null}

            <button type="submit" disabled={loading}>
              {loading ? 'Login laeuft...' : 'Login'}
            </button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="content-page">
      <header className="app-header">
        <div className="header-copy">
          <p className="eyebrow">Projektportal</p>
          <h1>Haussanierung Klaus-Groth-Str.</h1>
          <p className="header-text">
            Alle wichtigen Informationen zu Fortschritt, Unterlagen und
            Abstimmungen an einem Ort.
          </p>
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <nav className="tabs">
        <button
          className={tab === 'start' ? 'tab active' : 'tab'}
          onClick={() => setTab('start')}
        >
          Startseite
        </button>
        <button
          className={tab === 'kosten' ? 'tab active' : 'tab'}
          onClick={() => setTab('kosten')}
        >
          Kosten
        </button>
        <button
          className={tab === 'dokumente' ? 'tab active' : 'tab'}
          onClick={() => setTab('dokumente')}
        >
          Dokumente
        </button>
        <button
          className={tab === 'fotos' ? 'tab active' : 'tab'}
          onClick={() => setTab('fotos')}
        >
          Fotos
        </button>
                <button
          className={tab === 'atg' ? 'tab active' : 'tab'}
          onClick={() => setTab('atg')}
        >
          ATG
        </button>
      </nav>

      <section className="tab-content">
        {tab === 'start' && (
          <div className="home">
            <section className="hero-panel">
              <div className="hero-copy">
                <p className="section-kicker">Startseite</p>
                <h2>Projektübersicht</h2>
                <p>
                  Diese Startseite ist der Einstieg in das Projekt und
                  fasst die wichtigsten Bereiche direkt sichtbar zusammen.
                </p>
              </div>

              <div className="hero-highlight">
                <span className="highlight-label">Aktueller Fokus</span>
                <strong>Trockenbau</strong>
                <p>
                  Nach der Entfernung der Deckenplatten, muss die Zwischenwand versetzt werden. Dafür sind Maurerarbeiten notwendig, um den Durchbruch für die Tür im Vorfeld zu machen. Die Stelle für die Montage des Sicherungskastens soll vorbereitet werden. Verbesserungen an der oberen Wandkante sollen besprochen werden.
                </p>
              </div>
            </section>

            <section className="stats-grid" aria-label="Projektkennzahlen">
              {PROJECT_STATS.map((item) => (
                <article key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </section>

            <section className="content-grid">
              <article className="panel overview-panel">
                <div className="panel-heading">
                  <p className="section-kicker">Überblick</p>
                </div>
                <div className="overview-list">
                  {PROJECT_AREAS.map((area) => (
                    <article key={area.title} className="overview-item">
                      <h4>{area.title}</h4>
                      {area.text ? <p>{area.text}</p> : null}
                      {area.items?.length ? (
                        <ul className="expandable-list">
                          {area.items.map((item) => {
                            const itemKey = area.title + '-' + item.label
                            const isExpanded = Boolean(expandedItems[itemKey])

                            return (
                              <li key={itemKey} className="expandable-list-item">
                                <button
                                  type="button"
                                  className="expandable-trigger"
                                  onClick={() => toggleItem(itemKey)}
                                  aria-expanded={isExpanded}
                                >
                                  <span>{item.label}</span>
                                  <span className="expandable-icon" aria-hidden="true">
                                    {isExpanded ? '-' : '+'}
                                  </span>
                                </button>
                                {isExpanded ? (
                                  <ul className="expandable-sublist">
                                    {item.children.map((child) => (
                                      <li key={child}>{child}</li>
                                    ))}
                                  </ul>
                                ) : null}
                              </li>
                            )
                          })}
                        </ul>
                      ) : null}
                    </article>
                  ))}
                </div>
              </article>

              <aside className="panel timeline-panel">
                <div>
                  <div>
                    <p className="section-kicker">Technische Zeichnungen</p>
                    <p>Direktzugriff auf die hinterlegten PDF-Dokumente des Hauses.</p>
                  </div>
                  <ul className="drawing-links-list">
                    {HOUSE_DRAWINGS.map((drawing) => (
                      <li key={drawing.href}>
                        <a href={drawing.href} target="_blank" rel="noreferrer">
                          {drawing.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </section>
          </div>
        )}

        {tab === 'atg' && <Atg />}

        {tab === 'kosten' && (
          <Kosten />
        )}

        {tab === 'dokumente' && <Dokumente />}

        {tab === 'fotos' && <Fotos />}

      </section>
    </main>
  )
}

export default App
