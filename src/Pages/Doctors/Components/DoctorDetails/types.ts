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

export interface DoctorImage {
  id: number;
  image: string;
}

export interface Doctor {
  id: number;
  name_en: string;
  name_ar: string;
  position_en: string;
  position_ar: string;
  experience_en: string;
  experience_ar: string;
  about_en: string;
  about_ar: string;
  image: string;
  qualifications: DoctorQualification[];
  specialists: DoctorSpecialist[];
  awards: DoctorAward[];
  images: DoctorImage[];
}
