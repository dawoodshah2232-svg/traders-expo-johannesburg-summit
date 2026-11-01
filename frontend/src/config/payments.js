// Payment details shown in the booth booking popup (copied from the ProFX Expo Africa site).
// Check with the organiser before going live — these are real accounts.
export const BOOKING_WHATSAPP = { number: "971588845033", label: "+971 58 884 5033" };

export const UPI = {
  payee: "MS MS SHREE SHYAM BUILDERS",
  id: "profxevent@indianbank",
  qr: "/assets/img/payments/upi-qr.png",
};

export const USDT_NETWORKS = [
  { id: "TRC20", label: "TRON (TRC20)", address: "TGGbNk9YvAEdguozs3EdapnEAuc1RYghio", qr: "/assets/img/payments/usdt-qr-1.png" },
  { id: "ERC20", label: "ETHEREUM (ERC20)", address: "0x07b0a37f957b82633ce1aadb8e6752c88f115094", qr: "/assets/img/payments/usdt-qr-2.png" },
];

export const BANK = {
  holder: "PROFINSUMMIT",
  account: "8123734309",
  ifsc: "IDIB000R088",
  cbs: "02342",
  address: ["RAJNI KHAND F3, WARD NUMBER 1,", "RAJNI KHAND, SHARDA NAGAR,", "RAEBARELI ROAD, LUCKNOW – 226002"],
};

export const PAYMENT_METHODS = [
  { id: "now", label: "NowPayments", logo: "/assets/img/payments/nowpayments.png" },
  { id: "stripe", label: "Stripe", logo: "/assets/img/payments/stripe.png" },
  { id: "upi", label: "UPI", logo: "/assets/img/payments/upi.png" },
  { id: "usdt", label: "USDT", logo: "/assets/img/payments/usdt.png" },
  { id: "bank", label: "Bank Deposit", logo: "/assets/img/payments/bank-deposit.png" },
];
