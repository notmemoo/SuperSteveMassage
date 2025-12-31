import Link from "next/link";

export const metadata = {
  title: "New Client Intake Form | Super Steve Massage Therapy",
  description: "Complete your new client intake form before your first massage therapy appointment with Steve Thompson LMT.",
};

// TODO: Build comprehensive intake form system
// This will include:
// 1. Personal information
// 2. Medical history
// 3. Current conditions/concerns
// 4. Areas of focus for treatment
// 5. Consent and policies
// 6. Digital signature
// 7. Save to database for client records

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            New Clients
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            Client Intake Form
          </h1>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Please complete this form before your first appointment to help Steve 
            provide you with the best possible care.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4] text-center mb-8">
          <div className="w-20 h-20 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
            Online Intake Forms Coming Soon!
          </h2>
          <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
            We&apos;re creating a digital intake form system for your convenience. 
            Until then, you&apos;ll complete your intake paperwork at your first appointment.
          </p>

          {/* What to Expect */}
          <div className="bg-[#F5EDE5] rounded-xl p-6 text-left max-w-md mx-auto mb-8">
            <h3 className="font-semibold text-[#2D2D2D] mb-3">What to Bring to Your First Visit:</h3>
            <ul className="space-y-2 text-[#6B6B6B] text-sm">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Valid ID
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                List of current medications
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Any relevant medical history
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-[#C4704A] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Comfortable, loose clothing (for Deep Stretch)
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.massagebook.com/biz/superstevemassage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              Book Your First Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
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


