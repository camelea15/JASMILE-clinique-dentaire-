import React, { useState } from 'react';
import { Heart, ShieldCheck, FileText, Cookie, X, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

type LegalModalType = 'privacy' | 'terms' | 'cookies' | null;

export const Footer: React.FC<FooterProps> = ({ currentLang, onOpenBooking }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const t = translations[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer
      id="main-footer"
      className="bg-[#064F59] text-white pt-16 pb-12 border-t border-white/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/15">
          {/* Col 1: Brand & Slogan */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center">
              <img
                src="/logo-horizontal-transparent.png"
                alt="Logo officiel JASMILE Clinique Dentaire"
                referrerPolicy="no-referrer"
                className="h-12 w-auto max-w-[240px] object-contain"
              />
            </div>

            <p className="text-white/80 text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>

            <div className="pt-2">
              <p className="font-script text-2xl sm:text-3xl text-white tracking-wide">
                « {t.footer.slogan} »
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-[#EAF6F7] uppercase tracking-widest">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <button
                  onClick={() => scrollToSection('accueil')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('a-propos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('equipe')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.team}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('temoignages')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.testimonials}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Socials & Quick Appointment */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-[#EAF6F7] uppercase tracking-widest">
              Réseaux & Réservation
            </h4>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook de la clinique dentaire JASMILE"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compte Instagram de la clinique dentaire JASMILE"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full text-center bg-white text-[#064F59] hover:bg-[#EAF6F7] font-semibold text-xs py-3 rounded-full shadow transition-colors cursor-pointer block"
            >
              {t.nav.bookAppointment}
            </button>
          </div>
        </div>

        {/* Bottom row: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/70">
          <div>{t.footer.copyright}</div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.privacyPolicy}
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.termsOfService}
            </button>
            <button
              onClick={() => setActiveLegalModal('cookies')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {t.footer.cookiesPolicy}
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            title="Haut de page"
            aria-label="Retourner en haut de la page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Legal Modals */}
      {activeLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
          onClick={() => setActiveLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white text-[#1E293B] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
              <h3 className="text-lg font-bold text-[#064F59]">
                {activeLegalModal === 'privacy' && t.footer.privacyPolicy}
                {activeLegalModal === 'terms' && t.footer.termsOfService}
                {activeLegalModal === 'cookies' && t.footer.cookiesPolicy}
              </h3>
              <button
                onClick={() => setActiveLegalModal(null)}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-[#475569] leading-relaxed space-y-3 max-h-80 overflow-y-auto pr-1">
              {activeLegalModal === 'privacy' && (
                <>
                  <p>
                    <strong>Protection des données personnelles :</strong> Chez JASMILE, nous attachons une importance capitale à la confidentialité de vos informations.
                  </p>
                  <p>
                    Les informations recueillies via notre formulaire de demande de rendez-vous (nom, téléphone, email, motif) sont strictement réservées au traitement administratif et à la confirmation de votre créneau par notre secrétariat médical.
                  </p>
                  <p>
                    Aucune donnée de santé sensible n'est enregistrée dans le navigateur ni transmise à des tiers sans votre consentement exprès.
                  </p>
                </>
              )}

              {activeLegalModal === 'terms' && (
                <>
                  <p>
                    <strong>Éditeur du site :</strong> Clinique Dentaire JASMILE — 18, Rue des Frères Oukil, Hydra, Alger, Algérie.
                  </p>
                  <p>
                    <strong>Objet :</strong> Ce site web a pour objet de présenter les activités médicales, les équipements et l'équipe de praticiens de la clinique JASMILE.
                  </p>
                  <p>
                    Les informations médicales présentées sont données à titre indicatif et ne remplacent en aucun cas un diagnostic ou une consultation médicale personnalisée.
                  </p>
                </>
              )}

              {activeLegalModal === 'cookies' && (
                <>
                  <p>
                    <strong>Gestion des traceurs :</strong> Notre site utilise uniquement des traceurs techniques indispensables au bon fonctionnement de la navigation (notamment la mémorisation de votre choix de langue FR / EN / AR).
                  </p>
                  <p>
                    Aucun cookie publicitaire ou traceur de profilage tiers n'est déposé sans votre accord préalable.
                  </p>
                </>
              )}
            </div>

            <div className="mt-6 pt-3 border-t border-gray-100 text-right">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="bg-[#064F59] text-white text-xs font-semibold px-5 py-2 rounded-full hover:bg-[#083F47] transition-colors cursor-pointer"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
