import React, { useState } from 'react';
import { User, X, Calendar, GraduationCap, Briefcase, ArrowRight, Check } from 'lucide-react';
import { Language, DentistProfile } from '../types';
import { translations, dentistsData } from '../data/translations';

interface DentistsSectionProps {
  currentLang: Language;
  onSelectDentistForBooking: (dentistId: string) => void;
}

export const DentistsSection: React.FC<DentistsSectionProps> = ({
  currentLang,
  onSelectDentistForBooking,
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<DentistProfile | null>(null);

  const t = translations[currentLang];
  const doctors = dentistsData[currentLang];
  const isRTL = currentLang === 'ar';

  return (
    <section
      id="equipe"
      aria-label="Notre équipe de dentistes"
      className="py-20 lg:py-24 bg-[#F0F8F9] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Left-Aligned Narrative matching template */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#064F59] uppercase block mb-2.5">
              {t.team.eyebrow}
            </span>
            <h2
              id="team-section-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#064F59] font-serif-accent tracking-tight leading-tight"
            >
              {t.team.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl">
              {t.team.support}
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <a
              href="#rendez-vous"
              className="inline-flex items-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-[#064F59]/20 hover:shadow-lg active:scale-98"
            >
              <span>Découvrir notre équipe</span>
              <ArrowRight
                className={`w-4 h-4 text-white/90 ${isRTL ? 'rotate-180' : ''}`}
              />
            </a>
          </div>
        </div>

        {/* Exactly 6 Dentists Grid: 6 columns on large screens, 3 on tablet, 2 on mobile */}
        <div
          id="dentists-cards-grid"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              id={`doctor-card-${doctor.id}`}
              onClick={() => setSelectedDoctor(doctor)}
              className="group bg-white rounded-2xl overflow-hidden border border-[#064F59]/10 shadow-sm hover:shadow-xl hover:shadow-[#064F59]/12 hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedDoctor(doctor);
                }
              }}
              aria-label={`Voir le profil du ${doctor.name}`}
            >
              {/* Doctor Portrait Container with white coat */}
              <div className="relative aspect-[3/3.8] overflow-hidden bg-[#EAF6F7]">
                <img
                  src={doctor.image}
                  alt={`Portrait du ${doctor.name}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2.5">
                  <span className="text-white text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#064F59]/90 backdrop-blur-sm">
                    {doctor.experience}
                  </span>
                </div>
              </div>

              {/* Doctor Name and Specialty */}
              <div className="p-3.5 sm:p-4 flex flex-col flex-grow justify-between text-center">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-[#064F59] mb-1 leading-snug group-hover:text-[#083F47] transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#64748B] leading-tight line-clamp-2 font-medium">
                    {doctor.specialty}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#064F59]/10 flex items-center justify-center">
                  <span className="text-[11px] font-semibold text-[#064F59] flex items-center gap-1 group-hover:underline">
                    {t.team.viewProfile}
                    <ArrowRight className={`w-3 h-3 ${isRTL ? 'rotate-180' : ''}`} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Doctor Detail Modal */}
      {selectedDoctor && (
        <div
          id="doctor-detail-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedDoctor(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="doctor-modal-name"
        >
          <div
            id="doctor-detail-modal-content"
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#064F59]/15 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close */}
            <button
              onClick={() => setSelectedDoctor(null)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-[#64748B] hover:text-[#064F59] p-2 rounded-full hover:bg-[#EAF6F7] transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Doctor Info Header */}
            <div className="flex items-start gap-4 mb-6">
              <img
                src={selectedDoctor.image}
                alt={selectedDoctor.name}
                referrerPolicy="no-referrer"
                className="w-20 h-20 rounded-2xl object-cover object-top border-2 border-[#064F59]/20 shadow-md"
              />
              <div className="pr-8 rtl:pr-0 rtl:pl-8">
                <span className="text-xs font-bold text-[#064F59] uppercase tracking-wider block mb-1">
                  Chirurgien-Dentiste
                </span>
                <h3
                  id="doctor-modal-name"
                  className="text-xl sm:text-2xl font-bold text-[#064F59] font-serif-accent leading-tight"
                >
                  {selectedDoctor.name}
                </h3>
                <p className="text-sm font-semibold text-[#475569] mt-1">
                  {selectedDoctor.specialty}
                </p>
              </div>
            </div>

            {/* Key Facts */}
            <div className="grid grid-cols-2 gap-3 mb-6 bg-[#F6FAFA] p-4 rounded-2xl border border-[#064F59]/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white text-[#064F59] flex items-center justify-center shadow-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#64748B]">
                    {t.team.experienceLabel}
                  </div>
                  <div className="text-xs font-bold text-[#064F59]">
                    {selectedDoctor.experience}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-white text-[#064F59] flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#64748B]">
                    {t.team.educationLabel}
                  </div>
                  <div className="text-xs font-bold text-[#064F59] truncate max-w-[150px]">
                    {selectedDoctor.education}
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wider mb-2">
                Biographie Professionnelle
              </h4>
              <p className="text-sm text-[#334155] leading-relaxed">
                {selectedDoctor.bio}
              </p>
            </div>

            {/* Consultation Days */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wider mb-2">
                {t.team.availabilityLabel}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedDoctor.availableDays.map((day, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-[#EAF6F7] text-[#064F59] text-xs font-medium"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-5 border-t border-[#064F59]/10">
              <button
                onClick={() => {
                  const doctorId = selectedDoctor.id;
                  setSelectedDoctor(null);
                  onSelectDentistForBooking(doctorId);
                }}
                className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white font-semibold py-3 px-6 rounded-full shadow-md shadow-[#064F59]/20 transition-all cursor-pointer text-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.team.bookWithDoctor}</span>
              </button>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-[#64748B] hover:text-[#064F59] hover:bg-[#F6FAFA] text-sm font-medium transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
