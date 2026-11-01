import { useEffect, useState } from 'react'
import { EXPO_START } from '../config/event'

const RING = 276.5 // circumference of the r=44 dial

function remaining() {
  let diff = Math.max(0, EXPO_START.getTime() - Date.now())
  const d = Math.floor(diff / 86400000); diff -= d * 86400000
  const h = Math.floor(diff / 3600000); diff -= h * 3600000
  const m = Math.floor(diff / 60000)
  const s = Math.floor((diff - m * 60000) / 1000)
  return { d, h, m, s }
}

function Dial({ value, label, total }) {
  const p = total ? Math.max(0, Math.min(1, value / total)) : 1
  return (
    <div className="dial">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="dial-bg" cx="50" cy="50" r="44"></circle>
        <circle className="dial-ring" cx="50" cy="50" r="44" style={{ strokeDashoffset: (RING * (1 - p)).toFixed(1) }}></circle>
      </svg>
      <div className="dial-num">
        <b>{value}</b>
        <span>{label}</span>
      </div>
    </div>
  )
}

export default function Countdown() {
  const [t, setT] = useState(remaining)
  useEffect(() => {
    const id = setInterval(() => setT(remaining()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="cd-clock">
      <p className="cd-clock-eyebrow">Emperors Palace · Johannesburg</p>
      <h3>Countdown to the expo</h3>
      <p className="cd-clock-date">18–19 February 2027</p>
      <div className="cd-dials">
        <Dial value={t.d} label="Days" />
        <Dial value={t.h} label="Hours" total={24} />
        <Dial value={t.m} label="Minutes" total={60} />
        <Dial value={t.s} label="Seconds" total={60} />
      </div>
      <p className="cd-clock-note">Free entry — reserve your ticket.</p>
    </div>
  )
}
