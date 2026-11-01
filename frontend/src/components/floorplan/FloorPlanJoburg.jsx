import { useCallback, useEffect, useState } from "react";
import Booth from "./Booth";
import BoothModal from "./BoothModal";
import { booths, hallDoors, pad, tiers } from "./booths";
import { getBookedBooths } from "../../api/floorplan";
import "./floorplan.css";

const RESERVED_LOGO = "/assets/img/floorplan/booth-reserved.png";

const toReserved = (b) => ({
  boothNo: String(Number(b.boothno)),
  companyName: b.approved ? b.company_name || "" : "",
  logo: b.approved ? b.company_logo || RESERVED_LOGO : null,
  url: b.approved ? b.company_url || "#" : "#",
  approved: b.approved,
});

// Interactive SVG floor plan of Centre Court, Emperors Palace
export default function FloorPlanJoburg() {
  const [selectedBooth, setSelectedBooth] = useState(null);
  const [reservedBooths, setReservedBooths] = useState([]);
  const [showTradingTooltip, setShowTradingTooltip] = useState(false);
  const [activeTooltipId, setActiveTooltipId] = useState(null);

  const loadBooked = useCallback(() => {
    return getBookedBooths()
      .then((list) => list.map(toReserved))
      .catch((err) => {
        console.error("Error fetching floorplan:", err);
        return null;
      });
  }, []);

  useEffect(() => {
    let ignore = false;
    loadBooked().then((list) => !ignore && list && setReservedBooths(list));
    return () => { ignore = true; };
  }, [loadBooked]);

  const getReservedInfo = (boothNo) => reservedBooths.find((b) => b.boothNo === String(boothNo));

  const renderBooth = (booth) => {
    const tier = tiers[booth.type];
    const reservedInfo = getReservedInfo(booth.boothNo);
    return (
      <Booth
        key={`JOBURG-${booth.boothNo}`}
        boothId={`JOBURG-${booth.boothNo}`}
        boothNo={booth.boothNo}
        boothType={booth.type}
        title={booth.title}
        size={booth.size}
        x={booth.x}
        y={booth.y}
        width={booth.width}
        height={booth.height}
        color={tier.fill}
        textColor={tier.text}
        fontSize={booth.size === "5 x 3" ? 10 : 11.5}
        showBoothNo={false}
        showBottomSize={false}
        isReserved={!!reservedInfo}
        reservedInfo={reservedInfo}
        onClick={setSelectedBooth}
        activeTooltipId={activeTooltipId}
        setActiveTooltipId={setActiveTooltipId}
        strokeColor={tier.stroke}
        strokeWidth={2}
        borderRadius={10}
      />
    );
  };

  // Booth number pill + size label, drawn above the booth like the printed plan.
  const renderBoothLabel = (booth) => {
    const tier = tiers[booth.type];
    if (activeTooltipId === `JOBURG-${booth.boothNo}`) return null;

    const isReserved = !!getReservedInfo(booth.boothNo);
    const cx = booth.x + booth.width / 2;
    const pillWidth = Math.min(booth.width - 8, 64);

    return (
      <g key={`label-${booth.boothNo}`} pointerEvents="none">
        <rect x={cx - pillWidth / 2} y={booth.y + 5} width={pillWidth} height={12} rx={6} fill={tier.badge} />
        <text x={cx} y={booth.y + 13.8} textAnchor="middle" fontSize="7.6" fontWeight="800" fill={tier.badgeText}>
          Booth No. {pad(booth.boothNo)}
        </text>
        {!isReserved && (
          <text x={cx} y={booth.y + booth.height - 7} textAnchor="middle" fontSize="8.5" fontWeight="600" fill={tier.text} opacity="0.85">
            {booth.size}
          </text>
        )}
      </g>
    );
  };

  const renderChair = (x, y, size, key, fill = "#6f7476") => (
    <g key={key}>
      <rect x={x} y={y} width={size} height={size * 0.62} rx={size * 0.22} fill={fill} />
      <rect x={x + size * 0.08} y={y + size * 0.5} width={size * 0.84} height={size * 0.42} rx={size * 0.16} fill={fill} opacity="0.85" />
    </g>
  );

  const renderSeatBlock = ({ x, y, cols, rows, gapX, gapY, size, prefix }) => (
    <g key={prefix}>
      {[...Array(rows)].map((_, row) =>
        [...Array(cols)].map((__, col) => renderChair(x + col * gapX, y + row * gapY, size, `${prefix}-${row}-${col}`))
      )}
    </g>
  );

  // Double door: a gap in the wall with two swing leaves.
  const renderDoor = ({ x, y, angle, width = 64 }) => {
    const half = width / 2;
    const depth = half * 0.82;
    return (
      <g key={`door-${x}-${y}`} transform={`translate(${x} ${y}) rotate(${angle})`}>
        <rect x={-half} y={-4} width={width} height={8} fill="#ffffff" />
        <line x1={-half} y1={-4} x2={-half} y2={4} stroke="#4a4a4a" strokeWidth="2.4" />
        <line x1={half} y1={-4} x2={half} y2={4} stroke="#4a4a4a" strokeWidth="2.4" />
        <path d={`M${-half} 0 L${-half} ${depth} Q${-half * 0.34} ${depth * 0.8} 0 0 Z`} fill="#617a97" />
        <path d={`M${half} 0 L${half} ${depth} Q${half * 0.34} ${depth * 0.8} 0 0 Z`} fill="#617a97" />
      </g>
    );
  };

  return (
    <>
      <div className="floor-plan-joburg">
        <svg viewBox="270 140 2310 1440" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Floor plan of Centre Court, Emperors Palace">
          <defs>
            <linearGradient id="jb-gold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d9b562" />
              <stop offset="45%" stopColor="#f4e1ad" />
              <stop offset="100%" stopColor="#cfa64f" />
            </linearGradient>
            <linearGradient id="jb-silver" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#c9c9c9" />
              <stop offset="45%" stopColor="#f7f7f7" />
              <stop offset="100%" stopColor="#bdbdbd" />
            </linearGradient>
            <linearGradient id="jb-diamond" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c4eff6" />
              <stop offset="100%" stopColor="#79d0de" />
            </linearGradient>
            <radialGradient id="jb-elite" cx="50%" cy="60%" r="70%">
              <stop offset="0%" stopColor="#ffb057" />
              <stop offset="100%" stopColor="#ec7a06" />
            </radialGradient>
            <radialGradient id="jb-official" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#7586b8" />
              <stop offset="100%" stopColor="#3b4877" />
            </radialGradient>
            <radialGradient id="jb-title" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#6aa592" />
              <stop offset="100%" stopColor="#2e6758" />
            </radialGradient>
            <radialGradient id="jb-exclusive" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#5843c4" />
              <stop offset="100%" stopColor="#2a1a80" />
            </radialGradient>
            <radialGradient id="jb-regional" cx="50%" cy="45%" r="75%">
              <stop offset="0%" stopColor="#e2fbe2" />
              <stop offset="100%" stopColor="#a4e2a8" />
            </radialGradient>
          </defs>

          {/* Venue architecture (walls, doors, stairs, exits, amenities) traced from the
              Emperors Palace drawing; the interior is blank so booths stay interactive. */}
          <image href="/assets/img/floorplan/joburg-venue.png" x="0" y="0" width="2634" height="1594" preserveAspectRatio="none" pointerEvents="none" />

          {/* Networking lounge */}
          <rect x="1593" y="909" width="256" height="90" rx="20" fill="rgba(0,0,0,0.1)" />
          <rect x="1590" y="906" width="256" height="90" rx="20" fill="#b9c9d8" stroke="#9fb3c6" strokeWidth="2" />
          <text x="1718" y="945" textAnchor="middle" fontSize="17" fontWeight="700" fill="#1f2d3a">Networking Lounge</text>
          <text x="1718" y="971" textAnchor="middle" fontSize="15" fill="#1f2d3a">3.5 x 11</text>

          {/* League area + trading arena */}
          <g onMouseEnter={() => setShowTradingTooltip(true)} onMouseLeave={() => setShowTradingTooltip(false)}>
            <rect x="1082" y="734" width="440" height="438" fill="#d9d9d9" stroke="#3a3a3a" strokeWidth="2.4" />
            {[1130, 1260, 1390].map((x) => renderSeatBlock({ x, y: 766, cols: 5, rows: 3, gapX: 17.5, gapY: 25, size: 15, prefix: `league-top-${x}` }))}
            {[1136, 1400].map((x) => renderSeatBlock({ x, y: 904, cols: 3, rows: 5, gapX: 25, gapY: 19, size: 14, prefix: `league-mid-${x}` }))}
            {[1130, 1260, 1390].map((x) => renderSeatBlock({ x, y: 1040, cols: 5, rows: 3, gapX: 17.5, gapY: 25, size: 15, prefix: `league-bot-${x}` }))}
            <rect x="1242" y="880" width="132" height="132" fill="#7a7a7a" />
            {[[1248, 886], [1346, 886], [1248, 984], [1346, 984]].map(([x, y]) => (
              <rect key={`arena-${x}-${y}`} x={x} y={y} width="22" height="22" fill="#d9d9d9" />
            ))}
            <circle cx="1308" cy="946" r="46" fill="#ffffff" />
            <image href="/assets/img/floorplan/league.png" x="1280" y="910" width="56" height="34" preserveAspectRatio="xMidYMid meet" />
            <text x="1308" y="960" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#111">Trading Arena</text>
            <text x="1308" y="974" textAnchor="middle" fontSize="9" fontWeight="600" fill="#111">6 x 6</text>
            <text x="1302" y="1148" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111">League Area</text>
            <text x="1302" y="1168" textAnchor="middle" fontSize="16" fill="#111">20 x 20</text>
          </g>

          {/* Speaker hall */}
          <g>
            <rect x="614" y="580" width="310" height="732" fill="#d9d9d9" stroke="#3a3a3a" strokeWidth="2.4" />
            <rect x="658" y="582" width="240" height="62" fill="#111111" />
            <rect x="664" y="584" width="34" height="18" fill="#e1251b" />
            <rect x="704" y="584" width="156" height="18" fill="#e1251b" />
            <rect x="866" y="584" width="30" height="18" fill="#e1251b" />
            <text x="681" y="591" textAnchor="middle" fontSize="5" fill="#fff" fontWeight="700">
              <tspan x="681" dy="0">Wing</tspan><tspan x="681" dy="6">Screen</tspan>
            </text>
            <text x="881" y="591" textAnchor="middle" fontSize="5" fill="#fff" fontWeight="700">
              <tspan x="881" dy="0">Wing</tspan><tspan x="881" dy="6">Screen</tspan>
            </text>
            <text x="782" y="597" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="700">Screen 6 x 3</text>
            <text x="778" y="622" textAnchor="middle" fontSize="11" fill="#fff" fontWeight="700">Speaker Stage</text>
            <text x="778" y="636" textAnchor="middle" fontSize="9.5" fill="#fff">4 x 11</text>
            <text x="770" y="700" textAnchor="middle" fontSize="19" fill="#222" fontWeight="700">Speaker Hall- 15 x 33</text>
            {[714, 900, 1086].map((y) => (
              <g key={`hall-${y}`}>
                {renderSeatBlock({ x: 654, y, cols: 5, rows: 6, gapX: 22, gapY: 25, size: 18, prefix: `hall-l-${y}` })}
                {renderSeatBlock({ x: 796, y, cols: 5, rows: 6, gapX: 22, gapY: 25, size: 18, prefix: `hall-r-${y}` })}
              </g>
            ))}

            {hallDoors.map(renderDoor)}
            <rect x="924" y="588" width="8" height="48" fill="#7f8fae" />
            <text transform="rotate(-90 914 612)" x="914" y="612" textAnchor="middle" fontSize="6" fill="#333">
              <tspan x="914" dy="-3">Speaker</tspan><tspan x="914" dy="8">Entrance</tspan>
            </text>
            <text transform="rotate(-90 914 940)" x="914" y="940" textAnchor="middle" fontSize="6.5" fill="#333">
              <tspan x="914" dy="-3">Speaker Hall</tspan><tspan x="914" dy="8">Entrance Gate 1</tspan>
            </text>
            <text transform="rotate(-90 914 1274)" x="914" y="1274" textAnchor="middle" fontSize="6.5" fill="#333">
              <tspan x="914" dy="-3">Speaker Hall</tspan><tspan x="914" dy="8">Entrance Gate 2</tspan>
            </text>
          </g>

          {/* Booths: labels share the parent so a hovered booth (moved last) stays on top */}
          <g>
            {booths.map(renderBooth)}
            {booths.map(renderBoothLabel)}
          </g>

          {showTradingTooltip && (
            <g pointerEvents="none">
              <rect x="1220" y="806" width="176" height="58" rx="8" fill="#fff" stroke="#e0e0e0" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
              <polygon points="1300,864 1316,864 1308,873" fill="#fff" />
              <text x="1308" y="828" textAnchor="middle" fontSize="12" fontWeight="700" fill="#111827">Trading Arena</text>
              <text x="1308" y="846" textAnchor="middle" fontSize="11" fill="#666">Size: 6 x 6 &middot; League Area 20 x 20</text>
            </g>
          )}
        </svg>
      </div>

      <div className="fp-legend">
        {Object.entries(tiers).map(([key, tier]) => (
          <span key={key}>
            <span className="fp-swatch" style={{ background: tier.swatch, borderColor: tier.stroke }} />
            {tier.label}
          </span>
        ))}
      </div>

      <p className="fp-hint">Hover over any booth for details, then click it to reserve.</p>

      {selectedBooth && (
        <BoothModal
          booth={selectedBooth}
          onClose={() => setSelectedBooth(null)}
          onReserved={({ name, company }) => {
            // Show it as reserved straight away, then refresh from the server
            setReservedBooths((prev) => [
              ...prev,
              { boothNo: String(selectedBooth.boothNo), companyName: company || name || "Reserved", logo: RESERVED_LOGO, url: "#", approved: false },
            ]);
            loadBooked().then((list) => list && setReservedBooths(list));
          }}
        />
      )}
    </>
  );
}
