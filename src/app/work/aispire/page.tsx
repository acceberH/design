"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Aispire() {
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
    <div className="min-h-screen bg-gray-50">
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
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="goal">Goal</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Approach</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="design-system">Design System</span></li>
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
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium shadow-sm">Education</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium shadow-sm">UX Design</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-sm">User Research</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">College Application Essay Assistant</h1>
              
              {/* One-liner Description */}
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Creating the first guided platform for students to tackle their college application essays through structured workflows.
              </p>
              
              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Company:</strong> AiSpire</span>
                <span><strong>Role:</strong> UX Designer & Researcher</span>
                <span><strong>Tools:</strong> Figma</span>
                <span><strong>Duration:</strong> 3 Months</span>
                <span><strong>Year:</strong> 2025</span>
              </div>
              
              {/* Hero Visual */}
              <div className="bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl shadow-lg overflow-hidden p-8 transform hover:scale-105 transition-all duration-500">
                <div className="w-full rounded-lg overflow-hidden">
                  <Image
                    src="/aispire_mock.png"
                    alt="MacBook Pro showing AISPIRE landing page with hero section and chat interface"
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
                  College Application Essay Assistant is an initiative to create the first guided platform for students to tackle their college application essays. By breaking down the writing journey into Background, Brainstorm, Outline, and Writing, I helped students reduce anxiety, improve confidence, and complete drafts faster.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Students struggled to start and structure essays, facing blank-page anxiety, unorganized drafts, and wasted hours.
                  </p>
                </div>
                <div className="bg-sky-50 rounded-lg p-6 border border-sky-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A guided, AI-assisted workflow with prompts, templates, and examples to move students from background info to final draft.
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Impact</h3>
                  <div className="text-sm text-gray-600 leading-relaxed space-y-1">
                    <p>• 150+ students tested</p>
                    <p>• 40% faster time-to-first-draft (5h → 3h)</p>
                    <p>• 75% reported higher confidence</p>
                    <p>• 90% positive feedback</p>
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
                  Before this project, students had no structured way to approach college application essays. Tools like Google Docs and Grammarly focused only on grammar and editing, while AI chatbots offered generic content with no connection to students&apos; personal stories or progression across drafts.
                </p>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through user interviews and testing, I uncovered that the biggest blocker wasn&apos;t writing skill, but emotional resistance—particularly in the form of blank-page anxiety and story uncertainty. Students often delayed starting essays until deadlines loomed, feeling unsure about how to begin or whether their ideas were &quot;good enough.&quot; Even when they tried to write, the lack of structure led to disorganized drafts and wasted time.
                </p>
                
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-semibold text-red-900 mb-4">The AI Trust Problem</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Additionally, early attempts to incorporate AI-generated content revealed another issue: students didn&apos;t trust or relate to the output. Generic language and prewritten paragraphs felt detached from their experiences, which made them hesitant to use the tool and undermined the goal of helping students find their authentic voice.
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  These insights pushed me to design a system that didn&apos;t just generate text, but scaffolded confidence. The goal was to break the essay journey into progressive, manageable steps—Background, Brainstorm, Outline, and Writing—each paired with AI-powered prompts, examples, and partial suggestions that preserved student ownership.
                </p>
                
                <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-xl font-semibold text-indigo-900 mb-4">Our Guiding Question</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    <strong>How might we reduce emotional resistance to writing while preserving individuality and creativity in a high-stakes setting like college applications?</strong>
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  With this in mind, we began designing a guided essay-writing experience that combined workflow clarity with just enough AI support to unlock momentum without sacrificing voice.
                </p>
              </div>
            </div>
          </section>

          {/* Goal Section */}
          <section id="goal" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goal</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-indigo-600 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Establish First Guided Platform</h3>
                  <p className="text-gray-600">Establish the first guided essay-writing platform for college applications—integrating Background, Brainstorm, Outline, and Writing into one workflow.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-cyan-600 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Increase Confidence & Efficiency</h3>
                  <p className="text-gray-600">Increase student confidence and efficiency by reducing blank-page anxiety and accelerating time-to-first-draft.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-green-500 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Empower Educators</h3>
                  <p className="text-gray-600">Empower educators and consultants with a scalable, AI-assisted tool that supports more students while reducing equity gaps.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 border-l-4 border-l-purple-500 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Protect Student Voice</h3>
                  <p className="text-gray-600">Protect student voice and trust with prompts that preserve individuality, transparent AI support, and clear opt-in guidance.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Approach</h2>
              
              <div className="space-y-16">
                {/* Phase 1 - Discovery & Research */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-indigo-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                    <h3 className="text-2xl font-bold text-gray-900">Discovery & Research</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>Conducted interviews with students to uncover their biggest pain points: blank-page anxiety, difficulty structuring ideas, and lack of feedback.</p>
                    <p>Reviewed competitor tools and found they focused on editing or raw generation, not storytelling or structure.</p>
                  </div>
                  
                  <div className="space-y-6">
                                         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                       <div className="w-full h-64 bg-white p-6 flex items-center justify-center">
                         <Image
                           src="/aispire_analysis.png"
                           alt="Competitor analysis comparison table showing Tool/Feature evaluation"
                           width={800}
                           height={256}
                           className="w-full h-full object-contain"
                         />
                       </div>
                       <div className="p-4">
                         <p className="text-sm text-gray-600 font-medium">Competitor analysis grid</p>
                       </div>
                     </div>
                  </div>
                </div>

                {/* Phase 2 - Definition & Information Architecture */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-cyan-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                    <h3 className="text-2xl font-bold text-gray-900">Definition & Information Architecture</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-600">
                    <p>Mapped the end-to-end essay journey: Background → Brainstorm → Outline → Writing.</p>
                    <p>Defined the product&apos;s value: a guided, step-by-step workflow that reduces anxiety while preserving authenticity.</p>
                    <p>Created the chatbot-driven IA to ensure continuity across stages.</p>
                  </div>
                  
                  <div className="space-y-6">
                                         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                       <div className="w-full h-64 bg-white p-6 flex items-center justify-center">
                         <Image
                           src="/aispire_info.png"
                           alt="Information architecture diagram showing Background, Brainstorm, Outline, and Writing phases"
                           width={800}
                           height={256}
                           className="w-full h-full object-contain"
                         />
                       </div>
                       <div className="p-4">
                         <p className="text-sm text-gray-600 font-medium">Information architecture diagram (four-stage flow)</p>
                       </div>
                     </div>
                    
                   </div>
                 </div>

                 {/* Phase 3 - Design & Prototyping */}
                 <div className="space-y-6">
                   <div className="flex items-center space-x-3 mb-4">
                     <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                     <h3 className="text-2xl font-bold text-gray-900">Design & Prototyping</h3>
                   </div>
                   
                   <div className="space-y-4 text-gray-600">
                     <p>Built interactive Figma prototypes with dedicated modules:</p>
                     <ul className="ml-6 space-y-1">
                       <li>• Background (inputs)</li>
                       <li>• Brainstorm (guided prompts)</li>
                       <li>• Outline (scaffolds + examples)</li>
                       <li>• Writing (editor with reference panel)</li>
                     </ul>
                     <p>Prioritized simplicity and clarity to reduce cognitive load.</p>
                   </div>
                   
                   <div className="space-y-6">
                     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                       <div className="w-full h-64 bg-white p-6 flex items-center justify-center">
                         <Image
                           src="/aispire_lofi.png"
                           alt="Low-fidelity wireframes showing ten grayscale UI mockups"
                           width={800}
                           height={256}
                           className="w-full h-full object-contain"
                         />
                       </div>
                       <div className="p-4">
                         <p className="text-sm text-gray-600 font-medium">Low-fi wireframes for each module</p>
                       </div>
                     </div>
                     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                       <div className="w-full p-6">
                         <div className="grid grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <Image
                               src="/chat_brainstorm_1.png"
                               alt="Brainstorm start screen with Common App and Supplement options"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">Brainstorm Start</p>
                           </div>
                           <div className="space-y-2">
                             <Image
                               src="/chat_brainstorm_common_final_1.png"
                               alt="Brainstorm chat interface with AI guidance"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">AI Chat Interface</p>
                           </div>
                           <div className="space-y-2">
                             <Image
                               src="/chat_brainstorm_common_question.png"
                               alt="Outline generation with multiple options"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">Outline Generation</p>
                           </div>
                           <div className="space-y-2">
                             <Image
                               src="/chat_essay_1.png"
                               alt="Final essay writing interface"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">Essay Writing</p>
                           </div>
                         </div>
                       </div>
                       <div className="p-4">
                         <p className="text-sm text-gray-600 font-medium">High-fi mockups showing the guided flow</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Deep Dive Section */}
                 <div className="space-y-6 mt-12">
                   <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
                     <h3 className="text-2xl font-bold text-gray-900 mb-6">Deep Dive: Tackling Blank-Page Anxiety through Structured Design</h3>
                     
                     <div className="space-y-6">
                       <p className="text-lg text-gray-600 leading-relaxed">
                         One of the most critical user problems I addressed was the anxiety students faced at the very beginning of their writing journey.
                       </p>
                       
                       <div className="bg-white rounded-lg p-6 border border-gray-200">
                         <h4 className="text-lg font-semibold text-gray-900 mb-4">Design Strategy</h4>
                         <p className="text-gray-600 leading-relaxed mb-4">
                           To combat this, I applied principles from workflow thinking and cognitive load theory, breaking down the experience into smaller, actionable steps:
                         </p>
                         <div className="grid md:grid-cols-3 gap-4">
                           <div className="flex items-start space-x-3">
                             <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                               <span className="text-white text-xs font-bold">1</span>
                             </div>
                             <div>
                               <h5 className="font-semibold text-gray-900">Background module</h5>
                               <p className="text-sm text-gray-600">to gather life experiences</p>
                             </div>
                           </div>
                           <div className="flex items-start space-x-3">
                             <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                               <span className="text-white text-xs font-bold">2</span>
                             </div>
                             <div>
                               <h5 className="font-semibold text-gray-900">Brainstorm prompts</h5>
                               <p className="text-sm text-gray-600">that scaffolded idea generation</p>
                             </div>
                           </div>
                           <div className="flex items-start space-x-3">
                             <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                               <span className="text-white text-xs font-bold">3</span>
                             </div>
                             <div>
                               <h5 className="font-semibold text-gray-900">Structured outline templates</h5>
                               <p className="text-sm text-gray-600">to help organize thoughts</p>
                             </div>
                           </div>
                         </div>
                       </div>
                       
                       <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                         <h4 className="text-lg font-semibold text-green-900 mb-3">AI as Coach, Not Writer</h4>
                         <p className="text-gray-600 leading-relaxed">
                           Rather than having AI write for the student, I designed it to act like a coach—offering sentence starters, templates, and examples that empowered students to shape their own stories.
                         </p>
                       </div>
                       
                       <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                         <h4 className="text-lg font-semibold text-purple-900 mb-4">Impact Results</h4>
                         <div className="grid md:grid-cols-2 gap-6">
                           <div className="text-center">
                             <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                             <p className="text-sm text-gray-600">reduction in time-to-first-draft</p>
                             <p className="text-xs text-gray-500">(from 5 hours to 3)</p>
                           </div>
                           <div className="text-center">
                             <div className="text-3xl font-bold text-purple-600 mb-2">75%</div>
                             <p className="text-sm text-gray-600">boost in confidence</p>
                           </div>
                         </div>
                         <p className="text-gray-600 leading-relaxed mt-4 text-center">
                           This validates that structured guidance beats open-ended AI generation when it comes to deeply personal writing tasks.
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Phase 4 - Validation & Iteration */}
                 <div className="space-y-6">
                   <div className="flex items-center space-x-3 mb-4">
                     <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
                     <h3 className="text-2xl font-bold text-gray-900">Validation & Iteration</h3>
                   </div>
                   
                   <div className="space-y-4 text-gray-600">
                     <p><strong>Usability Testing:</strong> Ran studies with 15+ students to measure time-to-first-draft and confidence in writing.</p>
                     <p><strong>AI Draft Flow:</strong> Iterated on the AI-generated essay draft to make the output more relevant and easier to build upon.</p>
                     <p><strong>Outline Templates:</strong> Refined narrative arcs and structural prompts to balance guidance with creative freedom.</p>
                     <p><strong>Editing Interface:</strong> Simplified toolbar and layout so students could focus on clarity and flow instead of formatting.</p>
                     <p><strong>Feedback Integration:</strong> Incorporated peer and mentor feedback to refine hierarchy, improve readability, and reduce friction.</p>
                     <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200 mt-4">
                       <p className="text-yellow-800 font-medium">💡 <strong>Impact:</strong> Students drafted essays 30% faster and reported higher confidence in revising their own voice.</p>
                     </div>
                   </div>
                   
                   <div className="space-y-6">
                     <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                       <div className="w-full p-6">
                         <div className="grid grid-cols-2 gap-6">
                           <div className="space-y-2">
                             <Image
                               src="/chat_essay_2.png"
                               alt="AI-generated essay draft with highlighted sections for revision"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">AI-Generated Essay Draft</p>
                           </div>
                           <div className="space-y-2">
                             <Image
                               src="/chat_writing_1.png"
                               alt="User editing an essay with AI suggestions and feedback"
                               width={400}
                               height={300}
                               className="w-full h-auto object-contain rounded-lg border border-gray-200"
                             />
                             <p className="text-xs text-gray-600 text-center">Essay Editing Interface</p>
                           </div>
                         </div>
                       </div>
                       <div className="p-4">
                         <p className="text-sm text-gray-600 font-medium">Key iterations showing the essay generation and editing process</p>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </section>

          {/* Design System Section */}
          <section id="design-system" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System</h2>
              
              <div className="space-y-8">
                <p className="text-lg text-gray-600 leading-relaxed">
                  The design system for Aispire was built with accessibility and clarity in mind. Here are the key style guidelines and components that shaped the user experience.
                </p>
                
                {/* Color Use */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Use</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#FAFCFF] rounded-lg mx-auto mb-2 border border-gray-200"></div>
                      <p className="text-sm font-medium text-gray-900">Background</p>
                      <p className="text-xs text-gray-600">#FAFCFF</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#DCE6FF] rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Upload/Letter</p>
                      <p className="text-xs text-gray-600">#DCE6FF</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#6B7B9F] rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Naming</p>
                      <p className="text-xs text-gray-600">#6B7B9F</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#417BFF] rounded-lg mx-auto mb-2"></div>
                      <p className="text-sm font-medium text-gray-900">Blue Highlight</p>
                      <p className="text-xs text-gray-600">#417BFF</p>
                    </div>
                  </div>
                </div>

                {/* Typography */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Headings</h4>
                      <p className="text-sm text-gray-600">Font: Inter, Weight: 700, Line-height: 1.2</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Body Text</h4>
                      <p className="text-sm text-gray-600">Font: Inter, Weight: 400, Line-height: 1.6</p>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-2">UI Elements</h4>
                      <p className="text-sm text-gray-600">Font: Inter, Weight: 500, Line-height: 1.4</p>
                    </div>
                  </div>
                </div>

                {/* Elements */}
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Elements</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Background</h4>
                        <Image 
                          src="/background-stylesheet.png"
                          alt="Background stylesheet showing design system elements"
                          width={300}
                          height={200}
                          className="w-full h-auto object-contain rounded-lg border border-gray-200"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Brainstorm</h4>
                        <Image 
                          src="/brainstorm-stylesheet.png"
                          alt="Brainstorm stylesheet showing design system elements"
                          width={300}
                          height={200}
                          className="w-full h-auto object-contain rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Outline</h4>
                        <Image 
                          src="/outline-stylesheet.png"
                          alt="Outline stylesheet showing design system elements"
                          width={300}
                          height={200}
                          className="w-full h-auto object-contain rounded-lg border border-gray-200"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Writing</h4>
                        <Image 
                          src="/writing-stylesheet.png"
                          alt="Writing stylesheet showing design system elements"
                          width={300}
                          height={200}
                          className="w-full h-auto object-contain rounded-lg border border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>



                {/* Accessibility Guidelines */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Accessibility Guidelines</h3>
                  <ul className="space-y-2 text-green-700">
                    <li>• Minimum contrast ratio of 4.5:1 for all text</li>
                    <li>• Focus indicators for keyboard navigation</li>
                    <li>• Semantic HTML structure for screen readers</li>
                    <li>• Touch targets minimum 44px for mobile</li>
                    <li>• Color not used as the only visual indicator</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impact" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">150+</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Students Tested</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Comprehensive testing with diverse students across different backgrounds and writing levels.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">40%</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Faster Drafting</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Reduced time-to-first-draft from 5 hours to 3 hours, helping overcome blank-page anxiety.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">75%</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Higher Confidence</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Three-quarters of students reported significantly higher confidence in their writing abilities.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">90%</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Positive Feedback</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">Overwhelmingly positive user feedback with students appreciating the guided approach.</p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">What Students Said</h3>
                
                <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-100">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    &quot;This felt like having a coach on my screen. I actually finished my first draft in one sitting — something I&apos;d been putting off for weeks.&quot;
                  </blockquote>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-8 border border-cyan-100">
                  <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                    &quot;I can&apos;t afford a private consultant, but this gave me the structure and confidence I needed to make my essay stand out.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* Reflect Section */}
          <section id="reflect" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflect</h2>
              
              <div className="space-y-8">
                <div className="bg-indigo-50 rounded-xl p-6 border-l-4 border-indigo-600">
                  <h3 className="text-xl font-semibold text-indigo-600 mb-3">What I Learned</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Clear workflows reduce cognitive load more effectively than adding &quot;AI magic.&quot; Sometimes the best solution is structured guidance rather than complex automation.
                  </p>
                </div>
                
                <div className="bg-cyan-50 rounded-xl p-6 border-l-4 border-cyan-600">
                  <h3 className="text-xl font-semibold text-cyan-600 mb-3">What I&apos;d Improve</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    More personalization in prompts based on user background, and improved onboarding for first-time users to better understand the four-phase process.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold text-green-700 mb-3">Lasting Influence</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    This project reinforced my belief in combining structure with inspiration when designing AI-powered writing tools. The key is scaffolding creativity, not replacing it.
                  </p>
                </div>
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
            <Link href="/work/filegpt" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Previous Project
            </Link>
            <Link href="/work/offerplz" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
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
