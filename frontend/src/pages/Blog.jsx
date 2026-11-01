import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Blog() {
  usePageMeta("Blogs | Traders Expo Johannesburg", "Traders Expo Johannesburg blogs.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Blogs</span>
          <h1>Blog lists</h1>
          <p>Insights on trading, fintech and preparing for the expo.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">About the organisers</h2>
          <p>
            Hi — Traders Expo Johannesburg is organised by ProFX Media FZ-LLC. Recent posts from the expo site cover AI tools for traders, risk management, broker regulation, trading psychology and how to prepare for an expo. Full articles live on the main expo site; this Summit-style build keeps the same topics and navigation.
          </p>
          <Link className="btn btn-pill" to="/booking">Register interest</Link>
        </div>
      </section>
    </>
  )
}
