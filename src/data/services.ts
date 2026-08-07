import ServiceImage from "../assets/services/services.jpg";

export interface Service {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  created_at: string;
  updated_at: string;
}

export const services: Service[] = [
  {
    id: 1,
    name_en: "Hospital Selection",
    name_ar: "اختيار المستشفى",
    description_en:
      "We help you choose the right hospital based on your medical condition, treatment requirements, and personal preferences.",
    description_ar:
      "نساعدك في اختيار المستشفى المناسب بناءً على حالتك الطبية ومتطلبات العلاج وتفضيلاتك الشخصية.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 2,
    name_en: "Doctor Consultation",
    name_ar: "استشارة الطبيب",
    description_en:
      "Connect with experienced and highly qualified doctors for expert medical consultations and treatment recommendations.",
    description_ar:
      "تواصل مع أطباء ذوي خبرة ومؤهلات عالية للحصول على استشارات طبية متخصصة وتوصيات علاجية.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 3,
    name_en: "Medical Treatment Planning",
    name_ar: "تخطيط العلاج الطبي",
    description_en:
      "Personalized treatment planning with detailed guidance to help patients understand their treatment options and medical journey.",
    description_ar:
      "تخطيط علاجي مخصص مع إرشادات تفصيلية لمساعدة المرضى على فهم خيارات العلاج ورحلتهم الطبية.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 4,
    name_en: "Medical Visa Assistance",
    name_ar: "المساعدة في الحصول على التأشيرة الطبية",
    description_en:
      "Complete guidance and support for obtaining a medical visa, including documentation and application assistance.",
    description_ar:
      "إرشادات ودعم كامل للحصول على التأشيرة الطبية، بما في ذلك تجهيز المستندات والمساعدة في تقديم الطلب.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 5,
    name_en: "Airport Pickup & Transfer",
    name_ar: "الاستقبال من المطار والنقل",
    description_en:
      "Convenient airport pickup and transportation services to ensure a smooth and comfortable arrival at your destination.",
    description_ar:
      "خدمات استقبال ونقل مريحة من المطار لضمان وصول سلس ومريح إلى وجهتك.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 6,
    name_en: "Accommodation Assistance",
    name_ar: "المساعدة في الإقامة",
    description_en:
      "We assist patients and their families in finding comfortable and convenient accommodation close to the hospital.",
    description_ar:
      "نساعد المرضى وعائلاتهم في العثور على أماكن إقامة مريحة ومناسبة بالقرب من المستشفى.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 7,
    name_en: "Patient & Attendant Support",
    name_ar: "دعم المرضى والمرافقين",
    description_en:
      "Dedicated support for patients and their attendants throughout their medical travel journey, from arrival to treatment completion.",
    description_ar:
      "دعم مخصص للمرضى ومرافقيهم طوال رحلة العلاج، من الوصول وحتى إتمام العلاج.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
  {
    id: 8,
    name_en: "Post-Treatment Follow-up",
    name_ar: "المتابعة بعد العلاج",
    description_en:
      "Continued assistance and follow-up after treatment to help patients manage their recovery and future medical needs.",
    description_ar:
      "مساعدة ومتابعة مستمرة بعد العلاج لمساعدة المرضى في التعافي وتلبية احتياجاتهم الطبية المستقبلية.",
    image: ServiceImage,
    created_at: "2026-08-03 17:45:52",
    updated_at: "2026-08-03 17:45:52",
  },
];
