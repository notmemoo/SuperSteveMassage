"use client";

import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
    { href: "/gift-cards", label: "Gift Cards" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-[#FDFBF9]/95 backdrop-blur-sm shadow-md py-2"
        : "bg-transparent py-4"
        }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="hover:opacity-80 transition-opacity"
        >
          <span className={`font-[family-name:var(--font-playfair)] font-semibold transition-all duration-300 ${isScrolled ? "text-2xl" : "text-3xl"}`}>
            <span className="text-[#2D2D2D]">SuperSteve</span>{" "}
            <span className="text-[#C4704A]">LMT</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#6B6B6B] hover:text-[#C4704A] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.massagebook.com/biz/superstevemassage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C4704A] hover:bg-[#A85D3B] text-white px-6 py-2.5 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#2D2D2D]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#FDFBF9] shadow-lg md:hidden animate-fade-in">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[#6B6B6B] hover:text-[#C4704A] transition-colors font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.massagebook.com/biz/superstevemassage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C4704A] hover:bg-[#A85D3B] text-white px-6 py-3 rounded-full font-medium transition-all text-center mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;

