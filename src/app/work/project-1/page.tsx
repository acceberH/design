import Link from "next/link";

export default function Project1() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-xl font-bold text-gray-900">Rebecca Huang</Link>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors">Home</Link>
              <Link href="/#work" className="text-gray-700 hover:text-gray-900 transition-colors">Work</Link>
              <Link href="/#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
              <Link href="/#contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/#work" className="text-purple-600 hover:text-purple-700 transition-colors flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Work
            </Link>
          </div>
          
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Knowledge Assistant</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              An intelligent platform that transforms complex documents, videos, and audio into actionable insights through advanced AI analysis.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">UX Research</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">AI/ML</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Product Design</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">Web App</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-white text-8xl">💻</div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">
                Researchers and professionals struggle to efficiently extract insights from large volumes of academic papers, 
                video content, and audio recordings. Manual analysis is time-consuming and often misses key connections.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                An AI-powered platform that automatically analyzes and synthesizes information from multiple formats, 
                providing users with clear, actionable insights and intelligent recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Research</h3>
              <p className="text-sm text-gray-600">User interviews, competitive analysis, and market research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ideate</h3>
              <p className="text-sm text-gray-600">Brainstorming, user journey mapping, and concept development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-sm text-gray-600">Wireframes, prototypes, and user interface design</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Test</h3>
              <p className="text-sm text-gray-600">Usability testing, iteration, and validation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Discovery</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Research</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Conducted 15 in-depth interviews with researchers, analysts, and content creators to understand their 
                pain points and workflows when dealing with large volumes of information.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Key Findings:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Users spend 60% of their time on information gathering and organization</li>
                  <li>• 78% struggle with connecting insights across different content formats</li>
                  <li>• 85% want automated summaries with the ability to drill down into details</li>
                  <li>• Users need collaborative features for team-based research</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Competitive Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyzed 12 existing tools in the knowledge management and AI analysis space, identifying gaps 
                in user experience and opportunities for differentiation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design & Development</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Information Architecture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Designed a hierarchical structure that organizes content by projects, with intuitive navigation 
                between different content types and analysis results.
              </p>
              <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-sm">Information Architecture Diagram</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Interface Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Created a clean, modern interface that prioritizes content readability while providing powerful 
                AI analysis tools through intuitive controls and visual feedback.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-4xl mb-4">🖥️</div>
                    <p className="text-sm">Dashboard Design</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-4xl mb-4">📱</div>
                    <p className="text-sm">Mobile Interface</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
                  <p className="text-gray-600 text-sm">Advanced natural language processing for content understanding and insight extraction</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🔗</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cross-Reference</h4>
                  <p className="text-gray-600 text-sm">Intelligent linking of related concepts across different content types</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Collaboration</h4>
                  <p className="text-gray-600 text-sm">Team-based research with shared annotations and insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience Improvements</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time to insight</span>
                    <span className="font-bold text-green-600">-65%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User satisfaction</span>
                    <span className="font-bold text-green-600">+42%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Task completion rate</span>
                    <span className="font-bold text-green-600">+78%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Launched to 500+ beta users across research institutions</li>
                <li>• Achieved 85% user retention after 3 months</li>
                <li>• Generated $2M in annual recurring revenue</li>
                <li>• Reduced customer support tickets by 40%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Project</h2>
          <Link href="/work/project-2" className="inline-block">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl">🏃‍♀️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Fitness Coach</h3>
                <p className="text-gray-600 mb-4">
                  Real-time movement feedback system using sensors and camera technology for personalized workouts.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">UX Research</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">AI/ML</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">IoT</span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-bold mb-4 md:mb-0">Rebecca Huang</div>
            <div className="flex space-x-8 mb-4 md:mb-0">
              <Link href="/#about" className="hover:text-gray-300 transition-colors">About</Link>
              <Link href="/#work" className="hover:text-gray-300 transition-colors">Work</Link>
              <Link href="/#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">© 2025 Rebecca Huang</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
