import Link from "next/link";
import Image from "next/image";

export default function SchoolProject1() {
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Human-Computer Interaction Research</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              A comprehensive study on user behavior patterns in AI-powered interfaces, exploring usability principles and design implications for emerging technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">Research</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">HCI</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Usability</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Academic</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-white text-8xl">🎓</div>
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
                How do users interact with AI-powered interfaces, and what design principles can improve their 
                experience and task completion rates?
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Goals</h3>
              <p className="text-gray-600 leading-relaxed">
                Identify user behavior patterns, evaluate interface effectiveness, and develop design guidelines 
                for AI-powered applications that enhance user experience and productivity.
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
                Mixed-methods approach combining quantitative usability testing with qualitative user interviews 
                to gain comprehensive insights into user behavior and preferences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">👥</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Participants</h4>
                  <p className="text-gray-600 text-sm">30 participants across different age groups and technical backgrounds</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">⏱️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                  <p className="text-gray-600 text-sm">6-month study with multiple testing phases and iterations</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🔬</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Methods</h4>
                  <p className="text-gray-600 text-sm">Usability testing, eye tracking, think-aloud protocols, and surveys</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Collection</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Quantitative Metrics:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Task completion time and success rates</li>
                  <li>• Eye tracking heatmaps and fixation patterns</li>
                  <li>• System Usability Scale (SUS) scores</li>
                  <li>• Error rates and recovery patterns</li>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Behavior Patterns</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">AI Trust Patterns</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Users initially skeptical of AI suggestions</li>
                    <li>• Trust builds gradually with successful interactions</li>
                    <li>• Clear explanations increase acceptance rates</li>
                    <li>• Users prefer AI assistance for complex tasks</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Interaction Preferences</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Natural language input preferred over structured forms</li>
                    <li>• Visual feedback crucial for AI decision-making</li>
                    <li>• Users want control over AI suggestions</li>
                    <li>• Progressive disclosure improves learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usability Insights</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Task completion rate with AI assistance</span>
                    <span className="font-bold text-green-600">+35%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Time to complete complex tasks</span>
                    <span className="font-bold text-green-600">-42%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User satisfaction scores</span>
                    <span className="font-bold text-green-600">+28%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Design Implications */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Implications</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🤝</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Transparency</h4>
                  <p className="text-gray-600 text-sm">Clear explanations of AI reasoning and decision-making processes</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🎛️</div>
                  <h4 className="font-semibold text-gray-900 mb-2">User Control</h4>
                  <p className="text-gray-600 text-sm">Always provide options to accept, modify, or reject AI suggestions</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Progressive Disclosure</h4>
                  <p className="text-gray-600 text-sm">Gradually introduce AI capabilities to build user confidence</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Context Awareness</h4>
                  <p className="text-gray-600 text-sm">AI should understand and adapt to user's current task context</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Implementation Guidelines</h3>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <ul className="space-y-3 text-gray-600">
                  <li>• Provide clear visual indicators for AI-generated content</li>
                  <li>• Include confidence scores for AI suggestions</li>
                  <li>• Offer multiple interaction modalities (voice, text, gesture)</li>
                  <li>• Implement undo/redo functionality for AI actions</li>
                  <li>• Design for both novice and expert users</li>
                  <li>• Ensure accessibility compliance for AI features</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Conclusions & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Published in ACM CHI Conference proceedings</li>
                <li>• Cited by 15+ subsequent HCI research papers</li>
                <li>• Influenced design guidelines for 3 major tech companies</li>
                <li>• Contributed to academic curriculum development</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Future Directions</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Longitudinal studies on AI trust development</li>
                <li>• Cross-cultural AI interface design research</li>
                <li>• Accessibility considerations for AI-powered tools</li>
                <li>• Ethical implications of AI interface design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Project</h2>
          <Link href="/work/school-project-2" className="inline-block">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                <div className="text-white text-4xl">🔬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design Systems & Accessibility</h3>
                <p className="text-gray-600 mb-4">
                  Development of inclusive design systems with focus on accessibility standards and universal design principles.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded">Design Systems</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Accessibility</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Inclusive Design</span>
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
