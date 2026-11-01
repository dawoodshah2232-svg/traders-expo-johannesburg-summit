import usePageMeta from '../hooks/usePageMeta'

export default function Travel() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/emperors-atrium.webp?v=2)" }}>
        <div className="wrap">
          <span className="eyebrow">Travel &amp; Stay</span>
          <h1>Travel &amp; Stay</h1>
          <p>Getting to Emperors Palace, and where to stay.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Getting there</h2>
          <div className="venue-grid">
            <div>
              <p>
                <b>By air:</b>
                {" "}O.R. Tambo International Airport, next to Kempton Park.
                <br />
                <b>By rail:</b>
                {" "}Gautrain links to Johannesburg and Pretoria.
                <br />
                <b>By road / ride-hailing:</b>
                {" "}Ride-hailing and hotel shuttles cover local travel.
                <br />
                <b>Address:</b>
                {" "}64 Jones Road, Kempton Park, Johannesburg.
              </p>
              <p>
                <a className="map-pin" href="https://maps.google.com/?q=Emperors+Palace,+64+Jones+Road,+Kempton+Park,+Johannesburg" target="_blank" rel="noopener">
                  📍 Google Maps — Get Directions
                </a>
              </p>
            </div>
            <div>
              <iframe className="map-frame" title="Emperors Palace map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={"https://www.google.com/maps?q=Emperors+Palace,+64+Jones+Road,+Kempton+Park,+Johannesburg&output=embed"}></iframe>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Where to stay</h2>
          <div className="grid3">
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Hotel">
                  <path d="M3 21h18M5 21V8l7-5 7 5v13"></path>
                  <path d="M9 21v-4h6v4"></path>
                </svg>
              </span>
              <h3>On-site hotels</h3>
              <p>Emperors Palace has on-site hotels, from 3 to 5 star.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Pin">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z"></path>
                  <circle cx="12" cy="10" r="2.5"></circle>
                </svg>
              </span>
              <h3>Kempton Park</h3>
              <p>More options across Kempton Park, close to the venue.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="City">
                  <path d="M3 21h18M4 10h16M6 21V10M18 21V10M12 3v7"></path>
                </svg>
              </span>
              <h3>Johannesburg</h3>
              <p>Stay near the venue for easy access to both days and the awards night.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
