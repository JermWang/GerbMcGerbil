import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

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
        className={`${spaceGrotesk.variable} bg-black text-white min-h-screen antialiased`}
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        <header className="gerb-nav">
          <div className="gerb-nav-inner">
            <div className="gerb-nav-brand">
              <img
                src="/lil-gerb-walk-w-CROWN.gif"
                alt="Gerb"
                style={{ width: '52px', height: '52px', imageRendering: 'pixelated' }}
              />
              <span>$GERB</span>
              <span className="gerb-nav-pill">Gerb McGerbil</span>
            </div>
            <nav className="gerb-nav-links">
              <a href="https://twitter.com/placeholder" target="_blank" rel="noreferrer" className="gerb-nav-link">
                <img src="/X-logo.png" alt="X" className="gerb-nav-social-icon" />
              </a>
              <a href="https://t.me/placeholder" target="_blank" rel="noreferrer" className="gerb-nav-link">
                <img src="/telegram.png" alt="Telegram" className="gerb-nav-social-icon" />
              </a>
              <a href="https://discord.gg/placeholder" target="_blank" rel="noreferrer" className="gerb-nav-link">
                <img src="/discord-logo.png" alt="Discord" className="gerb-nav-social-icon" />
              </a>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}


