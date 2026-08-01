import DoctorImage1 from "../assets/DR/dr1.jpeg";
import DoctorImage2 from "../assets/DR/2.jpg";
import DoctorImage3 from "../assets/DR/3.avif";
import DoctorImage4 from "../assets/DR/4.avif";
import DoctorImage5 from "../assets/DR/5.jpeg";

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

export interface Doctor {
  id: number;
  category: DoctorCategory;
  name_en: string;
  name_ar: string;
  about_en: string;
  about_ar: string;
  experience_en: string;
  experience_ar: string;
  qualifications: DoctorQualification[];
  specialists: DoctorSpecialist[];
  image: string;
}

export const doctors: Doctor[] = [
  {
    id: 1,
    category: {
      id: 2,
      name_en: "Cardiology",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "د. راجنيش مالهوترا",
    about_en:
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has performed more than 12,000 cardiac surgeries.",
    about_ar: "نبذة عن الطبيب",
    experience_en: "31",
    experience_ar: "31",
    qualifications: [
      {
        id: 1,
        name_en: "MBBS - King's George Medical College",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 2,
        name_en: "MCh - Cardiothoracic Surgery",
        name_ar: "جراحة القلب والصدر",
      },
      {
        id: 3,
        name_en: "Fellowship - Cardiac Surgery",
        name_ar: "زمالة جراحة القلب",
      },
    ],
    specialists: [
      {
        id: 1,
        name_en: "Heart Transplant",
        name_ar: "زراعة القلب",
      },
      {
        id: 2,
        name_en: "Robotic Cardiac Surgery",
        name_ar: "جراحة القلب الروبوتية",
      },
      {
        id: 3,
        name_en: "ECMO",
        name_ar: "إيكمو",
      },
    ],
    image: DoctorImage1,
  },
  {
    id: 2,
    category: {
      id: 1,
      name_en: "Neurology",
      name_ar: "طب الأعصاب",
    },
    name_en: "Dr. Anjali Sharma",
    name_ar: "د. أنجالي شارما",
    about_en:
      "Dr. Anjali Sharma is a renowned neurologist specializing in stroke treatment, epilepsy, and movement disorders with over 20 years of experience.",
    about_ar: "نبذة عن الطبيب",
    experience_en: "20",
    experience_ar: "20",
    qualifications: [
      {
        id: 1,
        name_en: "MBBS - AIIMS Delhi",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 2,
        name_en: "MD - General Medicine",
        name_ar: "دكتوراه الطب",
      },
      {
        id: 3,
        name_en: "DM - Neurology",
        name_ar: "دكتوراه الأعصاب",
      },
    ],
    specialists: [
      {
        id: 1,
        name_en: "Stroke Management",
        name_ar: "علاج السكتة الدماغية",
      },
      {
        id: 2,
        name_en: "Epilepsy",
        name_ar: "الصرع",
      },
      {
        id: 3,
        name_en: "Movement Disorders",
        name_ar: "اضطرابات الحركة",
      },
    ],
    image: DoctorImage2,
  },
  {
    id: 3,
    category: {
      id: 3,
      name_en: "Orthopedics",
      name_ar: "جراحة العظام",
    },
    name_en: "Dr. Vikram Singh",
    name_ar: "د. فيكرام سينغ",
    about_en:
      "Dr. Vikram Singh has extensive experience in joint replacement and sports injury management with over 18 years of clinical practice.",
    about_ar: "نبذة عن الطبيب",
    experience_en: "18",
    experience_ar: "18",
    qualifications: [
      {
        id: 1,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب",
      },
      {
        id: 2,
        name_en: "MS - Orthopedics",
        name_ar: "ماجستير جراحة العظام",
      },
      {
        id: 3,
        name_en: "Fellowship - Joint Replacement",
        name_ar: "زمالة استبدال المفاصل",
      },
    ],
    specialists: [
      {
        id: 1,
        name_en: "Knee Replacement",
        name_ar: "استبدال الركبة",
      },
      {
        id: 2,
        name_en: "Hip Replacement",
        name_ar: "استبدال الورك",
      },
      {
        id: 3,
        name_en: "Sports Injuries",
        name_ar: "إصابات الملاعب",
      },
    ],
    image: DoctorImage3,
  },
  {
    id: 4,
    category: {
      id: 4,
      name_en: "Oncology",
      name_ar: "الأورام",
    },
    name_en: "Dr. Priya Mehta",
    name_ar: "د. بريا ميهتا",
    about_en:
      "Dr. Priya Mehta is a leading medical oncologist with expertise in breast cancer, lung cancer, and immunotherapy.",
    about_ar: "نبذة عن الطبيب",
    experience_en: "22",
    experience_ar: "22",
    qualifications: [
      {
        id: 1,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب",
      },
      {
        id: 2,
        name_en: "MD - Oncology",
        name_ar: "دكتوراه الأورام",
      },
      {
        id: 3,
        name_en: "Fellowship - Medical Oncology",
        name_ar: "زمالة الأورام",
      },
    ],
    specialists: [
      {
        id: 1,
        name_en: "Breast Cancer",
        name_ar: "سرطان الثدي",
      },
      {
        id: 2,
        name_en: "Lung Cancer",
        name_ar: "سرطان الرئة",
      },
      {
        id: 3,
        name_en: "Immunotherapy",
        name_ar: "العلاج المناعي",
      },
    ],
    image: DoctorImage4,
  },
  {
    id: 5,
    category: {
      id: 5,
      name_en: "Gastroenterology",
      name_ar: "الجهاز الهضمي",
    },
    name_en: "Dr. Amit Verma",
    name_ar: "د. أميت فيرما",
    about_en:
      "Dr. Amit Verma is an experienced gastroenterologist specializing in liver diseases, endoscopy, and inflammatory bowel disorders.",
    about_ar: "نبذة عن الطبيب",
    experience_en: "16",
    experience_ar: "16",
    qualifications: [
      {
        id: 1,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب",
      },
      {
        id: 2,
        name_en: "MD - Internal Medicine",
        name_ar: "دكتوراه الطب الباطني",
      },
      {
        id: 3,
        name_en: "DM - Gastroenterology",
        name_ar: "دكتوراه الجهاز الهضمي",
      },
    ],
    specialists: [
      {
        id: 1,
        name_en: "Liver Diseases",
        name_ar: "أمراض الكبد",
      },
      {
        id: 2,
        name_en: "Advanced Endoscopy",
        name_ar: "المنظار المتقدم",
      },
      {
        id: 3,
        name_en: "IBD Treatment",
        name_ar: "علاج التهاب الأمعاء",
      },
    ],
    image: DoctorImage5,
  },
];
