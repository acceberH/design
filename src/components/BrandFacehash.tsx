"use client";

import { Facehash } from "facehash";
import Link from "next/link";

export default function BrandFacehash() {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="fixed left-4 top-4 z-50 rounded-full border border-white/60 bg-white/45 p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-xl"
    >
      <Facehash name="Rebecca" size={34} enableBlink />
    </Link>
  );
}

