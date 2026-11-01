import usePageMeta from '../hooks/usePageMeta'

export default function Floorplan() {
  usePageMeta("Floorplan | Traders Expo Johannesburg", "Floor plan for Traders Expo Johannesburg.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Floor plan</span>
          <h1>Centre Court, Emperors Palace</h1>
          <p>Stage, awards area, photo wall, cafe, lounge and booths 01–15.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <h2 className="stitle">Floor plan</h2>
          <div className="floor">
            <div className="stage">STAGE — Main Screen 6w × 2.5h • Side Screens</div>
            <div className="booths">
              <span>Booth 01</span>
              <span>Booth 02</span>
              <span>Booth 03</span>
              <span>Booth 04</span>
              <span>Booth 05</span>
              <span>Booth 06</span>
              <span>Booth 07</span>
              <span>Booth 08</span>
              <span>Booth 09</span>
              <span>Booth 10</span>
              <span>Booth 11</span>
              <span>Booth 12</span>
              <span>Booth 13</span>
              <span>Booth 14</span>
              <span>Booth 15</span>
            </div>
            <div className="amen">Speaker / Awards &amp; League • Photo Wall • Cafe • Cocktail Lounge • Entrance / Exit • Women / Men</div>
          </div>
        </div>
      </section>
    </>
  )
}
