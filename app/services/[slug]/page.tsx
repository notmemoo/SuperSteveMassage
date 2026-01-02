import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

// Service data with full details
const services = {
    "deep-tissue": {
        title: "Deep Tissue Massage",
        tagline: "Relief for Chronic Tension",
        description: "Designed to remove severe tension, deep tissue massage is a technique used to relieve both muscles and connective tissue below the surface. It helps to improve range of motion and heal injuries below the surface.",
        fullDescription: `Deep tissue massage targets the deeper layers of muscle and connective tissue. Using slow, deliberate strokes and sustained pressure, this technique is particularly effective for chronic aches and pains, including stiff neck, upper back, low back pain, leg muscle tightness, and sore shoulders.

During your session, Steve will work to break up scar tissue and physically break down muscle "knots" or adhesions (bands of painful, rigid tissue) that can disrupt circulation and cause pain, limited range of motion, and inflammation.`,
        benefits: [
            "Relieves chronic muscle tension",
            "Breaks up scar tissue",
            "Improves range of motion",
            "Reduces inflammation",
            "Promotes faster healing",
        ],
        prices: [
            { duration: "30 minutes", price: 55 },
            { duration: "45 minutes", price: 72 },
            { duration: "60 minutes", price: 89 },
            { duration: "90 minutes", price: 133 },
            { duration: "120 minutes", price: 168 },
        ],
        idealFor: "Athletes, desk workers, anyone with chronic pain or muscle tension",
        icon: "💪",
    },
    "signature-massage": {
        title: "Steve's Signature Massage",
        tagline: "The Ultimate Therapeutic Experience",
        description: "Steve's signature massage is a combination of Steve's specialties that he loves to incorporate into his massages. Each massage is tailored to individual client needs.",
        fullDescription: `Steve's Signature Massage is our most popular service and for good reason. This customized treatment combines the best of everything Steve has learned over his 20+ years of experience.

Each session may include elements of deep tissue work, stretching, hot stones, cupping, gua sha, and ice therapy — all tailored specifically to your body's needs on that particular day. No two sessions are exactly alike because your body's needs are always evolving.`,
        benefits: [
            "Fully customized to your needs",
            "Combines multiple techniques",
            "Hot stones included",
            "Addresses whole-body wellness",
            "Maximum relaxation & relief",
        ],
        prices: [
            { duration: "45 minutes", price: 85 },
            { duration: "60 minutes", price: 100 },
            { duration: "90 minutes", price: 145 },
            { duration: "120 minutes", price: 195 },
        ],
        idealFor: "Anyone seeking a complete, customized massage experience",
        icon: "⭐",
        featured: true,
    },
    "deep-stretch": {
        title: "Deep Stretch",
        tagline: "Improve Flexibility & Mobility",
        description: "Deep Stretch massage does not require you to dress down, and it is recommended that you wear loose fitting/workout attire. This massage helps to increase your range of motion and reset muscle memory.",
        fullDescription: `Deep Stretch therapy is a guided stretching session designed to improve your flexibility, increase range of motion, and reset your muscle memory. Unlike traditional massage, you'll remain clothed in comfortable, loose-fitting athletic wear.

Steve uses a combination of assisted stretching techniques, gentle pressure, and movement to help lengthen tight muscles and improve joint mobility. This is perfect for athletes, those recovering from injury, or anyone feeling "stiff" and restricted in their movements.`,
        benefits: [
            "Increases flexibility",
            "Improves range of motion",
            "No undressing required",
            "Resets muscle memory",
            "Great for injury prevention",
        ],
        prices: [
            { duration: "30 minutes", price: 55 },
            { duration: "45 minutes", price: 73 },
            { duration: "60 minutes", price: 89 },
            { duration: "90 minutes", price: 133 },
        ],
        idealFor: "Athletes, fitness enthusiasts, those with mobility issues",
        icon: "🧘",
    },
    "cupping-massage": {
        title: "Cupping Massage",
        tagline: "Ancient Healing, Modern Relief",
        description: "Massage Cupping is a modern adaptation of the ancient art of cupping therapy. While massage performed by applying pressure, cupping instead uses negative pressure to pull, lift, open and expand the body's soft tissues.",
        fullDescription: `Cupping therapy uses suction cups to create negative pressure on your skin and underlying tissue. Unlike traditional massage that pushes into the muscles, cupping pulls tissue upward, separating layers of fascia and muscle to promote blood flow and healing.

This technique is excellent for releasing tight muscles, reducing inflammation, and promoting circulation. The cups may leave temporary circular marks that typically fade within a few days — these marks indicate areas of stagnation being released.`,
        benefits: [
            "Releases deep muscle tension",
            "Promotes blood circulation",
            "Reduces inflammation",
            "Relieves pain",
            "Accelerates healing",
        ],
        prices: [
            { duration: "30 minutes", price: 84 },
            { duration: "45 minutes", price: 99 },
            { duration: "60 minutes", price: 121 },
            { duration: "90 minutes", price: 166 },
        ],
        idealFor: "Those with chronic pain, athletes, anyone seeking deep tissue relief",
        icon: "⭕",
    },
    "gua-sha": {
        title: "Gua Sha",
        tagline: "Traditional Scraping Therapy",
        description: "Gua sha is a traditional Chinese healing technique in which the massage therapist uses a smooth-edged tool to stroke your skin while they press on it.",
        fullDescription: `Gua Sha (pronounced "gwah-shah") is a traditional East Asian healing technique that involves scraping the skin with a smooth-edged tool to improve circulation and promote healing. This therapy has been used for centuries to treat chronic pain, inflammation, and various health conditions.

During a Gua Sha session, Steve uses specially designed jade or bian stone tools to apply gentle, repeated strokes to lubricated skin. This technique may produce temporary redness called "petechiae" or "sha" — a sign of healthy blood flow being restored to the area.`,
        benefits: [
            "Relieves chronic pain",
            "Improves circulation",
            "Reduces inflammation",
            "Releases muscle tension",
            "Promotes natural healing",
        ],
        prices: [
            { duration: "30 minutes", price: 83 },
            { duration: "45 minutes", price: 99 },
            { duration: "60 minutes", price: 121 },
            { duration: "90 minutes", price: 165 },
        ],
        idealFor: "Those with chronic pain, neck/shoulder tension, migraines",
        icon: "💎",
    },
    "prenatal-massage": {
        title: "Prenatal Massage",
        tagline: "Gentle Care for Expecting Mothers",
        description: "Pregnancy massage focuses on addressing the special needs of expecting women. Specially-designed massage tables, cushions, and side-lying postures are used to prevent putting pressure on the abdomen.",
        fullDescription: `Prenatal massage is specifically designed to meet the unique needs of pregnant women. Using specially designed cushions and side-lying positions, Steve provides gentle, nurturing massage that helps relieve the discomforts of pregnancy without putting any pressure on the abdomen.

This therapeutic massage helps reduce anxiety, decreases symptoms of depression, relieves muscle aches and joint pains, and improves labor outcomes and newborn health. It's a wonderful way to care for yourself during this special time.`,
        benefits: [
            "Reduces pregnancy discomfort",
            "Relieves back and joint pain",
            "Decreases swelling",
            "Improves sleep",
            "Reduces anxiety and stress",
        ],
        prices: [
            { duration: "30 minutes", price: 45 },
            { duration: "45 minutes", price: 65 },
            { duration: "60 minutes", price: 77 },
        ],
        idealFor: "Expecting mothers in their second and third trimesters",
        icon: "🤰",
    },
};

