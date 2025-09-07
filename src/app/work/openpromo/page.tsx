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
      <header id="header" className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900">Rebecca Huang</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</Link>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Work</Link>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">About</Link>
              <Link href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="mt-3">
            <Link href="/" className="text-cyan-600 hover:text-indigo-600 transition-colors text-sm flex items-center">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              Back to Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto">
        {/* Left Navigation */}
        <aside id="left-nav" className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">TL;DR</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="context">Context</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="goals">Goals</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Approach</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="impact">Impact</span></li>
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
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">UX Research</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Product Design</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Social Media Tech</span>
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
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Social Media Dashboard Mockup</p>
                </div>
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Businesses and creators spend excessive time managing multiple platforms with little clarity on growth. Current tools like Buffer or Hootsuite focus only on posting.
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-lg p-6 border border-sky-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    OpenPromo unifies scheduling and publishing across platforms and introduces AI-driven boosting to amplify reach.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Impact (anticipated)</h3>
                  <div className="text-sm text-gray-600 leading-relaxed space-y-1">
                    <p>• Save hours weekly</p>
                    <p>• Drive higher engagement through AI promotion</p>
                    <p>• Scale from solo creators to agencies</p>
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
                  The social media management market is saturated with tools that solve only part of the problem. While platforms like Buffer and Hootsuite excel at scheduling, they fail to address the fundamental challenge: helping content creators and businesses actually grow their reach.
                </p>
                
                <div className="flex justify-center my-12">
                  <div className="w-full max-w-lg">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Frustrated creator illustration</p>
                    </div>
                    <p className="text-sm text-gray-600 text-center mt-4 italic">Small businesses and creators struggle to manage multiple platforms effectively.</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Small businesses and creators often lack ad expertise or budgets, making boosting and promotion inaccessible. They&apos;re forced to choose between expensive agency services or DIY approaches that rarely deliver results. Current limitations include:
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Fragmented Workflows</h4>
                    <p className="text-gray-600 text-sm">Users switch between 3-5 different tools for scheduling, analytics, and promotion.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Limited Growth Tools</h4>
                    <p className="text-gray-600 text-sm">Existing platforms focus on posting, not on amplifying reach or engagement.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Expensive Ad Management</h4>
                    <p className="text-gray-600 text-sm">Professional ad services cost $2,000+ monthly, beyond most SMB budgets.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Complex Analytics</h4>
                    <p className="text-gray-600 text-sm">Data scattered across platforms makes it difficult to understand what&apos;s working.</p>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  OpenPromo addresses this by embedding AI-driven promotion into everyday workflows, making growth accessible to creators and businesses of all sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section id="goals" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goals</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Streamline Content Management</h3>
                      <p className="text-gray-600">Provide a unified dashboard for scheduling and publishing across all major social media platforms, reducing workflow complexity.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Empower Growth with AI</h3>
                      <p className="text-gray-600">Deliver smart recommendations and auto-boosting capabilities that help users expand their reach without requiring advertising expertise.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                        <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Support Diverse Users</h3>
                      <p className="text-gray-600">Create scalable workflows that work for both individual creators and marketing teams, with appropriate permission levels and collaboration features.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <svg className="text-white w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Build Trust</h3>
                      <p className="text-gray-600">Design a transparent, intuitive experience that feels approachable and builds confidence in AI-driven recommendations and automated actions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Approach</h2>
              
              {/* Phase 1 */}
              <div id="phase-one" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">1</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Discovery & Research</h3>
                    <p className="text-lg text-gray-600">Understanding the competitive landscape and user needs</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Actions Taken</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Competitor analysis (Buffer, Hootsuite, Later)</li>
                      <li>• Interviews with 15 small businesses & creators</li>
                      <li>• Survey of 100+ social media managers</li>
                      <li>• Analysis of current workflow pain points</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Insight</h4>
                    <p className="text-gray-600 text-sm">Users don&apos;t just want scheduling — they need help growing reach. 73% of respondents said their biggest challenge was &quot;not knowing how to make content perform better.&quot;</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Competitive analysis matrix</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Competitive landscape showing gaps in AI-driven growth features.</p>
                  </div>
                </div>
              </div>
              
              {/* Phase 2 */}
              <div id="phase-two" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">2</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Information Architecture & User Flows</h3>
                    <p className="text-lg text-gray-600">Mapping workflows for different user types</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Actions Taken</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Defined workflows for creators and SMBs</li>
                      <li>• Mapped scheduling dashboard journeys</li>
                      <li>• Created user journey maps</li>
                      <li>• Designed information hierarchy</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Outcome</h4>
                    <p className="text-gray-600 text-sm">Clear separation between &quot;Schedule & Publish&quot; and &quot;Boost & Analyze&quot; workflows, with seamless transitions between modes.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">User flow diagrams</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Early user flows and information architecture explorations.</p>
                  </div>
                </div>
              </div>
              
              {/* Phase 3 */}
              <div id="phase-three" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">3</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Prototyping & Testing</h3>
                    <p className="text-lg text-gray-600">Iterating on usability and clarity</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Actions Taken</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Created wireframes in Figma</li>
                      <li>• Ran usability tests with 12 users</li>
                      <li>• Iterated on scheduling clarity</li>
                      <li>• Refined dashboard navigation</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Learning</h4>
                    <p className="text-gray-600 text-sm">Users needed more control over AI recommendations. Added manual override options and transparency features showing why suggestions were made.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">Wireframe iterations</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Wireframe iterations based on user feedback and testing insights.</p>
                  </div>
                </div>
              </div>
              
              {/* Phase 4 */}
              <div id="phase-four" className="">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">4</div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">Visual Design & AI Concepts</h3>
                    <p className="text-lg text-gray-600">Creating the final design system and AI interfaces</p>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Actions Taken</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Built scalable design system (shadcn/Tailwind)</li>
                      <li>• Explored AI-boosting UI concepts</li>
                      <li>• Created high-fidelity mockups</li>
                      <li>• Designed component library</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h4>
                    <p className="text-gray-600 text-sm">Introduced &quot;Smart Boost&quot; cards that show predicted performance and budget recommendations in an easy-to-understand format.</p>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500">High-fidelity dashboard mockup</p>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600 italic">Final dashboard design with integrated AI boosting recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impact" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Save Time</h3>
                  <p className="text-sm text-gray-600">Centralized scheduling expected to cut weekly workload by 60% based on early user testing feedback.</p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Boost Reach</h3>
                  <p className="text-sm text-gray-600">AI-driven promotion can help users expand audience without ad expertise, targeting 2-3x engagement increases.</p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scale Easily</h3>
                  <p className="text-sm text-gray-600">Designed to support both solo creators and agencies with flexible pricing and team collaboration features.</p>
                </div>
              </div>
              
              <div className="mt-12 bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Early Validation</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 italic mb-2">&quot;This is exactly what I&apos;ve been looking for. The AI suggestions actually make sense and save me hours of research.&quot;</p>
                    <p className="text-xs text-gray-500">- Sarah, Content Creator (10K followers)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 italic mb-2">&quot;Finally, a tool that helps with growth, not just posting. The boost predictions are incredibly helpful for budget planning.&quot;</p>
                    <p className="text-xs text-gray-500">- Mike, Small Business Owner</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="text-yellow-500 mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                    </svg>
                    What I Learned
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Users value simplicity over advanced features at first; trust is built with clarity. The biggest insight was that AI recommendations need to feel collaborative, not automated. Users wanted to understand the &quot;why&quot; behind suggestions and maintain control over final decisions.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="text-blue-500 mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                    What I&apos;d Improve
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Balance dual audiences (creators vs SMBs) with modular workflows. The current design tries to serve both audiences equally, but future iterations should offer more customized experiences based on user type and business size. I&apos;d also invest more time in micro-interactions to make the AI features feel more magical and less mechanical.
                  </p>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <svg className="text-green-500 mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                    Next Steps
                  </h3>
                  <div className="text-gray-600 leading-relaxed space-y-3">
                    <p>• Further usability testing with larger user groups</p>
                    <p>• Deeper AI integration with platform-specific optimization</p>
                    <p>• Refining analytics dashboard with actionable insights</p>
                    <p>• Building team collaboration features for agency use cases</p>
                    <p>• Exploring integrations with e-commerce and CRM platforms</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-indigo-50 rounded-xl p-8 border-l-4 border-indigo-600">
                <p className="text-lg font-semibold text-indigo-600 mb-4">
                  Key Takeaway
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Designing for AI-powered tools requires a delicate balance between automation and user control. The most successful features were those that felt like having a knowledgeable assistant rather than a black-box algorithm. This project reinforced the importance of transparency and user agency in AI product design.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer id="footer" className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center mb-8">
            <Link href="/work/aispire" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              Previous Project
            </Link>
            <Link href="/work/filegpt" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              Next Project
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
            </Link>
          </div>
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-4">
              <a href="https://linkedin.com/in/rebecca-huang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="text-xl w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
              </a>
              <a href="https://dribbble.com/rebecca-huang" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <svg className="text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"/>
                </svg>
              </a>
              <a href="mailto:rebecca@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
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
