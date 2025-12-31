"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Dian B.",
    date: "August 2025",
    service: "Steve's Signature Massage",
    rating: 5,
    text: "It was more than great!! I have never been pain free… and Steve with much experience, skill and technique got it.!! I highly recommend him as well as his professional client manner.",
  },
  {
    name: "Clifford M.",
    date: "July 2025",
    service: "Deep Tissue Massage",
    rating: 5,
    text: "Steve is the best massage therapist I've ever had the pleasure of knowing. His treatments leave me relaxed yet invigorated. My arthritis requires movement and stimulation through massage to manage, and Steve fits the bill perfectly. I highly recommend his services.",
  },
  {
    name: "Kris B.",
    date: "June 2025",
    service: "Steve's Signature Massage",
    rating: 5,
    text: "Last year, my daughter recommended Steve to me following a severe fall from a 16-foot ladder. The doctors informed me that I would endure pain for the remainder of my life; however, after receiving Steve's care through deep tissue massages and stretching sessions, I regained the ability to walk, stand, and sit without pain. I was immensely grateful that I chose to invest in Steve's services as his exceptional expertise in physical therapy and massage, combined with his supportive and caring approach throughout my recovery, enabled me to regain my physical well-being and enjoy life once more!",
  },
  {
    name: "Katie G.",
    date: "May 2025",
    service: "Steve's Signature Massage",
    rating: 5,
    text: "Been coming to Steve for a few months. I would highly recommend him for anyone who needs to relax or help with pain. Very professional and good attitude.",
  },
  {
    name: "Anonymous",
    date: "May 2025",
    service: "Deep Tissue Massage",
    rating: 5,
    text: "Steve is always professional, courteous and pays attention to great detail and the clients needs.",
  },
  {
    name: "Angela B.",
    date: "April 2025",
    service: "Deep Tissue Massage",
    rating: 5,
    text: "This massage therapist works his magic each time I need a massage as well as stretching.",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-[#C4704A]" : "text-gray-300"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5EDE5]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C4704A] font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-6">
            What Clients Say
          </h2>
          <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it — hear from clients who have 
            experienced the healing touch of Steve&apos;s massage therapy.
          </p>
        </div>

        {/* Featured Testimonial (Mobile Carousel) */}
        <div className="lg:hidden mb-8">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <StarRating rating={testimonials[activeIndex].rating} />
            <p className="mt-4 text-[#2D2D2D] leading-relaxed italic">
              &ldquo;{testimonials[activeIndex].text}&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-[#2D2D2D]">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-[#6B6B6B]">{testimonials[activeIndex].service}</p>
                <p className="text-xs text-[#C4704A]">{testimonials[activeIndex].date}</p>
              </div>
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-[#E8D5C4] transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeIndex ? "bg-[#C4704A] w-6" : "bg-[#C4704A]/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow hover:bg-[#E8D5C4] transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-[#C4704A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ${
                index === 2 ? "xl:col-span-1 lg:col-span-2 xl:col-span-1" : ""
              }`}
            >
              <StarRating rating={testimonial.rating} />
              <p className="mt-4 text-[#2D2D2D] leading-relaxed text-sm">
                &ldquo;{testimonial.text.length > 200 
                  ? testimonial.text.substring(0, 200) + "..." 
                  : testimonial.text}&rdquo;
              </p>
              <div className="mt-6 pt-4 border-t border-[#E8D5C4]">
                <p className="font-semibold text-[#2D2D2D]">{testimonial.name}</p>
                <p className="text-sm text-[#6B6B6B]">{testimonial.service}</p>
                <p className="text-xs text-[#C4704A] mt-1">{testimonial.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#C4704A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[#2D2D2D] font-semibold">5.0</span>
            <span className="text-[#6B6B6B]">|</span>
            <span className="text-[#6B6B6B]">All 5-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


