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
    id: 15,
    category: {
      id: 2,
      name_en: "category 1",
      name_ar: "رعاية القلب",
    },
    name_en: "Dr. Rajneesh Malhotra121",
    name_ar: "rahul",
    about_en:
      "Dr. Rajneesh Malhotra is one of India’s most experienced cardiothoracic and vascular surgeons with over 31 years of dedicated practice. He has led more than 12,000 heart surgeries, with particular excellence in heart transplantation, ECMO/LVAD management, and robotic cardiac surgery.",
    about_ar: "i am dr",
    position_ar: "1",
    position_en: "2",
    experience_en: "8",
    experience_ar: "8",
    qualifications: [
      {
        id: 5,
        name_en: "MCh - Cardiothoracic Surgery",
        name_ar: "جراحة القلب والصدر",
      },
      {
        id: 6,
        name_en: "MBBS",
        name_ar: "بكالوريوس الطب والجراحة",
      },
      {
        id: 7,
        name_en: "MD - General Medicine",
        name_ar: "دكتوراه في الطب - الطب العام",
      },
      {
        id: 8,
        name_en: "MS - General Surgery",
        name_ar: "ماجستير الجراحة العامة",
      },
    ],
    specialists: [
      {
        id: 7,
        name_en: "Robotic Cardiac Surgery",
        name_ar: "جراحة القلب الروبوتية",
      },
      {
        id: 8,
        name_en: "Cardiology",
        name_ar: "أمراض القلب",
      },
      {
        id: 9,
        name_en: "Cardiothoracic Surgery",
        name_ar: "جراحة القلب والصدر",
      },
      {
        id: 10,
        name_en: "Interventional Cardiology",
        name_ar: "القسطرة القلبية",
      },
      {
        id: 11,
        name_en: "Pediatric Cardiology",
        name_ar: "أمراض قلب الأطفال",
      },
    ],
    awards: [
      {
        id: 3,
        name_en: "Noble AWards",
        name_ar: "جراحة القلب الروبوتية",
      },
    ],
    image: DoctorImage1,
    images: [
      {
        id: 2,
        image:
          "http://localhost:8000/media/doctor_images/Testimony_BBXSPug.jpeg",
      },
      {
        id: 3,
        image:
          "http://localhost:8000/media/doctor_images/Testimony_30VpAJw.jpeg",
      },
      {
        id: 4,
        image:
          "http://localhost:8000/media/doctor_images/Testimony_MrngqgH.jpeg",
      },
      {
        id: 5,
        image:
          "http://localhost:8000/media/doctor_images/Testimony_uEItIPp.jpeg",
      },
      {
        id: 6,
        image:
          "http://localhost:8000/media/doctor_images/Testimony_ksbSiku.jpeg",
      },
    ],
  },
];
