import DemoForm from '../components/DemoForm'
import usePageMeta from '../hooks/usePageMeta'

export default function Booking() {
  usePageMeta("Booking | Traders Expo Johannesburg", "Book / register interest for Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Booking</span>
          <h1>Register your interest</h1>
          <p>Booking form — no payment is collected on this site.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Booking form</h2>
          <DemoForm className="form" mode="hide" done={<p className="ok">Thanks — your interest is registered. We will be in touch. No payment is collected on this site.</p>}>
            <label>
              Full Name
              <input required />
            </label>
            <label>
              Phone No.
              <input required />
            </label>
            <label>
              Email Address
              <input type="email" required />
            </label>
            <label>
              Role
              <select>
                <option>Visitor</option>
                <option>Exhibitor</option>
                <option>Trader</option>
                <option>Speaker</option>
              </select>
            </label>
            <label>
              How may we help you?
              <textarea rows="4" />
            </label>
            <button className="btn btn-pill">Send message</button>
          </DemoForm>
        </div>
      </section>
    </>
  )
}
