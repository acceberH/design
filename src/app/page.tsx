"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
    >{children}</motion.div>
  );
}

const VERBS = ["design", "build", "ship"];

export default function Home() {
  const [verbIdx, setVerbIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVerbIdx(i => (i + 1) % VERBS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth" style={{ background: "#f4f7f8" }}>
      {/* Floating gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(87,125,152,0.18) 0%, transparent 65%)", top: "-15%", left: "-10%", animation: "orb1 12s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(69,98,124,0.14) 0%, transparent 65%)", top: "20%", right: "-12%", animation: "orb2 15s ease-in-out infinite alternate" }} />
        <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(75,115,91,0.12) 0%, transparent 65%)", bottom: "5%", left: "15%", animation: "orb3 10s ease-in-out infinite alternate" }} />
      </div>
      <style>{`
        @keyframes orb1 { from { transform: translate(0, 0); } to { transform: translate(40px, 60px); } }
        @keyframes orb2 { from { transform: translate(0, 0); } to { transform: translate(-50px, 40px); } }
        @keyframes orb3 { from { transform: translate(0, 0); } to { transform: translate(30px, -40px); } }
        @property --angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes pill-spin { to { --angle: 360deg; } }
        .pill-outer {
          position: relative;
          border-radius: 999px;
          padding: 2px;
          display: inline-flex;
        }
        .pill-outer::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 999px;
          padding: 1.5px;
          background: conic-gradient(
            from var(--angle, 0deg),
            transparent 0%,
            transparent 60%,
            rgba(87,125,152,0.9) 75%,
            white 82%,
            rgba(87,125,152,0.9) 89%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: pill-spin 2.4s linear infinite;
        }
        .pill-inner {
          position: relative;
          border-radius: 999px;
          padding: 10px 28px;
          background: #f5f5f7;
          border: 1px solid rgba(0,0,0,0.06);
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section id="hero-section" className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[1000px] mx-auto w-full text-center">

            {/* Badge */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <div className="pill-outer">
                <span className="pill-inner inline-flex items-center text-[14px] font-medium tracking-tight" style={{ color: "#1a1a2e" }}>
                  Hi, I&apos;m Rebecca 👋
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              className="text-[42px] sm:text-[48px] font-semibold text-gray-900 mb-6 leading-[1.1] tracking-[-0.02em]"
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.1, ease }}
            >
              I{" "}
              <span style={{ display: "inline-block", verticalAlign: "bottom", overflow: "hidden", lineHeight: "inherit", paddingBottom: "0.15em", marginBottom: "-0.15em" }}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={verbIdx}
                    style={{ display: "inline-block", color: "#577D98" }}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {VERBS[verbIdx]}
                  </motion.span>
                </AnimatePresence>
              </span>
              {" "}AI products that bring clarity to complexity and drive real impact.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-[15px] text-gray-500 leading-relaxed text-center whitespace-nowrap mx-auto"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease }}
            >
              3+ years designing and building AI-powered products, focusing on real-world workflows and impact.
            </motion.p>
          </div>
        </section>


        {/* ── WORK ── */}
        <section id="work" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[75vw] mx-auto">
            <FadeIn>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-6">Selected Work</p>
            </FadeIn>
            <div className="relative">

              {/* BioVision */}
              <div className="sticky top-10 z-20 mt-4">
                <Link href="/work/biovision" className="group block">
                  <div className="relative rounded-2xl overflow-hidden h-[500px] transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                    <Image src="/biov-cover.png" alt="BioVision" width={1920} height={1080} unoptimized className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute top-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)" }}>
                      <p className="text-[12px] text-white/60 mb-1">Product Design · AI/ML · Wildlife Research</p>
                      <h3 className="text-[22px] font-bold text-white">BioVision</h3>
                    </div>
                  </div>
                </Link>
              </div>

              {/* FileGPT */}
              <div className="sticky top-14 z-30 mt-4">
                <Link href="/work/filegpt" className="group block">
                  <div className="relative rounded-2xl overflow-hidden h-[500px] transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                    <Image src="/fg-cover.png" alt="FileGPT" width={1920} height={1080} unoptimized className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute top-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)" }}>
                      <p className="text-[12px] text-white/60 mb-1">UX Research · AI/ML · Product Design</p>
                      <h3 className="text-[22px] font-bold text-white">FileGPT</h3>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Offerplz */}
              <div className="sticky top-[72px] z-40 mt-4">
                <Link href="/work/offerplz" className="group block">
                  <div className="relative rounded-2xl overflow-hidden h-[500px] transition-all duration-300 hover:-translate-y-2" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}>
                    <Image src="/639shots_so.png" alt="Offerplz" width={1248} height={512} unoptimized className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" />
                    <div className="absolute top-0 left-0 right-0 p-8" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)" }}>
                      <p className="text-[12px] text-white/60 mb-1">UX Research · Product Strategy · Flow Optimization</p>
                      <h3 className="text-[22px] font-bold text-white">Offerplz</h3>
                    </div>
                  </div>
                </Link>
              </div>

              {/* BarBuddy — hidden */}

              {/* Cycle */}
              <div className="sticky top-[104px] z-[60] mt-4">
                <Link href="/work/cycle" className="group block">
                  <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[500px]" style={{ background: "linear-gradient(160deg, rgba(255,252,253,0.95) 0%, rgba(255,248,250,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                    <div className="md:w-[68%] relative overflow-hidden flex-shrink-0">
                      <div className="flex items-center justify-center h-full">
                        <Image src="/lockup_red.png" alt="Cycle" width={300} height={200} className="w-auto h-40 object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                      <p className="text-[12px] text-gray-400">Brand Identity · Visual Design · Women&apos;s Wellness</p>
                      <h3 className="text-[22px] font-bold text-gray-900">Cycle</h3>
                      <p className="text-gray-500 text-[15px] leading-relaxed">A brand dedicated to empowering women and facilitating their well-being during their menstrual journey.</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="h-[440px]" />
            </div>
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="pt-8 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-[75vw] mx-auto">
            <FadeIn>
              <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-6">Experience</p>
            </FadeIn>
            <div className="flex flex-col">
              {[
                { period: "2025 — Now",  title: "OpenPromo",           sub: "Product Designer" },
                { period: "2025 — 2026", title: "Amazon Web Services", sub: "Product Designer · Industry-sponsored Project" },
                { period: "2025",        title: "AISPIRE",             sub: "UX Design Intern" },
                { period: "2024 — 2025", title: "OfferPlz",            sub: "Product Designer" },
                { period: "2023 — 2024", title: "FileGPT",             sub: "Product Designer" },
              ].map((item, i, arr) => (
                <FadeIn key={item.title} delay={i * 0.06}>
                  <div className={`flex items-baseline gap-8 py-5 ${i < arr.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <p className="text-[13px] text-gray-400 tabular-nums w-[110px] flex-shrink-0">{item.period}</p>
                    <p className="text-[16px] font-semibold text-gray-900">{item.title}</p>
                    <p className="text-[13px] text-gray-400">{item.sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-100 overflow-hidden flex items-center justify-center"
          style={{ background: "radial-gradient(ellipse at center, #eef3f5 0%, #f6f9fa 70%)" }}>

          {/* Floating emojis with individual drift animations */}
          {[
            { content: "✦", top: "22%", left: "12%", size: "text-4xl", duration: 4.2, y: 10 },
            { content: "🎯", top: "55%", left: "7%",  size: "text-3xl", duration: 5.8, y: 8  },
            { content: "⚡", top: "20%", right: "10%", size: "text-3xl", duration: 3.9, y: 12 },
            { content: "🚀", top: "60%", right: "14%", size: "text-3xl", duration: 6.1, y: 7  },
            { content: "✦", top: "75%", left: "22%",  size: "text-2xl", duration: 4.7, y: 9  },
          ].map((e, i) => (
            <motion.span
              key={i}
              className={`absolute select-none ${e.size}`}
              style={{ top: e.top, left: e.left, right: e.right }}
              animate={{ y: [-e.y / 2, e.y / 2, -e.y / 2] }}
              transition={{ duration: e.duration, repeat: Infinity, ease: "easeInOut" }}
            >
              {e.content}
            </motion.span>
          ))}

          <FadeIn>
            <p className="relative text-[28px] sm:text-[32px] font-semibold text-gray-900 tracking-tight text-center max-w-2xl">
              Do meaningful work, and do it fast enough to matter.
            </p>
          </FadeIn>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 text-gray-500 py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-[14px] font-medium text-gray-900 mb-4 md:mb-0">Rebecca Huang</div>
              <div className="flex space-x-8 mb-4 md:mb-0 text-[13px]">
                <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
                <Link href="#work" className="hover:text-gray-900 transition-colors">Work</Link>
                <a href="mailto:qiongran.huang@gmail.com" className="hover:text-gray-900 transition-colors">Contact</a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-[12px] text-gray-400">© 2025 Rebecca Huang</span>
                <div className="flex space-x-4">
                  <a href="mailto:qiongran.huang@gmail.com" className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
                  </a>
                  <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/></svg>
                  </a>
                  <a href="https://github.com/acceberH" className="text-gray-400 hover:text-gray-700 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
