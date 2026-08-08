import { useEffect, useState } from "react";
import { Box, Chip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DoctorCard from "../../components/DoctorCard";
import PageHero from "../../components/PageHero";
import ContactCTA from "../../components/ContactCTA";
import Loader from "../../components/Loader";
import NoDataFound from "../../components/NoDataFound";

import { styles } from "./styles";
import apiCallUnsecureGet, { apiUrl } from "../../utils/api";
import type { ApiResponse, Doctor, DoctorCategory } from "./types";

const Doctors = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const isArabic = i18n.language === "ar";

  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [categories, setCategories] = useState<DoctorCategory[]>([]);
  const [doctorList, setDoctorList] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);

  // Fetch doctor categories
  useEffect(() => {
    const fetchCategories = () => {
      apiCallUnsecureGet(
        apiUrl.doctorCategory,
        (response: ApiResponse<DoctorCategory>) => {
          setCategories(response.list ?? []);
        },
        (error) => {
          console.error("Doctor Category API error:", error);
          setCategories([]);
        },
      );
    };

    fetchCategories();
  }, []);

  // Fetch doctors
  useEffect(() => {
    const fetchDoctors = () => {
      const url =
        selectedCategory === null
          ? apiUrl.doctorList
          : `${apiUrl.doctorList}?category_id=${selectedCategory}`;

      setLoading(true);
      console.log("data", url);

      apiCallUnsecureGet(
        url,
        (response: ApiResponse<Doctor>) => {
          setDoctorList(response.list ?? []);
          setLoading(false);
        },
        (error) => {
          console.error("Doctor List API error:", error);
          setDoctorList([]);
          setLoading(false);
        },
      );
    };

    fetchDoctors();
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: number) => {
    setSelectedCategory((currentCategory) =>
      currentCategory === categoryId ? null : categoryId,
    );
  };

  const handleViewProfile = (doctorId: number) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <>
      <PageHero
        title={t("doctors.title")}
        description={t("doctors.description")}
      />

      {/* Categories */}
      <Box sx={styles.filterSection}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Chip
              key={category.id}
              label={isArabic ? category.name_ar : category.name_en}
              onClick={() => handleCategoryChange(category.id)}
              color={selectedCategory === category.id ? "primary" : "default"}
              sx={styles.chip}
            />
          ))
        ) : (
          <NoDataFound message={t("doctors.noCategory")} />
        )}
      </Box>

      {/* Doctors */}
      <Box sx={styles.doctorsSection}>
        {loading ? (
          <Loader />
        ) : doctorList.length === 0 ? (
          <NoDataFound message={t("doctors.noDoctor")} />
        ) : (
          <Grid container spacing={4} sx={styles.grid}>
            {doctorList.map((doctor) => (
              <Grid
                key={doctor.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                }}
              >
                <DoctorCard
                  id={doctor.id}
                  image={doctor.image}
                  name={isArabic ? doctor.name_ar : doctor.name_en}
                  category={isArabic ? doctor.position_ar : doctor.position_en}
                  experience={
                    isArabic ? doctor.experience_ar : doctor.experience_en
                  }
                  about={isArabic ? doctor.about_ar : doctor.about_en}
                  onViewProfile={() => handleViewProfile(doctor.id)}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <ContactCTA />
    </>
  );
};

export default Doctors;
