import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

/**
 * Clean minimal tooth outline
 */
export const ToothIcon: React.FC<IconProps> = ({ className = 'w-6 h-6 text-[#064F59]', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 3C4.5 3 3 5 3 7.5C3 11 4.5 13 6 15L7.5 21C8 22 9 22 9.5 21L11 16C11.5 14.5 12.5 14.5 13 16L14.5 21C15 22 16 22 16.5 21L18 15C19.5 13 21 11 21 7.5C21 5 19.5 3 17 3C14.5 3 13.5 4.5 12 4.5C10.5 4.5 9.5 3 7 3Z" />
    <path d="M9 7.5C9.5 8 10.5 8.5 12 8.5C13.5 8.5 14.5 8 15 7.5" strokeOpacity="0.7" />
  </svg>
);

/**
 * 1. Consultation dentaire: Dental examination / tooth inspection mirror
 */
export const ConsultationIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Clean tooth outline */}
    <path d="M8 4C6 4 4.5 5.5 4.5 8C4.5 11 5.5 13 7 15L8.5 22C9 23 10 23 10.5 22L12 17.5C12.5 16 13.5 16 14 17.5L15.5 22C16 23 17 23 17.5 22L19 15C20.5 13 21.5 11 21.5 8C21.5 5.5 20 4 18 4C15.5 4 14.5 5.5 13 5.5C11.5 5.5 10.5 4 8 4Z" />
    {/* Dental inspection mirror */}
    <circle cx="19" cy="9" r="4.5" strokeWidth="1.75" />
    <path d="M22.5 12.5L25.5 15.5" strokeWidth="2" />
    <path d="M9.5 8C10.5 8.5 11.5 8.7 13 8.7" strokeOpacity="0.6" />
  </svg>
);

/**
 * 2. Implantologie dentaire: Dental implant screw with threads & abutment
 */
export const ImplantIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Crown / Top abutment */}
    <rect x="8" y="3" width="12" height="6" rx="2" strokeWidth="1.75" />
    <line x1="10" y1="9" x2="18" y2="9" strokeWidth="1.75" />
    {/* Implant Post & Screw Threads */}
    <path d="M11 9L11 22C11 23.5 13 24.5 14 24.5C15 24.5 17 23.5 17 22L17 9" strokeWidth="1.75" />
    <line x1="9" y1="12" x2="19" y2="12" strokeWidth="1.75" />
    <line x1="10" y1="15" x2="18" y2="15" strokeWidth="1.75" />
    <line x1="10.5" y1="18" x2="17.5" y2="18" strokeWidth="1.75" />
    <line x1="11.5" y1="21" x2="16.5" y2="21" strokeWidth="1.75" />
  </svg>
);

/**
 * 3. Orthodontie: Brackets on archwire for dental alignment
 */
export const OrthoIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Archwire */}
    <path d="M3 14H25" strokeWidth="2" />
    {/* 3 Orthodontic brackets */}
    <rect x="5" y="10" width="5" height="8" rx="1.5" strokeWidth="1.75" />
    <rect x="11.5" y="10" width="5" height="8" rx="1.5" strokeWidth="1.75" />
    <rect x="18" y="10" width="5" height="8" rx="1.5" strokeWidth="1.75" />
    {/* Inner cross bracket slots */}
    <line x1="7.5" y1="10" x2="7.5" y2="18" strokeWidth="1.5" />
    <line x1="14" y1="10" x2="14" y2="18" strokeWidth="1.5" />
    <line x1="20.5" y1="10" x2="20.5" y2="18" strokeWidth="1.5" />
  </svg>
);

/**
 * 4. Esthétique dentaire: Tooth with radiant sparkles / bright smile
 */
