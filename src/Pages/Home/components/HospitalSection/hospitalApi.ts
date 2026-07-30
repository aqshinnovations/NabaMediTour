import { apiUrl, apiCallUnsecureGet } from "../../../../utils/api";

export interface Specialization {
  id: number;
  name_en: string;
  name_ar: string;
}

export interface Hospital {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string | null;
  created_at: string;
  updated_at: string;
  specializations: Specialization[];
}

export const getHospitals = (
  success: (data: Hospital[]) => void,
  error: (message: string) => void,
) => {
  apiCallUnsecureGet<Hospital[]>(
    `${apiUrl.baseUrl}hospitals/list/`,
    (res) => {
      success(res.list ?? []);
    },
    error,
  );
};
