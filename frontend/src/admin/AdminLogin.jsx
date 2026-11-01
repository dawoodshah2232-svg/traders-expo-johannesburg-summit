import { useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from './auth'
import usePageMeta from '../hooks/usePageMeta'

export default function AdminLogin() {
  usePageMeta('Admin login | Traders Expo Johannesburg')
  const { token, login } = useAuth()
  const navigate = useNavigate()
  const from = useLocation().state?.from || '/admin'
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  if (token) return <Navigate to={from} replace />

  const onSubmit = async e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    setBusy(true)
    setError('')
    try {
      await login(form.get('email'), form.get('password'))
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.status === 422 || err.status === 401 ? 'Wrong email or password.' : err.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="pagehero min-h-screen flex items-center" style={{ backgroundImage: 'url(/assets/img/profx-26.webp)' }}>
      <div className="wrap w-full">
        <div className="mx-auto max-w-md rounded-3xl border border-line bg-head/90 p-8 shadow-2xl backdrop-blur">
          <Link to="/" className="logo block">
            <img src="/assets/logos/logo-header.png" alt="Traders Expo" className="mx-auto" />
          </Link>
          <p className="eyebrow mt-6 text-center">Admin panel</p>
          <h1 className="!text-3xl text-center">Sign in</h1>
          <form className="form mt-6" onSubmit={onSubmit}>
            <label>Email<input name="email" type="email" autoComplete="username" required /></label>
            <label>Password<input name="password" type="password" autoComplete="current-password" required /></label>
            {error && <p className="m-0 rounded-xl border border-red-400/40 bg-red-500/15 p-3 text-sm text-red-200" role="alert">{error}</p>}
            <button className="btn btn-pill disabled:opacity-60" disabled={busy}>{busy ? 'Signing in…' : 'Sign in'}</button>
          </form>
          <p className="fine mt-6 text-center"><Link to="/">← Back to the website</Link></p>
        </div>
      </div>
    </section>
  )
}
