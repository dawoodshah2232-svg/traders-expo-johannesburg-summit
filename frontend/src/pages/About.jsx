import usePageMeta from '../hooks/usePageMeta'

export default function About() {
  usePageMeta("About | Traders Expo Johannesburg", "About Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h1>Traders Expo Johannesburg</h1>
          <p>Global finance, trading &amp; innovation — in Johannesburg, 18–19 February 2027.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Why this expo matters</h2>
          <p>
            Two days of exhibitions, conferences and networking at Emperors Palace, organised by ProFX Media FZ-LLC — an Official Guinness World Records Holder for Most participants in a trading competition. Focus areas: Forex &amp; Trading Innovation, FinTech &amp; Digital Payments, Digital Assets, and Regulation &amp; Compliance.
          </p>
          <div className="grid3">
            <div className="card">
              <h3>Networking opportunities</h3>
              <p>Meet traders, brokers and fintech decision-makers in one room.</p>
            </div>
            <div className="card">
              <h3>Global insights</h3>
              <p>Keynotes, panels and workshops from industry leaders.</p>
            </div>
            <div className="card">
              <h3>Exhibition &amp; showcase</h3>
              <p>Live demos of platforms, APIs, algo and automation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Venue &amp; dates</h2>
          <p>
            <b>Expo:</b>
            {" "}18–19 February 2027
            <br />
            Centre Court, Emperors Palace — 2,698 m², with on-site hotels and venues at the complex.
          </p>
          <img src="/assets/img/emperors-palace-entrance.webp" alt="Emperors Palace entrance" style={{ width: "100%", borderRadius: "16px" }} />
        </div>
      </section>
    </>
  )
}
