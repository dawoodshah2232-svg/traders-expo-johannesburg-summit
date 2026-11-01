import DemoForm from '../components/DemoForm'
import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Login() {
  usePageMeta("Login | Traders Expo Johannesburg", "Login — Traders Expo Johannesburg (demo).")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Login</span>
          <h1>Login</h1>
          <p>Demo login page — no account is created or checked on this static preview.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Login</h2>
          <DemoForm className="form" mode="after" done={<p className="ok">Demo only — this static preview does not sign you in.</p>}>
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
          <p>
            New here?{" "}
            <Link to="/register">Register</Link>
          </p>
        </div>
      </section>
    </>
  )
}
