"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function CountUp({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const { ref, inView } = useInView();
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function BioVisionCaseStudy() {
  useEffect(() => {
    // Fade-in sections on scroll
    const fadeEls = document.querySelectorAll('.fade-section');
    const fadeObserver = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).style.opacity = '1'; (e.target as HTMLElement).style.transform = 'translateY(0)'; } }),
      { threshold: 0.08 }
    );
    fadeEls.forEach(el => fadeObserver.observe(el));

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    navLinks.forEach(link => {
      link.addEventListener('click', function(this: HTMLElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-section');
        const targetSection = document.getElementById(targetId!);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

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
      <div className="flex max-w-7xl mx-auto">
        {/* Left Navigation */}
        <aside id="left-nav" className="w-56 bg-gray-50 h-screen sticky top-20 hidden lg:block">
          <nav className="p-6">
            <ul className="space-y-2">
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">TL;DR</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="tldr">Impact</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="context">Context</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="research">Research</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="key-features">Key Features</span></li>
              <li><span className="nav-link block py-2 px-3 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer" data-section="approach">Design Process</span></li>
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
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">Product Design</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">AI/ML</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm font-medium">Wildlife Research</span>
              </div>

              {/* Project Title */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">BioVision</h1>

              {/* Metadata Row */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-8">
                <span><strong>Role:</strong> Product Designer & Engineer (Full-stack)</span>
                <span><strong>Duration:</strong> 6 Months</span>
                <span><strong>Sponsor:</strong> AWS · Washington Department of Wildlife</span>
                <span><strong>Team:</strong> Steven Liang · Sherry Wang</span>
                <a href="https://main.d1wmo5l9t2cby7.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors">
                  <strong>Live Site</strong>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>

              {/* Hero Visual */}
              <div className="bg-neutral-100 rounded-xl overflow-hidden flex items-center justify-center p-[2.5%]">
                <Image src="/749shots_so.png" alt="BioVision" width={1920} height={1080} unoptimized className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </section>

          {/* TL;DR Section */}
          <section id="tldr" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">TL;DR</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Problem</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Wildlife researchers spend enormous time manually reviewing thousands of trail camera images to identify beavers — a slow, error-prone process that delays research insights by weeks.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-3">Solution</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Designed BioVision, an AI-powered system that detects wildlife animals in large-scale camera trap datasets and streamlines wildlife monitoring through an AI + human verification workflow.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-5">Impact</h3>
                <div className="border-b border-gray-300">
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">0→1</p>
                    <p className="text-lg text-[#334155] leading-relaxed">Designed a full AI-assisted wildlife research workflow platform from scratch.</p>
                  </div>
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">↓ <CountUp target={90} suffix="%" /></p>
                    <p className="text-lg text-[#334155] leading-relaxed">Reduced manual image review time by 90% through automated beaver detection.</p>
                  </div>
                  <div className="py-[20px] border-t border-gray-300 grid grid-cols-[120px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6">
                    <p className="text-3xl font-bold text-gray-900">↓ <CountUp target={20} suffix="%" /></p>
                    <p className="text-lg text-[#334155] leading-relaxed">Manual correction rate halved following the introduction of the dual-agent pipeline.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Context Section */}
          <section id="context" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Context</h2>
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  Beavers play a critical role in restoring stream ecosystems. By building dams, they slow water flow, increase water retention, and create habitats that support salmon migration and spawning. As a result, monitoring beaver activity has become an important indicator for ecological restoration efforts.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Wildlife researchers deploy camera traps along streams to observe animal activity, but these cameras generate thousands of images that must be manually reviewed. Identifying beavers within these large datasets is time-consuming and difficult to scale, creating a major bottleneck for ecological monitoring.
                </p>
              </div>
            </div>
          </section>

          {/* Placeholder sections */}
          <section id="research" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Research</h2>

              <div className="space-y-8">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">01</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Understanding the biologist&apos;s workflow</h3>
                  <p className="text-base text-gray-600 leading-relaxed">
                    We conducted in-depth interviews with the wildlife biologists who serve as our primary stakeholders. Their core workflow involves deploying camera traps in the field (cameras strapped to trees that automatically trigger when motion is detected). Every few months, they retrieve the SD cards and manually review all captured images on their own computers.
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-red-300 mb-4">Key Pain Points</p>
                  <ul className="list-disc pl-5 space-y-2 mt-2">
                    <li className="text-base text-gray-600 leading-relaxed">Large volumes of images must be reviewed manually</li>
                    <li className="text-base text-gray-600 leading-relaxed">Many images contain empty scenes triggered by birds or motion</li>
                    <li className="text-base text-gray-600 leading-relaxed">Researchers must manually distinguish beavers from similar species such as nutria, mink, and otters</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">02</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Market &amp; Tool Audit</h3>
                  <div className="space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed">
                      We evaluated open-source wildlife detection models available on the market. One widely cited model, SpeciesNet, claimed general animal detection capability, but when tested against our dataset, it failed to register beavers as animals at all. Because beavers are often only partially visible in frame and appear in low-contrast grayscale images, the model&apos;s detection pipeline broke down at the very first step.
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed">
                      This was a critical finding: if a model cannot identify a beaver as an animal, it has no chance of classifying it at the species level. No existing off-the-shelf tool could reliably handle our use case.
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-red-300 mb-4">Key Insights</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li className="text-base text-gray-600 leading-relaxed">Many models failed to detect beavers when only partial body parts were visible</li>
                    <li className="text-base text-gray-600 leading-relaxed">Most images were nighttime grayscale photos, which significantly reduced detection performance</li>
                    <li className="text-base text-gray-600 leading-relaxed">Existing animal-detection models often failed to recognize beavers as animals at all</li>
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">03</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Iteration</h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    Armed with a labeled dataset provided by stakeholders (approximately 600–700 images), the team ran three successive technical experiments before arriving at the final approach.
                  </p>

                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="grid grid-cols-3 bg-gray-50 border-b border-gray-200">
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Approach</div>
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">What we tried</div>
                      <div className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-gray-400">Outcome</div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200">
                      <div className="px-4 py-4 text-sm font-medium text-gray-900">Traditional ML classifier</div>
                      <div className="px-4 py-4 text-sm text-gray-600">Fed beaver images and empty-scene images into a binary classification model</div>
                      <div className="px-4 py-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-400 mb-1">Insufficient</span>
                        <p className="text-sm text-gray-500">Dataset too small; poor generalization</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 border-b border-gray-200">
                      <div className="px-4 py-4 text-sm font-medium text-gray-900">YOLOv8 fine-tuning</div>
                      <div className="px-4 py-4 text-sm text-gray-600">Manually annotated bounding boxes for all beaver images; trained via Roboflow</div>
                      <div className="px-4 py-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-500 mb-1">Partial</span>
                        <p className="text-sm text-gray-500">~80% accuracy but recall remained poor</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <div className="px-4 py-4 text-sm font-medium text-gray-900">LLM agent</div>
                      <div className="px-4 py-4 text-sm text-gray-600">Leveraged a vision-language model with structured prompting</div>
                      <div className="px-4 py-4">
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-500 mb-1">Adopted</span>
                        <p className="text-sm text-gray-500">Flexible, no retraining needed</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">04</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Scope Evolution — Two late requirements reinforced the pivot</h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    During the research process, stakeholders introduced two additional requirements that further shaped the technical direction:
                  </p>
                  <div className="space-y-5 mb-8">
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">Sequence-based detection</p>
                      <p className="text-base text-gray-600 leading-relaxed">Camera traps fire in bursts of three consecutive frames. A beaver may appear in only one of three shots. Stakeholders needed detection to operate at the sequence level — not per-image — to avoid false negatives across a capture event.</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">General animal pre-filtering</p>
                      <p className="text-base text-gray-600 leading-relaxed">The desired workflow was two-stage: first filter for any animal presence, then identify beaver specifically. But as established in the tool audit, no reliable general-purpose animal detector existed that could handle our image conditions. This reinforced the case for an AI agent capable of reasoning across both steps simultaneously.</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <p className="text-xs font-semibold tracking-widest uppercase text-green-400 mb-3">Design Opportunity</p>
                    <p className="text-base text-gray-700 leading-relaxed mb-4">
                      Instead of relying solely on traditional machine learning models, we explored an AI-assisted detection agent that could analyze camera trap images using contextual reasoning and sequence-based understanding. This approach would allow the system to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li className="text-base text-gray-600 leading-relaxed">Identify animals even when partially visible</li>
                      <li className="text-base text-gray-600 leading-relaxed">Reason across image sequences</li>
                      <li className="text-base text-gray-600 leading-relaxed">Better handle low-light grayscale images</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="key-features" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>

              <div className="space-y-12">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">01</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Beaver and Species Identification</h3>
                  <Image
                    src="/biovisiondemo1.gif"
                    alt="Beaver and species identification demo"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">02</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Chatbot</h3>
                  <Image
                    src="/biovisiondemo2.gif"
                    alt="Chatbot demo"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">03</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">History</h3>
                  <Image
                    src="/biovisiondemo3.gif"
                    alt="History demo"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">04</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Manual Review & CSV Export</h3>
                  <Image
                    src="/biovisiondemo4.gif"
                    alt="Manual review and CSV export demo"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="approach" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Process</h2>

              <div className="space-y-12">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">01</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload & Detection</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-4">Pain point: manually reviewing large volumes of images one by one is extremely inefficient.</p>
                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                    <Image
                      src="/bvd1v1.png?v=2"
                      alt="Upload and detection v1"
                      width={1200}
                      height={800}
                      unoptimized
                      className="w-full h-auto rounded-xl border border-gray-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Version 1</h4>
                      <p className="text-base text-gray-600 leading-relaxed mb-3">A minimal first pass: upload and detect</p>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">The first version let biologists upload images locally and run a beaver detection job. It validated the core concept, but local file upload quickly proved impractical — biologists retrieve hundreds of images at a time and needed a faster way to get data into the tool.</p>
                      <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-red-300 mb-2">Problem</h5>
                      <p className="text-base text-gray-600 leading-relaxed">Local upload didn&apos;t scale to real batch sizes</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                  <Image
                    src="/bvd1v2.png?v=2"
                    alt="Upload and detection v2"
                    width={1200}
                    height={800}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Version 2</h4>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">We added an S3 path input so biologists could point directly at their existing cloud storage</p>
                    <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-red-300 mb-2">Problem</h5>
                    <p className="text-base text-gray-600 leading-relaxed">When uploading a large dataset, there was no progress indicator — users assumed the system had crashed.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Final Design</h4>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">Added a progress bar and summary panel so biologists can track job status and see detection results at a glance.</p>
                  </div>
                  <Image
                    src="/bvd1v3.png?v=3"
                    alt="Upload and detection v3"
                    width={1200}
                    height={800}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                  <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-green-400 mt-4 mb-2">Impact</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">Reduced manual image review time by 90%, enabling biologists to process hundreds of trail camera images in minutes rather than hours.</p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">02</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Review Results</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-4">Pain point: AI detection results are not trustworthy and require manual verification, but there are no tools to support that process.</p>
                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start mb-4">
                    <Image
                      src="/bvd2v1.png"
                      alt="Review Results v1"
                      width={1200}
                      height={800}
                      unoptimized
                      className="w-full h-auto rounded-xl border border-gray-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Version 1</h4>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">The first version only showed beaver agent results alongside a basic review table. While it confirmed whether a beaver was present, it offered no way to cross-validate uncertain detections.</p>
                      <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-red-300 mb-2">Problem</h5>
                      <p className="text-base text-gray-600 leading-relaxed">Single agent produced unreliable results on ambiguous images.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                  <Image
                    src="/bvd2v2.png"
                    alt="Review Results v2"
                    width={1200}
                    height={800}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Version 2</h4>
                    <p className="text-base text-gray-600 leading-relaxed mb-4">A second animal detection agent was added. When the two agents returned conflicting outputs, the row was flagged for human review. However, biologists still had to manually locate each flagged image in AWS S3 to verify it — a slow and frustrating process.</p>
                    <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-red-300 mb-2">Problem</h5>
                    <p className="text-base text-gray-600 leading-relaxed">No inline image preview — reviewing flagged results required leaving the tool entirely.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Final Design</h4>
                    <p className="text-base text-gray-600 leading-relaxed">The final version added an animal detection agent to the summary, giving biologists a clearer breakdown of what was found. An inline image preview was also introduced so biologists can review flagged results directly on the page — without having to locate and open each file manually in S3.</p>
                  </div>
                  <Image
                    src="/bvd2final.gif"
                    alt="Review Results final design"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                  <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-green-400 mt-4 mb-2">Impact</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">Detection accuracy improved from 92% to 97% following the introduction of the dual-agent pipeline. Manual correction rate dropped from 40% to 20%, reflecting increased confidence in AI-generated results.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <div className="space-y-12">
                <div>
                  <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">03</p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Chatbot</h3>
                  <p className="text-base text-gray-500 leading-relaxed mb-4">Pain point: after detection, there are no data analysis tools to make sense of the results.</p>
                  <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-5 items-start">
                    <Image
                      src="/bvd3v1.png"
                      alt="AI Chatbot v1"
                      width={1200}
                      height={800}
                      unoptimized
                      className="w-full h-auto rounded-xl border border-gray-200"
                    />
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-1">Version 1</h4>
                      <p className="text-sm font-semibold text-gray-700 mb-3">Chatbot embedded in workflow</p>
                      <p className="text-base text-gray-600 leading-relaxed mb-4">The chatbot was embedded directly alongside the detection results on the Workflow page, so users could ask questions immediately after a detection run.</p>
                      <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-red-300 mb-2">Problem</h5>
                      <ul className="list-disc pl-5 space-y-2">
                        <li className="text-base text-gray-600 leading-relaxed">Mixing two features in one view made the interface too complex</li>
                        <li className="text-base text-gray-600 leading-relaxed">The chatbot should support uploading historical CSVs, not just the current detection session</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-[0.1em] text-[#0f172a] mb-2">Final Design</h4>
                    <p className="text-base text-gray-600 leading-relaxed">The chatbot was moved to a dedicated page so biologists can upload any CSV, including historical data, and query it through natural language without needing Excel or leaving the tool.</p>
                  </div>
                  <Image
                    src="/bvd3final.gif"
                    alt="AI Chatbot final design"
                    width={900}
                    height={506}
                    unoptimized
                    className="w-full h-auto rounded-xl border border-gray-200"
                  />
                  <h5 className="text-xs font-bold uppercase tracking-[0.1em] text-green-400 mt-4 mb-2">Impact</h5>
                  <p className="text-sm text-gray-500 leading-relaxed">Expanded the tool beyond a single research team. Biologists working with any wildlife species can upload their own CSV and query their data through natural language, making the platform applicable across broader conservation workflows.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="reflection" className="px-6 py-16 border-t border-gray-200 fade-section" style={{opacity: 0, transform: "translateY(24px)", transition: "opacity 0.6s ease, transform 0.6s ease"}}>
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Reflection</h2>
              <div className="space-y-6">
                <p className="text-base text-gray-600 leading-relaxed">
                  Working on BioVision offered a rare opportunity to apply large vision-language models to a domain where AI adoption is still in its early stages. Wildlife camera trap analysis has traditionally relied on manual review or conventional machine learning, both of which struggle with the realities of field data: low-light grayscale images, partially visible subjects, and visually similar species. Shifting to an AI agent approach proved far more resilient to these conditions, and the biologists from the Washington Department of Fish and Wildlife responded with genuine excitement. For them, seeing AI meaningfully reduce a workflow that had been unchanged for years was a significant moment.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  The comparison between traditional ML and the agent-based approach was one of the most instructive parts of the project. Fine-tuned models like YOLOv8 delivered reasonable accuracy on clean data but broke down on edge cases that field conditions routinely produce. The agent approach, by contrast, could reason across ambiguous images without retraining — a critical advantage in a domain where labeled datasets are small and expensive to produce.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Looking ahead, the most meaningful next step would be opening the detection pipeline to user-defined prompts. Currently the tool is built around beaver identification, but the underlying architecture is not species-specific. If biologists could specify their own target species, BioVision could become a general-purpose wildlife monitoring platform applicable across research teams, conservation programs, and ecosystems far beyond the Pacific Northwest.
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
            <Link href="/work/openpromo" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
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
            <p className="text-gray-600 text-sm">© 2025 Rebecca Huang. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
