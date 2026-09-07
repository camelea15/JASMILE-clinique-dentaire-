import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations, testimonialsData } from '../data/translations';

interface TestimonialsSectionProps {
  currentLang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const testimonials = testimonialsData[currentLang];

  return (
    <section
      id="temoignages"
      aria-label="Témoignages et avis des patients"
      className="py-20 lg:py-28 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#064F59] uppercase block mb-3">
            {t.testimonials.eyebrow}
          </span>
          <h2
            id="testimonials-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#064F59] tracking-tight leading-tight mb-4"
          >
            {t.testimonials.heading}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.testimonials.support}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6FAFA] rounded-3xl p-7 sm:p-8 border border-[#064F59]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4 text-[#064F59]">
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 fill-[#064F59] text-[#064F59]"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed italic mb-6">
                  « {item.comment} »
                </p>
              </div>

              {/* Patient Info */}
              <div className="pt-4 border-t border-[#064F59]/10 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#064F59]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#64748B]">{item.treatment}</p>
                </div>
                <div className="text-right rtl:text-left text-[11px] text-[#94A3B8]">
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
