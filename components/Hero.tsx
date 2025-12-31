const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E8D5C4] via-[#F5EDE5] to-[#FDFBF9]">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#C4704A]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#E8D5C4]/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C4704A]/5 rounded-full blur-3xl" />
      </div>

      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4704A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Tagline */}
        <p className="text-[#C4704A] font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-in">
          Professional Massage Therapy
        </p>

        {/* Main heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl lg:text-8xl font-semibold text-[#2D2D2D] mb-6 animate-fade-in-up">
          Just <span className="text-[#C4704A] italic">Breathe</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          Experience the healing touch of over 20 years of expert massage therapy. 
          Let Steve Thompson help you reach your optimal health and mobility.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <a
            href="https://www.massagebook.com/biz/superstevemassage"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#C4704A] hover:bg-[#A85D3B] text-white px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl hover:-translate-y-1 flex items-center gap-2"
          >
            Book Your Appointment
            <svg 
              className="w-5 h-5 transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="text-[#2D2D2D] hover:text-[#C4704A] px-8 py-4 rounded-full font-medium text-lg transition-all border-2 border-[#2D2D2D]/20 hover:border-[#C4704A]"
          >
            View Services
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[#6B6B6B] animate-fade-in delay-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C4704A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed Massage Therapist</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C4704A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>20+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#C4704A]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Open 7 Days a Week</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-[#C4704A] hover:text-[#A85D3B] transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;


