import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Deep Tissue",
    description:
      "Designed to remove severe tension, deep tissue massage is a technique used to relieve both muscles and connective tissue below the surface. It helps to improve range of motion and heal injuries below the surface.",
    prices: [
      { duration: "30 minutes", price: 55 },
      { duration: "45 minutes", price: 72 },
      { duration: "60 minutes", price: 89 },
      { duration: "90 minutes", price: 133 },
      { duration: "120 minutes", price: 168 },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Steve's Signature",
    description:
      "Steve's signature massage is a combination of Steve's specialties that he loves to incorporate into his massages. Each massage is tailored to individual client needs and may include the use of stretching, hot stone, cupping, gua sha and the use of ice.",
    prices: [
      { duration: "45 minutes", price: 85 },
      { duration: "60 minutes", price: 100 },
      { duration: "90 minutes", price: 145 },
      { duration: "120 minutes", price: 195 },
    ],
    featured: true,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Deep Stretch",
    description:
      "Deep Stretch massage does not require you to dress down, and it is recommended that you wear loose fitting/ work-out attire. This massage helps to increase your range of motion and reset muscle memory.",
    prices: [
      { duration: "30 minutes", price: 55 },
      { duration: "45 minutes", price: 73 },
      { duration: "60 minutes", price: 89 },
      { duration: "90 minutes", price: 133 },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: "Cupping Massage",
    description:
      "Massage Cupping is a modern adaptation of the ancient art of cupping therapy. While massage performed by applying pressure, cupping instead uses negative pressure to pull, lift, open and expand the body's soft tissues.",
    prices: [
      { duration: "30 minutes", price: 84 },
      { duration: "45 minutes", price: 99 },
      { duration: "60 minutes", price: 121 },
      { duration: "90 minutes", price: 166 },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Gua Sha",
    description:
      "Gua sha is a traditional Chinese healing technique in which the massage therapist uses a smooth-edged tool to stroke your skin while they press on it. This scraping motion raises small, red, rash-like dots that show under your skin called petechiae. People use gua sha to treat chronic pain all over their body.",
    prices: [
      { duration: "30 minutes", price: 83 },
      { duration: "45 minutes", price: 99 },
      { duration: "60 minutes", price: 121 },
      { duration: "90 minutes", price: 165 },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Prenatal Massage",
    description:
      "Pregnancy massage focuses on addressing the special needs of expecting women. Specially-designed massage tables, cushions, and side-lying postures are used to prevent putting pressure on the abdomen.",
    prices: [
      { duration: "30 minutes", price: 45 },
      { duration: "45 minutes", price: 65 },
      { duration: "60 minutes", price: 77 },
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#F5EDE5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Our Services
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            Healing Treatments
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Choose from our range of professional massage therapies, each designed to 
            address your specific needs and help you achieve optimal wellness.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              prices={service.prices}
              icon={service.icon}
              featured={service.featured}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6B6B6B] mb-4">
            Not sure which service is right for you? Book a consultation with Steve.
          </p>
          <a
            href="https://www.massagebook.com/biz/superstevemassage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#C4704A] hover:text-[#A85D3B] font-medium transition-colors"
          >
            Schedule a Consultation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;


