import { Link } from 'react-router-dom'

export default function FloatButtons() {
  return (
    <>
      <div className="float-wrap">
        <Link className="float-btn float-ticket" to="/tickets">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d="M3 9V7a2 2 0 012-2h14a2 2 0 012 2v2a3 3 0 000 6v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a3 3 0 000-6z"></path>
            <path d="M13 5v2M13 11v2M13 17v2"></path>
          </svg>
          {" "}
          <span className="lbl">Book Ticket</span>
        </Link>
        <a className="float-btn float-wa" href="https://wa.me/971585531033" target="_blank" rel="noopener">
          <img src="https://cdn.simpleicons.org/whatsapp/ffffff" alt="WhatsApp logo" />
          {" "}
          <span className="lbl">WhatsApp</span>
        </a>
      </div>
    </>
  )
}
