import { useState } from 'react'
import { APP_USERS } from './data/users'
import Atg from './components/Atg'
import Dokumente from './components/Dokumente'
import Fotos from './components/Fotos'
import Kosten from './components/Kosten'
import './App.css'

const AUTH_KEY = 'haussanierung-auth-token'
type Tab = 'start' | 'atg' | 'kosten' | 'dokumente' | 'fotos'

const PROJECT_STATS = [
  { label: 'Projektphase', value: 'Innenausbau' },
  { label: 'Nächster Termin', value: 'Anschluss der neu verlegten Stromleitungen' },
  { label: 'Dokumentation', value: 'Firmenverträge und Rechnungen sind über den Tab Dokumente abrufbar.' },
]

const PROJECT_AREAS = [
  {
    title: 'Baufortschritt',
    text: 'Momentan läuft die Erneuerung der Stromleitungen. Es waren ursprünglich Aluminiumkabel verlegt worden und ohne gelb/grün. ',
  },
  {
    title: 'Abstimmungen',
    text: 'in Vorbereitung...',
  },
  {
    title: 'Dokumente & Fotos',
    text: 'Bilder, Kosten und externe Inhalte sind über die entsprechenden Tabs erreichbar.',
  },
]

const PROJECT_STEPS = [
  'Austausch der Stromverkabelung im Haus',
  'Dokumentation der Anschlüsse',
  'Installation eines neuen Sicherungkastens',
  'Zweitbesichtigung des Kellers durch ATG im August 2026',
]

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
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
          className={tab === 'atg' ? 'tab active' : 'tab'}
          onClick={() => setTab('atg')}
        >
          ATG
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
      </nav>

      <section className="tab-content">
        {tab === 'start' && (
          <div className="home">
            <section className="hero-panel">
              <div className="hero-copy">
                <p className="section-kicker">Startseite</p>
                <h2>Projektübersicht</h2>
                <p>
                  Diese Startseite dient als Einstieg in das Projekt und
                  fasst die wichtigsten Bereiche direkt sichtbar zusammen.
                </p>
              </div>

              <div className="hero-highlight">
                <span className="highlight-label">Aktueller Fokus</span>
                <strong>Transparente Projektsteuerung</strong>
                <p>
                  Status, Kosten und Fotodokumentation sind hier zentral
                  gebündelt und auf einen Blick nachvollziehbar.
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
                  <h3>Was auf der Startseite sichtbar ist...</h3>
                </div>
                <div className="overview-list">
                  {PROJECT_AREAS.map((area) => (
                    <article key={area.title} className="overview-item">
                      <h4>{area.title}</h4>
                      <p>{area.text}</p>
                    </article>
                  ))}
                </div>
              </article>

              <aside className="panel timeline-panel">
                <div className="panel-heading">
                  <p className="section-kicker">Nächste Schritte</p>
                  <h3>Empfohlene Struktur für Inhalte</h3>
                </div>
                <ol className="steps-list">
                  {PROJECT_STEPS.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
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
