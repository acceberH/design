import Link from "next/link";
import Image from "next/image";

export default function Project3() {
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Social Content Platform</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              A comprehensive SaaS platform that streamlines social media content management for marketing teams with advanced analytics and collaboration tools.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Product Design</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">SaaS</span>
              <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">B2B</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Web App</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-white text-8xl">📊</div>
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
                Marketing teams struggle with fragmented social media workflows, lack of collaboration tools, 
                and insufficient analytics to measure campaign performance across multiple platforms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                A unified platform that centralizes content creation, scheduling, collaboration, and analytics 
                for multiple social media channels with enterprise-grade security and scalability.
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
              <p className="text-sm text-gray-600">Market analysis, user interviews, and competitive research</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ideate</h3>
              <p className="text-sm text-gray-600">Feature prioritization, user flows, and platform architecture</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-sm text-gray-600">UI/UX design, component system, and user interface development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Test</h3>
              <p className="text-sm text-gray-600">User testing, performance optimization, and iterative refinement</p>
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
                Conducted 25 interviews with marketing managers, social media specialists, and content creators 
                across different industries to understand their workflow challenges and needs.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Key Findings:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 82% use 3+ social media platforms simultaneously</li>
                  <li>• 75% struggle with content approval workflows</li>
                  <li>• 68% lack comprehensive analytics across platforms</li>
                  <li>• 90% need better team collaboration features</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 leading-relaxed">
                Analyzed 15 existing social media management tools to identify gaps in user experience, 
                feature completeness, and enterprise capabilities.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Platform Architecture</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Designed a scalable multi-tenant architecture that supports enterprise teams with role-based 
                permissions, workflow automation, and real-time collaboration features.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <p className="text-sm">Team Management</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">📝</div>
                    <p className="text-sm">Content Creation</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="text-sm">Analytics Dashboard</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Interface Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Created an intuitive dashboard that provides quick access to all key features while maintaining 
                visual hierarchy and reducing cognitive load for complex workflows.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🎨</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Design System</h4>
                  <p className="text-gray-600 text-sm">Comprehensive component library with consistent design patterns and accessibility standards</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">⚡</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                  <p className="text-gray-600 text-sm">Optimized for speed with efficient data loading and smooth interactions</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📅</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Content Scheduling</h4>
                  <p className="text-gray-600 text-sm">Multi-platform content scheduling with approval workflows and automated posting</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Analytics & Reporting</h4>
                  <p className="text-gray-600 text-sm">Comprehensive performance metrics and customizable reports across all platforms</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🤝</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Team Collaboration</h4>
                  <p className="text-gray-600 text-sm">Real-time collaboration tools with comments, approvals, and role-based permissions</p>
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
                    <span className="text-gray-600">Content creation time</span>
                    <span className="font-bold text-green-600">-45%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Team productivity</span>
                    <span className="font-bold text-green-600">+62%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Campaign performance</span>
                    <span className="font-bold text-green-600">+38%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Acquired 500+ enterprise customers across industries</li>
                <li>• Achieved 95% customer satisfaction score</li>
                <li>• Generated $8M in annual recurring revenue</li>
                <li>• Reduced customer churn by 60%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Project</h2>
          <Link href="/work/school-project-1" className="inline-block">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                <div className="text-white text-4xl">🎓</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Human-Computer Interaction Research</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive study on user behavior patterns in AI-powered interfaces, including usability testing and iterative design.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Research</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">HCI</span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Usability</span>
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