type ServiceSlug = keyof typeof services;

export async function generateStaticParams() {
    return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
    params
}: {
    params: Promise<{ slug: string }>
}): Promise<Metadata> {
    const { slug } = await params;
    const service = services[slug as ServiceSlug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} | Super Steve Massage Therapy`,
        description: service.description,
    };
}

export default async function ServicePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const service = services[slug as ServiceSlug];

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Breadcrumb */}
                <nav className="mb-8" aria-label="Breadcrumb">
                    <ol className="flex items-center gap-2 text-sm text-[#6B6B6B]">
                        <li>
                            <Link href="/" className="hover:text-[#C4704A] transition-colors">Home</Link>
                        </li>
                        <li>/</li>
                        <li>
                            <Link href="/#services" className="hover:text-[#C4704A] transition-colors">Services</Link>
                        </li>
                        <li>/</li>
                        <li className="text-[#2D2D2D] font-medium">{service.title}</li>
                    </ol>
                </nav>

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        {service.tagline}
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        {service.title}
                    </h1>
                    {'featured' in service && service.featured && (
                        <span className="inline-block bg-[#2D2D2D] text-white text-xs font-medium px-4 py-1 rounded-full">
                            Most Popular
                        </span>
                    )}
                </div>

                {/* Main Content */}
                <div className="space-y-8">
                    {/* Description */}
                    <div className="bg-white rounded-2xl p-8 border border-[#E8D5C4]">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
                            About This Service
                        </h2>
                        <div className="text-[#6B6B6B] leading-relaxed space-y-4">
                            {service.fullDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div className="bg-[#F5EDE5] rounded-2xl p-8">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-6">
                            Benefits
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-3">
                            {service.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span className="text-[#2D2D2D]">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white rounded-2xl p-8 border border-[#E8D5C4]">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-6">
                            Pricing
                        </h2>
                        <div className="divide-y divide-[#E8D5C4]">
                            {service.prices.map((price, index) => (
                                <div key={index} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
                                    <span className="text-[#6B6B6B]">{price.duration}</span>
                                    <span className="text-xl font-semibold text-[#2D2D2D]">${price.price}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-[#C4704A] mt-4 flex items-center gap-2">
                            <span>🔥</span>
                            Add Hot Stones for +$25
                        </p>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gradient-to-r from-[#C4704A] to-[#A85D3B] rounded-2xl p-8 text-white">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-4">
                            Ideal For
                        </h2>
                        <p className="text-white/90 text-lg">{service.idealFor}</p>
                    </div>

                    {/* CTA */}
                    <div className="text-center pt-4">
                        <Link
                            href="https://www.massagebook.com/biz/superstevemassage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg"
                        >
                            Book {service.title}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Back to Services */}
                    <div className="text-center">
                        <Link
                            href="/#services"
                            className="text-[#6B6B6B] hover:text-[#C4704A] transition-colors inline-flex items-center gap-2"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            View All Services
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
