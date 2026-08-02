import { useState } from 'react'
import {
  Bell,
  Building2,
  CalendarClock,
  ChevronDown,
  Euro,
  FileText,
  FolderOpen,
  Hammer,
  Images,
  LayoutDashboard,
  Lightbulb,
  Lock,
  LogOut,
  PanelsTopLeft,
  Ruler,
  Target,
  TrendingUp,
  User,
  Users,
} from 'lucide-react'
import { APP_USERS } from './data/users'
import Atg from './components/Atg'
import Dokumente from './components/Dokumente'
import Fotos from './components/Fotos'
import Ideen from './components/Ideen'
import Kosten from './components/Kosten'
import './App.css'

const AUTH_KEY = 'haussanierung-auth-token'
type Tab = 'start' | 'kosten' | 'dokumente' | 'fotos' | 'ideen' | 'atg'
type IconType = typeof LayoutDashboard
type ExpandableListItem = {
  label: string
  children: string[]
}

type ProjectArea = {
  title: string
  icon: IconType
  text?: string
  items?: ExpandableListItem[]
}

const TAB_ITEMS: { id: Tab; label: string; icon: IconType }[] = [
  { id: 'start', label: 'Startseite', icon: LayoutDashboard },
  { id: 'kosten', label: 'Kosten', icon: Euro },
  { id: 'dokumente', label: 'Dokumente', icon: FileText },
  { id: 'fotos', label: 'Fotos', icon: Images },
  { id: 'ideen', label: 'Ideen', icon: Lightbulb },
  { id: 'atg', label: 'ATG', icon: PanelsTopLeft },
]

const PROJECT_STATS: { label: string; value: string; icon: IconType }[] = [
  { label: 'Projektphase', value: 'Innenausbau (Stromnetzerneuerung)', icon: Hammer },
  { label: 'Nächster Termin', value: '13.08.2026 10:30 Uhr - Online Auswertung Energiefahrplan', icon: CalendarClock },
  { label: 'Dokumentation', value: 'Firmenverträge und -rechnungen sind über den Tab Dokumente einsehbar. Enstandene Materialkosten sind über den Tab Kosten abrufbar.', icon: FolderOpen },
]

const PROJECT_AREAS: ProjectArea[] = [
  {
    title: 'Baufortschritt',
    icon: TrendingUp,
    text: 'Momentan läuft die Erneuerung der Stromleitungen. Es waren ursprünglich Aluminiumkabel verlegt worden und ohne gelb/grün. Deckenplatten wurden im Wohnzimmer entfernt.',
  },
  {
    title: 'Aktuelles',
    icon: Bell,
    text: 'Energiefahrplan von Fuchs&Eule ist fertig. Die Grundreinigung der Wände in WZ, GZ, SW ist abgeschlossen. Es beginnt die Tiefengrundierung und Kabelverlegung.' ,
  },
  {
    title: 'Abstimmungen',
    icon: Users,
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
      {
        label: '10.07.2026 - Telefongespräch Energieberatung Fuchs & Eule',
        children: [
          'Termin 14:00 Uhr - Gespräch mit Laura Barnowski',
          'Erstgespräch mit Abfrage der Grunddaten des Hauses',
          'Als nächstes wird die Bafa Förderung eingereicht.',
          'Vor-Ort-Termin in nächster Zeit zur Qualitätskontrolle',
          'Firma erstellt den Sanierungsfahrplan, danach gibt es ein letztes Gespräch, bevor die Förderbescheinigung ausgehändigt wird.',
          'Die Maßnahmen für die Umsetzung sind dann förderfähig, müssen aber von einem lizensierten Fachmann kontrolliert werden. Fuchs & Eule kann es übernehmen.'
        ],
      },
      {
        label: '13.08.2026 - Telefongespräch Energieberatung Fuchs & Eule',
        children: [
          'Termin 10:30 Uhr - Gespräch mit Christian Enderes',
        ],
      },
    ],
  },
]

