import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const MAIN = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/agenda', 'Agenda'],
  ['/exhibitors', 'Exhibitors'],
  ['/floorplan', 'Floorplan'],
  ['/sponsors', 'Sponsors'],
  ['/gallery', 'Gallery'],
]
const COMPANY = [
  ['/contact', 'Contact'],
  ['/faq', 'FAQ'],
  ['/blog', 'Blogs'],
  ['/portal', 'Portal'],
  ['/travel', 'Travel & Stay'],
  ['/privacy', 'Privacy'],
  ['/terms', 'Terms'],
]

const navClass = ({ isActive }) => (isActive ? 'on' : '')

export default function SiteHeader() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="head">
      <div className="wrap head-in">
        <Link to="/" className="logo">
          <img src="/assets/logos/logo-header.png" alt="Traders Expo" />
        </Link>{' '}
        <nav className={open ? 'nav open' : 'nav'}>
          {MAIN.map(([to, label]) => (
            <NavLink key={to} to={to} end className={navClass}>{label}</NavLink>
          ))}
          <div className="drop">
            <Link to="/contact">Company ▾</Link>
            <div className="dropm">
              {COMPANY.map(([to, label]) => (
                <Link key={to} to={to}>{label}</Link>
              ))}
            </div>
          </div>
        </nav>{' '}
        <div className="hbtn">
          <Link className="btn btn-pill" to="/booking">Register</Link>
          <Link className="btn btn-outline" to="/login">Login</Link>
          <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(o => !o)}>☰</button>
        </div>
      </div>
    </header>
  )
}
