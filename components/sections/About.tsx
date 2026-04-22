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
    <section id="about" style={{ background: "#F7F8FF" }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "96px 48px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative h-105 rounded-2xl overflow-hidden">
              <Image src="/3.jpg" alt="Our technician at work" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-6 w-48 h-40 rounded-xl overflow-hidden hidden md:block"
              style={{ border: "4px solid white", boxShadow: "0 8px 32px rgba(27,32,133,0.15)" }}>
              <Image src="/2.jpg" alt="Hardware expertise" fill className="object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-2xl flex-col items-center justify-center hidden md:flex"
              style={{ background: "#1B2085", boxShadow: "0 8px 32px rgba(27,32,133,0.3)" }}>
              <span className="text-white text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>20+</span>
              <span className="text-white/60 text-xs text-center leading-tight mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>Yrs Exp.</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: "#E8EAFF", color: "#1B2085", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.1em" }}>
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
              Tech Problems Solved.<br />
              <span style={{ color: "#1B2085" }}>Every Single Time.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
              Cognisive Ventures was founded by George, a veteran IT professional with over two decades of experience. His mission was simple — give businesses a reliable IT partner they could call on without the complexity or the waiting.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
              From our base on Accra Road in Nairobi&apos;s Superior Arcade, we&apos;ve grown a loyal network of businesses that trust us with everything from routine maintenance to complex infrastructure setups.
            </p>
            <ul className="flex flex-col gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" style={{ color: "#1B2085" }} />
                  <span className="text-sm" style={{ color: "#374151", fontFamily: "DM Sans, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 text-sm font-semibold rounded-lg cursor-pointer transition-all hover:opacity-90"
              style={{ background: "#1B2085", color: "white", fontFamily: "DM Sans, sans-serif" }}>
              Work With Us
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}