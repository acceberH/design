"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section - Full Screen */}
      <section id="hero-section" className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[600px] mx-auto w-full text-center">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center rounded-full border border-blue-100/80 bg-gradient-to-r from-slate-100/80 via-blue-50/70 to-indigo-100/80 backdrop-blur-md px-5 py-2 text-[15px] font-medium text-gray-800 tracking-tight shadow-[0_2px_16px_rgba(99,102,241,0.12)]">
              Hi, I&apos;m Rebecca 👋
            </span>
          </div>
          <h1 className="text-[36px] font-medium text-gray-900 mb-4 leading-[1.15] tracking-tight">
            I speak both designer and engineer,<br />and I use that to build products that actually ship well.
          </h1>
          <p className="text-[16px] text-gray-400 leading-relaxed whitespace-nowrap">
            I specialize in AI-powered products where the complexity is real and the stakes are high.
          </p>
        </div>
      </section>

      {/* Work Section — sticky stack */}
      <section id="work" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-[13px] font-semibold uppercase tracking-widest text-gray-400 mb-6">Selected Work</p>
          <div className="relative">

            {/* OpenPromo — z-10, sticks at 24px */}
            <div className="sticky top-6 z-10">
              <Link href="/work/openpromo" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(248,248,252,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0">
                    <Image src="/656shots_so.png" alt="OpenPromo" width={1920} height={1080} unoptimized className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">Product Design · SaaS · B2B</p>
                    <h3 className="text-[22px] font-bold text-gray-900">OpenPromo</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">Multi-tenant social content management platform for marketing teams with advanced analytics and collaboration tools.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* BioVision — z-20, sticks at 40px */}
            <div className="sticky top-10 z-20 mt-4">
              <Link href="/work/biovision" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(248,248,252,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0 bg-neutral-100 p-[2.5%]">
                    <Image src="/749shots_so.png" alt="BioVision" width={1920} height={1080} unoptimized className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">Product Design · AI/ML · Wildlife Research</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-[22px] font-bold text-gray-900">BioVision</h3>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333334 199332" className="h-4 w-auto" aria-label="AWS">
                        <path d="M93937 72393c0 4102 443 7428 1219 9867 887 2439 1996 5100 3548 7982 554 887 776 1774 776 2550 0 1109-665 2217-2106 3326l-6985 4656c-998 665-1995 998-2882 998-1109 0-2217-554-3326-1552-1552-1663-2882-3437-3991-5211-1109-1885-2217-3991-3437-6541-8648 10200-19512 15299-32594 15299-9312 0-16740-2661-22172-7982-5432-5322-8204-12417-8204-21286 0-9424 3326-17073 10089-22838s15743-8647 27161-8647c3769 0 7650 332 11752 887 4102 554 8315 1441 12749 2439v-8093c0-8426-1774-14301-5211-17738-3548-3437-9534-5100-18071-5100-3880 0-7871 443-11973 1441s-8093 2217-11973 3769c-1774 776-3104 1219-3880 1441s-1330 332-1774 332c-1552 0-2328-1109-2328-3437v-5432c0-1774 222-3104 776-3880s1552-1552 3104-2328c3880-1996 8537-3659 13969-4989C43606 885 49370 220 55468 220c13193 0 22838 2993 29046 8980 6098 5987 9202 15077 9202 27272v35920h222zM48926 89244c3659 0 7428-665 11419-1995s7539-3769 10532-7095c1774-2106 3104-4435 3770-7095 665-2661 1108-5876 1108-9645v-4656c-3215-776-6652-1441-10199-1885-3548-443-6984-665-10421-665-7428 0-12860 1441-16519 4435-3659 2993-5432 7206-5432 12749 0 5211 1330 9091 4102 11751 2661 2772 6541 4102 11641 4102zm89023 11973c-1996 0-3326-332-4213-1109-887-665-1663-2217-2328-4324l-26053-85697c-665-2217-998-3658-998-4434 0-1774 887-2772 2661-2772h10865c2106 0 3548 333 4324 1109 887 665 1552 2217 2217 4324l18625 73391 17295-73391c554-2217 1219-3659 2106-4324s2439-1109 4435-1109h8869c2106 0 3548 333 4435 1109 887 665 1663 2217 2106 4324l17516 74278 19180-74278c665-2217 1441-3659 2217-4324 887-665 2328-1109 4324-1109h10310c1774 0 2772 887 2772 2772 0 554-111 1109-222 1774s-333 1552-776 2772l-26718 85697c-665 2217-1441 3658-2328 4324-887 665-2328 1109-4213 1109h-9534c-2107 0-3548-333-4435-1109s-1663-2217-2106-4435l-17184-71507-17073 71396c-554 2217-1220 3658-2107 4434s-2439 1109-4434 1109h-9534zm142459 2993c-5765 0-11530-665-17073-1995s-9867-2772-12749-4435c-1774-998-2993-2106-3437-3104-443-998-665-2106-665-3104v-5654c0-2328 887-3437 2550-3437 665 0 1330 111 1995 333s1663 665 2772 1109c3769 1663 7871 2993 12195 3880 4435 887 8758 1330 13193 1330 6984 0 12417-1220 16186-3659s5765-5987 5765-10532c0-3104-998-5654-2993-7760-1996-2107-5765-3991-11197-5765l-16075-4989c-8093-2550-14080-6319-17738-11308-3658-4878-5543-10310-5543-16075 0-4656 998-8758 2993-12306s4656-6652 7982-9091c3326-2550 7095-4434 11530-5765S279190-2 284068-2c2439 0 4989 111 7428 443 2550 333 4878 776 7206 1219 2217 554 4324 1109 6319 1774s3548 1330 4656 1996c1552 887 2661 1774 3326 2771 665 887 998 2107 998 3659v5211c0 2328-887 3548-2550 3548-887 0-2328-444-4213-1331-6319-2882-13415-4324-21286-4324-6319 0-11308 998-14745 3104s-5211 5321-5211 9867c0 3104 1109 5765 3326 7871s6319 4213 12195 6097l15743 4989c7982 2550 13747 6098 17184 10643s5100 9756 5100 15521c0 4767-998 9091-2882 12860-1996 3770-4656 7095-8093 9756-3437 2771-7539 4767-12306 6208-4989 1552-10199 2328-15854 2328z" fill="#252f3e"/>
                        <path d="M301362 158091c-36474 26940-89467 41241-135031 41241-63858 0-121395-23614-164854-62859-3437-3104-332-7317 3770-4878 47006 27272 104988 43791 164964 43791 40465 0 84921-8426 125830-25721 6097-2772 11308 3991 5321 8426z" fill="#f90"/>
                        <path d="M316550 140796c-4656-5987-30820-2883-42682-1441-3548 443-4102-2661-887-4989 20842-14634 55099-10421 59090-5543 3991 4989-1109 39246-20620 55653-2993 2550-5876 1220-4545-2106 4435-10976 14301-35698 9645-41574z" fill="#f90"/>
                      </svg>
                    </div>
                    <p className="text-gray-500 text-[15px] leading-relaxed">AI-powered wildlife image analysis platform that helps researchers identify animals from trail camera footage, correct detections, and generate research-ready insights.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* FileGPT — z-30, sticks at 56px */}
            <div className="sticky top-14 z-30 mt-4">
              <Link href="/work/filegpt" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(248,248,252,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0">
                    <Image src="/253shots_so.png" alt="FileGPT" width={1920} height={1080} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">UX Research · AI/ML · Product Design</p>
                    <h3 className="text-[22px] font-bold text-gray-900">FileGPT</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">AI-powered document analysis and knowledge extraction platform that transforms complex files into actionable insights.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Offerplz — z-40, sticks at 72px */}
            <div className="sticky top-[72px] z-40 mt-4">
              <Link href="/work/offerplz" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(248,248,252,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0">
                    <Image src="/639shots_so.png" alt="Offerplz" width={1248} height={512} unoptimized className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">UX Research · Product Strategy · Flow Optimization</p>
                    <h3 className="text-[22px] font-bold text-gray-900">Offerplz</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">Streamlined job offer management platform that simplifies the hiring process for both employers and candidates.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* BarBuddy — z-50, sticks at 88px */}
            <div className="sticky top-[88px] z-50 mt-4">
              <Link href="/work/barbuddy" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.95) 0%, rgba(248,248,252,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0">
                    <Image src="/bar_mockup.png" alt="BarBuddy" width={400} height={256} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">IoT · Computer Vision · Machine Learning</p>
                    <h3 className="text-[22px] font-bold text-gray-900">BarBuddy</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">IoT-powered smart exercise guidance system using computer vision and machine learning for real-time workout feedback.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* Cycle — z-[60], sticks at 104px */}
            <div className="sticky top-[104px] z-[60] mt-4">
              <Link href="/work/cycle" className="group block">
                <div className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col md:flex-row-reverse h-[420px]" style={{ background: "linear-gradient(160deg, rgba(255,252,253,0.95) 0%, rgba(255,248,250,0.90) 100%)", border: "1px solid rgba(255,255,255,0.90)", boxShadow: "0 2px 16px rgba(0,0,0,0.07), inset 0 1.5px 0 rgba(255,255,255,1), inset 0 -1px 0 rgba(0,0,0,0.03)", backdropFilter: "blur(20px) saturate(180%)", WebkitBackdropFilter: "blur(20px) saturate(180%)" }}>
                  <div className="md:w-[55%] relative overflow-hidden flex-shrink-0">
                    <div className="flex items-center justify-center h-full">
                      <Image src="/lockup_red.png" alt="Cycle" width={300} height={200} className="w-auto h-40 object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-start p-8 flex-1 gap-2">
                    <p className="text-[12px] text-gray-400">Brand Identity · Visual Design · Women&apos;s Wellness</p>
                    <h3 className="text-[22px] font-bold text-gray-900">Cycle</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed">A brand dedicated to empowering women and facilitating their well-being during their menstrual journey.</p>
                  </div>
                </div>
              </Link>
            </div>

            {/* bottom spacer so last card fully scrolls into view */}
            <div className="h-[440px]" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-8">Skills</p>
          <div className="flex flex-col gap-5">
            {[
              { label: "Design", items: ["Product Design", "User Experience", "Interaction Design", "Visual Design", "Wireframing", "Lo-Fi / Hi-Fi Mockups", "Web Design"] },
              { label: "Research", items: ["User Interviews", "User Testing", "A/B Testing", "Journey Mapping", "Competitor Analysis", "Information Architecture", "Quantitative Analysis"] },
              { label: "Development", items: ["HTML / CSS", "Python", "Java", "SQL", "API Integration", "GitHub"] },
            ].map(({ label, items }) => (
              <div key={label} className="flex gap-6">
                <p className="text-[12px] text-gray-400 w-24 flex-shrink-0 pt-0.5">{label}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(skill => (
                    <span key={skill} className="px-3 py-1 rounded-full text-[12px] text-gray-600 bg-gray-50 border border-gray-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 text-gray-500 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-[14px] font-medium text-gray-900 mb-4 md:mb-0">Rebecca Huang</div>
            <div className="flex space-x-8 mb-4 md:mb-0 text-[13px]">
              <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
              <Link href="#work" className="hover:text-gray-900 transition-colors">Work</Link>
              <a href="mailto:qiongran.huang@gmail.com" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-[12px] text-gray-400">© 2025 Rebecca Huang</span>
              <div className="flex space-x-4">
                <a href="mailto:qiongran.huang@gmail.com" className="text-gray-400 hover:text-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" className="text-gray-400 hover:text-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                </a>
                <a href="https://github.com/acceberH" className="text-gray-400 hover:text-gray-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
