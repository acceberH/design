"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PHOTOS = [
  "/514d680ecbc8f49f2cd0527b63cf87c5.jpg",
  "/a10cc4a8bd13c770bbc63ec8813df604.jpg",
  "/b248dfaf4b13879cfc2979583f25e86d.jpg",
  "/2b1e547573eb590e4d56b8c9733f7047.jpg",
];

function PhotoSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => { setCurrent(c => (c + 1) % PHOTOS.length); setAnimating(false); }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-[280px] h-[380px] flex-shrink-0">
      <div className="w-full h-full rounded-2xl overflow-hidden shadow-md"
        style={{ transition: "opacity 0.3s ease", opacity: animating ? 0 : 1 }}>
        <Image src={PHOTOS[current]} alt="Rebecca" width={560} height={760}
          unoptimized className="w-full h-full object-cover" priority />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300"
            style={{ width: i === current ? 16 : 6, height: 6,
              background: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)" }} />
        ))}
      </div>
    </div>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const EDUCATION = [
  { period: "2024 – 2026", title: "University of Washington", sub: "MS Innovation Technology",
    desc: "Focusing on human-computer interaction, AI product design, and design systems." },
  { period: "2021 – 2024", title: "New York University", sub: "BS Integrated Design & Media",
    desc: "Interdisciplinary program spanning UX, visual design, and media technology." },
];

const EXPERIENCE = [
  { period: "2025 – Now",  title: "OpenPromo",           sub: "Product Designer",
    desc: "Leading end-to-end product design for a multi-tenant social content management platform." },
  { period: "2025 – 2026", title: "Amazon Web Services", sub: "Product Designer",
    desc: "Designed complex enterprise tooling for internal AWS teams, translating dense technical workflows into clear, usable interfaces." },
  { period: "2025",        title: "AISPIRE",             sub: "UX Design Intern",
    desc: "Conducted user research and prototyped AI-assisted features through rapid iterative testing." },
  { period: "2024 – 2025", title: "OfferPlz",            sub: "Product Designer",
    desc: "Redesigned the core hiring flow from offer creation to candidate acceptance." },
  { period: "2023 – 2024", title: "FileGPT",             sub: "Product Designer",
    desc: "Shaped the UX of an AI-powered document analysis platform from early-stage MVP to polished product." },
];

function CardItem({ item, accent, hoverDesc = false }: { item: typeof EDUCATION[0]; accent: string; hoverDesc?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="py-4 first:pt-0 last:pb-0 border-b border-gray-50 last:border-0 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-[6px] transition-transform duration-200"
            style={{ background: accent, transform: hovered ? "scale(1.4)" : "scale(1)" }} />
          <div>
            <p className="text-[15px] font-semibold text-gray-900 leading-snug">{item.title}</p>
            <p className="text-[13px] text-gray-400 mt-0.5">{item.sub}</p>
          </div>
        </div>
        <p className="text-[12px] text-gray-400 flex-shrink-0 mt-0.5 tabular-nums">{item.period}</p>
      </div>
      {hoverDesc && (
        <div style={{
          maxHeight: hovered ? 80 : 0,
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.25s ease",
        }}>
          <p className="text-[13px] text-gray-500 leading-relaxed mt-2 pl-[18px]">{item.desc}</p>
        </div>
      )}
      {!hoverDesc && (
        <p className="text-[13px] text-gray-500 leading-relaxed mt-2 pl-[18px]">{item.desc}</p>
      )}
    </div>
  );
}

export default function AboutPage() {
  const stackRef = useRef<HTMLDivElement>(null);

  // Track scroll through the stacked section to animate card 0 scaling down
  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end start"], // range = full STACK_HEIGHT px
  });

  // Education scales down slightly as Experience slides over it
  const eduScale = useTransform(scrollYProgress, [0.32, 0.52], [1, 0.94]);

  const STACK_HEIGHT = 1400; // enough scroll room for both cards

  return (
    <div className="bg-white">

      {/* ── Outer scroll container ── */}
      {/* Hero is sticky; as you scroll, cards section slides up over it */}
      <div style={{ position: "relative" }}>

        {/* HERO — sticks while cards scroll over */}
        <div style={{ position: "sticky", top: 0, height: "100vh", zIndex: 1 }}
          className="flex items-center px-8 sm:px-16 lg:px-24">
          <div className="max-w-3xl w-full mx-auto flex flex-col gap-8 md:flex-row md:items-start pt-24 pb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -3, y: 24 }}
              animate={{ opacity: 1, scale: 1,    rotate: 0,  y: 0  }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <PhotoSlider />
            </motion.div>

            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              <motion.h1 variants={itemVariants}
                className="mb-6 text-[32px] font-bold tracking-tight text-gray-900 leading-tight">
                I design with a hypothesis,<br />not a hunch.
              </motion.h1>
              <motion.p variants={itemVariants} className="text-[16px] leading-relaxed text-gray-500">
                Born in Wenzhou, raised in Shanghai, shaped in Brooklyn. My path into design wasn&apos;t linear.
                I studied Integrated Design &amp; Media at NYU, and almost chose data science instead.
                That decision never really left — it became the foundation of how I think.
              </motion.p>
              <motion.p variants={itemVariants} className="mt-3 text-[16px] leading-relaxed text-gray-500">
                I approach design like an experiment. Every interaction is a hypothesis, every iteration is a test.
                I care less about how something looks in isolation, and more about what it actually does —
                how it influences behavior, drives engagement, or changes outcomes.
              </motion.p>
              <motion.p variants={itemVariants} className="mt-3 text-[16px] leading-relaxed text-gray-500">
                I&apos;m drawn to problems where design meets ambiguity — unclear requirements, conflicting constraints,
                high-stakes decisions. That&apos;s where structured thinking and iteration make the biggest difference.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* CARDS SECTION — higher z-index, slides up over hero as user scrolls */}
        <div style={{ position: "relative", zIndex: 10 }}>
          <div className="px-8 sm:px-16 lg:px-24 pb-32 pt-12">

            {/* Stacked scroll container */}
            <div ref={stackRef} className="max-w-2xl mx-auto"
              style={{ height: STACK_HEIGHT, position: "relative" }}>

              {/* Card 0 — Education — parks to cover hero text */}
              <div style={{ position: "sticky", top: "12vh", zIndex: 1 }}>
                <motion.div
                  style={{ scale: eduScale, transformOrigin: "top center" }}
                  className="bg-white rounded-2xl border border-gray-100 px-8 py-7"
                  initial={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-6">Education</p>
                  {EDUCATION.map(item => <CardItem key={item.title} item={item} accent="#6366f1" />)}
                </motion.div>
              </div>

              {/* Card 1 — Experience */}
              <div style={{ position: "sticky", top: "calc(12vh + 20px)", zIndex: 2, marginTop: 480 }}>
                <motion.div
                  className="bg-white rounded-2xl border border-gray-100 px-8 py-7"
                  initial={{ boxShadow: "0 1px 8px rgba(0,0,0,0.06)" }}
                  whileHover={{ boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400">Experience</p>
                    <a href="/v1%20(3).pdf"
                      className="border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-medium hover:border-gray-400 hover:text-gray-900 transition-colors">
                      Download CV
                    </a>
                  </div>
                  {EXPERIENCE.map(item => <CardItem key={item.title} item={item} accent="#64748b" hoverDesc />)}
                </motion.div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
