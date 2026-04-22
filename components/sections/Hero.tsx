// components/sections/Hero.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Cpu, Wifi } from "lucide-react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Businesses Served" },
  { value: "24h", label: "Response Time" },
];

const badges = [
  { icon: Shield, label: "Antivirus & Security" },
  { icon: Cpu, label: "Hardware Upgrades" },
  { icon: Wifi, label: "Network Solutions" },
];

const container: React.CSSProperties = {
  maxWidth: "1280px",
  width: "100%",
  margin: "0 auto",
  padding: "0 64px",
};

export default function Hero() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src="/1.jpg" alt="Cognisive workspace" fill priority sizes="100vw" className="object-cover" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, rgba(14,18,64,0.97) 0%, rgba(27,32,133,0.92) 50%, rgba(14,18,64,0.78) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.04,
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "120px", paddingBottom: "80px" }}>
        <div style={container}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
          >
            {/* Left — Copy */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 16px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: 500,
                  marginBottom: "24px",
                  width: "fit-content",
                  background: "rgba(79,91,213,0.2)",
                  border: "1px solid rgba(79,91,213,0.4)",
                  color: "#a5b4fc",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#60a5fa",
                    animation: "pulse 2s infinite",
                  }}
                />
                Nairobi&apos;s Trusted IT Partner
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  color: "white",
                  lineHeight: 1.08,
                  marginBottom: "24px",
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                  fontWeight: 700,
                }}
              >
                Your Business,{" "}
                <span style={{ color: "#a5b4fc" }}>Zero Tech</span>
                <br />
                Worries.
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "17px",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                From Windows installations to full hardware upgrades and networking
                — Cognisive Ventures handles every tech challenge so you can focus
                on what matters most for your business.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "48px" }}
              >
                <button
                  onClick={() => handleClick("#contact")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "10px",
                    background: "white",
                    color: "#1B2085",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "DM Sans, sans-serif",
                    transition: "opacity 0.2s",
                  }}
                >
                  Get Support Now <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => handleClick("#services")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 32px",
                    fontSize: "14px",
                    fontWeight: 600,
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  Our Services
                </button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  display: "flex",
                  gap: "48px",
                  paddingTop: "24px",
                  borderTop: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div style={{ color: "white", fontWeight: 700, fontSize: "28px", fontFamily: "Syne, sans-serif" }}>
                      {s.value}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginTop: "2px", fontFamily: "DM Sans, sans-serif" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Main image card */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "380px",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <Image src="/2.jpg" alt="Hardware repair" fill sizes="50vw" className="object-cover" />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(14,18,64,0.8) 0%, transparent 55%)",
                  }}
                />
                <div style={{ position: "absolute", bottom: "20px", left: "20px", right: "20px" }}>
                  <p style={{ color: "white", fontWeight: 600, fontSize: "15px", fontFamily: "Syne, sans-serif" }}>
                    Expert Hardware Repair
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", marginTop: "4px", fontFamily: "DM Sans, sans-serif" }}>
                    RAM, SSD, motherboard & more
                  </p>
                </div>
              </div>

              {/* Service badges row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px" }}>
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      padding: "20px 12px",
                      borderRadius: "12px",
                      textAlign: "center",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(79,91,213,0.25)",
                      }}
                    >
                      <Icon size={16} style={{ color: "#a5b4fc" }} />
                    </div>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", lineHeight: 1.4, fontFamily: "DM Sans, sans-serif" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "112px",
          zIndex: 10,
          background: "linear-gradient(to bottom, transparent, white)",
        }}
      />
    </section>
  );
}