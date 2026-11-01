import { useEffect, useRef } from "react";
import { Lock } from "lucide-react";

const TOOLTIP_W = 160;
const TOOLTIP_H = 70;
const TOOLTIP_GAP = 12;
const ARROW_H = 8;

// One booth on the SVG floor plan, with hover tooltip and reserved state
export default function Booth({
  boothId,
  boothNo,
  boothType,
  title,
  size,
  x,
  y,
  width,
  height,
  color,
  borderRadius = 6,
  textColor = "#1a1a2e",
  fontSize = 14,
  showBoothNo = true,
  showBottomSize = true,
  showShadow = true,
  showHighlight = true,
  strokeColor = "rgba(0,0,0,0.15)",
  strokeWidth = 1.5,
  onClick,
  isReserved = false,
  reservedInfo = null,
  activeTooltipId = null,
  setActiveTooltipId,
}) {
  const groupRef = useRef(null);
  const isTooltipVisible = activeTooltipId === boothId;

  const cx = x + width / 2;
  const below = y <= TOOLTIP_H + TOOLTIP_GAP + ARROW_H;
  const tooltipX = cx - TOOLTIP_W / 2;
  const tooltipY = below ? y + height + TOOLTIP_GAP : y - TOOLTIP_H - TOOLTIP_GAP;
  const arrowBaseY = below ? y + height + TOOLTIP_GAP : y - TOOLTIP_GAP;
  const arrowTipY = below ? y + height + 4 : y - 4;

  const reservedLabel = `${reservedInfo?.companyName || "Reserved"} - Booth no: ${boothNo}`;
  const reservedLabelSize = reservedLabel.length > 24 ? 10 : 12;
  const gradientId = `hover-gold-${boothId}`;

  // SVG stacking follows DOM order, so move the active booth to the end.
  useEffect(() => {
    if (!isTooltipVisible || !groupRef.current?.parentNode) return;
    groupRef.current.parentNode.appendChild(groupRef.current);
  }, [isTooltipVisible]);

  const tooltipFrame = (
    <>
      <rect x={tooltipX} y={tooltipY} width={TOOLTIP_W} height={TOOLTIP_H} rx={8} fill="#fff" stroke="#e0e0e0" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.15))" />
      <polygon points={`${cx - 8},${arrowBaseY} ${cx + 8},${arrowBaseY} ${cx},${arrowTipY}`} fill="#fff" />
    </>
  );

  return (
    <g
      ref={groupRef}
      onMouseEnter={() => setActiveTooltipId?.(boothId)}
      onMouseLeave={() => setActiveTooltipId?.((current) => (current === boothId ? null : current))}
      onClick={() => {
        if (!isReserved && onClick) onClick({ boothId, boothNo, boothType, title, size });
      }}
      style={{ cursor: isReserved ? "default" : "pointer" }}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="50%" stopColor="#F4A800" />
          <stop offset="100%" stopColor="#C8750A" />
        </linearGradient>
      </defs>

      {showShadow && <rect x={x + 3} y={y + 3} width={width} height={height} rx={borderRadius} fill="rgba(0,0,0,0.1)" />}

      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={borderRadius}
        fill={isTooltipVisible ? `url(#${gradientId})` : color}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        style={{ transition: "all 0.2s ease" }}
      />

      {showHighlight && <rect x={x + 2} y={y + 3} width={width - 4} height={height / 4} rx={borderRadius + 3} fill="rgba(255,255,255,0.2)" />}

      {isReserved ? (
        <>
          <rect x={x} y={y} width={width} height={height} rx={borderRadius} fill="rgba(0,0,0,0.35)" />
          <Lock x={cx - 8} y={y + height / 2 - 16} size={16} color="#fff" />
          <text x={cx} y={y + height / 2 + 14} textAnchor="middle" fontSize={fontSize - 2} fill="#fff" fontWeight="700">
            RESERVED
          </text>
        </>
      ) : (
        <>
          {showBoothNo && boothNo && (
            <text x={cx} y={y + 16} textAnchor="middle" fontSize={fontSize - 3} fill={isTooltipVisible ? "#1a1a1a" : "rgba(0,0,0,0.7)"} fontWeight="600">
              Booth no: {boothNo}
            </text>
          )}
          <text
            x={cx}
            y={y + height / 2.2}
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize={fontSize}
            fill={isTooltipVisible ? "#1a1a1a" : textColor}
            fontWeight="700"
          >
            {String(title).split("\n").map((line, i) => (
              <tspan key={i} x={cx} dy={i === 0 ? "0em" : "1.1em"}>{line}</tspan>
            ))}
          </text>
          {size && showBottomSize && (
            <text x={cx} y={y + height - 10} textAnchor="middle" fontSize={fontSize - 3} fill={isTooltipVisible ? "rgba(0,0,0,0.75)" : "rgba(0,0,0,0.6)"}>
              {size}
            </text>
          )}
        </>
      )}

      {isTooltipVisible && !isReserved && (
        <g pointerEvents="none">
          {tooltipFrame}
          {boothNo && (
            <text x={cx} y={tooltipY + 18} textAnchor="middle" fontSize="12" fontWeight="700">Booth no: {boothNo}</text>
          )}
          <text x={cx} y={tooltipY + 34} textAnchor="middle" fontSize="12">{title}</text>
          {size && (
            <text x={cx} y={tooltipY + 50} textAnchor="middle" fontSize="11" fill="#666">Size: {size}</text>
          )}
        </g>
      )}

      {isTooltipVisible && isReserved && reservedInfo && (
        <g>
          {tooltipFrame}
          {reservedInfo.approved ? (
            <>
              <a href={reservedInfo.url} target="_blank" rel="noopener noreferrer">
                <image href={reservedInfo.logo} x={cx - 50} y={tooltipY + 6} width={100} height={42} preserveAspectRatio="xMidYMid meet" style={{ cursor: "pointer" }} />
              </a>
              <text x={cx} y={tooltipY + 60} fontSize={reservedLabelSize} fontWeight="700" fill="#333" textAnchor="middle">
                {reservedLabel}
              </text>
            </>
          ) : (
            <>
              <Lock x={cx - 12} y={tooltipY + 12} size={24} color="#c19d38" />
              <text x={cx} y={tooltipY + 54} fontSize="12" fontWeight="700" fill="#333" textAnchor="middle">RESERVED</text>
            </>
          )}
        </g>
      )}
    </g>
  );
}
