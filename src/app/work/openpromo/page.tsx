"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function OpenPromoCaseStudy() {
  useEffect(() => {
    // Smooth scrolling and active navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(this: HTMLElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId!);
        
        if (targetSection) {
          targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
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
        link.classList.remove('bg-gray-200', 'text-primary');
        if (link.getAttribute('data-section') === current) {
          link.classList.add('bg-gray-200', 'text-primary');
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
  }, []);

  return (
    <div className="bg-gray-50 font-sans">
      {/* Header */}
      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Navigation */}
        <aside id="left-nav" className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">TL;DR</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">Impact</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="context">Context</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Approach</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="reflection">Reflection</span></li>
            </ul>
          </nav>
        </aside>

        {/* Right Content */}
        <main id="main-content" className="flex-1 lg:ml-8">
          {/* Hero Section */}
          <section id="hero" className="px-6 py-16">
            <div className="max-w-4xl">
              {/* Tag Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">UX Research</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">Product Design</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">Social Media Tech</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">OpenPromo</h1>
              
              {/* One-liner Description */}
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Redefining how businesses and creators manage and amplify their content.
              </p>
              
              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Company:</strong> OpenPromo</span>
                <span><strong>Role:</strong> UX Designer, Researcher</span>
                <span><strong>Duration:</strong> Ongoing</span>
              </div>
              
              {/* Hero Visual */}
              <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden p-8">
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
                  <video
                    className="w-full h-full object-contain"
                    src="/openpromo_dashboard_demo.mov"
                    poster="/394shots_so.png"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Small businesses struggle to manage multiple social platforms and produce marketing content efficiently.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    An AI-powered growth platform that helps small businesses create promotional content, manage social accounts, and learn from competitors in one place.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-5">Impact</h3>
                <div className="border-b border-gray-300">
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">90%</p>
                    <p className="text-lg text-[#334155] leading-relaxed">Cost reduction in content production</p>
                  </div>
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">3×</p>
                    <p className="text-lg text-[#334155] leading-relaxed">Faster ad creation workflow</p>
                  </div>
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">70%</p>
                    <p className="text-lg text-[#334155] leading-relaxed">Faster cross-platform publishing</p>
                  </div>
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
                  OpenPromo is a platform designed to help businesses create and distribute marketing content across social media more efficiently.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  For many small businesses, producing video content remains one of the biggest barriers to effective social media marketing, often requiring costly influencer collaborations or professional production.
                </p>

                <div className="pt-2 space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-start gap-4 md:gap-6">
                    <blockquote className="rounded-2xl bg-white px-5 py-4 text-gray-700 shadow-sm ring-1 ring-gray-200 max-w-[760px]">
                      <p className="text-base md:text-lg font-medium leading-relaxed">
                        "How am I gonna manage all of these social media accounts at a time?"
                      </p>
                    </blockquote>

                    <Image
                      src="/openpromo_confused.png"
                      alt="Creator feeling overwhelmed by multiple social media tasks"
                      width={900}
                      height={900}
                      className="w-40 md:w-52 h-auto object-contain"
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
                      <span className="text-gray-700">Design Opportunity:</span> How might we help businesses manage content across multiple social platforms without constantly switching between different apps?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Solutions</h2>
              
              {/* Phase 1 */}
              <div id="phase-one" className="mb-16">

              </div>
              
              <div id="solution-one" className="mb-16">
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Solution 1</p>
                    <h3 className="text-base font-medium text-gray-700 mb-2">Multi Platform Publishing</h3>
                    <p className="text-base text-gray-700">
                      Manage all social accounts and posts.<br />
                      Auto-resize and format for each platform
                    </p>
                  </div>

                  <Image
                    src="/openpromo_solution1_main.png"
                    alt="Publishing Scheduler Design"
                    width={2128}
                    height={1552}
                    unoptimized
                    sizes="(max-width: 1024px) 96vw, 980px"
                    className="w-full max-w-[980px] h-auto rounded-2xl shadow-lg mx-auto"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="text-base font-medium text-gray-700 mb-2">Unified Inbox</h4>

                  <Image
                    src="/openpromo_scheduler_detail.png"
                    alt="Unified Inbox"
                    width={2160}
                    height={1374}
                    unoptimized
                    sizes="(max-width: 1024px) 96vw, 1080px"
                    className="w-full max-w-[1080px] h-auto rounded-2xl shadow-lg mx-auto"
                  />
                </div>

                <div className="mt-8 space-y-4">
                  <h4 className="text-lg font-medium text-gray-800">Cross Platform Analytics</h4>

                  <Image
                    src="/openpromo_cross_platform_analytics.png"
                    alt="Cross Platform Analytics"
                    width={1320}
                    height={986}
                    unoptimized
                    sizes="(max-width: 1024px) 96vw, 660px"
                    className="w-full max-w-[660px] h-auto rounded-2xl shadow-lg mx-auto"
                  />
                </div>

                <div className="mt-12 space-y-8">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-2">Interview Insights</p>
                    <p className="text-base text-gray-700">I interviewed small business owners to understand their daily publishing and growth pain points.</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-6 items-start">
                    <Image
                      src="/openpromo_confused.png"
                      alt="Small business owner interview illustration"
                      width={180}
                      height={180}
                      className="w-36 h-auto"
                    />
                    <div className="space-y-4">
                      <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-300 pl-4">&quot;We need tools that let us manage everything in one place, not across five different apps.&quot;</p>
                      <p className="text-lg text-gray-800 leading-relaxed border-l-2 border-gray-300 pl-4">&quot;I&apos;m spending too much on creators and influencers. How am I supposed to stay profitable?&quot;</p>
                    </div>
                  </div>

                </div>

                <div className="mt-12 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <Image
                    src="/comanalysis_openpromo.png"
                    alt="Competitive analysis matrix"
                    width={5945}
                    height={5314}
                    unoptimized
                    sizes="(max-width: 1024px) 86vw, 900px"
                    className="w-full max-w-[900px] h-auto mx-auto"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Competitive landscape showing gaps in AI-driven growth features.</p>
                  </div>
                </div>

                <div className="mt-8 mb-2">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Insight</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">None of the existing social media management platforms had growth-focused features built in.</p>
                  </div>
                </div>

                <div id="solution-two" className="mt-12 space-y-4">
                  <p className="text-sm font-semibold text-gray-500">Solution 2</p>
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight">Instant Ad Creation</h3>

                  <Image
                    src="/openpromo_instant_ad.png"
                    alt="Instant Ad Creation"
                    width={1332}
                    height={1250}
                    unoptimized
                    sizes="(max-width: 1024px) 96vw, 666px"
                    className="w-full max-w-[666px] h-auto rounded-2xl shadow-lg mx-auto"
                  />
                </div>

                <div id="solution-three" className="mt-12 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 items-center">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-gray-500">Solution 3</p>
                    <h3 className="text-2xl font-semibold text-gray-900 leading-tight">Competitor Radar</h3>
                    <p className="text-base text-gray-700">From a business owner perspective, growth comes from learning what competitors are doing right and responding faster.</p>
                    <p className="text-base text-gray-700">Our platform helps businesses track competitor profiles, post performance, and viral content patterns to guide smarter content decisions.</p>
                  </div>

                  <Image
                    src="/openpromo_competitor_radar.png"
                    alt="Competitor Radar"
                    width={1392}
                    height={820}
                    unoptimized
                    sizes="(max-width: 1024px) 96vw, 696px"
                    className="w-full max-w-[696px] h-auto rounded-2xl shadow-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          </section>

                    {/* Reflection Section */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                This project highlighted how generative AI is reshaping marketing workflows. Small businesses traditionally rely on agencies to produce advertising content, which is both expensive and slow. As AI generation tools mature, the barrier to creating promotional content is rapidly decreasing. However, AI alone does not solve the problem. The real opportunity lies in integrating AI into the full promotion workflow - from content creation to publishing and competitive insights. I believe future marketing platforms will evolve from simple management dashboards into growth intelligence systems that help businesses understand what content to create next.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/aispire" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              Previous Project
            </Link>
            <Link href="/work/filegpt" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              Next Project
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://www.linkedin.com/in/rebecca-huang-a60388249/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="text-xl w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              <a href="https://dribbble.com/rebecca-huang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/>
                </svg>
              </a>
              <a href="mailto:rebecca@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
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
