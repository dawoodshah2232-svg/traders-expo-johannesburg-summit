import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Awards() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-11.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Awards</span>
          <h1>Traders Expo Awards</h1>
          <p>Celebrating excellence in trading, brokerage and fintech.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Awards night</h2>
          <p>
            The awards night is a flagship part of the program, celebrating outstanding performers across the trading and fintech ecosystem, with speakers, sponsors, exhibitors and VIP guests. Categories and nominations will be announced closer to the event.
          </p>
          <Link className="btn btn-pill" to="/tickets">Reserve free ticket</Link>
        </div>
      </section>
    </>
  )
}
