"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function GlobalDock() {
  const pathname = usePathname();
  const homeActive = pathname === "/";
  const workActive = pathname.startsWith("/work");
  const aboutActive = pathname === "/about";

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
      {/* Dock container — liquid glass shell */}
      <div className="relative flex items-end gap-1.5 rounded-[22px] px-3 py-2.5"
        style={{
          background: "rgba(255,255,255,0.18)",
          backdropFilter: "blur(36px) saturate(2.0) brightness(1.08)",
          WebkitBackdropFilter: "blur(36px) saturate(2.0) brightness(1.08)",
          border: "1px solid rgba(255,255,255,0.70)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06), inset 0 1.5px 0 rgba(255,255,255,0.90), inset 0 -1px 0 rgba(0,0,0,0.03)",
        }}
      >
        {/* Top specular highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] rounded-t-[22px]"
          style={{ background: "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.95) 70%, transparent 95%)" }}
        />

        {/* Home */}
        <DockBtn
          tooltip="Home"
          href="/#hero-section"
          active={homeActive}
          tintRgb="59,130,246"
          iconColor="#2563eb"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5.5v-7h-5v7H4a1 1 0 01-1-1v-10.5z" />
          </svg>
        </DockBtn>

        {/* Work */}
        <DockBtn
          tooltip="Work"
          href="/#work"
          active={workActive}
          tintRgb="139,92,246"
          iconColor="#7c3aed"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" />
          </svg>
        </DockBtn>

        {/* About */}
        <DockBtn
          tooltip="About"
          href="/about"
          active={aboutActive}
          tintRgb="16,185,129"
          iconColor="#059669"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 20a8 8 0 0116 0" />
          </svg>
        </DockBtn>

        {/* Divider */}
        <div className="mx-0.5 h-8 w-px self-center" style={{ background: "rgba(0,0,0,0.08)" }} />

        {/* Email */}
        <DockBtn
          tooltip="Email"
          href="mailto:qiongran.huang@gmail.com"
          tintRgb="249,115,22"
          iconColor="#ea580c"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
          </svg>
        </DockBtn>

        {/* LinkedIn */}
        <DockBtn
          tooltip="LinkedIn"
          href="https://www.linkedin.com/in/rebecca-huang-a60388249/"
          tintRgb="14,165,233"
          iconColor="#0284c7"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 105.24 6.9 1.96 1.96 0 005.25 3zM20.44 13.41c0-3.4-1.82-4.98-4.24-4.98-1.95 0-2.82 1.07-3.31 1.82V8.5H9.51V20h3.38v-5.68c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38v-6.59z" />
          </svg>
        </DockBtn>

        {/* GitHub */}
        <DockBtn
          tooltip="GitHub"
          href="https://github.com/acceberH"
          tintRgb="100,116,139"
          iconColor="#475569"
        >
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5A12 12 0 000 12.8c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.27.82-.58 0-.29-.01-1.07-.02-2.1-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.82.42-1.35.76-1.66-2.67-.32-5.48-1.37-5.48-6.08 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25A11.2 11.2 0 0112 6.4c.99 0 2 .14 2.94.41 2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.72-2.82 5.76-5.5 6.08.43.38.82 1.13.82 2.29 0 1.66-.02 3-.02 3.4 0 .31.21.7.83.58A12.3 12.3 0 0024 12.8 12 12 0 0012 .5z" />
          </svg>
        </DockBtn>
      </div>
    </div>
  );
}

function DockBtn({
  tooltip,
  href,
  active,
  tintRgb,
  iconColor,
  children,
}: {
  tooltip: string;
  href: string;
  active?: boolean;
  tintRgb: string;
  iconColor: string;
  children: React.ReactNode;
}) {
  const Tag = href.startsWith("mailto:") || href.startsWith("https:") ? "a" : Link;

  const baseStyle = {
    background: `linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(${tintRgb},${active ? "0.14" : "0.06"}) 100%)`,
    border: "1px solid rgba(255,255,255,0.72)",
    boxShadow: `inset 0 1.5px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(0,0,0,0.04), 0 2px 8px rgba(0,0,0,0.08)`,
    color: iconColor,
  };

  return (
    <div className="relative flex flex-col items-center gap-1 group">
      <span className="absolute bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity pointer-events-none group-hover:opacity-100"
        style={{ background: "rgba(0,0,0,0.60)", backdropFilter: "blur(10px)" }}
      >
        {tooltip}
      </span>

      {/* @ts-expect-error dynamic tag */}
      <Tag
        href={href}
        className="h-[52px] w-[52px] rounded-[14px] flex items-center justify-center transition-all duration-200 cursor-pointer group-hover:-translate-y-2 group-hover:scale-110"
        style={baseStyle}
        onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.background = `linear-gradient(160deg, rgba(255,255,255,0.65) 0%, rgba(${tintRgb},0.18) 100%)`;
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
          (e.currentTarget as HTMLElement).style.background = `linear-gradient(160deg, rgba(255,255,255,0.55) 0%, rgba(${tintRgb},${active ? "0.14" : "0.06"}) 100%)`;
        }}
      >
        {children}
      </Tag>

      {active && <span className="h-1 w-1 rounded-full" style={{ background: iconColor, opacity: 0.5 }} />}
    </div>
  );
}
