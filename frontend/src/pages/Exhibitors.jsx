import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta'

export default function Exhibitors() {
  usePageMeta("Exhibitors | Traders Expo Johannesburg", "Exhibit at Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Exhibit</span>
          <h1>Showcase your brand to global finance leaders</h1>
          <p>Connect with traders, brokers and fintech buyers on the Centre Court floor.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Booth categories</h2>
          <div className="grid3">
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Booth">
                  <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                  <path d="M12 3v4"></path>
                </svg>
              </span>
              <h3>Gold Booth</h3>
              <p>Premium booth placement — top tier.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Booth">
                  <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                </svg>
              </span>
              <h3>Silver Booth</h3>
              <p>3 × 3 m, 1 side open, shell scheme. Prime location.</p>
            </div>
            <div className="card">
              <span className="card-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#34e07a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" role="img" aria-label="Booth">
                  <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                  <path d="M8 12h8"></path>
                </svg>
              </span>
              <h3>Standard Booth</h3>
              <p>Growth-friendly space-only options.</p>
            </div>
          </div>
          <p>Exhibitor types: forex brokers, fintech providers, payment processors, CRM providers, influencers and more.</p>
          <Link className="btn btn-pill" to="/booking">Reserve your exhibit space</Link>
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Exhibition floor</h2>
          <img src="/assets/img/profx-01.webp" alt="Expo floor" style={{ width: "100%", borderRadius: "16px" }} />
        </div>
      </section>
      <section className="section alt">
        <div className="wrap">
          <h2 className="stitle">Our partners &amp; exhibitors</h2>
          <div className="grid logos">
            <div className="logotile">
              <img src="/assets/img/partners/amana-capital.webp" alt="Amana Capital Ltd" />
              <b>Amana Capital Ltd</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/anjouan.webp" alt="Anjouan Corporate Services" />
              <b>Anjouan Corporate Services</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/arabic-broker.webp" alt="Arabic Broker" />
              <b>Arabic Broker</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/ai-solutions.webp" alt="Artificial Intelligence Solutions" />
              <b>Artificial Intelligence Solutions</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/avora-markets.webp" alt="Avora Markets" />
              <b>Avora Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/bakara-invest.webp" alt="Bakara Invest" />
              <b>Bakara Invest</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/big-bull.webp" alt="Big Bull" />
              <b>Big Bull</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/bridging-fx.webp" alt="Bridging FX" />
              <b>Bridging FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/bsx.webp" alt="BSX" />
              <b>BSX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/bullsouq.webp" alt="BullSouq" />
              <b>BullSouq</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/centfx.webp" alt="CentFX" />
              <b>CentFX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/centroid.webp" alt="Centroid Solutions" />
              <b>Centroid Solutions</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/cfi-financial.webp" alt="CFI Financial" />
              <b>CFI Financial</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/codegene.webp" alt="Codegene Technologies" />
              <b>Codegene Technologies</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/dominion-funding.webp" alt="Dominion Funding" />
              <b>Dominion Funding</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/dominion-markets.webp" alt="Dominion Markets" />
              <b>Dominion Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/dyntech.webp" alt="Dyntech" />
              <b>Dyntech</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/fast-one.webp" alt="Fast One" />
              <b>Fast One</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/financial-markets.webp" alt="Financial Markets" />
              <b>Financial Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/finx-cart.webp" alt="Finx Cart" />
              <b>Finx Cart</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/forexer.webp" alt="Forexer" />
              <b>Forexer</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/fx-brokers-startup.webp" alt="FX Brokers Startup" />
              <b>FX Brokers Startup</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/godo-cm.webp" alt="GoDo CM" />
              <b>GoDo CM</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/gtc-fx.webp" alt="GTC FX" />
              <b>GTC FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/hybrid-solutions.webp" alt="Hybrid Solutions" />
              <b>Hybrid Solutions</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/hyro-trader.webp" alt="Hyro Trader" />
              <b>Hyro Trader</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/knight-market.webp" alt="Knight Market" />
              <b>Knight Market</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/leverage-market.webp" alt="Leverage Market" />
              <b>Leverage Market</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/liberty-markets.webp" alt="Liberty Markets" />
              <b>Liberty Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/mymaa-markets.webp" alt="MYMAA Markets" />
              <b>MYMAA Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/nine-solutions.webp" alt="Nine Solutions" />
              <b>Nine Solutions</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/nxg-markets.webp" alt="NXG Markets" />
              <b>NXG Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/pipstone-capital.webp" alt="Pipstone Capital" />
              <b>Pipstone Capital</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/premier-financial.webp" alt="Premier Financial" />
              <b>Premier Financial</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/pride-funding.webp" alt="Pride Funding" />
              <b>Pride Funding</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/prime-x.webp" alt="Prime X" />
              <b>Prime X</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/profx-club.webp" alt="ProFX Club" />
              <b>ProFX Club</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/profx-media.webp" alt="ProFX Media" />
              <b>ProFX Media</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/profx-league-logo.webp" alt="ProFX League" />
              <b>ProFX League</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/pu-prime.webp" alt="PU Prime" />
              <b>PU Prime</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/radhika-fx.webp" alt="Radhika FX" />
              <b>Radhika FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/salma-markets.webp" alt="Salma Markets" />
              <b>Salma Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/scan-global.webp" alt="Scan Global" />
              <b>Scan Global</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/setup-fx.webp" alt="Setup FX" />
              <b>Setup FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/stp-trading.webp" alt="STP Trading" />
              <b>STP Trading</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/succedo-markets.webp" alt="Succedo Markets" />
              <b>Succedo Markets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/supreme-fx.webp" alt="Supreme FX" />
              <b>Supreme FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/swiset.webp" alt="Swiset" />
              <b>Swiset</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/swiss.webp" alt="Swiss" />
              <b>Swiss</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/taurex.webp" alt="Taurex" />
              <b>Taurex</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/tradefx-funds.webp" alt="TradeFX Funds" />
              <b>TradeFX Funds</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/trade-ultra.webp" alt="Trade Ultra" />
              <b>Trade Ultra</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/uno-fx.webp" alt="Uno FX" />
              <b>Uno FX</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/wizense-global.webp" alt="Wizense Global" />
              <b>Wizense Global</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/xchief.webp" alt="XChief" />
              <b>XChief</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/xtreme-next.webp" alt="Xtreme Next" />
              <b>Xtreme Next</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/yamarkets.webp" alt="Yamarkets" />
              <b>Yamarkets</b>
              <span>Partner</span>
            </div>
            <div className="logotile">
              <img src="/assets/img/partners/zylstar.webp" alt="Zylostar" />
              <b>Zylostar</b>
              <span>Partner</span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
