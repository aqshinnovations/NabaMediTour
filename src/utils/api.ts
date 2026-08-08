import axios from "axios";
import type { AxiosResponse, AxiosError } from "axios";

const baseUrl: string = "http://localhost:8000";
// const baseUrl: string = "https://www.indocscare.com:8000/";

const imageBaseUrl: string = "http://localhost:8000";
// const imageBaseUrl: string = "https://www.indocscare.com:8000";

const apiUrl = {
  baseUrl: `${baseUrl}`,
  imageBaseUrl: `${imageBaseUrl}`,
  doctorCategory: `${baseUrl}/doctors/category/`,
  doctorList: `${baseUrl}/doctors/list/`,
  doctorDetails: `${baseUrl}/doctors/DoctorsDetails/`,
  hospitalList: `${baseUrl}/hospitals/list/`,

  hospitalsDetails: `${baseUrl}/hospitals/HospitalsDetails/`,

  blogList: `${baseUrl}/blogs/list/`,
  blogDetails: `${baseUrl}/blogs/blog-data/`,
};

export { baseUrl, apiUrl };

interface ApiResponse<T> {
  code: string;
  msg?: string;
  data?: T;
  [key: string]: unknown;
}

// ✅ Define callback types (avoid any)
type ResponseCallback<T> = (data: ApiResponse<T>) => void;
type ErrorCallback = (error: string | object) => void;

// ------------------
// POST with multipart form
// ------------------
export function apiCallPostWithForm<T>(
  api: string,
  form: FormData,
  response: ResponseCallback<T>,
  error: ErrorCallback,
): void {
  console.log("uploadFile ", api);

  axios
    .post<ApiResponse<T>>(api, form, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res: AxiosResponse<ApiResponse<T>>) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === "200") {
        response(result);
      } else {
        error(result.msg ?? "Unknown error");
      }
    })
    .catch((err: AxiosError<ApiResponse<T>>) => {
      if (err.response) {
        error(err.response.data?.msg ?? "Server error");
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

// ------------------
// POST with FormData
// ------------------
export function apiCallPostFormData<T>(
  api: string,
  formData: FormData,
  response: ResponseCallback<T>,
  error: ErrorCallback,
): void {
  console.log("apiCallPostFormData ", api);

  axios
    .post<ApiResponse<T>>(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res: AxiosResponse<ApiResponse<T>>) => {
      console.warn("result", res);
      const result = res.data;
      if (result.code === "200") {
        response(result);
      } else {
        error(result.msg ?? "Unknown error");
      }
    })
    .catch((err: AxiosError<ApiResponse<T>>) => {
      if (err.response) {
        error(err.response.data?.msg ?? "Server error");
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        console.log("Error", err.message);
        error(`Error ${err.message}`);
      }
      console.log(err.config);
    });
}

// ------------------
// POST without auth (Unsecure API)
// ------------------
export function apiPostUnsecure<T>(
  api: string,
  data: Record<string, unknown>,
  response: ResponseCallback<T>,
  error: ErrorCallback,
): void {
  console.log("apiPostUnsecure ", api, "data ", data);

  axios
    .post<ApiResponse<T>>(api, data)
    .then((res: AxiosResponse<ApiResponse<T>>) => {
      console.warn("result", res);
      const result = res.data;

      if (result.code === "200") {
        response(result);
      } else {
        error(result.msg ?? "Unknown error");
      }
    })
    .catch((err: AxiosError<ApiResponse<T>>) => {
      if (err.response) {
        console.log(err.response);
        error(err.response.data?.msg ?? "Server error");
      } else if (err.request) {
        console.log(err.request);
        error(err.request);
      } else {
        error(`Error ${err.message}`);
      }
    });
}

// ------------------
// GET without auth
// ------------------
interface ApiResponse<T> {
  code: string;
  msg?: string;
  list?: T;
}

export function apiCallUnsecureGet<T>(
  api: string,
  response: (res: ApiResponse<T>) => void,
  error: (err: string) => void,
): void {
  axios
    .get<ApiResponse<T>>(api)
    .then((res: AxiosResponse<ApiResponse<T>>) => {
      const result = res.data;
      if (result.code === "200") {
        response(result); // ✅ works fine
      } else {
        error(result.msg ?? "Unknown error");
      }
    })
    .catch((err: AxiosError<ApiResponse<T>>) => {
      if (err.response) {
        error(err.response.data?.msg ?? "Server error");
      } else if (err.request) {
        error(err.request);
      } else {
        error(`Error ${err.message}`);
      }
    });
}

export default apiCallUnsecureGet;
