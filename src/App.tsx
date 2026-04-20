import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { compare } from 'bcryptjs'
import { APP_USERS } from './data/users'
import './App.css'

const AUTH_KEY = 'haussanierung-auth-token'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem(AUTH_KEY)
    setIsAuthenticated(Boolean(token))
  }, [])

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      const user = APP_USERS.find((item) => item.username === username.trim())

      if (!user) {
        setError('Ungueltige Zugangsdaten.')
        return
      }

      const passwordMatches = await compare(password, user.passwordHash)

      if (!passwordMatches) {
        setError('Ungueltige Zugangsdaten.')
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

  if (!isAuthenticated) {
    return (
      <main className="auth-page">
        <section className="auth-card">
          <h1>Haussanierung Klaus-Groth-Str.</h1>
          <p className="subtitle">Informationen zum Sanierungsstand</p>

          <form className="auth-form" onSubmit={handleLogin}>
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
        <h2>Projektansicht</h2>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <iframe
        title="Haussanierung Inhalte"
        src="/legacy-index.html"
        className="legacy-view"
      />
    </main>
  )
}

export default App
