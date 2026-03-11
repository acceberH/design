"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Hero Section - Full Screen */}
      <section id="hero-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto w-full text-center">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-blue-100/80 bg-gradient-to-r from-slate-100/80 via-blue-50/70 to-indigo-100/80 backdrop-blur-md px-6 py-2.5 text-[18px] font-medium text-gray-800 tracking-tight shadow-[0_2px_16px_rgba(99,102,241,0.12)]">
              Hi, I&apos;m Rebecca 👋
            </span>
          </div>
          <h1 className="text-[48px] sm:text-[56px] font-bold text-gray-900 mb-7 leading-[1.1] tracking-tight">
            I speak both designer and engineer, and I use that to build products that actually<br />
            ship well.
          </h1>
          <p className="text-[17px] text-gray-400 mb-9 leading-relaxed">
            I specialize in enterprise SaaS and AI-powered products where the complexity is real and the stakes are high.
          </p>
        </div>
      </section>

      {/* Work Section — sticky stack */}
      <section id="work" className="pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative">

            {/* OpenPromo — z-10, sticks at 24px */}
            <div className="sticky top-6 z-10">
              <Link href="/work/openpromo" className="group block">
                <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] transition-shadow flex flex-col md:flex-row-reverse h-[420px]">
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

            {/* FileGPT — z-20, sticks at 40px */}
            <div className="sticky top-10 z-20 mt-4">
              <Link href="/work/filegpt" className="group block">
                <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] transition-shadow flex flex-col md:flex-row-reverse h-[420px]">
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

            {/* Offerplz — z-30, sticks at 56px */}
            <div className="sticky top-14 z-30 mt-4">
              <Link href="/work/offerplz" className="group block">
                <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] transition-shadow flex flex-col md:flex-row-reverse h-[420px]">
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

            {/* BarBuddy — z-40, sticks at 72px */}
            <div className="sticky top-[72px] z-40 mt-4">
              <Link href="/work/barbuddy" className="group block">
                <div className="bg-neutral-50 rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] transition-shadow flex flex-col md:flex-row-reverse h-[420px]">
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

            {/* Cycle — z-50, sticks at 88px */}
            <div className="sticky top-[88px] z-50 mt-4">
              <Link href="/work/cycle" className="group block">
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-[0_2px_16px_rgba(0,0,0,0.07)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.11)] transition-shadow flex flex-col md:flex-row-reverse h-[420px]" style={{ backgroundColor: '#FFF8FA' }}>
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] font-semibold text-white mb-6 tracking-tight">
            Let&apos;s Build Human-Centered AI Products Together
          </h2>
          <a href="mailto:qiongran.huang@gmail.com" className="inline-block bg-white text-gray-900 px-7 py-3 rounded-full text-[14px] font-medium hover:bg-gray-100 transition-colors">
            Get In Touch
          </a>
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
