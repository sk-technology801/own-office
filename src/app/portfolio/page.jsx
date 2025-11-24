// ./src/app/portfolio/page.jsx

"use client";
import React, { useState, useEffect, useRef } from "react";
import { Github, ExternalLink, Code, Palette, Zap, ArrowRight, BarChart2 } from "lucide-react";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [openResults, setOpenResults] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      cardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with payment integration and real-time inventory",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      image: "/images/ecomerace.jpg.jpeg",
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://e-com-wgmy.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/e-com",
      results: ["Handles 5,000+ daily transactions", "Increased sales conversion by 35%", "Reduced cart abandonment by 20%"],
    },
    {
      title: "Blogs",
      description: "Insights for modern businesses",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/blog site.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://blog-site-tau-khaki.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/blog-site",
      results: ["Published 200+ blog posts", "Attracted 10k+ monthly readers", "Optimized SEO for 70% organic traffic"],
    },
    {
      title: "Car-hub",
      description: "Dealing of cars",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/car-hub.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://hub-orpin.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/hub",
      results: ["Showcased 500+ car listings", "Improved user engagement by 40%", "Enhanced search functionality"],
    },
    {
      title: "Bitcoin",
      description: "Trading generate extreme money",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image: "/images/bitcoin.jpg.jpeg",
      color: "from-blue-500 to-cyan-500",
      liveUrl: "https://own-trading.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/own-trading",
      results: ["Processed $1M+ in trades", "Real-time market data visualization", "AI-driven trading insights"],
    },
    {
      title: "Govt-Agency",
      description: "Platform for government use",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/govt-agency.jpg.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://car-zone-fcvj.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/state-agency",
      results: ["Streamlined agency operations", "Secure data handling", "Automated reporting system"],
    },
    {
      title: "Business-Insight",
      description: "Fresh perspectives for growth",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/bussiness-insight.jpg.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://site-for-bussiness.vercel.app/analytics",
      codeUrl: "https://github.com/sk-technology801/site-for-bussiness",
      results: ["Delivered actionable insights", "Boosted client growth by 25%", "Real-time analytics dashboard"],
    },
    {
      title: "Tourism",
      description: "Strategic Growth Tips",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/travel.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://events-lzch.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/events",
      results: ["Promoted 100+ destinations", "Enhanced visual storytelling", "Improved user navigation"],
    },
    {
      title: "Site-code",
      description: "Strategic Growth Tips",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/office site.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://our-office-tau.vercel.app/Team",
      codeUrl: "https://github.com/sk-technology801/our-office",
      results: ["Streamlined team collaboration", "Improved project tracking", "Fast and responsive UI"],
    },
    {
      title: "Tech-Program",
      description: "Strategic Growth Tips",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/software house.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://office-wmem.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/office",
      results: ["Managed 50+ tech projects", "Enhanced client communication", "Optimized development workflow"],
    },
    {
      title: "Dashboard-Business",
      description: "Fresh perspectives for growth",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/dashbord bussiness.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://site-for-bussiness.vercel.app/analytics",
      codeUrl: "https://github.com/sk-technology801/site-for-bussiness",
      results: ["Real-time business metrics", "Improved decision-making", "Customizable dashboards"],
    },
    {
      title: "Adsen",
      description: "Submit your site for approval",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/adds.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://add-sk-technology801s-projects.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/add",
      results: ["Streamlined ad approvals", "Secure submission process", "Fast review turnaround"],
    },
    {
      title: "Automotives",
      description: "Dealing of cars",
      tech: ["React", "Node.js", "MongoDB", "JWT"],
      image: "/images/auto-dealer.jpg.jpeg",
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://car-zone-fcvj.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/car-zone",
      results: ["Managed 1,000+ car deals", "Enhanced sales tracking", "Improved user experience"],
    },
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Performance Optimization", icon: Zap, level: 92 },
  ];

  const toggleResults = (index) => {
    setOpenResults(openResults === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-black"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/90 border-b border-gray-800/50 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300 relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
              <div>
                <span className="text-purple-400 text-lg font-medium block">Hello, I'm</span>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Saad
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mt-4">Full-Stack Developer & Digital Craftsman</p>
              </div>
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                I create exceptional digital experiences that blend cutting-edge technology with intuitive design. Specializing in React, Next.js, and modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#projects" className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-center hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                  View My Work
                </a>
                <a href="/resume.pdf" download className="px-8 py-4 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-400 hover:text-purple-400 hover:shadow-purple-400/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Download CV <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-2xl p-2 shadow-2xl">
                  <img
                    src="/images/saad.jpeg"
                    alt="Saad - Full Stack Developer"
                    className="w-full h-80 sm:h-96 md:h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                    onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face")}
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Available for hire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A showcase of my recent work, demonstrating expertise in modern web technologies and creative problem-solving
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  ref={(el) => (cardRefs.current[index] = el)}
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 opacity-0"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`}></div>
                  <div className="relative p-6">
                    <div className="h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-800/50 text-xs text-gray-300 rounded-full border border-gray-600/50 hover:bg-purple-800/50 hover:text-purple-200 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>

                    {project.results && (
                      <div className="mb-6">
                        <button
                          onClick={() => toggleResults(index)}
                          className="flex items-center gap-2 px-4 py-2 border border-cyan-400 text-cyan-400 text-sm rounded-md hover:bg-cyan-500 hover:text-white transition-all duration-300"
                        >
                          <BarChart2 className="w-4 h-4" />
                          <span>{openResults === index ? "Hide Results" : "Show Results"}</span>
                        </button>

                        <div
                          className={`mt-3 space-y-2 transition-all duration-500 overflow-hidden ${
                            openResults === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          {project.results.map((r, i) => (
                            <p key={i} className="text-xs text-gray-400 flex items-start gap-2">
                              <span className="text-cyan-400 mt-1">•</span>
                              {r}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-purple-400 text-purple-400 rounded-md hover:bg-purple-500 hover:text-white transition-all text-sm"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-400 text-gray-400 rounded-md hover:bg-gray-800 hover:text-white transition-all text-sm"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, i) => (
                <div key={i} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 hover:scale-105 transition-all duration-300 text-center">
                  <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                  <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                      className="h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-400 mt-2 block">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with creative minds.
            </p>
            <a
              href="mailto:saaddst21@gmail.com"
              className="inline-block px-12 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </div>

      {/* Fade-in Animation */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}