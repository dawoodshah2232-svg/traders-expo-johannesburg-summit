import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from './auth'

// Sections are listed here as they get built; `ready: false` shows them as "soon"
export const ADMIN_SECTIONS = [
  { to: '/admin', label: 'Dashboard', ready: true },
  { to: '/admin/floorplans', label: 'Floor plan bookings', ready: true },
  { to: '/admin/registrations', label: 'Registrations' },
  { to: '/admin/speakers', label: 'Speakers' },
  { to: '/admin/sponsors', label: 'Sponsors' },
  { to: '/admin/exhibitors', label: 'Exhibitors' },
  { to: '/admin/agenda', label: 'Agenda' },
  { to: '/admin/messages', label: 'Contact messages' },
]

export default function AdminLayout() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <div className="min-h-screen">
      <header className="head">
        <div className="wrap head-in !max-w-none">
          <Link to="/admin" className="logo">
            <img src="/assets/logos/logo-header.png" alt="Traders Expo" />
          </Link>
          <span className="hero-badge">Admin</span>
          <div className="hbtn">
            {user?.email && <span className="hidden text-sm text-muted md:inline">{user.email}</span>}
            <a className="btn btn-outline hidden sm:inline-block" href="/" target="_blank" rel="noopener">View site</a>
            <button className="btn btn-pill" onClick={logout}>Log out</button>
            <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>☰</button>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className={`${open ? 'block' : 'hidden'} fixed inset-x-0 top-[78px] z-40 border-b border-line bg-head p-4 md:static md:block md:min-h-[calc(100vh-78px)] md:w-60 md:shrink-0 md:border-r md:border-b-0`}>
          <nav className="grid gap-1">
            {ADMIN_SECTIONS.map(s =>
              s.ready ? (
                <NavLink
                  key={s.to}
                  to={s.to}
                  end
                  className={({ isActive }) => `rounded-xl px-4 py-2.5 font-bold ${isActive ? 'bg-brand !text-white' : '!text-white hover:bg-panel-2'}`}
                >
                  {s.label}
                </NavLink>
              ) : (
                <span key={s.to} className="flex items-center justify-between rounded-xl px-4 py-2.5 font-bold text-muted/70">
                  {s.label}
                  <span className="rounded-full border border-line px-2 text-[11px] uppercase tracking-wider">soon</span>
                </span>
              )
            )}
          </nav>
        </aside>

        <main className="min-w-0 flex-1 bg-ink px-5 py-8 md:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
