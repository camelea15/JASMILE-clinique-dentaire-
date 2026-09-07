import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Calendar,
  X,
  Navigation,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { clinicReceptionImg } from '../assets/images';

interface ContactSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const [showMapModal, setShowMapModal] = useState(false);
  const t = translations[currentLang];

  return (
    <section
      id="contact"
      aria-label="Localisation et contact de la clinique"
      className="py-20 lg:py-24 bg-white relative border-t border-[#064F59]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 3-column banner card mirroring the template visual */}
        <div className="bg-[#F6FAFA] rounded-3xl p-6 sm:p-10 border border-[#064F59]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Column 1: Clinic photo thumbnail */}
            <div className="lg:col-span-4 relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md border-2 border-white relative group">
                <img
                  src={clinicReceptionImg}
                  alt="Clinique dentaire JASMILE à Hydra Alger"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#064F59]/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                  <span>Clinique Dentaire JASMILE</span>
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px]">
                    Hydra, Alger
                  </span>
                </div>
              </div>
            </div>

            {/* Column 2: Location & Hours details */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-xs font-bold text-[#064F59] uppercase tracking-wider block mb-1">
                  {t.contact.eyebrow}
                </span>
                <h3
                  id="contact-location-title"
                  className="text-xl sm:text-2xl font-normal text-[#064F59] leading-tight"
                >
                  {t.contact.heading}
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EAF6F7] text-[#064F59] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wide">
                    {t.contact.addressTitle}
                  </h4>
                  <p className="text-sm text-[#334155] whitespace-pre-line leading-relaxed font-medium">
                    {t.contact.addressValue}
                  </p>
                  <button
                    onClick={() => setShowMapModal(true)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#064F59] hover:underline mt-1 cursor-pointer"
                  >
                    <span>{t.contact.mapDirections}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#EAF6F7] text-[#064F59] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wide">
                    {t.contact.hoursTitle}
                  </h4>
                  <p className="text-sm text-[#334155] whitespace-pre-line leading-relaxed">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Contact Box with phone, email, socials, CTA button */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#064F59]/15 shadow-sm space-y-4">
                <h4 className="text-xs font-bold text-[#064F59] uppercase tracking-wider mb-2">
                  {t.contact.contactBoxTitle}
                </h4>

                {/* Phone */}
                <a
                  href="tel:+213560123456"
                  className="flex items-center gap-3 text-sm text-[#334155] hover:text-[#064F59] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F7] text-[#064F59] group-hover:bg-[#064F59] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold" dir="ltr">
                    {t.contact.phone}
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:contact@jassmile.dz"
                  className="flex items-center gap-3 text-sm text-[#334155] hover:text-[#064F59] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F7] text-[#064F59] group-hover:bg-[#064F59] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm">
                    {t.contact.email}
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] hover:text-[#064F59] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F7] text-[#064F59] group-hover:bg-[#064F59] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <span>{t.contact.facebook}</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#334155] hover:text-[#064F59] transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F7] text-[#064F59] group-hover:bg-[#064F59] group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <span>{t.contact.instagram}</span>
                </a>

                {/* Primary CTA button */}
                <div className="pt-2">
                  <button
                    id="contact-box-appointment-btn"
                    onClick={onOpenBooking}
                    className="w-full flex items-center justify-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white font-semibold text-sm py-3 rounded-full shadow-md transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{t.contact.bookCta}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map Modal */}
      {showMapModal && (
        <div
          id="map-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowMapModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            id="map-modal-content"
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-[#064F59]/15 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[#064F59]" />
                <h3 className="text-lg font-bold text-[#064F59]">
                  Localisation — JASMILE Hydra Alger
                </h3>
              </div>
              <button
                onClick={() => setShowMapModal(false)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Stylized Safe Map View Frame */}
            <div className="w-full h-64 sm:h-80 rounded-2xl bg-[#EAF6F7] border border-[#064F59]/20 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#064F59] text-white flex items-center justify-center mb-3 shadow-lg animate-bounce">
                <MapPin className="w-8 h-8 text-[#EAF6F7]" />
              </div>
              <h4 className="text-base font-bold text-[#064F59]">
                JASMILE Clinique Dentaire
              </h4>
              <p className="text-xs text-[#475569] max-w-sm mt-1">
                18, Rue des Frères Oukil, Hydra 16035, Alger — Algérie
              </p>
              <p className="text-[11px] text-[#64748B] mt-2">
                {t.contact.landmarks}
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://maps.google.com/?q=Hydra+Alger+Algerie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#064F59] text-white text-xs font-semibold px-4 py-2 rounded-full shadow hover:bg-[#083F47] transition-colors"
                >
                  <span>Ouvrir dans Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
