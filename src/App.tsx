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
  Phone,
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

const normalizePath = (pathname: string) =>
  pathname.replace(/\/+/g, '/').replace(/\/$/, '') || '/'

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
/*   { id: 'atg', label: 'ATG', icon: PanelsTopLeft }, */
]

const PROJECT_STATS: { label: string; value: string; icon: IconType }[] = [
  { label: 'Projektphase', value: 'Innenausbau (Strom, Wände verputzen, Türdurchbruch im Wohnzimmer und Durchreiche zur Küche)', icon: Hammer },
  { label: 'Nächster Termin', value: '13.08.2026 10:30 Uhr - Online Auswertung Energiefahrplan', icon: CalendarClock },
  { label: 'Dokumentation', value: 'Firmenverträge und -rechnungen sind über den Tab Dokumente einsehbar. Enstandene Materialkosten sind über den Tab Kosten abrufbar.', icon: FolderOpen },
]

const PROJECT_AREAS: ProjectArea[] = [
  {
    title: 'Baufortschritt',
    icon: TrendingUp,
    text: 'Aktuell werden die Innenwände mit Amierungsgewebe verputzt. Der Türdurchbruch im Wohnzimmer wird gemacht und dafür ein Sturz eingebaut. Die Durchreiche zur Küche wird vergrößert.',
  },
  {
    title: 'Aktuelles',
    icon: Bell,
    text: 'Warten auf angebote der Heizungsfirmen. Der Estrich aus dem Wohnzimmer wird entfernt werden.' ,
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
          'Fachplanungskosten (und weitere Gewerke wie Architekt und Co.) zu 50 % gefördert werden.', 
          'Die Kosten der Fördermittelbegleitung hängen dabei vom Investitionsvolumen der jeweiligen Maßnahme ab:', 
          '2.500,00 bis 5.000,00 € Investitionsvolumen --> 600,00 € Gesamtpreis  --> 50 % Förderung => 300,00 € Ihr Eigenanteil',
          '5.000,01 € 24.999,99 € Investitionsvolumen --> 989,00 € Gesamtpreis -->  50 % Förderung => 494,5 € Ihr Eigenanteil',
          '> 25.000,00 Investitionsvolumen --> 4 % der Auftragssumme = Gesamtpreis -->  50 % Förderung => 2 % der Auftragssumme Ihr Eigenanteil',
          'Heizungstausch über die KfW --> 989,00 € Pauschalpreis --> keine Förderung => 989,00 € Ihr Eigenanteil',
          'Es wurde nachträglich de Aufsparrendämmung als mögliche Maßnahme hinzugefügt.',
        ],
      },
    ],
  },
]

