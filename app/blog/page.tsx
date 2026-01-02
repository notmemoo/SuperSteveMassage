import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wellness Blog | Super Steve Massage Therapy",
    description: "Tips, insights, and wellness advice from Steve Thompson, LMT. Learn about massage therapy, self-care, and maintaining your health.",
};

const blogPosts = [
    {
        title: "5 Benefits of Regular Massage Therapy",
        excerpt: "Discover how incorporating regular massage into your wellness routine can improve your physical and mental health.",
        date: "Coming Soon",
        category: "Wellness",
        readTime: "5 min read",
        slug: "benefits-of-massage",
    },
    {
        title: "Hot Stone Massage: What to Expect",
        excerpt: "New to hot stone therapy? Learn what happens during a session and why it's become one of our most popular add-ons.",
        date: "Coming Soon",
        category: "Services",
        readTime: "4 min read",
        slug: "hot-stone-massage-guide",
    },
    {
        title: "Self-Care Stretches You Can Do at Home",
        excerpt: "Simple stretching exercises you can do between massage sessions to maintain flexibility and reduce tension.",
        date: "Coming Soon",
        category: "Self-Care",
        readTime: "6 min read",
        slug: "home-stretches",
    },
    {
        title: "Understanding Cupping Therapy",
        excerpt: "Everything you need to know about cupping — from how it works to what those circular marks mean.",
        date: "Coming Soon",
        category: "Services",
        readTime: "5 min read",
        slug: "cupping-therapy-explained",
    },
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Insights & Tips
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        Wellness Blog
                    </h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        Helpful tips, wellness advice, and insights from Steve Thompson, LMT.
                        Stay informed about massage therapy and self-care practices.
                    </p>
                </div>

                {/* Coming Soon Notice */}
                <div className="bg-gradient-to-r from-[#C4704A] to-[#A85D3B] rounded-2xl p-8 text-center text-white mb-12">
                    <span className="text-4xl mb-4 block">✍️</span>
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-3">
                        Blog Coming Soon!
                    </h2>
                    <p className="text-white/90 max-w-md mx-auto">
                        We&apos;re working on helpful articles about massage therapy, wellness tips,
                        and self-care. Check back soon!
                    </p>
                </div>

                {/* Preview Cards */}
                <div className="space-y-6">
                    <h2 className="font-semibold text-[#2D2D2D] text-lg">Upcoming Articles</h2>
                    {blogPosts.map((post, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 border border-[#E8D5C4] opacity-75"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-3">
                                <span className="text-xs font-medium text-[#C4704A] bg-[#F5EDE5] px-3 py-1 rounded-full w-fit">
                                    {post.category}
                                </span>
                                <span className="text-xs text-[#6B6B6B]">{post.readTime}</span>
                            </div>
                            <h3 className="font-semibold text-[#2D2D2D] text-lg mb-2">{post.title}</h3>
                            <p className="text-[#6B6B6B] text-sm">{post.excerpt}</p>
                        </div>
                    ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-12 bg-[#F5EDE5] rounded-2xl p-8 text-center">
                    <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-[#6B6B6B] mb-6">
                        Want to know when new articles are published? Book an appointment and
                        ask about joining our mailing list!
                    </p>
                    <Link
                        href="https://www.massagebook.com/biz/superstevemassage"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-lg"
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
