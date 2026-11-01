import { useAuth } from './auth'
import { ADMIN_SECTIONS } from './AdminLayout'
import usePageMeta from '../hooks/usePageMeta'

export default function Dashboard() {
  usePageMeta('Dashboard | Admin | Traders Expo Johannesburg')
  const { user } = useAuth()

  return (
    <>
      <p className="eyebrow">Admin panel</p>
      <h1 className="stitle">Welcome{user?.name ? `, ${user.name}` : ''} <span>back.</span></h1>
      <p className="section-lead max-w-2xl">
        Manage the content of thetradersexpo.com. Each section below is switched on once its API endpoint is
        ready in the Laravel backend.
      </p>

      <div className="grid3 mt-8">
        {ADMIN_SECTIONS.filter(s => !s.ready).map(s => (
          <div key={s.to} className="card">
            <h3>{s.label}</h3>
            <p className="text-muted">Coming soon — waiting for the API.</p>
          </div>
        ))}
      </div>
    </>
  )
}
