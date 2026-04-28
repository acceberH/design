"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

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

function ImageReveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, scale: 0.98, y: 18 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
    >{children}</motion.div>
  );
}

// ── Typography scale ──────────────────────────────────────────
const T = {
  h1:    "text-[48px] font-semibold leading-tight tracking-tight",   // project name
  h2:    "text-[28px] font-medium leading-snug tracking-tight",      // section titles
  h3:    "text-[16px] font-medium leading-snug",                     // subsection titles
  label: "text-[11px] font-normal uppercase tracking-[0.1em]",      // TL;DR / PROBLEM / IMPACT
} as const;
// ─────────────────────────────────────────────────────────────

function StatRow({ children, index }: { children: React.ReactNode; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1, ease }}
    >{children}</motion.div>
  );
}

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

const OUTCOME_ITEMS = [
  { n: "01", title: "Beaver and Species Identification", src: "/biovisiondemo1.mov" },
  { n: "02", title: "AI Chatbot", src: "/biovisiondemo2.mov" },
  { n: "03", title: "History", src: "/biovisiondemo3.mov" },
  { n: "04", title: "Manual Review & CSV Export", src: "/biovisiondemo4.mov" },
];


const NAV_SECTIONS = [
  ["tldr","TL;DR"],["outcome","Outcome"],["context","Context"],
  ["research","Research"],["approach","Design Process"],["reflection","Reflection"],
] as const;

