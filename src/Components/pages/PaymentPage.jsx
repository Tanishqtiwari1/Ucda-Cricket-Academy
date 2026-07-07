import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2 } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/Components/ui/use-toast";

const QR_IMG = "/images/QR_IMG.jpg";
const OWNER_WHATSAPP = "918010073509";

const ADMISSION_FEE = 2000;
const TRAINING_FEES = {
  "Normal Training": 2000,
  "Personal Training": 8000,
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function PaymentPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    full_name: "",
    parent_name: "",
    mobile_number: "",
    email: "",
    fee_type: "",
    training_type: "",
    payment_date: "",
    transaction_id: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const needsTrainingType = form.fee_type === "Course Fee" || form.fee_type === "Both";

  const amount = useMemo(() => {
    if (form.fee_type === "Admission Fee") return ADMISSION_FEE;
    if (form.fee_type === "Course Fee") return TRAINING_FEES[form.training_type] || 0;
    if (form.fee_type === "Both") return ADMISSION_FEE + (TRAINING_FEES[form.training_type] || 0);
    return 0;
  }, [form.fee_type, form.training_type]);

  const canSubmit = form.fee_type && (!needsTrainingType || form.training_type) && amount > 0;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);

    const selected_course = needsTrainingType ? form.training_type : "Admission Fee";

    await base44.entities.PaymentSubmission.create({
      full_name: form.full_name,
      parent_name: form.parent_name,
      mobile_number: form.mobile_number,
      email: form.email,
      selected_course,
      fee_type: form.fee_type,
      amount_paid: amount,
      payment_date: form.payment_date,
      transaction_id: form.transaction_id,
      payment_status: "Pending",
    });

    const text = `New Payment Submission - UDCA Cricket Academy\n\nStudent Name: ${form.full_name}\nMobile Number: ${form.mobile_number}\nFee Type: ${form.fee_type}${needsTrainingType ? `\nTraining Type: ${form.training_type}` : ""}\nAmount Paid: ₹${amount}\nPayment Date: ${form.payment_date}\nTransaction ID: ${form.transaction_id || "N/A"}\nPayment Status: Pending Verification`;
    const url = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Payment details submitted", description: "We've notified the coach on WhatsApp for confirmation." });
  };

  return (
    <div className="pt-28 pb-24 lg:pb-32 bg-midnight min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#16DB65]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span variants={fadeUp} custom={0} className="font-mono-jb text-gold text-sm tracking-[0.3em] uppercase">
            Fees & Payment
          </motion.span>
          <motion.h1 variants={fadeUp} custom={1} className="text-3xl lg:text-5xl font-black text-white mt-4 tracking-tight">
            PAY YOUR <span className="text-turf">FEES</span>
          </motion.h1>
          <motion.div variants={fadeUp} custom={2} className="w-20 h-1 bg-gold mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* QR + Coach Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div variants={fadeUp} custom={0} className="p-6 bg-white/5 rounded-lg border border-white/10 text-center">
              <h3 className="text-white font-bold text-lg mb-4">Scan to Pay</h3>
              <img
                src={QR_IMG}
                alt="PhonePe QR code for UDCA Cricket Academy fee payment"
                className="w-full max-w-[280px] mx-auto rounded-lg"
                loading="lazy"
              />
              <p className="text-inertia text-xs mt-4">Scan with any UPI app to pay, then fill the form with your payment details.</p>
            </motion.div>

            <motion.div variants={fadeUp} custom={1} className="p-6 bg-white/5 rounded-lg border border-gold/20">
              <h3 className="text-white font-bold text-base mb-2">Need Help with Payment or Admission?</h3>
              <p className="text-inertia text-sm mb-4">Contact the Coach on WhatsApp — we're happy to guide you.</p>
              <a
                href={`https://wa.me/${OWNER_WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-turf text-[#050A18] font-bold text-sm rounded tracking-wide hover:shadow-[0_0_25px_rgba(22,219,101,0.3)] transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                CHAT WITH COACH
              </a>
            </motion.div>

            {/* Fee Structure Reference */}
            <motion.div variants={fadeUp} custom={2} className="p-6 bg-white/5 rounded-lg border border-white/10">
              <h3 className="text-white font-bold text-base mb-4">Fee Structure</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-inertia">
                  <span>Admission Fee (One-Time)</span>
                  <span className="text-gold font-mono-jb">₹{ADMISSION_FEE}</span>
                </div>
                <div className="flex justify-between text-inertia">
                  <span>Normal Training (Monthly)</span>
                  <span className="text-turf font-mono-jb">₹{TRAINING_FEES["Normal Training"]}</span>
                </div>
                <div className="flex justify-between text-inertia">
                  <span>Personal Training (Monthly)</span>
                  <span className="text-turf font-mono-jb">₹{TRAINING_FEES["Personal Training"]}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="p-10 bg-white/5 rounded-lg border border-turf/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-turf mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Payment Details Submitted!</h3>
                <p className="text-inertia text-sm">The coach has been notified on WhatsApp and will confirm your payment shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 bg-white/5 rounded-lg border border-white/10">
                <h3 className="text-white font-bold text-xl mb-6">Payment Details</h3>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">FULL NAME *</label>
                    <input type="text" name="full_name" value={form.full_name} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="Student full name" />
                  </div>
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">PARENT/GUARDIAN NAME</label>
                    <input type="text" name="parent_name" value={form.parent_name} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="Parent/guardian name" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">MOBILE NUMBER *</label>
                    <input type="tel" name="mobile_number" value={form.mobile_number} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">EMAIL ADDRESS</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                      placeholder="email@example.com" />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">FEE TYPE *</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Admission Fee", "Course Fee", "Both"].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setForm((prev) => ({ ...prev, fee_type: type }))}
                        className={`px-3 py-3 rounded text-xs font-mono-jb tracking-wide border transition-all duration-300 ${
                          form.fee_type === type
                            ? "bg-turf text-[#050A18] border-turf"
                            : "bg-white/5 text-inertia border-white/10 hover:border-turf/40"
                        }`}
                      >
                        {type.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {needsTrainingType && (
                  <div className="mb-4">
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">TRAINING TYPE *</label>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(TRAINING_FEES).map((type) => (
                        <button
                          type="button"
                          key={type}
                          onClick={() => setForm((prev) => ({ ...prev, training_type: type }))}
                          className={`px-3 py-3 rounded text-xs font-mono-jb tracking-wide border transition-all duration-300 ${
                            form.training_type === type
                              ? "bg-gold text-[#050A18] border-gold"
                              : "bg-white/5 text-inertia border-white/10 hover:border-gold/40"
                          }`}
                        >
                          {type.toUpperCase()} — ₹{TRAINING_FEES[type]}/MO
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">AMOUNT PAID (₹) *</label>
                    <input type="text" readOnly value={amount > 0 ? `₹${amount}` : ""}
                      className="w-full px-4 py-3 bg-white/10 border border-white/10 rounded text-turf font-mono-jb font-bold text-sm cursor-not-allowed"
                      placeholder="Select fee type" />
                  </div>
                  <div>
                    <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">PAYMENT DATE *</label>
                    <input type="date" name="payment_date" value={form.payment_date} onChange={handleChange} required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors" />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="text-inertia text-xs font-mono-jb tracking-wider mb-1.5 block">TRANSACTION ID / UTR NUMBER</label>
                  <input type="text" name="transaction_id" value={form.transaction_id} onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded text-white text-sm focus:border-turf focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="UPI transaction reference" />
                </div>

                {/* Live Payment Summary */}
                {form.fee_type && (!needsTrainingType || form.training_type) && (
                  <div className="mb-6 p-5 bg-turf/5 border border-turf/20 rounded-lg">
                    <h4 className="text-white font-bold text-sm mb-3">Payment Summary</h4>
                    <div className="space-y-1.5 text-sm">
                      {(form.fee_type === "Admission Fee" || form.fee_type === "Both") && (
                        <div className="flex justify-between text-inertia">
                          <span>Admission Fee (One-Time)</span>
                          <span className="text-white font-mono-jb">₹{ADMISSION_FEE}</span>
                        </div>
                      )}
                      {needsTrainingType && (
                        <>
                          <div className="flex justify-between text-inertia">
                            <span>Training Type</span>
                            <span className="text-white">{form.training_type}</span>
                          </div>
                          <div className="flex justify-between text-inertia">
                            <span>Monthly Training Fee</span>
                            <span className="text-white font-mono-jb">₹{TRAINING_FEES[form.training_type]}</span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between pt-2 mt-2 border-t border-white/10 font-bold">
                        <span className="text-gold">Total Payable</span>
                        <span className="text-gold font-mono-jb">₹{amount}</span>
                      </div>
                    </div>
                    <p className="text-inertia text-xs mt-3 italic">
                      Note: The Admission Fee is charged only once during enrollment. Training Fees are recurring monthly payments.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting || !canSubmit}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-turf text-[#050A18] font-bold text-sm tracking-wide rounded hover:shadow-[0_0_30px_rgba(22,219,101,0.4)] transition-all duration-300 disabled:opacity-50"
                >
                  {submitting ? "SUBMITTING..." : "SUBMIT PAYMENT DETAILS"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}