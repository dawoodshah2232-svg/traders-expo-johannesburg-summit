import FloorPlanJoburg from '../components/floorplan/FloorPlanJoburg'
import usePageMeta from '../hooks/usePageMeta'

export default function Floorplan() {
  usePageMeta("Floorplan | Traders Expo Johannesburg", "Interactive floor plan for Traders Expo Johannesburg — pick and reserve your booth.")

  return (
    <>
      <section className="pagehero" style={{ backgroundImage: "url(/assets/img/profx-26.webp)" }}>
        <div className="wrap">
          <span className="eyebrow">Floor plan</span>
          <h1>Centre Court, Emperors Palace</h1>
          <p>Interactive floor plan — hover a booth for details and click it to reserve.</p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto w-[96%] max-w-[1600px]">
          <div className="fp-intro">
            <div className="fp-tabs" role="tablist">
              <button className="fp-tab on" role="tab" aria-selected="true">Interactive Floor Plan</button>
            </div>
            <p className="fp-eyebrow">Floor Plan</p>
            <h2 className="fp-title">Traders Expo <span>Johannesburg 2027</span></h2>
            <p className="fp-lead">
              Emperors Palace, Johannesburg · 18–19 Feb 2027. Pick your booth from Sponsorship, Diamond, Elite, Gold and Silver tiers.
            </p>
          </div>
          <FloorPlanJoburg />
        </div>
      </section>
    </>
  )
}
