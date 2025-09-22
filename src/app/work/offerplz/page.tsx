"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Offerplz() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function(this: HTMLElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId!);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = Array.from(navLinks);

    const observerOptions = { threshold: 0.3, rootMargin: '-20% 0px -35% 0px' };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinksArray.forEach(link => {
            const linkElement = link as HTMLElement;
            if (linkElement.getAttribute('data-section') === currentId) {
              linkElement.classList.add('bg-gray-200', 'text-gray-900');
              linkElement.classList.remove('text-secondary');
            } else {
              linkElement.classList.remove('bg-gray-200', 'text-gray-900');
              linkElement.classList.add('text-secondary');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Scroll-triggered animations
    const observerOptions2 = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const targetElement = entry.target as HTMLElement;
          targetElement.classList.add('animate-fade-in-up');
          targetElement.style.opacity = '1';
          targetElement.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions2);

    sections.forEach(section => {
      const sectionElement = section as HTMLElement;
      sectionElement.style.opacity = '0';
      sectionElement.style.transform = 'translateY(30px)';
      sectionElement.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer2.observe(section);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', function() {});
      });
      observer.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Rebecca Huang</div>
            <nav className="hidden md:flex space-x-8">
              <span className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Home</span>
              <span className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Work</span>
              <span className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">About</span>
              <span className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">Contact</span>
            </nav>
          </div>
          <div className="mt-3">
            <Link href="/" className="text-cyan-600 hover:text-indigo-600 transition-colors text-sm flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
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
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">TL;DR</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="context">Context</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="goals">Goals</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Approach</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="impact">Impact</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="reflect">Reflect</span></li>
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
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm">UX Research</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium shadow-sm">CareerTech</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-sm">AI/ML</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm">0→1 Product Build</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Offerplz</h1>
              
              {/* One-liner Description */}
              <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
                Designing an intelligent career guidance system that helps professionals navigate their career journey
              </p>
              
              {/* Metadata Row */}
              <div className="grid grid-cols-5 gap-8 mb-12 text-sm">
                <div>
                  <span className="font-medium text-gray-500">Company</span>
                  <p className="text-gray-900">spklAI</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Role</span>
                  <p className="text-gray-900">Lead UX Designer</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Duration</span>
                  <p className="text-gray-900">2 months</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Tools</span>
                  <p className="text-gray-900">Figma</p>
                </div>
                <div>
                  <span className="font-medium text-gray-500">Year</span>
                  <p className="text-gray-900">2024</p>
                </div>
              </div>
              
              {/* Hero Visual */}
              <div className="bg-gray-100 rounded-lg shadow-lg mb-16 overflow-hidden">
                <div className="w-full rounded-lg overflow-hidden">
                  <Image 
                    src="/offer_mock.png"
                    alt="Offerplz Application Mockup"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>
              <div className="mb-8">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  Offerplz redefines resume creation with an AI-driven platform that transforms raw experience into polished, recruiter-ready narratives in minutes. As the UX Designer, I led user research, defined the MVP scope, and designed the end-to-end product experience from editor to export.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Job seekers struggle to craft impactful project bullet points; generic task lists dominate resumes, weakening recruiter appeal.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Offerplz uses AI to generate tailored, results-driven project bullets in a clean, distraction-free resume editor.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Impact</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Target 10,000 registered users within 6 months, maintain 85% user satisfaction for AI suggestions, and achieve 25% monthly retention rate.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Context</h2>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  We discovered that while AI resume builders exist, <strong>most fail to help job seekers tailor project bullet points with impact</strong>—leaving resumes filled with generic task lists that fail to impress recruiters.
                </p>
                
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Surveys revealed that <strong>70% of candidates spend over 5 hours tailoring resumes</strong>, and more than <strong>60% admit they struggle the most with writing project bullets that demonstrate results</strong>.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Frustration is compounded by <strong>flashy, template-heavy builders that sacrifice clarity and professionalism for style</strong>—creating resumes that look busy but don&apos;t convert into callbacks.
                </p>
                
                <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-500">
                  <p className="text-lg font-medium text-gray-700">
                    <strong>All the signals tell us – job seekers need a professional, fixed-format resume tool powered by AI to generate results-driven project bullets that recruiters actually value.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section id="goals" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goals</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-indigo-600 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Precise Bullet Tailoring</h3>
                  <p className="text-gray-600">Enable candidates to craft impactful project bullet points that emphasize results and recruiter value.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-cyan-600 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Resume Editing</h3>
                  <p className="text-gray-600">Reduce tailoring time from hours to minutes with AI-driven bullet generation and streamlined workflows.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-green-500 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional, Fixed Formatting</h3>
                  <p className="text-gray-600">Deliver consistent LaTeX-quality resumes that prioritize clarity and recruiter readability over flashy templates.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-purple-500 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Boost Candidate Outcomes</h3>
                  <p className="text-gray-600">Increase candidate confidence and recruiter response rates by producing polished, results-driven resumes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Approach</h2>
              
              <div className="space-y-16">
                {/* Phase 1 - Identifying the Gap */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="text-2xl font-bold text-gray-900">Phase 1 — Identifying the Gap</h3>
                  </div>
                  <p className="text-lg text-gray-600">Understanding job seeker frustrations and market blind spots</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">🎯</span> Objective
                      </h4>
                      <p className="text-gray-600">Validate whether job seekers&apos; biggest struggles are writing impactful project bullets and tailoring resumes to job descriptions.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">⚡</span> Action
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Conducted 1:1 interviews with job seekers from different industries to uncover common frustrations in resume writing.</li>
                        <li>Ran a comparative usability audit on 6 leading AI resume tools to identify market blind spots.</li>
                        <li>Synthesized findings into an affinity map highlighting the biggest friction points: difficulty quantifying achievements, lack of role-specific language, and low trust in generic AI outputs.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="w-full h-64 flex items-center justify-center bg-gray-50">
                      <Image
                        src="/offer_affinity.png"
                        alt="Affinity mapping board with job seeker pain points and competitor analysis"
                        width={600}
                        height={256}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 font-medium">Affinity mapping board with job seeker pain points and competitor analysis</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="font-medium text-gray-700">
                      ✅ <strong>The opportunity is clear: a resume tool that combines impactful bullet generation with role-specific keyword optimization—a gap unaddressed in the market.</strong>
                    </p>
                  </div>
                </div>

                {/* Phase 2 - Designing the Solution */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="text-2xl font-bold text-gray-900">Phase 2 — Designing the Solution</h3>
                  </div>
                  <p className="text-lg text-gray-600">Defining MVP and prototyping a professional, AI-driven editor</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">🎯</span> Objective
                      </h4>
                      <p className="text-gray-600">Translate findings into a minimum viable product that balances AI assistance with professional formatting and recruiter readability.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">⚡</span> Action
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Defined MVP scope: bullet generator, job description alignment, distraction-free editor, and LaTeX export.</li>
                        <li>Prototyped a side-by-side editor that lets users review and edit AI-generated bullets in real time.</li>
                        <li>Iterated AI prompt structures to improve tone, specificity, and action-result clarity.</li>
                        <li>Integrated a &quot;JD upload&quot; mechanism and preview to drive role-specific tailoring.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Image
                            src="/offerlanding.png"
                            alt="Offerplz Landing Page Interface"
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                          <p className="text-xs text-gray-600 text-center">Landing Page</p>
                        </div>
                        <div className="space-y-3">
                          <Image
                            src="/offer_chat.png"
                            alt="Offerplz Chat Interface"
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                          <p className="text-xs text-gray-600 text-center">Chat Interface</p>
                        </div>
                        <div className="space-y-3">
                          <Image
                            src="/offer_jd.jpg"
                            alt="Offerplz Job Description Interface"
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                          <p className="text-xs text-gray-600 text-center">Job Description</p>
                        </div>
                        <div className="space-y-3">
                          <Image
                            src="/offer_generate.jpg"
                            alt="Offerplz Generation Interface"
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                          <p className="text-xs text-gray-600 text-center">Generation Interface</p>
                        </div>
                        <div className="space-y-3">
                          <Image
                            src="/offer_after.PNG"
                            alt="Offerplz Resume Builder Interface"
                            width={400}
                            height={300}
                            className="w-full h-auto object-contain rounded-lg border border-gray-200"
                          />
                          <p className="text-xs text-gray-600 text-center">Resume Builder</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 font-medium">Key interface designs showing the complete user journey from landing to AI-powered resume generation</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="font-medium text-gray-700">
                      ✅ <strong>Early tests showed that JD alignment made resumes feel &quot;job-ready&quot;, while LaTeX export reinforced professional credibility.</strong>
                    </p>
                  </div>
                </div>

                {/* Phase 3 - Building & Testing */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                    <h3 className="text-2xl font-bold text-gray-900">Phase 3 — Building & Testing</h3>
                  </div>
                  <p className="text-lg text-gray-600">Launching beta and validating real-world impact</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">🎯</span> Objective
                      </h4>
                      <p className="text-gray-600">Measure whether AI-assisted bullet generation reduces resume tailoring time and improves recruiter response rates.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center text-gray-900">
                        <span className="mr-2">⚡</span> Action
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        <li>Beta launched with 50+ early adopters.</li>
                        <li>A/B tested phrasing styles and editor flows.</li>
                        <li>Collected recruiter feedback on clarity and impact.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-center">
                        <div className="relative group cursor-pointer">
                          <div className="w-full max-w-4xl h-[500px] flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 overflow-hidden">
                            {/* Before Image */}
                            <Image
                              src="/IMG_9628.png"
                              alt="Resume Before Offerplz"
                              width={600}
                              height={400}
                              className="w-full h-full object-contain rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                            />
                            {/* After Image - Hidden by default, shown on hover */}
                            <Image
                              src="/offer_afterr.PNG"
                              alt="Resume After Offerplz"
                              width={600}
                              height={400}
                              className="absolute inset-0 w-full h-full object-contain rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            />
                          </div>
                          <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded text-sm">
                            Hover to see After →
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 border-t border-gray-100">
                      <p className="text-sm text-gray-600 font-medium text-center">Interactive before/after comparison - hover over the image to see the transformation from generic bullet points to impactful, quantified achievements</p>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="font-medium text-gray-700">
                      ✅ <strong>Offerplz reduced tailoring time by ~80%, boosted recruiter callbacks, and validated JD keyword tailoring as a differentiator.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impact" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-indigo-600 mb-3">10,000</div>
                  <div className="font-semibold text-lg mb-2 text-gray-900">Registered Users</div>
                  <div className="text-sm text-gray-600">Achieve 10,000 registered users within 6 months of launch</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-green-600 mb-3">85%</div>
                  <div className="font-semibold text-lg mb-2 text-gray-900">User Satisfaction</div>
                  <div className="text-sm text-gray-600">Maintain 85% user satisfaction score for AI-generated bullet suggestions</div>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center transform hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-bold text-cyan-600 mb-3">25%</div>
                  <div className="font-semibold text-lg mb-2 text-gray-900">Monthly Retention</div>
                  <div className="text-sm text-gray-600">Reach 25% monthly active user retention rate</div>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">What Users Said</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                    <blockquote className="italic text-gray-700">
                      &quot;Offerplz transformed my generic project descriptions into compelling bullet points that actually got recruiters&apos; attention. I landed 3 interviews in two weeks.&quot;
                    </blockquote>
                    <footer className="text-sm mt-3 text-gray-600">— Sarah Chen, Product Manager</footer>
                  </div>
                  
                  <div className="bg-gray-50 border-l-4 border-cyan-500 p-6 rounded-r-lg">
                    <blockquote className="italic text-gray-700">
                      &quot;The AI suggestions helped me articulate impact I didn&apos;t even realize I had. My resume finally tells a story recruiters want to hear.&quot;
                    </blockquote>
                    <footer className="text-sm mt-3 text-gray-600">— Marcus Johnson, Software Engineer</footer>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reflect Section */}
          <section id="reflect" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflect</h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Building Offerplz as a <strong>0→1 product</strong> required navigating ambiguity and translating raw user frustrations into a focused product direction. Unlike template-driven builders, the team had to align research, design, and technical execution to create a resume tool that felt both professional and recruiter-ready.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  As a product and UX Designer, I led user research, defined the MVP scope, and partnered closely with engineering to iterate on the editor experience. Along the way, I learned that <strong>impactful, recruiter-oriented outputs matter more than flashy features</strong>—clarity and trust consistently outweighed novelty in user feedback.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Looking forward, I would refine onboarding and JD keyword optimization to make the product even more adaptive to diverse job markets. More importantly, this project reinforced my ability to <strong>design for credibility and simplicity in AI-powered workflows</strong>, a principle I now carry into future product builds.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Navigation Links */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/aispire" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Previous Project
            </Link>
            <Link href="/work/openpromo" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              Next Project
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://linkedin.com/in/rebecca-huang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:rebecca@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-600 text-sm">
            © 2024 Rebecca Huang. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
