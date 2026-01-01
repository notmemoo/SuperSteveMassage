import IntakeForm from "@/components/intake/IntakeForm";
import Link from "next/link";

export const metadata = {
  title: "New Client Intake Form | Super Steve Massage Therapy",
  description: "Complete your new client intake form before your first massage therapy appointment with Steve Thompson LMT.",
};

export default function IntakePage() {
  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
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
            New Clients
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Client Intake Form
          </h1>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Please complete this form before your first appointment to help Steve 
            provide you with the best possible care.
          </p>
        </div>

        {/* Form */}
        <IntakeForm />
      </div>
    </div>
  );
}
