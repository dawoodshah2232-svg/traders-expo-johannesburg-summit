import usePageMeta from '../hooks/usePageMeta'

export default function Faq() {
  usePageMeta("FAQ | Traders Expo Johannesburg", "Frequently asked questions.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">FAQ</span>
          <h1>Frequently asked questions</h1>
          <p>General and popular questions about Traders Expo Johannesburg.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">General questions</h2>
          <details open>
            <summary>Where is the event located?</summary>
            <p>Emperors Palace, Centre Court, Kempton Park, Johannesburg.</p>
          </details>
          <details>
            <summary>Who can attend?</summary>
            <p>Traders, brokers, investors, fintech founders and educators.</p>
          </details>
          <details>
            <summary>Can companies exhibit?</summary>
            <p>Yes — see Exhibitors and Sponsors for booth and tier options.</p>
          </details>
          <details>
            <summary>How can I become a sponsor?</summary>
            <p>Contact +971 58 553 1033 or info@profxmedia.com.</p>
          </details>
          <details>
            <summary>Are there speaking opportunities?</summary>
            <p>Yes — apply via the Contact page.</p>
          </details>
        </div>
      </section>
    </>
  )
}
