import DemoForm from '../components/DemoForm'
import usePageMeta from '../hooks/usePageMeta'

export default function Register() {
  usePageMeta("Register | Traders Expo Johannesburg", "Register — Traders Expo Johannesburg (demo).")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Register</span>
          <h1>Register</h1>
          <p>Demo registration — no account is created on this static preview.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Register</h2>
          <DemoForm className="form" mode="after" done={<p className="ok">Demo only — this static preview does not create an account.</p>}>
            <label>
              Full Name
              <input required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Phone No.
              <input required />
            </label>
            <label>
              Company Name
              <input />
            </label>
            <label>
              Position
              <input />
            </label>
            <label>
              User Type
              <select>
                <option>Trader</option>
                <option>Visitor</option>
                <option>Investor</option>
                <option>IB</option>
                <option>Media</option>
                <option>Technology Provider</option>
              </select>
            </label>
            <button className="btn btn-pill">Register</button>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
