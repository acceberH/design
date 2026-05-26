import type { Metadata } from "next";
import { ReactNode } from "react";
import CaseStudyGate from "@/components/CaseStudyGate";

export const metadata: Metadata = {
  title: "Rebecca Huang",
  description: "Product designer & engineer",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-image-preview": "none",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function HrLayout({ children }: { children: ReactNode }) {
  return (
    <CaseStudyGate
      storageKey="hr_site_unlocked"
      title="This HR version is protected"
      description="Enter the password to continue"
    >
      {children}
    </CaseStudyGate>
  );
}
