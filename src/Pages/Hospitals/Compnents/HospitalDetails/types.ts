export interface HospitalFacility {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface HospitalSpecialization {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface HospitalProcedure {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
}

export interface HospitalDoctor {
  id: number;
  name_en: string;
  name_ar: string;
  specialist_en: string;
  specialist_ar: string;
  image: string;
}

export interface Hospital {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  facilities: HospitalFacility[];
  specializations: HospitalSpecialization[];
  procedures: HospitalProcedure[];
  doctors: HospitalDoctor[];
}
