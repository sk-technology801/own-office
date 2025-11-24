// src/app/contact/page.jsx

"use client";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // Success / Error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Network error. Please check your connection.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO SECTION */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/33349204/pexels-photo-33349204.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute top-16 left-1/5 w-16 h-16 bg-blue-500/10 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-24 right-1/5 w-12 h-12 border border-purple-500/20 animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 flex h-full items-center justify-center px-6 lg:px-12 pt-20 md:pt-24">
          <div className="max-w-3xl text-center space-y-10">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Build with</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                Confidence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto">
              Partner with our software house to transform your ideas into{" "}
              <span className="text-white font-medium">cutting-edge solutions</span>. Let’s connect.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { number: "200+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "<12h", label: "Response Time" },
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900/80 transition-all duration-300">
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:sardarsaadisaadi@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Email Us
              </Link>
              <Link
                href="#form"
                className="px-8 py-4 border-2 border-gray-600 text-white font-medium rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Card */}
        <div className="absolute bottom-10 right-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 max-w-xs border border-gray-700 animate-float-slow hidden lg:block">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-medium">Quick Connect</span>
          </div>
          <h3 className="text-white text-lg font-bold mb-2">Instant Support</h3>
          <p className="text-gray-400 text-sm">Chat with our team for immediate assistance.</p>
          <Link href="#" className="inline-block mt-4 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">
            Start Chat
          </Link>
        </div>
      </section>

      {/* CONTACT FORM – NOW CONNECTED TO /api/contact */}
      <section id="form" className="py-20 px-6 bg-gray-900 relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4 text-white">Let’s Discuss Your Project</h2>
            <p className="text-gray-400 text-lg">Share your vision, and we’ll make it reality.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
                className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>

            <div className="space-y-6">
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all"
              >
                <option value="" disabled>Select Project Type</option>
                <option>Web Development</option>
                <option>.org Mobile App</option>
                <option>AI/ML Solutions</option>
                <option>Cloud Services</option>
                <option>Other</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                placeholder="Tell us about your project..."
                className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-xl text-white focus:border-blue-500 focus:outline-none transition-all resize-none"
              />

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full py-5 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 text-lg disabled:opacity-70"
              >
                {status === "Sending..." ? "Sending..." : "Submit Inquiry"}
              </button>
            </div>
          </form>

          {/* Status Message */}
          {status && (
            <div className={`mt-6 text-center text-lg font-medium ${status.includes("Thank you") || status.includes("successfully") ? "text-green-400" : "text-red-400"}`}>
              {status}
            </div>
          )}
        </div>
      </section>

      {/* CONTACT INFO + MAP */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-light text-center mb-16 text-white">Our Contact Details</h2>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16 text-center">
            {[
              { icon: "Location", title: "Location", content: "Kohinoor 1, Faisalabad, Pakistan" },
              { icon: "Email", title: "Email", content: "sardarsaadisaadi@gmail.com" },
              { icon: "Phone", title: "Phone", content: "+92 308 493 1083" },
            ].map((info, i) => (
              <div key={i}>
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-medium text-white mb-2">{info.title}</h3>
                <p className="text-gray-400">{info.content}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.884221995997!2d73.105030615194!3d31.418711981406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922681b5e5c5e9f%3A0xbeca0e5e5e5e5e5e!2sKohinoor%20One%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1731234567890"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-6 bg-black border-t border-gray-800 text-center">
        <h3 className="text-2xl font-light text-white mb-4">Ready to Start?</h3>
        <p className="text-gray-400 mb-8">Let’s build something extraordinary together.</p>
        <Link href="/" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/50">
          Back to Home
        </Link>
      </footer>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes float-slow { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-12px); } }
        @keyframes pulse-slow { 0%,100% { opacity: 0.3; } 50% { opacity: 0.1; } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
}