"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type SectionKey = "education" | "experience" | "hobbies";

type ExperienceEntry = {
  roleAtCompany: string;
  date: string;
};

type SectionConfig = {
  title: string;
  subtitle: string;
  accent: string;
  items?: string[];
  experienceEntries?: ExperienceEntry[];
};

const sections: Record<SectionKey, SectionConfig> = {
  education: {
    title: "Education",
    subtitle: "Academic background",
    items: [
      "University of Washington\nMS Innovation Technology | 09/2024 - 05/2026",
      "New York University\nBS Integrated Design & Media | 2021 - 2024",
    ],
    accent: "",
  },
  experience: {
    title: "Experience",
    subtitle: "Selected product design experience",
    accent: "",
    experienceEntries: [
      {
        roleAtCompany: "Product Designer at OpenPromo",
        date: "September 2025 - Current",
      },
      {
        roleAtCompany: "Product Designer at Amazon Web Services",
        date: "September 2025 - March 2026",
      },
      {
        roleAtCompany: "UX Design Intern at AISPIRE",
        date: "June 2025 - August 2025",
      },
      {
        roleAtCompany: "Product Designer at OfferPlz",
        date: "November 2024 - March 2025",
      },
      {
        roleAtCompany: "Product Designer at FileGPT",
        date: "February 2023 - August 2024",
      },
    ],
  },
  hobbies: {
    title: "When I am not designing",
    subtitle: "Things that keep me inspired outside work",
    items: [
      "Exploring cafe spaces and collecting visual references",
      "Documenting ideas through short notes and photo snapshots",
      "Trying new creative tools and testing playful interface concepts",
    ],
    accent: "",
  },
};

export default function AboutPage() {
  const [active, setActive] = useState<SectionKey>("education");

  const tabMeta = useMemo(
    () => [
      { key: "education" as const, label: "Education", glyph: "ED" },
      { key: "experience" as const, label: "Work", glyph: "WK" },
      { key: "hobbies" as const, label: "Hobbies", glyph: "HB" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Rebecca Huang
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-600 transition-colors hover:text-gray-900">
              Home
            </Link>
            <Link href="/#work" className="text-gray-600 transition-colors hover:text-gray-900">
              Work
            </Link>
            <Link href="/#contact" className="text-gray-600 transition-colors hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[280px_1fr]">
          <div className="mx-auto w-56 overflow-hidden rounded-3xl shadow-xl ring-1 ring-gray-200 lg:mx-0">
            <Image
              src="/IMG_2878.jpg"
              alt="Rebecca Huang"
              width={915}
              height={1339}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-gray-500">About Me</p>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">Hi! It&apos;s Rebecca here</h1>
            <p className="text-lg leading-relaxed text-gray-600">
              I design AI-powered experiences and I like making complex systems feel clear and human. This page is a
              mini snapshot of who I am beyond project decks.
            </p>
          </div>
        </section>

        <section className="mt-12">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-300" />
              <p className="ml-3 text-sm text-gray-500">Personal Folder</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gray-50 p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{sections[active].title}</h2>
              <p className="mt-1 text-gray-600">{sections[active].subtitle}</p>

              {active === "experience" ? (
                <div className="mt-5 border-b border-gray-300">
                  {sections.experience.experienceEntries?.map((entry) => (
                    <div
                      key={`${entry.roleAtCompany}-${entry.date}`}
                      className="grid grid-cols-1 gap-3 border-t border-gray-300 py-6 md:grid-cols-[1fr_auto] md:items-center"
                    >
                      <p className="text-gray-700">{entry.roleAtCompany}</p>
                      <p className="text-gray-700 md:text-right">{entry.date}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-5 space-y-3 text-gray-700">
                  {sections[active].items?.map((item) => (
                    <div key={item} className="whitespace-pre-line rounded-lg bg-white/85 px-4 py-3 ring-1 ring-white/80">
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 flex justify-center">
          <div className="inline-flex items-end gap-3 rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-lg backdrop-blur">
            {tabMeta.map((tab) => {
              const selected = active === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActive(tab.key)}
                  className={`group flex w-24 flex-col items-center gap-1 rounded-xl px-2 py-2 transition-all ${
                    selected
                      ? "-translate-y-1 bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:-translate-y-0.5 hover:bg-gray-200"
                  }`}
                >
                  <span
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-xs font-semibold ${
                      selected ? "bg-white/20" : "bg-white"
                    }`}
                  >
                    {tab.glyph}
                  </span>
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