export const AestheticIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Main tooth */}
    <path d="M8 5C6 5 4.5 6.5 4.5 9C4.5 12 5.5 14 7 16L8.5 22C9 23 10 23 10.5 22L12 17.5C12.5 16 13.5 16 14 17.5L15.5 22C16 23 17 23 17.5 22L19 16C20.5 14 21.5 12 21.5 9C21.5 6.5 20 5 18 5C15.5 5 14.5 6.5 13 6.5C11.5 6.5 10.5 5 8 5Z" />
    {/* Sparkle top right */}
    <path d="M22 2L23 5L26 6L23 7L22 10L21 7L18 6L21 5L22 2Z" fill="currentColor" stroke="none" />
    {/* Small sparkle bottom left */}
    <path d="M5 19L5.7 21L7.7 21.7L5.7 22.4L5 24.4L4.3 22.4L2.3 21.7L4.3 21L5 19Z" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * 5. Soins dentaires: Tooth restoration & medical health cross
 */
export const GeneralCareIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tooth shape */}
    <path d="M7 4C5 4 3.5 5.5 3.5 8C3.5 11 4.5 13 6 15L7.5 21C8 22 9 22 9.5 21L11 16.5C11.5 15 12.5 15 13 16.5L14.5 21C15 22 16 22 16.5 21L18 15C19.5 13 20.5 11 20.5 8C20.5 5.5 19 4 17 4C14.5 4 13.5 5.5 12 5.5C10.5 5.5 9.5 4 7 4Z" />
    {/* Medical Plus cross inside/beside */}
    <circle cx="21" cy="7" r="5" fill="#EAF6F7" stroke="currentColor" strokeWidth="1.5" />
    <line x1="21" y1="4.5" x2="21" y2="9.5" strokeWidth="1.75" />
    <line x1="18.5" y1="7" x2="23.5" y2="7" strokeWidth="1.75" />
  </svg>
);

/**
 * 6. Endodontie: Root canal treatment illustration
 */
export const EndoIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Outer tooth contour */}
    <path d="M8 4C5.5 4 4 5.5 4 8C4 11.5 5.5 13.5 7 15.5L8.5 23C9 24 10 24 10.5 23L12.5 17C13 15.5 14 15.5 14.5 17L16.5 23C17 24 18 24 18.5 23L20 15.5C21.5 13.5 23 11.5 23 8C23 5.5 21.5 4 19 4C16.5 4 15.5 5.5 13.5 5.5C11.5 5.5 10.5 4 8 4Z" />
    {/* Root canal internal path lines */}
    <path d="M9.5 20C9.5 16 11 13 13.5 10" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
    <path d="M17.5 20C17.5 16 16 13 13.5 10" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
    <circle cx="13.5" cy="8.5" r="1.5" fill="currentColor" />
  </svg>
);

/**
 * 7. Parodontologie: Tooth with healthy supporting gum line
 */
export const PerioIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tooth roots and crown */}
    <path d="M9 4C7 4 6 5.5 6 7.5C6 10.5 7 12 8 14L9 22C9.5 23 10.5 23 11 22L12.5 17C13 15.5 14 15.5 14.5 17L16 22C16.5 23 17.5 23 18 22L19 14C20 12 21 10.5 21 7.5C21 5.5 20 4 18 4C16 4 15 5.2 13.5 5.2C12 5.2 11 4 9 4Z" />
    {/* Scalloped healthy gum line */}
    <path d="M3 15C5.5 13 7.5 13 10 15C12.5 17 14.5 17 17 15C19.5 13 21.5 13 25 15" strokeWidth="2" strokeLinecap="round" />
    <path d="M3 18C5.5 16 7.5 16 10 18C12.5 20 14.5 20 17 18C19.5 16 21.5 16 25 18" strokeWidth="1.2" strokeOpacity="0.5" />
  </svg>
);

/**
 * 8. Dentisterie pédiatrique: Friendly gentle child tooth with smile
 */
