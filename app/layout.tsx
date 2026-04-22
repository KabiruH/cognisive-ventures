// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cognisive Ventures Limited | IT Solutions Nairobi",
  description:
    "Nairobi's trusted IT partner. Windows installation, hardware upgrades, networking, antivirus, and computer supply. Located on Accra Road, Superior Arcade.",
  keywords: "IT support Nairobi, computer repair Nairobi, hardware upgrade, Windows installation, networking Nairobi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}