interface DoctorCategory {
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
  position_en: string;
  position_ar: string;
  image: string;
  created_at: string;
  updated_at: string;
}
