"use client";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Hero Section - Fully Responsive */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
        {/* Mobile/Tablet Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center lg:hidden opacity-40"
          style={{ backgroundImage: `url('/images/hero png.png')` }}
        />
        <div className="absolute inset-0 bg-black/70 lg:hidden" />

        <div className="relative z-10 w-full flex flex-col lg:flex-row h-full">
          {/* Left Side - Content (Always Visible) */}
          <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16 lg:px-12 lg:py-0">
            <div className="max-w-lg w-full">
              {/* Brand Badge */}
              <div className="inline-flex items-center px-4 py-2 border border-gray-700 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-400 text-sm font-medium">Available for Projects</span>
              </div>

              {/* Main Title - Responsive Font */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-none">
                <span className="text-white">NEXT</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                  INOVATION
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                We don't just build software—we architect{" "}
                <span className="text-white font-semibold">digital empires</span> that stand the test of time.
              </p>

              {/* Key Stats - Responsive Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
                {[
                  { number: "150+", label: "Projects" },
                  { number: "98%", label: "Success Rate" },
                  { number: "24/7", label: "Support" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-white">{stat.number}</div>
                    <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-started"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-lg text-center hover:border-white hover:bg-white hover:text-black transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side - Desktop Only Image */}
          <div className="hidden lg:block w-1/2 relative">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('/images/hero png.png')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/90"></div>

            {/* Geometric Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-20 right-20 w-32 h-32 border-2 border-blue-400/30 rotate-45"></div>
              <div className="absolute bottom-32 right-32 w-20 h-20 bg-purple-500/20 rotate-12"></div>
              <div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-10 right-10 bg-black/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 max-w-xs">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span className="text-white font-semibold">Latest Project</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-2">AI-Powered Dashboard</h3>
              <p className="text-gray-400 text-sm">Enterprise-level analytics platform with real-time insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Responsive Grid */}
      <section className="py-20 px-6 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-blue-500/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-20 w-16 h-16 bg-purple-500/10 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-gray-700/30 animate-bounce-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light mb-4 text-white">Selected Work</h2>
            <p className="text-gray-400 text-lg">A glimpse into our recent projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'FinTech Dashboard', category: 'Web Application', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' },
              { title: 'Bitcoin', category: 'Mobile & Web', image: '/images/bitcoin.jpg.jpeg' },
              { title: 'E-Commerce Platform', category: 'Full Stack', image: '/images/ecomerace.jpg.jpeg' },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-900 rounded-lg cursor-pointer transition-all duration-700 hover:scale-[1.05] hover:shadow-2xl"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">{project.category}</p>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Responsive */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-light mb-16 text-white">What Clients Say</h2>
          <div className="space-y-16">
            {[
              { quote: "Next Inovation transformed our vision into reality with exceptional precision and creativity.", author: "Sarah Chen", company: "TechStart Inc." },
              { quote: "Professional, innovative, and reliable. Exactly what we needed for our digital transformation.", author: "Michael Rodriguez", company: "HealthTech Solutions" }
            ].map((t, i) => (
              <div key={i} className="max-w-2xl mx-auto">
                <blockquote className="text-xl sm:text-2xl font-light text-gray-300 italic leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <div className="mt-6">
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-gray-400 text-sm">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Animated Process Section */}
      <section className="py-20 px-6 bg-gray-950 relative overflow-hidden">
        {/* Animated grid background */}
        <div 
          className="absolute inset-0 opacity-5 animate-pulse-slow"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-light text-center mb-16 text-white hover:scale-105 transition-transform duration-300">
            Our Approach
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                number: "01",
                title: "Discovery",
                description: "We begin by understanding your vision, goals, and requirements through detailed consultation."
              },
              {
                number: "02",
                title: "Strategy",
                description: "Creating a comprehensive roadmap with clear milestones and technical architecture planning."
              },
              {
                number: "03",
                title: "Execution",
                description: "Building your solution with precision, using modern technologies and best practices."
              },
              {
                number: "04",
                title: "Delivery",
                description: "Thorough testing, seamless deployment, and ongoing support for continued success."
              }
            ].map((step, index) => (
              <div 
                key={index} 
                className="flex space-x-6 group hover:transform hover:translate-x-4 transition-all duration-500 animate-slide-in-left"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl font-light text-gray-500 flex-shrink-0 group-hover:text-blue-400 group-hover:scale-125 transition-all duration-300">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-900">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-light text-white mb-4">Ready to Begin?</h3>
          <p className="text-gray-400 mb-8">Let's discuss your next project</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-black font-medium rounded hover:bg-gray-200 transition">
            Get In Touch
          </Link>
        </div>
      </footer>

      {/* Keep All Custom Animations */}
      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.1; } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
        .animate-pulse { animation: pulse 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}