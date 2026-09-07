import React from 'react';
import { Award, Cpu, Heart, MapPin, Sparkles, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { clinicReceptionImg } from '../assets/images';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const valueIcons = [
    <Award className="w-5 h-5 text-[#064F59]" key="exp" />,
    <Cpu className="w-5 h-5 text-[#064F59]" key="tech" />,
    <Heart className="w-5 h-5 text-[#064F59]" key="kind" />,
  ];

  return (
    <section
      id="a-propos"
      aria-label="À propos de la clinique JASMILE"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Clinic Architecture */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-[#064F59]/15 border-4 border-[#F6FAFA]">
              <img
                id="about-clinic-photo"
                src={clinicReceptionImg}
                alt="Accueil et espace d'attente de la clinique dentaire JASMILE à Hydra Alger"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-[16/10] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064F59]/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EAF6F7]" />
                  <span className="text-xs sm:text-sm font-medium tracking-wide">
                    Hydra, Alger — Algérie
                  </span>
                </div>
                <span className="text-xs bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/30">
                  Plateau technique moderne
                </span>
              </div>
            </div>

            {/* Quick Floating Stat Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-[#EAF6F7] rounded-2xl p-4 sm:p-5 border border-[#064F59]/15">
                <div className="text-2xl sm:text-3xl font-bold text-[#064F59] font-serif-accent">
                  100%
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#475569] mt-1">
                  Stérilisation de classe hospitalière & traçabilité
                </div>
              </div>
              <div className="bg-[#EAF6F7] rounded-2xl p-4 sm:p-5 border border-[#064F59]/15">
                <div className="text-2xl sm:text-3xl font-bold text-[#064F59] font-serif-accent">
                  6 Spécialistes
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#475569] mt-1">
                  Prise en charge multidisciplinaire coordonnée
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#064F59] uppercase block mb-3">
              {t.about.eyebrow}
            </span>
            <h2
              id="about-section-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#064F59] tracking-tight leading-tight mb-6"
            >
              {t.about.heading}
            </h2>

            <p className="text-base sm:text-lg text-[#1E293B] font-medium leading-relaxed mb-4">
              {t.about.lead}
            </p>

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed mb-8">
              {t.about.description}
            </p>

            {/* Three Core Values */}
            <div className="space-y-4">
              {t.about.values.map((val, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F6FAFA] border border-[#064F59]/10 hover:border-[#064F59]/25 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-[#064F59]/10">
                    {valueIcons[idx] || <Sparkles className="w-5 h-5 text-[#064F59]" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#064F59]">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
