"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, MouseEvent, useRef, useState } from "react";

export default function FileGPT() {
  const impactAnimatedRef = useRef(false);
  const [impactUsers, setImpactUsers] = useState(0);
  const [impactSatisfaction, setImpactSatisfaction] = useState(0);

  const scrollToSection = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    // Smooth scrolling and active navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Highlight active section
    function updateActiveNav() {
      let current = '';
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
          current = section.getAttribute('id') || '';
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('bg-gray-200', 'text-indigo-600');
        if (link.getAttribute('href')?.substring(1) === current) {
          link.classList.add('bg-gray-200', 'text-indigo-600');
        }
      });
    }
    
    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add('animate-fade-in-up');
          targetElement.style.opacity = '1';
          targetElement.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe all sections
    sections.forEach((section, index) => {
      const sectionElement = section as HTMLElement;
      sectionElement.style.opacity = '0';
      sectionElement.style.transform = 'translateY(40px)';
      sectionElement.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
      sectionElement.style.transitionDelay = `${index * 100}ms`;
      observer.observe(section);
    });
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateActiveNav);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const impactSection = document.getElementById('impact');
    if (!impactSection) return;

    const duration = 1500;
    const easeOutQuart = (progress: number) => 1 - Math.pow(1 - progress, 4);

    const animateValue = (
      setter: (value: number) => void,
      endValue: number
    ) => {
      const startTime = performance.now();

      const step = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuart(progress);
        setter(endValue * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    };

    const impactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !impactAnimatedRef.current) {
            impactAnimatedRef.current = true;
            animateValue(setImpactUsers, 10000);
            animateValue(setImpactSatisfaction, 87);
            impactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    impactObserver.observe(impactSection);

    return () => {
      impactObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Rebecca Huang</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/#work" className="text-gray-600 hover:text-indigo-600 transition-colors">Work</Link>
              <Link href="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="mt-3">
            <Link href="/#work" className="text-cyan-600 hover:text-indigo-600 transition-colors text-sm flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto">
        
        {/* Left Navigation */}
        <aside className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              <li><a href="#tldr" onClick={scrollToSection("tldr")} className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">TL;DR</a></li>
              <li><a href="#impact" onClick={scrollToSection("impact")} className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">Impact</a></li>
              <li><a href="#context" onClick={scrollToSection("context")} className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">Context</a></li>
              <li><a href="#approach" onClick={scrollToSection("approach")} className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">Approach</a></li>
              <li><a href="#reflect" onClick={scrollToSection("reflect")} className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">Reflect</a></li>
            </ul>
          </nav>
        </aside>

        {/* Right Content */}
        <main className="flex-1 lg:ml-8">
          
          {/* Hero Section */}
          <section id="hero" className="px-6 py-16">
            <div className="max-w-4xl">
              {/* Tag Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">UX Research</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm">AI/ML</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-sm">Product Design</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">FileGPT</h1>
              
              {/* One-liner Description */}
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                FileGPT is an AI-powered platform that allows users to interact with documents, videos, and audio through conversation, turning complex content into accessible insights.
              </p>
              
              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Company:</strong> SpklAI</span>
                <span><strong>Role:</strong> UX Designer & Researcher</span>
                <span><strong>Tools:</strong> Figma</span>
                <span><strong>Duration:</strong> 3 Months</span>
                <span><strong>Year:</strong> 2023</span>

              </div>
              
              {/* Hero Visual */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-8 transform hover:scale-105 transition-all duration-500">
                <div className="w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/filegpt_mockup.png"
                    alt="FileGPT Application Mockup"
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-8">TL;DR</h2>
              <div className="mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  FileGPT is an AI-powered platform that help users summarize and interact with research papers, videos, and audio files. As UX Designer & Researcher, I led research, interaction design, and usability testing to transform a raw API into a usable, intuitive product.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Most researchers and students lacked effective tools to summarize academic papers or lectures. They spent hours extracting insights manually, reducing efficiency and slowing progress.
                  </p>
                </div>

                <div className="bg-sky-50 rounded-lg p-6 border border-sky-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xs font-bold tracking-widest uppercase text-gray-900 mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Designed a GPT-powered conversational tool where users could upload files and &quot;chat with documents.&quot; The UI prioritized clarity, persistent context, and inline citations to build trust.
                  </p>
                </div>
              </div>

              <section id="impact" className="mt-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Impact</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-5">
                    <p className="text-sm text-gray-800">Monthly active users in month one</p>
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">{Math.floor(impactUsers).toLocaleString()}+</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-5">
                    <p className="text-sm text-gray-800">User satisfaction in early surveys</p>
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">{Math.floor(impactSatisfaction)}%</p>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-5">
                    <p className="text-sm text-gray-800">Average time saved per paper</p>
                    <p className="text-3xl font-extrabold tracking-tight text-gray-900">30-40 min</p>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-3 block">Research</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Context</h2>
              
              <div className="space-y-8">

                <div className="my-12 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 md:gap-6">
                    <blockquote className="rounded-2xl bg-white/90 px-5 py-3 text-gray-700 shadow-sm ring-1 ring-gray-200 max-w-[760px]">
                      <p className="text-sm md:text-base font-medium leading-relaxed">
                        "I spend 6-8 hours every week reading papers and still miss key insights."
                      </p>
                    </blockquote>

                    <Image
                      src="/filegpt_headache.png"
                      alt="Person feeling overwhelmed while studying"
                      width={1000}
                      height={760}
                      className="w-40 md:w-48 h-auto object-contain md:mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-[78px_1fr] md:grid-cols-[110px_1fr] items-center gap-3 md:gap-5">
                    <Image
                      src="/filegpt_ideas.svg"
                      alt="Ideas and planning illustration"
                      width={220}
                      height={220}
                      className="w-16 md:w-24 h-auto object-contain"
                    />
                    <p className="text-lg text-gray-800 leading-relaxed font-medium">
                      <span className="text-indigo-700">Design Opportunity:</span> How might we help people extract insights from complex research materials in minutes rather than hours?
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-3 block">Design Process</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Approach</h2>
              
              {/* Phase 1 - Competitive Analysis */}
              <div className="mb-16">
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">Step 01</span>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">1. Competitive Analysis</h3>
                  <p className="text-lg text-gray-600">Mapping existing solutions and identifying differentiation opportunities</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">🎯</span>
                      <h4 className="text-lg font-semibold text-gray-900">Objective</h4>
                    </div>
                    <p className="text-gray-600">Understand gaps in existing summarization tools.</p>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">⚡</span>
                      <h4 className="text-lg font-semibold text-gray-900">Action</h4>
                    </div>
                    <p className="text-gray-600">Compared ChatPDF, ChatDoc, SciSummary → Found missing audio/video support and source references.</p>
                  </div>
                </div>


                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-6">
                  <div className="w-full h-96 bg-white p-6">
                    <Image 
                      src="/filegpt_competitive.png"
                      alt="FileGPT Competitive Analysis Table"
                      width={800}
                      height={384}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Competitive analysis showing FileGPT&apos;s advantages in multi-format support and trust features.</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-indigo-600">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-3"></span>
                    <h4 className="text-lg font-semibold text-gray-900">Key Insight</h4>
                  </div>
                  <p className="text-gray-600">Multi-format support + trust-building features (sources) would define FileGPT&apos;s differentiation.</p>
                </div>

                <div className="mt-6 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Design Solution 1</h4>
                  <p className="text-gray-600 mb-4">Support multiple file types and merged uploads so users can process PDFs, transcripts, and lecture materials together in one workflow.</p>

                  <div className="rounded-lg border border-gray-200 bg-gray-50 overflow-hidden">
                    <img
                      src="/filegpt_solution1.gif"
                      alt="Multi-file and merged-upload design solution demo"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
              
              {/* Phase 2 - User Test & Iteration */}
              <div className="mb-8">
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-3 inline-block">Step 02</span>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">2. User Test & Iteration</h3>
                  <p className="text-lg text-gray-600">Validating flows with users and refining based on feedback</p>
                </div>
                
                <div className="mb-6 grid grid-cols-1 md:grid-cols-[130px_1fr] items-center gap-4 md:gap-5">
                  <Image
                    src="/filegpt_trust.svg"
                    alt="User questioning response credibility"
                    width={220}
                    height={220}
                    className="w-24 md:w-28 h-auto object-contain"
                  />
                  <blockquote className="rounded-2xl bg-white/95 px-5 py-3 text-gray-700 shadow-sm ring-1 ring-gray-200">
                    <p className="text-sm md:text-base font-medium leading-relaxed">
                      "How can I trust that this response is grounded in the materials I uploaded?"
                    </p>
                  </blockquote>
                </div>
                
                <div className="mb-6">
                  <div className="w-full">
                    <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <img
                          src="/filegpt_idea1.png"
                          alt="Idea 1 preview"
                          className="w-full h-auto object-contain"
                        />
                        <div className="mt-3">
                          <p className="text-sm text-gray-500">Idea 1</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">x</span>
                            <p className="text-sm font-semibold text-gray-900">Footnote-style Citations</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">User must scroll to bottom to find sources - interrupts reading flow and adds friction.</p>
                        </div>
                      </div>
                      <div>
                        <img
                          src="/filegpt_idea2.png"
                          alt="Idea 2 preview"
                          className="w-full h-auto object-contain"
                        />
                        <div className="mt-3">
                          <p className="text-sm text-gray-500">Idea 2</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-100 text-red-600 text-xs font-bold">x</span>
                            <p className="text-sm font-semibold text-gray-900">Highlight-only</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">User must switch between two panels to verify - high cognitive load, breaks conversation context.</p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      <div>
                        <p className="text-sm text-gray-500">Idea 3</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">✓</span>
                          <p className="text-sm font-semibold text-gray-900">Inline Expandable Sources</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">Sources verify inline - no context switching. Builds trust without disrupting conversation flow.</p>
                      </div>
                      <div>
                        <img
                          src="/filegpt_idea3.png"
                          alt="Idea 3 preview"
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Design Solution 2</h4>
                      <p className="text-gray-600 mb-4">Use source-grounded response panels so users can trace generated insights back to the exact file segments.</p>
                      <img
                        src="/filegpt_solution2.gif"
                        alt="Design Solution 2 high-fidelity demo"
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-indigo-600">
                  <div className="flex items-center mb-3">
                    <span className="text-xl mr-3"></span>
                    <h4 className="text-lg font-semibold text-gray-900">Key Outcomes</h4>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <p>The design introduced three key capabilities that reshaped how users interact with research materials.</p>
                    <p>• Conversational exploration of documents</p>
                    <p>• Multi-format research ingestion</p>
                    <p>• Trust through verifiable citations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reflect Section */}
          <section id="reflect" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <span className="text-xs font-bold tracking-widest uppercase text-indigo-500 mb-3 block">Learnings</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-8">Reflect</h2>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Working on FileGPT when generative AI had just gained public attention revealed a new set of challenges for design. Unlike traditional UX flows, generative AI created unpredictable outputs, requiring me to prioritize credibility, transparency, and adaptability as part of the design.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  This experience also highlighted the gap between academic UX training and real-world product development. In school, I was taught to conduct comprehensive, rigorous research, but I quickly realized that such methods were too time-intensive for a startup environment. Instead, I learned to adapt by running lightweight, rapid validations that still informed impactful decisions.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Working closely with developers showed me that design cannot be separated from technical feasibility. Many user flows and trust features, such as source traceability, depended on implementation details. This collaboration gave me a deeper appreciation for how design and engineering shape each other.
                </p>
              </div>
            </div>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/offerplz" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous Project
            </Link>
            <Link href="/work/aispire" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              Next Project
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
              <a href="mailto:rebecca.huang@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            </div>
            <p className="text-gray-600 text-sm">© 2024 Rebecca Huang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
