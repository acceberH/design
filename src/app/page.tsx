"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const heroSection = document.querySelector('#hero-section');
    const silkWaves = document.querySelectorAll('.silk-wave');
    let interactiveWave: HTMLElement | null = null;
    let ripples: HTMLElement[] = [];

    // Create interactive wave element
    const createInteractiveWave = () => {
      interactiveWave = document.createElement('div');
      interactiveWave.className = 'interactive-wave';
      heroSection?.appendChild(interactiveWave);
    };

    // Create stone splash and ripple effect
    const createStoneEffect = (x: number, y: number) => {
      // Create stone splash (initial impact)
      const splash = document.createElement('div');
      splash.className = 'stone-splash';
      splash.style.left = `${x - 10}px`;
      splash.style.top = `${y - 10}px`;
      heroSection?.appendChild(splash);

      // Create multiple ripple rings
      const createRippleRing = (className: string, delay: number, duration: number) => {
        const ripple = document.createElement('div');
        ripple.className = className;
        ripple.style.left = `${x - 20}px`;
        ripple.style.top = `${y - 20}px`;
        heroSection?.appendChild(ripple);
        ripples.push(ripple);

        setTimeout(() => {
          ripple.remove();
          ripples = ripples.filter(r => r !== ripple);
        }, duration);
      };

      // Create primary ripple
      createRippleRing('ripple-effect', 0, 2000);
      
      // Create secondary ripple (delayed)
      setTimeout(() => {
        createRippleRing('ripple-effect-secondary', 0, 2500);
      }, 300);

      // Create tertiary ripple (more delayed)
      setTimeout(() => {
        createRippleRing('ripple-effect-tertiary', 0, 3000);
      }, 600);

      // Remove splash after animation
      setTimeout(() => {
        splash.remove();
      }, 800);

      // Add temporary disturbance to nearby silk waves
      silkWaves.forEach((wave) => {
        const waveElement = wave as HTMLElement;
        const waveRect = waveElement.getBoundingClientRect();
        const heroRect = heroSection?.getBoundingClientRect();
        if (!heroRect) return;

        const waveCenterX = waveRect.left + waveRect.width / 2 - heroRect.left;
        const waveCenterY = waveRect.top + waveRect.height / 2 - heroRect.top;
        
        const distance = Math.sqrt((x - waveCenterX) ** 2 + (y - waveCenterY) ** 2);
        
        if (distance < 300) {
          const intensity = (300 - distance) / 300;
          const offsetX = (x - waveCenterX) * intensity * 0.3;
          const offsetY = (y - waveCenterY) * intensity * 0.3;
          
          waveElement.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${1 + intensity * 0.2})`;
          
          // Return to normal after disturbance
          setTimeout(() => {
            waveElement.style.transform = '';
          }, 2000);
        }
      });
    };

    // Mouse move handler
    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      // Move interactive wave
      if (interactiveWave) {
        interactiveWave.style.left = `${x - 50}px`;
        interactiveWave.style.top = `${y - 50}px`;
      }

      // Add interactive class to silk waves and apply mouse influence
      silkWaves.forEach((wave, index) => {
        const waveElement = wave as HTMLElement;
        waveElement.classList.add('interactive');
        
        // Calculate influence based on distance
        const waveRect = waveElement.getBoundingClientRect();
        const waveCenterX = waveRect.left + waveRect.width / 2 - rect.left;
        const waveCenterY = waveRect.top + waveRect.height / 2 - rect.top;
        
        const distance = Math.sqrt((x - waveCenterX) ** 2 + (y - waveCenterY) ** 2);
        const influence = Math.max(0, 200 - distance) / 200;
        
        const offsetX = (x - waveCenterX) * influence * 0.1;
        const offsetY = (y - waveCenterY) * influence * 0.1;
        
        waveElement.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${1 + influence * 0.1})`;
      });
    };

    // Mouse click handler for stone effect
    const handleMouseClick = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      if (!heroSection) return;
      
      const rect = heroSection.getBoundingClientRect();
      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;
      
      createStoneEffect(x, y);
    };

    // Initialize
    createInteractiveWave();
    
    // Add event listeners
    heroSection?.addEventListener('mousemove', handleMouseMove);
    heroSection?.addEventListener('click', handleMouseClick);

    // Cleanup
    return () => {
      heroSection?.removeEventListener('mousemove', handleMouseMove);
      heroSection?.removeEventListener('click', handleMouseClick);
      interactiveWave?.remove();
      ripples.forEach(ripple => ripple.remove());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-gray-900">Rebecca Huang</div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</Link>
              <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>
            <div className="flex space-x-4">
              <a href="mailto:rebecca.huang@example.com" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/rebecca-huang" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                </svg>
              </a>
              <a href="https://github.com/rebecca-huang" className="text-gray-600 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen */}
      <section id="hero-section" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Silk-like Wave Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="silk-wave"></div>
          <div className="silk-wave"></div>
          <div className="silk-wave"></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex space-x-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">UX Researcher</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Product Designer</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Designing Human-Centered AI Products
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                I turn complex systems into intuitive, delightful experiences. Currently focusing on AI-powered tools and multi-format knowledge platforms.
              </p>
              <div className="flex space-x-4">
                <a href="#work" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
                  View My Work
                </a>
                <a href="/resume.pdf" className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
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

      {/* Smooth Water Transition */}
      <div className="relative overflow-hidden -mt-1">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-50"></div>
        <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none"
             style={{ filter: 'drop-shadow(0 -10px 20px rgba(0,0,0,0.02))' }}>
          <defs>
            <radialGradient id="water-gradient-1" cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
              <stop offset="40%" stopColor="rgba(168,85,247,0.20)" />
              <stop offset="80%" stopColor="rgba(59,130,246,0.12)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="water-gradient-2" cx="30%" cy="70%" r="80%">
              <stop offset="0%" stopColor="rgba(236,72,153,0.12)" />
              <stop offset="50%" stopColor="rgba(219,39,119,0.08)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <radialGradient id="water-gradient-3" cx="70%" cy="30%" r="60%">
              <stop offset="0%" stopColor="rgba(16,185,129,0.10)" />
              <stop offset="60%" stopColor="rgba(52,211,153,0.06)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <filter id="water-blur" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3"/>
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1.2 0"/>
            </filter>
          </defs>
          
          {/* Seamless water flow from hero to content */}
          <path d="M0,120 Q150,80 300,90 T600,85 T900,90 T1200,85 L1200,120 Z" 
                fill="url(#water-gradient-1)" 
                filter="url(#water-blur)" 
                opacity="0.3">
            <animate
              attributeName="d"
              values="M0,120 Q150,80 300,90 T600,85 T900,90 T1200,85 L1200,120 Z;
                      M0,120 Q150,70 300,95 T600,75 T900,95 T1200,75 L1200,120 Z;
                      M0,120 Q150,90 300,80 T600,95 T900,80 T1200,95 L1200,120 Z;
                      M0,120 Q150,80 300,90 T600,85 T900,90 T1200,85 L1200,120 Z"
              dur="40s"
              repeatCount="indefinite"/>
          </path>
          
          <ellipse cx="300" cy="60" rx="200" ry="40" 
                   fill="url(#water-gradient-1)" 
                   filter="url(#water-blur)" 
                   opacity="0.2">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="-200 0; 800 0; -200 0"
              dur="45s"
              repeatCount="indefinite"/>
            <animate
              attributeName="ry"
              values="40; 60; 30; 40"
              dur="35s"
              repeatCount="indefinite"/>
          </ellipse>
          
          <ellipse cx="600" cy="80" rx="250" ry="50" 
                   fill="url(#water-gradient-2)" 
                   filter="url(#water-blur)" 
                   opacity="0.3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="400 0; -600 0; 400 0"
              dur="55s"
              repeatCount="indefinite"/>
            <animate
              attributeName="rx"
              values="250; 180; 300; 250"
              dur="40s"
              repeatCount="indefinite"/>
          </ellipse>
          
          <ellipse cx="900" cy="50" rx="180" ry="35" 
                   fill="url(#water-gradient-3)" 
                   filter="url(#water-blur)" 
                   opacity="0.5">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="-300 0; 500 0; -300 0"
              dur="50s"
              repeatCount="indefinite"/>
            <animate
              attributeName="cy"
              values="50; 70; 40; 50"
              dur="30s"
              repeatCount="indefinite"/>
          </ellipse>
          
          {/* Smaller water droplets */}
          <circle cx="150" cy="70" r="30" 
                  fill="url(#water-gradient-1)" 
                  filter="url(#water-blur)" 
                  opacity="0.2">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="0 0; 900 0; 0 0"
              dur="42s"
              repeatCount="indefinite"/>
          </circle>
          
          <circle cx="1050" cy="90" r="25" 
                  fill="url(#water-gradient-2)" 
                  filter="url(#water-blur)" 
                  opacity="0.3">
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="translate"
              values="200 0; -1000 0; 200 0"
              dur="38s"
              repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

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
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1">
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/filegpt_mockup.png"
                    alt="FileGPT Application Mockup"
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
                    FileGPT
                  </h3>
                  <p className="text-gray-600 mb-4">
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

            {/* Offerplz */}
            <Link href="/work/offerplz" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1" style={{animationDelay: '0.1s'}}>
                <div className="h-64 relative overflow-hidden bg-gray-50 flex items-center justify-center">
                  <Image 
                    src="/offer_mock.png"
                    alt="Offerplz Application Mockup"
                    width={400}
                    height={256}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl font-bold drop-shadow-lg">→</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Offerplz
                  </h3>
                  <p className="text-gray-600 mb-4">
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

            {/* Aispire */}
            <Link href="/work/aispire" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1" style={{animationDelay: '0.2s'}}>
                <div className="h-64 relative overflow-hidden bg-gray-50 flex items-center justify-center">
            <Image
                    src="/aispire_mock.png"
                    alt="Aispire Application Mockup"
                    width={400}
                    height={256}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 text-gray-700 text-2xl font-bold drop-shadow-lg">
                    →
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Aispire
                  </h3>
                  <p className="text-gray-600 mb-4">
                    AI-driven inspiration and creativity platform that helps users discover new ideas and generate innovative solutions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">UX Design&Research</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">AI/ML</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Education</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* OpenPromo */}
            <div className="group cursor-not-allowed">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 animate-fade-in-up opacity-75" style={{animationDelay: '0.3s'}}>
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative">
                  <div className="text-white text-6xl mb-4 opacity-50">📊</div>
                  <div className="absolute top-4 right-4 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-500 mb-2">
                    OpenPromo
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Multi-tenant social content management platform for marketing teams with advanced analytics and collaboration tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">Product Design</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">SaaS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">B2B</span>
                  </div>
                </div>
              </div>
            </div>
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
              <Link href="#about" className="hover:text-gray-300 transition-colors">About</Link>
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
                <a href="https://linkedin.com/in/rebecca-huang" className="text-gray-400 hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" />
                  </svg>
                </a>
                <a href="https://github.com/rebecca-huang" className="text-gray-400 hover:text-white">
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
