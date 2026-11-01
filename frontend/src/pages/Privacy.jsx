import usePageMeta from '../hooks/usePageMeta'

export default function Privacy() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Privacy</span>
          <h1>Privacy policy</h1>
          <p>How we handle your information.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Privacy</h2>
          <p>
            We collect only the details you submit in booking, contact and subscription forms, to respond to your enquiry and send event updates. We do not sell your details. Contact info@profxmedia.com for any privacy request.
          </p>
        </div>
      </section>
    </>
  )
}
