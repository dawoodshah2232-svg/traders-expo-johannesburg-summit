import DemoForm from '../components/DemoForm'
import usePageMeta from '../hooks/usePageMeta'

export default function Contact() {
  usePageMeta("Contact | Traders Expo Johannesburg", "Contact Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Drop a line</h1>
          <p>Venue, booking and sponsorship enquiries.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Contact details</h2>
          <p>
            <b>Venue:</b>
            {" "}Emperors Palace, Centre Court, 64 Jones Road, Kempton Park, Johannesburg
            <br />
            <b>Booking:</b>
            {" "}+971 58 553 1033
            <br />
            <b>Email:</b>
            {" "}info@profxmedia.com
            <br />
            <b>Hours:</b>
            {" "}Mon – Fri: 9:00 – 18:30
          </p>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Send a message</h2>
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
