import Image from "next/image";

const About = () => {
  const highlights = [
    { number: "20+", label: "Years Experience" },
    { number: "1000s", label: "Happy Clients" },
    { number: "6", label: "Massage Specialties" },
    { number: "7", label: "Days a Week" },
  ];

  const specialties = [
    "Deep Tissue Therapy",
    "Cupping Therapy",
    "Hot Stone Massage",
    "Gua Sha Technique",
    "Stretching Therapy",
    "Physical Therapy Background",
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#FDFBF9]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Visual Side */}
          <div className="relative">
            {/* Steve's Photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-[#E8D5C4] to-[#C4704A]/30">
              <Image
                src="/images/steve.jpg"
                alt="Steve Thompson - Licensed Massage Therapist hiking in the Pacific Northwest"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-[#C4704A] text-white p-6 rounded-2xl shadow-xl">
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold">20+</p>
              <p className="text-sm text-white/80">Years of<br />Experience</p>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#C4704A]/30 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
              About Steve
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
              Meet Your Therapist
            </h2>

            {/* Credentials */}
            <p className="text-[#C4704A] font-medium mb-6">
              Steve Thompson LMT, MA60714361
            </p>

            {/* Bio */}
            <div className="space-y-4 text-[#6B6B6B] leading-relaxed mb-8">
              <p>
                Hello! I have been practicing massage therapy for over 20 years. With a 
                physical therapy background, I enjoy massage and focused massage therapy 
                treatment work on problem areas.
              </p>
              <p>
                I use cupping, hot stones, gua sha, and deep tissue work that I include 
                in my Signature massage service. My passion and goal is to help people 
                reach their potential for optimal health and mobility.
              </p>
              <p>
                I am very excited about teaching our Postural Alignment Stretching Class! 
                In my spare time, I enjoy rock climbing and hiking in our beautiful Pacific Northwest.
              </p>
            </div>

            {/* Specialties */}
            <div className="mb-8">
              <h4 className="font-semibold text-[#2D2D2D] mb-4">Specialties & Techniques</h4>
              <div className="flex flex-wrap gap-2">
                {specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#E8D5C4] text-[#2D2D2D] rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.massagebook.com/biz/superstevemassage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              Book with Steve
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-[#F5EDE5] hover:bg-[#E8D5C4] transition-colors"
            >
              <p className="font-[family-name:var(--font-playfair)] text-4xl font-bold text-[#C4704A] mb-2">
                {item.number}
              </p>
              <p className="text-[#6B6B6B] text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

