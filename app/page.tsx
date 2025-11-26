"use client";

/**
 * Asset mapping (all from /public):
 * - Background: /animated-site.gif
 * - Logo (left): /Gerb-McGerbil-TEXT-LOGO-w-GLOW--.png
 * - Social buttons (right):
 *   - X: /X-logo.png
 *   - Telegram: /telegram.png
 *   - Discord: /discord-logo.png
 */

import { useState } from "react";

const CONTRACT_PLACEHOLDER = "0xYOUR_GERB_CONTRACT";

const gerbLinks = [
  {
    label: "X (Twitter)",
    href: "https://twitter.com/placeholder", // TODO: replace
    imageSrc: "/X-logo.png",
  },
  {
    label: "Telegram",
    href: "https://t.me/placeholder", // TODO: replace
    imageSrc: "/telegram.png",
  },
  {
    label: "Discord",
    href: "https://discord.gg/placeholder", // TODO: replace
    imageSrc: "/discord-logo.png",
  },
];

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_PLACEHOLDER);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <main className="gerb-page">
      <div className="gerb-content">
        {/* Left: Logo */}
        <div className="gerb-logo">
          <img
            src="/Gerb-McGerbil-TEXT-LOGO-w-GLOW--.png"
            alt="$GERB - Gerb McGerbil"
          />
        </div>

        {/* Right: Social buttons */}
        <div className="gerb-buttons">
          {gerbLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={link.imageSrc} alt={link.label} />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom-center glassmorphic contract button */}
      <button
        type="button"
        className="gerb-contract-button"
        onClick={handleCopy}
      >
        <span className="gerb-contract-label">Contract (coming soon)</span>
        <span className="gerb-contract-value">
          {copied ? "Copied!" : CONTRACT_PLACEHOLDER}
        </span>
      </button>
    </main>
  );
}
