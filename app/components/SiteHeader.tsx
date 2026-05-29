"use client";

import Link from "next/link";
import { useState } from "react";
import { companyName, logoPath, whatsappUrl } from "../content";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Services", "/services"],
  ["Experts", "/#experts"],
  ["Insight", "/#insight"],
  ["Contact", "/#contact"],
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isOpen ? "menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="byConsultax Home">
        <img src={logoPath} alt={companyName} />
      </Link>
      <nav className="nav-links" aria-label="Navigasi utama">
        {navItems.map(([label, href]) => (
          <Link href={href} key={href}>
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <a className="talk-link" href={whatsappUrl} target="_blank" rel="noreferrer">
          Konsultasi Gratis
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav
        className={`mobile-nav ${isOpen ? "is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Navigasi mobile"
      >
        {navItems.map(([label, href]) => (
          <Link href={href} key={href} onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <a href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Konsultasi Gratis
        </a>
      </nav>
    </header>
  );
}
