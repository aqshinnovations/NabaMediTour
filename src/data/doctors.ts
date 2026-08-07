import DoctorImage1 from "../assets/DR/dr1.jpeg";
export interface DoctorCategory {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface DoctorQualification {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface DoctorSpecialist {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface DoctorAward {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface DoctorGalleryImage {
  id: number;
  image: string;
}

export interface Doctor {
  id: number;
  category: DoctorCategory;
  name_en: string;
  name_ar: string;
  about_en: string;
  about_ar: string;
  position_en: string;
  position_ar: string;
  experience_en: string;
  experience_ar: string;
  qualifications: DoctorQualification[];
  specialists: DoctorSpecialist[];
  awards: DoctorAward[];

  image: string;
  images: DoctorGalleryImage[];
}

export const doctors: Doctor[] = [
  {
    id: 16,
    category: {
      id: 3,
      name_en: "Neurology",
      name_ar: "طب الأعصاب",
    },
    name_en: "Dr. Anil Sharma",
    name_ar: "د. أنيل شارما",
    about_en:
      "Dr. Anil Sharma is an experienced neurologist specializing in the diagnosis and treatment of complex neurological disorders, stroke management, epilepsy, and movement disorders.",
    about_ar:
      "الدكتور أنيل شارما طبيب أعصاب ذو خبرة، متخصص في تشخيص وعلاج اضطرابات الجهاز العصبي المعقدة والسكتات الدماغية والصرع واضطرابات الحركة.",
    position_en: "Senior Consultant Neurologist",
    position_ar: "استشاري أول في طب الأعصاب",
    experience_en: "18+ years",
    experience_ar: "أكثر من 18 عامًا",
    qualifications: [
      {
        id: 9,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 10,
        name_en: "MD - General Medicine",
        name_ar: "دكتوراه في الطب - الطب العام",
      },
      {
        id: 11,
        name_en: "DM - Neurology",
        name_ar: "دكتوراه في طب الأعصاب",
      },
    ],
    specialists: [
      {
        id: 12,
        name_en: "Neurology",
        name_ar: "طب الأعصاب",
      },
      {
        id: 13,
        name_en: "Stroke Management",
        name_ar: "علاج السكتات الدماغية",
      },
      {
        id: 14,
        name_en: "Epilepsy",
        name_ar: "الصرع",
      },
      {
        id: 15,
        name_en: "Movement Disorders",
        name_ar: "اضطرابات الحركة",
      },
    ],
    awards: [
      {
        id: 4,
        name_en: "Excellence in Neurology Award",
        name_ar: "جائزة التميز في طب الأعصاب",
      },
    ],
    image: DoctorImage1,
    images: [
      {
        id: 1,
        image: DoctorImage1,
      },
      {
        id: 2,
        image: DoctorImage1,
      },
    ],
  },

  {
    id: 17,
    category: {
      id: 4,
      name_en: "Orthopedics",
      name_ar: "جراحة العظام",
    },
    name_en: "Dr. Priya Mehta",
    name_ar: "د. بريا ميهتا",
    about_en:
      "Dr. Priya Mehta is a skilled orthopedic surgeon with extensive experience in joint replacement, sports injuries, arthroscopy, and minimally invasive orthopedic procedures.",
    about_ar:
      "الدكتورة بريا ميهتا جراحة عظام متمرسة تتمتع بخبرة واسعة في استبدال المفاصل وإصابات الملاعب وتنظير المفاصل وإجراءات جراحة العظام طفيفة التوغل.",
    position_en: "Consultant Orthopedic Surgeon",
    position_ar: "استشاري جراحة العظام",
    experience_en: "15+ years",
    experience_ar: "أكثر من 15 عامًا",
    qualifications: [
      {
        id: 12,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 13,
        name_en: "MS - Orthopedics",
        name_ar: "ماجستير جراحة العظام",
      },
      {
        id: 14,
        name_en: "Fellowship in Joint Replacement",
        name_ar: "زمالة في استبدال المفاصل",
      },
    ],
    specialists: [
      {
        id: 16,
        name_en: "Joint Replacement",
        name_ar: "استبدال المفاصل",
      },
      {
        id: 17,
        name_en: "Sports Medicine",
        name_ar: "الطب الرياضي",
      },
      {
        id: 18,
        name_en: "Arthroscopy",
        name_ar: "تنظير المفاصل",
      },
      {
        id: 19,
        name_en: "Knee Surgery",
        name_ar: "جراحة الركبة",
      },
    ],
    awards: [
      {
        id: 5,
        name_en: "Best Orthopedic Surgeon Award",
        name_ar: "جائزة أفضل جراح عظام",
      },
    ],
    image: DoctorImage1,
    images: [],
  },

  {
    id: 18,
    category: {
      id: 5,
      name_en: "Oncology",
      name_ar: "علم الأورام",
    },
    name_en: "Dr. Arjun Kapoor",
    name_ar: "د. أرجون كابور",
    about_en:
      "Dr. Arjun Kapoor is a dedicated medical oncologist specializing in comprehensive cancer care, chemotherapy, targeted therapy, immunotherapy, and personalized treatment planning.",
    about_ar:
      "الدكتور أرجون كابور طبيب متخصص في علاج الأورام، ويقدم رعاية شاملة لمرضى السرطان تشمل العلاج الكيميائي والعلاج الموجه والعلاج المناعي وخطط العلاج الشخصية.",
    position_en: "Senior Consultant Medical Oncologist",
    position_ar: "استشاري أول في طب الأورام",
    experience_en: "20+ years",
    experience_ar: "أكثر من 20 عامًا",
    qualifications: [
      {
        id: 15,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 16,
        name_en: "MD - Internal Medicine",
        name_ar: "دكتوراه في الطب الباطني",
      },
      {
        id: 17,
        name_en: "DM - Medical Oncology",
        name_ar: "دكتوراه في طب الأورام",
      },
    ],
    specialists: [
      {
        id: 20,
        name_en: "Medical Oncology",
        name_ar: "طب الأورام",
      },
      {
        id: 21,
        name_en: "Chemotherapy",
        name_ar: "العلاج الكيميائي",
      },
      {
        id: 22,
        name_en: "Immunotherapy",
        name_ar: "العلاج المناعي",
      },
      {
        id: 23,
        name_en: "Targeted Therapy",
        name_ar: "العلاج الموجه",
      },
    ],
    awards: [
      {
        id: 6,
        name_en: "Outstanding Cancer Care Award",
        name_ar: "جائزة التميز في رعاية مرضى السرطان",
      },
    ],
    image: DoctorImage1,
    images: [],
  },
];
