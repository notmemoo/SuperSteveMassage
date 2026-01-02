import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery | Super Steve Massage Therapy",
    description: "Explore our professional massage therapy studio in University Place, WA. View our treatment rooms, equipment, and relaxing atmosphere.",
};

const galleryImages = [
    {
        title: "Treatment Room",
        description: "Our comfortable, private treatment space",
        placeholder: "🛋️",
    },
    {
        title: "Hot Stone Therapy",
        description: "Smooth basalt stones for deep relaxation",
        placeholder: "🔥",
    },
    {
        title: "Cupping Equipment",
        description: "Professional silicone and glass cups",
        placeholder: "⭕",
    },
    {
        title: "Massage Table",
        description: "Premium heated massage table",
        placeholder: "🛏️",
    },
    {
        title: "Gua Sha Tools",
        description: "Traditional jade and bian stone tools",
        placeholder: "💎",
    },
    {
        title: "Relaxation Area",
        description: "Calm atmosphere for your wellness journey",
        placeholder: "🌿",
    },
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Our Space
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        Gallery
                    </h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        Take a virtual tour of our professional massage therapy studio.
                        We&apos;ve created a peaceful environment designed for your comfort and healing.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden border border-[#E8D5C4] hover:border-[#C4704A] transition-all hover:shadow-xl"
                        >
                            {/* Placeholder image area */}
                            <div className="aspect-[4/3] bg-gradient-to-br from-[#F5EDE5] to-[#E8D5C4] flex items-center justify-center">
                                <span className="text-6xl opacity-50 group-hover:scale-110 transition-transform duration-300">
                                    {image.placeholder}
                                </span>
                            </div>
                            {/* Caption */}
                            <div className="p-5">
                                <h3 className="font-semibold text-[#2D2D2D] mb-1">{image.title}</h3>
                                <p className="text-sm text-[#6B6B6B]">{image.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Note about photos */}
                <div className="mt-12 text-center bg-[#F5EDE5] rounded-2xl p-8">
                    <p className="text-[#6B6B6B] mb-4">
                        📸 Professional photos coming soon! In the meantime, book an appointment to experience our studio in person.
                    </p>
                    <a
                        href="https://www.massagebook.com/biz/superstevemassage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                    >
                        Book an Appointment
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
