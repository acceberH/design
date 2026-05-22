import { ReactNode } from "react";
import CaseStudyGate from "@/components/CaseStudyGate";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return <CaseStudyGate>{children}</CaseStudyGate>;
}
