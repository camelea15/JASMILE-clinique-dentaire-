import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Globe, Menu, X, PhoneCall, ChevronDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const t = translations[currentLang];
  const isRTL = currentLang === 'ar';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['accueil', 'services', 'a-propos', 'equipe', 'temoignages', 'rendez-vous', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'accueil', label: t.nav.home },
    { id: 'services', label: t.nav.services },
    { id: 'a-propos', label: t.nav.about },
    { id: 'equipe', label: t.nav.team },
    { id: 'temoignages', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
  ];

  return (
    <header
      id="main-navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#064F59]/95 backdrop-blur-md shadow-lg shadow-[#064F59]/25 py-2.5 sm:py-3'
          : 'bg-[#064F59] py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name: Official Uploaded JASMILE Logo */}
          <a
            id="navbar-brand-link"
            href="#accueil"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('accueil');
            }}
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg p-0.5 -ml-1 transition-transform active:scale-95"
            aria-label="JASMILE Clinique Dentaire Moderne - Accueil"
          >
            <img
              src="/logo-horizontal-transparent.png"
              alt="JASMILE Modern Dental Clinic"
              className="h-9 sm:h-10 md:h-11 w-auto max-w-[185px] sm:max-w-[215px] md:max-w-[240px] object-contain group-hover:brightness-105 transition-all"
            />
          </a>

          {/* Desktop Navigation Links matching reference image */}
          <nav
            id="desktop-nav-menu"
            aria-label="Navigation principale"
            className="hidden md:flex items-center gap-1 lg:gap-2.5 text-xs lg:text-sm font-medium"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3 py-2 transition-all duration-200 text-xs lg:text-sm whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {/* Subtle active underline bar matching reference screenshot */}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-white rounded-full animate-in fade-in duration-200"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Language Switcher Dropdown & Primary CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Language Dropdown Selector (Globe + FR v) matching reference image */}
            <div className="relative" ref={langDropdownRef}>
              <button
                id="language-dropdown-btn"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 text-xs text-white/95 hover:text-white px-2.5 py-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
                aria-label={`Changer de langue (Actuelle: ${currentLang.toUpperCase()})`}
                aria-expanded={langDropdownOpen}
              >
                <Globe className="w-3.5 h-3.5 text-white/90" />
                <span className="uppercase font-semibold tracking-wider text-xs">{currentLang}</span>
                <ChevronDown
                  className={`w-3 h-3 text-white/80 transition-transform duration-200 ${
                    langDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Language Dropdown Menu */}
              {langDropdownOpen && (
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 rtl:right-auto rtl:left-0 mt-1.5 w-32 bg-white rounded-xl shadow-xl border border-slate-200/80 py-1.5 z-50 text-slate-700 animate-in fade-in slide-in-from-top-1 duration-150"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      id={`lang-select-${lang.code}`}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left rtl:text-right px-3.5 py-2 text-xs font-medium flex items-center justify-between hover:bg-[#EAF6F7] hover:text-[#064F59] transition-colors cursor-pointer ${
                        currentLang === lang.code
                          ? 'text-[#064F59] font-bold bg-[#EAF6F7]/60'
                          : 'text-slate-700'
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="uppercase text-[10px] text-slate-400 font-bold">{lang.code}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA Button: White rounded pill with calendar icon */}
            <button
              id="navbar-book-btn"
              onClick={onOpenBooking}
              className="flex items-center gap-1.5 sm:gap-2 bg-white text-[#064F59] hover:bg-[#EAF6F7] active:scale-95 font-semibold text-xs sm:text-sm px-3.5 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full shadow-md transition-all duration-200 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#064F59]" />
              <span className="whitespace-nowrap">{t.nav.bookAppointment}</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/40 cursor-pointer md:hidden"
              aria-label="Ouvrir le menu de navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Pages names on mobile: horizontal smooth pill bar */}
      <div
        id="navbar-mobile-page-names"
        className="md:hidden mt-2 pt-1.5 pb-0.5 border-t border-white/10 overflow-x-auto no-scrollbar px-3 flex items-center gap-1.5 scroll-smooth"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <button
              key={link.id}
              id={`navbar-mobile-link-${link.id}`}
              onClick={() => scrollToSection(link.id)}
              className={`px-3 py-1 rounded-full text-xs whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-white text-[#064F59] font-bold shadow-sm'
                  : 'text-white/80 hover:text-white bg-white/5 hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#083F47] border-t border-white/15 px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col gap-1 mb-5" aria-label="Menu mobile">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left rtl:text-right px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-white/20 text-white font-semibold'
                      : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-white/15 flex flex-col gap-3">
            {/* Mobile Call button */}
            <a
              href="tel:+213560123456"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white py-2.5 rounded-xl text-sm font-medium border border-white/20"
            >
              <PhoneCall className="w-4 h-4 text-[#EAF6F7]" />
              <span>+213 560 12 34 56</span>
            </a>

            {/* Mobile Booking CTA */}
            <button
              id="mobile-nav-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-white text-[#064F59] hover:bg-[#EAF6F7] font-semibold text-sm py-3 rounded-xl shadow-md transition-colors cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookAppointment}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
