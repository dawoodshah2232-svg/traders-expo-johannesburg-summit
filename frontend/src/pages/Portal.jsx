import DemoForm from '../components/DemoForm'
import usePageMeta from '../hooks/usePageMeta'

export default function Portal() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-23.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Portal</span>
          <h1>Exhibitor portal</h1>
          <p>Demo portal for exhibitors, speakers and sponsors.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Portal login (demo)</h2>
          <p>This is a demo portal on the static preview — no account is created or checked here.</p>
          <DemoForm className="form" mode="replace" done={<b>Demo only — portal login is not active on this preview.</b>}>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Password
              <input type="password" required />
            </label>
            <button className="btn btn-pill">Login</button>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
