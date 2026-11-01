import usePageMeta from '../hooks/usePageMeta'

export default function Terms() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Terms</span>
          <h1>Terms of use</h1>
          <p>Terms for using this event website.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Terms</h2>
          <p>
            Event details, speakers, agenda and ticket information are indicative and may change as the event approaches. Final timings and pass details will be confirmed to registered attendees by email.
          </p>
        </div>
      </section>
    </>
  )
}
