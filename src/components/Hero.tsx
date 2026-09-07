import React from 'react';
import { Calendar } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { heroDentistPatientImg } from '../assets/images';
import {
  ToothIcon,
  TeamDoctorIcon,
  HeartCareIcon,
  FloatingToothDeco,
  SparkleIcon,
} from './DentalIcons';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  onExploreServices,
}) => {
  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  return (
    <section
      id="accueil"
      aria-label="JASMILE Clinique Dentaire - Accueil"
      className="relative bg-white pt-24 sm:pt-28 md:pt-32 lg:pt-28 overflow-hidden min-h-[580px] sm:min-h-[620px] flex flex-col justify-between"
    >
      {/* BACKGROUND IMAGE BEHIND THE WRITING (Harmonized Positioning & Natural Contrast) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* The Clinic & Patient Photograph */}
        <img
          id="hero-bg-photo"
          src={heroDentistPatientImg}
          alt="JASMILE Clinique Dentaire Moderne"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover ${
            isRTL
              ? 'object-[38%_45%] sm:object-[40%_45%]'
              : 'object-[48%_38%] sm:object-[58%_42%] lg:object-[64%_45%]'
          } scale-100 sm:scale-[1.02] filter brightness-[1.02] contrast-[1.03] transition-all duration-700`}
        />

        {/* Dynamic gradient overlays: crisp text legibility while keeping patient & clinic clearly visible */}
        {/* Mobile overlay: smooth top-to-bottom wash ensuring crystal-clear text with visible patient smile below */}
        <div
          className={`absolute inset-0 block sm:hidden ${
            isRTL
              ? 'bg-gradient-to-b from-white/90 via-white/75 via-42% to-white/30'
              : 'bg-gradient-to-b from-white/90 via-white/75 via-42% to-white/30'
          }`}
        />

        {/* Tablet & Desktop overlay: directional gradient fading gently into the photograph */}
        <div
          className={`absolute inset-0 hidden sm:block ${
            isRTL
              ? 'bg-gradient-to-l from-white/92 via-white/75 via-42% md:via-white/60 md:via-48% lg:via-white/45 lg:via-52% to-transparent'
              : 'bg-gradient-to-r from-white/92 via-white/75 via-42% md:via-white/60 md:via-48% lg:via-white/45 lg:via-52% to-transparent'
          }`}
        />

        {/* Subtle blending vignettes for seamless navbar & trust bar transitions */}
        <div className="absolute inset-x-0 top-0 h-14 sm:h-16 bg-gradient-to-b from-white/75 sm:from-white/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* FOREGROUND HERO CONTENT (Sits directly on top of the background photo) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-4 pb-8 sm:py-10 md:py-12 lg:py-16 my-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* TEXT & CTAs COLUMN */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow: JASMILE CLINIQUE DENTAIRE with subtle sparkle */}
            <div className="flex items-center gap-2 mb-2.5 sm:mb-3.5">
              <span className="text-[11px] sm:text-xs md:text-[13px] font-bold tracking-[0.16em] sm:tracking-[0.18em] text-[#064F59] uppercase block font-sans">
                {t.hero.eyebrow}
              </span>
              <SparkleIcon className="w-3.5 h-3.5 text-[#064F59]/70" size={14} />
            </div>

            {/* Headline: Exact 2 lines with refined serif typography */}
            <div className="relative mb-3.5 sm:mb-5">
              <h1
                id="hero-main-headline"
                className="text-[28px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] font-normal text-[#064F59] font-serif-accent tracking-tight leading-[1.18] sm:leading-[1.15]"
              >
                {isRTL ? (
                  <>
                    ابتسامة صحية،<br />
                    لحياة أكثر إشراقاً.
                  </>
                ) : currentLang === 'en' ? (
                  <>
                    A healthy smile,<br />
                    for a more beautiful life.
                  </>
                ) : (
                  <>
                    Un sourire sain,<br />
                    pour une vie plus belle.
                  </>
                )}
              </h1>
            </div>

            {/* Subtitle / Descriptive Paragraph */}
            <p className="text-[13.5px] sm:text-base md:text-[1.05rem] text-[#334155] leading-relaxed max-w-lg mb-6 sm:mb-8 font-normal drop-shadow-xs">
              {t.hero.support}
            </p>

            {/* CTA Buttons: Responsive stack on mobile, horizontal pill row on tablet/desktop */}
            <div className="flex flex-col xs:flex-row items-stretch xs:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary CTA: Dark Teal Pill */}
              <button
                id="hero-book-appointment-btn"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center gap-2.5 bg-[#064F59] hover:bg-[#053F47] active:scale-[0.98] text-white font-semibold text-sm sm:text-[15px] px-6 sm:px-7 py-3.5 rounded-full shadow-md shadow-[#064F59]/20 hover:shadow-lg hover:shadow-[#064F59]/30 transition-all duration-200 cursor-pointer text-center w-full xs:w-auto min-h-[46px]"
              >
                <Calendar className="w-4 h-4 text-white flex-shrink-0" />
                <span>{t.hero.ctaPrimary}</span>
                <span
                  className={`text-base font-normal leading-none group-hover:translate-x-1 transition-transform ${
                    isRTL ? '-scale-x-100 group-hover:-translate-x-1' : ''
                  }`}
                  aria-hidden="true"
                >
                  →
                </span>
              </button>

              {/* Secondary CTA: White Pill with Dark Teal Border */}
              <button
                id="hero-explore-services-btn"
                onClick={onExploreServices}
                className="group inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white active:scale-[0.98] text-[#064F59] font-semibold text-sm sm:text-[15px] px-6 sm:px-7 py-3.5 rounded-full border border-[#064F59] shadow-xs transition-all duration-200 cursor-pointer backdrop-blur-xs text-center w-full xs:w-auto min-h-[46px]"
              >
                <span>{t.hero.ctaSecondary}</span>
                <span
                  className={`text-base font-semibold leading-none group-hover:translate-x-0.5 transition-transform ${
                    isRTL ? '-scale-x-100 group-hover:-translate-x-0.5' : ''
                  }`}
                  aria-hidden="true"
                >
                  ›
                </span>
              </button>
            </div>

          </div>

          {/* FLOATING LINE ART DECOR (Desktop / Large screen only) */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:col-span-5 xl:col-span-6 relative pointer-events-none h-full min-h-[380px]"
          >
            {/* Tooth Outline + Sparkle + Slash Line positioned matching reference screenshot */}
            <div className="absolute top-4 left-4 xl:left-8">
              {/* Tooth Outline */}
              <FloatingToothDeco className="w-14 h-14 xl:w-16 xl:h-16 text-[#064F59] opacity-40" size={60} />
              
              {/* Sparkle Star to the left */}
              <div className="absolute top-8 -left-5">
                <SparkleIcon className="w-4 h-4 text-[#064F59] opacity-50" size={16} />
              </div>

              {/* Diagonal accent slash line under the tooth */}
              <div className="absolute top-13 left-2 w-12 h-[1.8px] bg-[#064F59]/40 -rotate-30" />
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM TRUST INDICATOR BAR: Responsive 3-col on mobile, horizontal divider on tablet/desktop */}
      <div
        id="hero-trust-indicators-bar"
        className="relative z-10 w-full border-t border-slate-200/90 bg-white/95 backdrop-blur-xs"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3.5 sm:py-5">
          <div className="grid grid-cols-3 divide-x divide-slate-200 rtl:divide-x-reverse">

            {/* 1. Technologie moderne */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4 lg:px-6 text-center sm:text-left">
              <ToothIcon className="w-5 h-5 text-[#064F59] flex-shrink-0" size={20} />
              <span className="font-semibold text-[11px] xs:text-xs sm:text-sm text-[#064F59] tracking-normal leading-tight sm:leading-normal">
                {t.hero.trust.tech}
              </span>
            </div>

            {/* 2. Équipe expérimentée */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4 lg:px-6 text-center sm:text-left">
              <TeamDoctorIcon className="w-5 h-5 text-[#064F59] flex-shrink-0" size={20} />
              <span className="font-semibold text-[11px] xs:text-xs sm:text-sm text-[#064F59] tracking-normal leading-tight sm:leading-normal">
                {t.hero.trust.team}
              </span>
            </div>

            {/* 3. Soins personnalisés */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3 px-1 sm:px-4 lg:px-6 text-center sm:text-left">
              <HeartCareIcon className="w-5 h-5 text-[#064F59] flex-shrink-0" size={20} />
              <span className="font-semibold text-[11px] xs:text-xs sm:text-sm text-[#064F59] tracking-normal leading-tight sm:leading-normal">
                {t.hero.trust.custom}
              </span>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
