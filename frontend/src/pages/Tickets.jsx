import DemoForm from '../components/DemoForm'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Tickets() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-16.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Tickets</span>
          <h1>Reserve your free ticket</h1>
          <p>Tickets are free — reserve with name, email and mobile. Your ticket is emailed to you.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Ticket booking</h2>
          <p>Reserve your free ticket for 18–19 February 2027 at Emperors Palace, Johannesburg. No payment is collected on this site.</p>
          <DemoForm className="form" mode="replace" done={<b>Thanks — your free ticket request is registered. Check your email for your ticket.</b>}>
            <label>
              Full Name
              <input required />
            </label>
            <label>
              Email
              <input type="email" required />
            </label>
            <label>
              Mobile
              <input required />
            </label>
            <label>
              Pass
              <select>
                <option>Trader</option>
                <option>Pro Trader</option>
                <option>VIP</option>
              </select>
            </label>
            <button className="btn btn-pill">Reserve free ticket</button>
          </DemoForm>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">What each pass includes</h2>
          <div className="ticket-grid">
            <article className="ticket-card">
              <div className="ticket-img">
                <img src="/assets/img/profx-22.webp" alt="Trader" />
              </div>
              <span className="ticket-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 21c0-4 3.5-6 8-6s8 2 8 6"></path>
                </svg>
              </span>
              <div className="ticket-body">
                <h3>Trader</h3>
                <p>Exhibition floor and networking access.</p>
                <ul className="ticket-list">
                  <li>Exhibition floor access</li>
                  <li>Networking areas</li>
                  <li>18–19 February — both days</li>
                </ul>
                <Link className="ticket-btn" to="/booking">Select Trader →</Link>
              </div>
            </article>
            <article className="ticket-card popular">
              <div className="ticket-img">
                <img src="/assets/img/profx-07.webp" alt="Pro Trader" />
                <span className="ticket-pop">★ Most popular</span>
              </div>
              <span className="ticket-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 17l5-6 4 3 5-7 4 4"></path>
                  <path d="M3 21h18"></path>
                </svg>
              </span>
              <div className="ticket-body">
                <h3>Pro Trader</h3>
                <p>Full workshop program across both days.</p>
                <ul className="ticket-list">
                  <li>Everything in Trader</li>
                  <li>Full workshop program</li>
                  <li>Both days — full program</li>
                </ul>
                <Link className="ticket-btn" to="/booking">Select Pro Trader →</Link>
              </div>
            </article>
            <article className="ticket-card">
              <div className="ticket-img">
                <img src="/assets/img/profx-23.webp" alt="VIP" />
              </div>
              <span className="ticket-icon">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8l4 3 5-6 5 6 4-3-1 10H4L3 8z"></path>
                  <path d="M8 21h8"></path>
                </svg>
              </span>
              <div className="ticket-body">
                <h3>VIP</h3>
                <p>Full conference, workshops and VIP access.</p>
                <ul className="ticket-list">
                  <li>Everything in Pro Trader</li>
                  <li>Full conference access</li>
                  <li>VIP access</li>
                </ul>
                <Link className="ticket-btn" to="/booking">Select VIP →</Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
