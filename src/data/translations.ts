import { ServiceItem, DentistProfile, TestimonialItem } from '../types';
import {
  drYacineBenaliImg,
  drSarahBensalemImg,
  drAmineHaddadImg,
  drInesMezianeImg,
  drRayaneBelkacemImg,
  drLinaKherbacheImg,
} from '../assets/images';

export const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      services: 'Services',
      team: 'Notre équipe',
      testimonials: 'Témoignages',
      contact: 'Contact',
      bookAppointment: 'Prendre rendez-vous',
    },
    hero: {
      eyebrow: 'JASMILE CLINIQUE DENTAIRE',
      headline: 'Un sourire sain,\npour une vie plus belle',
      support:
        'Chez JASMILE, nous mettons notre expertise et notre passion au service de votre santé bucco-dentaire. Des soins modernes, personnalisés et réalisés dans un cadre rassurant.',
      ctaPrimary: 'Prendre rendez-vous',
      ctaSecondary: 'Découvrir nos services',
      badgePriority: 'Votre sourire, notre priorité',
      trust: {
        tech: 'Technologie moderne',
        team: 'Équipe expérimentée',
        custom: 'Soins personnalisés',
      },
    },
    services: {
      eyebrow: 'NOS SERVICES',
      heading: 'Des soins complets pour un sourire en bonne santé',
      support:
        'Nous vous proposons une gamme complète de soins dentaires adaptés à tous les âges et à tous les besoins.',
      viewAll: 'Découvrir tous nos services',
      learnMore: 'En savoir plus',
      closeModal: 'Fermer',
      durationLabel: 'Durée moyenne',
      benefitsLabel: 'Bénéfices clés',
      bookThisService: 'Réserver ce soin',
    },
    about: {
      eyebrow: 'À PROPOS DE JASMILE',
      heading: 'Une approche moderne de la dentisterie',
      lead:
        'JASMILE est une clinique dentaire moderne dédiée à la santé, au confort et à l’esthétique du sourire. Notre approche associe expertise médicale, technologies modernes et accompagnement personnalisé pour offrir à chaque patient une expérience sereine et professionnelle.',
      description:
        'Installée au cœur d’Hydra à Alger, notre clinique combine une architecture lumineuse et apaisante avec les équipements les plus récents de la dentisterie numérique : radiologie 3D, empreintes optiques et stérilisation de classe hospitalière.',
      values: [
        {
          title: 'Expertise',
          desc: 'Une équipe multidisciplinaire de praticiens formés aux protocoles cliniques internationaux les plus exigeants.',
        },
        {
          title: 'Technologie',
          desc: 'Diagnostic haute précision avec imagerie cône-beam 3D, microscopie et planification implantaire guidée.',
        },
        {
          title: 'Bienveillance',
          desc: 'Une écoute humaine et attentive, des protocoles sans douleur et un environnement relaxant sans anxiété.',
        },
      ],
      stats: [
        { value: '6', label: 'Praticiens spécialistes' },
        { value: '100%', label: 'Stérilisation certifiée' },
        { value: '8+', label: 'Disciplines dentaires' },
        { value: 'Hydra', label: 'Alger — Accès aisé' },
      ],
    },
    team: {
      eyebrow: 'NOTRE ÉQUIPE',
      heading: '6 dentistes, une même passion : votre sourire',
      support:
        'Une équipe de professionnels qualifiés et expérimentés, à l’écoute de vos besoins, pour des soins de qualité dans un cadre moderne et bienveillant.',
      viewProfile: 'Voir le profil',
      experienceLabel: 'Expérience',
      educationLabel: 'Formation',
      availabilityLabel: 'Jours de consultation',
      bookWithDoctor: 'Prendre rendez-vous avec ce praticien',
      disclaimer: 'Profils de démonstration pour la clinique JASMILE.',
    },
    testimonials: {
      eyebrow: 'AVIS & TÉMOIGNAGES',
      heading: 'Ce que disent nos patients',
      support:
        'La satisfaction et le confort de nos patients sont au cœur de notre engagement quotidien.',
    },
    appointment: {
      eyebrow: 'PRISE DE RENDEZ-VOUS',
      headline: 'Prenez soin de votre sourire.',
      support:
        'Réservez votre rendez-vous avec notre équipe et bénéficiez d’un accompagnement adapté à vos besoins.',
      form: {
        fullName: 'Nom complet',
        fullNamePlaceholder: 'Ex. Karim Benabdelkader',
        phone: 'Numéro de téléphone',
        phonePlaceholder: '+213 550 00 00 00',
        email: 'Adresse e-mail',
        emailPlaceholder: 'votre.email@domaine.dz',
        service: 'Service souhaité',
        selectService: 'Sélectionnez une discipline...',
        dentist: 'Dentiste souhaité (optionnel)',
        selectDentist: 'Premier praticien disponible',
        date: 'Date souhaitée',
        timeSlot: 'Heure souhaitée',
        selectTime: 'Choisir un créneau...',
        message: 'Message ou motif de consultation',
        messagePlaceholder: 'Précisez vos symptômes, vos souhaits ou toute information utile...',
        submitBtn: 'Demander un rendez-vous',
        submittingBtn: 'Envoi de votre demande...',
        demoNotice:
          'Votre demande de rendez-vous a bien été enregistrée. Notre équipe vous contactera sous 24h ouvrées pour confirmer votre créneau.',
        errors: {
          fullNameRequired: 'Veuillez saisir votre nom complet.',
          phoneRequired: 'Un numéro de téléphone valide est nécessaire pour la confirmation.',
          phoneInvalid: 'Format de téléphone invalide (+213 ou 10 chiffres).',
          emailInvalid: 'Veuillez renseigner une adresse email valide.',
          serviceRequired: 'Veuillez sélectionner le service dentaire requis.',
          dateRequired: 'Veuillez choisir une date valide.',
          datePast: 'La date ne peut pas être dans le passé.',
          dateFriday: 'La clinique est fermée le vendredi. Veuillez choisir un autre jour (Samedi à Jeudi).',
          timeRequired: 'Veuillez choisir un créneau horaire.',
        },
      },
    },
    contact: {
      eyebrow: 'OÙ NOUS TROUVER ?',
      heading: 'Notre clinique est située au cœur d’Hydra, Alger',
      addressTitle: 'Adresse',
      addressValue: '18, Rue des Frères Oukil\nHydra, Alger — Algérie',
      hoursTitle: 'Horaires',
      hoursValue: 'Samedi – Jeudi : 08h30 – 18h30\nVendredi : Fermé',
      contactBoxTitle: 'CONTACTEZ-NOUS',
      phone: '+213 560 12 34 56',
      email: 'contact@jassmile.dz',
      facebook: 'Facebook : JASMILE Clinique Dentaire',
      instagram: 'Instagram : @jasmile.clinique',
      bookCta: 'Prendre rendez-vous',
      mapDirections: 'Voir l’itinéraire',
      landmarks: 'À 3 minutes de la place d’Hydra, parking sécurisé à proximité immédiate.',
    },
    footer: {
      slogan: 'Votre sourire, notre priorité.',
      description:
        'Clinique dentaire moderne dédiée à la santé, la beauté et le bien-être de votre sourire à Hydra, Alger.',
      quickLinks: 'Navigation rapide',
      legalLinks: 'Informations légales',
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: 'Mentions légales',
      cookiesPolicy: 'Gestion des cookies',
      copyright: '© 2026 JASMILE. Tous droits réservés.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      team: 'Our Team',
      testimonials: 'Testimonials',
      contact: 'Contact',
      bookAppointment: 'Book an Appointment',
    },
    hero: {
      eyebrow: 'JASMILE MODERN DENTAL CLINIC',
      headline: 'A healthy smile,\nfor a brighter life',
      support:
        'At JASMILE, we combine medical excellence and compassionate care to preserve your oral health. Modern, personalized treatments in a soothing setting.',
      ctaPrimary: 'Book an Appointment',
      ctaSecondary: 'Explore Our Services',
      badgePriority: 'Your smile, our priority',
      trust: {
        tech: 'Modern Technology',
        team: 'Expert Medical Team',
        custom: 'Personalized Care',
      },
    },
    services: {
      eyebrow: 'OUR SERVICES',
      heading: 'Comprehensive care for a healthy, radiant smile',
      support:
        'We provide a complete suite of specialized dental treatments tailored to every age and dental need.',
      viewAll: 'Discover All Services',
      learnMore: 'Learn More',
      closeModal: 'Close',
      durationLabel: 'Average Duration',
      benefitsLabel: 'Key Benefits',
      bookThisService: 'Book This Service',
    },
    about: {
      eyebrow: 'ABOUT JASMILE',
      heading: 'A Modern Approach to Dentistry',
      lead:
        'JASMILE is a modern dental clinic dedicated to the health, comfort, and aesthetics of your smile. Our philosophy unites clinical precision, state-of-the-art dental technology, and tailored patient attention.',
      description:
        'Located in the heart of Hydra, Algiers, our clinic offers a serene, light-filled environment equipped with leading digital dentistry systems: 3D CBCT imaging, optical scanning, and hospital-grade sterilization.',
      values: [
        {
          title: 'Expertise',
          desc: 'A multidisciplinary team of doctors adhering to strict international clinical guidelines.',
        },
        {
          title: 'Technology',
          desc: 'High-precision diagnostics with 3D cone-beam radiography, dental microscopy, and computer-guided implantology.',
        },
        {
          title: 'Compassion',
          desc: 'Gentle patient listening, pain-free techniques, and an anxiety-free soothing atmosphere.',
        },
      ],
      stats: [
        { value: '6', label: 'Specialist Doctors' },
        { value: '100%', label: 'Hospital-Grade Sterilization' },
        { value: '8+', label: 'Dental Disciplines' },
        { value: 'Hydra', label: 'Algiers — Easy Access' },
      ],
    },
    team: {
      eyebrow: 'OUR TEAM',
      heading: '6 Dentists, One Shared Passion: Your Smile',
      support:
        'A qualified, caring team of experienced specialists dedicated to delivering top-tier dental treatments in a warm, welcoming clinic.',
      viewProfile: 'View Profile',
      experienceLabel: 'Experience',
      educationLabel: 'Education',
      availabilityLabel: 'Consultation Days',
      bookWithDoctor: 'Book with this Doctor',
      disclaimer: 'Demonstration profiles for the JASMILE dental clinic.',
    },
    testimonials: {
      eyebrow: 'PATIENT REVIEWS',
      heading: 'What Our Patients Say',
      support:
        'Patient comfort and genuine satisfaction are the foundation of everything we do every single day.',
    },
    appointment: {
      eyebrow: 'SCHEDULE A VISIT',
      headline: 'Take care of your smile.',
      support:
        'Book your consultation with our specialist team and experience personalized dental care tailored to your exact needs.',
      form: {
        fullName: 'Full Name',
        fullNamePlaceholder: 'e.g. Karim Benabdelkader',
        phone: 'Phone Number',
        phonePlaceholder: '+213 550 00 00 00',
        email: 'Email Address',
        emailPlaceholder: 'your.email@domain.dz',
        service: 'Desired Service',
        selectService: 'Select a treatment...',
        dentist: 'Preferred Dentist (optional)',
        selectDentist: 'First available doctor',
        date: 'Preferred Date',
        timeSlot: 'Preferred Time Slot',
        selectTime: 'Select a time slot...',
        message: 'Message / Reason for visit',
        messagePlaceholder: 'Describe your symptoms or specific goals...',
        submitBtn: 'Request an Appointment',
        submittingBtn: 'Submitting your request...',
        demoNotice:
          'Your appointment request has been successfully recorded. Our staff will contact you within 24 business hours to confirm your slot.',
        errors: {
          fullNameRequired: 'Please enter your full name.',
          phoneRequired: 'A valid phone number is required for booking confirmation.',
          phoneInvalid: 'Invalid phone format (e.g. +213 or 10 digits).',
          emailInvalid: 'Please enter a valid email address.',
          serviceRequired: 'Please select the dental service required.',
          dateRequired: 'Please select a valid date.',
          datePast: 'The date cannot be in the past.',
          dateFriday: 'The clinic is closed on Fridays. Please choose Saturday through Thursday.',
          timeRequired: 'Please select a preferred time slot.',
        },
      },
    },
    contact: {
      eyebrow: 'WHERE TO FIND US',
      heading: 'Our clinic is located in the heart of Hydra, Algiers',
      addressTitle: 'Address',
      addressValue: '18, Rue des Frères Oukil\nHydra, Algiers — Algeria',
      hoursTitle: 'Opening Hours',
      hoursValue: 'Saturday – Thursday: 08:30 AM – 06:30 PM\nFriday: Closed',
      contactBoxTitle: 'CONTACT US',
      phone: '+213 560 12 34 56',
      email: 'contact@jassmile.dz',
      facebook: 'Facebook: JASMILE Clinique Dentaire',
      instagram: 'Instagram: @jasmile.clinique',
      bookCta: 'Book an Appointment',
      mapDirections: 'Get Directions',
      landmarks: '3 minutes from Hydra central square, with secure dedicated parking nearby.',
    },
    footer: {
      slogan: 'Your smile, our priority.',
      description:
        'A high-end dental clinic committed to oral wellness, smile aesthetics, and patient comfort in Hydra, Algiers.',
      quickLinks: 'Quick Navigation',
      legalLinks: 'Legal Information',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Legal Mentions',
      cookiesPolicy: 'Cookie Settings',
      copyright: '© 2026 JASMILE. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن العيادة',
      services: 'خدماتنا',
      team: 'فريق العمل',
      testimonials: 'آراء المرضى',
      contact: 'اتصل بنا',
      bookAppointment: 'حجز موعد',
    },
    hero: {
      eyebrow: 'عيادة جاسمـايل لطب الأسنان الحديث',
      headline: 'ابتسامة صحية،\nلحياة أكثر إشراقاً',
      support:
        'في جاسمـايل، نضع خبرتنا وشغفنا في خدمة صحة فمكم وأسنانكم. عناية طبية حديثة ومخصصة في بيئة هادئة ومريحة تبعث على الاطمئنان.',
      ctaPrimary: 'حجز موعد',
      ctaSecondary: 'استكشاف خدماتنا',
      badgePriority: 'ابتسامتكم، أولويتنا',
      trust: {
        tech: 'تكنولوجيا حديثة',
        team: 'فريق من الخبراء',
        custom: 'رعاية مخصصة',
      },
    },
    services: {
      eyebrow: 'خدماتنا الطبية',
      heading: 'رعاية شاملة لابتسامة صحية تدوم طويلاً',
      support:
        'نقدم باقة متكاملة من العلاجات السنية المتقدمة الملائمة لجميع الأعمار وكافة الاحتياجات.',
      viewAll: 'عرض جميع الخدمات',
      learnMore: 'المزيد من التفاصيل',
      closeModal: 'إغلاق',
      durationLabel: 'المدة التقديرية',
      benefitsLabel: 'أبرز المزايا',
      bookThisService: 'حجز هذا العلاج',
    },
    about: {
      eyebrow: 'عن عيادة جاسمـايل',
      heading: 'رؤية عصرية لطب الأسنان المتقدم',
      lead:
        'عيادة جاسمـايل هي وجهة طبية متطورة مكرسة لصحة وجمال وراحة ابتسامتكم. يقوم نهجنا على الدمج بين الكفاءة الطبية العالية، أحدث التجهيزات الرقمية، والمعاملة الإنسانية الراقية لضمان تجربة علاجية مريحة وخالية من الألم.',
      description:
        'تقع عيادتنا في قلب حي حيدرة الراقي بالجزائر العاصمة، وتتميز بتصميم مريح وأحدث تجهيزات طب الأسنان الرقمي: تصوير ثلاثي الأبعاد بالأشعة المقطعية، مسح بصري فوري، وأعلى معايير التعقيم الاستشفائي.',
      values: [
        {
          title: 'الخبرة والكفاءة',
          desc: 'أطباء أسنان متخصصون ومدربون وفقاً لأرقى البروتوكولات الطبية الدولية.',
        },
        {
          title: 'التكنولوجيا الرقمية',
          desc: 'تشخيص فائق الدقة بفضل الأشعة المقطعية ثلاثية الأبعاد والميكروسكوب الجراحي والتخطيط الرقمي للزرع.',
        },
        {
          title: 'الرعاية الإنسانية',
          desc: 'إصغاء تام لاحتياجات المريض، علاجات سلسة ومريحة، وأجواء هادئة تزيل أي قلق.',
        },
      ],
      stats: [
        { value: '6', label: 'أطباء متخصصون' },
        { value: '100%', label: 'تعقيم بمعايير المستشفيات' },
        { value: '8+', label: 'تخصصات دقيقة' },
        { value: 'حيدرة', label: 'الجزائر العاصمة — موقع متميز' },
      ],
    },
    team: {
      eyebrow: 'فريقنا الطبي',
      heading: '6 أطباء، وشغف واحد: ابتسامتكم',
      support:
        'نخبة من خيرة الأطباء المؤهلين وذوي الخبرة الطويلة، نسخر معرفتنا لتقديم أفضل رعاية في بيئة عصرية ومطمئنة.',
      viewProfile: 'عرض الملف الشخصي',
      experienceLabel: 'الخبرة المهنية',
      educationLabel: 'المؤهلات العلمية',
      availabilityLabel: 'أيام الاستشارة',
      bookWithDoctor: 'طلب موعد مع هذا الطبيب',
      disclaimer: 'ملفات تعريف نموذجية لعيادة جاسمـايل.',
    },
    testimonials: {
      eyebrow: 'شهادات المرضى',
      heading: 'ما يقوله مراجعونا الأعزاء',
      support: 'راحة وثقة مرضانا هي الدافع الأكبر لفريقنا كل يوم.',
    },
    appointment: {
      eyebrow: 'حجز المواعيد',
      headline: 'اعتني بابتسامتك اليوم.',
      support: 'احجز موعدك بسهولة مع فريقنا الطبي المتميز واستفد من تشخيص شامل ورعاية مخصصة لاحتياجاتك.',
      form: {
        fullName: 'الاسم الكامل',
        fullNamePlaceholder: 'مثال: كريم بن عبد القادر',
        phone: 'رقم الهاتف',
        phonePlaceholder: '+213 550 00 00 00',
        email: 'البريد الإلكتروني',
        emailPlaceholder: 'name@domain.dz',
        service: 'الخدمة المطلوبة',
        selectService: 'اختر نوع العلاج المطلوب...',
        dentist: 'الطبيب المفضل (اختياري)',
        selectDentist: 'أول طبيب متاح',
        date: 'التاريخ المفضل',
        timeSlot: 'التوقيت المفضل',
        selectTime: 'اختر الفترة الزمنية...',
        message: 'رسالة أو سبب الاستشارة',
        messagePlaceholder: 'يرجى كتابة أي تفاصيل أو أعراض ترغب بمشاركتها معنا...',
        submitBtn: 'إرسال طلب الموعد',
        submittingBtn: 'جاري إرسال الطلب...',
        demoNotice:
          'تم تسجيل طلب موعدكم بنجاح. سيتواصل معكم فريق الاستقبال لتأكيد الحجز النهائي خلال 24 ساعة.',
        errors: {
          fullNameRequired: 'يرجى إدخال الاسم الكامل.',
          phoneRequired: 'يرجى إدخال رقم هاتف صالح لتأكيد الموعد.',
          phoneInvalid: 'رقم الهاتف غير صالح (+213 أو 10 أرقام).',
          emailInvalid: 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
          serviceRequired: 'يرجى تحديد الخدمة المطلوبة.',
          dateRequired: 'يرجى اختيار تاريخ الموعد.',
          datePast: 'لا يمكن اختيار تاريخ في الماضي.',
          dateFriday: 'العيادة مغلقة يوم الجمعة. يرجى اختيار يوم آخر (السبت إلى الخميس).',
          timeRequired: 'يرجى اختيار التوقيت المناسب.',
        },
      },
    },
    contact: {
      eyebrow: 'موقع العيادة',
      heading: 'عيادتنا في قلب حيدرة، الجزائر العاصمة',
      addressTitle: 'العنوان',
      addressValue: '18، شارع الإخوة أوكيل\nحيدرة، الجزائر العاصمة — الجزائر',
      hoursTitle: 'أوقات العمل',
      hoursValue: 'السبت – الخميس : 08:30 – 18:30\nالجمعة : مغلق',
      contactBoxTitle: 'معلومات الاتصال',
      phone: '+213 560 12 34 56',
      email: 'contact@jassmile.dz',
      facebook: 'فيسبوك: JASMILE Clinique Dentaire',
      instagram: 'إنستغرام: @jasmile.clinique',
      bookCta: 'حجز موعد الآن',
      mapDirections: 'عرض المسار في الخريطة',
      landmarks: 'على بُعد 3 دقائق من ساحة حيدرة، مع توفر مواقف سيارات مؤمنة.',
    },
    footer: {
      slogan: 'ابتسامتكم، أولويتنا.',
      description: 'عيادة متخصصة في طب الأسنان الحديث، وجمال الابتسامة وصحة الفم في حيدرة، الجزائر.',
      quickLinks: 'روابط سريعة',
      legalLinks: 'معلومات قانونية',
      privacyPolicy: 'سياسة الخصوصية',
      termsOfService: 'الإشعار القانوني',
      cookiesPolicy: 'إدارة ملفات تعريف الارتباط',
      copyright: '© 2026 JASMILE. جميع الحقوق محفوظة.',
    },
  },
};

