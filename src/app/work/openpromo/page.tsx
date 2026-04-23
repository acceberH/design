"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  h1:    "text-[48px] font-semibold leading-tight tracking-tight",
  h2:    "text-[28px] font-medium leading-snug tracking-tight",
  h3:    "text-[16px] font-medium leading-snug",
  label: "text-[11px] font-normal uppercase tracking-[0.1em]",
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

function VersionStack({
  id, title, versions,
}: {
  id?: string;
  title: string;
  versions: { label: string; isLast?: boolean; content: React.ReactNode }[];
}) {
  return (
    <div id={id}>
      <h3 className={`${T.h3} text-gray-900 mb-6`}>{title}</h3>
      <div className="flex flex-col gap-4">
        {versions.map((v, i) => (
          <ImageReveal key={i} delay={i * 0.06}>
            <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 6px rgba(0,0,0,0.06)" }}>
              <div className="flex items-center gap-2 px-5 py-2.5 border-b border-gray-100 bg-gray-50/60">
                <span className={`text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full ${
                  v.isLast ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-500"
                }`}>{v.label}</span>
              </div>
              <div className="p-5 md:p-6">{v.content}</div>
            </div>
          </ImageReveal>
        ))}
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

      {/* Bottom-left floating nav */}
      <nav className="fixed bottom-6 left-6 z-50 hidden lg:block">
        <ul className="flex flex-col gap-0.5">
          {NAV_SECTIONS.map(([id, label]) => (
            <li key={id}>
              <span
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                className="block px-1 py-1 text-xs font-medium cursor-pointer transition-all duration-200"
                style={{
                  color: activeSection === id ? "#111" : "#9ca3af",
                  fontWeight: activeSection === id ? 700 : 400,
                }}
              >{label}</span>
            </li>
          ))}
        </ul>
      </nav>

      <div className="max-w-7xl mx-auto">
        <main id="main-content">

          {/* ── HERO ── */}
          <section id="hero" className="px-6 py-16">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
              {/* Full image */}
              <motion.img
                src="/openpromo_demo.gif" alt="OpenPromo dashboard demo"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.75, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
              />
              {/* Text overlay */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-8"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.0) 100%)" }}
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {["Product Design","UX Research","B2B","Social Media Tech"].map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}>{t}</span>
                  ))}
                </div>
                <h1 className={`${T.h1} text-white mb-2`}>OpenPromo</h1>
                <div className="flex flex-wrap gap-4 text-sm text-white/70">
                  <span>UX Designer, Researcher</span>
                  <span>·</span>
                  <span>7 months</span>
                </div>
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
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Problem</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">Small businesses are creating content constantly, but without strategic direction — they don&apos;t know what to create, when to post, or whether any of it is working.</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.12}>
                  <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Solution</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">An AI-powered growth platform that helps small businesses create promotional content, manage social accounts, and learn from competitors in one place.</p>
                  </div>
                </FadeIn>
              </div>
              <FadeIn delay={0.1} className="mt-8">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-4">Impact</p>
                <div className="border-t border-gray-200 pt-6 grid grid-cols-3">
                  {[
                    { stat: "0→1",  desc: "Product built from scratch" },
                    { stat: "3×",   desc: "Faster ad creation workflow" },
                    { stat: "70%",  desc: "Faster cross-platform publishing" },
                  ].map((item, i) => (
                    <div key={i} className={`pr-8 ${i > 0 ? "pl-8 border-l border-gray-200" : ""}`}>
                      <p className="text-[42px] font-bold text-gray-900 leading-none mb-3">{item.stat}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
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
                      <p className="text-sm text-gray-600 italic">Competitive landscape showing gaps in AI-driven growth features.</p>
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
                <FadeIn delay={0.05}><p className="text-base text-gray-700">I interviewed small business owners to understand their daily social media workflow and marketing challenges. <strong>What I found contradicted my starting assumption entirely.</strong></p></FadeIn>
                <FadeIn delay={0.1}>
                  <div className="flex items-start gap-4 py-6 border-t border-b border-gray-200">
                    <Image src="/openpromo_confused.png" alt="Interview illustration" width={180} height={180} className="w-12 h-12 flex-shrink-0 mt-1" />
                    <p className="text-2xl font-medium text-gray-800 leading-snug tracking-tight">&ldquo;We spend hours making posts, but we don&apos;t know if any of it is actually working.&rdquo;</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.05}><p className="text-base text-gray-600 leading-relaxed">Most businesses spend significant time producing content but struggle to determine what content actually drives growth.</p></FadeIn>
                <div>
                  <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-4`}>Research Insights</p></FadeIn>
                  <div className="border-t border-gray-200">
                    {[["73%","of small businesses are not confident their marketing strategy is working."],["56%","of SMBs spend one hour or less per day on marketing."],["54%","of SMBs struggle to produce content consistently."]].map(([stat,desc],i) => (
                      <StatRow key={stat} index={i}>
                        <div className="py-5 border-b border-gray-200 grid grid-cols-[100px_1fr] md:grid-cols-[140px_1fr] items-start gap-4">
                          <p className="text-2xl font-bold text-gray-900">{stat}</p>
                          <p className="text-base text-gray-600 leading-relaxed pt-1">{desc}</p>
                        </div>
                      </StatRow>
                    ))}
                  </div>
                </div>

                {/* Key Insight — climax callout */}
                <FadeIn delay={0.08}>
                  <div className="rounded-2xl bg-gray-900 px-8 py-10 md:px-12 md:py-12">
                    <p className={`${T.label} text-gray-500 mb-4`}>Key Insight</p>
                    <p className="text-[26px] md:text-[32px] font-semibold text-white leading-snug tracking-tight">
                      The real bottleneck isn&apos;t tools — it&apos;s <span style={{ color: "#6ee7b7" }}>decisions</span>.
                    </p>
                    <p className="text-base text-gray-400 mt-5 leading-relaxed max-w-2xl">
                      Small businesses aren&apos;t failing to create content. They&apos;re failing to decide <em>what</em> to create, <em>when</em> to post it, and whether any of it is working. This single insight shifted the entire product direction.
                    </p>
                  </div>
                </FadeIn>

                <div className="grid grid-cols-[78px_1fr] md:grid-cols-[110px_1fr] items-center gap-3 md:gap-5 pt-2">
                  <ImageReveal>
                    <Image src="/filegpt_ideas.svg" alt="Design opportunity" width={220} height={220} className="w-16 md:w-24 h-auto object-contain" />
                  </ImageReveal>
                  <FadeIn delay={0.1}>
                    <p className="text-base text-gray-800 leading-relaxed font-medium">
                      <span className="text-gray-700">Design Opportunity:</span> How might we help small businesses decide what content to create next using signals from competitors, performance analytics, and emerging trends?
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
                <FadeIn><p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Problem Framing</p></FadeIn>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <FadeIn delay={0.05}><p>When I first joined OpenPromo, my assumption was straightforward: <strong>small businesses need better content creation tools.</strong> Specifically, I believed AI video generation would be the highest-value feature — if we could help them produce professional video ads without a production team, that would remove the biggest barrier.</p></FadeIn>
                  <FadeIn delay={0.1}><p className="font-semibold text-gray-900">This assumption was wrong.</p></FadeIn>
                  <FadeIn delay={0.15}><p>Through user interviews, a different picture emerged. Small businesses weren&apos;t struggling to create content — many were already posting every day. <strong>The real problem was that they had no idea whether any of it was working, or what to create next.</strong> The bottleneck wasn&apos;t production. It was decision-making.</p></FadeIn>
                  <FadeIn delay={0.2}><p>This shifted the entire product direction: from a content creation tool to a growth intelligence platform. <strong>I drove this pivot</strong> — AI generation stayed, but as one part of a larger system designed to answer a harder question: what should I create next, and why?</p></FadeIn>
                </div>
                <ImageReveal delay={0.1} className="mt-8 rounded-2xl overflow-hidden border border-gray-100">
                  <img src="/user_journey.svg" alt="User journey map" className="w-full max-w-[80%] mx-auto block" />
                </ImageReveal>
              </div>

              {/* ── FEATURE 1: Instant Ad ── */}
              <VersionStack
                id="solution-one"
                title="From brief to live ad in under 5 minutes"
                versions={[
                  {
                    label: "V1",
                    content: (
                      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-0 items-stretch rounded-xl border border-gray-200 overflow-hidden">
                        <Image src="/opwireframe1.png?v=2" alt="Wireframe V1" width={420} height={300} className="w-[115%] h-auto border-r border-gray-200" />
                        <div className="p-6 bg-gray-50 flex flex-col gap-5">
                          <div>
                            <p className={`${T.label} text-[#fca5a5] mb-2`}>Problem</p>
                            <p className={`${T.label} text-gray-400 mb-1`}>Context</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Instant Ad is a standalone workspace accessible from the left menu bar. Users go there first, then switch to Create Post to publish.</p>
                          </div>
                          <div>
                            <p className={`${T.label} text-[#fca5a5] mb-1`}>Fragmented</p>
                            <p className="text-sm text-gray-700 leading-relaxed">Users move back and forth between two separate areas to complete one task.</p>
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "V2",
                    content: (
                      <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                        <Image src="/opwireframe2.png" alt="Wireframe V2" width={1332} height={1250} unoptimized sizes="(max-width: 1024px) 96vw, 666px" className="w-full h-auto rounded-xl shadow-lg" />
                        <div>
                          <p className="text-base text-gray-700 leading-relaxed">We considered a modal or drawer. We chose tabs — tabs keep both creation modes equally visible with the lowest switching cost. A step-by-step wizard was also explored but dropped: ad creation is non-linear, so a single-page layout lets users revise any step at any time.</p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Final Design",
                    isLast: true,
                    content: (
                      <Image src="/opinstantad1.png" alt="Final instant ad" width={1332} height={1250} unoptimized className="w-full max-w-[640px] h-auto rounded-xl shadow-lg mx-auto" />
                    ),
                  },
                ]}
              />

              {/* ── FEATURE 2: Competitor Tracking ── */}
              <div className="mt-16">
                <VersionStack
                  id="solution-three"
                  title="Learning from competitors, not just watching them"
                  versions={[
                    {
                      label: "V1",
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                          <div className="w-full overflow-hidden rounded-xl border border-gray-200">
                            <Image src="/trackingv1.png" alt="Tracking V1" width={1200} height={760} unoptimized sizes="(max-width: 1024px) 96vw, 900px" className="block w-full h-auto" />
                          </div>
                          <div>
                            <p className="text-base text-gray-700 leading-relaxed mb-3"><span className="font-semibold">Design Goal:</span> Solve the most basic question — can users see what competitors are posting?</p>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Features</p>
                            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700"><li>Add competitor accounts</li><li>View latest posts</li></ul>
                            <p className="text-sm font-semibold text-[#fca5a5] mt-4 mb-2">Limitations</p>
                            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700"><li>View-only</li><li>Trend judgment fully manual</li></ul>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "V2",
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                          <Image src="/trackingv3.png" alt="Tracking V2" width={1200} height={760} unoptimized sizes="(max-width: 1024px) 96vw, 900px" className="w-full h-auto rounded-xl border border-gray-200" />
                          <div>
                            <p className="text-base text-gray-700 leading-relaxed mb-3"><span className="font-semibold">Added basic analytics.</span> Goal shifted from viewing content to understanding performance.</p>
                            <p className="text-sm font-semibold text-gray-600 mb-2">Users can</p>
                            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700"><li>Identify top-performing posts</li><li>Find high-engagement content</li></ul>
                            <p className="text-sm font-semibold text-[#fca5a5] mt-4 mb-2">Still no actionable insights</p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "V3",
                      content: (
                        <div className="space-y-4">
                          <p className="text-base text-gray-700 leading-relaxed"><span className="font-semibold">Design Goal:</span> Let the system automatically tell users what&apos;s happening. Added an <span className="font-semibold">Anomalies</span> tab — a dedicated tab (vs. filter) because anomalies are proactive signals, not passive discovery.</p>
                          <Image src="/trackingv4.png?v=2" alt="Tracking V3" width={1200} height={760} unoptimized sizes="(max-width: 1024px) 96vw, 1200px" className="w-full h-auto rounded-xl border border-gray-200" />
                        </div>
                      ),
                    },
                    {
                      label: "Final Design",
                      isLast: true,
                      content: (
                        <div className="space-y-4">
                          <Image src="/trackingdemo.gif" alt="Tracking final" width={960} height={553} unoptimized className="w-full max-w-[900px] h-auto rounded-xl border border-gray-200" />
                          <p className="text-base text-gray-700 leading-relaxed">Growth comes from learning what competitors are doing right and responding faster. This feature helps businesses track competitor profiles, post performance, and viral content patterns to guide smarter content decisions.</p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>

              {/* ── FEATURE 3: Performance Analytics ── */}
              <div className="mt-16">
                <VersionStack
                  id="performance-analytics"
                  title="Data that tells you what to do next, not just what happened"
                  versions={[
                    {
                      label: "V1",
                      content: (
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-[#fca5a5]">Problem</p>
                          <p className="text-base text-gray-700 leading-relaxed">Users see Impressions increased by xx%, but don&apos;t know why or what to do next. The data is there, but the insight is missing.</p>
                          <Image src="/performancev1.png?v=2" alt="Performance V1" width={1400} height={900} className="w-full max-w-[900px] h-auto rounded-xl border border-gray-200" />
                        </div>
                      ),
                    },
                    {
                      label: "V2",
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 items-start">
                          <Image src="/performancev2.png?v=2" alt="Performance V2" width={1400} height={900} className="w-full h-auto rounded-xl border border-gray-200" />
                          <div>
                            <p className="text-base text-gray-700 leading-relaxed mt-1">Added Top Content and Content Type. But after reviewing data, users must manually switch to Create Post or Create Ad — completely disconnected.</p>
                            <p className="text-base text-[#fca5a5] font-semibold mt-3">Problem</p>
                            <p className="text-base text-gray-700">Disconnect between data and action. The system still doesn&apos;t say: &ldquo;This is what you should do now.&rdquo;</p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "V3",
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-5 items-start">
                          <Image src="/performancev3.png" alt="Performance V3" width={1400} height={900} className="w-full max-w-[450px] h-auto rounded-xl border border-gray-200" />
                          <div>
                            <p className="text-base text-gray-700 leading-relaxed mt-1">Added AI Recommendations, Goal Progress, and a bottom CTA. The system proactively tells users:</p>
                            <ul className="list-disc pl-5 space-y-1 text-base text-gray-700 mt-2">
                              <li>High Priority: Create a &quot;3 Steps to...&quot; video</li>
                              <li>Trending: Use the &quot;Nobody talks about...&quot; hook</li>
                              <li>Opportunity: Post BTS content Thursday 6-8 PM</li>
                            </ul>
                            <p className={`${T.label} text-[#0f172a] mt-3 mb-2`}>Reason</p>
                            <p className="text-base text-gray-700">AI Recommendations sit at the top of Performance so &ldquo;what to do next&rdquo; is prioritized over &ldquo;what the numbers are.&rdquo;</p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "Final Design",
                      isLast: true,
                      content: (
                        <Image src="/performance_final_design.gif" alt="Performance final" width={960} height={553} unoptimized className="w-full max-w-[900px] h-auto rounded-xl border border-gray-200" />
                      ),
                    },
                  ]}
                />
              </div>

            </div>
          </section>

          {/* ── FINAL DESIGN ── */}
          <section id="final-design" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><p className={`${T.label} text-[#2D7D7D] mb-3`}>Final Design</p></FadeIn>
              <FadeIn delay={0.04}><h2 className={`${T.h2} text-gray-900 mb-4`}>Three features. One system.</h2></FadeIn>
              <FadeIn delay={0.08}><p className="text-base text-gray-600 mb-14 max-w-2xl">I designed three interconnected features that move OpenPromo from a content tool to a growth intelligence platform — each one informed by the decision-making bottleneck I uncovered in research.</p></FadeIn>

              <div className="space-y-16">
                {/* 01 Instant Ad */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">01 — Instant Ad</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-5">From brief to live ad in under 5 minutes</h3>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <Image src="/opinstantad1.png" alt="Instant Ad final design" width={1332} height={1250} unoptimized className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">Unified ad creation and publishing in a single tabbed workspace — eliminating the back-and-forth between two separate screens. <strong>Result: 3× faster ad creation workflow.</strong></p>
                  </div>
                </ImageReveal>

                {/* 02 Competitor Tracking */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">02 — Competitor Tracking</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-5">Learning from competitors, not just watching them</h3>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <img src="/trackingdemo.gif" alt="Competitor tracking final design" className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">Automatic anomaly detection surfaces competitor signals without manual review — the system tells users what&apos;s trending before they have to look for it.</p>
                  </div>
                </ImageReveal>

                {/* 03 Performance Analytics */}
                <ImageReveal delay={0.05}>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">03 — Performance Analytics</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-5">Data that tells you what to do next, not just what happened</h3>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                      <img src="/performance_final_design.gif" alt="Performance analytics final design" className="w-full h-auto" />
                    </div>
                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">AI Recommendations sit above the charts — &ldquo;what to do next&rdquo; is prioritized over &ldquo;what the numbers are.&rdquo; <strong>Result: 70% faster cross-platform publishing.</strong></p>
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
                <p className="text-lg text-gray-700 leading-relaxed">This project reinforced something I now carry into every engagement: <strong>the most valuable design work happens before the wireframes.</strong> I came in assuming we needed better creation tools. I left having redesigned the product&apos;s core premise. The research pivot I drove — from creation to intelligence — is what made the product worth building. As AI generation matures, the real differentiator isn&apos;t the content itself. It&apos;s the system that tells you what to create next. <strong>That&apos;s the problem I was most proud to have defined and solved.</strong></p>
              </FadeIn>
            </div>
          </section>
        </main>
      </div>

      {/* Next Project */}
      <FadeIn className="py-20 px-6 text-center border-t border-gray-100">
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">Next Project</p>
        <a href="/work/biovision" className="group inline-flex items-center gap-3 text-[28px] font-bold text-gray-900 hover:text-gray-400 transition-colors duration-200">
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
