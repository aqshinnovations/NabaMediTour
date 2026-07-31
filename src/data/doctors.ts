import DoctorImage from "../assets/dr.jpeg";

export interface DoctorCategory {
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
  qualification_en: string;
  qualification_ar: string;
  specialist_en: string;
  specialist_ar: string;
  image: string;
}

export const doctors = [
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
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
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

    image: DoctorImage,
  },
  {
    id: 2,
    category: {
      id: 2,
      name_en: "Cardiology",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "د. راجنيش مالهوترا",
    about_en:
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
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

    image: DoctorImage,
  },
  {
    id: 3,
    category: {
      id: 2,
      name_en: "Cardiology",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "د. راجنيش مالهوترا",
    about_en:
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
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

    image: DoctorImage,
  },
  {
    id: 4,
    category: {
      id: 2,
      name_en: "Cardiology",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "د. راجنيش مالهوترا",
    about_en:
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
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

    image: DoctorImage,
  },
  {
    id: 5,
    category: {
      id: 2,
      name_en: "Cardiology",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra",
    name_ar: "د. راجنيش مالهوترا",
    about_en:
      "Dr. Rajneesh Malhotra is one of India's most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
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

    image: DoctorImage,
  },
];