export const servicesData: Record<'fr' | 'en' | 'ar', ServiceItem[]> = {
  fr: [
    {
      id: 'consultation',
      title: 'Consultation dentaire',
      description:
        'Un bilan complet pour évaluer votre santé bucco-dentaire et proposer un traitement adapté.',
      longDescription:
        'Examen approfondi des dents, des gencives et des muqueuses à l’aide d’un bilan radiographique panoramique et d’une caméra intra-orale HD. Nous établissons un diagnostic précis et un plan de traitement clair et transparent.',
      benefits: [
        'Dépistage précoce des caries et lésions',
        'Bilan radiologique numérique 2D/3D',
        'Plan de traitement personnalisé et devis clair',
      ],
      duration: '30 - 45 min',
      iconType: 'consultation',
    },
    {
      id: 'implant',
      title: 'Implantologie dentaire',
      description:
        'Remplacement des dents manquantes par des implants stables et durables.',
      longDescription:
        'Pose d’implants dentaires en titane de grade médical supérieur guidée par ordinateur. Restaurez une mastication naturelle et un sourire harmonieux avec une intégration osseuse optimale et durable.',
      benefits: [
        'Solution fixe et pérenne',
        'Préservation de l’os maxillaire',
        'Planification numérique guidée 3D',
      ],
      duration: '45 - 90 min',
      iconType: 'implant',
    },
    {
      id: 'ortho',
      title: 'Orthodontie',
      description:
        'Correction de l’alignement des dents et de l’occlusion pour tous les âges.',
      longDescription:
        'Traitements orthodontiques pour enfants, adolescents et adultes : aligneurs transparents invisibles (gouttières) ou bagues esthétiques en céramique pour un alignement dentaire parfait et une occlusion équilibrée.',
      benefits: [
        'Aligneurs thermoformés invisibles',
        'Correction fonctionnelle et esthétique',
        'Suivi numérique et modélisation prévisionnelle',
      ],
      duration: '30 min (suivi régulier)',
      iconType: 'ortho',
    },
    {
      id: 'aesthetic',
      title: 'Esthétique dentaire',
      description:
        'Blanchiment, facettes et restaurations esthétiques pour un sourire harmonieux.',
      longDescription:
        'Conception de sourire sur mesure (Digital Smile Design) : éclaircissement dentaire au fauteuil par lampe LED médicale, pose de facettes en céramique ultra-fines feldspathiques et restaurations invisibles.',
      benefits: [
        'Facettes en céramique sur-mesure',
        'Blanchiment médical haute sécurité',
        'Harmonisation esthétique globale du sourire',
      ],
      duration: '60 - 90 min',
      iconType: 'aesthetic',
    },
    {
      id: 'care',
      title: 'Soins dentaires',
      description:
        'Traitement des caries, douleurs et autres problèmes pour préserver vos dents.',
      longDescription:
        'Soins conservateurs modernes sous anesthésie douce sans douleur : obturations esthétiques en composite biomimétique, inlays/onlays en céramique et détartrage ultrasonique haute précision.',
      benefits: [
        'Préservation maximale de la dent naturelle',
        'Matériaux biomimétiques haute résistance',
        'Détartrage et polissage doux',
      ],
      duration: '30 - 60 min',
      iconType: 'care',
    },
    {
      id: 'endo',
      title: 'Endodontie',
      description:
        'Traitement des infections et inflammations à l’intérieur de la dent.',
      longDescription:
        'Traitement canalaire sous microscope opératoire pour désinfecter et sceller hermétiquement la pulpe dentaire infectée. Permet de sauver des dents compromises qui auraient autrement dû être extraites.',
      benefits: [
        'Sauvegarde de la racine dentaire naturelle',
        'Précision micro-chirurgicale sous microscope',
        'Traitement indolore sous anesthésie ciblée',
      ],
      duration: '45 - 75 min',
      iconType: 'endo',
    },
    {
      id: 'perio',
      title: 'Parodontologie',
      description:
        'Prévention et traitement des problèmes de gencives et des tissus de soutien.',
      longDescription:
        'Prise en charge spécialisée de la gingivite et de la parodontite : surfaçage radiculaire sous irrigation antiseptique, assainissement parodontal et greffes de gencive pour stopper le déchaussement des dents.',
      benefits: [
        'Arrêt du saignement et de l’inflammation gingivale',
        'Stabilisation du tissu osseux péri-dentaire',
        'Conseils d’hygiène personnalisés',
      ],
      duration: '40 - 60 min',
      iconType: 'perio',
    },
    {
      id: 'pediatric',
      title: 'Dentisterie pédiatrique',
      description:
        'Des soins adaptés aux enfants dans un environnement rassurant et bienveillant.',
      longDescription:
        'Approche pédagogique douce pour les plus jeunes : prévention du brossage, scellement des sillons, soins des dents de lait et gestion bienveillante de l’anxiété pour faire de la visite chez le dentiste une expérience positive.',
      benefits: [
        'Approche ludique et dédramatisante',
        'Prévention carieuse et vernis fluoré',
        'Accompagnement dès le plus jeune âge',
      ],
      duration: '25 - 40 min',
      iconType: 'pediatric',
    },
  ],
  en: [
    {
      id: 'consultation',
      title: 'Dental Consultation',
      description:
        'A comprehensive assessment to evaluate your oral health and recommend appropriate care.',
      longDescription:
        'In-depth examination of teeth, gums, and oral tissues using 2D/3D digital radiography and HD intraoral imaging. We provide an exact diagnosis and a transparent treatment plan.',
      benefits: [
        'Early detection of cavities and lesions',
        'Digital 2D/3D low-radiation imaging',
        'Customized treatment plan and clear pricing',
      ],
      duration: '30 - 45 min',
      iconType: 'consultation',
    },
    {
      id: 'implant',
      title: 'Dental Implantology',
      description:
        'Replacing missing teeth with secure, biocompatible, and durable dental implants.',
      longDescription:
        'Surgical placement of premium titanium dental implants guided by 3D digital planning. Restore natural chewing capability and facial aesthetics with durable bone integration.',
      benefits: [
        'Long-lasting fixed solution',
        'Preservation of jawbone structure',
        'Computer-guided 3D placement',
      ],
      duration: '45 - 90 min',
      iconType: 'implant',
    },
    {
      id: 'ortho',
      title: 'Orthodontics',
      description:
        'Correcting tooth alignment and bite discrepancies for children, teens, and adults.',
      longDescription:
        'Comprehensive orthodontic treatments including invisible clear aligners and discreet ceramic brackets for optimal aesthetic alignment and balanced occlusal function.',
      benefits: [
        'Virtually invisible clear aligners',
        'Functional and aesthetic correction',
        'Digital simulation of final results',
      ],
      duration: '30 min (regular follow-up)',
      iconType: 'ortho',
    },
    {
      id: 'aesthetic',
      title: 'Cosmetic Dentistry',
      description:
        'Teeth whitening, porcelain veneers, and artistic dental restorations.',
      longDescription:
        'Tailored smile makeover (Digital Smile Design): in-office LED teeth whitening, ultra-thin handcrafted porcelain veneers, and composite artistry.',
      benefits: [
        'Custom ceramic veneers',
        'Safe professional whitening',
        'Complete smile transformation',
      ],
      duration: '60 - 90 min',
      iconType: 'aesthetic',
    },
    {
      id: 'care',
      title: 'General Dental Care',
      description:
        'Treating cavities, toothache, and routine issues to protect your natural smile.',
      longDescription:
        'Gentle conservative treatments under painless local anesthesia: tooth-colored biomimetic fillings, ceramic onlays, and ultrasonic prophylaxis cleaning.',
      benefits: [
        'Maximum preservation of natural tooth tissue',
        'High-strength tooth-colored composite',
        'Painless ultrasonic scaling',
      ],
      duration: '30 - 60 min',
      iconType: 'care',
    },
    {
      id: 'endo',
      title: 'Endodontics (Root Canal)',
      description:
        'Treating deep infections and pulp inflammation to preserve natural teeth.',
      longDescription:
        'Microscope-assisted root canal therapy to disinfect and hermetically seal contaminated canals. Saves severely damaged teeth from extraction.',
      benefits: [
        'Preserves your natural dental root',
        'Operating microscope precision',
        'Painless procedure under localized anesthesia',
      ],
      duration: '45 - 75 min',
      iconType: 'endo',
    },
    {
      id: 'perio',
      title: 'Periodontology',
      description:
        'Preventing and treating gum disease and bone support disorders.',
      longDescription:
        'Dedicated care for gingivitis and periodontitis: deep ultrasonic scaling, root planing, and gum tissue therapies to arrest periodontal bone loss.',
      benefits: [
        'Stops bleeding and tissue inflammation',
        'Stabilizes supporting alveolar bone',
        'Personalized oral hygiene coaching',
      ],
      duration: '40 - 60 min',
      iconType: 'perio',
    },
    {
      id: 'pediatric',
      title: 'Pediatric Dentistry',
      description:
        'Gentle dental care designed for children in a reassuring, friendly setting.',
      longDescription:
        'Pedagogical and reassuring dental visits for children: gentle cleaning, cavity prevention, fissure sealants, and positive reinforcement.',
      benefits: [
        'Playful and anxiety-free approach',
        'Fissure sealants and fluoride protection',
        'Positive habits established early',
      ],
      duration: '25 - 40 min',
      iconType: 'pediatric',
    },
  ],
  ar: [
    {
      id: 'consultation',
      title: 'استشارة وفحص الأسنان',
      description:
        'فحص شامل لتقييم صحة الفم والأسنان وتحديد خطة العلاج المناسبة بدقة.',
      longDescription:
        'فحص دقيق للأسنان واللثة باستخدام الأشعة الرقمية وكاميرا التصوير الفموي عالي الدقة لوضع تشخيص متكامل وخطة علاج واضحة وشفافة.',
      benefits: [
        'الكشف المبكر عن التسوس ومشاكل اللثة',
        'تصوير إشعاعي رقمي ثنائي وثلاثي الأبعاد',
        'خطة علاج مخصصة ومفصلة',
      ],
      duration: '30 - 45 دقيقة',
      iconType: 'consultation',
    },
    {
      id: 'implant',
      title: 'زراعة الأسنان',
      description:
        'تعويض الأسنان المفقودة بزرعات طبية عالية الثبات والديمومة.',
      longDescription:
        'زراعة دقيقة لغرسات التيتانيوم الطبية المعتمدة بتوجيه رقمي ثلاثي الأبعاد لاستعادة المظهر الطبيعي ووظيفة المضغ المثالية.',
      benefits: [
        'حل دائم وثابت يعوض السن الطبيعي',
        'الحفاظ على كثافة عظام الفك',
        'تخطيط جراحي رقمي موجه بالكمبيوتر',
      ],
      duration: '45 - 90 دقيقة',
      iconType: 'implant',
    },
    {
      id: 'ortho',
      title: 'تقويم الأسنان',
      description:
        'تصحيح تراصف الأسنان وتطابق الفكين للأطفال والمراهقين والبالغين.',
      longDescription:
        'خيارات تقويمية متطورة تشمل القوالب الشفافة غير المرئية (المحاذاة الشفافة) والأقواس الخزفية التجميلية لابتسامة متناسقة ووظيفة فموية متوازنة.',
      benefits: [
        'قوالب تقويم شفافة ومريحة',
        'تصحيح وظيفي وجمالي متكامل',
        'متابعة ومحاكاة رقمية للنتائج النهائية',
      ],
      duration: '30 دقيقة (جلسة دورية)',
      iconType: 'ortho',
    },
    {
      id: 'aesthetic',
      title: 'تجميل الأسنان',
      description:
        'تبييض الأسنان، العدسات الخزفية (الفينير)، والترميمات التجميلية المتطورة.',
      longDescription:
        'تصميم الابتسامة الرقمي المخصص: جلسات تبييض متطورة بالإضاءة الباردة الطبية، وعدسات خزفية فائقة الرقة لتناغم طبيعي ساحر.',
      benefits: [
        'عدسات فينير خزفية مصممة خصيصاً',
        'تبييض أسنان طبي آمن وفوري',
        'تحسين شامل لتناسق الابتسامة ولونها',
      ],
      duration: '60 - 90 دقيقة',
      iconType: 'aesthetic',
    },
    {
      id: 'care',
      title: 'علاج الأسنان والحشوات',
      description:
        'علاج التسوس والآلام وحماية البنية الطبيعية للأسنان.',
      longDescription:
        'علاجات محافظة ودقيقة بدون ألم: حشوات كمبوزيت تجميلية مطابقة للون السن، وترميمات السيراميك الدقيقة، وإزالة الجير بالموجات فوق الصوتية.',
      benefits: [
        'الحفاظ الأقصى على السن الطبيعي',
        'مواد تجميلية فائقة الصلابة والتناغم',
        'تنظيف وتلميع فائق النعومة',
      ],
      duration: '30 - 60 دقيقة',
      iconType: 'care',
    },
    {
      id: 'endo',
      title: 'علاج الجذور والعصب',
      description:
        'علاج الالتهابات والتعفنات داخل السن للحفاظ على السن الطبيعي.',
      longDescription:
        'تنظيف وتعقيم وحشو القنوات العصبية تحت الميكروسكوب الجراحي الدقيق لمنع خلع السن والحفاظ على بقائه في الفم لسنوات طويلة.',
      benefits: [
        'إنقاذ السن وجذوره من القلع',
        'دقة جراحية متناهية بالميكروسكوب',
        'علاج مريح وخالٍ تماماً من الألم',
      ],
      duration: '45 - 75 دقيقة',
      iconType: 'endo',
    },
    {
      id: 'perio',
      title: 'علاج وجراحة اللثة',
      description:
        'الوقاية وعلاج مشاكل اللثة والأنسجة الداعمة للأسنان.',
      longDescription:
        'علاج متخصص لالتهاب ونزيف اللثة وانحسارها: تنظيف الجيوب اللثوية العميق، معالجة الجذور بالمطهرات، والحفاظ على ثبات الأسنان.',
      benefits: [
        'إيقاف نزيف والتهاب اللثة',
        'تثبيت ودعم عظام وأنسجة السن',
        'إرشادات وقائية مخصصة للعناية المنزلية',
      ],
      duration: '40 - 60 دقيقة',
      iconType: 'perio',
    },
    {
      id: 'pediatric',
      title: 'طب أسنان الأطفال',
      description:
        'عناية لطيفة متخصصة للأطفال في جو مريح ومحبب يزيل الخوف.',
      longDescription:
        'فحوصات ووقاية بأسلوب تربوي مبسط: تنظيف خفيف، تطبيق الفلورايد، سد شقوق الأسنان الطاحنة لحمايتها من التسوس، وتثقيف الطفل حول العناية بأسنانه.',
      benefits: [
        'أسلوب مرح ولطيف يبدد القلق',
        'حماية وقائية وتطبيق الفلورايد',
        'بناء علاقة إيجابية مع طبيب الأسنان',
      ],
      duration: '25 - 40 دقيقة',
      iconType: 'pediatric',
    },
  ],
};

