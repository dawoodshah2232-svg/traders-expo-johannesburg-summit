import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const REVEAL = '.section,.card,.speaker,.logotile,.exp-card,.venue-hero,.venue-bar'

// Per-navigation behaviour of the old static pages: start at the top (or at #hash) and fade sections in on scroll
export default function PageEffects() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [pathname, hash])

  useEffect(() => {
    const els = document.querySelectorAll(REVEAL)
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach(el => {
      el.classList.add('reveal')
      io.observe(el)
    })
    return () => io.disconnect()
  }, [pathname])

  return null
}
