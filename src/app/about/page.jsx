"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Process', href: '/process' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
          </header>

  );
};

export default function About() {
  const [activeTab, setActiveTab] = useState('story');
  const [counters, setCounters] = useState({
    projects: 0,
    satisfaction: 0,
    team: 0,
    experience: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const targets = { projects: 150, satisfaction: 98, team: 25, experience: 5 };
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounters({
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress),
        team: Math.floor(targets.team * progress),
        experience: Math.floor(targets.experience * progress),
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center mt-16 bg-gradient-to-br from-black to-gray-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.95)), url('https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg?_gl=1*1h1o2sv*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTQ4NTA4MDkkbzUzJGcxJHQxNzU0ODUwODM3JGozMiRsMCRoMA..')`,
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-3 h-3 bg-white rounded-full animate-sparkle animation-delay-500" />
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-1000" />
        </div>
        <div className="text-center px-4 sm:px-6 lg:px-8 z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-blue-400 pr-2 text-shadow-glow">
            Next <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">Inovation</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-1000">
            Digital architects crafting the future, one innovative solution at a time.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-transparent border-2 border-blue-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-400/20 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse-border"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black opacity-90" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" />
          <div className="absolute bottom-20 right-20 w-3 h-3 bg-white rounded-full animate-sparkle animation-delay-500" />
          <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-1000" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-1500" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="flex bg-gray-950 rounded-lg p-1 gap-1 sm:gap-2">
              {[
                { id: 'story', label: 'Our Story' },
                { id: 'mission', label: 'Mission' },
                { id: 'vision', label: 'Vision' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-md font-medium text-sm sm:text-base transition-all duration-300 animate-pulse-border ${
                    activeTab === tab.id
                      ? 'bg-blue-400 text-black shadow-[0_0_15px_rgba(59,130,246,0.7)]'
                      : 'text-gray-300 hover:text-white hover:bg-gray-900 border border-transparent hover:border-blue-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="min-h-[300px] sm:min-h-[400px]">
            {activeTab === 'story' && (
              <div className="animate-fade-in text-center">
               
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white text-shadow-glow">Our Journey</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                    Founded in 2019, NextInovation began as a small team of passionate developers who believed technology should solve real problems. From humble beginnings, we’ve grown into a global software house.
                  </p>
                  <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
                    Our journey is defined by innovation and excellence, with over 150 projects delivered to clients worldwide, from startups to enterprises.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {[
                      { year: '2019', milestone: 'Company Founded' },
                      { year: '2021', milestone: '50+ Projects Delivered' },
                      { year: '2023', milestone: 'International Expansion' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 sm:p-6 bg-gray-950 rounded-lg border border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">{item.year}</div>
                        <div className="text-gray-300 text-sm sm:text-base">{item.milestone}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'mission' && (
              <div className="animate-fade-in text-center">
                
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white text-shadow-glow">Our Mission</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-2xl text-gray-300 mb-6 sm:mb-8 font-light italic">
                    "Empowering businesses through innovative technology solutions that drive growth and transformation."
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {[
                      { icon: '🎯', title: 'Purpose-Driven', desc: 'Solutions that solve real challenges and create value.' },
                      { icon: '🚀', title: 'Innovation First', desc: 'Cutting-edge solutions to future-proof your business.' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-6 sm:p-8 bg-gray-950 rounded-xl border border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-3xl sm:text-4xl mb-4 text-blue-400">{item.icon}</div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'vision' && (
              <div className="animate-fade-in text-center">
               
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-white text-shadow-glow">Our Vision</h2>
                <div className="max-w-4xl mx-auto">
                  <p className="text-lg sm:text-2xl text-gray-300 mb-6 sm:mb-8 font-light italic">
                    "To lead global software innovation, setting new standards for quality and creativity."
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
                    {[
                      { icon: '🌍', title: 'Global Impact', desc: 'Transforming businesses worldwide.' },
                      { icon: '⚡', title: 'Tech Leadership', desc: 'Pioneering next-gen solutions.' },
                      { icon: '🤝', title: 'Lasting Partnerships', desc: 'Building enduring relationships.' },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="p-4 sm:p-6 bg-gray-950 rounded-lg border border-transparent hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_10px_rgba(59,130,246,0.3)] animate-fade-in"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="text-3xl sm:text-4xl mb-3 text-blue-400">{item.icon}</div>
                        <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Values Section */}
     {/* Values Section */}
<section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
  <div
    className="absolute inset-0 opacity-10"
    style={{
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 2px, transparent 2px)',
      backgroundSize: '20px 20px',
    }}
  />
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-8 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white text-shadow-glow">
        Our Values
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        The principles that guide everything we do
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {[
        { title: 'Innovation', description: 'Pushing boundaries with cutting-edge technologies.' },
        { title: 'Excellence', description: 'Highest standards in code and user experience.' },
        { title: 'Collaboration', description: 'Teamwork and open communication with clients.' },
        { title: 'Integrity', description: 'Transparency and honesty in all we do.' },
      ].map((value, index) => (
        <div
          key={index}
          className="group p-6 sm:p-8 bg-gray-950 rounded-xl text-center hover:bg-gray-900 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] animate-fade-in-up"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Stats Section */}
<section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-gray-950 to-black opacity-90" />
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" />
    <div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full animate-sparkle animation-delay-500" />
    <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-1000" />
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <div className="text-center mb-8 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white text-shadow-glow">
        By The Numbers
      </h2>
      <p className="text-base sm:text-lg lg:text-xl text-gray-300">
        Our track record speaks for itself
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {[
        { number: `${counters.projects}+`, label: 'Projects Completed', key: 'projects' },
        { number: `${counters.satisfaction}%`, label: 'Client Satisfaction', key: 'satisfaction' },
        { number: `${counters.team}+`, label: 'Team Members', key: 'team' },
        { number: `${counters.experience}+`, label: 'Years Experience', key: 'experience' },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-950 rounded-xl border border-transparent hover:border-blue-400 transition-all duration-500 hover:scale-105 animate-glow-border animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
          <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black to-blue-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 2px, transparent 2px)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-sparkle" />
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full animate-sparkle animation-delay-500" />
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-sparkle animation-delay-1000" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white text-shadow-glow">
            Ready to Work Together?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in">
            Let’s bring your vision to life with innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse-border"
            >
              Start a Project
            </Link>
            <Link
              href="/portfolio"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.8)] animate-pulse-border"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulseBorder {
          0% { border-color: rgba(59, 130, 246, 0.5); box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
          50% { border-color: rgba(59, 130, 246, 1); box-shadow: 0 0 15px rgba(59, 130, 246, 0.8); }
          100% { border-color: rgba(59, 130, 246, 0.5); box-shadow: 0 0 5px rgba(59, 130, 246, 0.5); }
        }
        @keyframes glowBorder {
          0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.7); }
          100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
        }
        .animate-typing {
          animation: typing 3s steps(40, end) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-pulse-border {
          animation: pulseBorder 2s ease-in-out infinite;
        }
        .animate-glow-border {
          animation: glowBorder 2s ease-in-out infinite;
        }
        .text-shadow-glow {
          text-shadow: 0 0 10px rgba(59, 130, 246, 0.7);
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        @media (max-width: 640px) {
          .animate-typing {
            animation: typing 2.5s steps(30, end) forwards;
          }
          .animate-fade-in, .animate-fade-in-up {
            animation-duration: 0.6s;
          }
          .animate-pulse-border, .animate-glow-border {
            animation: none;
          }
          .group:hover {
            transform: none !important;
          }
          .group:hover img {
            transform: scale(1) !important;
          }
          .h-screen {
            height: 80vh;
          }
          .text-6xl {
            font-size: 2.5rem;
          }
          .text-5xl {
            font-size: 2rem;
          }
          .text-4xl {
            font-size: 1.75rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .text-2xl {
            font-size: 1.25rem;
          }
          .text-xl {
            font-size: 1rem;
          }
          .animate-sparkle {
            animation-duration: 3s;
          }
        }
      `}</style>
    </div>
  );
}