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
    <>
      <style>{`
        .footer-cta-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 40px 64px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .footer-grid {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 64px 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        .footer-bottom-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          padding: 20px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .footer-logo-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .footer-cta-inner {
            padding: 32px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
          .footer-cta-inner button {
            width: 100%;
          }
          .footer-grid {
            padding: 48px 20px;
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-bottom-inner {
            padding: 16px 20px;
            flex-direction: column;
            text-align: center;
            gap: 6px;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .footer-cta-inner {
            padding: 36px 40px;
          }
          .footer-grid {
            padding: 56px 40px;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          .footer-bottom-inner {
            padding: 20px 40px;
          }
        }
      `}</style>

      <footer style={{ background: "#0E1240" }}>

        {/* CTA Band */}
        <div style={{ background: "#1B2085" }}>
          <div className="footer-cta-inner">
            <div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", marginBottom: "6px", fontFamily: "DM Sans, sans-serif" }}>
                Ready to resolve your tech issues?
              </p>
              <h3 style={{ color: "white", fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 700, fontFamily: "Syne, sans-serif" }}>
                Let&apos;s get your business running smoothly.
              </h3>
            </div>
            <button
              onClick={() => handleClick("#contact")}
              style={{
                flexShrink: 0, padding: "13px 28px", fontSize: "14px", fontWeight: 600,
                borderRadius: "10px", background: "white", color: "#1B2085",
                border: "none", cursor: "pointer", fontFamily: "DM Sans, sans-serif",
              }}
            >
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Main grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <div className="footer-logo-row">
              <div style={{
                position: "relative", width: 40, height: 40, borderRadius: 10,
                overflow: "hidden", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0,
              }}>
                <Image src="/logo.png" alt="Cognisive Ventures" fill sizes="40px" style={{ objectFit: "contain", padding: "4px" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
                <span style={{ color: "white", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "15px", letterSpacing: "0.1em" }}>
                  COGNISIVE
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "9px", letterSpacing: "0.2em", fontFamily: "DM Sans, sans-serif", marginTop: 3 }}>
                  VENTURES LIMITED
                </span>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7, marginBottom: "20px", fontFamily: "DM Sans, sans-serif" }}>
              Your trusted IT partner in Nairobi. Over 20 years of experience keeping businesses running at their best.
            </p>
            <div className="footer-socials">
              {["FB", "TW", "IN", "IG"].map((label) => (
                <a key={label} href="#" style={{
                  width: 36, height: 36, borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: 700,
                  background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)",
                  fontFamily: "DM Sans, sans-serif", textDecoration: "none",
                }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Syne, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
              Quick Links
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleClick(link.href)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.5)", fontSize: "13px",
                    fontFamily: "DM Sans, sans-serif", padding: 0,
                  }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Syne, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
              Our Services
            </h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", listStyle: "none", padding: 0 }}>
              {services.map((s) => (
                <li key={s} style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "DM Sans, sans-serif" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h4 style={{ color: "white", fontFamily: "Syne, sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "20px" }}>
              Find Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <MapPin size={15} style={{ color: "#4F5BD5", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, fontFamily: "DM Sans, sans-serif" }}>
                  Superior Arcade Building, 2nd Floor, Shop 2-02<br />Accra Road, Nairobi City
                </p>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Phone size={15} style={{ color: "#4F5BD5", flexShrink: 0 }} />
                <a href="tel:+254735606059" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}>
                  0735 606 059
                </a>
              </div>
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Mail size={15} style={{ color: "#4F5BD5", flexShrink: 0 }} />
                <a href="mailto:hello@cognisive.co.ke" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", fontFamily: "DM Sans, sans-serif", textDecoration: "none" }}>
                  hello@cognisive.co.ke
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="footer-bottom-inner">
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "12px", fontFamily: "DM Sans, sans-serif" }}>
              © {new Date().getFullYear()} Cognisive Ventures Limited. All rights reserved.
            </p>
            <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", fontFamily: "DM Sans, sans-serif" }}>
              Website by{" "}
              <a href="https://ubiru.systems" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
                Ubiru Systems
              </a>
            </p>
          </div>
        </div>

      </footer>
    </>
  );
}