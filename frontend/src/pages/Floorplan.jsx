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
          <p>Emperors Palace, Johannesburg · 18–19 February 2027. Pick your booth from Sponsorship, Diamond, Elite, Gold and Silver tiers.</p>
        </div>
      </section>
      <section className="section">
        <div className="mx-auto w-[96%] max-w-[1600px]">
          <FloorPlanJoburg />
        </div>
      </section>
    </>
  )
}
