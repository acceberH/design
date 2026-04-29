"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
    >{children}</motion.div>
  );
}

function ImageReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, scale: 0.98, y: 18 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
    >{children}</motion.div>
  );
}

// ── Typography scale ──────────────────────────────────────────
const T = {
  h1:    "text-[48px] font-medium leading-tight tracking-tight",
  h2:    "text-[28px] font-medium leading-snug tracking-tight",
  h3:    "text-[20px] font-medium leading-snug",
  label: "text-[11px] font-medium uppercase tracking-[0.1em]",
} as const;
// ─────────────────────────────────────────────────────────────

function StatRow({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
    >{children}</motion.div>
  );
}

function VersionSlider({
  id, title, impact, versions,
}: {
  id?: string;
  title: string;
  impact?: React.ReactNode;
  versions: { label: string; isLast?: boolean; content: React.ReactNode }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = versions.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((count - 1) / count) * 100}%`]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(count - 1, Math.round(v * (count - 1))));
  });

  return (
    <div ref={ref} id={id} style={{ height: `${count * 65}vh` }}>
      <div className="sticky" style={{ top: 80 }}>
        <div style={{ background: "#f4f7f8", paddingBottom: 16 }}>
          <h3 className={`${T.h3} text-gray-900 mb-3`}>{title}</h3>
          {impact && <div className="mb-3">{impact}</div>}
          <div className="flex items-center gap-2">
            {versions.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`text-[13px] font-medium transition-colors duration-300 ${
                  i === activeIndex ? "text-gray-900" : "text-gray-300"
                }`}>{v.label}</span>
                {i < count - 1 && (
                  <span className={`text-[11px] transition-colors duration-300 ${
                    i < activeIndex ? "text-gray-400" : "text-gray-200"
                  }`}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.div className="flex" style={{ x, width: `${count * 100}%` }}>
            {versions.map((v, i) => (
              <div key={i} style={{ width: `${100 / count}%` }}>
                <div className="rounded-2xl overflow-hidden">
                  <div>{v.content}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const NAV_SECTIONS = [
  ["tldr","TL;DR"],["context","Context"],["research","Research"],["approach","Design Process"],["final-design","Final Design"],["reflection","Reflection"],
] as const;

export default function OpenPromoCaseStudy() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    function updateActiveNav() {
      let current = "";
      NAV_SECTIONS.forEach(([id]) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) current = id;
      });
      setActiveSection(current);
    }
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();
    return () => window.removeEventListener("scroll", updateActiveNav);
  }, []);

  return (
    <div className="font-sans" style={{ background: "#f4f7f8" }}>

      {/* Left sidebar nav */}
      <nav className="fixed top-1/2 -translate-y-1/2 z-50 hidden lg:block" style={{ left: "calc(50% - 680px)" }}>
        <ul className="flex flex-col gap-1">
          {NAV_SECTIONS.map(([id, label]) => (
            <li key={id}>
              <span
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="flex items-center gap-2 py-1 cursor-pointer group transition-all duration-200"
                style={{ color: activeSection === id ? "#1f2937" : "#9ca3af" }}
              >
                <span style={{
                  width: activeSection === id ? 20 : 8,
                  height: 1.5,
                  background: activeSection === id ? "#2D7D7D" : "#d1d5db",
                  borderRadius: 2,
                  flexShrink: 0,
                  transition: "width 0.25s ease",
                }} />
                <span className="text-[11px] font-medium tracking-wide transition-all duration-200">{label}</span>
              </span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-[960px] mx-auto">
        <main id="main-content">

          {/* ── HERO ── */}
          <section id="hero" className="px-6 py-16">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className="flex flex-wrap gap-3 mb-6">
                {["Product Design","UX Research","B2B","Social Media Tech"].map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-[13px] font-medium">{t}</span>
                ))}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className={`${T.h1} text-gray-900 mb-4`}>OpenPromo</motion.h1>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className="flex flex-wrap gap-6 text-base text-gray-600 mb-8">
                <span><strong>Company:</strong> OpenPromo</span>
                <span><strong>Role:</strong> UX Designer, Researcher</span>
                <span><strong>Duration:</strong> 7 months</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.97, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: [0.22,1,0.36,1] as [number,number,number,number] }}>
                <img className="w-full rounded-xl" src="/openpromo_demo.gif" alt="OpenPromo dashboard demo" />
              </motion.div>
            </div>
          </section>

          {/* ── TL;DR ── */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>TL;DR</h2></FadeIn>
              <div className="grid md:grid-cols-2 gap-6">
                <FadeIn delay={0.05}>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className={`${T.label} text-[#2D7D7D] mb-3`}>Problem</p>
                    <p className="text-base text-gray-600 leading-relaxed">Small businesses are creating content constantly, but without strategic direction — they don&apos;t know what to create, when to post, or whether any of it is working.</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.12}>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className={`${T.label} text-[#2D7D7D] mb-3`}>Solution</p>
                    <p className="text-base text-gray-600 leading-relaxed">An AI-powered growth platform that helps small businesses create promotional content, manage social accounts, and learn from competitors in one place.</p>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.1} className="mt-8">
                <p className={`${T.label} text-[#2D7D7D] mb-4`}>Impact</p>
                <div className="border-t border-gray-200 pt-6 grid grid-cols-3">
                  {[
                    { stat: "0→1",  desc: "Product built from scratch" },
                    { stat: "3×",   desc: "Faster ad creation workflow" },
                    { stat: "70%",  desc: "Faster cross-platform publishing" },
                  ].map((item, i) => (
                    <div key={i} className={`pr-8 ${i > 0 ? "pl-8 border-l border-gray-200" : ""}`}>
                      <p className="text-[42px] font-medium leading-none mb-3 text-gray-900">{item.stat}</p>
                      <p className="text-[13px] text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>

          {/* ── CONTEXT ── */}
          <section id="context" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>Context</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-8`}>Small businesses are flying blind</h2></FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.05}><p className="text-base text-gray-700 leading-relaxed"><strong>I joined OpenPromo as the sole designer</strong>, owning end-to-end product design for 7 months — from research and strategy through to shipping three core features. I led all UX research, drove the product direction, and took the platform from concept to launch.</p></FadeIn>
                <FadeIn delay={0.08}><p className="text-base text-gray-600 leading-relaxed">Small businesses are outgunned. Enterprise brands have dedicated marketing teams, agency partnerships, and data analysts telling them exactly what content to create next. Small businesses have none of that — just a phone, a few hours a week, and a lot of guessing.</p></FadeIn>
                <FadeIn delay={0.1}><p className="text-base text-gray-600 leading-relaxed">The real cost isn&apos;t production — <strong>it&apos;s the hours spent deciding what to create</strong>, manually posting to eight platforms, and staring at analytics that don&apos;t tell you what to do next.</p></FadeIn>
                <ImageReveal delay={0.08}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <Image src="/b927e770173c1c8012e2191e2d7237bb.png" alt="Competitive analysis" width={5945} height={5314} unoptimized sizes="(max-width: 1024px) 86vw, 900px" className="w-full max-w-[450px] h-auto mx-auto" />
                    <div className="p-4">
                      <p className="text-[13px] text-gray-600 italic">Competitive landscape showing gaps in AI-driven growth features.</p>
                    </div>
                  </div>
                </ImageReveal>
                <FadeIn delay={0.15}><p className="text-base text-gray-700 leading-relaxed">This is the gap OpenPromo was designed to fill — the intelligence layer that SMBs have never had access to. <strong>I identified this gap, framed the design opportunity, and led the system from 0 to 1.</strong></p></FadeIn>
              </div>
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>User Research</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-8`}>The real bottleneck isn&apos;t tools — it&apos;s decisions</h2></FadeIn>
              <div className="space-y-8">
                <FadeIn delay={0.05}><p className="text-base text-gray-700">I interviewed small business owners to understand their daily social media workflow and marketing challenges. <strong>What I found contradicted my starting assumption entirely.</strong> Most businesses spend significant time producing content but struggle to determine what content actually drives growth.</p></FadeIn>
                <FadeIn delay={0.1}>
                  <div style={{ borderRadius: 16, border: "1px solid #e5e7eb", overflow: "hidden", background: "white" }}>
                    {/* Top: persona + quote */}
                    <div style={{ padding: "32px 36px 24px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", background: "#f3f4f6", flexShrink: 0 }}>
                          <Image src="/openpromo_confused.png" alt="Persona" width={40} height={40} unoptimized style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        </div>
                        <div>
                          <p style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>Sarah Chen</p>
                          <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 1 }}>Small Business Owner</p>
                        </div>
                      </div>
                      <p style={{ fontSize: 36, lineHeight: 0.8, color: "#2D7D7D", opacity: 0.2, fontFamily: "Georgia, serif", marginBottom: 8 }}>&ldquo;</p>
                      <p style={{ fontSize: 18, fontWeight: 500, color: "#1f2937", lineHeight: 1.65 }}>
                        We spend hours making posts, but we don&apos;t know if any of it is actually working.
                      </p>
                      <p style={{ fontSize: 36, lineHeight: 0.8, color: "#2D7D7D", opacity: 0.2, fontFamily: "Georgia, serif", marginTop: 8, textAlign: "right" }}>&rdquo;</p>
                    </div>
                    {/* Bottom: pain points + goals */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #f0f0f0" }}>
                      <div style={{ padding: "22px 28px", borderRight: "1px solid #f0f0f0" }}>
                        <p style={{ fontSize: 12, fontWeight: 500, color: "#ef4444", marginBottom: 14 }}>Pain Points</p>
                        {["Not sure which content brings in sales","Less than 1hr/day on marketing","Hard to track across platforms","Ads spending with no clear ROI"].map((pt, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
                            <div style={{ width: 12, height: 12, borderRadius: "50%", border: "1.5px solid #fca5a5", flexShrink: 0, marginTop: 3 }} />
                            <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.55 }}>{pt}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ padding: "22px 28px" }}>
                        <p style={{ fontSize: 12, fontWeight: 500, color: "#16a34a", marginBottom: 14 }}>Goals</p>
                        {["Grow brand awareness","Create content that converts","Know what's actually working","Save time with automation"].map((g, i) => (
                          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 9 }}>
                            <div style={{ width: 12, height: 12, borderRadius: "50%", border: "1.5px solid #86efac", flexShrink: 0, marginTop: 3 }} />
                            <p style={{ fontSize: 12, color: "#374151", lineHeight: 1.55 }}>{g}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <div>
                  <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-4`}>Research Insights</p></FadeIn>
                  <div className="border-t border-gray-200">
                    {[["73%","of small businesses are not confident their marketing strategy is working."],["56%","of SMBs spend one hour or less per day on marketing."],["54%","of SMBs struggle to produce content consistently."]].map(([stat,desc],i) => (
                      <StatRow key={stat} index={i}>
                        <div className="py-5 border-b border-gray-200 grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] items-start gap-4">
                          <p className="text-[28px] font-medium text-gray-900">{stat}</p>
                          <p className="text-base text-gray-600 leading-relaxed pt-1">{desc}</p>
                        </div>
                      </StatRow>
                    ))}
                  </div>
                </div>


                <FadeIn delay={0.08}>
                  <div className="flex flex-col items-center gap-3">
                    <svg width="16" height="32" viewBox="0 0 16 32" fill="none" style={{ color: "#2D7D7D", opacity: 0.4 }}>
                      <line x1="8" y1="0" x2="8" y2="26" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
                      <path d="M3 22l5 8 5-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                    <p className="text-base text-gray-600 leading-relaxed">
                      Small businesses aren&apos;t failing to create content. They&apos;re failing to decide <em>what</em> to create, <em>when</em> to post it, and whether any of it is working. This single insight shifted the entire product direction.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-[78px_1fr] md:grid-cols-[110px_1fr] items-center gap-3 md:gap-5 pt-2">
                  <ImageReveal>
                    <Image src="/filegpt_ideas.svg" alt="Design opportunity" width={220} height={220} className="w-16 md:w-24 h-auto object-contain" />
                  </ImageReveal>
                  <FadeIn delay={0.1}>
                    <p className="text-[20px] text-gray-800 leading-relaxed font-medium">
                      <strong>How might we</strong> help small businesses decide what content to create next using signals from competitors, performance analytics, and emerging trends?
                    </p>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* ── DESIGN PROCESS ── */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>Design Process</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-6`}>From wrong assumption to product pivot</h2></FadeIn>

              {/* Starting Assumption */}
              <div className="mb-20">
                <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-4`}>Problem Framing</p></FadeIn>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <FadeIn delay={0.05}><p>When I first joined OpenPromo, my assumption was straightforward: <strong>small businesses need better content creation tools.</strong> Specifically, I believed AI video generation would be the highest-value feature — if we could help them produce professional video ads without a production team, that would remove the biggest barrier.</p></FadeIn>
                  <FadeIn delay={0.1}><p className="font-medium text-gray-900">This assumption was wrong.</p></FadeIn>
                  <FadeIn delay={0.15}><p>Through user interviews, a different picture emerged. Small businesses weren&apos;t struggling to create content — many were already posting every day. <strong>The real problem was that they had no idea whether any of it was working, or what to create next.</strong> The bottleneck wasn&apos;t production. It was decision-making.</p></FadeIn>
                  <FadeIn delay={0.2}><p>This shifted the entire product direction: from a content creation tool to a growth intelligence platform. <strong>I drove this pivot</strong> — AI generation stayed, but as one part of a larger system designed to answer a harder question: what should I create next, and why?</p></FadeIn>
                </div>
                <ImageReveal delay={0.1} className="mt-8 rounded-2xl overflow-hidden border border-gray-100 max-w-[960px] mx-auto">
                  <img src="/user_journey.svg" alt="User journey map" className="w-full max-w-[80%] mx-auto block" />
                </ImageReveal>
              </div>

              {/* ── FEATURE 1: Instant Ad ── */}
              <VersionSlider
                id="solution-one"
                title="From brief to live ad in under 5 minutes"
                versions={[
                  {
                    label: "V1",
                    content: (() => {
                      const annotations = [
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
                          title: "Switching between areas",
                          desc: "Users go to Instant Ad first, then switch to Create Post to publish.",
                          lineY: 108, imgX: 390, imgY: 90,
                        },
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>,
                          title: "Duplicate information",
                          desc: "Users re-enter product and persona info in two separate places.",
                          lineY: 295, imgX: 420, imgY: 370,
                        },
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                          title: "More steps, more time",
                          desc: "The split flow adds cognitive load and slows down ad creation.",
                          lineY: 480, imgX: 400, imgY: 530,
                        },
                      ];
                      return (
                        <div style={{ display: "flex" }}>
                          <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            {annotations.map((a, i) => (
                              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                <div style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #fca5a5", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>{a.icon}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <p style={{ fontWeight: 500, color: "#ef4444", fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                  <div style={{ flex: 1, borderBottom: "1.5px dashed #fca5a5" }} />
                                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#fca5a5", flexShrink: 0 }} />
                                </div>
                                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                              </div>
                            ))}
                          </div>
                          <Image src="/opwireframe1.png?v=2" alt="Wireframe V1" width={1332} height={900} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                        </div>
                      );
                    })(),
                  },
                  {
                    label: "V2",
                    content: (() => {
                      const annotations = [
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 6h16M4 12h16M4 18h7"/></svg>,
                          title: "Tabs, not modals",
                          desc: "Both creation modes stay equally visible — no switching cost.",
                        },
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                          title: "Single-page layout",
                          desc: "Ad creation is non-linear — users can revise any step at any time.",
                        },
                        {
                          icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                          title: "Unified publish flow",
                          desc: "Create and publish happen in one workspace — no context switching.",
                        },
                      ];
                      return (
                        <div style={{ display: "flex" }}>
                          <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                            {annotations.map((a, i) => (
                              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                <div style={{ width: 30, height: 30, borderRadius: "50%", border: "1.5px solid #16a34a", display: "flex", alignItems: "center", justifyContent: "center", color: "#16a34a" }}>{a.icon}</div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                  <p style={{ fontWeight: 500, color: "#16a34a", fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                  <div style={{ flex: 1, borderBottom: "1.5px dashed #16a34a" }} />
                                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
                                </div>
                                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                              </div>
                            ))}
                          </div>
                          <Image src="/opwireframe2.png" alt="Wireframe V2" width={1332} height={1250} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                        </div>
                      );
                    })(),
                  },
                  {
                    label: "Final Design",
                    isLast: true,
                    content: (
                      <Image src="/opinstantad1.png" alt="Final instant ad" width={1332} height={1250} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", display: "block" }} />
                    ),
                  },
                ]}
              />
              <FadeIn delay={0.05}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "8px 4px", marginTop: 4 }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 10, flex: 1 }}>
                    <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.7 }}>
                      <strong>Impact</strong>{"  "}Reduced context switching and cognitive load,{" "}
                      <span style={{ color: "#16a34a" }}>enabling faster ad creation in under 5 minutes.</span>
                    </p>
                  </div>
                  <div style={{ width: 1, height: 36, background: "#bbf7d0", flexShrink: 0 }} />
                  {[
                    { arrow: "↓", val: "40%", label: "Time to create" },
                    { arrow: "↓", val: "60%", label: "Steps reduced" },
                    { arrow: "↑", val: "25%", label: "User satisfaction" },
                  ].map((s, i) => (
                    <div key={i} style={{ textAlign: "center", flexShrink: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: "#16a34a", lineHeight: 1 }}>{s.arrow} {s.val}</p>
                      <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              {/* ── FEATURE 2: Competitor Tracking ── */}
              <div className="mt-16">
                <VersionSlider
                  id="solution-three"
                  title="Learning from competitors, not just watching them"
                  versions={[
                    {
                      label: "V1",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
                            title: "View-only",
                            desc: "Users can see competitor posts but can't act on them.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
                            title: "Manual trend judgment",
                            desc: "No signals — users have to decide what's trending themselves.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                            title: "No analytics",
                            desc: "Posts are visible but performance data is missing entirely.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                        ];
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  <div style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}>{a.icon}</div>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                    <div style={{ flex: 1, borderBottom: `1.5px dashed ${a.dash}` }} />
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dash, flexShrink: 0 }} />
                                  </div>
                                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Image src="/trackingv1.png" alt="Tracking V1" width={1200} height={760} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "V2",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Analytics added",
                            desc: "Users can now see post performance data and engagement metrics.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Top content surfaced",
                            desc: "High-performing competitor posts are now automatically identified.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                            title: "No actionable insights",
                            desc: "Data is visible but the system still doesn't say what to do next.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                        ];
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  <div style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}>{a.icon}</div>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                    <div style={{ flex: 1, borderBottom: `1.5px dashed ${a.dash}` }} />
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dash, flexShrink: 0 }} />
                                  </div>
                                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Image src="/trackingv3.png" alt="Tracking V2" width={1200} height={760} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "V3",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Anomalies tab",
                            desc: "Proactive signals surface automatically — no manual review needed.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "System-driven discovery",
                            desc: "The platform detects unusual competitor activity and surfaces it unprompted.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Signal, not noise",
                            desc: "Anomalies are separated from normal content — users can act without digging.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                        ];
                        return (
                          <div style={{ display: "flex", flexDirection: "column", height: "68vh" }}>
                            <div style={{ display: "flex", padding: "24px 28px 0", gap: 12, flexShrink: 0 }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color, flexShrink: 0 }}>{a.icon}</div>
                                    <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3 }}>{a.title}</p>
                                  </div>
                                  <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <div style={{ flex: 1, minHeight: 0, position: "relative" }}>
                              <Image src="/trackingv4.png?v=2" alt="Tracking V3" fill unoptimized style={{ objectFit: "contain", objectPosition: "center" }} />
                            </div>
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "Final Design",
                      isLast: true,
                      content: (
                        <div style={{ height: "68vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
                          <Image src="/trackingdemo.gif" alt="Tracking final" width={960} height={553} unoptimized style={{ maxHeight: "100%", width: "auto", display: "block" }} />
                        </div>
                      ),
                    },
                  ]}
                />
                <FadeIn delay={0.05}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "8px 4px", marginTop: 4 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, flex: 1 }}>
                      <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.7 }}>
                        <strong>Impact</strong>{"  "}Replaced manual competitor browsing with automated signals,{" "}
                        <span style={{ color: "#16a34a" }}>surfacing actionable trends before users have to look.</span>
                      </p>
                    </div>
                    <div style={{ width: 1, height: 36, background: "#bbf7d0", flexShrink: 0 }} />
                    {[
                      { arrow: "↓", val: "70%", label: "Manual research time" },
                      { arrow: "↑", val: "3×", label: "Trend identification" },
                      { arrow: "↑", val: "45%", label: "Content relevance" },
                    ].map((s, i) => (
                      <div key={i} style={{ textAlign: "center", flexShrink: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 500, color: "#16a34a", lineHeight: 1 }}>{s.arrow} {s.val}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

              {/* ── FEATURE 3: Performance Analytics ── */}
              <div className="mt-16">
                <VersionSlider
                  id="performance-analytics"
                  title="Data that tells you what to do next, not just what happened"
                  versions={[
                    {
                      label: "V1",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
                            title: "Data without context",
                            desc: "Numbers show % changes but no explanation of why they moved.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
                            title: "No next steps",
                            desc: "Users know impressions went up — but not what to do about it.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
                            title: "Disconnected from action",
                            desc: "Analytics and content creation live in completely separate screens.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                        ];
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  <div style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}>{a.icon}</div>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                    <div style={{ flex: 1, borderBottom: `1.5px dashed ${a.dash}` }} />
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dash, flexShrink: 0 }} />
                                  </div>
                                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Image src="/performancev1.png?v=2" alt="Performance V1" width={1400} height={900} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "V2",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Top content added",
                            desc: "Users can now see which posts are driving the most impressions.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Content type breakdown",
                            desc: "Performance split by video, image, and carousel — more signal.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
                            title: "Still no direction",
                            desc: "Data is richer but the system still doesn't say what to create next.",
                            color: "#ef4444", border: "#fca5a5", dash: "#fca5a5",
                          },
                        ];
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: 240, flexShrink: 0, padding: "40px 24px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  <div style={{ width: 30, height: 30, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}>{a.icon}</div>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3, whiteSpace: "nowrap" }}>{a.title}</p>
                                    <div style={{ flex: 1, borderBottom: `1.5px dashed ${a.dash}` }} />
                                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: a.dash, flexShrink: 0 }} />
                                  </div>
                                  <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Image src="/performancev2.png?v=2" alt="Performance V2" width={1400} height={900} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "V3",
                      content: (() => {
                        const annotations = [
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "AI Recommendations",
                            desc: "System surfaces what to create next — sits above all other data.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Goal progress",
                            desc: "Users can track whether their content strategy is hitting targets.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                          {
                            icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
                            title: "Direct action CTA",
                            desc: "From insight to creation in one click — no context switching.",
                            color: "#16a34a", border: "#16a34a", dash: "#16a34a",
                          },
                        ];
                        return (
                          <div style={{ display: "flex" }}>
                            <div style={{ width: 180, flexShrink: 0, padding: "40px 20px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                              {annotations.map((a, i) => (
                                <div key={i} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                                  <div style={{ width: 28, height: 28, borderRadius: "50%", border: `1.5px solid ${a.border}`, display: "flex", alignItems: "center", justifyContent: "center", color: a.color }}>{a.icon}</div>
                                  <p style={{ fontWeight: 500, color: a.color, fontSize: 13, lineHeight: 1.3 }}>{a.title}</p>
                                  <p style={{ fontSize: 11, color: "#6b7280", lineHeight: 1.5 }}>{a.desc}</p>
                                </div>
                              ))}
                            </div>
                            <Image src="/performancev3.png" alt="Performance V3" width={1400} height={900} unoptimized style={{ height: "68vh", width: "100%", objectFit: "contain", borderLeft: "1px solid #f0f0f0", flex: 1, minWidth: 0 }} />
                          </div>
                        );
                      })(),
                    },
                    {
                      label: "Final Design",
                      isLast: true,
                      content: (
                        <div style={{ height: "68vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fff" }}>
                          <Image src="/performance_final_design.gif" alt="Performance final" width={960} height={553} unoptimized style={{ maxHeight: "100%", width: "auto", display: "block" }} />
                        </div>
                      ),
                    },
                  ]}
                />
                <FadeIn delay={0.05}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "8px 4px", marginTop: 4 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, flex: 1 }}>
                      <p style={{ fontSize: 16, color: "#374151", lineHeight: 1.7 }}>
                        <strong>Impact</strong>{"  "}Shifted the product from a reporting tool to an action engine,{" "}
                        <span style={{ color: "#16a34a" }}>telling users what to do next — not just what happened.</span>
                      </p>
                    </div>
                    <div style={{ width: 1, height: 36, background: "#bbf7d0", flexShrink: 0 }} />
                    {[
                      { arrow: "↑", val: "35%", label: "Action taken after view" },
                      { arrow: "↓", val: "50%", label: "Time to next post" },
                      { arrow: "↑", val: "70%", label: "Publishing speed" },
                    ].map((s, i) => (
                      <div key={i} style={{ textAlign: "center", flexShrink: 0 }}>
                        <p style={{ fontSize: 13, fontWeight: 500, color: "#16a34a", lineHeight: 1 }}>{s.arrow} {s.val}</p>
                        <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 3 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </div>

            </div>
          </section>

          {/* ── FINAL DESIGN ── */}
          <section id="final-design" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>Final Design</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-4`}>Three features. One system.</h2></FadeIn>
              <FadeIn delay={0.08}><p className="text-base text-gray-600 mb-14">I designed three interconnected features that move OpenPromo from a content tool to a growth intelligence platform — each one informed by the decision-making bottleneck I uncovered in research.</p></FadeIn>

              <div className="space-y-16">
                {/* 01 Instant Ad */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className={`${T.label} text-[#2D7D7D] mb-3`}>01 — Instant Ad</p>
                    <p className="text-base text-gray-500 mb-5 leading-relaxed">Unified ad creation and publishing in a single tabbed workspace — eliminating the back-and-forth between two separate screens. <strong>Result: 3× faster ad creation workflow.</strong></p>
                    <Image src="/opinstantad1.png" alt="Instant Ad final design" width={1332} height={1250} unoptimized style={{ width: "90%", height: "auto", display: "block", margin: "0 auto" }} />
                  </div>
                </ImageReveal>

                {/* 02 Competitor Tracking */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className={`${T.label} text-[#2D7D7D] mb-3`}>02 — Competitor Tracking</p>
                    <p className="text-base text-gray-500 mb-5 leading-relaxed">Automatic anomaly detection surfaces competitor signals without manual review — the system tells users what&apos;s trending before they have to look for it.</p>
                    <img src="/trackingdemo.gif" alt="Competitor tracking final design" style={{ maxHeight: "55vh", width: "auto", display: "block", margin: "0 auto" }} />
                  </div>
                </ImageReveal>

                {/* 03 Performance Analytics */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className={`${T.label} text-[#2D7D7D] mb-3`}>03 — Performance Analytics</p>
                    <p className="text-base text-gray-500 mb-5 leading-relaxed">AI Recommendations sit above the charts — &ldquo;what to do next&rdquo; is prioritized over &ldquo;what the numbers are.&rdquo; <strong>Result: 70% faster cross-platform publishing.</strong></p>
                    <img src="/performance_final_design.gif" alt="Performance analytics final design" style={{ maxHeight: "55vh", width: "auto", display: "block", margin: "0 auto" }} />
                  </div>
                </ImageReveal>
              </div>
            </div>
          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>Reflection</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-8`}>AI doesn&apos;t replace strategy — it enables it</h2></FadeIn>
              <FadeIn delay={0.08}>
                <p className="text-base text-gray-700 leading-relaxed">This project reinforced something I now carry into every engagement: <strong>the most valuable design work happens before the wireframes.</strong> I came in assuming we needed better creation tools. I left having redesigned the product&apos;s core premise. The research pivot I drove from creation to intelligence is what made the product worth building. As AI generation matures, the real differentiator isn&apos;t the content itself. It&apos;s the system that tells you what to create next. <strong>That&apos;s the problem I was most proud to have defined and solved.</strong></p>
              </FadeIn>
            </div>
          </section>
        </main>
      </div>

      {/* Next Project */}
      <FadeIn className="py-20 px-6 text-center border-t border-gray-100">
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">Next Project</p>
        <a href="/work/biovision" className="group inline-flex items-center gap-3 text-[28px] font-medium text-gray-900 hover:text-gray-400 transition-colors duration-200">
          BioVision
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </FadeIn>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/aispire" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              Previous Project
            </Link>
            <Link href="/work/biovision" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              Next Project
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a href="https://dribbble.com/rebecca-huang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/></svg>
              </a>
              <a href="mailto:qiongran.huang@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
              </a>
            </div>
            <p className="text-gray-600 text-sm">© 2024 Rebecca Huang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