const HOUSE_DRAWINGS = [
  {
    title: 'Hausanschlüsse Strom, Gas und Trinkwasser',
    href: '/zeichnungen/Strom-Gas-Trinkwasser.pdf',
  },
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
    title: 'Grundriss Erdgeschoss Planung',
    href: '/zeichnungen/EG_Grundriss_Planung.pdf',
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
          <div className="auth-brand">
            <span className="brand-badge">
              <Building2 size={26} strokeWidth={2.2} />
            </span>
            <div>
              <p className="eyebrow">Projektportal</p>
              <h1>Haussanierung Klaus-Groth-Str.</h1>
            </div>
          </div>
          <p className="subtitle">Informationen zum Sanierungsstand</p>

          <form
            className="auth-form"
            onSubmit={(event) => {
              event.preventDefault()
              void handleLogin()
            }}
          >
            <label htmlFor="username">Username</label>
            <div className="input-wrap">
              <User size={18} className="input-icon" aria-hidden="true" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-wrap">
              <Lock size={18} className="input-icon" aria-hidden="true" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {error ? <p className="error">{error}</p> : null}

            <button type="submit" disabled={loading}>
              {loading ? 'Login läuft...' : 'Login'}
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
          <span className="brand-badge">
            <Building2 size={28} strokeWidth={2.2} />
          </span>
          <div>
            <p className="eyebrow">Projektportal</p>
            <h1>Haussanierung Klaus-Groth-Str.</h1>
            <p className="header-text">
              Alle wichtigen Informationen zu Fortschritt, Unterlagen und
              Abstimmungen an einem Ort.
            </p>
          </div>
        </div>
        <button className="logout" onClick={handleLogout}>
          <LogOut size={18} aria-hidden="true" />
          <span>Logout</span>
        </button>
      </header>

      <nav className="tabs">
        {TAB_ITEMS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={tab === id ? 'tab active' : 'tab'}
            onClick={() => setTab(id)}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </button>
        ))}
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
                <span className="highlight-label">
                  <Target size={16} aria-hidden="true" />
                  Aktueller Fokus
                </span>
                <strong>Trockenbau</strong>
                <p>
                  Nach der Entfernung der Deckenplatten, muss die Zwischenwand versetzt werden. Dafür sind Maurerarbeiten notwendig, um den Durchbruch für die Tür im Vorfeld zu machen. Die Stelle für die Montage des Sicherungskastens soll vorbereitet werden. Verbesserungen an der oberen Wandkante sollen besprochen werden.
                </p>
              </div>
            </section>

            <section className="stats-grid" aria-label="Projektkennzahlen">
              {PROJECT_STATS.map(({ label, value, icon: Icon }) => (
                <article key={label} className="stat-card">
                  <span className="stat-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </section>

            <section className="content-grid">
              <article className="panel overview-panel">
                <div className="panel-heading">
                  <p className="section-kicker">Überblick</p>
                </div>
                <div className="overview-list">
                  {PROJECT_AREAS.map((area) => {
                    const AreaIcon = area.icon
                    return (
                    <article key={area.title} className="overview-item">
                      <h4>
                        <span className="overview-icon" aria-hidden="true">
                          <AreaIcon size={18} />
                        </span>
                        {area.title}
                      </h4>
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
                                  <span
                                    className={
                                      isExpanded
                                        ? 'expandable-icon open'
                                        : 'expandable-icon'
                                    }
                                    aria-hidden="true"
                                  >
                                    <ChevronDown size={18} />
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
                    )
                  })}
                </div>
              </article>

              <aside className="panel timeline-panel">
                <div>
                  <div className="panel-heading">
                    <p className="section-kicker">
                      <Ruler size={16} aria-hidden="true" />
                      Technische Zeichnungen
                    </p>
                    <p>Direktzugriff auf die hinterlegten PDF-Dokumente des Hauses.</p>
                  </div>
                  <ul className="drawing-links-list">
                    {HOUSE_DRAWINGS.map((drawing) => (
                      <li key={drawing.href}>
                        <a href={drawing.href} target="_blank" rel="noreferrer">
                          <span className="drawing-icon" aria-hidden="true">
                            <FileText size={18} />
                          </span>
                          <span className="drawing-title">{drawing.title}</span>
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

        {tab === 'ideen' && <Ideen />}

      </section>
    </main>
  )
}

export default App