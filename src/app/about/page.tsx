"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

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
      setTimeout(() => {
        setCurrent(c => (c + 1) % PHOTOS.length);
        setAnimating(false);
      }, 300);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-[280px] h-[380px] flex-shrink-0">
      <div
        className="w-full h-full rounded-2xl overflow-hidden shadow-md"
        style={{ transition: "opacity 0.3s ease", opacity: animating ? 0 : 1 }}
      >
        <Image
          src={PHOTOS[current]}
          alt="Rebecca"
          width={560}
          height={760}
          unoptimized
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="rounded-full transition-all duration-300"
            style={{ width: i === current ? 16 : 6, height: 6, background: i === current ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>
    </div>
  );
}

function DuolingoStreak() {
  // Streak was 791 on 2026-03-18
  const knownDate = new Date("2026-03-18");
  const knownStreak = 791;
  const today = new Date();
  const diffDays = Math.floor((today.getTime() - knownDate.getTime()) / (1000 * 60 * 60 * 24));
  return <>{knownStreak + diffDays}</>;
}

function ExpandRow({ period, title, sub, desc, border }: { period: string; title: string; sub: string; desc: string; border: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`px-5 py-4 bg-white cursor-pointer transition-colors duration-150 ${border ? "border-t border-gray-100" : ""} ${open ? "bg-gray-50" : "hover:bg-gray-50"}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[15px] font-medium text-gray-900">{title}</p>
          <p className="text-[13px] text-gray-400">{sub}</p>
        </div>
        <p className="text-[13px] text-gray-400 ml-6 flex-shrink-0">{period}</p>
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? 80 : 0, opacity: open ? 1 : 0 }}
      >
        <p className="text-[13px] text-gray-500 leading-relaxed mt-2">{desc}</p>
      </div>
    </div>
  );
}

function RisingCard({ children, zIndex }: { children: React.ReactNode; zIndex: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [ty, setTy] = useState(100);

  useEffect(() => {
    const onScroll = () => {
      if (!wrapperRef.current) return;
      const top = wrapperRef.current.getBoundingClientRect().top;
      const vh = window.innerHeight;
      // When top === vh: card just entering from bottom (ty = 100)
      // When top === 0: card fully risen to top (ty = 0)
      const progress = Math.max(0, Math.min(1, (vh - top) / vh));
      setTy((1 - progress) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={wrapperRef} style={{ height: "200vh" }}>
      <div
        className="sticky top-0 w-full"
        style={{ zIndex, transform: `translateY(${ty}vh)` }}
      >
        <div className="w-full bg-white rounded-t-3xl shadow-[0_-12px_60px_rgba(0,0,0,0.12)] px-12 py-10 min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Intro — plain page, no card */}
      <div className="min-h-screen flex items-center px-8 sm:px-16 lg:px-24">
        <div className="max-w-3xl w-full mx-auto flex flex-col gap-8 md:flex-row md:items-start pt-24 pb-16">
          <PhotoSlider />
          <div>
            <h1 className="mb-6 text-[32px] font-bold tracking-tight text-gray-900 leading-tight">
              I design with a hypothesis,<br />not a hunch.
            </h1>
            <p className="text-[16px] leading-relaxed text-gray-500">
              Born in Wenzhou, raised in Shanghai, shaped in Brooklyn. My path into design wasn&apos;t linear. I studied Integrated Design &amp; Media at NYU, and almost chose data science instead. That decision never really left, it became the foundation of how I think.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
              I approach design like an experiment. Every interaction is a hypothesis, every iteration is a test. I care less about how something looks in isolation, and more about what it actually does, how it influences behavior, drives engagement, or changes outcomes.
            </p>
            <p className="mt-3 text-[16px] leading-relaxed text-gray-500">
              I&apos;m drawn to problems where design meets ambiguity, unclear requirements, conflicting constraints, high-stakes decisions. That&apos;s where structured thinking and iteration make the biggest difference.
            </p>
          </div>
        </div>
      </div>

      {/* Education card — rises from below */}
      <RisingCard zIndex={20}>
        <h2 className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-6">Education</h2>
        <div className="rounded-2xl border border-gray-100 overflow-hidden max-w-2xl">
          {[
            { period: "2024 – 2026", title: "University of Washington", sub: "MS Innovation Technology", desc: "Focusing on human-computer interaction, AI product design, and design systems." },
            { period: "2021 – 2024", title: "New York University", sub: "BS Integrated Design & Media", desc: "Interdisciplinary program spanning UX, visual design, and media technology." },
          ].map(({ period, title, sub, desc }, i) => (
            <ExpandRow key={title} period={period} title={title} sub={sub} desc={desc} border={i > 0} />
          ))}
        </div>
      </RisingCard>

      {/* Experience card — rises over education */}
      <RisingCard zIndex={30}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-widest text-gray-400">Experience</h2>
          <a href="/v1%20(3).pdf" className="border border-gray-200 text-gray-500 px-4 py-1.5 rounded-full text-[12px] font-medium hover:border-gray-400 hover:text-gray-900 transition-colors">
            Download CV
          </a>
        </div>
        <div className="rounded-2xl border border-gray-100 overflow-hidden max-w-2xl">
          {[
            { period: "2025 – Now", title: "OpenPromo", sub: "Product Designer", desc: "Leading end-to-end product design for a multi-tenant social content management platform." },
            { period: "2025 – 2026", title: "Amazon Web Services", sub: "Product Designer", desc: "Designed complex enterprise tooling for internal AWS teams, translating dense technical workflows into clear, usable interfaces." },
            { period: "2025", title: "AISPIRE", sub: "UX Design Intern", desc: "Conducted user research and prototyped AI-assisted features through rapid iterative testing." },
            { period: "2024 – 2025", title: "OfferPlz", sub: "Product Designer", desc: "Redesigned the core hiring flow from offer creation to candidate acceptance." },
            { period: "2023 – 2024", title: "FileGPT", sub: "Product Designer", desc: "Shaped the UX of an AI-powered document analysis platform from early-stage MVP to polished product." },
          ].map(({ period, title, sub, desc }, i) => (
            <ExpandRow key={title} period={period} title={title} sub={sub} desc={desc} border={i > 0} />
          ))}
        </div>
      </RisingCard>

    </div>
  );
}
