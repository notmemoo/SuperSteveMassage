import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Steve Thompson | Super Steve Massage Therapy",
    description: "Meet Steve Thompson, LMT with 20+ years of massage therapy experience. Learn about his background in physical therapy and holistic approach to healing.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Your Therapist
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
                        Meet Steve Thompson
                    </h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
                        Licensed Massage Therapist • 20+ Years Experience
                    </p>
                </div>

                {/* Main Content */}
                <div className="space-y-12">
                    {/* Profile Section */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4]">
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {/* Photo placeholder */}
                            <div className="w-full md:w-48 h-48 bg-gradient-to-br from-[#C4704A] to-[#A85D3B] rounded-2xl flex items-center justify-center flex-shrink-0">
                                <span className="text-6xl">👨‍⚕️</span>
                            </div>

                            <div className="flex-1">
                                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
                                    Steve Thompson, LMT
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed mb-4">
                                    Hello! I&apos;m Steve Thompson, a Licensed Massage Therapist (MA60714361)
                                    with over 20 years of experience in therapeutic massage and bodywork.
                                    My journey into massage therapy began with a background in physical therapy,
                                    which gave me a deep understanding of the human body and its healing potential.
                                </p>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    I am passionate about helping people reach their potential for optimal health
                                    and mobility. Every session is tailored to your individual needs, whether
                                    you&apos;re seeking relief from chronic pain, recovering from an injury, or
                                    simply looking to relax and rejuvenate.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Credentials */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 border border-[#E8D5C4] text-center">
                            <div className="w-14 h-14 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#2D2D2D] mb-2">Licensed & Certified</h3>
                            <p className="text-sm text-[#6B6B6B]">WA State License MA60714361</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-[#E8D5C4] text-center">
                            <div className="w-14 h-14 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#2D2D2D] mb-2">20+ Years Experience</h3>
                            <p className="text-sm text-[#6B6B6B]">Dedicated to the healing arts</p>
                        </div>

                        <div className="bg-white rounded-xl p-6 border border-[#E8D5C4] text-center">
                            <div className="w-14 h-14 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-7 h-7 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#2D2D2D] mb-2">Physical Therapy Background</h3>
                            <p className="text-sm text-[#6B6B6B]">Medical knowledge & expertise</p>
                        </div>
                    </div>

                    {/* Specialties */}
                    <div className="bg-[#F5EDE5] rounded-2xl p-8 md:p-12">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-6 text-center">
                            My Specialties
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {[
                                "Deep Tissue Massage",
                                "Hot Stone Therapy",
                                "Cupping",
                                "Gua Sha",
                                "Deep Stretch",
                                "Prenatal Massage",
                            ].map((specialty, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg px-4 py-3 text-center text-[#2D2D2D] font-medium text-sm"
                                >
                                    {specialty}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Philosophy */}
                    <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4]">
                        <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-6">
                            My Philosophy
                        </h2>
                        <blockquote className="text-xl text-[#6B6B6B] italic leading-relaxed border-l-4 border-[#C4704A] pl-6 mb-6">
                            &ldquo;Just breathe. The body has an incredible capacity to heal itself when given
                            the right care and attention. My role is to facilitate that healing journey.&rdquo;
                        </blockquote>
                        <p className="text-[#6B6B6B] leading-relaxed">
                            In my spare time, I enjoy rock climbing and hiking in our beautiful Pacific Northwest.
                            These activities keep me connected to the importance of physical wellness and
                            remind me why I do what I do — helping others live their most active, pain-free lives.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="text-center">
                        <Link
                            href="https://www.massagebook.com/biz/superstevemassage"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg"
                        >
                            Book a Session with Steve
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
