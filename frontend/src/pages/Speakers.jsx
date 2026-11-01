import usePageMeta from '../hooks/usePageMeta'

export default function Speakers() {
  usePageMeta("Traders Expo Johannesburg — 18–19 February 2027 | Traders Expo Johannesburg", "Africa's premier online trading, fintech & financial markets exhibition, 18–19 February 2027 at Emperors Palace, Johannesburg.")

  return (
    <>
      {" "}
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-07.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Speakers</span>
          <h1>Our speakers</h1>
          <p>18 featured speakers from ProFX Expo Africa 2027 — trading, brokerage and fintech.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
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
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/bheki-mlambo.webp" alt="Bheki Mlambo" />
              <h3>Bheki Mlambo</h3>
              <p>Co-Founder</p>
              <span>TechCon Africa</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/mayur-shrivastav.webp" alt="Dr Mayur Shrivastav" />
              <h3>Dr Mayur Shrivastav</h3>
              <p>Global Head</p>
              <span>Stox pips</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/menelisi-mncube.webp" alt="Menelisi Mncube" />
              <h3>Menelisi Mncube</h3>
              <p>Founder and CEO</p>
              <span>Mene Education</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/kearabilwe-nonyana.webp" alt="Kearabilwe Nonyana" />
              <h3>Kearabilwe Nonyana</h3>
              <p>VIP client Manager</p>
              <span>PrimeXBT</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/ayanda-zikode-mgoboza.webp" alt="Ayanda Zikode Mgoboza" />
              <h3>Ayanda Zikode Mgoboza</h3>
              <p>Country Manager</p>
              <span>Africa markets</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/mikhail-seliverstov.webp" alt="Mikhail Seliverstov" />
              <h3>Mikhail Seliverstov</h3>
              <p>Chief Commercial Officer</p>
              <span>GTCFX</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/lindinkosi-mnyandu.webp" alt="Lindinkosi Mnyandu" />
              <h3>Lindinkosi Mnyandu</h3>
              <p>Country Manager</p>
              <span>Weltrade</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/talent-chikwasha.webp" alt="Talent Chikwasha" />
              <h3>Talent Chikwasha</h3>
              <p>Senior Manager</p>
              <span>Weltrade</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/jameel-ahmad.webp" alt="Jameel Ahmad" />
              <h3>Jameel Ahmad</h3>
              <p>Chief Market Analyst</p>
              <span>GTCFX</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/phumlani-buthelezi.webp" alt="Phumlani Buthelezi" />
              <h3>Phumlani Buthelezi</h3>
              <p>Sales Associate, South Africa</p>
              <span>NXG Markets</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/arundas-mv.webp" alt="Arundas MV" />
              <h3>Arundas MV</h3>
              <p>Chief Executive Officer</p>
              <span>Startup Park</span>
            </article>
            <article className="card speaker">
              <img src="/assets/img/speakers-africa/dawood-shah.webp" alt="Dawood Shah" />
              <h3>Dawood Shah</h3>
              <p>Founder &amp; CEO</p>
              <span>Finxcart</span>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
