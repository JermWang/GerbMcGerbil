import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Gerb McGerbil | $GERB",
  description: "The official memecoin of Gerb McGerbil. Welcome to the cage.",
  icons: {
    icon: "/king-gerb-PFP-camo.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-black text-white min-h-screen antialiased`}
      >
        <header className="gerb-nav">
          <div className="gerb-nav-inner">
            <div className="gerb-nav-brand">
              <img
                src="/lil-gerb-walk-w-CROWN.gif"
                alt="Gerb"
                style={{ width: '32px', height: '32px', imageRendering: 'pixelated' }}
              />
              <span>$GERB</span>
              <span className="gerb-nav-pill">Gerb McGerbil</span>
            </div>
            <nav className="gerb-nav-links">
              <a href="#" className="gerb-nav-link">
                🏠 Cage
              </a>
              <a href="#" className="gerb-nav-link">
                💎 Dex
              </a>
              <a href="#" className="gerb-nav-link">
                🎉 Socials
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}