const CONTACTS: ExpandableListItem[] = [
  {
    label: 'Einbautüren',
    children: [
      'Firma: --- Wilhelm Linnenbecker GmbH & Co. KG  ---',
      'Kontakt: Michaela Horn',
      'Telefon: +49 3834 576433',
      'Mobile:  +49 172 4211678',
      'E-Mail:  m.horn@ linnenbecker.de',
      'Termin:  01.09.2026 um 12:00 Uhr in Filiale',
      'Aktuell: Warten auf das Angebot für die 5 Türen',
    ],
  },
  {
    label: 'Abrissfirmen',
    children: [
      'Firma: --- Thomas Schmidt (Kontakt Basti)---',
      'Telefon: +49 ...',
      'Mobile:  +49 176 24138348',
      'E-Mail:  dkbs.schmidt@icloud.com',
      'Termin:  04.09.2026 10:00 Uhr',
      'Aktuell: Angebot für Estrichentsorgung auf Nachfrage, kurzfristig möglich',
      'Firma: --- Hagemann GmbH ---',
      'Telefon: +49 38375 229777 ',
      'Mobile:  +49 172 9006627',
      'E-Mail:  kalkulation@hagemann-h.de',
      'Termin:  ',
      'Aktuell: Angebot per eMail erhalten Estrich Pauschalpreis 2250 €, Betonplatte 1950 €, kurzfristig möglich.',
      'Firma: --- Bauservice Müller ---',
      'Telefon: +49 38375 229777 ',
      'Mobile:  +49 172 6961519',
      'E-Mail:  kontakt@bauservice-mueller.info',
      'Termin:  ',
      'Aktuell: Angebot angefordert',
    ],
  },
  {
    label: 'Fußboden',
    children: [
      'Firma: --- Bodenlegerbetrieb René Goede ---',
      'Kontakt: René Goede 17506 Gützkow OT Neuendorf',
      'Telefon: +49 ',
      'Mobile:  +49 152 02068248',
      'E-Mail:  https://bodenleger-goede.de/',
      'Termin:  26.08.2026 10:30 Uhr vor Ort',
      'Aktuell: Nettes Gespräch, füllt den Estrich auf im Wohnzimmer und verschließt auch die Schlitze',
      'Firma: --- Fussbodentechnik Greifswald GmbH ---',
      'Kontakt: 17498 Hinrichshagen Chausseestraße 1',
      'Telefon: +49 3834 594580',
      'Mobile:  +49 171 8976723',
      'E-Mail:  http://www.fussbodentechnik-gmbh.de/',
      'Termin:  war vor Ort',
      'Aktuell: Älterer Herr (Harley Typ) - 25€/m2 für Estrich reinkippen',
    ],
  },
  {
    label: 'Heizung- & Sanitärinstallation',
    children: [
      'Firma: --- Sochiera Heizung- & Sanitärinstallation ---',
      'Kontakt: Lange Reihe 20, 17489 Greifswald',
      'Telefon: +49 3834 57750',
      'Mobile:  +49 174 9460245',
      'E-Mail:  ',
      'Termin:  02.09.2026 12:00 Uhr',
      'Aktuell: Erstellt Plan für die Heizung, Vorschlag für RTL Boxen',
      'Firma: --- (Bastis Kontakt) ---',
      'Kontakt: ',
      'Telefon: +49 ',
      'Mobile:  +49 176 14118608',
      'E-Mail:  CRS-SHK-Installation@outlook.de',
      'Termin:  war vor Ort',
      'Aktuell: Macht ein Angebot.',
      'Firma: --- Eichhorst & Krempin Heizung und Sanitär GmbH ---',
      'Kontakt: Am Koppelberg 1B, 17489 Greifswald',
      'Telefon: +49 3834 58513',
      'Mobile:  +49 ',
      'E-Mail:  ',
      'Termin:  Termin 17.09. 07:30-08:00 Uhr',
      'Aktuell: ',
    ],
  },
  {
    label: 'Dachdeckerei',
    children: [
      'Firma: --- Hollmann Roberto Dachdeckerei ---',
      'Kontakt: Herderstr. 18 17489 Greifswald',
      'Telefon: +49',
      'Mobile:  +49 172 1775195',
      'E-Mail:  ',
      'Termin:  24.08.2026 14:00 Uhr',
      'Aktuell: Würde keine Aufdachdämmung machen',
    ],
  },
  {
    label: 'Fußbodenheizung',
    children: [
      'Firma: --- DML Fußbodenheizung GmbH ---',
      'Kontakt: Siegufer 1, 53783 Eitorf',
      'Telefon: +49 800 4100 300',
      'Mobile:  +49 ',
      'E-Mail:  info@fussbodenheizung-nachtraeglich-einfraesen.de',
      'Termin:  01.09.2026 12:00 Uhr',
      'Aktuell: Unterlagen per eMail zugeschickt, Firma würde nach dem Fräsen auch verschließen, 16-17mm Schlauchdicke 2mm, es muss geprüft werden, ob die Fußböden die gleich Höhe haben.',
      'Firma: --- ECOtherm GmbH ---',
      'Kontakt: Kuhlenstraße 42, 26655 Westerstede',
      'Telefon: +49 4488 5939590',
      'Mobile:  +49 173 2774738 (Techniker für Probebohrung)',
      'E-Mail:  info@ecotherm.de',
      'Termin:  ',
      'Aktuell: Beispielangebot erhalten, Warte auf Termin für Probebohrung',
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
  const currentPath =
    typeof window === 'undefined' ? '/' : normalizePath(window.location.pathname)
  const isAtgRoute = currentPath === '/atg'

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

  const isContactsExpanded = Boolean(expandedItems['Kontakte'])

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

  if (isAtgRoute) {
    return (
      <main className="content-page">
        <section className="tab-content">
          <Atg />
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
              <div className="content-column">
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

                <article className="panel contacts-panel">
                  <div className="panel-heading">
                    <button
                      type="button"
                      className="expandable-trigger contacts-trigger"
                      onClick={() => toggleItem('Kontakte')}
                      aria-expanded={isContactsExpanded}
                      aria-controls="contacts-list"
                    >
                      <span className="section-kicker">
                      <Phone size={16} aria-hidden="true" />
                      Kontakte
                      </span>
                      <span
                        className={
                          isContactsExpanded
                            ? 'expandable-icon open'
                            : 'expandable-icon'
                        }
                        aria-hidden="true"
                      >
                        <ChevronDown size={18} />
                      </span>
                    </button>
                  </div>
                  {isContactsExpanded ? (
                    <ul id="contacts-list" className="expandable-list contacts-list">
                      {CONTACTS.map((contact) => {
                        const itemKey = 'Kontakte-' + contact.label
                        const isExpanded = Boolean(expandedItems[itemKey])

                        return (
                          <li key={itemKey} className="expandable-list-item">
                            <button
                              type="button"
                              className="expandable-trigger"
                              onClick={() => toggleItem(itemKey)}
                              aria-expanded={isExpanded}
                            >
                              <span>{contact.label}</span>
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
                                {contact.children.map((child) => (
                                  <li
                                    key={child}
                                    className={
                                      child.startsWith('Firma:')
                                        ? 'company-line'
                                        : undefined
                                    }
                                  >
                                    {child.startsWith('Firma:') ? (
                                      <strong>{child.replace(/^Firma:\s*/, '')}</strong>
                                    ) : (
                                      child
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </li>
                        )
                      })}
                    </ul>
                  ) : null}
                </article>
              </div>

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