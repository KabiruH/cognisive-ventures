// components/sections/About.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Over 20 years of hands-on IT experience",
  "On-site and remote support available",
  "Serving SMEs across Nairobi and beyond",
  "Fast turnaround — most issues resolved same day",
  "Genuine parts and licensed software only",
];

export default function About() {
  return (
    <>
      <style>{`
        .about-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .about-image-col {
          position: relative;
          padding-bottom: 40px;
        }
        .about-floating-img {
          position: absolute;
          bottom: 0px;
          right: -24px;
          width: 200px;
          height: 160px;
          border-radius: 12px;
          overflow: hidden;
          border: 4px solid white;
          box-shadow: 0 8px 32px rgba(27,32,133,0.15);
        }
        .about-badge {
          position: absolute;
          top: -16px;
          left: -16px;
          width: 100px;
          height: 100px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #1B2085;
          box-shadow: 0 8px 32px rgba(27,32,133,0.3);
        }
        @media (max-width: 767px) {
          .about-container {
            padding: 60px 20px;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-image-col {
            padding-bottom: 0;
          }
          .about-floating-img {
            display: none;
          }
          .about-badge {
            width: 80px;
            height: 80px;
            top: -12px;
            left: -8px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .about-container {
            padding: 80px 40px;
          }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-image-col {
            padding-bottom: 20px;
          }
        }
      `}</style>

      <section id="about" style={{ background: "#F7F8FF" }}>
        <div className="about-container">
          <div className="about-grid">

            {/* Left — Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="about-image-col"
            >
              <div style={{ position: "relative", height: "480px", borderRadius: "16px", overflow: "hidden" }}>
                <Image src="/3.jpg" alt="Our technician at work" fill sizes="(max-width: 767px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>

              <div className="about-floating-img">
                <Image src="/2.jpg" alt="Hardware expertise" fill sizes="200px" style={{ objectFit: "cover" }} />
              </div>

              <div className="about-badge">
                <span style={{ color: "white", fontSize: "26px", fontWeight: 700, fontFamily: "Syne, sans-serif" }}>20+</span>
                <span style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", fontFamily: "DM Sans, sans-serif", marginTop: "2px" }}>Yrs Exp.</span>
              </div>
            </motion.div>

            {/* Right — Copy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <span style={{
                display: "inline-block", padding: "6px 16px", borderRadius: "999px",
                fontSize: "11px", fontWeight: 500, marginBottom: "20px", width: "fit-content",
                background: "#E8EAFF", color: "#1B2085",
                fontFamily: "DM Sans, sans-serif", letterSpacing: "0.12em",
              }}>
                ABOUT US
              </span>

              <h2 style={{
                fontFamily: "Syne, sans-serif", color: "#0E1240",
                fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 700,
                lineHeight: 1.15, marginBottom: "28px",
              }}>
                Tech Problems Solved.<br />
                <span style={{ color: "#1B2085" }}>Every Single Time.</span>
              </h2>

              <p style={{
                color: "#6B7280", fontFamily: "DM Sans, sans-serif",
                fontSize: "15px", lineHeight: 1.75, marginBottom: "20px",
              }}>
                Cognisive Ventures was founded by George, a veteran IT professional with over two decades of experience. His mission was simple — give businesses a reliable IT partner they could call on without the complexity or the waiting.
              </p>

              <p style={{
                color: "#6B7280", fontFamily: "DM Sans, sans-serif",
                fontSize: "15px", lineHeight: 1.75, marginBottom: "36px",
              }}>
                From our base on Accra Road in Nairobi&apos;s Superior Arcade, we&apos;ve grown a loyal network of businesses that trust us with everything from routine maintenance to complex infrastructure setups.
              </p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px" }}>
                {highlights.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <CheckCircle2 size={18} style={{ color: "#1B2085", flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ color: "#374151", fontFamily: "DM Sans, sans-serif", fontSize: "14px", lineHeight: 1.6 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "14px 32px", fontSize: "14px", fontWeight: 600,
                  borderRadius: "10px", background: "#1B2085", color: "white",
                  border: "none", cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                  width: "fit-content",
                }}
              >
                Work With Us
              </button>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}