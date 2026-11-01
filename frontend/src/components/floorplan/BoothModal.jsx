import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { boothPrices } from "./booths";
import { reserveBooth } from "../../api/floorplan";
import { BANK, BOOKING_WHATSAPP, PAYMENT_METHODS, UPI, USDT_NETWORKS } from "../../config/payments";

const FIELDS = [
  { name: "name", placeholder: "Name" },
  { name: "email", placeholder: "Email", type: "email" },
  { name: "company", placeholder: "Company" },
  { name: "phone" },
  { name: "referal", placeholder: "Referral code (optional)", optional: true },
];

const toast = (icon, title) =>
  Swal.fire({ toast: true, icon, title, position: "top-end", showConfirmButton: false, timer: 3000, customClass: { container: "swal2-toast-container-high-z" } });

// Two-step booth reservation: contact details → payment method + proof upload
export default function BoothModal({ booth, onClose, onReserved }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", referal: "" });
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [network, setNetwork] = useState("");
  const [paymentImage, setPaymentImage] = useState(null);
  const [busy, setBusy] = useState(false);

  const amount = boothPrices[booth.boothType] ?? 0;
  const whatsappText = encodeURIComponent("Hello, I would like to book a booth.");

  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const validateStep1 = () => {
    if (!form.name || !form.email || !form.company || !form.phone) {
      toast("error", "Please fill all required fields");
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast("error", "Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!paymentMethod || !paymentImage) {
      toast("warning", "Payment method and proof are required");
      return;
    }
    if (paymentMethod === "usdt" && !network) {
      toast("warning", "Please select the USDT network you paid on");
      return;
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("email", form.email);
    data.append("phone", form.phone);
    data.append("company", form.company);
    data.append("referal_code", form.referal);
    data.append("boothno", booth.boothNo);
    data.append("paymenttype", paymentMethod);
    data.append("networktype", paymentMethod === "usdt" ? network : "");
    data.append("file", paymentImage);

    setBusy(true);
    try {
      await reserveBooth(data);
      onReserved?.({ name: form.name, company: form.company });
      onClose();
      Swal.fire({ icon: "success", title: "Booth Reserved Successfully!", text: "Payment submitted. We will verify shortly." });
    } catch (err) {
      Swal.fire({ icon: "error", title: err.status ? "Error" : "Server Error", text: err.message || "Please try again later" });
    } finally {
      setBusy(false);
    }
  };

  const proofUpload = (
    <>
      <h6>Upload Payment Proof for Verification</h6>
      <label>Amount to be Paid</label>
      <input type="text" value={`$${amount}`} disabled />
      <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => setPaymentImage(e.target.files[0] || null)} />
    </>
  );

  return createPortal(
    <div className="ticket-custom-modal-overlay" onClick={onClose}>
      <div className="ticket-custom-modal" role="dialog" aria-modal="true" aria-label={`${booth.title} reservation`} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>{booth.title.replace(/\n/g, " ")} Reservation</h4>
          <button className="modal-close" onClick={onClose} aria-label="Close"><X /></button>
        </div>

        <div className="steps my-6 flex justify-center">
          {[1, 2].map((s) => (
            <div key={s} className={`step ${step >= s ? "active" : ""}`}>Step {s}</div>
          ))}
        </div>

        {step === 1 && (
          <div className="step-content">
            <div className="grid gap-6 md:grid-cols-12">
              <div className="grid content-start gap-4 md:col-span-7">
                {FIELDS.map((field) =>
                  field.name === "phone" ? (
                    <PhoneInput
                      key="phone"
                      country="za"
                      value={form.phone}
                      onChange={(phone) => setForm({ ...form, phone })}
                      inputProps={{ name: "phone", required: true, placeholder: "Phone Number" }}
                      containerStyle={{ width: "100%" }}
                      inputStyle={{ width: "100%", height: "50px", fontSize: "15px", backgroundColor: "#F7F7F7", border: "none", borderRadius: "25px", paddingLeft: "52px", color: "#707070" }}
                      buttonStyle={{ border: "none", background: "transparent", borderRadius: "25px 0 0 25px" }}
                      specialLabel=""
                    />
                  ) : (
                    <input
                      key={field.name}
                      type={field.type || "text"}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      required={!field.optional}
                    />
                  )
                )}
              </div>

              <div className="md:col-span-5">
                <div className="summary-box rounded-md bg-[#f7f7f7] p-6 md:sticky md:top-0">
                  <h6 className="black">Booth Summary</h6>
                  <p>Booth No: <b>{booth.boothNo}</b></p>
                  <p>Booth Title: <b>{booth.title.replace(/\n/g, " ")}</b></p>
                  {booth.size && <p>Booth Size: <b>{booth.size}</b></p>}
                  <p>Booth Amount: ${amount}</p>
                  <hr />
                  <h5>Total Payable: ${amount}</h5>
                </div>
                <div className="summary-box mt-12 rounded-md bg-[#f7f7f7] p-6">
                  <h6 className="black">Contact us for Booking support</h6>
                  <p className="mt-4">
                    Whatsapp:{" "}
                    <b>
                      <a className="black" href={`https://wa.me/${BOOKING_WHATSAPP.number}?text=${whatsappText}`} target="_blank" rel="noopener noreferrer">
                        {BOOKING_WHATSAPP.label}
                      </a>
                    </b>
                  </p>
                </div>
              </div>
            </div>

            <div className="modal-footer mt-6 flex justify-between">
              <button className="fp-btn fp-btn-outline" onClick={onClose}>Close</button>
              <button className="fp-btn fp-btn-gold" onClick={() => validateStep1() && setStep(2)}>Continue</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <h5 className="mb-6">Choose Payment Method</h5>

            <div className="payment-grid">
              {PAYMENT_METHODS.map((m) => (
                <div
                  key={m.id}
                  role="button"
                  tabIndex={0}
                  aria-pressed={paymentMethod === m.id}
                  className={`payment-card ${paymentMethod === m.id ? "active" : ""}`}
                  onClick={() => setPaymentMethod(m.id)}
                  onKeyDown={(e) => e.key === "Enter" && setPaymentMethod(m.id)}
                >
                  <img src={m.logo} alt={m.label} />
                </div>
              ))}
            </div>

            {(paymentMethod === "now" || paymentMethod === "stripe") && (
              <div className="payment-box mb-4">
                <h6>{paymentMethod === "now" ? "NowPayments" : "Stripe"}</h6>
                <p>Amount: ${amount.toFixed(2)}</p>
                <button className={`fp-btn ${paymentMethod === "now" ? "fp-btn-gold" : "fp-btn-blue"}`}>Pay Now</button>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="payment-box mb-4 flex flex-col gap-2">
                <h6>UPI Payment</h6>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <span>{UPI.payee}</span>
                    <img className="h-auto max-w-full" src={UPI.qr} alt="UPI QR" />
                    <span className="text-center">UPI ID:<br />{UPI.id}</span>
                  </div>
                  <div className="flex flex-col items-start justify-center gap-4">{proofUpload}</div>
                </div>
              </div>
            )}

            {paymentMethod === "usdt" && (
              <div className="payment-box mb-4 flex flex-col gap-4">
                <h6>USDT Payment</h6>
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col justify-center gap-6 lg:flex-row">
                    {USDT_NETWORKS.map((n) => (
                      <div key={n.id} className="flex flex-col items-center">
                        <span>Network</span>
                        <h6>{n.label}</h6>
                        <img className="mb-2 h-auto max-w-full" src={n.qr} alt={`${n.label} QR`} />
                        <span className="break-all text-center">{n.address}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <h6>Upload Payment Proof for Verification</h6>
                    <select value={network} onChange={(e) => setNetwork(e.target.value)}>
                      <option value="">Select Network</option>
                      {USDT_NETWORKS.map((n) => <option key={n.id} value={n.id}>{n.label}</option>)}
                    </select>
                    <label>Amount to be Paid</label>
                    <input type="text" value={`$${amount}`} disabled />
                    <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={(e) => setPaymentImage(e.target.files[0] || null)} />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "bank" && (
              <div className="payment-box bank-deposit-box mb-4">
                <h6 className="mb-6">Bank Deposit</h6>
                <div className="bank-grid">
                  <div className="bank-details">
                    <p><strong>Account Holder:</strong> {BANK.holder}</p>
                    <p><strong>Account Number:</strong> {BANK.account}</p>
                    <p><strong>IFS Code:</strong> {BANK.ifsc}</p>
                    <p><strong>CBS Code:</strong> {BANK.cbs}</p>
                    <p>
                      <strong>Bank Address:</strong>
                      {BANK.address.map((line) => <span key={line}><br />{line}</span>)}
                    </p>
                  </div>
                  <div className="bank-upload">{proofUpload}</div>
                </div>
              </div>
            )}

            <div className="modal-footer mt-6 flex justify-between">
              <button className="fp-btn fp-btn-gold-outline" onClick={() => setStep(1)}>Back</button>
              <button className="fp-btn fp-btn-gold" onClick={handleSubmit} disabled={busy}>
                {busy ? "Submitting…" : "Submit Deposit"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
}
