import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            Visit Our Studio
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Ready to experience the difference? Book your appointment today and 
            take the first step toward optimal health and wellness.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Info & Form */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="bg-white p-5 rounded-xl border border-[#E8D5C4] hover:border-[#C4704A] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E8D5C4] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">Location</h4>
                <p className="text-[#6B6B6B] text-sm">
                  7406 27Th St W # 23<br />
                  University Place, WA 98466
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white p-5 rounded-xl border border-[#E8D5C4] hover:border-[#C4704A] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E8D5C4] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">Phone</h4>
                <a
                  href="tel:+12539709615"
                  className="text-[#6B6B6B] hover:text-[#C4704A] transition-colors text-sm"
                >
                  (253) 970-9615
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white p-5 rounded-xl border border-[#E8D5C4] hover:border-[#C4704A] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-[#E8D5C4] flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#2D2D2D] text-sm mb-1">Hours</h4>
                <p className="text-[#6B6B6B] text-sm">Open 7 Days a Week</p>
                <p className="text-[#C4704A] text-xs font-medium mt-1">By Appointment Only</p>
              </div>

              {/* Book Now */}
              <a
                href="https://www.massagebook.com/biz/superstevemassage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C4704A] hover:bg-[#A85D3B] p-5 rounded-xl transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">Book Online</h4>
                <p className="text-white/80 text-sm flex items-center gap-1">
                  Schedule Now
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#E8D5C4]">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-2">
                Send a Message
              </h3>
              <p className="text-[#6B6B6B] text-sm mb-6">
                Have a question? We&apos;d love to hear from you.
              </p>
              <ContactForm />
            </div>
          </div>

          {/* Right Column - Google Map */}
          <div className="relative h-full min-h-[500px] lg:min-h-0">
            <div className="sticky top-24 h-[500px] lg:h-[700px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2716.5!2d-122.5538!3d47.2061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490557c1dbc4f7d%3A0x9e7a1c2b3f4e5d6a!2s7406%2027th%20St%20W%20%2323%2C%20University%20Place%2C%20WA%2098466!5e0!3m2!1sen!2sus!4v1703900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Super Steve Massage Therapy Location"
                className="grayscale-[30%] hover:grayscale-0 transition-all duration-500"
              />
              {/* Overlay with directions link */}
              <div className="absolute bottom-4 left-4 right-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=7406+27th+St+W+%2323+University+Place+WA+98466"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white hover:bg-[#F5EDE5] text-[#2D2D2D] px-6 py-3 rounded-xl font-medium shadow-lg transition-all hover:shadow-xl"
                >
                  <svg className="w-5 h-5 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-[#C4704A] to-[#A85D3B] rounded-2xl p-10 md:p-16">
          <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold text-white mb-4">
            Start Your Wellness Journey
          </h3>
          <p className="text-white/90 max-w-xl mx-auto mb-8">
            Whether you&apos;re seeking relief from chronic pain, recovering from an injury, 
            or simply need to relax — Steve is here to help.
          </p>
          <a
            href="https://www.massagebook.com/biz/superstevemassage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-[#C4704A] hover:bg-[#F5EDE5] px-10 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl"
          >
            Book Your Appointment
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
