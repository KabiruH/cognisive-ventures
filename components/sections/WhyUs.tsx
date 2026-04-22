// components/sections/WhyUs.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, ThumbsUp, MapPin, HeadphonesIcon, BadgeCheck, Zap } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Same-Day Response", description: "We understand downtime costs money. Most issues are resolved within the same business day." },
  { icon: BadgeCheck, title: "20+ Years Experience", description: "George and the team bring decades of real-world IT experience across diverse business environments." },
  { icon: MapPin, title: "Nairobi-Based", description: "We're local. On-site visits to your office are fast and straightforward — no long waits." },
  { icon: HeadphonesIcon, title: "Ongoing Support", description: "We don't just fix and leave. Our clients enjoy continued support and proactive maintenance." },
  { icon: ThumbsUp, title: "Transparent Pricing", description: "No hidden charges. We quote clearly before we begin — you always know what you're paying for." },
  { icon: Zap, title: "One-Stop IT Shop", description: "Hardware, software, networking, supply — everything your business needs from a single trusted partner." },
];

const stats = [
  { val: "500+", label: "Happy Clients" },
  { val: "20+", label: "Years Active" },
  { val: "1 Day", label: "Avg. Turnaround" },
];

export default function WhyUs() {
  return (
    <>
      <style>{`
        .whyus-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .whyus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .whyus-reasons-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .whyus-image-col {
          display: block;
          position: relative;
        }
        @media (max-width: 767px) {
          .whyus-container {
            padding: 60px 20px;
          }
          .whyus-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .whyus-reasons-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .whyus-image-col {
            display: none;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .whyus-container {
            padding: 80px 40px;
          }
          .whyus-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .whyus-reasons-grid {
            grid-template-columns: 1fr 1fr;
          }
          .whyus-image-col {
            display: none;
          }
        }
      `}</style>

      <section id="why-us" style={{ background: "white" }}>
        <div className="whyus-container">
          <div className="whyus-grid">

            {/* Left — Copy + Reasons */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <span style={{
                  display: "inline-block", padding: "6px 16px", borderRadius: "999px",
                  fontSize: "11px", fontWeight: 500, marginBottom: "20px",
                  background: "#E8EAFF", color: "#1B2085",
                  fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em",
                }}>
                  WHY CHOOSE US
                </span>

                <h2 style={{
                  fontFamily: "Syne, sans-serif", color: "#0E1240",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700,
                  lineHeight: 1.15, marginBottom: "20px",
                }}>
                  The IT Partner<br />
                  <span style={{ color: "#1B2085" }}>Businesses Trust.</span>
                </h2>

                <p style={{
                  color: "#6B7280", fontFamily: "DM Sans, sans-serif",
                  fontSize: "15px", lineHeight: 1.75, marginBottom: "40px",
                }}>
                  We&apos;ve built our reputation one solved problem at a time. Here&apos;s why businesses keep coming back.
                </p>
              </motion.div>

              <div className="whyus-reasons-grid">
                {reasons.map((r, i) => (
                  <motion.div
                    key={r.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07 }}
                    style={{
                      display: "flex", gap: "14px", padding: "20px",
                      borderRadius: "12px", background: "#F7F8FF",
                      border: "1px solid #DDE0FF",
                    }}
                  >
                    <div style={{
                      flexShrink: 0, width: "40px", height: "40px", borderRadius: "10px",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "#E8EAFF", marginTop: "2px",
                    }}>
                      <r.icon size={18} style={{ color: "#1B2085" }} />
                    </div>
                    <div>
                      <h4 style={{
                        fontFamily: "Syne, sans-serif", color: "#0E1240",
                        fontSize: "13px", fontWeight: 600, marginBottom: "6px",
                      }}>
                        {r.title}
                      </h4>
                      <p style={{
                        color: "#6B7280", fontFamily: "DM Sans, sans-serif",
                        fontSize: "12px", lineHeight: 1.65,
                      }}>
                        {r.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Image with stats, hidden on mobile/tablet */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="whyus-image-col"
            >
              <div style={{ position: "relative", height: "540px", borderRadius: "16px", overflow: "hidden" }}>
                <Image
                  src="/7.jpg"
                  alt="Our workshop"
                  fill
                  sizes="50vw"
                  style={{ objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(14,18,64,0.7) 0%, transparent 55%)",
                }} />
              </div>

              <div style={{
                position: "absolute", bottom: "24px", left: "24px", right: "24px",
                borderRadius: "12px", padding: "20px 24px", display: "flex",
                background: "rgba(14,18,64,0.88)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{
                    flex: 1, textAlign: "center",
                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                    padding: "0 16px",
                  }}>
                    <div style={{ color: "white", fontWeight: 700, fontSize: "22px", fontFamily: "Syne, sans-serif" }}>
                      {s.val}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "12px", marginTop: "4px", fontFamily: "DM Sans, sans-serif" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}