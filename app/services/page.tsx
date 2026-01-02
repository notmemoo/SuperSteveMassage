import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Services | Super Steve Massage Therapy",
    description: "Explore our full range of massage therapy services including deep tissue, hot stone, cupping, gua sha, and more. Find the perfect treatment for your needs.",
};

const services = [
    {
        title: "Deep Tissue Massage",
        description: "Targeted relief for chronic muscle tension and pain",
        slug: "deep-tissue",
        priceFrom: 55,
        icon: "💪",
    },
    {
        title: "Steve's Signature Massage",
        description: "Our most popular customized therapeutic experience",
        slug: "signature-massage",
        priceFrom: 85,
        icon: "⭐",
        featured: true,
    },
    {
        title: "Deep Stretch",
        description: "Improve flexibility and range of motion",
        slug: "deep-stretch",
        priceFrom: 55,
        icon: "🧘",
    },
    {
        title: "Cupping Massage",
        description: "Ancient healing technique for deep tissue relief",
        slug: "cupping-massage",
        priceFrom: 84,
        icon: "⭕",
    },
    {
        title: "Gua Sha",
        description: "Traditional scraping therapy for chronic pain",
        slug: "gua-sha",
        priceFrom: 83,
        icon: "💎",
    },
    {
        title: "Prenatal Massage",
        description: "Gentle care for expecting mothers",
        slug: "prenatal-massage",
        priceFrom: 45,
        icon: "🤰",
    },
];

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        What We Offer
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        Our Services
                    </h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        Choose from our range of professional massage therapies, each designed
                        to address your specific needs and help you achieve optimal wellness.
                    </p>
                </div>

                {/* Hot Stones Add-on Banner */}
                <div className="bg-[#FFF5F0] border border-[#E8D5C4] rounded-xl p-4 mb-8 flex items-center justify-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <p className="text-[#2D2D2D]">
                        <span className="font-semibold">Add Hot Stones</span> to any service for just <span className="text-[#C4704A] font-semibold">+$25</span>
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={`/services/${service.slug}`}
                            className={`group relative rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${service.featured
                                    ? "bg-gradient-to-br from-[#C4704A] to-[#A85D3B] text-white"
                                    : "bg-white border border-[#E8D5C4] hover:border-[#C4704A]"
                                }`}
                        >
                            {service.featured && (
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white text-xs font-medium px-4 py-1 rounded-full">
                                    Most Popular
                                </span>
                            )}

                            <span className="text-4xl mb-4 block">{service.icon}</span>

                            <h2 className={`font-[family-name:var(--font-playfair)] text-xl font-semibold mb-2 ${service.featured ? "text-white" : "text-[#2D2D2D]"
                                }`}>
                                {service.title}
                            </h2>

                            <p className={`text-sm mb-4 ${service.featured ? "text-white/80" : "text-[#6B6B6B]"
                                }`}>
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <span className={`font-semibold ${service.featured ? "text-white" : "text-[#C4704A]"
                                    }`}>
                                    From ${service.priceFrom}
                                </span>
                                <span className={`flex items-center gap-1 text-sm font-medium transition-transform group-hover:translate-x-1 ${service.featured ? "text-white" : "text-[#C4704A]"
                                    }`}>
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-[#6B6B6B] mb-6">
                        Not sure which service is right for you? Book a consultation with Steve.
                    </p>
                    <Link
                        href="https://www.massagebook.com/biz/superstevemassage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg"
                    >
                        Book an Appointment
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
}
