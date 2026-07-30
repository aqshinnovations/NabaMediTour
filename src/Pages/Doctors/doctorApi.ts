import axios from "axios";
import { apiUrl } from "../../utils/api";

export interface Category {
  id: number;
  name: string;
}

export interface Doctor {
  id: number;
  doctor_name: string;
  qualification: string;
  experience: string;
  image: string;
  category: Category;
}

export const getDoctors = async (categoryId: number) => {
  const response = await axios.get(
    `${apiUrl}doctors/doctors/?category_id=${categoryId}`,
  );

  return response.data.data.map((doctor: any) => ({
    ...doctor,
    image: doctor.image,
  }));
};
