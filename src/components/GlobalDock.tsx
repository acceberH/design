"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

const ITEMS = [
  {
    tooltip: "Home", href: "/#hero-section", key: "home",
    tintRgb: "59,130,246", iconColor: "#2563eb",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5.5v-7h-5v7H4a1 1 0 01-1-1v-10.5z" />
      </svg>
    ),
  },
  {
    tooltip: "Work", href: "/#work", key: "work",
    tintRgb: "139,92,246", iconColor: "#7c3aed",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" />
      </svg>
    ),
  },
  {
    tooltip: "About", href: "/about", key: "about",
    tintRgb: "16,185,129", iconColor: "#059669",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0116 0" />
      </svg>
    ),
  },
  { tooltip: "", href: "", key: "divider", tintRgb: "", iconColor: "", icon: null },
  {
    tooltip: "Email", href: "mailto:qiongran.huang@gmail.com", key: "email",
    tintRgb: "249,115,22", iconColor: "#ea580c",
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    tooltip: "LinkedIn", href: "https://www.linkedin.com/in/rebecca-huang-a60388249/", key: "linkedin",
    tintRgb: "14,165,233", iconColor: "#0284c7",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 105.24 6.9 1.96 1.96 0 005.25 3zM20.44 13.41c0-3.4-1.82-4.98-4.24-4.98-1.95 0-2.82 1.07-3.31 1.82V8.5H9.51V20h3.38v-5.68c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38v-6.59z" />
      </svg>
    ),
  },
  {
    tooltip: "GitHub", href: "https://github.com/acceberH", key: "github",
    tintRgb: "100,116,139", iconColor: "#475569",
    icon: (
      <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5A12 12 0 000 12.8c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.27.82-.58 0-.29-.01-1.07-.02-2.1-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.82.42-1.35.76-1.66-2.67-.32-5.48-1.37-5.48-6.08 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25A11.2 11.2 0 0112 6.4c.99 0 2 .14 2.94.41 2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.72-2.82 5.76-5.5 6.08.43.38.82 1.13.82 2.29 0 1.66-.02 3-.02 3.4 0 .31.21.7.83.58A12.3 12.3 0 0024 12.8 12 12 0 0012 .5z" />
      </svg>
    ),
  },
];

const PROJECTS = [
  { name: "OpenPromo", href: "/work/openpromo" },
  { name: "BioVision", href: "/work/biovision" },
  { name: "FileGPT", href: "/work/filegpt" },
  { name: "OfferPlz", href: "/work/offerplz" },
  { name: "BarBuddy", href: "/work/barbuddy" },
  { name: "Cycle NYC", href: "/work/cycle" },
];

