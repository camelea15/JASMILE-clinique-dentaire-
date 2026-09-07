export type Language = 'fr' | 'en' | 'ar';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  duration: string;
  iconType: 'consultation' | 'implant' | 'ortho' | 'aesthetic' | 'care' | 'endo' | 'perio' | 'pediatric';
}

export interface DentistProfile {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  experience: string;
  education: string;
  image: string;
  availableDays: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  dentistId: string;
  date: string;
  timeSlot: string;
  message: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  treatment: string;
  rating: number;
  comment: string;
  date: string;
  location: string;
}
