"use client";

import { Facehash } from "facehash";
import Link from "next/link";

export default function BrandFacehash() {
  return (
    <Link
      href="/"
      aria-label="Go to home"
      className="fixed left-4 top-4 z-50 rounded-full border border-white/50 bg-white/25 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.10)] backdrop-blur-xl backdrop-saturate-[180%]"
    >
      <Facehash name="Rebecca" size={34} enableBlink />
    </Link>
  );
}

