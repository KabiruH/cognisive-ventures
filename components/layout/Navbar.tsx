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
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled || mobileOpen ? "#1B2085" : "transparent",
          boxShadow: scrolled
            ? "0 2px 24px rgba(27,32,133,0.18)"
            : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "0 20px",
            height: "72px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => handleNavClick("#home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: 40,
                height: 40,
                borderRadius: 10,
                overflow: "hidden",
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/logo.png"
                alt="Cognisive Ventures"
                fill
                sizes="40px"
                style={{ objectFit: "contain", padding: "4px" }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1,
              }}
            >
              <span
                style={{
                  color: "white",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "16px",
                  letterSpacing: "0.12em",
                }}
              >
                COGNISIVE
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontFamily: "DM Sans, sans-serif",
                  marginTop: 3,
                }}
              >
                VENTURES LIMITED
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex"
            style={{
              alignItems: "center",
              gap: "4px",
            }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  padding: "10px 16px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.85)",
                  background: "transparent",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color =
                    "rgba(255,255,255,0.85)";
                }}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("#contact")}
              style={{
                marginLeft: 12,
                padding: "11px 22px",
                fontSize: "14px",
                fontWeight: 700,
                background: "white",
                color: "#1B2085",
                border: "none",
                borderRadius: 8,
                cursor: "pointer",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Get Support
            </button>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 72,
              left: 0,
              right: 0,
              zIndex: 40,
              background: "#1B2085",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 8px 32px rgba(14,18,64,0.3)",
            }}
          >
            <div style={{ padding: "8px 16px 20px" }}>
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "14px 16px",
                    color: "rgba(255,255,255,0.8)",
                    background: "none",
                    border: "none",
                    borderBottom:
                      "1px solid rgba(255,255,255,0.06)",
                    cursor: "pointer",
                    fontSize: "15px",
                    fontFamily: "DM Sans, sans-serif",
                  }}
                >
                  {link.label}
                </button>
              ))}

              <button
                onClick={() => handleNavClick("#contact")}
                style={{
                  width: "100%",
                  marginTop: 12,
                  padding: "14px",
                  fontSize: "15px",
                  fontWeight: 700,
                  background: "white",
                  color: "#1B2085",
                  border: "none",
                  borderRadius: 8,
                  cursor: "pointer",
                  fontFamily: "DM Sans, sans-serif",
                }}
              >
                Get Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}