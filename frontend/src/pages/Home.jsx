import Countdown from '../components/Countdown'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'
import '../styles/pages/index.css'

export default function Home() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="hero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="hero-in">
          {" "}
          <span className="hero-badge">18–19 February 2027 · Johannesburg</span>
          {" "}
          <img className="hero-logo" src="/assets/logos/logo-header.png" alt="Traders Expo" />
          {" "}
          <p className="hero-tagline">Africa's Premier Online Trading, Fintech &amp; Financial Markets Exhibition</p>
          {" "}
          <p className="hero-sub">
            Two powerful days where{" "}
            <strong>Traders. Brokers. Technology.</strong>
            {" "}come together — at Emperors Palace, Johannesburg.
          </p>
          {" "}
          <div className="cta">
            <Link className="btn btn-pill" to="/booking">Register interest</Link>
            <Link className="btn btn-outline" to="/exhibitors">Become an Exhibitor</Link>
          </div>
          {" "}
          <Countdown />
          {" "}
        </div>
      </section>
      <div className="marquee">
        <div className="marquee-track">
          <span>TRADERS ✦ BROKERS ✦ TECHNOLOGY ✦ FINTECH ✦ LIVE TRADING ✦ NETWORKING ✦ JOHANNESBURG 18–19 FEB 2027 ✦{" "}</span>
          <span>TRADERS ✦ BROKERS ✦ TECHNOLOGY ✦ FINTECH ✦ LIVE TRADING ✦ NETWORKING ✦ JOHANNESBURG 18–19 FEB 2027 ✦{" "}</span>
        </div>
      </div>
      {" "}
      <section className="stats-band">
        <div className="wrap">
          <div className="stats">
            <div>
              <b>4,000+</b>
              <span>Expected traders</span>
            </div>
            <div>
              <b>18</b>
              <span>Featured speakers</span>
            </div>
            <div>
              <b>2</b>
              <span>Days</span>
            </div>
            <div>
              <b>8</b>
              <span>Sponsorship tiers</span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">The experience</p>
          <h2 className="stitle">
            What you will{" "}
            <span>experience.</span>
          </h2>
          {" "}
          <div className="grid3">
            <div className="card">
              <img src="/assets/img/profx-07.webp" alt="Stage" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px" }} />
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Stage">
                  <path d="M4 20h16M6 20V10l6-6 6 6v10"></path>
                  <path d="M10 20v-5h4v5"></path>
                </svg>
              </span>
              <h3>Main stage</h3>
              <p>Keynotes and headline panels.</p>
            </div>
            <div className="card">
              <img src="/assets/img/profx-19.webp" alt="Networking" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px" }} />
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Network">
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="18" cy="18" r="3"></circle>
                  <path d="M8.5 10.5L15.5 7.5M8.5 13.5L15.5 16.5"></path>
                </svg>
              </span>
              <h3>Networking</h3>
              <p>Meet traders, brokers and fintech leaders.</p>
            </div>
            <div className="card">
              <img src="/assets/img/profx-01.webp" alt="Expo floor" style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "12px" }} />
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Booth">
                  <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"></path>
                </svg>
              </span>
              <h3>Expo floor</h3>
              <p>Live demos, booths and product showcases.</p>
            </div>
          </div>
          {" "}
          <p className="center" style={{ marginTop: "20px" }}>
            <Link className="btn btn-outline" to="/agenda">Explore the Agenda</Link>
          </p>
        </div>
      </section>
      {" "}
      <section className="section">
        <div className="wrap" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <span className="badge">Official Guinness World Records™ Holder</span>
          <h2 className="stitle" style={{ textAlign: "center" }}>
            The Trading{" "}
            <span>Contest.</span>
          </h2>
          <p className="section-lead">
            A live trading contest across both expo days — 18–19 February 2027. Real traders compete live on stage while ProFX Media FZ-LLC, the Official Guinness World Records™ Holder for “Most participants in a trading competition”, brings the competition to Africa.
          </p>
          <figure className="banner">
            <img src="/assets/img/profx-league.webp" alt="ProFX League session — traders discussing at a table" />
            <figcaption>ProFX League session — traders discussing at the table</figcaption>
          </figure>
          <div className="cta">
            <Link className="btn btn-pill" to="/booking">Join the contest</Link>
            <Link className="btn btn-outline" to="/agenda">How it works</Link>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Tickets</p>
          <h2 className="stitle">
            Choose your{" "}
            <span>experience.</span>
          </h2>
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
                <Link className="ticket-btn" to="/tickets">Select Trader →</Link>
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
                <Link className="ticket-btn" to="/tickets">Select Pro Trader →</Link>
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
                <Link className="ticket-btn" to="/tickets">Select VIP →</Link>
              </div>
            </article>
          </div>
          <p className="center" style={{ marginTop: "20px" }}>
            <Link className="btn btn-pill" to="/booking">Register interest</Link>
          </p>
          <p className="center fine">Free entry — reserve your ticket.</p>
        </div>
      </section>
      {" "}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">From Cape Town to Johannesburg</p>
          <h2 className="stitle">
            Building on{" "}
            <span>Cape Town 2026.</span>
          </h2>
          <p className="section-lead">
            ProFX Expo Africa came to Cape Town on 20–21 August 2026 at CTICC 2, Exhibition Hall 5 — exhibition, conference, sponsor participation, trading-community engagement and industry recognition. Participating companies included GTCFX and Leverage Markets. Johannesburg is the next destination.
          </p>
          <Link className="btn btn-outline" to="/sponsors">Sponsor Johannesburg 2027</Link>
        </div>
      </section>
      {" "}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Why attend</p>
          <h2 className="stitle">
            Why{" "}
            <span>attend.</span>
          </h2>
          <div className="grid3">
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Book">
                  <path d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2V5z"></path>
                  <path d="M4 19a2 2 0 012-2h13"></path>
                </svg>
              </span>
              <h3>Learn</h3>
              <p>Keynotes, panels and workshops from traders, brokers and fintech leaders.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Network">
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="18" cy="18" r="3"></circle>
                  <path d="M8.5 10.5L15.5 7.5M8.5 13.5L15.5 16.5"></path>
                </svg>
              </span>
              <h3>Network</h3>
              <p>Meet 4,000+ expected traders, brokers and decision-makers in one hall.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Booth">
                  <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                  <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18"></path>
                </svg>
              </span>
              <h3>Exhibit &amp; compete</h3>
              <p>Live demos on the floor and the live trading contest on stage.</p>
            </div>
          </div>
          <p className="eyebrow" style={{ marginTop: "28px" }}>Who attends</p>
          <div className="grid3">
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="People">
                  <circle cx="9" cy="8" r="3.5"></circle>
                  <path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5"></path>
                  <circle cx="17" cy="9" r="2.5"></circle>
                  <path d="M15 14.5c2.5.5 4 2 4 5"></path>
                </svg>
              </span>
              <h3>Traders</h3>
              <p>Retail and professional traders.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Building">
                  <path d="M3 21h18M5 21V10l7-6 7 6v11"></path>
                  <path d="M9 21v-5h6v5"></path>
                </svg>
              </span>
              <h3>Brokers &amp; fintech</h3>
              <p>Brokers, platforms, payment and CRM providers.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Graduation">
                  <path d="M12 3L2 9l10 6 10-6-10-6z"></path>
                  <path d="M6 11v6c0 1.5 2.7 3 6 3s6-1.5 6-3v-6"></path>
                </svg>
              </span>
              <h3>Investors &amp; educators</h3>
              <p>Investors, analysts and trading educators.</p>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
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
          <p className="center" style={{ marginTop: "20px" }}>
            <Link className="btn btn-outline" to="/venue">Venue &amp; Floor Plan</Link>
            {" "}
            <Link className="btn btn-outline" to="/travel">Travel &amp; Stay</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Speakers</p>
          <h2 className="stitle">
            Featured{" "}
            <span>speakers.</span>
          </h2>
          <div className="grid speakers">
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/francois-du-plessis.webp" alt="Francois Du Plessis" />
              <h3>Francois Du Plessis</h3>
              <p>CEO</p>
              <span>CFI South Africa</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/chantel-snyman.webp" alt="Chantel Snyman" />
              <h3>Chantel Snyman</h3>
              <p>Founder</p>
              <span>Tradewithchantel</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/zander-van-der-merwe.webp" alt="Zander Van der Merwe" />
              <h3>Zander Van der Merwe</h3>
              <p>Head of Sales and Key Individual</p>
              <span>TD Markets</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/yaliwe-mlambo.webp" alt="Yaliwe Mlambo" />
              <h3>Yaliwe Mlambo</h3>
              <p>Chairwoman</p>
              <span>United Africa Blockchain Association</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/richard-anthony-gaskin.webp" alt="Richard Anthony Gaskin" />
              <h3>Richard Anthony Gaskin</h3>
              <p>Market Analyst</p>
              <span>FP Markets South Africa</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/mohamed-chalakta.webp" alt="Mohamed Chalakta" />
              <h3>Mohamed Chalakta</h3>
              <p>Forex Asset management</p>
              <span>Mo-ish</span>
            </article>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Sponsors</p>
          <h2 className="stitle">
            Our{" "}
            <span>sponsors.</span>
          </h2>
          <div className="grid logos">
            <div className="logotile">
              <img src="/assets/img/sponsors/bridgingfx.png" alt="BridgingFX" />
              <b>BridgingFX</b>
              <span>Platinum</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/swiset.png" alt="Swiset" />
              <b>Swiset</b>
              <span>Gold</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/taurex.png" alt="Taurex" />
              <b>Taurex</b>
              <span>Gold</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/fxkey.png" alt="FXKEY" />
              <b>FXKEY</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/ggcc.png" alt="GGCC" />
              <b>GGCC</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/jkv.png" alt="JKV" />
              <b>JKV</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/milescapital.png" alt="Miles Capital" />
              <b>Miles Capital</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/pipsforex.png" alt="PipsForex" />
              <b>PipsForex</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/profitfx.png" alt="Profit FX" />
              <b>Profit FX</b>
              <span>Silver</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/sponsors/zarafx.png" alt="ZaraFX" />
              <b>ZaraFX</b>
              <span>Silver</span>
            </div>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Experience</p>
          <h2 className="stitle">
            More to{" "}
            <span>experience.</span>
          </h2>
          <div className="exp-grid">
            <article className="exp-card">
              <img src="/assets/img/profx-27.webp" alt="Live streaming at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9"></circle>
                  <path d="M10 8l6 4-6 4V8z"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>Live streaming</h3>
                <p>
                  Access real-time sessions from global finance, trading, and FinTech experts. Stream keynotes, panels, and workshops from anywhere, ensuring you never miss critical insights.
                </p>
              </div>
            </article>
            <article className="exp-card">
              <img src="/assets/img/profx-24.webp" alt="Fireside chats at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h2a8 8 0 018 8z"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>Fireside chats</h3>
                <p>
                  Engage in intimate discussions with global finance leaders, CEOs, and innovators. Gain actionable advice on trading, investment strategies, and technology adoption in a relaxed, interactive setting.
                </p>
              </div>
            </article>
            <article className="exp-card">
              <img src="/assets/img/profx-19.webp" alt="Networking at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="18" cy="18" r="3"></circle>
                  <path d="M8.5 10.5L15.5 7.5M8.5 13.5L15.5 16.5"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>Networking</h3>
                <p>
                  Connect with 5,000+ finance professionals, innovators, investors, and company representatives in dedicated networking areas to foster partnerships and business growth.
                </p>
              </div>
            </article>
            <article className="exp-card">
              <img src="/assets/img/profx-07.webp" alt="High-value learning at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="9" r="6"></circle>
                  <path d="M8 21h8M12 15v6"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>High-value learning</h3>
                <p>
                  Participate in in-depth workshops, masterclasses, and panel discussions delivered by 30+ industry leaders to sharpen your skills and knowledge in finance, trading, and technology.
                </p>
              </div>
            </article>
            <article className="exp-card">
              <img src="/assets/img/profx-23.webp" alt="Exciting giveaways at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="8" width="18" height="4"></rect>
                  <path d="M5 12v8h14v-8M12 8v13"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>Exciting giveaways</h3>
                <p>
                  Participate in live draws and competitions to win exclusive prizes, branded merchandise, and special recognition at Traders Expo Johannesburg 2027.
                </p>
              </div>
            </article>
            <article className="exp-card">
              <img src="/assets/img/profx-league.webp" alt="1-on-1 sessions at a ProFX event" />
              <span className="exp-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="8" cy="8" r="3"></circle>
                  <path d="M2 20c0-3 2.5-5 6-5s6 2 6 5"></path>
                </svg>
              </span>
              <div className="exp-body">
                <h3>1-on-1 sessions</h3>
                <p>
                  Schedule personalized meetings with investors, industry experts, and regulators to gain tailored guidance and accelerate your business strategy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Our agenda</p>
          <h2 className="stitle">
            Follow{" "}
            <span>event schedules.</span>
          </h2>
          <p className="section-lead">
            Traders Expo Johannesburg 2027 is a two-day immersive experience featuring continuous summit sessions alongside a full-scale exhibition. Attendees can freely move between expert-led knowledge sessions, networking zones, and exhibitor booths throughout the event.
          </p>
          {" "}
          <div className="agenda-teaser">
            <div className="day-badge">
              <div className="cal">📅</div>
              <h3>1st Day</h3>
              <b>Feb 18, 2027</b>
              <p>
                Traders Expo Johannesburg 2027
                <br />
                Emperors Palace, 64 Jones Road, Kempton Park, Johannesburg, South Africa
              </p>
              <p style={{ marginTop: "14px" }}>
                <Link className="btn btn-pill" to="/agenda#day1">Day 1 details →</Link>
              </p>
            </div>
            {" "}
            <div className="agenda-cards">
              {" "}
              <Link className="agenda-card" to="/agenda#day1">
                <h3>Opening ceremony &amp; welcome address</h3>
                <p>Official inauguration of Traders Expo Johannesburg 2027</p>
                <span>🎙️ Traders Expo Team · Click for details →</span>
              </Link>
              {" "}
              <Link className="agenda-card" to="/agenda#day1">
                <h3>Keynote speeches by global industry leaders</h3>
                <p>Insights from leaders across Forex, FinTech &amp; Trading</p>
                <span>🎙️ Global industry leaders · Click for details →</span>
              </Link>
              {" "}
              <Link className="agenda-card" to="/agenda#day1">
                <h3>Panel discussion — Forex, FinTech &amp; Trading innovation</h3>
                <p>Expert discussions on market evolution and innovation</p>
                <span>🎙️ Industry panel · Click for details →</span>
              </Link>
              {" "}
            </div>
          </div>
          {" "}
          <div className="agenda-teaser" style={{ marginTop: "24px" }}>
            <div className="day-badge">
              <div className="cal">📅</div>
              <h3>2nd Day</h3>
              <b>Feb 19, 2027</b>
              <p>
                Traders Expo Johannesburg 2027
                <br />
                Emperors Palace, 64 Jones Road, Kempton Park, Johannesburg, South Africa
              </p>
              <p style={{ marginTop: "14px" }}>
                <Link className="btn btn-pill" to="/agenda#day2">Day 2 details →</Link>
              </p>
            </div>
            {" "}
            <div className="agenda-cards">
              {" "}
              <Link className="agenda-card" to="/agenda#day2">
                <h3>Live trading contest</h3>
                <p>Trade live on stage — staged by ProFX Media FZ-LLC, an Official Guinness World Records Holder</p>
                <span>🏆 Live contest · Click for details →</span>
              </Link>
              {" "}
              <Link className="agenda-card" to="/agenda#day2">
                <h3>Panel: Regulation &amp; trust</h3>
                <p>Building safe, transparent markets for retail traders</p>
                <span>🎙️ Industry panel · Click for details →</span>
              </Link>
              {" "}
              <Link className="agenda-card" to="/agenda#day2">
                <h3>Closing keynote</h3>
                <p>Final insights and farewell from the stage</p>
                <span>🎙️ Closing session · Click for details →</span>
              </Link>
              {" "}
            </div>
          </div>
          {" "}
          <p className="center" style={{ marginTop: "24px" }}>
            <Link className="btn btn-pill" to="/agenda">View full agenda →</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">Testimonials</p>
          <h2 className="stitle">
            What people{" "}
            <span>say.</span>
          </h2>
          <div className="grid3">
            <blockquote>“Exceptional networking! Met partners who became core to our growth strategy.”</blockquote>
            <blockquote>“A powerhouse event — every session delivered practical, future-ready value.”</blockquote>
            <blockquote>“The perfect blend of Forex, payments, and future-tech. Truly world-class speakers!”</blockquote>
          </div>
        </div>
      </section>
      {" "}
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Questions</p>
          <h2 className="stitle">
            Frequently asked{" "}
            <span>questions.</span>
          </h2>
          <details open>
            <summary>Where is the event?</summary>
            <p>Emperors Palace, Centre Court, Kempton Park, Johannesburg, 18–19 February 2027.</p>
          </details>
          <details>
            <summary>Are tickets free?</summary>
            <p>Yes — reserve your free ticket on the Tickets page. No payment is collected on this site.</p>
          </details>
          <details>
            <summary>How do I contact the team?</summary>
            <p>WhatsApp +971 58 553 1033, or info@profxmedia.com.</p>
          </details>
        </div>
      </section>
      {" "}
      <section className="cta-band">
        <div className="wrap">
          <p className="eyebrow">Final call</p>
          <h2>
            Africa's trading community.
            <br />
            <span style={{ color: "#34e07a" }}>One destination.</span>
          </h2>
          <p>
            <strong>2</strong>
            {" "}days &nbsp;·&nbsp;{" "}
            <strong>18</strong>
            {" "}featured speakers &nbsp;·&nbsp;{" "}
            <strong>4,000+</strong>
            {" "}expected traders &nbsp;·&nbsp;{" "}
            <strong>1</strong>
            {" "}world record
          </p>
          <p>18–19 February 2027 · Emperors Palace, Johannesburg</p>
          <div className="cta">
            <Link className="btn btn-pill" to="/booking">Register interest</Link>
            <Link className="btn btn-outline" to="/exhibitors">Exhibit</Link>
            <Link className="btn btn-outline" to="/sponsors">Sponsor</Link>
          </div>
          <p className="fine" style={{ marginTop: "16px" }}>Organized by ProFX Media FZ-LLC</p>
        </div>
      </section>
      {" "}
      <section className="section">
        <div className="wrap" style={{ textAlign: "center" }}>
          <p className="eyebrow">Our partners</p>
          <h2 className="stitle">
            Trusted by{" "}
            <span>100+</span>
            {" "}Forex &amp; FinTech Titans Worldwide
          </h2>
        </div>
        <div className="partner-marquee">
          <div className="partner-track">
            <div className="partner-tile">
              <img src="/assets/img/partners/amana-capital.webp" alt="Amana Capital Ltd" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/anjouan.webp" alt="Anjouan Corporate Services" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/arabic-broker.webp" alt="Arabic Broker" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/ai-solutions.webp" alt="Artificial Intelligence Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/avora-markets.webp" alt="Avora Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bakara-invest.webp" alt="Bakara Invest" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/big-bull.webp" alt="Big Bull" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bridging-fx.webp" alt="Bridging FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bsx.webp" alt="BSX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bullsouq.webp" alt="BullSouq" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/centfx.webp" alt="CentFX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/centroid.webp" alt="Centroid Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/cfi-financial.webp" alt="CFI Financial" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/codegene.webp" alt="Codegene Technologies" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dominion-funding.webp" alt="Dominion Funding" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dominion-markets.webp" alt="Dominion Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dyntech.webp" alt="Dyntech" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/fast-one.webp" alt="Fast One" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/financial-markets.webp" alt="Financial Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/finx-cart.webp" alt="Finx Cart" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/forexer.webp" alt="Forexer" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/fx-brokers-startup.webp" alt="FX Brokers Startup" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/godo-cm.webp" alt="GoDo CM" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/gtc-fx.webp" alt="GTC FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/hybrid-solutions.webp" alt="Hybrid Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/hyro-trader.webp" alt="Hyro Trader" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/knight-market.webp" alt="Knight Market" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/leverage-market.webp" alt="Leverage Market" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/liberty-markets.webp" alt="Liberty Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/mymaa-markets.webp" alt="MYMAA Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/nine-solutions.webp" alt="Nine Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/nxg-markets.webp" alt="NXG Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pipstone-capital.webp" alt="Pipstone Capital" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/premier-financial.webp" alt="Premier Financial" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pride-funding.webp" alt="Pride Funding" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/prime-x.webp" alt="Prime X" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-club.webp" alt="ProFX Club" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-media.webp" alt="ProFX Media" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-league-logo.webp" alt="ProFX League" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pu-prime.webp" alt="PU Prime" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/radhika-fx.webp" alt="Radhika FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/salma-markets.webp" alt="Salma Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/scan-global.webp" alt="Scan Global" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/setup-fx.webp" alt="Setup FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/stp-trading.webp" alt="STP Trading" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/succedo-markets.webp" alt="Succedo Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/supreme-fx.webp" alt="Supreme FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/swiset.webp" alt="Swiset" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/swiss.webp" alt="Swiss" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/taurex.webp" alt="Taurex" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/tradefx-funds.webp" alt="TradeFX Funds" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/trade-ultra.webp" alt="Trade Ultra" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/uno-fx.webp" alt="Uno FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/wizense-global.webp" alt="Wizense Global" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/xchief.webp" alt="XChief" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/xtreme-next.webp" alt="Xtreme Next" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/yamarkets.webp" alt="Yamarkets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/zylstar.webp" alt="Zylostar" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/amana-capital.webp" alt="Amana Capital Ltd" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/anjouan.webp" alt="Anjouan Corporate Services" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/arabic-broker.webp" alt="Arabic Broker" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/ai-solutions.webp" alt="Artificial Intelligence Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/avora-markets.webp" alt="Avora Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bakara-invest.webp" alt="Bakara Invest" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/big-bull.webp" alt="Big Bull" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bridging-fx.webp" alt="Bridging FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bsx.webp" alt="BSX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/bullsouq.webp" alt="BullSouq" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/centfx.webp" alt="CentFX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/centroid.webp" alt="Centroid Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/cfi-financial.webp" alt="CFI Financial" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/codegene.webp" alt="Codegene Technologies" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dominion-funding.webp" alt="Dominion Funding" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dominion-markets.webp" alt="Dominion Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/dyntech.webp" alt="Dyntech" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/fast-one.webp" alt="Fast One" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/financial-markets.webp" alt="Financial Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/finx-cart.webp" alt="Finx Cart" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/forexer.webp" alt="Forexer" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/fx-brokers-startup.webp" alt="FX Brokers Startup" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/godo-cm.webp" alt="GoDo CM" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/gtc-fx.webp" alt="GTC FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/hybrid-solutions.webp" alt="Hybrid Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/hyro-trader.webp" alt="Hyro Trader" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/knight-market.webp" alt="Knight Market" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/leverage-market.webp" alt="Leverage Market" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/liberty-markets.webp" alt="Liberty Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/mymaa-markets.webp" alt="MYMAA Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/nine-solutions.webp" alt="Nine Solutions" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/nxg-markets.webp" alt="NXG Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pipstone-capital.webp" alt="Pipstone Capital" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/premier-financial.webp" alt="Premier Financial" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pride-funding.webp" alt="Pride Funding" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/prime-x.webp" alt="Prime X" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-club.webp" alt="ProFX Club" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-media.webp" alt="ProFX Media" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/profx-league-logo.webp" alt="ProFX League" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/pu-prime.webp" alt="PU Prime" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/radhika-fx.webp" alt="Radhika FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/salma-markets.webp" alt="Salma Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/scan-global.webp" alt="Scan Global" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/setup-fx.webp" alt="Setup FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/stp-trading.webp" alt="STP Trading" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/succedo-markets.webp" alt="Succedo Markets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/supreme-fx.webp" alt="Supreme FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/swiset.webp" alt="Swiset" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/swiss.webp" alt="Swiss" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/taurex.webp" alt="Taurex" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/tradefx-funds.webp" alt="TradeFX Funds" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/trade-ultra.webp" alt="Trade Ultra" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/uno-fx.webp" alt="Uno FX" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/wizense-global.webp" alt="Wizense Global" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/xchief.webp" alt="XChief" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/xtreme-next.webp" alt="Xtreme Next" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/yamarkets.webp" alt="Yamarkets" />
            </div>
            <div className="partner-tile">
              <img src="/assets/img/partners/zylstar.webp" alt="Zylostar" />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Media partners</h2>
          <div className="grid logos">
            <div className="logotile">
              <img src="/assets/img/media/coinstelegram.webp" alt="CoinsTelegram" />
              <b>CoinsTelegram</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/coinscapture.webp" alt="CoinsCapture" />
              <b>CoinsCapture</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryptonomist.webp" alt="The Cryptonomist" />
              <b>The Cryptonomist</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryptoken.webp" alt="CryptoToken Media" />
              <b>CryptoToken Media</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/allconfsbot.webp" alt="AllConfsBot" />
              <b>AllConfsBot</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/world-business-outlook.webp" alt="World Business Outlook" />
              <b>World Business Outlook</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/coinnewsspan.webp" alt="CoinNewsSpan" />
              <b>CoinNewsSpan</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/profx-news.webp" alt="ProFX News" />
              <b>ProFX News</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/coin-republic.webp" alt="The Coin Republic" />
              <b>The Coin Republic</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/affmaven.webp" alt="AffMaven" />
              <b>AffMaven</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/arabic-broker-media.webp" alt="Arabic Broker" />
              <b>Arabic Broker</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/embassy-bitcoin.webp" alt="Embassy of Bitcoin" />
              <b>Embassy of Bitcoin</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/ambcrypto.webp" alt="AMBCrypto" />
              <b>AMBCrypto</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/financial-markets-media.webp" alt="Financial Markets" />
              <b>Financial Markets</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/finonity.webp" alt="Finonity" />
              <b>Finonity</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/blocktides.webp" alt="BlockTides" />
              <b>BlockTides</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryip.webp" alt="Cryip" />
              <b>Cryip</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/finsider.webp" alt="The Finsider" />
              <b>The Finsider</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/broadcast-media.webp" alt="The Broadcast Media" />
              <b>The Broadcast Media</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/nexnews.webp" alt="NexNews" />
              <b>NexNews</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/foundervox.webp" alt="FounderVox" />
              <b>FounderVox</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/crypto-reporter.webp" alt="Crypto Reporter" />
              <b>Crypto Reporter</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/global-business-magazine.webp" alt="Global Business Magazine" />
              <b>Global Business Magazine</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryptobrowser.webp" alt="CryptoBrowser" />
              <b>CryptoBrowser</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/market-periodical.webp" alt="The Market Periodical" />
              <b>The Market Periodical</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/capitalbay-news.webp" alt="CapitalBay News" />
              <b>CapitalBay News</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/thenewscrypto.webp" alt="TheNewsCrypto" />
              <b>TheNewsCrypto</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/times-blockchain.webp" alt="Times of Blockchain" />
              <b>Times of Blockchain</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryptopulse-news.webp" alt="CryptoPulse News" />
              <b>CryptoPulse News</b>
              <span>Media partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/media/cryptonewsz.webp" alt="CryptoNewsZ" />
              <b>CryptoNewsZ</b>
              <span>Media partner</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <p className="eyebrow">Our recent event gallery</p>
          <h2 className="stitle">
            Was an{" "}
            <span>amazing gallery.</span>
          </h2>
          <p className="section-lead">
            Real moments from ProFX events — stage, booths, workshops and networking. See the full gallery for more shots and details.
          </p>
          <div className="gal-grid">
            <Link to="/gallery">
              <img src="/assets/img/profx-01.webp" alt="ProFX event photo" />
            </Link>
            <Link to="/gallery">
              <img src="/assets/img/profx-19.webp" alt="ProFX event photo" />
            </Link>
            <Link to="/gallery">
              <img src="/assets/img/profx-23.webp" alt="ProFX event photo" />
            </Link>
            <Link to="/gallery">
              <img src="/assets/img/profx-24.webp" alt="ProFX event photo" />
            </Link>
            <Link to="/gallery">
              <img src="/assets/img/profx-27.webp" alt="ProFX event photo" />
            </Link>
            <Link to="/gallery">
              <img src="/assets/img/profx-11.webp" alt="ProFX event photo" />
            </Link>
          </div>
          <p className="center" style={{ marginTop: "22px" }}>
            <Link className="btn-gold" to="/gallery">View more shots →</Link>
          </p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="cta-banner">
            <img src="/assets/img/emperors-atrium.webp?v=2" alt="Emperors Palace atrium" />
            <div className="cta-in">
              <span className="eyebrow" style={{ color: "#fff" }}>Don't miss out</span>
              <h2>
                Haven't registered yet?{" "}
                <span>Secure your free entry now!</span>
              </h2>
              <p>
                Registration for Traders Expo Johannesburg 2027 is completely free. Gain access to expert-led sessions, live exhibition booths, high-level networking, and the prestigious ProFX Awards Ceremony.
              </p>
              <Link className="btn-gold" to="/tickets">Book your free ticket now</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
