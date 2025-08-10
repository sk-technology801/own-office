
"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-black overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          {/* Background Image with Dark Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1516321310762-4794370f9795?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          {/* Minimal Animated Elements */}
          <div className="absolute top-16 left-1/5 w-16 h-16 bg-blue-500/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-24 right-1/5 w-12 h-12 border border-purple-500/20 animate-pulse-slow"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-12">
          <div className="max-w-3xl text-center">
            

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Start Your</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">Next Big Idea</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-xl mx-auto animate-slide-up"
              style={{ animationDelay: '200ms' }}
            >
              Let’s turn your vision into reality with <span className="text-white font-medium">innovative software solutions</span>. Get started today.
            </p>

            {/* Project Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 animate-slide-up" style={{ animationDelay: '400ms' }}>
              {[
                { number: '150+', label: 'Projects Launched' },
                { number: '95%', label: 'Success Rate' },
                { number: '50+', label: 'Industries Served' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group relative p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white group-hover:text-blue-400">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '600ms' }}>
              <Link
                href="#form"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg text-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-gray-600 text-white font-medium rounded-lg text-center hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Project Card */}
        <div className="absolute bottom-10 right-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 max-w-xs border border-gray-700 animate-float-slow">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
            <span className="text-white font-medium">Fast Track</span>
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Quick Project Kickoff</h3>
          <p className="text-gray-400 text-sm">Submit your details and we’ll schedule a consultation within 24 hours.</p>
          <Link
            href="#form"
            className="inline-block mt-4 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors duration-300"
          >
            Start Now →
          </Link>
        </div>
      </section>

      {/* Get Started Form Section */}
      <section className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 right-20 w-12 h-12 border border-purple-500/20 animate-spin-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white hover:text-blue-400 transition-colors duration-300">
              Kick Off Your Project
            </h2>
            <p className="text-gray-400 text-lg animate-fade-in">Tell us about your idea, and we’ll craft a tailored solution.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0ms' }}>
              <div className="group">
                <label className="block text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-400"
                  required
                />
              </div>
              <div className="group">
                <label className="block text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-400"
                  required
                />
              </div>
            </div>
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="group">
                <label className="block text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-400"
                  required
                >
                  <option value="" disabled>Select Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI/ML Solutions</option>
                  <option value="cloud">Cloud Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Estimated Budget</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-400"
                  required
                >
                  <option value="" disabled>Select Budget Range</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-25k">$10,000 - $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k+">$50,000+</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-gray-400 mb-2 group-hover:text-white transition-colors duration-300">Project Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition-all duration-300 group-hover:border-blue-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Submit Your Project
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-black relative overflow-hidden">
        {/* Subtle Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-20 h-20 bg-blue-500/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-purple-500/10 rounded-full animate-float-reverse"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-4xl font-light text-center mb-16 text-white hover:text-blue-400 transition-colors duration-300">
            Our Simple Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Consultation',
                description: 'We discuss your vision and goals to align our approach.',
              },
              {
                step: '2',
                title: 'Proposal',
                description: 'Receive a tailored plan with timelines and costs.',
              },
              {
                step: '3',
                title: 'Development',
                description: 'Our team builds your solution with precision.',
              },
              {
                step: '4',
                title: 'Launch & Support',
                description: 'We deploy your project and provide ongoing support.',
              },
            ].map((step, index) => (
              <div
                key={index}
                className="text-center group bg-gray-900/50 p-6 rounded-lg hover:bg-gray-900/80 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-3xl font-bold text-blue-400 mb-4">{step.step}</div>
                <h3 className="text-xl font-medium text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      <style jsx>{`
        /* Custom Animations */
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 6s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
