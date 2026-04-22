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

const serviceList = [
  "Windows Installation", "Antivirus & Security", "Hardware Repair",
  "HDD to SSD Upgrade", "RAM Upgrade", "Networking", "Computer Supply", "Other",
];

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } =
    useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log(data);
    reset();
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    border: hasError ? "1px solid #ef4444" : "1px solid #DDE0FF",
    fontFamily: "DM Sans, sans-serif",
    color: "#0E1240",
    background: "#F7F8FF",
    width: "100%",
    padding: "13px 16px",
    fontSize: "14px",
    borderRadius: "10px",
    outline: "none",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "8px",
    color: "#374151",
    fontFamily: "DM Sans, sans-serif",
  };

  return (
    <>
      <style>{`
        .contact-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 40px;
          align-items: start;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .form-card {
          border-radius: 16px;
          padding: 40px;
          background: white;
          border: 1px solid #DDE0FF;
          box-shadow: 0 4px 24px rgba(27,32,133,0.06);
        }
        @media (max-width: 767px) {
          .contact-container {
            padding: 60px 20px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .form-card {
            padding: 24px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .contact-container {
            padding: 80px 40px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .form-card {
            padding: 32px;
          }
        }
      `}</style>

      <section id="contact" style={{ background: "#F7F8FF" }}>
        <div className="contact-container">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <span style={{
              display: "inline-block", padding: "6px 16px", borderRadius: "999px",
              fontSize: "11px", fontWeight: 500, marginBottom: "16px",
              background: "#E8EAFF", color: "#1B2085",
              fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em",
            }}>
              GET IN TOUCH
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif", color: "#0E1240",
              fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700,
              lineHeight: 1.15, marginBottom: "16px",
            }}>
              Let&apos;s Solve Your<br />Tech Problems
            </h2>
            <p style={{
              color: "#6B7280", fontFamily: "DM Sans, sans-serif",
              fontSize: "15px", maxWidth: "400px", margin: "0 auto", lineHeight: 1.65,
            }}>
              Reach out today — we&apos;ll get back to you fast.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="contact-grid">

            {/* Left — Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div style={{ borderRadius: "16px", padding: "32px", background: "#1B2085" }}>
                <h3 style={{
                  color: "white", fontFamily: "Syne, sans-serif",
                  fontSize: "20px", fontWeight: 700, marginBottom: "8px",
                }}>
                  Visit Our Shop
                </h3>
                <p style={{
                  color: "rgba(255,255,255,0.55)", fontFamily: "DM Sans, sans-serif",
                  fontSize: "14px", marginBottom: "28px", lineHeight: 1.6,
                }}>
                  Walk-ins welcome. We&apos;re open Monday to Saturday.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                  <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <MapPin size={16} style={{ color: "#93c5fd", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif", fontSize: "14px", lineHeight: 1.6 }}>
                      Superior Arcade, 2nd Floor, Shop 2-02<br />Accra Road, Nairobi City
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Phone size={16} style={{ color: "#93c5fd", flexShrink: 0 }} />
                    <a href="tel:+254735606059" style={{
                      color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif",
                      fontSize: "14px", textDecoration: "none",
                    }}>0735 606 059</a>
                  </div>
                  <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                    <Mail size={16} style={{ color: "#93c5fd", flexShrink: 0 }} />
                    <a href="mailto:hello@cognisive.co.ke" style={{
                      color: "rgba(255,255,255,0.7)", fontFamily: "DM Sans, sans-serif",
                      fontSize: "14px", textDecoration: "none",
                    }}>hello@cognisive.co.ke</a>
                  </div>
                </div>
              </div>

              <div style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #DDE0FF" }}>
                <iframe
                  title="Cognisive Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.817905!2d36.8219!3d-1.2864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zAccra+Road+Nairobi!5e0!3m2!1sen!2ske!4v1"
                  width="100%" height="220"
                  style={{ border: 0, display: "block" }}
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="form-card">
                {isSubmitSuccessful ? (
                  <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center",
                    justifyContent: "center", padding: "64px 0", textAlign: "center", gap: "16px",
                  }}>
                    <div style={{
                      width: "64px", height: "64px", borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#E8EAFF",
                    }}>
                      <Send size={24} style={{ color: "#1B2085" }} />
                    </div>
                    <h3 style={{ fontFamily: "Syne, sans-serif", color: "#0E1240", fontSize: "20px", fontWeight: 700 }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif", fontSize: "14px" }}>
                      We&apos;ll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                    <div className="form-row">
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input {...register("name")} placeholder="John Kamau" style={inputStyle(!!errors.name)} />
                        {errors.name && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.name.message}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Email *</label>
                        <input {...register("email")} placeholder="john@company.co.ke" style={inputStyle(!!errors.email)} />
                        {errors.email && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div>
                        <label style={labelStyle}>Phone (optional)</label>
                        <input {...register("phone")} placeholder="0700 000 000" style={inputStyle(false)} />
                      </div>
                      <div>
                        <label style={labelStyle}>Service Needed *</label>
                        <select {...register("service")} style={inputStyle(!!errors.service)}>
                          <option value="">Select a service...</option>
                          {serviceList.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                        {errors.service && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.service.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label style={labelStyle}>Describe Your Issue *</label>
                      <textarea
                        {...register("message")}
                        rows={5}
                        placeholder="Tell us what's going on with your system..."
                        style={{ ...inputStyle(!!errors.message), resize: "none" }}
                      />
                      {errors.message && <p style={{ color: "#ef4444", fontSize: "12px", marginTop: "4px" }}>{errors.message.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        display: "flex", alignItems: "center", justifyContent: "center",
                        gap: "8px", padding: "14px 32px", fontSize: "14px", fontWeight: 600,
                        borderRadius: "10px", background: "#1B2085", color: "white",
                        border: "none", cursor: isSubmitting ? "not-allowed" : "pointer",
                        fontFamily: "DM Sans, sans-serif", opacity: isSubmitting ? 0.6 : 1,
                        width: "100%",
                      }}
                    >
                      {isSubmitting ? "Sending..." : <><Send size={15} /> Send Message</>}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}