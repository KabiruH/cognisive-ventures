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

export default function WhyUs() {
  return (
    <section id="why-us" style={{ background: "white" }}>
      <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "96px 48px" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium mb-5"
                style={{ background: "#E8EAFF", color: "#1B2085", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.1em" }}>
                WHY CHOOSE US
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-5" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
                The IT Partner<br /><span style={{ color: "#1B2085" }}>Businesses Trust.</span>
              </h2>
              <p className="text-base leading-relaxed mb-10" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
                We&apos;ve built our reputation one solved problem at a time. Here&apos;s why businesses keep coming back.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: "#F7F8FF", border: "1px solid #DDE0FF" }}>
                  <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center mt-0.5"
                    style={{ background: "#E8EAFF" }}>
                    <r.icon size={18} style={{ color: "#1B2085" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ fontFamily: "Syne, sans-serif", color: "#0E1240" }}>
                      {r.title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: "#6B7280", fontFamily: "DM Sans, sans-serif" }}>
                      {r.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative hidden lg:block">
            <div className="relative h-125 rounded-2xl overflow-hidden">
              <Image src="/7.jpg" alt="Our workshop" fill className="object-cover" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(14,18,64,0.6) 0%, transparent 60%)" }} />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-xl p-5 flex gap-6"
              style={{ background: "rgba(14,18,64,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {[{ val: "500+", label: "Happy Clients" }, { val: "20+", label: "Years Active" }, { val: "1 Day", label: "Avg. Turnaround" }].map((s) => (
                <div key={s.label} className="flex-1 text-center">
                  <div className="text-white font-bold text-xl" style={{ fontFamily: "Syne, sans-serif" }}>{s.val}</div>
                  <div className="text-white/50 text-xs mt-0.5" style={{ fontFamily: "DM Sans, sans-serif" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}