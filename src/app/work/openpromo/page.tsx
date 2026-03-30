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

// Scroll-driven horizontal version slider
// Outer tall div creates scroll space; inner sticky div pins in viewport;
// motion track slides left as user scrolls down.
function VersionSlider({
  id, title, versions,
}: {
  id?: string;
  title: string;
  versions: { label: string; isLast?: boolean; content: React.ReactNode }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const count = versions.length;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Each card takes 100/count % of the track. To advance one card: move -(100/count)%.
  // To show last card: move -(count-1)/count * 100% of track.
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${((count - 1) / count) * 100}%`]
  );

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActiveIndex(Math.min(count - 1, Math.round(v * (count - 1))));
  });

  return (
    // Tall container — height drives the scroll budget
    <div ref={ref} id={id} style={{ height: `${count * 65}vh` }}>
      {/* Sticky wrapper — stays pinned while outer div scrolls past */}
      <div className="sticky" style={{ top: 80 }}>

        {/* Title + step indicator */}
        <div className="bg-gray-50 pb-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
          <div className="flex items-center gap-2">
            {versions.map((v, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`text-[12px] font-medium transition-colors duration-300 ${
                  i === activeIndex ? "text-gray-900" : "text-gray-300"
                }`}>{v.label}</span>
                {i < count - 1 && (
                  <span className={`text-[10px] transition-colors duration-300 ${
                    i < activeIndex ? "text-gray-400" : "text-gray-200"
                  }`}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal sliding track — overflow hidden clips cards off-screen */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ x, width: `${count * 100}%` }}
          >
            {versions.map((v, i) => (
              <div key={i} style={{ width: `${100 / count}%` }}>
                <div
                  className="bg-white rounded-2xl overflow-hidden"
                  style={{
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-center gap-2 px-5 py-2.5 border-b border-gray-100 bg-gray-50/60">
                    <span className={`text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded-full ${
                      v.isLast ? "bg-gray-900 text-white" : "bg-white border border-gray-200 text-gray-500"
                    }`}>{v.label}</span>
                  </div>
                  <div className="p-5 md:p-6">{v.content}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function OpenPromoCaseStudy() {
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    navLinks.forEach(link => {
      link.addEventListener("click", function(this: HTMLElement, e) {
        e.preventDefault();
        const targetSection = document.getElementById(this.getAttribute("data-section")!);
        if (targetSection) targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    function updateActiveNav() {
      let current = "";
      sections.forEach(section => {
        if (section.getBoundingClientRect().top <= 160) current = section.getAttribute("id") || "";
      });
      navLinks.forEach(link => {
        link.classList.remove("bg-gray-200", "text-primary");
        if (link.getAttribute("data-section") === current) link.classList.add("bg-gray-200", "text-primary");
      });
    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();
  }, []);

  return (
    <div className="bg-gray-50 font-sans">
      <div className="flex max-w-7xl mx-auto">

        {/* Left Navigation */}
        <aside id="left-nav" className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              {[["tldr","TL;DR"],["context","Context"],["research","Research"],["approach","Design Process"],["reflection","Reflection"]].map(([id,label]) => (
                <li key={id}><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section={id}>{label}</span></li>
              ))}
            </ul>
          </nav>
        </aside>

        <main id="main-content" className="flex-1 lg:ml-8">

          {/* ── HERO ── */}
          <section id="hero" className="px-6 py-16">
            <div className="max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className="flex flex-wrap gap-3 mb-6">
                {["Product Design","UX Research","B2B","Social Media Tech"].map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">{t}</span>
                ))}
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OpenPromo</motion.h1>
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease: [0.22,1,0.36,1] as [number,number,number,number] }}
                className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Company:</strong> OpenPromo</span>
                <span><strong>Role:</strong> UX Designer, Researcher</span>
                <span><strong>Duration:</strong> Ongoing</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.97, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease: [0.22,1,0.36,1] as [number,number,number,number] }}>
                <img className="w-full rounded-xl" src="/openpromo_demo.gif" alt="OpenPromo dashboard demo" />
              </motion.div>
            </div>
          </section>

          {/* ── TL;DR ── */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <FadeIn><h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2></FadeIn>
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
              <div className="mt-8">
                <FadeIn delay={0.05}><p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Impact</p></FadeIn>
                <div className="border-b border-gray-300">
                  {[["0→1","Designed a full-stack growth intelligence platform from scratch"],["3×","Faster ad creation workflow"],["70%","Faster cross-platform publishing"]].map(([stat,desc],i) => (
                    <StatRow key={stat} index={i}>
                      <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                        <p className="text-3xl font-bold text-gray-900">{stat}</p>
                        <p className="text-base text-[#334155] leading-relaxed">{desc}</p>
                      </div>
                    </StatRow>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── CONTEXT ── */}
          <section id="context" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <FadeIn><h2 className="text-3xl font-bold text-gray-900 mb-8">Small businesses are flying blind</h2></FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.05}><p className="text-base text-gray-600 leading-relaxed">Small businesses are outgunned. Enterprise brands have dedicated marketing teams, agency partnerships, and data analysts telling them exactly what content to create next. Small businesses have none of that — just a phone, a few hours a week, and a lot of guessing.</p></FadeIn>
                <FadeIn delay={0.1}><p className="text-base text-gray-600 leading-relaxed">The real cost isn&apos;t production — it&apos;s the hours spent deciding what to create, manually posting to eight platforms, and staring at analytics that don&apos;t tell you what to do next.</p></FadeIn>
                <ImageReveal delay={0.08}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <Image src="/b927e770173c1c8012e2191e2d7237bb.png" alt="Competitive analysis" width={5945} height={5314} unoptimized sizes="(max-width: 1024px) 86vw, 900px" className="w-full max-w-[450px] h-auto mx-auto" />
                    <div className="p-4">
                      <p className="text-sm text-gray-600 italic">Competitive landscape showing gaps in AI-driven growth features.</p>
                      <p className="text-base text-gray-700 leading-relaxed mt-4">This is the gap OpenPromo was designed to fill — the intelligence layer that SMBs have never had access to.</p>
                    </div>
                  </div>
                </ImageReveal>
              </div>
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <FadeIn><h2 className="text-3xl font-bold text-gray-900 mb-8">The real bottleneck isn&apos;t tools — it&apos;s decisions</h2></FadeIn>
              <div className="space-y-8">
                <FadeIn delay={0.05}><p className="text-base text-gray-700">I interviewed small business owners to understand their daily social media workflow and marketing challenges.</p></FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 items-start">
                  <ImageReveal>
                    <Image src="/openpromo_confused.png" alt="Interview illustration" width={180} height={180} className="w-36 h-auto" />
                  </ImageReveal>
                  <FadeIn delay={0.1}>
                    <p className="mt-2 text-lg text-gray-800 leading-relaxed border-l-2 border-gray-300 pl-4">&quot;We spend hours making posts, but we don&apos;t know if any of it is actually working.&quot;</p>
                  </FadeIn>
                </div>
                <FadeIn delay={0.05}><p className="text-base text-gray-600 leading-relaxed">Most businesses spend significant time producing content but struggle to determine what content actually drives growth.</p></FadeIn>
                <div>
                  <FadeIn><p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-4">Research Insights</p></FadeIn>
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
                <FadeIn delay={0.05}>
                  <div>
                    <h4 className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">Key Insight</h4>
                    <p className="text-base text-gray-600 leading-relaxed">The real bottleneck for small businesses is not content creation tools. It is <strong>decision-making</strong>.</p>
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
            <div className="max-w-4xl">
              <FadeIn><h2 className="text-3xl font-bold text-gray-900 mb-6">Design Process</h2></FadeIn>

              {/* Starting Assumption */}
              <div className="mb-20">
                <FadeIn><p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Starting Assumption</p></FadeIn>
                <div className="space-y-4 text-base text-gray-600 leading-relaxed">
                  <FadeIn delay={0.05}><p>When I first joined OpenPromo, my assumption was straightforward: small businesses need better content creation tools. Specifically, I believed AI video generation would be the highest-value feature — if we could help them produce professional video ads without a production team, that would remove the biggest barrier.</p></FadeIn>
                  <FadeIn delay={0.1}><p className="font-semibold text-gray-900">This assumption was wrong.</p></FadeIn>
                  <FadeIn delay={0.15}><p>Through user interviews, a different picture emerged. Small businesses weren&apos;t struggling to create content — many were already posting every day. The real problem was that they had no idea whether any of it was working, or what to create next. The bottleneck wasn&apos;t production. It was decision-making.</p></FadeIn>
                  <FadeIn delay={0.2}><p>This shifted the entire product direction: from a content creation tool to a growth intelligence platform. AI generation stayed — but as one part of a larger system designed to answer a harder question: what should I create next, and why?</p></FadeIn>
                </div>
                <ImageReveal delay={0.1} className="mt-8 rounded-2xl overflow-hidden border border-gray-100">
                  <img src="/user_journey.svg" alt="User journey map" className="w-full" />
                </ImageReveal>
              </div>

              {/* ── FEATURE 1: Instant Ad ── */}
              <VersionSlider
                id="solution-one"
                title="From brief to live ad in under 5 minutes"
                versions={[
                  {
                    label: "V1",
                    content: (
                      <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                        <Image src="/opwireframe1.png?v=2" alt="Wireframe V1" width={420} height={300} className="w-full h-auto rounded-xl border border-gray-200" />
                        <div>
                          <p className="text-base text-gray-700 leading-relaxed">Instant Ad is a standalone workspace accessible from the left menu bar. Users go there first, then switch to Create Post to publish.</p>
                          <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-[#fca5a5] mt-4 mb-2">Problem</h5>
                          <p className="text-base text-gray-700 leading-relaxed">The workflow is fragmented. Users move back and forth between two separate areas to complete one task.</p>
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
                      <Image src="/opinstantad1.png" alt="Final instant ad" width={1332} height={1250} unoptimized sizes="(max-width: 1024px) 96vw, 1200px" className="w-full h-auto rounded-xl shadow-lg" />
                    ),
                  },
                ]}
              />

              {/* ── FEATURE 2: Competitor Tracking ── */}
              <div className="mt-32">
                <VersionSlider
                  id="solution-three"
                  title="Learning from competitors, not just watching them"
                  versions={[
                    {
                      label: "V1",
                      content: (
                        <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                          <div className="w-full overflow-hidden rounded-xl border border-gray-200">
                            <Image src="/trackingv1.png" alt="Tracking V1" width={1200} height={760} unoptimized sizes="(max-width: 1024px) 96vw, 900px" className="block w-[165%] max-w-none h-auto" />
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
              <div className="mt-32">
                <VersionSlider
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
                          <Image src="/performancev2.png?v=2" alt="Performance V2" width={1400} height={900} className="w-full max-w-[450px] h-auto rounded-xl border border-gray-200" />
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
                            <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mt-3 mb-2">Reason</p>
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

          {/* ── REFLECTION ── */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <FadeIn><h2 className="text-3xl font-bold text-gray-900 mb-8">AI doesn&apos;t replace strategy — it enables it</h2></FadeIn>
              <FadeIn delay={0.08}>
                <p className="text-lg text-gray-700 leading-relaxed">This project highlighted how generative AI is reshaping marketing workflows. Small businesses traditionally rely on agencies to produce advertising content, which is both expensive and slow. As AI generation tools mature, the barrier to creating promotional content is rapidly decreasing. However, AI alone does not solve the problem. The real opportunity lies in integrating AI into the full promotion workflow — from content creation to publishing and competitive insights. I believe future marketing platforms will evolve from simple management dashboards into growth intelligence systems that help businesses understand what content to create next.</p>
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
