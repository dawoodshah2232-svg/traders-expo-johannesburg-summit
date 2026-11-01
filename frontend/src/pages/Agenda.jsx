import usePageMeta from '../hooks/usePageMeta'

export default function Agenda() {
  usePageMeta("Agenda | Traders Expo Johannesburg", "Two-day agenda for Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-07.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Agenda</span>
          <h1>Two days of what matters</h1>
          <p>Indicative agenda — final speakers and timings will be announced as the event approaches.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle" id="day1">Day 1 — 18 February 2027</h2>
          <div className="arow">
            <b>09:00</b>
            <div>
              <h3>Registration &amp; expo opens</h3>
              <p>Badges, welcome coffee and the exhibition floor opens.</p>
            </div>
          </div>
          <div className="arow">
            <b>10:00</b>
            <div>
              <h3>Opening keynote: Africa's trading decade</h3>
              <p>Where Africa's markets are heading — and who is shaping them.</p>
            </div>
          </div>
          <div className="arow">
            <b>11:00</b>
            <div>
              <h3>Panel: Brokers building for Africa</h3>
              <p>How leading brokers design products for African traders.</p>
            </div>
          </div>
          <div className="arow">
            <b>12:00</b>
            <div>
              <h3>Trading technology showcase</h3>
              <p>Live demos: platforms, APIs, algo &amp; automation.</p>
            </div>
          </div>
          <div className="arow">
            <b>13:00</b>
            <div>
              <h3>Networking lunch</h3>
              <p>Meet exhibitors, speakers and fellow traders.</p>
            </div>
          </div>
          <div className="arow">
            <b>14:30</b>
            <div>
              <h3>Workshops: Strategy sessions</h3>
              <p>Practical trading workshops across three tracks.</p>
            </div>
          </div>
          <div className="arow">
            <b>16:00</b>
            <div>
              <h3>Panel: The future of retail trading</h3>
              <p>AI, mobile and the next wave of market participation.</p>
            </div>
          </div>
          <div className="arow">
            <b>17:30</b>
            <div>
              <h3>Day 1 networking reception</h3>
              <p>Drinks, conversations and deal-making.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle" id="day2">Day 2 — 19 February 2027</h2>
          <div className="arow">
            <b>09:30</b>
            <div>
              <h3>Expo opens — Day 2</h3>
              <p>Floor opens; coffee and exhibitor meetings.</p>
            </div>
          </div>
          <div className="arow">
            <b>10:30</b>
            <div>
              <h3>Keynote: Technology keynote</h3>
              <p>The platforms and data shaping modern trading.</p>
            </div>
          </div>
          <div className="arow">
            <b>11:30</b>
            <div>
              <h3>Panel: Regulation &amp; trust</h3>
              <p>Building safe, transparent markets for retail traders.</p>
            </div>
          </div>
          <div className="arow">
            <b>13:00</b>
            <div>
              <h3>Networking lunch</h3>
              <p>Final day meetings and partnership conversations.</p>
            </div>
          </div>
          <div className="arow">
            <b>14:30</b>
            <div>
              <h3>Live trading contest</h3>
              <p>
                Trade live on stage — staged by ProFX Media FZ-LLC, an Official Guinness World Records Holder for Most participants in a trading competition.
              </p>
            </div>
          </div>
          <div className="arow">
            <b>16:00</b>
            <div>
              <h3>Closing keynote</h3>
              <p>Final insights and farewell from the stage.</p>
            </div>
          </div>
          <div className="arow">
            <b>17:30</b>
            <div>
              <h3>Farewell networking</h3>
              <p>Closing reception and goodbyes — until next year.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Live trading contest</h2>
          <p>
            Trade live on stage across both days. Entries open to attendees at the expo, with a live leaderboard and winners crowned on stage.
          </p>
        </div>
      </section>
    </>
  )
}
