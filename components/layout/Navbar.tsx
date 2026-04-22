// components/layout/Navbar.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const container: React.CSSProperties = {
  maxWidth: "1280px", width: "100%",
  margin: "0 auto",
  padding: "0 48px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          background: scrolled ? "#1B2085" : "transparent",
          boxShadow: scrolled ? "0 2px 24px rgba(27,32,133,0.18)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div style={container}>
          {/* Logo */}
          <Link href="#home" onClick={() => handleNavClick("#home")}
            style={{ display: "flex", alignItems: "center", gap: "14px", textDecoration: "none" }}>
            <div style={{ position: "relative", width: 44, height: 44, borderRadius: 10, overflow: "hidden",
              background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", flexShrink: 0 }}>
              <Image src="/logo.png" alt="Cognisive Ventures" fill sizes="44px" className="object-contain p-1" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ color: "white", fontFamily: "Syne, sans-serif", fontWeight: 800,
                fontSize: "18px", letterSpacing: "0.12em" }}>
                COGNISIVE
              </span>
              <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "10px",
                letterSpacing: "0.22em", fontFamily: "DM Sans, sans-serif", marginTop: 3 }}>
                VENTURES LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: "4px" }}
            className="hidden md:flex">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => handleNavClick(link.href)}
                style={{ padding: "10px 18px", fontSize: "14px", fontWeight: 500,
                  color: "rgba(255,255,255,0.85)", background: "transparent", border: "none",
                  borderRadius: 8, cursor: "pointer", fontFamily: "DM Sans, sans-serif",
                  transition: "background 0.2s, color 0.2s" }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.color = "white"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "transparent"; (e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)"; }}>
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNavClick("#contact")}
              style={{ marginLeft: 16, padding: "11px 24px", fontSize: "14px", fontWeight: 700,
                background: "white", color: "#1B2085", border: "none", borderRadius: 8,
                cursor: "pointer", fontFamily: "DM Sans, sans-serif", letterSpacing: "0.02em" }}>
              Get Support
            </button>
          </nav>

          {/* Mobile toggle */}
          <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 8 }}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.2 }}
            style={{ position: "fixed", top: 80, left: 0, right: 0, zIndex: 40,
              background: "#1B2085", borderTop: "1px solid rgba(255,255,255,0.1)" }}
            className="md:hidden">
            <div style={{ padding: "12px 24px 20px" }}>
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => handleNavClick(link.href)}
                  style={{ display: "block", width: "100%", textAlign: "left", padding: "14px 16px",
                    color: "rgba(255,255,255,0.8)", background: "none", border: "none",
                    borderRadius: 8, cursor: "pointer", fontSize: "15px",
                    fontFamily: "DM Sans, sans-serif" }}>
                  {link.label}
                </button>
              ))}
              <button onClick={() => handleNavClick("#contact")}
                style={{ width: "100%", marginTop: 8, padding: "14px", fontSize: "15px",
                  fontWeight: 700, background: "white", color: "#1B2085", border: "none",
                  borderRadius: 8, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
                Get Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}