import axios from "axios";
import { apiUrl } from "../../../../utils/api";

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

export const getDoctors = async (categoryId?: number) => {
  const id = categoryId || 2;

  const response = await axios.get(
    `${apiUrl.baseUrl}doctors/list/?category_id=${id}`,
  );
  console.log(`${apiUrl.baseUrl}doctors/list/?category_id=${id}`);
  console.log(response.data);

  return (response.data.list ?? []).map((doctor: any) => ({
    ...doctor,
    image: doctor.image,
  }));
};
