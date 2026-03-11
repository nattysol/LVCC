import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LV Craft Chocolate | B2B Partner Portal",
  description: "Precision B2B chocolate manufacturing platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        {/* The Animated Grid Background */}
        <div className="industrial-grid pointer-events-none fixed inset-0 z-0" />
        <div className="scan-line pointer-events-none z-10 opacity-50" />
        
        <main className="relative z-20 mx-auto max-w-7xl px-8 py-16">
          {children}
        </main>
      </body>
    </html>
  )
}
