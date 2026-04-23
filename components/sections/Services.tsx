// components/sections/Services.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, HardDrive, ShieldCheck, Wifi, Package, Wrench, Camera, Zap, BellRing, KeyRound } from "lucide-react";

const services = [
  { icon: Monitor, title: "Windows Installation", description: "Clean OS installs, driver setup, and system optimization for all Windows versions.", image: "/1.jpg" },
  { icon: ShieldCheck, title: "Antivirus & Security", description: "Full virus removal, antivirus deployment, and ongoing protection for your systems.", image: "/7.jpg" },
  { icon: Wrench, title: "Hardware Repair", description: "Diagnosis and repair of all hardware faults — screens, motherboards, ports, and more.", image: "/3.jpg" },
  { icon: HardDrive, title: "HDD to SSD Upgrades", description: "Speed up your machines with SSD migration and RAM upgrades. Fast, safe, no data loss.", image: "/2.jpg" },
  { icon: Wifi, title: "Networking Solutions", description: "LAN setup, Wi-Fi troubleshooting, network configuration and cabling for offices.", image: "/7.jpg" },
  { icon: Package, title: "Computer Supply", description: "We supply desktops, laptops, accessories and peripherals with full installation support.", image: "/1.jpg" },
  { icon: Camera, title: "CCTV Installation", description: "Professional CCTV setup and configuration for homes and businesses — indoor and outdoor coverage.", image: "/3.jpg" },
  { icon: Zap, title: "Razor & Live Fence", description: "Supply and installation of razor wire and electric live fence systems for perimeter security.", image: "/2.jpg" },
  { icon: BellRing, title: "Alarm Systems", description: "Installation and maintenance of intruder alarm systems tailored to your premises.", image: "/7.jpg" },
  { icon: KeyRound, title: "Access Control", description: "Biometric, card, and PIN-based access control systems for offices and restricted areas.", image: "/1.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function Services() {
  return (
    <>
      <style>{`
        .services-container {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 96px 64px;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 767px) {
          .services-container {
            padding: 60px 20px;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-container {
            padding: 80px 40px;
          }
        }
      `}</style>

      <section id="services" style={{ background: "white" }}>
        <div className="services-container">

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
              WHAT WE DO
            </span>
            <h2 style={{
              fontFamily: "Syne, sans-serif", color: "#0E1240",
              fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "16px",
            }}>
              Complete IT Solutions
            </h2>
            <p style={{
              color: "#6B7280", fontFamily: "DM Sans, sans-serif", fontSize: "17px",
              maxWidth: "480px", margin: "0 auto", lineHeight: 1.6,
            }}>
              Every tech problem your business faces — we&apos;ve got it covered.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="services-grid">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(27,32,133,0.13)" }}
                style={{
                  borderRadius: "16px", overflow: "hidden",
                  border: "1px solid #DDE0FF", background: "white",
                  boxShadow: "0 2px 16px rgba(27,32,133,0.07)",
                }}
              >
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, rgba(14,18,64,0.25), rgba(14,18,64,0.65))",
                  }} />
                  <div style={{
                    position: "absolute", top: "16px", left: "16px",
                    width: "40px", height: "40px", borderRadius: "10px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                  }}>
                    <service.icon size={18} color="white" />
                  </div>
                </div>
                <div style={{ padding: "24px 24px 28px" }}>
                  <h3 style={{
                    fontFamily: "Syne, sans-serif", color: "#0E1240",
                    fontSize: "16px", fontWeight: 700, marginBottom: "10px",
                  }}>
                    {service.title}
                  </h3>
                  <p style={{
                    color: "#6B7280", fontFamily: "DM Sans, sans-serif",
                    fontSize: "14px", lineHeight: 1.7,
                  }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}