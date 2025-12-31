"use client";

import { useState } from "react";

interface PriceOption {
  duration: string;
  price: number;
}

interface ServiceCardProps {
  title: string;
  description: string;
  prices: PriceOption[];
  icon: React.ReactNode;
  featured?: boolean;
}

const ServiceCard = ({ title, description, prices, icon, featured = false }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? "bg-gradient-to-br from-[#C4704A] to-[#A85D3B] text-white"
          : "bg-white border border-[#E8D5C4] hover:border-[#C4704A]"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#2D2D2D] text-white text-xs font-medium px-4 py-1 rounded-full">
          Most Popular
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
          featured ? "bg-white/20" : "bg-[#E8D5C4]"
        }`}
      >
        <span className={featured ? "text-white" : "text-[#C4704A]"}>{icon}</span>
      </div>

      {/* Title */}
      <h3
        className={`font-[family-name:var(--font-playfair)] text-xl md:text-2xl font-semibold mb-3 ${
          featured ? "text-white" : "text-[#2D2D2D]"
        }`}
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          featured ? "text-white/90" : "text-[#6B6B6B]"
        }`}
      >
        {description}
      </p>

      {/* Pricing */}
      <div className="space-y-2">
        {prices.slice(0, isExpanded ? prices.length : 2).map((option, index) => (
          <div
            key={index}
            className={`flex justify-between items-center py-2 border-b last:border-0 ${
              featured ? "border-white/20" : "border-[#E8D5C4]"
            }`}
          >
            <span className={`text-sm ${featured ? "text-white/80" : "text-[#6B6B6B]"}`}>
              {option.duration}
            </span>
            <span className={`font-semibold ${featured ? "text-white" : "text-[#2D2D2D]"}`}>
              ${option.price}
            </span>
          </div>
        ))}
      </div>

      {/* Expand button */}
      {prices.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 text-sm font-medium flex items-center gap-1 transition-colors ${
            featured ? "text-white/80 hover:text-white" : "text-[#C4704A] hover:text-[#A85D3B]"
          }`}
        >
          {isExpanded ? "Show less" : `+${prices.length - 2} more options`}
          <svg
            className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}

      {/* Book button */}
      <a
        href="https://www.massagebook.com/biz/superstevemassage"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-6 block text-center py-3 rounded-full font-medium transition-all ${
          featured
            ? "bg-white text-[#C4704A] hover:bg-[#F5EDE5]"
            : "bg-[#C4704A] text-white hover:bg-[#A85D3B]"
        }`}
      >
        Book This Service
      </a>
    </div>
  );
};

export default ServiceCard;


