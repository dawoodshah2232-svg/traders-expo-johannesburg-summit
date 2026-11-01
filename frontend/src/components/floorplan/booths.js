// Emperors Palace, Johannesburg floor plan (ported from the ProFX Expo Africa FloorPlanJoburg).
// Coordinates follow the venue drawing (joburg-venue.png, 1317 x 797) at 2x scale.
// Booth numbers, types and prices must match backend/config/floorplan.php — the API sets
// the real price on every booking, these are only for display.

export const tiers = {
  official: { label: "Official Sponsorship", fill: "url(#jb-official)", swatch: "#4c5d8f", stroke: "#7f8fc0", text: "#ffffff", badge: "#e9ecf5", badgeText: "#1f2a4d" },
  title: { label: "Title Sponsorship", fill: "url(#jb-title)", swatch: "#3e7c6c", stroke: "#78b3a1", text: "#ffffff", badge: "#bff0c8", badgeText: "#1d4a3f" },
  exclusive: { label: "Exclusive Sponsorship", fill: "url(#jb-exclusive)", swatch: "#3d2a9b", stroke: "#7867d6", text: "#ffffff", badge: "#bfe6ff", badgeText: "#1b1060" },
  regional: { label: "Regional Sponsorship", fill: "url(#jb-regional)", swatch: "#b9edbb", stroke: "#86cf8b", text: "#1b3a1d", badge: "#6b7a6c", badgeText: "#ffffff" },
  diamond: { label: "Diamond Booth", fill: "url(#jb-diamond)", swatch: "#8fd8e4", stroke: "#5fbccc", text: "#10343a", badge: "#3b2fa0", badgeText: "#ffffff" },
  elite: { label: "Elite Booth", fill: "url(#jb-elite)", swatch: "#f08a1c", stroke: "#d97706", text: "#2b1400", badge: "#7a3d00", badgeText: "#ffffff" },
  gold: { label: "Gold Booth", fill: "url(#jb-gold)", swatch: "#e2c27a", stroke: "#c9a24a", text: "#2f2408", badge: "#1c1c1c", badgeText: "#ffffff" },
  silver: { label: "Silver Booth", fill: "url(#jb-silver)", swatch: "#d9d9d9", stroke: "#b4b9bc", text: "#222222", badge: "#1c1c1c", badgeText: "#ffffff" },
};

// USD
export const boothPrices = {
  title: 3500,
  regional: 3000,
  official: 2500,
  exclusive: 2500,
  elite: 2000,
  diamond: 1750,
  gold: 1000,
  silver: 600,
};

export const pad = (n) => String(n).padStart(2, "0");

const sponsorBooth = (boothNo, type, y) => ({
  boothNo, type, x: 1898, y, width: 78, height: 120, size: "5 x 3",
  title: `${tiers[type].label.split(" ")[0]}\nSponsorship\nBooth`,
});

const standBooth = (boothNo, type, x, y) => ({
  boothNo, type, x, y, width: 100, height: 74, size: "4 x 3",
  title: `${type === "diamond" ? "Diamond" : "Elite"}\nBooth`,
});

const smallBooth = (boothNo, type, x, y, width = 72, height = 76) => ({
  boothNo, type, x, y, width, height, size: "3 x 3",
  title: `${type === "gold" ? "Gold" : "Silver"}\nBooth`,
});

const rowTypes = ["gold", "silver", "silver", "silver", "silver", "silver", "gold"];
const sideTypes = ["gold", "silver", "silver", "gold"];

// Numbering runs clockwise: sponsors 01-04, left stands 05-10, right stands 11-16,
// top row 17-23 (right to left), speaker-hall side 24-31, bottom row 32-38.
export const booths = [
  sponsorBooth(1, "official", 616),
  sponsorBooth(2, "title", 790),
  sponsorBooth(3, "exclusive", 964),
  sponsorBooth(4, "regional", 1138),
  ...[
    ["diamond", 578], ["diamond", 700], ["elite", 780],
    ["elite", 1036], ["diamond", 1116], ["diamond", 1240],
  ].flatMap(([type, y], i) => [
    standBooth(5 + i, type, 1590, y),
    standBooth(11 + i, type, 1746, y),
  ]),
  // Small booths sit on a 78px pitch so neighbours keep a 6px gap.
  ...rowTypes.map((type, i) => smallBooth(23 - i, type, 1032 + i * 78, 578)),
  ...[642, 712, 782, 852, 968, 1038, 1108, 1178].map((y, i) => smallBooth(24 + i, sideTypes[i % 4], 934, y, 78, 64)),
  ...rowTypes.map((type, i) => smallBooth(32 + i, type, 1032 + i * 78, 1234)),
];

// Speaker hall entrances face the booth aisle on the hall's right wall.
export const hallDoors = [
  { x: 924, y: 612, angle: -90, width: 48 },
  { x: 924, y: 942, angle: -90, width: 44 },
  { x: 924, y: 1277, angle: -90, width: 56 },
];
