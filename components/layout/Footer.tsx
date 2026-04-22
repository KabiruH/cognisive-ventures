// components/layout/Footer.tsx
"use client";

import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const services = ["Windows Installation", "Antivirus & Security", "Hardware Repair", "HDD to SSD Migration", "RAM Upgrades", "Networking Solutions", "Computer Supply", "On-site Support"];
const quickLinks = [{ label: "Home", href: "#home" }, { label: "Services", href: "#services" }, { label: "About Us", href: "#about" }, { label: "Why Choose Us", href: "#why-us" }, { label: "Contact", href: "#contact" }];

export default function Footer() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0E1240" }}>
      <div style={{ background: "#1B2085" }}>
        <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "40px 48px", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap" }}>
          <div>
            <p className="text-white/60 text-sm mb-1" style={{ fontFamily: "DM Sans, sans-serif" }}>Ready to resolve your tech issues?</p>
            <h3 className="text-white text-2xl font-bold" style={{ fontFamily: "Syne, sans-serif" }}>Let&apos;s get your business running smoothly.</h3>
          </div>
          <button onClick={() => handleClick("#contact")}
            className="shrink-0 px-7 py-3 text-sm font-semibold rounded-lg cursor-pointer transition-all hover:opacity-90"
            style={{ background: "white", color: "#1B2085", fontFamily: "DM Sans, sans-serif" }}>
            Contact Us Today
          </button>
        </div>
      </div>

      <div className="footer-grid" style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "64px 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "48px" }}>
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-white/10 border border-white/20">
              <Image src="/logo.png" alt="Cognisive Ventures" fill className="object-contain p-1" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-white font-bold text-base tracking-wide" style={{ fontFamily: "Syne, sans-serif" }}>COGNISIVE</span>
              <span className="text-white/40 text-[10px] tracking-[0.2em] uppercase">Ventures Limited</span>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed mb-6" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Your trusted IT partner in Nairobi. Over 20 years of experience keeping businesses running at their best.
          </p>
          <div className="flex gap-3">
            {["FB", "TW", "IN", "IG"].map((label) => (
              <a key={label} href="#" className="w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <button onClick={() => handleClick(link.href)}
                  className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                  style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Our Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s} className="text-white/50 text-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>{s}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-5" style={{ fontFamily: "Syne, sans-serif" }}>Find Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5" style={{ color: "#4F5BD5" }} />
              <p className="text-white/50 text-sm leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Superior Arcade Building, 2nd Floor, Shop 2-02<br />Accra Road, Nairobi City
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={16} className="shrink-0" style={{ color: "#4F5BD5" }} />
              <a href="tel:+254735606059" className="text-white/50 hover:text-white text-sm transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>0735 606 059</a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={16} className="shrink-0" style={{ color: "#4F5BD5" }} />
              <a href="mailto:hello@cognisive.co.ke" className="text-white/50 hover:text-white text-sm transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>hello@cognisive.co.ke</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div style={{ maxWidth: "1280px", width: "100%", margin: "0 auto", padding: "20px 48px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
          <p className="text-white/30 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>© {new Date().getFullYear()} Cognisive Ventures Limited. All rights reserved.</p>
          <p className="text-white/20 text-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Website by <a href="https://ubiru.systems" className="hover:text-white/50 transition-colors">Ubiru Systems</a>
          </p>
        </div>
      </div>
    </footer>
  );
}