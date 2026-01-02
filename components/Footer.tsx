const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-playfair)] text-2xl font-semibold">
                SuperSteve <span className="text-[#C4704A]">LMT</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional massage therapy with over 20 years of experience.
              Helping you reach optimal health and mobility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8D5C4]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  About Steve
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="/gift-cards" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="/intake" className="text-gray-400 hover:text-[#C4704A] transition-colors text-sm">
                  New Client Forms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8D5C4]">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-1 text-[#C4704A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>7406 27Th St W # 23<br />University Place, WA 98466</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+12539709615" className="hover:text-[#C4704A] transition-colors">
                  (253) 970-9615
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Open 7 Days · By Appointment</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} SuperSteve LMT. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Steve Thompson LMT, MA60714361
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

