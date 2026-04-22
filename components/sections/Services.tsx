// components/sections/Services.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Monitor, HardDrive, ShieldCheck, Wifi, Package, Wrench } from "lucide-react";

const services = [
  { icon: Monitor, title: "Windows Installation", description: "Clean OS installs, driver setup, and system optimization for all Windows versions.", image: "/1.jpg" },
  { icon: ShieldCheck, title: "Antivirus & Security", description: "Full virus removal, antivirus deployment, and ongoing protection for your systems.", image: "/7.jpg" },
  { icon: Wrench, title: "Hardware Repair", description: "Diagnosis and repair of all hardware faults — screens, motherboards, ports, and more.", image: "/3.jpg" },
  { icon: HardDrive, title: "HDD to SSD Upgrades", description: "Speed up your machines with SSD migration and RAM upgrades. Fast, safe, no data loss.", image: "/2.jpg" },
  { icon: Wifi, title: "Networking Solutions", description: "LAN setup, Wi-Fi troubleshooting, network configuration and cabling for offices.", image: "/7.jpg" },
  { icon: Package, title: "Computer Supply", description: "We supply desktops, laptops, accessories and peripherals with full installation support.", image: "/1.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
};

export default function Services() {
  return (
    <section id="services" style={{ background: "white" }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "96px 48px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-4"
            style={{ background: "#E8EAFF", color: "#1B2085", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.1em" }}>
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
            Complete IT Solutions
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
            Every tech problem your business faces — we&apos;ve got it covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} custom={i} initial="hidden" whileInView="visible"
              viewport={{ once: true }} variants={fadeUp}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: "1px solid #DDE0FF", background: "white", boxShadow: "0 2px 12px rgba(27,32,133,0.06)" }}>
              <div className="relative h-44 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(14,18,64,0.3), rgba(14,18,64,0.6))" }} />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>
                  <service.icon size={18} color="white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}