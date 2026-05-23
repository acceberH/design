"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="relative w-full h-full">
      <div className="w-full h-full overflow-hidden"
        style={{ transition: "opacity 0.3s ease", opacity: animating ? 0 : 1 }}>
        <Image src={PHOTOS[current]} alt="Rebecca" width={800} height={1000}
          unoptimized className="w-full h-full object-cover object-top" priority />
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="rounded-full transition-all duration-300"
            style={{ width: i === current ? 16 : 6, height: 6,
              background: i === current ? "rgba(69,102,124,0.7)" : "rgba(69,102,124,0.2)" }} />
        ))}
      </div>
    </div>
  );
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const EXPERIENCE = [
  { period: "2025 — Now",  title: "Freelance",          sub: "Product Designer" },
  { period: "2025 — 2026", title: "Amazon Web Services", sub: "Product Designer · Industry-sponsored Project" },
  { period: "2025",        title: "AISPIRE",             sub: "UX Design Intern" },
  { period: "2024 — 2025", title: "OfferPlz",            sub: "Product Designer" },
  { period: "2023 — 2024", title: "FileGPT",             sub: "Product Designer" },
];

const EDUCATION = [
  { period: "2024 — 2026", title: "University of Washington", sub: "MS Innovation Technology" },
  { period: "2021 — 2024", title: "New York University",      sub: "BS Integrated Design & Media" },
];

const BRINGS = [
  { title: "I build, not just design",      desc: "I design and build products end to end, working across design and code to turn ideas into real, functional systems." },
  { title: "Clarity from messy problems",   desc: "I'm comfortable starting with ambiguity and turning real world complexity into clear, actionable product directions." },
  { title: "AI-native product thinking",    desc: "I design with AI as part of the system, shaping prompts, outputs, and user flows together." },
  { title: "End-to-end ownership",          desc: "From user research to design to build and iteration, I stay with the problem until it works." },
  { title: "Outcome-driven mindset",        desc: "I design for outcomes, using data to connect product decisions with user behavior, growth, and real impact." },
];

