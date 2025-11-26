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
        {children}
      </body>
    </html>
  );
}


