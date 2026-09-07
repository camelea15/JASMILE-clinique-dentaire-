import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { DentistsSection } from './components/DentistsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('fr');
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string>('');
  const [preSelectedDentistId, setPreSelectedDentistId] = useState<string>('');

  // Synchronize HTML dir and lang attributes on language change
  useEffect(() => {
    document.documentElement.lang = currentLang;
    if (currentLang === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [currentLang]);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
  };

  const scrollToAppointment = () => {
    const el = document.getElementById('rendez-vous');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    scrollToAppointment();
  };

  const handleSelectDentistForBooking = (dentistId: string) => {
    setPreSelectedDentistId(dentistId);
    scrollToAppointment();
  };

  return (
    <div className="min-h-screen bg-[#F6FAFA] text-[#1E293B] flex flex-col selection:bg-[#064F59] selection:text-white">
      {/* Fixed/Sticky Navbar */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        onOpenBooking={scrollToAppointment}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBooking={scrollToAppointment}
          onExploreServices={scrollToServices}
        />

        {/* Services Section (8 Services) */}
        <ServicesSection
          currentLang={currentLang}
          onSelectServiceForBooking={handleSelectServiceForBooking}
        />

        {/* About Section */}
        <AboutSection currentLang={currentLang} />

        {/* Dentists / Team Section (6 Dentists) */}
        <DentistsSection
          currentLang={currentLang}
          onSelectDentistForBooking={handleSelectDentistForBooking}
        />

        {/* Testimonials Section */}
        <TestimonialsSection currentLang={currentLang} />

        {/* Appointment / Booking Form */}
        <AppointmentSection
          currentLang={currentLang}
          preSelectedServiceId={preSelectedServiceId}
          preSelectedDentistId={preSelectedDentistId}
        />

        {/* Contact & Location Section */}
        <ContactSection
          currentLang={currentLang}
          onOpenBooking={scrollToAppointment}
        />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenBooking={scrollToAppointment}
      />
    </div>
  );
}