function NavArrow({ href, tooltip, dir }: { href: string; tooltip: string; dir: "prev" | "next" }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative flex flex-col items-center" style={{ width: BASE }}>
      {hovered && (
        <span className="absolute whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium pointer-events-none"
          style={{ bottom: BASE + 12, left: "50%", transform: "translateX(-50%)", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(10px)", color: "#111", boxShadow: "0 2px 8px rgba(0,0,0,0.10)" }}>
          {tooltip}
        </span>
      )}
      <Link href={href}
        className="flex items-center justify-center rounded-[14px] cursor-pointer"
        style={{ width: BASE, height: BASE, background: "linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(120,120,120,0.06) 100%)", border: "1px solid rgba(255,255,255,0.72)", boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.08)", color: "#6b7280", transition: "transform 0.15s ease" }}
        onMouseEnter={e => { setHovered(true); (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
        onMouseLeave={e => { setHovered(false); (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
      >
        {dir === "prev" ? (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        ) : (
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        )}
      </Link>
    </div>
  );
}

const BASE = 52;
const MAX = 80;
const SPREAD = 120; // px radius of magnification effect

function getScale(itemCenterX: number, mouseX: number | null) {
  if (mouseX === null) return 1;
  const dist = Math.abs(itemCenterX - mouseX);
  if (dist > SPREAD) return 1;
  const t = 1 - dist / SPREAD;
  return 1 + (MAX / BASE - 1) * t * t;
}

export default function GlobalDock() {
  const pathname = usePathname();
  const dockRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [scales, setScales] = useState<number[]>(ITEMS.map(() => 1));

  const currentProjectIdx = PROJECTS.findIndex(p => pathname === p.href);
  const isOnProject = currentProjectIdx !== -1;
  const prevProject = isOnProject ? PROJECTS[(currentProjectIdx - 1 + PROJECTS.length) % PROJECTS.length] : null;
  const nextProject = isOnProject ? PROJECTS[(currentProjectIdx + 1) % PROJECTS.length] : null;

  const handleMouseMove = (e: React.MouseEvent) => {
    const mx = e.clientX;
    setMouseX(mx);
    const newScales = ITEMS.map((_, i) => {
      const el = itemRefs.current[i];
      if (!el) return 1;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      return getScale(centerX, mx);
    });
    setScales(newScales);
  };

  const handleMouseLeave = () => {
    setMouseX(null);
    setScales(ITEMS.map(() => 1));
  };

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      <div
        ref={dockRef}
        className="relative flex items-end gap-1.5 rounded-[22px] px-3 py-2.5"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(36px) saturate(2.0) brightness(1.08)",
          WebkitBackdropFilter: "blur(36px) saturate(2.0) brightness(1.08)",
          border: "1px solid rgba(255,255,255,0.70)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06), inset 0 1.5px 0 rgba(255,255,255,0.90), inset 0 -1px 0 rgba(0,0,0,0.03)",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] rounded-t-[22px]"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.95) 70%, transparent 95%)" }}
        />

        {isOnProject && prevProject && (
          <>
            <NavArrow href={prevProject.href} tooltip={prevProject.name} dir="prev" />
            <div className="mx-0.5 h-8 w-px self-center" style={{ background: "rgba(0,0,0,0.08)" }} />
          </>
        )}

        {ITEMS.map((item, i) => {
          if (item.key === "divider") {
            return <div key="divider" className="mx-0.5 h-8 w-px self-center" style={{ background: "rgba(0,0,0,0.08)" }} />;
          }

          const scale = scales[i] ?? 1;
          const size = BASE * scale;
          const translateY = -(size - BASE) * 0.5;
          const isActive = item.key === "home" ? pathname === "/" : item.key === "work" ? pathname.startsWith("/work") : item.key === "about" ? pathname === "/about" : false;
          const Tag = item.href.startsWith("mailto:") || item.href.startsWith("https:") ? "a" : Link;

          return (
            <div
              key={item.key}
              ref={el => { itemRefs.current[i] = el; }}
              className="relative flex flex-col items-center"
              style={{ width: BASE, alignItems: "center" }}
            >
              {/* Tooltip */}
              <span
                className="absolute whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium pointer-events-none transition-opacity duration-150"
                style={{
                  bottom: BASE + 12,
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "rgba(255,255,255,0.75)",
                  backdropFilter: "blur(16px) saturate(180%)",
                  WebkitBackdropFilter: "blur(16px) saturate(180%)",
                  color: "#111",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.90)",
                  opacity: scale > 1.2 ? 1 : 0,
                }}
              >
                {item.tooltip}
              </span>

              <Tag
                href={item.href}
                className="flex items-center justify-center rounded-[14px] cursor-pointer overflow-hidden"
                style={{
                  width: BASE,
                  height: BASE,
                  transform: `translateY(${translateY}px)`,
                  transition: mouseX === null ? "transform 0.3s ease" : "transform 0.1s ease",
                  background: `linear-gradient(160deg, rgba(255,255,255,0.60) 0%, rgba(${item.tintRgb},${isActive ? "0.18" : "0.08"}) 100%)`,
                  backdropFilter: "blur(8px) saturate(160%)",
                  WebkitBackdropFilter: "blur(8px) saturate(160%)",
                  border: "1px solid rgba(255,255,255,0.75)",
                  boxShadow: "inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04), 0 2px 10px rgba(0,0,0,0.08)",
                  color: item.iconColor,
                }}
              >
                <div style={{
                  width: 24 * scale,
                  height: 24 * scale,
                  transition: mouseX === null ? "width 0.3s ease, height 0.3s ease" : "width 0.1s ease, height 0.1s ease",
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
              </Tag>

              {isActive && (
                <span className="h-1 w-1 rounded-full mt-0.5" style={{ background: item.iconColor, opacity: 0.5 }} />
              )}
            </div>
          );
        })}

        {isOnProject && nextProject && (
          <>
            <div className="mx-0.5 h-8 w-px self-center" style={{ background: "rgba(0,0,0,0.08)" }} />
            <NavArrow href={nextProject.href} tooltip={nextProject.name} dir="next" />
          </>
        )}
      </div>
    </div>
  );
}
