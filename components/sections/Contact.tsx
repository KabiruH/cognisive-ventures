// components/sections/Contact.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please describe your issue (min 10 characters)"),
});

type FormData = z.infer<typeof schema>;

const services = ["Windows Installation", "Antivirus & Security", "Hardware Repair", "HDD to SSD Upgrade", "RAM Upgrade", "Networking", "Computer Supply", "Other"];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    reset();
  };

  const inputStyle = (hasError: boolean) => ({
    border: hasError ? "1px solid #ef4444" : "1px solid #DDE0FF",
    fontFamily: "DM Sans, sans-serif",
    color: "#0E1240",
    background: "#F7F8FF",
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    borderRadius: "12px",
    outline: "none",
  });

  return (
    <section id="contact" style={{ background: "#F7F8FF" }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "96px 48px" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: "#E8EAFF", color: "#1B2085", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.1em" }}>
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
            Let&apos;s Solve Your<br />Tech Problems
          </h2>
          <p className="text-base max-w-md mx-auto" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
            Reach out today — we&apos;ll get back to you fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl p-7" style={{ background: "#1B2085" }}>
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "Syne, sans-serif" }}>Visit Our Shop</h3>
              <p className="text-white/60 text-sm mb-6" style={{ fontFamily: "DM Sans, sans-serif" }}>Walk-ins welcome. We&apos;re open Monday to Saturday.</p>
              <div className="flex flex-col gap-4">
                <div className="flex gap-3">
                  <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#93c5fd" }} />
                  <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    Superior Arcade, 2nd Floor, Shop 2-02<br />Accra Road, Nairobi City
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={16} className="shrink-0" style={{ color: "#93c5fd" }} />
                  <a href="tel:+254735606059" className="text-white/70 hover:text-white text-sm transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>0735 606 059</a>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail size={16} className="shrink-0" style={{ color: "#93c5fd" }} />
                  <a href="mailto:hello@cognisive.co.ke" className="text-white/70 hover:text-white text-sm transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>hello@cognisive.co.ke</a>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden flex-1 min-h-45">
              <iframe title="Cognisive Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817905!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zAccra+Road+Nairobi!5e0!3m2!1sen!2ske!4v1"
                width="100%" height="200" style={{ border: 0 }} loading="lazy" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <div className="rounded-2xl p-8" style={{ background: "white", border: "1px solid #DDE0FF", boxShadow: "0 4px 24px rgba(27,32,133,0.06)" }}>
              {isSubmitSuccessful ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "#E8EAFF" }}>
                    <Send size={24} style={{ color: "#1B2085" }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>Message Sent!</h3>
                  <p className="text-sm" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>We&apos;ll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>Full Name *</label>
                      <input {...register("name")} placeholder="John Kamau" style={inputStyle(!!errors.name)} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>Email *</label>
                      <input {...register("email")} placeholder="john@company.co.ke" style={inputStyle(!!errors.email)} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>Phone (optional)</label>
                      <input {...register("phone")} placeholder="0700 000 000" style={inputStyle(false)} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>Service Needed *</label>
                      <select {...register("service")} style={inputStyle(!!errors.service)}>
                        <option value="">Select a service...</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                      {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium mb-1.5" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>Describe Your Issue *</label>
                    <textarea {...register("message")} rows={4} placeholder="Tell us what's going on with your system..."
                      style={{ ...inputStyle(!!errors.message), resize: "none" }} />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold rounded-xl transition-all cursor-pointer disabled:opacity-60"
                    style={{ background: "#1B2085", color: "white", fontFamily: "DM Sans, sans-serif" }}>
                    {isSubmitting ? "Sending..." : <><Send size={15} /> Send Message</>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}