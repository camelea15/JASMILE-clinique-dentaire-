import React, { useState } from 'react';
import { ArrowRight, X, Clock, CheckCircle2, Calendar } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations, servicesData } from '../data/translations';
import {
  ConsultationIcon,
  ImplantIcon,
  OrthoIcon,
  AestheticIcon,
  GeneralCareIcon,
  EndoIcon,
  PerioIcon,
  PediatricIcon,
} from './DentalIcons';

interface ServicesSectionProps {
  currentLang: Language;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onSelectServiceForBooking,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const t = translations[currentLang];
  const services = servicesData[currentLang];
  const isRTL = currentLang === 'ar';

  const renderServiceIcon = (iconType: ServiceItem['iconType']) => {
    const props = { className: 'w-7 h-7 text-[#064F59]' };
    switch (iconType) {
      case 'consultation':
        return <ConsultationIcon {...props} />;
      case 'implant':
        return <ImplantIcon {...props} />;
      case 'ortho':
        return <OrthoIcon {...props} />;
      case 'aesthetic':
        return <AestheticIcon {...props} />;
      case 'care':
        return <GeneralCareIcon {...props} />;
      case 'endo':
        return <EndoIcon {...props} />;
      case 'perio':
        return <PerioIcon {...props} />;
      case 'pediatric':
        return <PediatricIcon {...props} />;
      default:
        return <ConsultationIcon {...props} />;
    }
  };

  return (
    <section
      id="services"
      aria-label="Nos services dentaires"
      className="py-20 lg:py-24 bg-white relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header layout matching template dentiste.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#064F59] uppercase block mb-2.5">
              {t.services.eyebrow}
            </span>
            <h2
              id="services-section-title"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#064F59] font-serif-accent tracking-tight leading-tight"
            >
              {t.services.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
              {t.services.support}
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href="#rendez-vous"
              className="inline-flex items-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#064F59]/20 hover:shadow-lg active:scale-98"
            >
              <span>{t.services.viewAll}</span>
              <ArrowRight
                className={`w-4 h-4 text-white/90 ${isRTL ? 'rotate-180' : ''}`}
              />
            </a>
          </div>
        </div>

        {/* 8 Categories Grid: Exactly 8 cards, 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div
          id="services-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          {services.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              onClick={() => setSelectedService(service)}
              className="group bg-[#EAF6F7] hover:bg-white border border-[#064F59]/10 hover:border-[#064F59]/30 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-[#064F59]/12 hover:-translate-y-1 cursor-pointer relative"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedService(service);
                }
              }}
              aria-label={`En savoir plus sur ${service.title}`}
            >
              <div>
                {/* Specific Dental Icon */}
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-[#EAF6F7] flex items-center justify-center mb-5 shadow-sm border border-[#064F59]/10 transition-colors duration-300">
                  {renderServiceIcon(service.iconType)}
                </div>

                {/* Visible Category Name - Never Hidden */}
                <h3 className="text-base sm:text-lg font-bold text-[#064F59] mb-2 leading-snug group-hover:text-[#083F47] transition-colors">
                  {service.title}
                </h3>

                {/* Short Explanation */}
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="pt-5 mt-5 border-t border-[#064F59]/10 flex items-center justify-between text-xs font-semibold text-[#064F59]">
                <span className="text-[#064F59]/70 group-hover:text-[#064F59] transition-colors">
                  {t.services.learnMore}
                </span>
                <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#064F59] text-[#064F59] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm ml-auto rtl:ml-0 rtl:mr-auto">
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 ${
                      isRTL ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#064F59]/20 p-6 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-[#64748B] hover:text-[#064F59] p-2 rounded-full hover:bg-[#EAF6F7] transition-colors cursor-pointer"
              aria-label={t.services.closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Icon & Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF6F7] border border-[#064F59]/15 flex items-center justify-center flex-shrink-0">
                {renderServiceIcon(selectedService.iconType)}
              </div>
              <div>
                <span className="text-xs font-bold text-[#064F59] uppercase tracking-wider block">
                  Discipline Dentaire
                </span>
                <h3
                  id="service-modal-title"
                  className="text-xl sm:text-2xl font-bold text-[#064F59] font-serif-accent leading-tight"
                >
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Average Duration */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6FAFA] border border-[#064F59]/15 text-xs text-[#064F59] font-medium mb-5">
              <Clock className="w-3.5 h-3.5 text-[#064F59]" />
              <span>
                {t.services.durationLabel} : {selectedService.duration}
              </span>
            </div>

            {/* Long Description */}
            <div className="mb-6">
              <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                {selectedService.longDescription}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wider mb-3">
                {t.services.benefitsLabel}
              </h4>
              <ul className="space-y-2.5">
                {selectedService.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#064F59] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-[#064F59]/15">
              <button
                onClick={() => {
                  const serviceId = selectedService.id;
                  setSelectedService(null);
                  onSelectServiceForBooking(serviceId);
                }}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white font-semibold py-3 px-6 rounded-full shadow-md shadow-[#064F59]/20 transition-all cursor-pointer text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.services.bookThisService}</span>
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-[#64748B] hover:text-[#064F59] hover:bg-[#F6FAFA] text-sm font-medium transition-colors cursor-pointer"
              >
                {t.services.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
