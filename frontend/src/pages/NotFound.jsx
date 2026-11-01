import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found | Traders Expo Johannesburg')

  return (
    <section className="pagehero" style={{ backgroundImage: 'url(/assets/img/profx-26.webp)' }}>
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <div className="cta" style={{ justifyContent: 'flex-start' }}>
          <Link className="btn btn-pill" to="/">Back to home</Link>
          <Link className="btn btn-outline" to="/contact">Contact us</Link>
        </div>
      </div>
    </section>
  )
}