export default function BioVisionCaseStudy() {
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

      <div className="max-w-[960px] mx-auto">
        <main id="main-content">

          {/* ── HERO ── */}
          <section id="hero" className="px-6 py-16">
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease }}
                className="flex flex-wrap gap-3 mb-6">
                {["Product Design","AI/ML","Wildlife Research"].map(t => (
                  <span key={t} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">{t}</span>
                ))}
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.08, ease }}
                className={`${T.h1} text-gray-900 mb-4`}>BioVision</motion.h1>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18, ease }}
                className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Role:</strong> Product Designer & Engineer (Full-stack)</span>
                <span><strong>Duration:</strong> 6 Months</span>
                <span><strong>Sponsor:</strong> AWS · Washington Department of Wildlife</span>
                <span><strong>Team:</strong> Steven Liang · Sherry Wang</span>
                <a href="https://main.d1wmo5l9t2cby7.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors">
                  <strong>Live Site</strong>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.97, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.28, ease }}>
                <Image src="/biovision-intro.png?v=2" alt="BioVision" width={1920} height={1080} unoptimized className="w-full h-auto rounded-xl" />
              </motion.div>
            </div>
          </section>

          {/* ── TL;DR ── */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="space-y-0">

              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>TL;DR</h2></FadeIn>

              {/* Problem */}
              <FadeIn delay={0.05}>
                <div className="grid grid-cols-[160px_1fr] gap-8 py-8 border-b border-gray-200">
                  <p className={`${T.label} text-[#2D7D7D] pt-1`}>Problem</p>
                  <p style={{ fontSize: 20, fontWeight: 600, color: "rgba(0,0,0,0.85)", lineHeight: 1.45 }}>
                    Wildlife researchers spend weeks manually reviewing trail camera images — delaying research insights.
                  </p>
                </div>
              </FadeIn>

              {/* Solution */}
              <FadeIn delay={0.08}>
                <div className="grid grid-cols-[160px_1fr] gap-8 py-8 border-b border-gray-200">
                  <p className={`${T.label} text-[#2D7D7D] pt-1`}>Solution</p>
                  <p className="text-base text-gray-500 leading-relaxed">Designed BioVision, an AI system that detects wildlife in large-scale camera trap datasets via AI + human verification.</p>
                </div>
              </FadeIn>

              {/* Impact */}
              <FadeIn delay={0.1}>
                <div className="pt-8">
                  <p className={`${T.label} text-[#2D7D7D] mb-6`}>Impact</p>
                  <div className="grid grid-cols-3">
                    {[
                      { stat: "0→1",                                         desc: "Full platform from scratch" },
                      { stat: <>↓<CountUp target={90} suffix="%" /></>,       desc: "Manual review time" },
                      { stat: <>↓<CountUp target={20} suffix="%" /></>,       desc: "Correction rate" },
                    ].map((item, i) => (
                      <div key={i} className={`pr-8 ${i > 0 ? "pl-8 border-l border-gray-200" : ""}`}>
                        <p className="text-[42px] font-bold text-gray-900 leading-none mb-2">{item.stat}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </section>

          {/* ── OUTCOME ── */}
          <section id="outcome" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>Outcome</h2></FadeIn>
              <div className="space-y-10">
                {OUTCOME_ITEMS.map(({ n, title, src }) => (
                  <div key={n} className="grid grid-cols-[180px_1fr] gap-10 items-start">
                    <FadeIn>
                      <p className={`${T.label} text-[#2D7D7D] mb-2`}>{n}</p>
                      <h3 className={`${T.h3} text-gray-900 leading-snug`}>{title}</h3>
                    </FadeIn>
                    <ImageReveal>
                      <video src={src} autoPlay loop muted playsInline className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CONTEXT ── */}
          <section id="context" className="px-6 py-16 border-t border-gray-200">
            <div>
              <div>
                <FadeIn><h2 className={`${T.h2} text-gray-900 mb-6`}>A critical species, invisible to existing tools</h2></FadeIn>
                <FadeIn delay={0.05}>
                  <p className="text-base text-gray-600 leading-relaxed mb-4">Beavers play a critical role in restoring stream ecosystems. By building dams, they slow water flow, increase water retention, and create habitats that support salmon migration and spawning. As a result, monitoring beaver activity has become an important indicator for ecological restoration efforts.</p>
                </FadeIn>
                <FadeIn delay={0.1}>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">Wildlife researchers deploy camera traps along streams to observe animal activity, but these cameras generate thousands of images that must be manually reviewed. Identifying beavers within these large datasets is time-consuming and difficult to scale, creating a major bottleneck for ecological monitoring.</p>
                </FadeIn>
                <ImageReveal delay={0.15}>
                  <Image src="/beaver-importance.webp" alt="Beaver ecosystem importance" width={1200} height={600} className="w-full rounded-xl object-cover" />
                </ImageReveal>
              </div>
            </div>
          </section>

          {/* ── RESEARCH ── */}
          <section id="research" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>Every model we tried failed — so we built our own approach</h2></FadeIn>

              <div className="space-y-12">
                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>01</p>
                    <h3 className={`${T.h3} text-gray-900 mb-4`}>Understanding the biologist&apos;s workflow</h3>
                  </FadeIn>
                  <FadeIn delay={0.05}>
                    <p className="text-base text-gray-600 leading-relaxed">We conducted in-depth interviews with the wildlife biologists who serve as our primary stakeholders. Their core workflow involves deploying camera traps in the field. Every few months, they retrieve the SD cards and manually review all captured images on their own computers.</p>
                  </FadeIn>
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    {["/bio-uj1.png", "/bio-uj2.png", "/bio-uj3.png"].map((src, i) => (
                      <ImageReveal key={src} delay={0.08 + i * 0.08}>
                        <Image src={src} alt={`User journey step ${i + 1}`} width={600} height={400} className="w-full rounded-xl object-cover" />
                      </ImageReveal>
                    ))}
                  </div>
                  <FadeIn delay={0.1} className="mt-6">
                    <p className={`${T.label} text-red-300 mb-3`}>Key Pain Points</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-base text-gray-600 leading-relaxed">Large volumes of images must be reviewed manually</li>
                      <li className="text-base text-gray-600 leading-relaxed">Many images contain empty scenes triggered by birds or motion</li>
                      <li className="text-base text-gray-600 leading-relaxed">Researchers must manually distinguish beavers from similar species such as nutria, mink, and otters</li>
                    </ul>
                  </FadeIn>
                </div>

                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>02</p>
                    <h3 className={`${T.h3} text-gray-900 mb-4`}>Market &amp; Tool Audit</h3>
                  </FadeIn>
                  <div className="space-y-4">
                    <FadeIn delay={0.05}>
                      <p className="text-base text-gray-600 leading-relaxed">We evaluated open-source wildlife detection models available on the market. One widely cited model, SpeciesNet, claimed general animal detection capability, but when tested against our dataset, it failed to register beavers as animals at all. Because beavers are often only partially visible in frame and appear in low-contrast grayscale images, the model&apos;s detection pipeline broke down at the very first step.</p>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <p className="text-base text-gray-600 leading-relaxed">This was a critical finding: if a model cannot identify a beaver as an animal, it has no chance of classifying it at the species level. No existing off-the-shelf tool could reliably handle our use case.</p>
                    </FadeIn>
                  </div>
                  <FadeIn delay={0.1} className="mt-6">
                    <p className={`${T.label} text-red-300 mb-3`}>Key Insights</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-base text-gray-600 leading-relaxed">Many models failed to detect beavers when only partial body parts were visible</li>
                      <li className="text-base text-gray-600 leading-relaxed">Most images were nighttime grayscale photos, significantly reducing detection performance</li>
                      <li className="text-base text-gray-600 leading-relaxed">Existing animal-detection models often failed to recognize beavers as animals at all</li>
                    </ul>
                  </FadeIn>
                </div>

                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>03</p>
                    <h3 className={`${T.h3} text-gray-900 mb-4`}>Technical Iteration</h3>
                  </FadeIn>
                  <FadeIn delay={0.05}>
                    <p className="text-base text-gray-600 leading-relaxed mb-6">Armed with a labeled dataset provided by stakeholders (approximately 600–700 images), the team ran three successive technical experiments before arriving at the final approach.</p>
                  </FadeIn>
                  <ImageReveal delay={0.05}>
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                        <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Approach</div>
                        <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">What we tried</div>
                        <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Outcome</div>
                      </div>
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="px-4 py-4 text-sm font-medium text-gray-900">Traditional ML classifier</div>
                        <div className="px-4 py-4 text-sm text-gray-600">Fed beaver images and empty-scene images into a binary classification model</div>
                        <div className="px-4 py-4"><span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-400 mb-1">Insufficient</span><p className="text-sm text-gray-500">Dataset too small; poor generalization</p></div>
                      </div>
                      <div className="grid grid-cols-3 border-b border-gray-200">
                        <div className="px-4 py-4 text-sm font-medium text-gray-900">YOLOv8 fine-tuning</div>
                        <div className="px-4 py-4 text-sm text-gray-600">Manually annotated bounding boxes for all beaver images; trained via Roboflow</div>
                        <div className="px-4 py-4"><span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-500 mb-1">Partial</span><p className="text-sm text-gray-500">~80% accuracy but recall remained poor</p></div>
                      </div>
                      <div className="grid grid-cols-3">
                        <div className="px-4 py-4 text-sm font-medium text-gray-900">LLM agent</div>
                        <div className="px-4 py-4 text-sm text-gray-600">Leveraged a vision-language model with structured prompting</div>
                        <div className="px-4 py-4"><span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-500 mb-1">Adopted</span><p className="text-sm text-gray-500">Flexible, no retraining needed</p></div>
                      </div>
                    </div>
                  </ImageReveal>
                </div>

                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>04</p>
                    <h3 className={`${T.h3} text-gray-900 mb-4`}>Scope Evolution — Two late requirements reinforced the pivot</h3>
                  </FadeIn>
                  <FadeIn delay={0.05}>
                    <p className="text-base text-gray-600 leading-relaxed mb-6">During the research process, stakeholders introduced two additional requirements that further shaped the technical direction:</p>
                  </FadeIn>
                  <div className="space-y-5 mb-8">
                    <FadeIn delay={0.05}>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">Sequence-based detection</p>
                        <p className="text-base text-gray-600 leading-relaxed">Camera traps fire in bursts of three consecutive frames. A beaver may appear in only one of three shots. Stakeholders needed detection to operate at the sequence level — not per-image — to avoid false negatives across a capture event.</p>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                      <div>
                        <p className="text-sm font-semibold text-gray-900 mb-1">General animal pre-filtering</p>
                        <p className="text-base text-gray-600 leading-relaxed">The desired workflow was two-stage: first filter for any animal presence, then identify beaver specifically. But as established in the tool audit, no reliable general-purpose animal detector existed that could handle our image conditions. This reinforced the case for an AI agent capable of reasoning across both steps simultaneously.</p>
                      </div>
                    </FadeIn>
                  </div>
                  <FadeIn delay={0.1}>
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <p className={`${T.label} text-green-400 mb-3`}>Design Opportunity</p>
                      <p className="text-base text-gray-700 leading-relaxed mb-4">Instead of relying solely on traditional machine learning models, we explored an AI-assisted detection agent that could analyze camera trap images using contextual reasoning and sequence-based understanding. This approach would allow the system to:</p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li className="text-base text-gray-600 leading-relaxed">Identify animals even when partially visible</li>
                        <li className="text-base text-gray-600 leading-relaxed">Reason across image sequences</li>
                        <li className="text-base text-gray-600 leading-relaxed">Better handle low-light grayscale images</li>
                      </ul>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </div>
          </section>

          {/* ── DESIGN PROCESS ── */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>Design Process</h2></FadeIn>

              <div className="space-y-12">

                {/* 01 Upload & Detection */}
                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>01</p>
                    <h3 className={`${T.h3} text-gray-900 mb-2`}>Upload & Detection</h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-6">Pain point: manually reviewing large volumes of images one by one is extremely inefficient.</p>
                  </FadeIn>

                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                    <ImageReveal>
                      <Image src="/bvd1v1.png?v=2" alt="Upload and detection v1" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.1}>
                      <div>
                        <h4 className={`${T.label} text-[#0f172a] mb-2`}>Version 1</h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-3">A minimal first pass: upload and detect.</p>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">The first version let biologists upload images locally and run a beaver detection job. It validated the core concept, but local file upload quickly proved impractical — biologists retrieve hundreds of images at a time.</p>
                        <h5 className={`${T.label} text-red-300 mb-2`}>Problem</h5>
                        <p className="text-base text-gray-600 leading-relaxed">Local upload didn&apos;t scale to real batch sizes.</p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start mt-6">
                    <ImageReveal>
                      <Image src="/bvd1v2.png?v=2" alt="Upload and detection v2" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.1}>
                      <div>
                        <h4 className={`${T.label} text-[#0f172a] mb-2`}>Version 2</h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">We added an S3 path input so biologists could point directly at their existing cloud storage.</p>
                        <h5 className={`${T.label} text-red-300 mb-2`}>Problem</h5>
                        <p className="text-base text-gray-600 leading-relaxed">When uploading a large dataset, there was no progress indicator — users assumed the system had crashed.</p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="space-y-4 mt-6">
                    <FadeIn>
                      <h4 className={`${T.label} text-[#0f172a] mb-2`}>Final Design</h4>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">Added a progress bar and summary panel so biologists can track job status and see detection results at a glance.</p>
                    </FadeIn>
                    <ImageReveal>
                      <Image src="/bvd1v3.png?v=3" alt="Upload and detection final" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.05}>
                      <div>
                        <h5 className={`${T.label} text-green-400 mt-4 mb-2`}>Impact</h5>
                        <p className="text-sm text-gray-500 leading-relaxed">Reduced manual image review time by 90%, enabling biologists to process hundreds of trail camera images in minutes rather than hours.</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* 02 Review Results */}
                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>02</p>
                    <h3 className={`${T.h3} text-gray-900 mb-2`}>Review Results</h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-6">Pain point: AI detection results are not trustworthy and require manual verification, but there are no tools to support that process.</p>
                  </FadeIn>

                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                    <ImageReveal>
                      <Image src="/bvd2v1.png" alt="Review Results v1" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.1}>
                      <div>
                        <h4 className={`${T.label} text-[#0f172a] mb-2`}>Version 1</h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">The first version only showed beaver agent results alongside a basic review table. While it confirmed whether a beaver was present, it offered no way to cross-validate uncertain detections.</p>
                        <h5 className={`${T.label} text-red-300 mb-2`}>Problem</h5>
                        <p className="text-base text-gray-600 leading-relaxed">Single agent produced unreliable results on ambiguous images.</p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start mt-6">
                    <ImageReveal>
                      <Image src="/bvd2v2.png" alt="Review Results v2" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.1}>
                      <div>
                        <h4 className={`${T.label} text-[#0f172a] mb-2`}>Version 2</h4>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">A second animal detection agent was added. When the two agents returned conflicting outputs, the row was flagged for human review. However, biologists still had to manually locate each flagged image in AWS S3 to verify it.</p>
                        <h5 className={`${T.label} text-red-300 mb-2`}>Problem</h5>
                        <p className="text-base text-gray-600 leading-relaxed">No inline image preview — reviewing flagged results required leaving the tool entirely.</p>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="space-y-4 mt-6">
                    <FadeIn>
                      <h4 className={`${T.label} text-[#0f172a] mb-2`}>Final Design</h4>
                      <p className="text-base text-gray-600 leading-relaxed">The final version added an animal detection agent to the summary, giving biologists a clearer breakdown of what was found. An inline image preview was also introduced so biologists can review flagged results directly on the page.</p>
                    </FadeIn>
                    <ImageReveal>
                      <Image src="/bvd2final.gif" alt="Review Results final design" width={900} height={506} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.05}>
                      <div>
                        <h5 className={`${T.label} text-green-400 mt-4 mb-2`}>Impact</h5>
                        <p className="text-sm text-gray-500 leading-relaxed">Detection accuracy improved from 92% to 97% following the introduction of the dual-agent pipeline. Manual correction rate dropped from 40% to 20%.</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                {/* 03 AI Chatbot */}
                <div>
                  <FadeIn>
                    <p className={`${T.label} text-[#2D7D7D] mb-1`}>03</p>
                    <h3 className={`${T.h3} text-gray-900 mb-2`}>AI Chatbot</h3>
                    <p className="text-base text-gray-500 leading-relaxed mb-6">Pain point: after detection, there are no data analysis tools to make sense of the results.</p>
                  </FadeIn>

                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                    <ImageReveal>
                      <Image src="/bvd3v1.png" alt="AI Chatbot v1" width={1200} height={800} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.1}>
                      <div>
                        <h4 className={`${T.label} text-[#0f172a] mb-1`}>Version 1</h4>
                        <p className="text-sm font-semibold text-gray-700 mb-3">Chatbot embedded in workflow</p>
                        <p className="text-base text-gray-600 leading-relaxed mb-4">The chatbot was embedded directly alongside the detection results on the Workflow page, so users could ask questions immediately after a detection run.</p>
                        <h5 className={`${T.label} text-red-300 mb-2`}>Problem</h5>
                        <ul className="list-disc pl-5 space-y-2">
                          <li className="text-base text-gray-600 leading-relaxed">Mixing two features in one view made the interface too complex</li>
                          <li className="text-base text-gray-600 leading-relaxed">The chatbot should support uploading historical CSVs, not just the current session</li>
                        </ul>
                      </div>
                    </FadeIn>
                  </div>

                  <div className="space-y-4 mt-6">
                    <FadeIn>
                      <h4 className={`${T.label} text-[#0f172a] mb-2`}>Final Design</h4>
                      <p className="text-base text-gray-600 leading-relaxed">The chatbot was moved to a dedicated page so biologists can upload any CSV, including historical data, and query it through natural language without needing Excel or leaving the tool.</p>
                    </FadeIn>
                    <ImageReveal>
                      <Image src="/bvd3final.gif" alt="AI Chatbot final design" width={900} height={506} unoptimized className="w-full h-auto rounded-xl border border-gray-200" />
                    </ImageReveal>
                    <FadeIn delay={0.05}>
                      <div>
                        <h5 className={`${T.label} text-green-400 mt-4 mb-2`}>Impact</h5>
                        <p className="text-sm text-gray-500 leading-relaxed">Expanded the tool beyond a single research team. Biologists working with any wildlife species can upload their own CSV and query their data through natural language, making the platform applicable across broader conservation workflows.</p>
                      </div>
                    </FadeIn>
                  </div>
                </div>

                <ImageReveal>
                  <Image src="/bio-display.png" alt="BioVision display" width={1200} height={800} className="w-full h-auto rounded-xl border border-gray-200" />
                </ImageReveal>
              </div>
            </div>
          </section>

          {/* ── REFLECTION ── */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div>
              <FadeIn><h2 className={`${T.h2} text-gray-900 mb-8`}>The tool outlived the use case — and that&apos;s the point</h2></FadeIn>
              <div className="space-y-6">
                <FadeIn delay={0.05}><p className="text-base text-gray-600 leading-relaxed">Working on BioVision offered a rare opportunity to apply large vision-language models to a domain where AI adoption is still in its early stages. Wildlife camera trap analysis has traditionally relied on manual review or conventional machine learning, both of which struggle with the realities of field data: low-light grayscale images, partially visible subjects, and visually similar species. Shifting to an AI agent approach proved far more resilient to these conditions, and the biologists from the Washington Department of Fish and Wildlife responded with genuine excitement.</p></FadeIn>
                <FadeIn delay={0.1}><p className="text-base text-gray-600 leading-relaxed">The comparison between traditional ML and the agent-based approach was one of the most instructive parts of the project. Fine-tuned models like YOLOv8 delivered reasonable accuracy on clean data but broke down on edge cases that field conditions routinely produce. The agent approach, by contrast, could reason across ambiguous images without retraining — a critical advantage in a domain where labeled datasets are small and expensive to produce.</p></FadeIn>
                <FadeIn delay={0.15}><p className="text-base text-gray-600 leading-relaxed">Looking ahead, the most meaningful next step would be opening the detection pipeline to user-defined prompts. Currently the tool is built around beaver identification, but the underlying architecture is not species-specific. If biologists could specify their own target species, BioVision could become a general-purpose wildlife monitoring platform applicable across research teams, conservation programs, and ecosystems far beyond the Pacific Northwest.</p></FadeIn>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Next Project */}
      <FadeIn className="py-20 px-6 text-center border-t border-gray-100">
        <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-4">Next Project</p>
        <a href="/work/filegpt" className="group inline-flex items-center gap-3 text-[28px] font-bold text-gray-900 hover:text-gray-400 transition-colors duration-200">
          FileGPT
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>
      </FadeIn>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/openpromo" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              Previous Project
            </Link>
            <Link href="/work/filegpt" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              Next Project
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
            </Link>
          </div>
          <div className="text-center">
            <p className="text-gray-600 text-sm">© 2025 Rebecca Huang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
