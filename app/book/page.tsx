import Link from "next/link";

export const metadata = {
  title: "Book Appointment | Super Steve Massage Therapy",
  description: "Schedule your massage therapy appointment with Steve Thompson LMT. Easy online booking available 7 days a week.",
};

// TODO: Integrate Clover payment processing
// This page will eventually include:
// 1. Service selection with pricing
// 2. Date/time picker for appointment scheduling
// 3. Client information form
// 4. Clover payment integration for deposits/full payment
// 5. Confirmation email system

export default function BookPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Book Online
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            Schedule Your Appointment
          </h1>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Choose your preferred service and time. We&apos;ll confirm your appointment within 24 hours.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4] text-center mb-8">
          <div className="w-20 h-20 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
            Online Booking Coming Soon!
          </h2>
          <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
            We&apos;re building a new booking system with integrated payment processing. 
            In the meantime, you can book through our current system or call us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.massagebook.com/biz/superstevemassage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Book on MassageBook
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a
              href="tel:+12539709615"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#C4704A] text-[#C4704A] hover:bg-[#C4704A] hover:text-white px-8 py-4 rounded-full font-medium transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (253) 970-9615
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-[#6B6B6B] hover:text-[#C4704A] transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}





