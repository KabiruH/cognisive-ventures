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

export default function Hero() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src="/1.jpg" alt="Cognisive workspace" fill priority className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(14,18,64,0.97) 0%, rgba(27,32,133,0.90) 55%, rgba(14,18,64,0.75) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", paddingTop: "112px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "0 48px" }}>
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* Left — Copy */}
            <div className="flex flex-col">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium mb-6 w-fit"
                style={{
                  background: "rgba(79,91,213,0.2)",
                  border: "1px solid rgba(79,91,213,0.4)",
                  color: "#a5b4fc",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Nairobi&apos;s Trusted IT Partner
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white leading-[1.1] mb-6"
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
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
                className="text-white/60 text-base leading-relaxed mb-10 max-w-lg"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                From Windows installations to full hardware upgrades and networking — Cognisive Ventures handles every tech challenge so you can focus on what matters.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-14"
              >
                <button
                  onClick={() => handleClick("#contact")}
                  className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg transition-all hover:opacity-90 cursor-pointer"
                  style={{ background: "white", color: "#1B2085", fontFamily: "DM Sans, sans-serif" }}
                >
                  Get Support Now <ArrowRight size={16} />
                </button>
                <button
                  onClick={() => handleClick("#services")}
                  className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg transition-all cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "white",
                    border: "1px solid rgba(255,255,255,0.2)",
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
                className="flex flex-wrap gap-10 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
              >
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-white font-bold text-2xl" style={{ fontFamily: "Syne, sans-serif" }}>
                      {s.value}
                    </div>
                    <div className="text-white/40 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
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
              className="hidden lg:flex flex-col gap-4"
            >
              {/* Main image card */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.12)", height: 340 }}
              >
                <Image src="/2.jpg" alt="Hardware repair" fill className="object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(14,18,64,0.75) 0%, transparent 55%)" }}
                />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-white font-semibold text-sm" style={{ fontFamily: "Syne, sans-serif" }}>
                    Expert Hardware Repair
                  </p>
                  <p className="text-white/60 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    RAM, SSD, motherboard & more
                  </p>
                </div>
              </div>

              {/* Service badges row */}
              <div className="grid grid-cols-3 gap-3">
                {badges.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl text-center"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: "rgba(79,91,213,0.25)" }}
                    >
                      <Icon size={16} style={{ color: "#a5b4fc" }} />
                    </div>
                    <span className="text-white/70 text-xs leading-tight" style={{ fontFamily: "DM Sans, sans-serif" }}>
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
        className="absolute bottom-0 left-0 right-0 h-28 z-10"
        style={{ background: "linear-gradient(to bottom, transparent, white)" }}
      />
    </section>
  );
}