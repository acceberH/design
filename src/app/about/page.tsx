"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type SectionKey = "education" | "experience" | "hobbies";
type AboutTabKey = "intro" | SectionKey;

export default function AboutPage() {
  const [active, setActive] = useState<AboutTabKey>("intro");
  const [activeDock, setActiveDock] = useState<"home" | "work" | "about">("about");

  const tabMeta = useMemo(
    () => [
      { key: "intro" as const, label: "👋 Intro" },
      { key: "education" as const, label: "🎓 Education" },
      { key: "experience" as const, label: "💼 Work" },
      { key: "hobbies" as const, label: "✨ Hobbies" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#f8f6ff] relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "#f8f6ff" }} />
        <div className="absolute rounded-full" style={{
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(255,182,193,0.6), transparent 70%)",
          filter: "blur(60px)", top: "-10%", left: "-5%", opacity: 0.6,
          animation: "meshDrift1 25s linear infinite"
        }} />
        <div className="absolute rounded-full" style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(198,182,255,0.55), transparent 70%)",
          filter: "blur(60px)", top: "-5%", right: "-5%", opacity: 0.55,
          animation: "meshDrift2 30s linear infinite"
        }} />
        <div className="absolute rounded-full" style={{
          width: "450px", height: "450px",
          background: "radial-gradient(circle, rgba(182,230,210,0.55), transparent 70%)",
          filter: "blur(60px)", bottom: "-5%", right: "5%", opacity: 0.5,
          animation: "meshDrift3 28s linear infinite"
        }} />
        <div className="absolute rounded-full" style={{
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(255,220,180,0.45), transparent 70%)",
          filter: "blur(60px)", bottom: "5%", left: "5%", opacity: 0.45,
          animation: "meshDrift4 22s linear infinite"
        }} />
      </div>
      <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8 relative z-10">
        <section className="mx-auto max-w-6xl rounded-2xl border border-gray-300 bg-[#eef0f2] shadow-xl overflow-hidden">
          <div className="border-b border-gray-200 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <Link href="/" aria-label="Back to home" className="h-3 w-3 rounded-full bg-[#ff5f57] hover:opacity-80 transition-opacity" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex-1 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5c0 .39.055.765.157 1.117M7 11h10a2 2 0 012 2v5a2 2 0 01-2 2H7a2 2 0 01-2-2v-5a2 2 0 012-2z" />
                  </svg>
                  <span>rebeccahuang.design/about</span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap items-end gap-1">
              {tabMeta.map((tab) => {
                const selected = active === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActive(tab.key)}
                    className={`rounded-t-lg px-4 py-2 text-sm font-medium transition-colors ${
                      selected
                        ? "bg-white border border-gray-200 border-b-white -mb-px"
                        : "bg-transparent hover:bg-[#e4e6e9] text-gray-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="bg-white px-6 py-8 sm:px-8 sm:py-10">
            {active === "intro" && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:items-start">
                <Image
                  src="/IMG_2878.jpg"
                  alt="Rebecca Huang"
                  width={915}
                  height={1339}
                  className="w-[200px] h-[260px] rounded-2xl object-cover shadow-lg"
                  priority
                />
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">About Me</p>
                  <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900">Hi! It&apos;s Rebecca here</h1>
                  <p className="text-lg leading-relaxed text-gray-700">
                    I&apos;m a product designer who&apos;s spent the last 3 years making AI feel less intimidating and more human. I care about the moment when someone uses a product and thinks - oh, this just gets me. Outside of work, you&apos;ll find me in a cafe somewhere, collecting visual references and overthinking font choices.
                  </p>
                </div>
              </div>
            )}

            {active === "education" && (
              <div className="border-b border-gray-200">
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-gray-900 font-medium">University of Washington</p>
                    <p className="text-gray-600">MS Innovation Technology</p>
                  </div>
                  <p className="text-gray-700 md:text-right">2024–2026</p>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <p className="text-gray-900 font-medium">New York University</p>
                    <p className="text-gray-600">BS Integrated Design &amp; Media</p>
                  </div>
                  <p className="text-gray-700 md:text-right">2021–2024</p>
                </div>
              </div>
            )}

            {active === "experience" && (
              <div className="border-b border-gray-200">
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-gray-900">Product Designer · OpenPromo</p>
                  <p className="text-gray-700 md:text-right">Sep 2025 – Present</p>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-gray-900">Product Designer · Amazon Web Services</p>
                  <p className="text-gray-700 md:text-right">Sep 2025 – Mar 2026</p>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-gray-900">UX Design Intern · AISPIRE</p>
                  <p className="text-gray-700 md:text-right">Jun 2025 – Aug 2025</p>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-gray-900">Product Designer · OfferPlz</p>
                  <p className="text-gray-700 md:text-right">Nov 2024 – Mar 2025</p>
                </div>
                <div className="grid grid-cols-1 gap-3 border-t border-gray-200 py-6 md:grid-cols-[1fr_auto] md:items-center">
                  <p className="text-gray-900">Product Designer · FileGPT</p>
                  <p className="text-gray-700 md:text-right">Feb 2023 – Aug 2024</p>
                </div>
              </div>
            )}

            {active === "hobbies" && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="mb-2 text-2xl">☕</p>
                  <p className="text-gray-700">Exploring cafe spaces and collecting visual references</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="mb-2 text-2xl">📝</p>
                  <p className="text-gray-700">Documenting ideas through short notes and photo snapshots</p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <p className="mb-2 text-2xl">🛠️</p>
                  <p className="text-gray-700">Trying new creative tools and testing playful interface concepts</p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-end gap-2 bg-white/85 backdrop-blur-md border border-black/8 rounded-[20px] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Home
            </span>
            <Link
              href="/#hero-section"
              onClick={() => setActiveDock("home")}
              className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF] ${
                activeDock === "home" ? "bg-[#0D99FF]" : "bg-[#F5F5F4]"
              }`}
            >
              <svg className={`w-6 h-6 group-hover:text-[#0D99FF] ${activeDock === "home" ? "text-white" : "text-[#44403C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5.5v-7h-5v7H4a1 1 0 01-1-1v-10.5z" />
              </svg>
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#0D99FF]" />
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Work
            </span>
            <Link
              href="/#work"
              onClick={() => setActiveDock("work")}
              className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF] ${
                activeDock === "work" ? "bg-[#0D99FF]" : "bg-[#F5F5F4]"
              }`}
            >
              <svg className={`w-6 h-6 group-hover:text-[#0D99FF] ${activeDock === "work" ? "text-white" : "text-[#44403C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              About
            </span>
            <Link
              href="/about"
              onClick={() => setActiveDock("about")}
              className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF] ${
                activeDock === "about" ? "bg-[#0D99FF]" : "bg-[#F5F5F4]"
              }`}
            >
              <svg className={`w-6 h-6 group-hover:text-[#0D99FF] ${activeDock === "about" ? "text-white" : "text-[#44403C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20a8 8 0 0116 0" />
              </svg>
            </Link>
          </div>

          <div className="w-px h-9 bg-[#E7E5E4] self-center mx-1" />

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Email
            </span>
            <a
              href="mailto:qiongran.huang@gmail.com"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/rebecca-huang-a60388249/"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 105.24 6.9 1.96 1.96 0 005.25 3zM20.44 13.41c0-3.4-1.82-4.98-4.24-4.98-1.95 0-2.82 1.07-3.31 1.82V8.5H9.51V20h3.38v-5.68c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38v-6.59z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              GitHub
            </span>
            <a
              href="https://github.com/acceberH"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A12 12 0 000 12.8c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.27.82-.58 0-.29-.01-1.07-.02-2.1-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.82.42-1.35.76-1.66-2.67-.32-5.48-1.37-5.48-6.08 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25A11.2 11.2 0 0112 6.4c.99 0 2 .14 2.94.41 2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.72-2.82 5.76-5.5 6.08.43.38.82 1.13.82 2.29 0 1.66-.02 3-.02 3.4 0 .31.21.7.83.58A12.3 12.3 0 0024 12.8 12 12 0 0012 .5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
