"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeDock, setActiveDock] = useState<"home" | "work">("home");

  const scrollToSection = (id: "hero-section" | "work", dock: "home" | "work") => {
    setActiveDock(dock);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[#f8f6ff] scroll-smooth">
      {/* Hero Section - Full Screen */}
      <section id="hero-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#f8f6ff] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{background: '#f8f6ff'}} />
          <div className="absolute rounded-full" style={{
            width: '600px', height: '600px',
            background: 'radial-gradient(circle, rgba(255,182,193,0.6), transparent 70%)',
            filter: 'blur(60px)', top: '-10%', left: '-5%', opacity: 0.6,
            animation: 'meshDrift1 25s linear infinite'
          }} />
          <div className="absolute rounded-full" style={{
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(198,182,255,0.55), transparent 70%)',
            filter: 'blur(60px)', top: '-5%', right: '-5%', opacity: 0.55,
            animation: 'meshDrift2 30s linear infinite'
          }} />
          <div className="absolute rounded-full" style={{
            width: '450px', height: '450px',
            background: 'radial-gradient(circle, rgba(182,230,210,0.55), transparent 70%)',
            filter: 'blur(60px)', bottom: '-5%', right: '5%', opacity: 0.5,
            animation: 'meshDrift3 28s linear infinite'
          }} />
          <div className="absolute rounded-full" style={{
            width: '400px', height: '400px',
            background: 'radial-gradient(circle, rgba(255,220,180,0.45), transparent 70%)',
            filter: 'blur(60px)', bottom: '5%', left: '5%', opacity: 0.45,
            animation: 'meshDrift4 22s linear infinite'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">UX Researcher</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Product Designer</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-3">Hey! I&apos;m Rebecca</p>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Designing Human-Centered AI Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I speak both designer and engineer, and I use that to build products that actually ship well. I specialize in enterprise SaaS and AI-powered products where the complexity is real and the stakes are high.
              </p>
              <div className="flex space-x-4">
                <a href="#work" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                  View My Work
                </a>
                <a href="/v1%20(3).pdf" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                  Download Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-fade-in-up floating-element">
        <Image
                  src="/me.JPG"
                  alt="Rebecca Huang - UX Designer & Researcher"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
          priority
        />
              </div>
              
              {/* Interactive Floating Decorative Elements */}
              <div className="absolute top-20 left-10 w-4 h-4 bg-purple-200 rounded-full floating-element opacity-60 cursor-pointer hover:opacity-90 transition-opacity"></div>
              <div className="absolute top-40 right-20 w-6 h-6 bg-blue-200 rounded-full floating-element opacity-50 cursor-pointer hover:opacity-80 transition-opacity"></div>
              <div className="absolute bottom-32 left-20 w-3 h-3 bg-pink-200 rounded-full floating-element opacity-70 cursor-pointer hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-20 right-10 w-5 h-5 bg-indigo-200 rounded-full floating-element opacity-40 cursor-pointer hover:opacity-70 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of recent work showcasing user research, design strategy, and impactful solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FileGPT */}
            <Link href="/work/filegpt" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up h-full flex flex-col">
                <div className="h-64 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image 
                    src="/415shots_so.png"
                    alt="FileGPT Application Mockup"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl font-bold drop-shadow-lg">
                    →
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    FileGPT
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    AI-powered document analysis and knowledge extraction platform that transforms complex files into actionable insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">UX Research</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">AI/ML</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Product Design</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* OpenPromo */}
            <Link href="/work/openpromo" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up h-full flex flex-col" style={{animationDelay: '0.1s'}}>
                <div className="h-64 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image
                    src="/641shots_so.png"
                    alt="OpenPromo Application Mockup"
                    width={1920}
                    height={1080}
                    unoptimized
                    className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl font-bold drop-shadow-lg">→</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    OpenPromo
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Multi-tenant social content management platform for marketing teams with advanced analytics and collaboration tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Product Design</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">SaaS</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">B2B</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Offerplz */}
            <Link href="/work/offerplz" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up h-full flex flex-col" style={{animationDelay: '0.2s'}}>
                <div className="h-64 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image 
                    src="/offerplz_new_cover_2x.png"
                    alt="Offerplz Application Mockup"
                    width={1248}
                    height={512}
                    unoptimized
                    className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl font-bold drop-shadow-lg">→</div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Offerplz
                  </h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    Streamlined job offer management platform that simplifies the hiring process for both employers and candidates.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">UX Research</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">Product Strategy</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Flow Optimization</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Gentle Wave Transition */}
      <div className="relative overflow-hidden">
        <svg className="w-full h-20" viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,80 Q300,40 600,50 T1200,45 L1200,80 Z" 
                fill="white" 
                opacity="0.8">
            <animate
              attributeName="d"
              values="M0,80 Q300,40 600,50 T1200,45 L1200,80 Z;
                      M0,80 Q300,60 600,35 T1200,55 L1200,80 Z;
                      M0,80 Q300,30 600,65 T1200,35 L1200,80 Z;
                      M0,80 Q300,40 600,50 T1200,45 L1200,80 Z"
              dur="35s"
              repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      {/* Personal Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research and design projects from my academic journey, exploring emerging technologies and methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* BarBuddy */}
            <Link href="/work/barbuddy" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1">
                <div className="h-64 relative overflow-hidden">
          <Image
                    src="/bar_mockup.png"
                    alt="BarBuddy Application Mockup"
                    width={400}
                    height={256}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 text-white text-2xl font-bold drop-shadow-lg">
                    →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    BarBuddy
                  </h3>
                    <p className="text-gray-600 mb-4">
                      IoT-powered smart exercise guidance system using computer vision and machine learning for real-time workout feedback.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded">IoT</span>
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Computer Vision</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Machine Learning</span>
                    </div>
                </div>
              </div>
            </Link>

            {/* Cycle */}
            <Link href="/work/cycle" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1">
                <div className="h-64 relative overflow-hidden" style={{ backgroundColor: '#FFF8FA' }}>
                  <div className="flex items-center justify-center h-full">
          <Image
                      src="/lockup_red.png"
                      alt="Cycle Brand Lockup"
                      width={300}
                      height={200}
                      className="w-auto h-32 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-4 right-4 text-gray-800 text-2xl font-bold drop-shadow-lg">
                    →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Cycle
                  </h3>
                    <p className="text-gray-600 mb-4">
                      A brand dedicated to empowering women and facilitating their well-being during their menstrual journey.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-pink-100 text-pink-800 text-xs rounded">Brand Identity</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Visual Design</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Women&apos;s Wellness</span>
                    </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final Wave Transition */}
      <div className="relative overflow-hidden">
        <svg className="w-full h-24" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.9)" />
              <stop offset="100%" stopColor="rgba(168, 85, 247, 0.8)" />
            </linearGradient>
          </defs>
          <path d="M0,100 Q300,20 600,30 T1200,25 L1200,100 Z" 
                fill="url(#cta-gradient)" 
                opacity="0.9">
            <animate
              attributeName="d"
              values="M0,100 Q300,20 600,30 T1200,25 L1200,100 Z;
                      M0,100 Q300,40 600,10 T1200,35 L1200,100 Z;
                      M0,100 Q300,10 600,45 T1200,15 L1200,100 Z;
                      M0,100 Q300,20 600,30 T1200,25 L1200,100 Z"
              dur="30s"
              repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Subtle water effects in CTA */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-30 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white/8 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let&apos;s Build Human-Centered AI Products Together
          </h2>
          <Link href="#contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Rebecca Huang</div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="#work" className="hover:text-gray-300 transition-colors">Work</Link>
              <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">© 2025 Rebecca Huang</span>
              <div className="flex space-x-4">
                <a href="mailto:rebecca.huang@example.com" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                </a>
                <a href="https://github.com/acceberH" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-end gap-2 bg-white/85 backdrop-blur-md border border-black/8 rounded-[20px] px-3 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Home
            </span>
            <button
              type="button"
              onClick={() => scrollToSection("hero-section", "home")}
              className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF] ${
                activeDock === "home" ? "bg-[#0D99FF]" : "bg-[#F5F5F4]"
              }`}
            >
              <svg className={`w-6 h-6 group-hover:text-[#0D99FF] ${activeDock === "home" ? "text-white" : "text-[#44403C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5.5v-7h-5v7H4a1 1 0 01-1-1v-10.5z" />
              </svg>
            </button>
            <span className="w-1 h-1 rounded-full bg-[#0D99FF]" />
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Work
            </span>
            <button
              type="button"
              onClick={() => scrollToSection("work", "work")}
              className={`w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF] ${
                activeDock === "work" ? "bg-[#0D99FF]" : "bg-[#F5F5F4]"
              }`}
            >
              <svg className={`w-6 h-6 group-hover:text-[#0D99FF] ${activeDock === "work" ? "text-white" : "text-[#44403C]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 8V6a1 1 0 011-1h4a1 1 0 011 1v2" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              About
            </span>
            <Link
              href="/about"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 20a8 8 0 0116 0" />
              </svg>
            </Link>
          </div>

          <div className="w-px h-9 bg-[#E7E5E4] self-center mx-1" />

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Email
            </span>
            <a
              href="mailto:qiongran.huang@gmail.com"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z" />
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              LinkedIn
            </span>
            <a
              href="https://www.linkedin.com/in/rebecca-huang-a60388249/"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.96 1.96 0 105.24 6.9 1.96 1.96 0 005.25 3zM20.44 13.41c0-3.4-1.82-4.98-4.24-4.98-1.95 0-2.82 1.07-3.31 1.82V8.5H9.51V20h3.38v-5.68c0-1.5.28-2.95 2.14-2.95 1.83 0 1.86 1.72 1.86 3.05V20h3.38v-6.59z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col items-center gap-1 relative group">
            <span className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-[#1C1917] text-[#FAFAF8] text-xs font-medium px-2.5 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              GitHub
            </span>
            <a
              href="https://github.com/acceberH"
              className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl bg-[#F5F5F4] border-none cursor-pointer transition-all duration-150 group-hover:-translate-y-2 group-hover:scale-110 group-hover:bg-[#EAF4FF]"
            >
              <svg className="w-6 h-6 text-[#44403C] group-hover:text-[#0D99FF]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5A12 12 0 000 12.8c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.27.82-.58 0-.29-.01-1.07-.02-2.1-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.83-1.34-1.83-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.28 1.85 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.82.42-1.35.76-1.66-2.67-.32-5.48-1.37-5.48-6.08 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.25 0 0 1.01-.33 3.3 1.25A11.2 11.2 0 0112 6.4c.99 0 2 .14 2.94.41 2.29-1.58 3.3-1.25 3.3-1.25.66 1.69.24 2.94.12 3.25.77.86 1.24 1.95 1.24 3.29 0 4.72-2.82 5.76-5.5 6.08.43.38.82 1.13.82 2.29 0 1.66-.02 3-.02 3.4 0 .31.21.7.83.58A12.3 12.3 0 0024 12.8 12 12 0 0012 .5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="fixed right-4 md:right-6 bottom-28 z-40">
        <div className="rounded-xl border border-black/8 bg-white/80 backdrop-blur-md p-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)]">
          <iframe
            title="Spotify Player"
            src="https://open.spotify.com/embed/track/4cOdK2wGLETKBW3PvgPWqT?utm_source=generator"
            width="320"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
