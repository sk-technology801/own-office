"use client"
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Star, ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack application with payment integration and real-time inventory",
      tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
      image: '/images/ecomerace.jpg.jpeg', // Ensure this file exists in public/images/
      color: "from-purple-500 to-pink-500",
      liveUrl: "https://e-com-wgmy.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/e-com"
    },


 {
      title: "Blogs",
      description: "Insights for modern businesses",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/blog site.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://blog-site-tau-khaki.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/blog-site"
    },





    {
      title: "Car-hub",
      description: "Dealing of cars",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/car-hub.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://hub-orpin.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/hub"
    },
    

     {
      title: "Bitcoin",
      description: "Trading generate extreme money ",
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      image: "/images/bitcoin.jpg.jpeg", // Ensure this file exists in public/images/
      color: "from-blue-500 to-cyan-500",
      liveUrl: "https://own-trading.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/own-trading"
    },
     {
      title: "Automotives",
      description: "Dealing of cars",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/auto-dealer.jpg.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://car-zone-fcvj.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/car-zone"
    },
     {
      title: "Bussiness-Insight",
      description: "Fresh perspectives for growth",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/bussiness-insight.jpg.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://site-for-bussiness.vercel.app/analytics",
      codeUrl: "https://github.com/sk-technology801/site-for-bussiness"
    },

{
      title: "Tourism",
      description: "Strategic Growth Tips",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/travel.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://events-lzch.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/events"
    },

     {
      title: "Dashboard-Business",
      description: "Fresh perspectives for growth",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/dashbord bussiness.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://site-for-bussiness.vercel.app/analytics",
      codeUrl: "https://github.com/sk-technology801/site-for-bussiness"
    },
     {
      title: "Site-code",
      description: "Strategic Growth Tips",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/office site.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://our-office-tau.vercel.app/Team",
      codeUrl: "https://github.com/sk-technology801/our-office"
    },
      {
      title: "Tech-Program",
      description: "Strategic Growth Tips",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/software house.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://office-wmem.vercel.app/",
      codeUrl: "https://github.com/sk-technology801/office"
    },
     
     {
      title: "Dashboard-Business",
      description: "Fresh perspectives for growth",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "/images/dashbord bussiness.jpeg", // Ensure this file exists in public/images/
      color: "from-green-500 to-emerald-500",
      liveUrl: "https://site-for-bussiness.vercel.app/analytics",
      codeUrl: "https://github.com/sk-technology801/site-for-bussiness"
    },
  ];

  const skills = [
    { name: "Frontend Development", icon: Code, level: 95 },
    { name: "UI/UX Design", icon: Palette, level: 88 },
    { name: "Performance Optimization", icon: Zap, level: 92 },
  ];

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
            transition: 'all 0.3s ease-out'
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 w-full backdrop-blur-lg bg-black/90 border-b border-gray-800/50 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </div>
              <div className="hidden md:flex space-x-8">
                {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors duration-300 relative group">
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="mb-6">
                <span className="text-purple-400 text-lg font-medium">Hello, I'm</span>
                <h1 className="text-6xl md:text-7xl font-bold mt-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Saad
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mt-4 leading-relaxed">
                  Full-Stack Developer & Digital Craftsman
                </p>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                I create exceptional digital experiences that blend cutting-edge technology with intuitive design. 
                Specializing in React, Next.js, and modern web technologies.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#projects"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  View My Work
                </a>
                <a 
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 border border-gray-600 rounded-full text-gray-300 font-semibold hover:border-purple-400 hover:text-purple-400 transform transition-all duration-300 group"
                >
                  Download CV
                  <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

             
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 rounded-2xl blur opacity-30 animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-2xl p-2 shadow-2xl">
                  <img 
                    src="/images/sk.jpeg" // Use a local image in public/images/
                    alt="Alex Chen - Full Stack Developer"
                    className="w-full h-96 md:h-[500px] object-cover rounded-xl"
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"; }} // Fallback to Unsplash
                  />
                  <div className="absolute top-4 right-4 px-4 py-2 bg-black/80 backdrop-blur-sm rounded-full text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Available for hire</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A showcase of my recent work, demonstrating expertise in modern web technologies and creative problem-solving
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5`}></div>
                  
                  <div className="relative p-6">
                    <div className="h-48 bg-gray-800 rounded-lg mb-6 overflow-hidden">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = '/images/fallback.jpg'; }} // Fallback image
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-600/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a 
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="inline-flex p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full mb-6">
                      <skill.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                    <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
                      <div 
                        className="h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to work on new projects and collaborate with creative minds.
            </p>
            
            <a 
              href="mailto:alex.chen@example.com"
              className="px-12 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full text-white font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
            >
              Get In Touch
            </a>
          </div>
        </section>

        
      </div>
    </div>
  );
}