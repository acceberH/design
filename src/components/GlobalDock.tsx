"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const BASE = 44;
const PEAK = 64;
const NEIGHBOR = 52;
const SPRING = "cubic-bezier(0.25, 1, 0.5, 1)";
const DOCK_PADDING_V = 10;

const PROJECT_ORDER = [
  "/work/aispire",
  "/work/openpromo",
  "/work/biovision",
  "/work/filegpt",
  "/work/offerplz",
  "/work/cycle",
];

const NAV = [
  { idx: 0, key: "home",  label: "Home",     href: "/#hero-section",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/><path d="M9 21V12h6v9"/></svg> },
  { idx: 1, key: "work",  label: "Work",     href: "/#work",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg> },
  { idx: 2, key: "about", label: "About me", href: "/about",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
];

const LINKS = [
  { idx: 3, key: "email",    label: "Email",    href: "mailto:qiongran.huang@gmail.com",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  { idx: 4, key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/rebecca-huang-a60388249/",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg> },
  { idx: 5, key: "github",   label: "GitHub",   href: "https://github.com/acceberH",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg> },
];

function getSize(itemIdx: number, hoveredIdx: number | null) {
  if (hoveredIdx === null) return BASE;
  const dist = Math.abs(itemIdx - hoveredIdx);
  if (dist === 0) return PEAK;
  if (dist === 1) return NEIGHBOR;
  return BASE;
}

function DockIcon({
  label, href, isLink, isActive, showPip, size,
  onEnter, onLeave, children,
}: {
  label: string; href: string; isLink: boolean; isActive: boolean;
  showPip: boolean; size: number;
  onEnter: () => void; onLeave: () => void;
  children: React.ReactNode;
}) {
  const iconStyle: React.CSSProperties = {
    width: size, height: size,
    borderRadius: size >= PEAK ? 16 : size >= NEIGHBOR ? 14 : 12,
    display: "flex", alignItems: "center", justifyContent: "center",
    background: isActive ? "rgba(0,0,0,0.09)" : "rgba(0,0,0,0.05)",
    border: `0.5px solid ${isActive ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0.07)"}`,
    color: "rgba(0,0,0,0.6)",
    textDecoration: "none",
    flexShrink: 0,
    transition: `width 0.28s ${SPRING}, height 0.28s ${SPRING}, border-radius 0.28s ${SPRING}`,
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: "pointer", position: "relative", alignSelf: "flex-end" }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Tooltip */}
      <div style={{
        position: "absolute",
        bottom: size + 8,
        left: "50%", transform: "translateX(-50%)",
        background: "rgba(20,20,20,0.82)", backdropFilter: "blur(8px)",
        border: "0.5px solid rgba(255,255,255,0.1)",
        padding: "4px 10px", borderRadius: 8,
        fontSize: 11, color: "rgba(255,255,255,0.9)",
        whiteSpace: "nowrap", pointerEvents: "none",
        opacity: size > BASE ? 1 : 0,
        transition: `opacity 0.12s, bottom 0.2s ${SPRING}`,
        zIndex: 10,
      }}>
        {label}
      </div>

      {isLink ? (
        <a href={href} target="_blank" rel="noopener noreferrer" style={iconStyle}>{children}</a>
      ) : (
        <Link href={href} style={iconStyle}>{children}</Link>
      )}

      {showPip && (
        <div style={{ position: "absolute", bottom: -7, width: 3, height: 3, borderRadius: "50%", background: "rgba(0,0,0,0.5)", opacity: isActive ? 1 : 0, transition: "opacity 0.2s" }} />
      )}
    </div>
  );
}

export default function GlobalDock() {
  const pathname = usePathname();
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const activeKey = pathname === "/" ? "home" : pathname.startsWith("/work") ? "work" : pathname === "/about" ? "about" : null;

  const projectIdx = PROJECT_ORDER.indexOf(pathname);
  const prevProject = projectIdx > 0 ? PROJECT_ORDER[projectIdx - 1] : null;
  const nextProject = projectIdx !== -1 && projectIdx < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[projectIdx + 1] : null;
  const isProjectPage = projectIdx !== -1;

  return (
    <div style={{ position: "fixed", bottom: 24, left: 0, right: 0, display: "flex", justifyContent: "center", zIndex: 100, pointerEvents: "none" }}>
      <div
        style={{
          pointerEvents: "auto",
          display: "flex", alignItems: "flex-end", gap: 8,
          padding: `${DOCK_PADDING_V}px 14px`,
          height: BASE + DOCK_PADDING_V * 2,
          overflow: "visible",
          borderRadius: 20,
          background: "rgba(255,255,255,0.7)",
          border: "0.5px solid rgba(0,0,0,0.08)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}
        onMouseLeave={() => setHoveredIdx(null)}
      >
        {/* Prev/Next — only on project pages */}
        {isProjectPage && (
          <>
            <DockIcon
              label="Previous" href={prevProject ?? "#"}
              isLink={false} isActive={false} showPip={false}
              size={getSize(-2, hoveredIdx)}
              onEnter={() => setHoveredIdx(-2)}
              onLeave={() => setHoveredIdx(null)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: prevProject ? 1 : 0.3 }}><path d="M15 18l-6-6 6-6"/></svg>
            </DockIcon>
            <DockIcon
              label="Next" href={nextProject ?? "#"}
              isLink={false} isActive={false} showPip={false}
              size={getSize(-1, hoveredIdx)}
              onEnter={() => setHoveredIdx(-1)}
              onLeave={() => setHoveredIdx(null)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: nextProject ? 1 : 0.3 }}><path d="M9 18l6-6-6-6"/></svg>
            </DockIcon>
            <div style={{ width: 0.5, height: 32, background: "rgba(0,0,0,0.1)", alignSelf: "center", flexShrink: 0, margin: "0 2px" }} />
          </>
        )}

        {NAV.map(item => (
          <DockIcon
            key={item.key}
            label={item.label} href={item.href}
            isLink={false} isActive={activeKey === item.key} showPip
            size={getSize(item.idx, hoveredIdx)}
            onEnter={() => setHoveredIdx(item.idx)}
            onLeave={() => setHoveredIdx(null)}
          >
            {item.icon}
          </DockIcon>
        ))}

        <div style={{ width: 0.5, height: 32, background: "rgba(0,0,0,0.1)", alignSelf: "center", flexShrink: 0, margin: "0 2px" }} />

        {LINKS.map(item => (
          <DockIcon
            key={item.key}
            label={item.label} href={item.href}
            isLink isActive={false} showPip={false}
            size={getSize(item.idx, hoveredIdx)}
            onEnter={() => setHoveredIdx(item.idx)}
            onLeave={() => setHoveredIdx(null)}
          >
            {item.icon}
          </DockIcon>
        ))}
      </div>
    </div>
  );
}
