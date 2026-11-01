import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/pages/venue.css'

export default function Venue() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/emperors-atrium-2.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Venue</span>
          <h1>Emperors Palace, Johannesburg</h1>
          <p>Inside Emperors Palace, home of Centre Court.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The venue</p>
          <h2 className="stitle">
            Emperors Palace,{" "}
            <span>Johannesburg.</span>
          </h2>
          {" "}
          <div className="venue-hero">
            <img src="/assets/img/emperors-atrium.webp?v=2" alt="Emperors Palace atrium — fountain and statue inside the complex" />
            <div className="venue-hero-in">
              <h3 style={{ margin: "0", fontSize: "28px" }}>Emperors Palace — where the expo lives</h3>
              <p style={{ margin: "6px 0 0", color: "#e8f0e9" }}>
                Inside Emperors Palace, home of Centre Court — the atrium at the heart of the complex.
              </p>
              <div className="venue-chip">
                <span>📅 18–19 February 2027</span>
                <span>🏛️ 2,698 m² hall</span>
                <span>✈️ Next to OR Tambo Airport</span>
              </div>
            </div>
          </div>
          {" "}
          <div className="venue-bar">
            <div className="addr">
              <h3>📍 Emperors Palace, Centre Court</h3>
              <p>64 Jones Road, Kempton Park, Johannesburg, South Africa</p>
            </div>
            <a className="map-pin" href="https://maps.google.com/?q=Emperors+Palace,+64+Jones+Road,+Kempton+Park,+Johannesburg" target="_blank" rel="noopener">
              📍 Google Maps — Get Directions
            </a>
            <Link className="btn btn-pill" to="/tickets">Reserve free ticket</Link>
          </div>
          {" "}
          <div className="venue-facts-v6">
            <div>
              <b>2,698 m²</b>
              <span>Centre Court space</span>
            </div>
            <div>
              <b>29 venues</b>
              <span>Convention centre</span>
            </div>
            <div>
              <b>3–5 star</b>
              <span>On-site hotels</span>
            </div>
            <div>
              <b>OR Tambo</b>
              <span>Airport, minutes away</span>
            </div>
          </div>
          {" "}
          <div className="map-wrap">
            <div className="map-float">
              <a className="map-pin" href="https://maps.google.com/?q=Emperors+Palace,+64+Jones+Road,+Kempton+Park,+Johannesburg" target="_blank" rel="noopener">
                📍 Google Maps — Get Directions
              </a>
            </div>
            <iframe title="Emperors Palace map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={"https://www.google.com/maps?q=Emperors+Palace,+64+Jones+Road,+Kempton+Park,+Johannesburg&output=embed"}></iframe>
          </div>
          {" "}
          <div className="expo-days">
            <div className="expo-day">
              <span className="expo-day-no">Day 1</span>
              <b>Thursday, 18 February 2027</b>
              <span>Exhibition, conference &amp; networking — plus the awards gala in the evening.</span>
            </div>
            <div className="expo-day">
              <span className="expo-day-no">Day 2</span>
              <b>Friday, 19 February 2027</b>
              <span>Exhibition, conference &amp; networking.</span>
            </div>
          </div>
          {" "}
          <figure className="banner" style={{ marginTop: "20px" }}>
            <img src="/assets/img/centre-court.webp" alt="Centre Court hall — 2,698 m² exhibition space inside Emperors Palace" />
            <figcaption>Centre Court hall — the 2,698 m² exhibition space inside Emperors Palace</figcaption>
          </figure>
          <p className="center" style={{ marginTop: "20px" }}>
            <Link className="btn btn-outline" to="/venue">Venue &amp; Floor Plan</Link>
            {" "}
            <Link className="btn btn-outline" to="/travel">Travel &amp; Stay</Link>
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Floor plan</h2>
          <div className="floor">
            <div className="stage">STAGE — Main Screen</div>
            <div className="booths">
              <span>Booth 01</span>
              <span>Booth 02</span>
              <span>Booth 03</span>
              <span>Booth 04</span>
              <span>Booth 05</span>
              <span>Booth 06</span>
              <span>Booth 07</span>
              <span>Booth 08</span>
              <span>Booth 09</span>
              <span>Booth 10</span>
              <span>Booth 11</span>
              <span>Booth 12</span>
              <span>Booth 13</span>
              <span>Booth 14</span>
              <span>Booth 15</span>
            </div>
            <div className="amen">Photo Wall • Cafe • Cocktail Lounge • Entrance / Exit</div>
          </div>
        </div>
      </section>
    </>
  )
}
