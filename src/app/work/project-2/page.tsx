import Link from "next/link";
import Image from "next/image";

export default function Project2() {
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
            <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Fitness Coach</h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              A revolutionary fitness platform that provides real-time movement analysis and personalized coaching using computer vision and AI.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">UX Research</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">AI/ML</span>
              <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">IoT</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">Mobile App</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl h-96 flex items-center justify-center mb-12">
            <div className="text-white text-8xl">🏃‍♀️</div>
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
                Fitness enthusiasts struggle to maintain proper form during workouts, leading to injuries and suboptimal results. 
                Traditional fitness apps lack real-time feedback and personalized guidance.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                An AI-powered mobile application that uses computer vision to analyze workout form in real-time, 
                providing instant feedback and personalized coaching recommendations.
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
              <p className="text-sm text-gray-600">User interviews, fitness app analysis, and technical feasibility study</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ideate</h3>
              <p className="text-sm text-gray-600">Workout flow design, AI integration concepts, and user journey mapping</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-sm text-gray-600">Mobile UI/UX design, motion tracking interface, and feedback systems</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Test</h3>
              <p className="text-sm text-gray-600">Usability testing, AI accuracy validation, and performance optimization</p>
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
                Conducted 20 interviews with fitness enthusiasts, personal trainers, and physical therapists to understand 
                the pain points in workout form monitoring and coaching.
              </p>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Key Findings:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 72% of users worry about incorrect form during workouts</li>
                  <li>• 65% prefer real-time feedback over post-workout analysis</li>
                  <li>• 88% want personalized workout recommendations</li>
                  <li>• Users need clear, actionable feedback without overwhelming information</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Research</h3>
              <p className="text-gray-600 leading-relaxed">
                Evaluated computer vision technologies, motion tracking algorithms, and mobile performance requirements 
                to ensure accurate real-time analysis capabilities.
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
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Experience Design</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Designed an intuitive workout flow that minimizes friction while providing comprehensive form analysis 
                and coaching feedback.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">📱</div>
                    <p className="text-sm">Workout Setup</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <p className="text-sm">Real-time Analysis</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-3xl mb-2">📊</div>
                    <p className="text-sm">Progress Tracking</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Integration</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Developed computer vision algorithms for pose estimation, movement analysis, and form correction 
                recommendations using machine learning models.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🤖</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pose Estimation</h4>
                  <p className="text-gray-600 text-sm">Real-time body keypoint detection and tracking for accurate form analysis</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📈</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Movement Analysis</h4>
                  <p className="text-gray-600 text-sm">AI-powered assessment of exercise form and technique quality</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📹</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Real-time Feedback</h4>
                  <p className="text-gray-600 text-sm">Instant form correction suggestions during workouts</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">🎯</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Personalized Coaching</h4>
                  <p className="text-gray-600 text-sm">AI-generated workout plans based on user progress and goals</p>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <div className="text-3xl mb-4">📊</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Progress Analytics</h4>
                  <p className="text-gray-600 text-sm">Detailed performance tracking and improvement metrics</p>
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
                    <span className="text-gray-600">Form accuracy improvement</span>
                    <span className="font-bold text-green-600">+85%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">User engagement</span>
                    <span className="font-bold text-green-600">+92%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Workout completion rate</span>
                    <span className="font-bold text-green-600">+78%</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Launched to 10,000+ beta users in fitness communities</li>
                <li>• Achieved 4.8/5 star rating on app stores</li>
                <li>• Generated $1.5M in subscription revenue</li>
                <li>• Partnered with 3 major fitness equipment manufacturers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Next Project</h2>
          <Link href="/work/project-3" className="inline-block">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <div className="text-white text-4xl">📊</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Content Platform</h3>
                <p className="text-gray-600 mb-4">
                  Multi-tenant social content management platform for marketing teams with analytics dashboard.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Product Design</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">SaaS</span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">B2B</span>
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