export const PediatricIcon: React.FC<IconProps> = ({ className = 'w-7 h-7 text-[#064F59]', size = 28 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Soft rounded tooth */}
    <path d="M8 4C5.5 4 4 5.5 4 8C4 11 5.5 13 7 15L8.5 21.5C9 22.5 10 22.5 10.5 21.5L12 17C12.5 15.5 13.5 15.5 14 17L15.5 21.5C16 22.5 17 22.5 17.5 21.5L19 15C20.5 13 22 11 22 8C22 5.5 20.5 4 18 4C15.5 4 14.5 5.5 13 5.5C11.5 5.5 10.5 4 8 4Z" />
    {/* Child happy smile & eyes */}
    <circle cx="10" cy="10" r="1" fill="currentColor" />
    <circle cx="16" cy="10" r="1" fill="currentColor" />
    <path d="M10.5 13C11.5 14.5 14.5 14.5 15.5 13" strokeWidth="1.5" strokeLinecap="round" />
    {/* Tiny star */}
    <path d="M23 3L23.7 4.5L25.2 4.8L24 5.9L24.4 7.4L23 6.6L21.6 7.4L22 5.9L20.8 4.8L22.3 4.5L23 3Z" fill="currentColor" stroke="none" />
  </svg>
);

/**
 * Decorative sparkle for hero
 */
export const SparkleIcon: React.FC<IconProps> = ({ className = 'w-4 h-4 text-[#064F59]', size = 16 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

/**
 * Decorative smile curve
 */
export const SmileCurveIcon: React.FC<IconProps> = ({ className = 'w-16 h-8 text-[#064F59]', size = 24 }) => (
  <svg
    width={size * 2}
    height={size}
    viewBox="0 0 48 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M4 8C14 20 34 20 44 8" />
  </svg>
);

/**
 * Trust bar icon: Medical Team / Doctor with Stethoscope
 */
export const TeamDoctorIcon: React.FC<IconProps> = ({ className = 'w-6 h-6 text-[#064F59]', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/**
 * Trust bar icon: Heart with Caring Outline
 */
export const HeartCareIcon: React.FC<IconProps> = ({ className = 'w-6 h-6 text-[#064F59]', size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

/**
 * Soft Line Art Tooth for Hero Floating Decor
 */
export const FloatingToothDeco: React.FC<IconProps> = ({ className = 'w-14 h-14 text-[#064F59]', size = 56 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M14 6C9 6 6 10 6 15C6 22 9 26 12 30L15 42C16 44 18 44 19 42L22 32C23 29 25 29 26 32L29 42C30 44 32 44 33 42L36 30C39 26 42 22 42 15C42 10 39 6 34 6C29 6 27 9 24 9C21 9 19 6 14 6Z" />
    <path d="M18 15C19 16 21 17 24 17C27 17 29 16 30 15" strokeOpacity="0.5" />
  </svg>
);

/**
 * Navbar Jasmile Logo: crisp vector tooth with sparkle matching reference design
 */
export const JasmileNavbarLogo: React.FC<IconProps> = ({ className = 'w-9 h-9 text-white', size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {/* Tooth Crown and Roots */}
    <path d="M13 8C8.5 8 5.5 11.5 5.5 16C5.5 21.5 8.5 25.5 11 29L13 35C13.8 36.8 15.8 36.8 16.5 35L19 27C19.8 24.5 21.2 24.5 22 27L24.5 35C25.2 36.8 27.2 36.8 28 35L30 29C32.5 25.5 35.5 21.5 35.5 16C35.5 11.5 32.5 8 28 8C24 8 21.5 10.5 20.5 10.5C19.5 10.5 17 8 13 8Z" />
    {/* Sparkle star */}
    <path d="M7 6L8.2 2.5L9.4 6L13 7.2L9.4 8.4L8.2 12L7 8.4L3.5 7.2L7 6Z" fill="currentColor" stroke="none" />
    {/* Subtle inner tooth smile line */}
    <path d="M15 15C16.5 16.5 18.5 17 20.5 17C22.5 17 24.5 16.5 26 15" strokeOpacity="0.6" strokeWidth="1.5" />
  </svg>
);
