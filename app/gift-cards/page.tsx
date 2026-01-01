import Link from "next/link";

export const metadata = {
  title: "Gift Cards | Super Steve Massage Therapy",
  description: "Give the gift of relaxation. Purchase massage therapy gift cards for friends and family.",
};

// TODO: Integrate Clover for gift card purchases
// Features to build:
// 1. Select gift card amount (preset or custom)
// 2. Digital or physical card option
// 3. Personalized message
// 4. Recipient email for digital delivery
// 5. Clover payment processing
// 6. Unique gift card codes
// 7. Redemption system

const giftCardOptions = [
  { amount: 50, popular: false },
  { amount: 75, popular: false },
  { amount: 100, popular: true },
  { amount: 150, popular: false },
  { amount: 200, popular: false },
];

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF9] pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Gift Cards
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            Give the Gift of Wellness
          </h1>
          <p className="text-[#6B6B6B] max-w-xl mx-auto">
            Treat someone special to the healing benefits of professional massage therapy. 
            The perfect gift for any occasion.
          </p>
        </div>

        {/* Gift Card Preview */}
        <div className="bg-gradient-to-br from-[#C4704A] to-[#A85D3B] rounded-2xl p-8 mb-12 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative">
            <p className="text-white/80 text-sm tracking-wider uppercase mb-2">Gift Card</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-semibold mb-2">
              Super Steve Massage
            </h2>
            <p className="text-white/80 mb-6">Professional Massage Therapy</p>
            
            {/* Amount Display */}
            <div className="inline-block bg-white/20 backdrop-blur px-8 py-4 rounded-xl">
              <p className="text-4xl font-bold">$100</p>
              <p className="text-sm text-white/80">Gift Card Value</p>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E8D5C4] text-center mb-8">
          <div className="w-20 h-20 bg-[#E8D5C4] rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-semibold text-[#2D2D2D] mb-4">
            Online Gift Cards Coming Soon!
          </h2>
          <p className="text-[#6B6B6B] mb-8 max-w-md mx-auto">
            We&apos;re setting up secure online gift card purchases. 
            In the meantime, please call us to purchase gift cards.
          </p>

          {/* Gift Card Options Preview */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 max-w-lg mx-auto mb-8">
            {giftCardOptions.map((option) => (
              <div
                key={option.amount}
                className={`relative p-4 rounded-xl border-2 ${
                  option.popular
                    ? "border-[#C4704A] bg-[#C4704A]/5"
                    : "border-[#E8D5C4] bg-white"
                }`}
              >
                {option.popular && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#C4704A] text-white text-xs px-2 py-0.5 rounded-full">
                    Popular
                  </span>
                )}
                <p className="font-semibold text-[#2D2D2D]">${option.amount}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12539709615"
              className="inline-flex items-center justify-center gap-2 bg-[#C4704A] hover:bg-[#A85D3B] text-white px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call to Purchase: (253) 970-9615
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





