"use client";

import Link from "next/link";

export default function NavPill() {
  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "0 48px", height: 60,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(0,0,0,0.07)",
    }}>
      <Link href="/" style={{ fontFamily: "var(--font-geist), sans-serif", fontSize: 14, fontWeight: 500, color: "#111", textDecoration: "none" }}>
        Rebecca Huang
      </Link>
      <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <Link href="/#work" style={{ fontSize: 13, fontWeight: 500, color: "#999", textDecoration: "none", transition: "color .18s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#111"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#999"; }}>
          Work
        </Link>
        <Link href="/about" style={{ fontSize: 13, fontWeight: 500, color: "#999", textDecoration: "none", transition: "color .18s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#111"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#999"; }}>
          About
        </Link>
        <a href="mailto:qiongran.huang@gmail.com" style={{ fontSize: 13, fontWeight: 500, color: "#999", textDecoration: "none", transition: "color .18s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#111"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#999"; }}>
          Contact
        </a>
      </nav>
    </header>
  );
}