function Card({ children, className = "", delay = 0, style }: { children: React.ReactNode; className?: string; delay?: number; style?: React.CSSProperties }) {
  return (
    <motion.div
      className={`rounded-2xl border border-[#577D98]/[0.12] ${className}`}
      style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", ...style }}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[10px] font-semibold uppercase tracking-[0.16em] mb-4" style={{ color: "#879A96" }}>{children}</p>;
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-[80px] pb-10 px-4 lg:px-6" style={{ background: "#f4f7f8" }}>

      <div
        className="max-w-[1440px] mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px 1fr",
          gap: "10px",
          alignItems: "start",
        }}
      >

        {/* ══ LEFT COLUMN ══ */}
        <div className="flex flex-col gap-2.5">

          {/* Headline */}
          <Card delay={0} className="p-7">
            <h1 className="text-[22px] font-bold tracking-tight leading-[1.3]" style={{ color: "#45617C" }}>
              Product designer with 3+ years of experience, focused on AI products that drive real impact.
            </h1>
            <div className="flex items-center gap-3 mt-5">
              <a href="mailto:qiongran.huang@gmail.com" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ border: "1px solid rgba(87,125,152,0.2)", color: "#879A96" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#45617C"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(69,97,124,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#879A96"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(87,125,152,0.2)"; }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ border: "1px solid rgba(87,125,152,0.2)", color: "#879A96" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#45617C"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(69,97,124,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#879A96"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(87,125,152,0.2)"; }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/></svg>
              </a>
              <a href="https://github.com/acceberH" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors" style={{ border: "1px solid rgba(87,125,152,0.2)", color: "#879A96" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#45617C"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(69,97,124,0.4)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#879A96"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(87,125,152,0.2)"; }}>
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"/></svg>
              </a>
            </div>
          </Card>

          {/* Background */}
          <Card delay={0.06} className="p-7">
            <Label>My Background</Label>
            <p className="text-[13px] leading-[1.75] mb-3" style={{ color: "#879A96" }}>
              Grew up in Shanghai and made in Brooklyn. My path into design wasn&apos;t linear, I studied
              Integrated Design &amp; Media at NYU, and almost chose data science instead. That decision
              never really left. It became the foundation of how I think.
            </p>
            <p className="text-[13px] leading-[1.75]" style={{ color: "#879A96" }}>
              I approach design like an experiment. Every interaction is a hypothesis, every iteration is a test.
              I care less about how something looks in isolation, and more about what it actually does, how it
              influences behavior, drives engagement, and changes outcomes.
            </p>
          </Card>

          {/* Experience */}
          <Card delay={0.12} className="p-7">
            <Label>Experience</Label>
            <div className="flex flex-col">
              {EXPERIENCE.map((item, i) => (
                <div key={item.title} className={`flex gap-4 py-3 ${i < EXPERIENCE.length - 1 ? "border-b border-[#577D98]/[0.1]" : ""}`}>
                  <p className="text-[10.5px] tabular-nums w-[84px] flex-shrink-0 pt-0.5 leading-snug" style={{ color: "#879A96" }}>{item.period}</p>
                  <div>
                    <p className="text-[12.5px] font-semibold leading-snug" style={{ color: "#45617C" }}>{item.title}</p>
                    <p className="text-[11.5px] mt-0.5" style={{ color: "#879A96" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

        </div>

        {/* ══ CENTER COLUMN ══ */}
        <div className="flex flex-col gap-2.5">

          {/* Greeting */}
          <motion.p
            className="text-[15px] leading-relaxed px-1 pt-2"
            style={{ color: "#879A96" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            Hi, I&apos;m Qiongran, pronounced <span className="italic" style={{ color: "#45666A" }}>chee-yong-rahn</span>. If you find it challenging, I go by <span style={{ color: "#45617C" }}>Rebecca</span> too 👋
          </motion.p>

          {/* Photo */}
          <Card delay={0.03} className="overflow-hidden" style={{ height: 420 } as React.CSSProperties}>
            <PhotoSlider />
          </Card>

          {/* Education */}
          <Card delay={0.18} className="p-7">
            <Label>Education</Label>
            <div className="flex flex-col">
              {EDUCATION.map((item, i) => (
                <div key={item.title} className={`flex gap-4 py-3 ${i < EDUCATION.length - 1 ? "border-b border-[#577D98]/[0.1]" : ""}`}>
                  <p className="text-[10.5px] tabular-nums w-[84px] flex-shrink-0 pt-0.5 leading-snug" style={{ color: "#879A96" }}>{item.period}</p>
                  <div>
                    <p className="text-[12.5px] font-semibold leading-snug" style={{ color: "#45617C" }}>{item.title}</p>
                    <p className="text-[11.5px] mt-0.5" style={{ color: "#879A96" }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* ══ RIGHT COLUMN ══ */}
        <div className="flex flex-col gap-2.5">

          {/* What I Bring */}
          <Card delay={0.09} className="p-7">
            <Label>What I Bring</Label>
            <div className="flex flex-col">
              {BRINGS.map((item, i) => (
                <div key={item.title} className={`py-3.5 ${i < BRINGS.length - 1 ? "border-b border-[#577D98]/[0.1]" : ""}`}>
                  <p className="text-[12.5px] font-semibold mb-1" style={{ color: "#45617C" }}>{item.title}</p>
                  <p className="text-[12px] leading-[1.6]" style={{ color: "#879A96" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Favorite Music */}
          <Card delay={0.21} className="p-7">
            <Label>Favorite Jams</Label>
            <div className="flex flex-col gap-3">
              {[
                { trackId: "1NZs6n6hl8UuMaX0UC0YTz" },
                { trackId: "3azJifCSqg9fRij2yKIbWz" },
                { trackId: "4gFEH7qv4GXgDz5FSgR7n2" },
              ].map((item) => (
                <iframe
                  key={item.trackId}
                  src={`https://open.spotify.com/embed/track/${item.trackId}?utm_source=generator&theme=0`}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: 12 }}
                />
              ))}
            </div>
          </Card>

        </div>

      </div>
    </div>
  );
}
