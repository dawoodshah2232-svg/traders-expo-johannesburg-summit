import { useState } from 'react'
import usePageMeta from '../hooks/usePageMeta'

const FILTERS = ['Speakers', 'Expo Zone', 'Networking']

// Add `cat` (one of FILTERS) to a photo to make it show under that tab
const PHOTOS = [
  'profx-01', 'profx-03', 'profx-07', 'profx-11', 'profx-16', 'profx-19', 'profx-21',
  'profx-22', 'profx-23', 'profx-24', 'profx-26', 'profx-27', 'profx-league',
].map(name => ({ src: `/assets/img/${name}.webp`, cat: undefined }))

export default function Gallery() {
  usePageMeta("Gallery | Traders Expo Johannesburg", "Recent event gallery.")
  const [filter, setFilter] = useState('all')

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-league.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Gallery</span>
          <h1>Our recent events gallery</h1>
          <p>Real ProFX event photography — stage, booths, workshops and networking.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Gallery</h2>
          <div className="tabs">
            {['all', ...FILTERS].map(f => (
              <button key={f} className={filter === f ? 'tab on' : 'tab'} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
          <div className="grid3 gal">
            {PHOTOS.filter(p => filter === 'all' || p.cat === filter).map(p => (
              <figure key={p.src}>
                <img src={p.src} alt="ProFX event photo" />
                <figcaption>ProFX event</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
