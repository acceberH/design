"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function BarBuddyCaseStudy() {
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
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer bg-gray-200 text-indigo-600" data-section="overview">Overview</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">TL;DR</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="context">Context</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="goals">Goals</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Approach</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="impact">Impact</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="reflection">Reflection</span></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main id="main-content" className="flex-1 lg:ml-8">
          {/* Hero / Overview Section */}
          <section id="overview" className="px-6 py-16">
            <div className="max-w-4xl">
              {/* Tag Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">UX Research</span>
                <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">IoT Design</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Machine Learning</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Hardware Integration</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">BarBuddy</h1>
              
              {/* Subtitle */}
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
                Smart exercise companion for safer weightlifting
              </p>
              
              {/* Metadata Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm mb-8">
                <div>
                  <span className="font-semibold text-gray-900">Institution:</span>
                  <p className="text-gray-600">University of Washington – MSTI</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Role:</span>
                  <div className="text-gray-600">
                    <p>PCB Design & Assembly</p>
                    <p>Data Collection & Machine Learning</p>
                    <p>UI/UX Design</p>
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Timeline:</span>
                  <p className="text-gray-600">April – June 2025 (10 weeks)</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Team:</span>
                  <p className="text-gray-600">Oulu Zhang, Rebecca Huang, Steven Liang, Xinyu Wang</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools & Tech:</span>
                  <p className="text-gray-600">ESP32, ICM-20948 IMU, MediaPipe, Edge Impulse, scikit-learn, KiCad</p>
                </div>
              </div>
              
              {/* Hero Visual */}
              <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl shadow-lg overflow-hidden">
                <Image 
                  src="/bar_mockup.png"
                  alt="BarBuddy AI-Powered Form Analysis Interface"
                  width={800}
                  height={400}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>
              
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                {/* Problem Card */}
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Problem</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    Gym-goers often lack affordable, accessible guidance on form. Incorrect posture leads to injury risks and ineffective training. Sensor-only solutions lacked context and didn&apos;t generalize well.
                  </p>
                </div>
                
                {/* Solution Card */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                        <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Solution</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    A hybrid sensing system combining IMU + webcam, powered by MediaPipe pose estimation and machine learning models. Users receive real-time feedback through a custom web interface that overlays pose landmarks and shows sensor data.
                  </p>
                </div>
                
                {/* Impact Card */}
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2l.9 47.3L40.1 112.2C24.8 120.1 16 135.7 16 152.6V304v128 48c0 26.5 21.5 48 48 48H512c26.5 0 48-21.5 48-48V304 152.6c0-16.9-8.8-32.5-24.1-40.4L416.2 95.4l.9-47.3C417.1 21.8 395.5 0 369 0H400zM416 160H160v-32h256V160zM128 304H64V224h64V304zM288 304H224V224h64V304zM448 304H384V224h64V304z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Impact</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="text-green-600 text-lg mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                        <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                      </svg>
                      <span className="text-gray-600">91–98% accuracy in exercise classification</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="text-green-600 text-lg mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 448 512">
                        <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                      </svg>
                      <span className="text-gray-600">3,600+ samples collected for training</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="text-green-600 text-lg mr-3 w-5 h-5" fill="currentColor" viewBox="0 0 576 512">
                        <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/>
                      </svg>
                      <span className="text-gray-600">Functional web interface providing real-time feedback</span>
                    </div>
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
                  As part of our TECHIN 515 course at UW MSTI, we set out to tackle a common challenge in both gyms and home workouts: many people struggle to maintain proper exercise form without professional guidance. This can lead to higher risk of injury and less effective training outcomes.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-400">
                  <div className="flex items-start">
                    <svg className="text-blue-400 text-xl mr-4 mt-1 w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                      <path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Initial Approach</h4>
                      <p className="text-gray-600">Our first idea was to rely only on an IMU sensor to classify movements. But we soon realized the limitation — motion data alone lacked context, and it was hard to know if the exercise was truly correct across different people.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400">
                  <div className="flex items-start">
                    <svg className="text-green-400 text-xl mr-4 mt-1 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/>
                    </svg>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Hybrid Solution</h4>
                      <p className="text-gray-600">To address this, we pivoted toward a hybrid solution: combining IMU data with visual input from a webcam. By using MediaPipe for pose estimation and machine learning models, we were able to design a system that provided clearer, more accurate real-time feedback for both gym-goers and people exercising at home.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
                  <blockquote className="text-xl font-medium text-gray-900 text-center italic">
                    &quot;Without affordable guidance, people often lift with unsafe or ineffective form.&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section id="goals" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Goals</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32zM416 224v64H224V224H416z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Correct Form Detection</h3>
                  <p className="text-gray-600">Reliably distinguish correct vs. incorrect movements during weightlifting exercises.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 320 512">
                      <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessible Training Aid</h3>
                  <p className="text-gray-600">Design a low-cost, portable solution that doesn&apos;t require expensive personal trainers.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hybrid Accuracy</h3>
                  <p className="text-gray-600">Combine IMU + vision data for better results than single-sensor approaches.</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="text-white text-xl w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Feedback</h3>
                  <p className="text-gray-600">Deliver immediate, actionable insights during exercise sessions.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Approach Section */}
          <section id="approach" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Approach</h2>
              
              {/* IMU Prototype Phase */}
              <div id="phase-imu" className="mb-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">IMU Prototype</h3>
                  <p className="text-lg text-gray-600">Initial sensor-only approach with OLED display</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <p className="text-gray-600">Captured acceleration and rotation data from IMU sensors and displayed results on a small OLED screen attached to the ESP32.</p>
                    
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center mb-2">
                        <svg className="text-red-500 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                        <span className="font-semibold text-red-800">Problem Identified</span>
                      </div>
                      <p className="text-red-700 text-sm">Lacked context; didn&apos;t generalize beyond our team&apos;s specific movements.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">ESP32 with IMU sensor and OLED display</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ESP32-Sense Attempt */}
              <div id="phase-sense" className="mb-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">ESP32-Sense Attempt</h3>
                  <p className="text-lg text-gray-600">Exploring camera integration for visual context</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <p className="text-gray-600">Tried ESP32-Sense camera module combined with IMU to get both visual and motion data.</p>
                    
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center mb-2">
                        <svg className="text-red-500 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"/>
                        </svg>
                        <span className="font-semibold text-red-800">Technical Limitations</span>
                      </div>
                      <p className="text-red-700 text-sm">Poor camera resolution + two boards = impractical design for real-world use.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">ESP32-CAM module with IMU sensor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* USB Webcam Pivot */}
              <div id="phase-webcam" className="mb-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">USB Webcam Pivot</h3>
                  <p className="text-lg text-gray-600">Switching to computer vision with MediaPipe</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <p className="text-gray-600">Switched to USB webcam connected to laptop, using MediaPipe Pose for body landmark detection.</p>
                    
                    <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-200">
                      <div className="flex items-center mb-2">
                        <svg className="text-yellow-600 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 640 512">
                          <path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"/>
                        </svg>
                        <span className="font-semibold text-yellow-800">Tradeoff</span>
                      </div>
                      <p className="text-yellow-700 text-sm">Camera angle had to match training setup, limiting flexibility.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">MediaPipe pose detection with skeleton overlay</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Feedback Redesign */}
              <div id="phase-feedback" className="mb-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Feedback Redesign</h3>
                  <p className="text-lg text-gray-600">Moving from hardware display to web interface</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <p className="text-gray-600">OLED screen was too small for practical use during workouts.</p>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center mb-2">
                        <svg className="text-green-500 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                        </svg>
                        <span className="font-semibold text-green-800">Solution</span>
                      </div>
                      <p className="text-green-700 text-sm">Built a web interface with live feed, pose overlay, IMU data, and text feedback.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Modern web interface with live video feed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* ML Offloading */}
              <div id="phase-ml" className="mb-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">Offloading ML</h3>
                  <p className="text-lg text-gray-600">Solving computational limitations</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-gray-600">ESP32 couldn&apos;t handle machine learning inference in real-time.</p>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <div className="flex items-center mb-2">
                        <svg className="text-green-500 mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 512 512">
                          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
                        </svg>
                        <span className="font-semibold text-green-800">Final Solution</span>
                      </div>
                      <p className="text-green-700 text-sm">Ran models on laptop; 3,600+ samples trained, achieving ~91–98% accuracy.</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <p className="text-gray-500">Machine learning pipeline diagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section id="impact" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-2xl w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">91–98%</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Accuracy</h3>
                  <p className="text-sm text-gray-600">Classification performance in real-time testing</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-2xl w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                    </svg>
                  </div>
                  <div className="text-3xl font-bold text-green-500 mb-2">3,600+</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Dataset</h3>
                  <p className="text-sm text-gray-600">Labeled samples collected for training</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-2xl w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
                      <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-cyan-600 mb-2">Real-time</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Interface</h3>
                  <p className="text-sm text-gray-600">Web UI with live feedback</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="text-white text-2xl w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-purple-500 mb-2">Proof</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning Outcome</h3>
                  <p className="text-sm text-gray-600">Feasibility of affordable workout guidance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Reflection Section */}
          <section id="reflection" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <svg className="text-blue-600 text-2xl mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">Hardware Pivot</h3>
                  </div>
                  <p className="text-gray-600">ESP32-Sense → USB webcam improved reliability and opened new possibilities for computer vision integration.</p>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center mb-4">
                    <svg className="text-purple-600 text-2xl mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">Software Pivot</h3>
                  </div>
                  <p className="text-gray-600">On-device inference failed → shifted to laptop processing, teaching us about computational constraints.</p>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center mb-4">
                    <svg className="text-yellow-600 text-2xl mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">Research Challenge</h3>
                  </div>
                  <p className="text-gray-600">Data collection & labeling were time-intensive but crucial for achieving high accuracy results.</p>
                </div>
                
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <div className="flex items-center mb-4">
                    <svg className="text-green-600 text-2xl mr-3 w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900">Key Takeaway</h3>
                  </div>
                  <p className="text-gray-600">Iterative problem-solving led to a balanced hybrid system, showing both promise and limits of real-time fitness feedback tech.</p>
                </div>
              </div>
              
              <div className="bg-indigo-50 rounded-xl p-8 border-l-4 border-indigo-600">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">What I Learned</h4>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This project taught me the importance of flexible problem-solving in technical design. Our willingness to pivot from pure hardware to hybrid solutions, and from on-device to distributed processing, ultimately led to a more robust and practical system. The experience highlighted how constraints can drive innovation, and how user feedback should guide technical decisions rather than the other way around.
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
            <Link href="/work/openpromo" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
              <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>
              Previous Project
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
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
