import Link from "next/link";

export default function SchoolProject2() {
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Design Systems & Accessibility</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Development of inclusive design systems with focus on accessibility standards and universal design principles for digital products.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">Design Systems</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Accessibility</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Inclusive Design</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Academic</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-white text-8xl">🔬</div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Question</h3>
              <p className="text-gray-600 leading-relaxed">
                How can design systems be structured to ensure accessibility compliance while maintaining 
                design consistency and developer efficiency across digital products?
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Develop a comprehensive design system framework that integrates accessibility standards, 
                create guidelines for inclusive design practices, and evaluate implementation effectiveness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Methodology</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Study Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Mixed-methods research combining literature review, expert interviews, accessibility audits, 
                and user testing with participants who have diverse abilities and needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📚</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Literature Review</h4>
                  <p className="text-gray-600 text-sm">Analysis of existing design systems and accessibility guidelines</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Interviews</h4>
                  <p className="text-gray-600 text-sm">Interviews with accessibility experts and design system practitioners</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🧪</div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Testing</h4>
                  <p className="text-gray-600 text-sm">Testing with users who have diverse abilities and assistive technologies</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Research Methods:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Accessibility audits of 20+ design systems</li>
                  <li>• 15 expert interviews with accessibility specialists</li>
                  <li>• Usability testing with 25 participants using assistive technologies</li>
                  <li>• Comparative analysis of WCAG 2.1 compliance levels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Findings</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Accessibility Gaps</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Common Issues</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Insufficient color contrast ratios</li>
                    <li>• Missing keyboard navigation support</li>
                    <li>• Inadequate screen reader compatibility</li>
                    <li>• Lack of focus indicators</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Implementation Barriers</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Limited developer accessibility knowledge</li>
                    <li>• Inconsistent testing protocols</li>
                    <li>• Lack of accessibility-first design thinking</li>
                    <li>• Insufficient documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design System Insights</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Accessibility compliance rate in existing systems</span>
                    <span className="font-bold text-red-600">32%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Developer adoption of accessibility guidelines</span>
                    <span className="font-bold text-orange-600">45%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User satisfaction with accessible components</span>
                    <span className="font-bold text-green-600">+78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design System Framework */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design System Framework</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">♿</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Accessibility First</h4>
                  <p className="text-gray-600 text-sm">Design components with accessibility requirements as primary considerations</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🔄</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consistency</h4>
                  <p className="text-gray-600 text-sm">Maintain consistent accessibility patterns across all components</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📖</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Documentation</h4>
                  <p className="text-gray-600 text-sm">Comprehensive documentation of accessibility features and testing procedures</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🧪</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Testing</h4>
                  <p className="text-gray-600 text-sm">Automated and manual testing protocols for accessibility compliance</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Component Guidelines</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Accessibility Requirements for Each Component:</h4>
                <ul className="space-y-3 text-gray-600">
                  <li>• Minimum color contrast ratio of 4.5:1 for normal text</li>
                  <li>• Keyboard navigation support with visible focus indicators</li>
                  <li>• ARIA labels and roles for screen reader compatibility</li>
                  <li>• Touch target size of at least 44x44 pixels</li>
                  <li>• Alternative text for all images and icons</li>
                  <li>• Semantic HTML structure and proper heading hierarchy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation & Testing</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Testing Protocol</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🔍</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Automated Testing</h4>
                  <p className="text-gray-600 text-sm">Linting tools, color contrast checkers, and accessibility validators</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">👁️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Manual Testing</h4>
                  <p className="text-gray-600 text-sm">Keyboard navigation, screen reader testing, and visual inspection</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Testing</h4>
                  <p className="text-gray-600 text-sm">Testing with users who have diverse abilities and assistive technologies</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Results</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">WCAG 2.1 AA compliance rate</span>
                    <span className="font-bold text-green-600">98%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Developer adoption rate</span>
                    <span className="font-bold text-green-600">+85%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User satisfaction improvement</span>
                    <span className="font-bold text-green-600">+92%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusions & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Published in ACM SIGCHI Conference on Human Factors</li>
                <li>• Adopted by 5 major design system teams</li>
                <li>• Contributed to industry accessibility standards</li>
                <li>• Influenced academic curriculum in design education</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Directions</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• AI-powered accessibility testing tools</li>
                <li>• Cross-platform accessibility guidelines</li>
                <li>• Inclusive design education frameworks</li>
                <li>• Accessibility metrics and measurement standards</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Work */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">View More Work</h2>
          <Link href="/#work" className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-block">
            Back to Portfolio
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
