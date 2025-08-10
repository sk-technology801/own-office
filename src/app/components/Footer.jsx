// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          
          {/* Brand + Social */}
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Code<span className="text-blue-400">Zap</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md text-sm sm:text-base">
              Digital architects building the future, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              {[
                { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
                { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' },
                { name: 'GitHub', href: 'https://github.com', icon: '💻' },
                { name: 'Dribbble', href: 'https://dribbble.com', icon: '🎨' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 sm:w-10 h-8 sm:h-10 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  title={social.name}
                >
                  <span className="text-sm sm:text-base">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Portfolio', 'Testimonials', 'Process'].map((link) => (
                <a
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-white transition-colors duration-300 text-sm sm:text-base"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">Services</h4>
            <div className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions', 'Consulting'].map((service) => (
                <span
                  key={service}
                  className="block text-gray-400 text-sm sm:text-base"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-900 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 sm:mb-0">
              © 2025 CodeZap. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-500 hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
