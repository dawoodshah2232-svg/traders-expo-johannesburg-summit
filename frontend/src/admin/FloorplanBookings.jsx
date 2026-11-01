import { useCallback, useEffect, useState } from 'react'
import { deleteBooking, downloadProof, listBookings, updateBooking } from '../api/floorplan'
import usePageMeta from '../hooks/usePageMeta'

const STATUS_STYLE = {
  pending: 'border-amber-400/40 bg-amber-400/15 text-amber-200',
  approved: 'border-brand/50 bg-brand/15 text-brand-light',
  rejected: 'border-red-400/40 bg-red-500/15 text-red-200',
}
const PAYMENT_LABEL = { now: 'NowPayments', stripe: 'Stripe', upi: 'UPI', usdt: 'USDT', bank: 'Bank deposit' }

const money = v => (v == null ? '—' : `$${Number(v).toLocaleString('en-US')}`)
const date = v => new Date(v).toLocaleString('en-ZA', { dateStyle: 'medium', timeStyle: 'short' })

function StatusBadge({ status }) {
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold capitalize ${STATUS_STYLE[status]}`}>{status}</span>
}

export default function FloorplanBookings() {
  usePageMeta('Floor plan bookings | Admin | Traders Expo Johannesburg')
  const [filters, setFilters] = useState({ search: '', status: '', page: 1 })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const [selected, setSelected] = useState(null)

  const load = useCallback(() => {
    setError('')
    const params = Object.fromEntries(Object.entries(filters).filter(([, v]) => v))
    return listBookings(params).then(setResult).catch(err => setError(err.message))
  }, [filters])

  useEffect(() => {
    const t = setTimeout(load, filters.search ? 300 : 0)
    return () => clearTimeout(t)
  }, [load, filters.search])

  const setFilter = (key, value) => setFilters(f => ({ ...f, [key]: value, page: key === 'page' ? value : 1 }))
  const stats = result?.stats

  return (
    <>
      <p className="eyebrow">Admin panel</p>
      <h1 className="stitle">Floor plan <span>bookings.</span></h1>

      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[['Total', stats?.total, ''], ['Pending', stats?.pending, 'pending'], ['Approved', stats?.approved, 'approved'], ['Rejected', stats?.rejected, 'rejected']].map(([label, value, status]) => (
          <button
            key={label}
            onClick={() => setFilter('status', status)}
            className={`rounded-2xl border p-4 text-left transition ${filters.status === status ? 'border-brand bg-panel-2' : 'border-line bg-panel hover:border-brand/60'}`}
          >
            <span className="block text-xs font-bold uppercase tracking-widest text-muted">{label}</span>
            <b className="text-3xl text-white">{value ?? '–'}</b>
          </button>
        ))}
      </div>

      <div className="form mb-4 !max-w-none md:grid-cols-[1fr_200px]">
        <input type="search" placeholder="Search name, email, company or booth no." value={filters.search} onChange={e => setFilter('search', e.target.value)} />
        <select value={filters.status} onChange={e => setFilter('status', e.target.value)}>
          <option value="">All statuses</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      {error && <p className="rounded-xl border border-red-400/40 bg-red-500/15 p-3 text-red-200" role="alert">{error}</p>}

      <div className="overflow-x-auto rounded-2xl border border-line bg-panel">
        <table className="w-full min-w-[820px] border-collapse text-left text-sm">
          <thead className="bg-panel-2 text-xs uppercase tracking-wider text-muted">
            <tr>
              {['Booth', 'Exhibitor', 'Contact', 'Amount', 'Payment', 'Status', 'Booked'].map(h => <th key={h} className="px-4 py-3 font-bold">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {result?.data.map(b => (
              <tr key={b.id} onClick={() => setSelected(b)} className="cursor-pointer border-t border-line hover:bg-panel-2">
                <td className="px-4 py-3"><b className="text-white">No. {String(b.boothno).padStart(2, '0')}</b><br /><span className="text-muted">{b.boothtitle}</span></td>
                <td className="px-4 py-3"><b className="text-white">{b.company || '—'}</b><br /><span className="text-muted">{b.name}</span></td>
                <td className="px-4 py-3">{b.email}<br /><span className="text-muted">{b.phone}</span></td>
                <td className="px-4 py-3">{money(b.boothammount)}</td>
                <td className="px-4 py-3">{PAYMENT_LABEL[b.paymenttype] || b.paymenttype || '—'}{b.networktype && <span className="text-muted"> · {b.networktype}</span>}</td>
                <td className="px-4 py-3"><StatusBadge status={b.status} /></td>
                <td className="px-4 py-3 text-muted">{date(b.created_at)}</td>
              </tr>
            ))}
            {result && !result.data.length && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-muted">No bookings found.</td></tr>
            )}
            {!result && !error && (
              <tr><td colSpan={7} className="px-4 py-10 text-center text-muted">Loading…</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {result && result.last_page > 1 && (
        <div className="mt-4 flex items-center justify-between text-sm text-muted">
          <span>Page {result.current_page} of {result.last_page} · {result.total} bookings</span>
          <span className="flex gap-2">
            <button className="btn btn-outline !px-4 !py-2 disabled:opacity-40" disabled={result.current_page <= 1} onClick={() => setFilter('page', result.current_page - 1)}>← Prev</button>
            <button className="btn btn-outline !px-4 !py-2 disabled:opacity-40" disabled={result.current_page >= result.last_page} onClick={() => setFilter('page', result.current_page + 1)}>Next →</button>
          </span>
        </div>
      )}

      {selected && (
        <BookingPanel
          booking={selected}
          onClose={() => setSelected(null)}
          onSaved={b => { setSelected(b); load() }}
          onDeleted={() => { setSelected(null); load() }}
        />
      )}
    </>
  )
}

function BookingPanel({ booking, onClose, onSaved, onDeleted }) {
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const onEsc = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [onClose])

  const save = async e => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    for (const key of ['company_logo', 'booth_design_image']) {
      if (!data.get(key)?.size) data.delete(key)
    }
    setBusy(true)
    setMessage(null)
    try {
      const res = await updateBooking(booking.id, data)
      setMessage({ ok: true, text: res.message })
      onSaved(res.data)
    } catch (err) {
      setMessage({ ok: false, text: err.message })
    } finally {
      setBusy(false)
    }
  }

  const remove = async () => {
    if (!window.confirm(`Delete the booking for booth ${booking.boothno} by ${booking.name}? This cannot be undone.`)) return
    setBusy(true)
    try {
      await deleteBooking(booking.id)
      onDeleted()
    } catch (err) {
      setMessage({ ok: false, text: err.message })
      setBusy(false)
    }
  }

  const openProof = async () => {
    const tab = window.open('', '_blank')
    try {
      const blob = await downloadProof(booking.id)
      tab.location = URL.createObjectURL(blob)
    } catch (err) {
      tab.close()
      setMessage({ ok: false, text: err.message })
    }
  }

  const info = [
    ['Booth', `No. ${String(booking.boothno).padStart(2, '0')} · ${booking.boothtitle} · ${booking.boothsize}`],
    ['Name', booking.name],
    ['Email', <a key="e" href={`mailto:${booking.email}`}>{booking.email}</a>],
    ['Phone', booking.phone],
    ['Company', booking.company],
    ['Referral code', booking.referal_code],
    ['Amount', money(booking.boothammount)],
    ['Payment', [PAYMENT_LABEL[booking.paymenttype] || booking.paymenttype, booking.networktype].filter(Boolean).join(' · ')],
    ['Booked', date(booking.created_at)],
    ['Last change by', booking.approved_by],
  ]

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60" onClick={onClose}>
      <aside className="h-full w-full max-w-xl overflow-y-auto border-l border-line bg-head p-6 shadow-2xl" onClick={e => e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Booking details">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow !m-0">Booking #{booking.id}</p>
            <h2 className="m-0 text-2xl text-white">Booth {String(booking.boothno).padStart(2, '0')}</h2>
          </div>
          <button className="cursor-pointer border-0 bg-transparent text-2xl text-muted hover:text-white" onClick={onClose} aria-label="Close">✕</button>
        </div>

        <dl className="grid grid-cols-[130px_1fr] gap-x-4 gap-y-2 text-sm">
          {info.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-muted">{k}</dt>
              <dd className="m-0 break-words text-white">{v || '—'}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-4 flex flex-wrap gap-2">
          {booking.has_payment_proof && <button type="button" className="btn btn-outline !px-4 !py-2 !text-sm" onClick={openProof}>View payment proof</button>}
          {booking.company_logo_url && <a className="btn btn-outline !px-4 !py-2 !text-sm" href={booking.company_logo_url} target="_blank" rel="noopener">Company logo</a>}
          {booking.booth_design_image_url && <a className="btn btn-outline !px-4 !py-2 !text-sm" href={booking.booth_design_image_url} target="_blank" rel="noopener">Booth design</a>}
        </div>

        <form key={booking.updated_at} className="form mt-6 !max-w-none" onSubmit={save}>
          <h3 className="m-0 text-lg text-white">Review</h3>
          <label>Status
            <select name="status" defaultValue={booking.status}>
              <option value="pending">Pending</option>
              <option value="approved">Approved — show company on floor plan</option>
              <option value="rejected">Rejected — free the booth</option>
            </select>
          </label>
          <label>Message (internal note)<textarea name="approval_message" rows="2" defaultValue={booking.approval_message || ''} /></label>

          <h3 className="m-0 mt-2 text-lg text-white">Company profile <span className="text-sm font-normal text-muted">(shown on the floor plan once approved)</span></h3>
          <label>Display name<input name="company_profile_name" defaultValue={booking.company_profile_name || ''} placeholder={booking.company || ''} /></label>
          <label>Website<input name="company_url" type="url" defaultValue={booking.company_url || ''} placeholder="https://" /></label>
          <label>About the company<textarea name="company_details" rows="3" defaultValue={booking.company_details || ''} /></label>
          <label>Logo (JPG, PNG, WebP, GIF)<input name="company_logo" type="file" accept="image/*" /></label>
          <label>Booth design<input name="booth_design" defaultValue={booking.booth_design || ''} /></label>
          <label>Booth design file (image or PDF)<input name="booth_design_image" type="file" accept="image/*,.pdf" /></label>

          {message && (
            <p className={`m-0 rounded-xl border p-3 text-sm ${message.ok ? 'border-brand/50 bg-brand/15 text-brand-light' : 'border-red-400/40 bg-red-500/15 text-red-200'}`} role="status">{message.text}</p>
          )}
          <div className="flex flex-wrap justify-between gap-3">
            <button type="button" className="btn !border-2 !border-red-400/60 !bg-transparent !text-red-200 disabled:opacity-50" onClick={remove} disabled={busy}>Delete</button>
            <button className="btn btn-pill disabled:opacity-60" disabled={busy}>{busy ? 'Saving…' : 'Save changes'}</button>
          </div>
        </form>
      </aside>
    </div>
  )
}
