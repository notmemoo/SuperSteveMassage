import Link from "next/link";

export const metadata = {
    title: "Cancellation Policy | Super Steve Massage Therapy",
    description: "Learn about our cancellation and rescheduling policy for massage therapy appointments.",
};

export default function CancellationPolicyPage() {
    return (
        <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-6">
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
                        Policies
                    </p>
                    <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
                        Cancellation & Rescheduling Policy
                    </h1>
                    <p className="text-[#6B6B6B]">
                        Please read our policy to understand cancellation requirements.
                    </p>
                </div>

                {/* Policy Content */}
                <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4] space-y-8">
                    {/* 24-Hour Notice */}
                    <section>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-2">
                                    24-Hour Notice Required
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed">
                                    We require a minimum of 24 hours advance notice to cancel or reschedule your appointment.
                                    This allows us to offer your time slot to other clients who may be waiting for an opening.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Late Cancellations */}
                    <section>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#FEE] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-2">
                                    Late Cancellation Fee
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed mb-3">
                                    Cancellations made with less than 24 hours notice will be subject to a fee equal to
                                    50% of the service price. This policy helps ensure fairness to all clients and
                                    compensates for the lost time slot.
                                </p>
                                <div className="bg-[#FEE] border border-red-200 rounded-lg p-4">
                                    <p className="text-sm text-red-700 font-medium">
                                        Late cancellation fee: 50% of scheduled service price
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* No-Shows */}
                    <section>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#FEE] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-2">
                                    No-Show Policy
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed mb-3">
                                    If you miss your appointment without prior notification, the full service price will
                                    be charged. Future appointments may require prepayment or a deposit.
                                </p>
                                <div className="bg-[#FEE] border border-red-200 rounded-lg p-4">
                                    <p className="text-sm text-red-700 font-medium">
                                        No-show fee: 100% of scheduled service price
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How to Cancel */}
                    <section>
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-2">
                                    How to Cancel or Reschedule
                                </h2>
                                <p className="text-[#6B6B6B] leading-relaxed mb-4">
                                    To cancel or reschedule your appointment, please:
                                </p>
                                <ul className="space-y-2 text-[#6B6B6B]">
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Call us at <a href="tel:+12539709615" className="text-[#C4704A] hover:underline">(253) 970-9615</a></span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Manage your appointment through MassageBook</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Send us a message through our <Link href="/#contact" className="text-[#C4704A] hover:underline">contact form</Link></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Emergencies */}
                    <section>
                        <div className="bg-[#E8F5E9] border border-green-200 rounded-xl p-6">
                            <h3 className="font-semibold text-[#2D2D2D] mb-2 flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                                Emergencies & Illness
                            </h3>
                            <p className="text-sm text-[#2D2D2D]">
                                We understand that emergencies and sudden illnesses happen. Please contact us as soon
                                as possible if you&apos;re unable to make your appointment. We&apos;ll work with you on a
                                case-by-case basis for genuine emergencies.
                            </p>
                        </div>
                    </section>

                    {/* Thank You */}
                    <section className="text-center pt-6 border-t border-[#E8D5C4]">
                        <p className="text-[#6B6B6B] italic">
                            Thank you for understanding our policies. They help us provide the best service to all our clients
                            while respecting everyone's time and commitment.
                        </p>
                    </section>
                </div>

                {/* Questions CTA */}
                <div className="mt-8 text-center">
                    <p className="text-[#6B6B6B] mb-4">
                        Questions about our cancellation policy?
                    </p>
                    <a
                        href="tel:+12539709615"
                        className="inline-flex items-center gap-2 text-[#C4704A] hover:text-[#A85D3B] font-medium transition-colors"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Give us a call at (253) 970-9615
                    </a>
                </div>
            </div>
        </div>
    );
}