export const dentistsData: Record<'fr' | 'en' | 'ar', DentistProfile[]> = {
  fr: [
    {
      id: 'yacine-benali',
      name: 'Dr. Yacine Benali',
      specialty: 'Implantologie & chirurgie buccale',
      bio: 'Spécialiste de la réhabilitation implantaire complexe et de la chirurgie orale guidée avec plus de 12 ans de pratique clinique.',
      experience: '12+ ans de pratique',
      education: 'Docteur en Chirurgie Dentaire, D.U. Implantologie Orale & Chirurgie Avancée',
      image: drYacineBenaliImg,
      availableDays: 'Dimanche, Mardi, Mercredi',
    },
    {
      id: 'sarah-bensalem',
      name: 'Dr. Sarah Bensalem',
      specialty: 'Esthétique dentaire & facettes',
      bio: 'Passionnée par l’art du sourire, experte en facettes pelliculaires céramiques et conception numérique du sourire (DSD).',
      experience: '10 ans de pratique',
      education: 'Master en Dentisterie Esthétique & Prothétique Biomimétique',
      image: drSarahBensalemImg,
      availableDays: 'Samedi, Lundi, Mercredi',
    },
    {
      id: 'amine-haddad',
      name: 'Dr. Amine Haddad',
      specialty: 'Orthodontie & aligneurs',
      bio: 'Praticien certifié en aligneurs invisibles et orthodontie de l’enfant et de l’adulte, dédié à l’harmonie dento-faciale.',
      experience: '9 ans de pratique',
      education: 'C.E.S. Orthodontie et Orthopédie Dento-Faciale',
      image: drAmineHaddadImg,
      availableDays: 'Samedi, Dimanche, Jeudi',
    },
    {
      id: 'ines-meziane',
      name: 'Dr. Inès Meziane',
      specialty: 'Dentisterie pédiatrique & soins généraux',
      bio: 'Douceur et pédagogie au service des enfants et des soins conservateurs pour toute la famille dans un climat détendu.',
      experience: '8 ans de pratique',
      education: 'Diplôme d’Études Spécialisées en Pédodontie & Prévention',
      image: drInesMezianeImg,
      availableDays: 'Dimanche, Lundi, Mercredi, Jeudi',
    },
    {
      id: 'rayane-belkacem',
      name: 'Dr. Rayane Belkacem',
      specialty: 'Endodontie & dentisterie restauratrice',
      bio: 'Expert en traitements et retraitements canalaires sous microscope opératoire pour sauver les dents naturelles.',
      experience: '11 ans de pratique',
      education: 'D.U. Endodontie Clinique & Microchirurgie Endodontique',
      image: drRayaneBelkacemImg,
      availableDays: 'Samedi, Mardi, Mercredi',
    },
    {
      id: 'lina-kherbache',
      name: 'Dr. Lina Kherbache',
      specialty: 'Parodontologie & hygiène bucco-dentaire',
      bio: 'Dédiée à la santé des tissus parodontaux et à la régénération tissulaire pour pérenniser les sourires de nos patients.',
      experience: '7 ans de pratique',
      education: 'Master en Biologie Parodontale & Thérapies Régénératives',
      image: drLinaKherbacheImg,
      availableDays: 'Lundi, Mardi, Jeudi',
    },
  ],
  en: [
    {
      id: 'yacine-benali',
      name: 'Dr. Yacine Benali',
      specialty: 'Implantology & Oral Surgery',
      bio: 'Specialist in complex dental implant rehabilitation and computer-guided oral surgery with over 12 years of clinical practice.',
      experience: '12+ years of experience',
      education: 'Doctor of Dental Surgery, Diploma in Advanced Oral Implantology',
      image: drYacineBenaliImg,
      availableDays: 'Sunday, Tuesday, Wednesday',
    },
    {
      id: 'sarah-bensalem',
      name: 'Dr. Sarah Bensalem',
      specialty: 'Cosmetic Dentistry & Veneers',
      bio: 'Dedicated to the art of smile design, specialized in ultra-thin ceramic veneers and Digital Smile Design (DSD).',
      experience: '10 years of experience',
      education: 'Master in Aesthetic Dentistry & Biomimetic Restorations',
      image: drSarahBensalemImg,
      availableDays: 'Saturday, Monday, Wednesday',
    },
    {
      id: 'amine-haddad',
      name: 'Dr. Amine Haddad',
      specialty: 'Orthodontics & Clear Aligners',
      bio: 'Certified practitioner in invisible clear aligners and comprehensive facial-dental balance for all ages.',
      experience: '9 years of experience',
      education: 'Postgraduate Certificate in Orthodontics and Dentofacial Orthopedics',
      image: drAmineHaddadImg,
      availableDays: 'Saturday, Sunday, Thursday',
    },
    {
      id: 'ines-meziane',
      name: 'Dr. Inès Meziane',
      specialty: 'Pediatric & General Dentistry',
      bio: 'Known for her gentle, reassuring approach with children and preventive dental care for the whole family.',
      experience: '8 years of experience',
      education: 'Specialized Degree in Pediatric Dentistry & Prevention',
      image: drInesMezianeImg,
      availableDays: 'Sunday, Monday, Wednesday, Thursday',
    },
    {
      id: 'rayane-belkacem',
      name: 'Dr. Rayane Belkacem',
      specialty: 'Endodontics & Restorative Care',
      bio: 'Expert in microscope-assisted root canal procedures focused on saving natural teeth from extraction.',
      experience: '11 years of experience',
      education: 'Clinical Endodontics & Micro-endodontics Diploma',
      image: drRayaneBelkacemImg,
      availableDays: 'Saturday, Tuesday, Wednesday',
    },
    {
      id: 'lina-kherbache',
      name: 'Dr. Lina Kherbache',
      specialty: 'Periodontology & Oral Hygiene',
      bio: 'Focused on periodontal health, gum therapy, and tissue regeneration to secure long-lasting dental foundations.',
      experience: '7 years of experience',
      education: 'Master in Periodontal Biology & Regenerative Therapies',
      image: drLinaKherbacheImg,
      availableDays: 'Monday, Tuesday, Thursday',
    },
  ],
  ar: [
    {
      id: 'yacine-benali',
      name: 'د. ياسين بن علي',
      specialty: 'زراعة الأسنان وجراحة الفم',
      bio: 'أخصائي زراعة الأسنان المعقدة وجراحة الفم الرقمية الموجهة بخبرة سريرية تتجاوز 12 عاماً.',
      experience: 'أكثر من 12 عاماً من الخبرة',
      education: 'دكتور في جراحة وطب الأسنان، دبلوم في زراعة الأسنان والجراحة المتقدمة',
      image: drYacineBenaliImg,
      availableDays: 'الأحد، الثلاثاء، الأربعاء',
    },
    {
      id: 'sarah-bensalem',
      name: 'د. سارة بن سالم',
      specialty: 'تجميل الأسنان وعدسات الفينير',
      bio: 'متخصصة في هندسة وتجميل الابتسامة، وتركيب عدسات الفينير الخزفية فائقة الدقة والتصميم الرقمي للابتسامة.',
      experience: '10 سنوات من الخبرة',
      education: 'ماجستير في طب الأسنان التجميلي والتعويضات الحيوية',
      image: drSarahBensalemImg,
      availableDays: 'السبت، الاثنين، الأربعاء',
    },
    {
      id: 'amine-haddad',
      name: 'د. أمين حداد',
      specialty: 'تقويم الأسنان والقوالب الشفافة',
      bio: 'ممارس معتمد في قوالب التقويم الشفافة وتقويم الأسنان للأطفال والبالغين لتحقيق التوازن الوظيفي والجمالي.',
      experience: '9 سنوات من الخبرة',
      education: 'شهادة الدراسات المتخصصة في تقويم الأسنان والفكين',
      image: drAmineHaddadImg,
      availableDays: 'السبت، الأحد، الخميس',
    },
    {
      id: 'ines-meziane',
      name: 'د. إيناس مزيان',
      specialty: 'طب أسنان الأطفال والعناية العامة',
      bio: 'تتميز بالمعاملة اللطيفة والأسلوب الهادئ مع الأطفال لتوفير عناية وقائية وعلاجية مريحة للعائلة بأكملها.',
      experience: '8 سنوات من الخبرة',
      education: 'دبلوم تخصصي في طب أسنان الأطفال والوقاية',
      image: drInesMezianeImg,
      availableDays: 'الأحد، الاثنين، الأربعاء، الخميس',
    },
    {
      id: 'rayane-belkacem',
      name: 'د. ريان بلقاسم',
      specialty: 'علاج الجذور والترميم السني',
      bio: 'خبير في معالجة القنوات العصبية الدقيقة تحت المجهر الجراحي لإنقاذ الأسنان الطبيعية وحمايتها.',
      experience: '11 عاماً من الخبرة',
      education: 'دبلوم جامعي في علاج الجذور السريري والجراحة المجهرية',
      image: drRayaneBelkacemImg,
      availableDays: 'السبت، الثلاثاء، الأربعاء',
    },
    {
      id: 'lina-kherbache',
      name: 'د. لينا خرباش',
      specialty: 'أمراض وجراحة اللثة وصحة الفم',
      bio: 'مكرسة لصحة الأنسجة اللثوية وتجديد الأنسجة الداعمة لضمان ثبات وصحة الأسنان على المدى الطويل.',
      experience: '7 سنوات من الخبرة',
      education: 'ماجستير في بيولوجيا اللثة والعلاجات التجديدية',
      image: drLinaKherbacheImg,
      availableDays: 'الاثنين، الثلاثاء، الخميس',
    },
  ],
};

