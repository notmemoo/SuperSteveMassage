"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
    {
        category: "Booking & Appointments",
        questions: [
            {
                q: "How do I book an appointment?",
                a: "You can book online through our MassageBook system or call us directly at (253) 970-9615. We're open 7 days a week by appointment.",
            },
            {
                q: "What payment methods do you accept?",
                a: "We accept cash, credit cards, debit cards, and digital payments. Payment is due at the time of service.",
            },
            {
                q: "What is your cancellation policy?",
                a: "We require 24-hour notice for cancellations or rescheduling. Late cancellations or no-shows may be subject to a fee. See our full cancellation policy for details.",
            },
            {
                q: "Do you offer gift certificates?",
                a: "Yes! Gift certificates are available for any dollar amount or specific service. They make perfect gifts for birthdays, holidays, or special occasions.",
            },
        ],
    },
    {
        category: "First Visit",
        questions: [
            {
                q: "What should I expect on my first visit?",
                a: "New clients will fill out an intake form covering medical history and areas of concern. We'll discuss your goals, then proceed with your massage. Please arrive 10-15 minutes early for paperwork.",
            },
            {
                q: "What should I wear?",
                a: "Wear comfortable clothing. You'll disrobe to your comfort level (fully, partially, or stay clothed for certain techniques). You'll be properly draped at all times.",
            },
            {
                q: "Should I tip?",
                a: "Tipping is appreciated but never required. If you're happy with your service, a 15-20% gratuity is customary in the massage therapy industry.",
            },
        ],
    },
    {
        category: "Health & Safety",
        questions: [
            {
                q: "Are there any conditions that would prevent me from getting a massage?",
                a: "Some conditions require medical clearance: recent surgery, blood clots, severe osteoporosis, uncontrolled high blood pressure, or certain skin conditions. We'll discuss your health history during intake.",
            },
            {
                q: "Can I get a massage if I'm pregnant?",
                a: "Absolutely! We offer specialized prenatal massage for expecting mothers. It's safe after the first trimester and can help with many pregnancy-related discomforts.",
            },
            {
                q: "Will the massage hurt?",
                a: "Deep tissue and therapeutic massage may involve some discomfort in problem areas, but should never be painful. Communication is key - always let me know if pressure is too light or too intense.",
            },
            {
                q: "What if I have an injury or chronic pain?",
                a: "I have a physical therapy background and specialize in therapeutic massage for injuries and chronic pain. We'll create a treatment plan focused on your specific needs.",
            },
        ],
    },
    {
        category: "Services",
        questions: [
            {
                q: "How long should my massage be?",
                a: "First-time clients often start with 60 minutes. For specific problem areas or full-body therapeutic work, 90-120 minutes allows more thorough treatment. We offer sessions from 30-120 minutes.",
            },
            {
                q: "What's the difference between your services?",
                a: "Deep Tissue focuses on chronic tension, Steve's Signature combines multiple techniques (cupping, hot stones, gua sha), Prenatal is for pregnancy, and Deep Stretch emphasizes assisted stretching. I can help you choose during your consultation.",
            },
            {
                q: "How often should I get a massage?",
                a: "For general wellness: monthly. For chronic pain or injury recovery: weekly or bi-weekly initially, then spacing out as you improve. I'll recommend a schedule based on your goals.",
            },
        ],
    },
];

export default function FAQPage() {
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#C4704A] transition-colors mb-6"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </Link>
                    <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
                        Questions?
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-[#6B6B6B] max-w-xl mx-auto">
                        Find answers to common questions about massage therapy, booking, and what to expect.
                    </p>
                </div>

                {/* FAQ Sections */}
                <div className="space-y-8">
                    {faqs.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
                                {section.category}
                            </h2>
                            <div className="space-y-3">
                                {section.questions.map((faq, faqIndex) => {
                                    const itemId = `${sectionIndex}-${faqIndex}`;
                                    const isOpen = openItems.includes(itemId);

                                    return (
                                        <div
                                            key={itemId}
                                            className="bg-white rounded-xl border border-[#E8D5C4] overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleItem(itemId)}
                                                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#FDFBF9] transition-colors"
                                                aria-expanded={isOpen}
                                            >
                                                <span className="font-medium text-[#2D2D2D] pr-4">
                                                    <span dangerouslySetInnerHTML={{ __html: faq.q }} />
                                                </span>
                                                <svg
                                                    className={`w-5 h-5 text-[#C4704A] flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </button>
                                            {isOpen && (
                                                <div className="px-6 pb-4 text-[#6B6B6B] leading-relaxed">
                                                    <span dangerouslySetInnerHTML={{ __html: faq.a }} />
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Still have questions CTA */}
                <div className="mt-12 bg-gradient-to-br from-[#C4704A] to-[#A85D3B] rounded-2xl p-8 text-center text-white">
                    <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold mb-3">
                        Still have questions?
                    </h3>
                    <p className="mb-6 text-white/90">
                        Feel free to give us a call or send a message. We&apos;re happy to help!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+12539709615"
                            className="inline-flex items-center justify-center gap-2 bg-white text-[#C4704A] hover:bg-white/90 px-8 py-3 rounded-full font-medium transition-all"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            Call (253) 970-9615
                        </a>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#C4704A] px-8 py-3 rounded-full font-medium transition-all"
                        >
                            Send a Message
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
