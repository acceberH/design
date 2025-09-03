import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto w-full">
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
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-3xl animate-fade-in-up">
                <Image 
                  src="/me.JPG"
                  alt="Rebecca Huang - UX Designer & Researcher"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                  <div className="text-white text-6xl mb-4">💼</div>
                  <div className="absolute bottom-4 right-4 text-white text-2xl">→</div>
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
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src="/aispire_mock.png"
                    alt="Aispire Application Mockup"
                    width={400}
                    height={256}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-4 right-4 text-white text-2xl font-bold drop-shadow-lg">
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
            <Link href="/work/openpromo" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 animate-fade-in-up hover:rotate-1" style={{animationDelay: '0.3s'}}>
                <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center relative">
                  <div className="text-white text-6xl mb-4">📊</div>
                  <div className="absolute bottom-4 right-4 text-white text-2xl">→</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    OpenPromo
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Multi-tenant social content management platform for marketing teams with advanced analytics and collaboration tools.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Product Design</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">SaaS</span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">B2B</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* School Work Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Personal Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research and design projects from my academic journey, exploring emerging technologies and methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* School Project 1 */}
            <Link href="/work/school-project-1" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
                  <div className="text-white text-5xl">🎓</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Human-Computer Interaction Research
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive study on user behavior patterns in AI-powered interfaces, including usability testing and iterative design.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">Research</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">HCI</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">Usability</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* School Project 2 */}
            <Link href="/work/school-project-2" className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="h-64 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center">
                  <div className="text-white text-5xl">🔬</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Design Systems & Accessibility
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Development of inclusive design systems with focus on accessibility standards and universal design principles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-teal-100 text-teal-800 text-xs rounded">Design Systems</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Accessibility</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">Inclusive Design</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Human-Centered AI Products Together
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