export const testimonialsData: Record<'fr' | 'en' | 'ar', TestimonialItem[]> = {
  fr: [
    {
      id: '1',
      name: 'Amina Mansouri',
      treatment: 'Facettes céramiques & DSD',
      rating: 5,
      comment:
        'Le résultat dépasse toutes mes attentes ! L’équipe du Dr. Bensalem a été d’une écoute rare et le cabinet est d’une propreté exemplaire.',
      date: 'Février 2026',
      location: 'Hydra, Alger',
    },
    {
      id: '2',
      name: 'Sofiane Cherif',
      treatment: 'Implantologie guidée 3D',
      rating: 5,
      comment:
        'J’avais une appréhension immense des soins dentaires. Le Dr. Benali a su me rassurer, l’intervention a été totalement indolore et le suivi est impeccable.',
      date: 'Janvier 2026',
      location: 'El Biar, Alger',
    },
    {
      id: '3',
      name: 'Nadia Kaci',
      treatment: 'Aligneurs orthodontiques',
      rating: 5,
      comment:
        'Le traitement par aligneurs s’est déroulé avec une simplicité remarquable. Une clinique moderne, ponctuelle et très professionnelle.',
      date: 'Décembre 2025',
      location: 'Kouba, Alger',
    },
  ],
  en: [
    {
      id: '1',
      name: 'Amina Mansouri',
      treatment: 'Porcelain Veneers & DSD',
      rating: 5,
      comment:
        'The results exceeded all my expectations! Dr. Bensalem and the entire team were attentive, gentle, and the clinic is immaculately clean.',
      date: 'February 2026',
      location: 'Hydra, Algiers',
    },
    {
      id: '2',
      name: 'Sofiane Cherif',
      treatment: '3D Guided Dental Implant',
      rating: 5,
      comment:
        'I had severe dental anxiety. Dr. Benali was reassuring, the procedure was completely painless, and the post-operative care was exemplary.',
      date: 'January 2026',
      location: 'El Biar, Algiers',
    },
    {
      id: '3',
      name: 'Nadia Kaci',
      treatment: 'Clear Orthodontic Aligners',
      rating: 5,
      comment:
        'My clear aligner treatment went smoothly with incredible precision. A truly modern, punctual, and high-standard clinic.',
      date: 'December 2025',
      location: 'Kouba, Algiers',
    },
  ],
  ar: [
    {
      id: '1',
      name: 'أمينة منصوري',
      treatment: 'عدسات الفينير وتجميل الابتسامة',
      rating: 5,
      comment:
        'النتيجة فاقت كل توقعاتي! د. سارة بن سالم وفريق العيادة يتميزون بالاحترافية العالية والنظافة الفائقة والتعامل الإنساني الراقي.',
      date: 'فيفري 2026',
      location: 'حيدرة، الجزائر العاصمة',
    },
    {
      id: '2',
      name: 'سفيان شريف',
      treatment: 'زراعة الأسنان الموجهة',
      rating: 5,
      comment:
        'كنت متخوفاً جداً من علاج الأسنان، لكن د. ياسين بن علي بدد خوفي تماماً. العملية مرت بدون أي ألم والمتابعة الطبية كانت ممتازة.',
      date: 'جانفي 2026',
      location: 'الأبيار، الجزائر العاصمة',
    },
    {
      id: '3',
      name: 'نادية قاسي',
      treatment: 'التقويم الشفاف',
      rating: 5,
      comment:
        'تجربة رائعة مع القوالب الشفافة. عيادة راقية، انضباط تام في المواعيد وتجهيزات طبية متطورة للغاية.',
      date: 'ديسمبر 2025',
      location: 'القبة، الجزائر العاصمة',
    },
  ],
};
