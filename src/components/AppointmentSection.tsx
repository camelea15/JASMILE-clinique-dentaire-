import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle,
  AlertCircle,
  Stethoscope,
  Info,
  ShieldCheck,
} from 'lucide-react';
import { Language, AppointmentFormData } from '../types';
import { translations, servicesData, dentistsData } from '../data/translations';

interface AppointmentSectionProps {
  currentLang: Language;
  preSelectedServiceId?: string;
  preSelectedDentistId?: string;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({
  currentLang,
  preSelectedServiceId,
  preSelectedDentistId,
}) => {
  const t = translations[currentLang];
  const services = servicesData[currentLang];
  const doctors = dentistsData[currentLang];
  const isRTL = currentLang === 'ar';

  // Form State
  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: '',
    phone: '',
    email: '',
    serviceId: preSelectedServiceId || '',
    dentistId: preSelectedDentistId || '',
    date: '',
    timeSlot: '',
    message: '',
  });

  // Validation Errors & Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successBookingInfo, setSuccessBookingInfo] = useState<AppointmentFormData | null>(null);

  // Sync props if passed
  useEffect(() => {
    if (preSelectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preSelectedServiceId }));
    }
  }, [preSelectedServiceId]);

  useEffect(() => {
    if (preSelectedDentistId) {
      setFormData((prev) => ({ ...prev, dentistId: preSelectedDentistId }));
    }
  }, [preSelectedDentistId]);

  // Compute minimum date (today + 1 day)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const max = new Date();
    max.setMonth(max.getMonth() + 3);
    return max.toISOString().split('T')[0];
  };

  // Time slots for clinic hours: 08:30 to 18:30
  const timeSlots = [
    '08:30', '09:15', '10:00', '10:45', '11:30',
    '14:00', '14:45', '15:30', '16:15', '17:00', '17:45'
  ];

  // Sanitize text input against HTML injection / XSS without stripping active spaces
  const sanitizeText = (input: string) => {
    return input.replace(/[<>]/g, '');
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.appointment.form.errors.fullNameRequired;
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Le nom doit comporter au moins 3 caractères.';
    }

    // Phone
    const phoneClean = formData.phone.replace(/[\s\-\.]/g, '');
    const phoneRegex = /^(\+213|00213|0)[567][0-9]{8}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = t.appointment.form.errors.phoneRequired;
    } else if (!phoneRegex.test(phoneClean) && phoneClean.length < 9) {
      newErrors.phone = t.appointment.form.errors.phoneInvalid;
    }

    // Email
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = t.appointment.form.errors.emailInvalid;
      }
    }

    // Service
    if (!formData.serviceId) {
      newErrors.serviceId = t.appointment.form.errors.serviceRequired;
    }

    // Date
    if (!formData.date) {
      newErrors.date = t.appointment.form.errors.dateRequired;
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = t.appointment.form.errors.datePast;
      } else if (selectedDate.getDay() === 5) {
        // Friday is day 5 in JavaScript (Sunday=0, Friday=5)
        newErrors.date = t.appointment.form.errors.dateFriday;
      }
    }

    // Time Slot
    if (!formData.timeSlot) {
      newErrors.timeSlot = t.appointment.form.errors.timeRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate safe server request without storing medical secrets in client storage
    setTimeout(() => {
      const cleanedData: AppointmentFormData = {
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        serviceId: formData.serviceId,
        dentistId: formData.dentistId,
        date: formData.date,
        timeSlot: formData.timeSlot,
        message: formData.message.trim(),
      };
      setIsSubmitting(false);
      setIsSuccess(true);
      setSuccessBookingInfo(cleanedData);

      // Reset form
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        serviceId: '',
        dentistId: '',
        date: '',
        timeSlot: '',
        message: '',
      });
      setErrors({});
    }, 700);
  };

  const selectedServiceName =
    services.find((s) => s.id === (successBookingInfo?.serviceId || formData.serviceId))?.title || '';
  const selectedDoctorName =
    doctors.find((d) => d.id === (successBookingInfo?.dentistId || formData.dentistId))?.name || 'Premier praticien disponible';

  return (
    <section
      id="rendez-vous"
      aria-label="Formulaire de prise de rendez-vous"
      className="py-20 lg:py-28 bg-gradient-to-b from-[#F6FAFA] to-white relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#064F59] uppercase block mb-3">
            {t.appointment.eyebrow}
          </span>
          <h2
            id="appointment-section-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#064F59] tracking-tight leading-tight mb-4"
          >
            {t.appointment.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
            {t.appointment.support}
          </p>
        </div>

        {/* Success Confirmation Card */}
        {isSuccess ? (
          <div
            id="appointment-success-banner"
            className="bg-[#EAF6F7] border-2 border-[#064F59]/30 rounded-3xl p-8 sm:p-10 text-center shadow-lg animate-in fade-in zoom-in-95 duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[#064F59] text-white flex items-center justify-center mx-auto mb-6 shadow-md">
              <CheckCircle className="w-8 h-8 text-[#EAF6F7]" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#064F59] mb-3">
              Demande transmise avec succès
            </h3>

            <p className="text-sm sm:text-base text-[#334155] max-w-xl mx-auto mb-6 leading-relaxed">
              {t.appointment.form.demoNotice}
            </p>

            {/* Recap Box */}
            {successBookingInfo && (
              <div className="bg-white rounded-2xl p-5 max-w-md mx-auto mb-8 border border-[#064F59]/15 text-left rtl:text-right text-xs sm:text-sm text-[#475569] space-y-2">
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-semibold text-[#064F59]">Patient :</span>
                  <span>{successBookingInfo.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-semibold text-[#064F59]">Téléphone :</span>
                  <span dir="ltr">{successBookingInfo.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-semibold text-[#064F59]">Soin demandé :</span>
                  <span>{selectedServiceName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-100">
                  <span className="font-semibold text-[#064F59]">Praticien :</span>
                  <span>{selectedDoctorName}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-semibold text-[#064F59]">Date & Heure :</span>
                  <span>
                    {successBookingInfo.date} à {successBookingInfo.timeSlot}
                  </span>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsSuccess(false)}
              className="bg-[#064F59] hover:bg-[#083F47] text-white font-semibold text-sm px-8 py-3 rounded-full shadow-md transition-colors cursor-pointer"
            >
              Effectuer une nouvelle demande
            </button>
          </div>
        ) : (
          /* Booking Form */
          <form
            id="appointment-booking-form"
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-3xl p-6 sm:p-10 border border-[#064F59]/15 shadow-xl shadow-[#064F59]/5 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="appointment-fullName"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.fullName} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="appointment-fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: sanitizeText(e.target.value) })
                    }
                    placeholder={t.appointment.form.fullNamePlaceholder}
                    className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 ${
                      errors.fullName
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#CBD5E1] focus:border-[#064F59]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="appointment-phone"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.phone} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="appointment-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: sanitizeText(e.target.value) })
                    }
                    placeholder={t.appointment.form.phonePlaceholder}
                    dir="ltr"
                    className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 ${
                      errors.phone
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#CBD5E1] focus:border-[#064F59]'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="appointment-email"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.email}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3.5 rtl:pl-0 rtl:pr-3.5 flex items-center pointer-events-none text-[#94A3B8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="appointment-email"
                    name="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: sanitizeText(e.target.value) })
                    }
                    placeholder={t.appointment.form.emailPlaceholder}
                    className={`w-full pl-10 rtl:pl-4 rtl:pr-10 pr-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 ${
                      errors.email
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#CBD5E1] focus:border-[#064F59]'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Desired Service */}
              <div>
                <label
                  htmlFor="appointment-service"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.service} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="appointment-service"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={(e) =>
                      setFormData({ ...formData, serviceId: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 ${
                      errors.serviceId
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#CBD5E1] focus:border-[#064F59]'
                    }`}
                  >
                    <option value="">{t.appointment.form.selectService}</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.serviceId && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.serviceId}</span>
                  </p>
                )}
              </div>

              {/* Preferred Dentist */}
              <div>
                <label
                  htmlFor="appointment-dentist"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.dentist}
                </label>
                <div className="relative">
                  <select
                    id="appointment-dentist"
                    name="dentistId"
                    value={formData.dentistId}
                    onChange={(e) =>
                      setFormData({ ...formData, dentistId: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#064F59] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20"
                  >
                    <option value="">{t.appointment.form.selectDentist}</option>
                    {doctors.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name} — {d.specialty}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date */}
              <div>
                <label
                  htmlFor="appointment-date"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.date} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="date"
                    id="appointment-date"
                    name="date"
                    min={getMinDate()}
                    max={getMaxDate()}
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 ${
                      errors.date
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-[#CBD5E1] focus:border-[#064F59]'
                    }`}
                  />
                </div>
                {errors.date && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.date}</span>
                  </p>
                )}
              </div>

              {/* Time Slot */}
              <div className="md:col-span-2">
                <label
                  htmlFor="appointment-timeSlot"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.timeSlot} <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => {
                    const isSelected = formData.timeSlot === slot;
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#064F59] text-white border-[#064F59] shadow-sm'
                            : 'bg-[#F8FAFC] text-[#475569] border-[#CBD5E1] hover:border-[#064F59]/40 hover:bg-[#EAF6F7]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && (
                  <p className="text-xs text-red-600 mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.timeSlot}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label
                  htmlFor="appointment-message"
                  className="block text-xs sm:text-sm font-semibold text-[#064F59] mb-2"
                >
                  {t.appointment.form.message}
                </label>
                <textarea
                  id="appointment-message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: sanitizeText(e.target.value) })
                  }
                  placeholder={t.appointment.form.messagePlaceholder}
                  className="w-full px-4 py-3 rounded-xl text-sm bg-[#F8FAFC] border border-[#CBD5E1] focus:border-[#064F59] transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#064F59]/20 resize-none"
                />
              </div>
            </div>

            {/* Form Footer & Submit Button */}
            <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#064F59]" />
                <span>Données protégées et confidentielles. Aucun paiement en ligne.</span>
              </div>

              <button
                id="submit-appointment-form-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#064F59] hover:bg-[#083F47] text-white font-semibold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-[#064F59]/25 hover:shadow-xl transition-all disabled:opacity-70 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>
                  {isSubmitting
                    ? t.appointment.form.submittingBtn
                    : t.appointment.form.submitBtn}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
