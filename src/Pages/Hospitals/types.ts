export interface HospitalSpecialization {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface HospitalFacility {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface HospitalDoctor {
  id: number;
  name_en: string;
  name_ar: string;
  specialist_en: string;
  specialist_ar: string;
  image: string;
}

export interface HospitalProcedure {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
}

export interface Hospital {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  location_en: string;
  location_ar: string;
  image: string;
  specializations: HospitalSpecialization[];
  facilities: HospitalFacility[];
  doctors: HospitalDoctor[];
  procedures: HospitalProcedure[];
  created_at: string;
  updated_at: string;
}
export interface HospitalListResponse {
  code: string;
  list: Hospital[];
}
