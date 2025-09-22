'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function CyclePage() {
  useEffect(() => {
    // Smooth scrolling and active navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const targetId = (e.target as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetSection = document.getElementById(targetId || '');
        
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
        link.classList.remove('bg-gray-200', 'text-indigo-600');
        if (link.getAttribute('href')?.substring(1) === current) {
          (link as HTMLElement).style.color = '#891A28';
          (link as HTMLElement).style.backgroundColor = 'rgba(189, 62, 77, 0.1)';
        } else {
          (link as HTMLElement).style.color = '';
          (link as HTMLElement).style.backgroundColor = '';
        }
      });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateActiveNav);
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
              <a href="/" className="text-gray-600 hover:text-indigo-600 transition-colors">Home</a>
              <a href="/#work" className="text-gray-600 hover:text-indigo-600 transition-colors">Work</a>
              <a href="/#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
              <a href="/#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>
          </div>
          <div className="mt-3">
            <a href="/#work" className="text-cyan-600 hover:text-indigo-600 transition-colors text-sm flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex max-w-7xl mx-auto">
        
        {/* Left Navigation */}
        <aside className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              <li><a href="#overview" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Overview</a></li>
              <li><a href="#tldr" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>TL;DR</a></li>
              <li><a href="#mission" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Mission</a></li>
              <li><a href="#design" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Design</a></li>
              <li>
                <a href="#brand-application" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Brand Application</a>
                <ul className="ml-4 mt-2 space-y-1">
                  <li><a href="#animation" className="nav-link block py-1 px-3 rounded-md text-xs font-medium text-gray-500 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Animation</a></li>
                  <li><a href="#cyclenyc-campaign" className="nav-link block py-1 px-3 rounded-md text-xs font-medium text-gray-500 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>CycleNYC Campaign</a></li>
                </ul>
              </li>
              <li><a href="#cycle-app" className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 transition-colors cursor-pointer" onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#891A28'; (e.target as HTMLElement).style.backgroundColor = 'rgb(255, 248, 250)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = ''; (e.target as HTMLElement).style.backgroundColor = ''; }}>Cycle App</a></li>
            </ul>
          </nav>
        </aside>

        {/* Right Content */}
        <main className="flex-1 lg:ml-8">
          {/* Hero Section */}
          <section id="overview" className="px-6 py-16">
            <div className="max-w-4xl">
              {/* Tag Row */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium shadow-sm">Brand Identity</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium shadow-sm">Visual Design</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium shadow-sm">Women&apos;s Wellness</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium shadow-sm">Brand Strategy</span>
              </div>
              
              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#891A28' }}>Cycle</h1>
              
              {/* One-liner Description */}
              <p className="text-lg lg:text-xl text-gray-600 mb-6 leading-relaxed">
              A brand dedicated to empowering women and facilitating their well-being during their menstrual journey.
              </p>
              
              {/* Metadata Row */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-8">
                <div>
                  <span className="font-semibold text-gray-900">Project:</span>
                  <div className="text-gray-600">School Project</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Role:</span>
                  <div className="text-gray-600">
                    Product Manager<br/>
                    3D Designer<br/>
                    Visual Designer
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Team:</span>
                  <div className="text-gray-600">
                    Rebecca Huang<br/>
                    Emmeline Tantry<br/>
                    Winnie Zheng<br/>
                    Kristin Kweon
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Tools:</span>
                  <div className="text-gray-600">
                    Figma<br/>
                    Adobe Illustrator<br/>
                    Maya
                  </div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Duration:</span>
                  <div className="text-gray-600">1 Month</div>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Year:</span>
                  <div className="text-gray-600">2023</div>
                </div>
              </div>
              
              <div className="rounded-2xl p-8 text-white mb-8" style={{ backgroundColor: 'rgb(255, 248, 250)' }}>
                <div className="w-full h-64 flex items-center justify-center bg-white/10 rounded-xl">
                  <Image
                    src="/lockup_red.png"
                    alt="Cycle brand logo"
                    width={300}
                    height={200}
                    className="w-auto h-full object-contain"
                  />
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Cycle is a monthly subscription service designed specifically for women who want a more convenient way to manage their menstrual cycle. The user can choose the type and quantity of products and the range of medicine needed. Cyclo ensures the user always has the supplies when they need them.</p>
                
                <div className="mt-6 text-center">
                  <h2 className="text-2xl font-bold italic" style={{ color: '#891A28' }}>"No More Stress. Period."</h2>
                </div>
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200 bg-gray-50">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Who</h3>
                  <p className="text-gray-600">Women who are looking for a more convenient way to manage their menstrual cycle.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What</h3>
                  <p className="text-gray-600">A subscription service that delivers feminine products and medicine based on user's preferences.</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Values</h3>
                  <p className="text-gray-600">Convenience, Comfort, Privacy, Empathy, Reliability</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section id="mission" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Our commitment to reliable delivery means you can stay stress-free through every cycle, period.
              </p>
            </div>
          </section>



          {/* Design Section */}
          <section id="design" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Design</h2>
              
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography</h3>
                  <div className="space-y-8">
                    {/* Heading */}
                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right">
                        <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>Heading</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>Minion Variable Concept Semibold</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>abcdefghijklmnopqrstuvwxyz</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>0123456789</div>
                      </div>
                    </div>
                    
                    {/* Subhead */}
                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right">
                        <div className="text-lg font-semibold mb-1 italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>Subhead</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600 mb-2 italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>Sometimes Times Italic</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>abcdefghijklmnopqrstuvwxyz</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>0123456789</div>
                      </div>
                    </div>
                    
                    {/* Body Copy */}
                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right">
                        <div className="text-lg font-semibold mb-1" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>Body Copy</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>Futura PT Book</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>abcdefghijklmnopqrstuvwxyz</div>
                        <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>0123456789</div>
                      </div>
                    </div>
                    
                    {/* Captions */}
                    <div className="grid grid-cols-2 gap-8 items-start">
                      <div className="text-right">
                        <div className="text-lg font-semibold mb-1 italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>Captions</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-600 mb-2 italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>Futura PT Light Oblique</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>ABCDEFGHIJKLMNOPQRSTUVWXYZ</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>abcdefghijklmnopqrstuvwxyz</div>
                        <div className="text-sm italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>0123456789</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Typography Usage</h3>
                  <div className="space-y-6">
                    {/* H1 Headlines */}
                    <div className="space-y-2">
                      <div className="text-2xl font-semibold" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600', lineHeight: '30px' }}>H1 Headlines Minion Variable Concept Semibold</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-cycle-heading)', fontWeight: '600' }}>36 pt / 30 pt leading</div>
                    </div>
                    
                    {/* H3 Headlines */}
                    <div className="space-y-2">
                      <div className="text-lg italic" style={{ fontFamily: 'var(--font-cycle-subhead)', lineHeight: '24px' }}>H3 Headlines Sometimes Times Italic</div>
                      <div className="text-sm text-gray-600 italic" style={{ fontFamily: 'var(--font-cycle-subhead)' }}>18 pt / 24 pt leading</div>
                    </div>
                    
                    {/* Body Copy */}
                    <div className="space-y-2">
                      <div className="text-sm" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400', lineHeight: '16.8px' }}>Body Copy Futura PT Book</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)', fontWeight: '400' }}>14 pt / 16.8 pt leading</div>
                    </div>
                    
                    {/* Caption Detail */}
                    <div className="space-y-2">
                      <div className="text-xs italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300', lineHeight: '12px' }}>caption detail Futura PT Light Oblique</div>
                      <div className="text-sm text-gray-600 italic" style={{ fontFamily: 'var(--font-cycle-caption)', fontWeight: '300' }}>10 pt / 12 pt leading</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Graphic Mark</h3>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        This graphic mark represents the Cycle brand and conveys the message of caring and cycling. It draws inspiration from the letter C in Cycle's wordmark and has been designed as a heart-shaped image formed from cycling-related elements.
                      </p>
                    </div>
                    <div className="flex justify-center gap-6">
                      <div className="flex justify-center items-center w-48 h-48" style={{ backgroundColor: '#FFF8FA' }}>
                        <Image
                          src="/logo red.png"
                          alt="Cycle graphic mark"
                          width={200}
                          height={200}
                          className="w-auto h-40 object-contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-48 h-48" style={{ backgroundColor: '#891A28' }}>
                        <Image
                          src="/logo white.png"
                          alt="Cycle graphic mark white"
                          width={200}
                          height={200}
                          className="w-auto h-40 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Wordmark</h3>
                  <div className="grid grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <p className="text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        This is Cycle's word mark, designed using the Sometimes Times typeface. The word starts with a capitalized "C," followed by lowercase "ycle." To achieve balance, the letters "c" and "e" have been horizontally stretched to resemble a circle shape. The word mark on a lighter background uses the color HEX #891A28.
                      </p>
                      <p className="text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        The word mark on a darker background uses the color HEX #891A28.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                      <div className="flex justify-center items-center w-48 h-48" style={{ backgroundColor: '#FFF8FA' }}>
                        <Image
                          src="/wordmark red.png"
                          alt="Cycle wordmark red"
                          width={200}
                          height={200}
                          className="w-auto h-40 object-contain"
                        />
                      </div>
                      <div className="flex justify-center items-center w-48 h-48" style={{ backgroundColor: '#891A28' }}>
                        <Image
                          src="/wordmark_white.png"
                          alt="Cycle wordmark white"
                          width={200}
                          height={200}
                          className="w-auto h-40 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Clear Space</h3>
                  <div className="flex justify-center">
                    <Image
                      src="/wordmark_clearspace-01.png"
                      alt="Cycle wordmark clear space guidelines"
                      width={400}
                      height={300}
                      className="w-auto h-64 object-contain"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Lockup</h3>
                  <div className="grid grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <p className="text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        This is the lockup for Cycle. The arrow head of the graphic mark changed to flow into the word mark smoother in the lockup. The "ycle" should be placed inside the heart, next to the letter "C" and the arrow. Forming the word "Cycle".
                      </p>
                      <p className="text-gray-600" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        Here are two important guidelines to follow when creating the lockup.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center gap-6">
                      <div className="flex justify-center">
                        <Image
                          src="/lockup_red.png"
                          alt="Cycle lockup"
                          width={300}
                          height={200}
                          className="w-auto h-48 object-contain"
                        />
                      </div>
                      <div className="flex justify-center">
                        <Image
                          src="/Asset 27@4x.png"
                          alt="Cycle lockup with guidelines"
                          width={300}
                          height={200}
                          className="w-auto h-48 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Color Palette</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Cycle's color palette is inspired by the menstrual cycle of women, reflecting the colors of blood and life. The primary colors for Cycle are HEX #891A28 and HEX #FFF8FA, which work well on various backgrounds, from light to dark. These two colors should cover most situations, while the others serve as supporting colors.
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm" style={{ backgroundColor: '#891A28' }}></div>
                      <div className="text-xs font-mono text-gray-600">#891A28</div>
                      <div className="text-xs text-gray-500">R: 137, G: 26, B: 40</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm border border-gray-200" style={{ backgroundColor: '#FFF8FA' }}></div>
                      <div className="text-xs font-mono text-gray-600">#FFF8FA</div>
                      <div className="text-xs text-gray-500">R: 255, G: 248, B: 250</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm" style={{ backgroundColor: '#F299A3' }}></div>
                      <div className="text-xs font-mono text-gray-600">#F299A3</div>
                      <div className="text-xs text-gray-500">R: 242, G: 153, B: 163</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm" style={{ backgroundColor: '#F04F62' }}></div>
                      <div className="text-xs font-mono text-gray-600">#F04F62</div>
                      <div className="text-xs text-gray-500">R: 240, G: 79, B: 98</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm" style={{ backgroundColor: '#7B010F' }}></div>
                      <div className="text-xs font-mono text-gray-600">#7B010F</div>
                      <div className="text-xs text-gray-500">R: 123, G: 1, B: 15</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-2 rounded-lg shadow-sm" style={{ backgroundColor: '#BD3E4D' }}></div>
                      <div className="text-xs font-mono text-gray-600">#BD3E4D</div>
                      <div className="text-xs text-gray-500">R: 189, G: 62, B: 77</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-8">Visual</h3>
                  <div className="space-y-16">
                    <div className="flex justify-center">
                      <Image
                        src="/Outdoor Mockup red.png"
                        alt="Cycle outdoor mockup red"
                        width={600}
                        height={400}
                        className="w-full max-w-4xl h-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/Outdoor Mockup white.png"
                        alt="Cycle outdoor mockup white"
                        width={600}
                        height={400}
                        className="w-full max-w-4xl h-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/Postcard Mockup.jpg"
                        alt="Cycle postcard mockup"
                        width={600}
                        height={400}
                        className="w-full max-w-4xl h-auto object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src="/MacBook Air.jpg"
                        alt="Cycle MacBook mockup"
                        width={600}
                        height={400}
                        className="w-full max-w-4xl h-auto object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Brand Application Section */}
          <section id="brand-application" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Application</h2>
              
              <div className="space-y-12">
                <div id="animation" className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Animation</h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                    This animation showcases the Cycle brand identity in motion, demonstrating how the logo and wordmark work together to create a cohesive and memorable brand experience.
                  </p>
                  <div className="flex justify-center">
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      preload="metadata"
                      className="w-full max-w-4xl h-auto rounded-lg shadow-lg"
                    >
                      <source src="/full_premiere.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                
                <div id="cyclenyc-campaign" className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">CycleNYC Campaign</h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                    The CycleNYC campaign celebrates the cyclical nature of women's wellness throughout the four seasons, showcasing how Cycle adapts to support women's needs year-round. The campaign includes seasonal animations, poster displays, and comprehensive event details.
                  </p>
                  
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Seasonal Animations</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h5 className="text-md font-medium text-gray-800">Spring</h5>
                          <div className="flex justify-center">
                            <video
                              controls
                              autoPlay
                              loop
                              muted
                              preload="metadata"
                              className="w-full h-auto rounded-lg shadow-md"
                            >
                              <source src="/spring.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h5 className="text-md font-medium text-gray-800">Summer</h5>
                          <div className="flex justify-center">
                            <video
                              controls
                              autoPlay
                              loop
                              muted
                              preload="metadata"
                              className="w-full h-auto rounded-lg shadow-md"
                            >
                              <source src="/summer.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h5 className="text-md font-medium text-gray-800">Fall</h5>
                          <div className="flex justify-center">
                            <video
                              controls
                              autoPlay
                              loop
                              muted
                              preload="metadata"
                              className="w-full h-auto rounded-lg shadow-md"
                            >
                              <source src="/fall.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          <h5 className="text-md font-medium text-gray-800">Winter</h5>
                          <div className="flex justify-center">
                            <video
                              controls
                              autoPlay
                              loop
                              muted
                              preload="metadata"
                              className="w-full h-auto rounded-lg shadow-md"
                            >
                              <source src="/winter.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Poster Campaign</h4>
                      <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        The Cycle poster campaign showcases the brand's visual identity across different urban environments, creating awareness and engagement in key metropolitan areas.
                      </p>
                      <div className="space-y-8">
                        <div className="flex justify-center">
                          <Image
                            src="/CycleNYC Posters.png"
                            alt="Cycle NYC poster campaign"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/CycleNYC Posters2.png"
                            alt="Cycle NYC poster campaign 2"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/CycleNYC Posters3.png"
                            alt="Cycle NYC poster campaign 3"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/Cycle Posters4.png"
                            alt="Cycle multi-city poster campaign"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h4>
                      <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        The CycleNYC event features a comprehensive agenda and convenient location details to ensure attendees have the best experience.
                      </p>
                      <div className="space-y-8">
                        <div className="flex justify-center">
                          <Image
                            src="/CycleNYC Agenda.png"
                            alt="Cycle NYC event agenda"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/CycleNYC Map.png"
                            alt="Cycle NYC event location map"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">3D Event Renders</h4>
                      <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        These 3D renders showcase the CycleNYC event space design, providing a realistic preview of the booth layout and brand experience.
                      </p>
                      <div className="space-y-8">
                        <div className="flex justify-center">
                          <Image
                            src="/booth1.jpeg"
                            alt="Cycle NYC event booth render 1"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/booth2.jpeg"
                            alt="Cycle NYC event booth render 2"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="flex justify-center">
                          <Image
                            src="/booth3.jpeg"
                            alt="Cycle NYC event booth render 3"
                            width={800}
                            height={600}
                            className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Subscription Box</h4>
                      <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                        The Cycle subscription box represents the core product experience, delivering personalized feminine care products directly to customers' doors with thoughtful packaging and branding.
                      </p>
                      <div className="flex justify-center">
                        <Image
                          src="/Subscription_Box_Mockup.png"
                          alt="Cycle subscription box mockup"
                          width={800}
                          height={600}
                          className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cycle App Section */}
          <section id="cycle-app" className="px-6 py-16 border-t border-gray-200">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Cycle App</h2>
              
              <div className="space-y-12">
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">App Overview</h3>
                  <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cycle-body)' }}>
                    The Cycle App is one of the main ways users will be able to personalize and individualize their experience with the brand. It serves as a platform for subscription box management, personal menstrual tracking calendar, and information about Cycle conferences.
                  </p>
                  
                  <div className="flex justify-center">
                    <video
                      controls
                      preload="metadata"
                      className="w-80 h-auto rounded-lg shadow-lg"
                    >
                      <source src="/screen_recording_app_demo.mov" type="video/quicktime" />
                      <source src="/screen_recording_app_demo.mov" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
                <p className="text-gray-300 mb-6">Let&apos;s create something amazing.</p>
                <a href="mailto:your.email@example.com" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
