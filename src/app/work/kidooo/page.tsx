"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease }}
    >{children}</motion.div>
  );
}

const T = {
  h1:    "text-[48px] font-medium leading-tight tracking-tight",
  h2:    "text-[28px] font-medium leading-snug tracking-tight",
  label: "text-[11px] font-medium uppercase tracking-[0.1em]",
} as const;

const NAV_SECTIONS = [
  ["tldr", "TL;DR"],
  ["context", "Context"],
  ["research", "Research"],
  ["process", "Design Process"],
  ["outcome", "Outcome"],
  ["reflection", "Reflection"],
] as const;

const STATS = [
  { value: "0→1", label: "Full platform from scratch" },
  { value: "143", label: "Parents onboarded" },
  { value: "426", label: "Videos analyzed" },
];

function TimelineDiagram() {
  const ICON_SIZE = 52;
  const CIRCLE_CENTER = ICON_SIZE / 2; // 26px — used for line + dot vertical alignment

  function StepCol({ n, color, bg, icon, title, sub }: {
    n: string; color: string; bg: string;
    icon: React.ReactNode; title: string; sub: string;
  }) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 88 }}>
        <div style={{ position: "relative", marginBottom: 14 }}>
          <div style={{ width: ICON_SIZE, height: ICON_SIZE, borderRadius: "50%", background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
          <div style={{ position: "absolute", bottom: -5, left: "50%", transform: "translateX(-50%)", width: 18, height: 18, borderRadius: "50%", background: color, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontSize: 10, fontWeight: 700 }}>{n}</span>
          </div>
        </div>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#111827", textAlign: "center", lineHeight: 1.3, whiteSpace: "pre-line" }}>{title}</p>
        <p style={{ fontSize: 11, color: "#9ca3af", textAlign: "center", marginTop: 4, lineHeight: 1.4, whiteSpace: "pre-line" }}>{sub}</p>
      </div>
    );
  }

  const Dot = () => (
    <div style={{ flex: "1 1 0", display: "flex", alignItems: "flex-start", paddingTop: CIRCLE_CENTER - 3, zIndex: 1 }}>
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#d1d5db" }} />
      </div>
    </div>
  );

  return (
    <div style={{ background: "white", borderRadius: 20, padding: "44px 28px 36px", position: "relative", overflowX: "auto" }}>
      <div style={{ display: "flex", alignItems: "flex-start", minWidth: 620, position: "relative" }}>

        {/* Horizontal dashed connector line */}
        <div style={{
          position: "absolute",
          top: CIRCLE_CENTER,
          left: 44,
          right: 44,
          height: 0,
          borderTop: "1.5px dashed #d1d5db",
          zIndex: 0,
        }} />

        {/* Step 1 */}
        <StepCol n="1" color="#7C3AED" bg="rgba(124,58,237,0.1)"
          title={"Something feels\ndifferent"} sub={"Parent notices\na concern"}
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>}
        />
        <Dot />

        {/* Step 2 */}
        <StepCol n="2" color="#3B82F6" bg="rgba(59,130,246,0.1)"
          title="Seek evaluation" sub={"Referral made,\nwaitlist begins"}
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>}
        />
        <Dot />

        {/* WAITING PERIOD */}
        <div style={{
          flexShrink: 0,
          border: "1.5px dashed #E07B4F",
          borderRadius: 16,
          background: "#FFF8F4",
          padding: "18px 18px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          width: 150,
          zIndex: 2,
          position: "relative",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E07B4F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
          </svg>
          <p style={{ fontSize: 9, fontWeight: 700, color: "#E07B4F", letterSpacing: "0.1em", textTransform: "uppercase" }}>Waiting Period</p>
          <p style={{ fontSize: 14, fontWeight: 800, color: "#111827", textAlign: "center", lineHeight: 1.3 }}>4+ months<br/>on average</p>
          <div style={{ width: "80%", height: 1, background: "rgba(224,123,79,0.25)" }} />
          <p style={{ fontSize: 12, color: "#9ca3af", textAlign: "center", lineHeight: 1.5 }}>No guidance. No tools.<br/>Just waiting.</p>
        </div>
        <Dot />

        {/* Step 3 */}
        <StepCol n="3" color="#10B981" bg="rgba(16,185,129,0.1)"
          title={"Evaluation\nappointment"} sub={"Assessment\nbegins"}
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/></svg>}
        />
        <Dot />

        {/* Step 4 */}
        <StepCol n="4" color="#F59E0B" bg="rgba(245,158,11,0.1)"
          title={"Diagnosis\nreceived"} sub={"Answers and\nnext steps"}
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>}
        />
        <Dot />

        {/* Step 5 */}
        <StepCol n="5" color="#7C3AED" bg="rgba(124,58,237,0.1)"
          title="Ongoing support" sub={"Long-term\nmanagement"}
          icon={<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>}
        />
      </div>

      {/* Kidooo card, centered below waiting period */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 18 }}>
        <div style={{ width: 0, height: 28, borderLeft: "1.5px dashed #E07B4F" }} />
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#E07B4F", marginTop: -4 }} />
        <div style={{
          marginTop: 6,
          background: "#1C2333",
          borderRadius: 14,
          padding: "14px 28px",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}>
          <div style={{ fontSize: 26, lineHeight: 1 }}>👨‍👩‍👧</div>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: 15, marginBottom: 5 }}>Kidooo operates here</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {["Understand", "Organize", "Act"].map((t, i) => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {i > 0 && <span style={{ color: "#E07B4F", fontSize: 8 }}>●</span>}
                  <span style={{ color: "#9ca3af", fontSize: 12 }}>{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function KidoooCaseStudy() {
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
    <div className="font-sans" style={{ background: "#faf9f7" }}>

      {/* Left sidebar nav */}
      <nav className="fixed top-1/2 -translate-y-1/2 z-50 hidden lg:block" style={{ left: "calc(50% - 680px)" }}>
        <ul className="flex flex-col gap-1">
          {NAV_SECTIONS.map(([id, label]) => (
            <li key={id}>
              <span
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="flex items-center gap-2 py-1 cursor-pointer transition-all duration-200"
                style={{ color: activeSection === id ? "#1f2937" : "#9ca3af" }}
              >
                <span style={{
                  width: activeSection === id ? 20 : 8,
                  height: 1.5,
                  background: activeSection === id ? "#E07B4F" : "#d1d5db",
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
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="flex flex-wrap gap-3 mb-6">
              {["Product Design", "AI / Child Development", "Early-stage Startup"].map(t => (
                <span key={t} className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[13px] font-medium border border-orange-100">{t}</span>
              ))}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08, ease }}
              className={`${T.h1} text-gray-900 mb-4`}>Kidooo AI</motion.h1>

            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease }}
              className="flex flex-wrap gap-6 text-base text-gray-600 mb-10">
              <span><strong>Role:</strong> UX Designer</span>
              <span><strong>Stage:</strong> Early-stage startup · 0→1</span>
            </motion.div>

            {/* Hero cover placeholder */}
            <motion.div initial={{ opacity: 0, scale: 0.97, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.28, ease }}>
              <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center" style={{
                height: 480,
                background: "linear-gradient(135deg, #FFF3EC 0%, #FFE8D6 40%, #FFDBB8 100%)",
                border: "1px solid rgba(224,123,79,0.15)",
              }}>
                <div className="text-center">
                  <div className="text-[64px] mb-4">🧒</div>
                  <p className="text-orange-400 text-[15px] font-medium">Hero screenshot coming soon</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* ── TL;DR ── */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-100">

            <FadeIn><h2 className={`${T.h2} text-gray-900 mb-10`}>TL;DR</h2></FadeIn>

            {/* Hero quote */}
            <FadeIn delay={0.05}>
              <blockquote className="mb-10 pl-5 border-l-2 border-orange-300">
                <p className="text-[20px] leading-relaxed text-gray-800 italic font-medium">
                  &ldquo;Parents know their child best — they just don&apos;t have the tools to make sense of what they&apos;re seeing.&rdquo;
                </p>
              </blockquote>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Problem */}
              <FadeIn delay={0.08}>
                <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>Problem</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Parents observe their children every day but can&apos;t translate what they see into actionable understanding — especially when navigating developmental concerns without professional support.
                  </p>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn delay={0.12}>
                <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>Solution</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Kidooo is an AI platform that analyzes child behavior videos uploaded by parents, generates personalized reports, and delivers actionable recommendations.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Role + Impact stats */}
            <FadeIn delay={0.16}>
              <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p className={`${T.label} text-orange-500 mb-4`}>Role + Impact</p>
                <p className="text-[14px] text-gray-500 mb-6">UX Designer at early-stage startup</p>
                <div className="grid grid-cols-3 gap-6">
                  {STATS.map(({ value, label }) => (
                    <div key={label}>
                      <p className="text-[32px] font-semibold text-gray-900 leading-none mb-1">{value}</p>
                      <p className="text-[13px] text-gray-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </section>

          {/* ── CONTEXT ── */}
          <section id="context" className="px-6 py-16 border-t border-gray-100">
            <FadeIn>
              <h2 className={`${T.h2} text-gray-900 mb-2`}>Context</h2>
              <p className="text-[17px] text-gray-500 italic mb-10">&ldquo;While families wait for answers, children keep growing&rdquo;</p>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <FadeIn delay={0.06}>
                <div className="rounded-2xl p-6 h-full" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>The Problem Space</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Families with developmental concerns face long diagnostic wait times — nearly two-thirds of US autism diagnostic centers report waits longer than 4 months. During this time, parents are left to navigate alone, without guidance or structured tools.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-2xl p-6 h-full" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>The Opportunity</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Kidooo fills the gap between &ldquo;something feels different&rdquo; and &ldquo;we have answers&rdquo; — giving parents a structured way to observe, understand, and act on their child&apos;s behavior in real time.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Timeline diagram */}
            <FadeIn delay={0.14}>
              <Image src="/kd1.png" alt="Kidooo timeline — where the product operates" width={2073} height={758} unoptimized className="w-full h-auto rounded-2xl" />
            </FadeIn>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="px-6 py-16 border-t border-gray-100">
            <FadeIn>
              <h2 className={`${T.h2} text-gray-900 mb-2`}>Research</h2>
              <p className="text-[17px] text-gray-500 italic mb-10">&ldquo;What parents actually needed&rdquo;</p>
            </FadeIn>

            {/* Key insight */}
            <FadeIn delay={0.05}>
              <blockquote className="mb-10 pl-5 border-l-2 border-orange-300">
                <p className="text-[18px] leading-relaxed text-gray-800 italic font-medium">
                  Key Insight: Parents don&apos;t need more information — they need help making sense of the information they already have.
                </p>
              </blockquote>
            </FadeIn>

            {/* User interviews */}
            <FadeIn delay={0.08}>
              <div className="rounded-2xl p-6 mb-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p className={`${T.label} text-orange-500 mb-3`}>User Interviews + Demo Sessions</p>
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  Ran live demo sessions with <strong>38 parents</strong>. Their questions revealed two things: what they wanted from the product, and what made them hesitant to trust an AI with their child.
                </p>
              </div>
            </FadeIn>

            {/* Image placeholders row */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <FadeIn delay={0.1}>
                <div className="rounded-xl flex items-center justify-center text-center" style={{ background: "#ede8e2", border: "1.5px dashed #c9bfb3", minHeight: 160 }}>
                  <p className="text-[13px] text-gray-400 px-4">38-person Demo Session screenshot</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.12}>
                <div className="rounded-xl flex items-center justify-center text-center" style={{ background: "#ede8e2", border: "1.5px dashed #c9bfb3", minHeight: 160 }}>
                  <p className="text-[13px] text-gray-400 px-4">User questions — Zoom chat screenshot</p>
                </div>
              </FadeIn>
            </div>

            {/* What we heard */}
            <FadeIn delay={0.13}>
              <div className="rounded-2xl p-6 mb-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p className={`${T.label} text-orange-500 mb-4`}>What We Heard</p>
                <div className="flex flex-col gap-3">
                  {[
                    '"How do you verify your AI\'s accuracy?"',
                    '"What if the AI infers something wrong about my child?"',
                    '"I used it for 5–10 min but didn\'t understand why Upload Video was in the center."',
                  ].map((q) => (
                    <div key={q} className="flex gap-3 items-start">
                      <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <p className="text-[15px] text-gray-700 leading-relaxed">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Two user segments */}
            <FadeIn delay={0.16}>
              <div className="rounded-2xl p-6 mb-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                <p className={`${T.label} text-orange-500 mb-5`}>Two User Segments</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-xl p-5" style={{ background: "rgba(224,123,79,0.1)", border: "1px solid rgba(224,123,79,0.2)" }}>
                    <p className="text-[13px] font-semibold text-orange-600 mb-2">Segment A</p>
                    <p className="text-[14px] font-medium text-gray-800 mb-1">High-concern, not yet diagnosed</p>
                    <p className="text-[13px] text-gray-600 leading-relaxed">Need practical support during the waiting period</p>
                  </div>
                  <div className="rounded-xl p-5" style={{ background: "rgba(224,123,79,0.06)", border: "1px solid rgba(224,123,79,0.15)" }}>
                    <p className="text-[13px] font-semibold text-orange-600 mb-2">Segment B</p>
                    <p className="text-[14px] font-medium text-gray-800 mb-1">Recently diagnosed</p>
                    <p className="text-[13px] text-gray-600 leading-relaxed">Need structured guidance for managing behavior and routines now</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Segment comparison placeholder */}
            <FadeIn delay={0.18}>
              <div className="rounded-xl flex items-center justify-center text-center" style={{ background: "#ede8e2", border: "1.5px dashed #c9bfb3", minHeight: 140 }}>
                <p className="text-[13px] text-gray-400 px-4">Segment A vs B comparison card</p>
              </div>
            </FadeIn>
          </section>

          {/* ── DESIGN PROCESS ── */}
          <section id="process" className="px-6 py-16 border-t border-gray-100">
            <FadeIn>
              <h2 className={`${T.h2} text-gray-900 mb-2`}>Design Process</h2>
              <p className="text-[17px] text-gray-500 italic mb-8">&ldquo;From video upload to actionable insight&rdquo;</p>
            </FadeIn>

            {/* Core workflow */}
            <FadeIn delay={0.05}>
              <div className="rounded-2xl px-6 py-4 mb-10 flex items-center gap-3 flex-wrap" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                <span className="text-[15px] font-semibold italic text-gray-700">Core workflow:</span>
                {["Upload", "Analyze", "Report", "Act"].map((step, i, arr) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="text-[15px] font-semibold text-orange-600">{step}</span>
                    {i < arr.length - 1 && <span className="text-orange-300 font-light">→</span>}
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {[
                {
                  n: "01",
                  title: "Video Upload",
                  body: "User feedback told us the upload CTA was confusing without context. Iterated from a standalone upload button to a guided flow that explains what Kidooo analyzes before asking parents to upload.",
                  placeholder: "V1 screenshot + Final screenshot (before / after)",
                },
                {
                  n: "02",
                  title: "AI Report",
                  body: "Designed a three-layer report structure: Observations (what AI saw) → Patterns (what it might mean) → Key Actions (what parents can do). Language calibrated for non-clinical audiences.",
                  placeholder: "Report page screenshot",
                },
                {
                  n: "03",
                  title: "Recommendations",
                  body: 'Each recommendation includes: what to practice, a specific suggested tweak, and why it helps. Designed for 5-minute windows — the realistic time constraint for parents of young children.',
                  placeholder: '"Key Actions You Can Take" screenshot',
                },
                {
                  n: "04",
                  title: "Chatbot",
                  body: "After reading the report, parents have follow-up questions the report didn't anticipate. The chatbot extends the report into a personalized conversation.",
                  placeholder: "Chatbot UI screenshot",
                },
              ].map(({ n, title, body, placeholder }, i) => (
                <FadeIn key={n} delay={0.06 + i * 0.07}>
                  <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                    <div className="flex items-baseline gap-3 mb-3">
                      <span className="text-[11px] font-semibold text-orange-400 tabular-nums">{n}</span>
                      <h3 className="text-[17px] font-semibold text-gray-900">{title}</h3>
                    </div>
                    <p className="text-[15px] text-gray-700 leading-relaxed mb-5">{body}</p>
                    <div className="rounded-xl flex items-center justify-center text-center" style={{ background: "#ede8e2", border: "1.5px dashed #c9bfb3", minHeight: 140 }}>
                      <p className="text-[13px] text-gray-400 px-4">{placeholder}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>

          {/* ── OUTCOME ── */}
          <section id="outcome" className="px-6 py-16 border-t border-gray-100">
            <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>Outcome</h2></FadeIn>
            <FadeIn delay={0.06}>
              <div className="rounded-2xl p-10 flex items-center justify-center text-center" style={{ background: "#f5f0eb", minHeight: 240 }}>
                <p className="text-gray-400 text-[15px]">Content coming soon</p>
              </div>
            </FadeIn>
          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-100">
            <FadeIn>
              <h2 className={`${T.h2} text-gray-900 mb-2`}>Reflection</h2>
              <p className="text-[17px] text-gray-500 italic mb-10">&ldquo;What building for vulnerable users taught me&rdquo;</p>
            </FadeIn>

            <div className="flex flex-col gap-6 mb-8">
              <FadeIn delay={0.06}>
                <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>Trust is a Design Problem</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    When users are parents of vulnerable children, every word carries weight. We learned that trust isn&apos;t built through disclaimers — it&apos;s built through honest language, transparent AI reasoning, and giving users control over how they interpret outputs.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-2xl p-6" style={{ background: "#f5f0eb", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <p className={`${T.label} text-orange-500 mb-3`}>What I&apos;d Do Differently</p>
                  <p className="text-[15px] text-gray-700 leading-relaxed">
                    Earlier dedicated usability testing with recently-diagnosed families specifically. Their mental models and emotional state differ enough from other parents that they deserved their own research track from day one.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Proof of traction */}
            <FadeIn delay={0.14}>
              <div className="rounded-xl flex items-center justify-center text-center" style={{ background: "#ede8e2", border: "1.5px dashed #c9bfb3", minHeight: 160 }}>
                <p className="text-[13px] text-gray-400 px-4">Admin Dashboard screenshot — proof of traction: 143 users, 426 videos</p>
              </div>
            </FadeIn>
          </section>

          <div className="h-32" />
        </main>
      </div>
    </div>
  );
}
