"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import CaseStudyGate from "@/components/CaseStudyGate";

export default function WorkLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/work/cycle") {
    return <>{children}</>;
  }

  return <CaseStudyGate>{children}</CaseStudyGate>;
}
