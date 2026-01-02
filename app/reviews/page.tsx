import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Client Reviews | Super Steve Massage Therapy",
    description: "Read what our clients say about their massage therapy experience with Steve Thompson, LMT. Real testimonials from satisfied customers.",
};

const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        date: "December 2025",
        service: "Deep Tissue Massage",
        text: "Steve is absolutely amazing! I've been dealing with chronic back pain for years, and after just a few sessions, I'm finally feeling relief. His deep tissue technique is incredible — firm but never painful. Highly recommend!",
    },
    {
        name: "Michael R.",
        rating: 5,
        date: "November 2025",
        service: "Steve's Signature Massage",
        text: "Best massage I've ever had. Steve takes the time to understand what you need and customizes the entire experience. The combination of techniques he uses in his signature massage is pure magic.",
    },
    {
        name: "Jennifer L.",
        rating: 5,
        date: "November 2025",
        service: "Cupping Massage",
        text: "I was nervous to try cupping for the first time, but Steve explained everything and made me feel completely at ease. The results were amazing — my shoulder tension is finally gone!",
    },
    {
        name: "David K.",
        rating: 5,
        date: "October 2025",
        service: "Deep Stretch",
        text: "As a runner, the deep stretch sessions have been a game changer for my recovery. Steve's knowledge of muscle groups and stretching techniques is impressive. I can actually move better now!",
    },
    {
        name: "Amanda T.",
        rating: 5,
        date: "October 2025",
        service: "Prenatal Massage",
        text: "Finding a massage therapist I trust during pregnancy was so important to me. Steve is gentle, knowledgeable, and the prenatal massage helped so much with my lower back pain. Thank you!",
    },
    {
        name: "Robert H.",
        rating: 5,
        date: "September 2025",
        service: "Gua Sha",
        text: "I'd never heard of Gua Sha before, but Steve recommended it for my chronic neck issues. After the session, I couldn't believe how much better I felt. Definitely coming back for more!",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
            {[...Array(5)].map((_, index) => (
                <svg
                    key={index}
                    className={`w-5 h-5 ${index < rating ? "text-[#C4704A]" : "text-[#E8D5C4]"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function ReviewsPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Testimonials
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        Client Reviews
                    </h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        Don&apos;t just take our word for it — hear from our satisfied clients
                        about their massage therapy experience with Steve.
                    </p>
                </div>

                {/* Overall Rating */}
                <div className="bg-gradient-to-r from-[#C4704A] to-[#A85D3B] rounded-2xl p-8 text-center text-white mb-12">
                    <div className="text-5xl font-bold mb-2">5.0</div>
                    <div className="flex justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                    <p className="text-white/80">Based on {reviews.length} reviews</p>
                </div>

                {/* Reviews Grid */}
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8D5C4] hover:border-[#C4704A] transition-colors"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="font-semibold text-[#2D2D2D] text-lg">{review.name}</h3>
                                    <p className="text-sm text-[#6B6B6B]">{review.service}</p>
                                </div>
                                <div className="flex flex-col items-start sm:items-end gap-1">
                                    <StarRating rating={review.rating} />
                                    <span className="text-xs text-[#6B6B6B]">{review.date}</span>
                                </div>
                            </div>
                            <p className="text-[#6B6B6B] leading-relaxed">{review.text}</p>
                        </div>
                    ))}
                </div>

                {/* Leave a Review CTA */}
                <div className="mt-12 bg-[#F5EDE5] rounded-2xl p-8 text-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
                        Had a Great Experience?
                    </h2>
                    <p className="text-[#6B6B6B] mb-6">
                        We&apos;d love to hear from you! Leave a review on MassageBook.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://www.massagebook.com/therapists/super-steve-s-massage/reviews"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
                        >
                            Leave a Review
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </Link>
                        <Link
                            href="https://www.massagebook.com/biz/superstevemassage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 border-2 border-[#C4704A] text-[#C4704A] hover:bg-[#C4704A] hover:text-white px-6 py-3 rounded-full font-medium transition-all"
                        >
                            Book an Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
