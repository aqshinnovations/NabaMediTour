import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import DoctorCard from "../../../../components/DoctorCard";

import { commonStyles } from "../../../../constants/commonStyles";
import { styles } from "./styles";
import { spacing } from "../../../../styles/spacing";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apiCallUnsecureGet, { apiUrl } from "../../../../utils/api";
import type { Doctor } from "./types";

const DoctorsSection = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  // const displayedDoctors = doctors.slice(0, 4);
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  const fetchDoctors = () => {
    apiCallUnsecureGet<Doctor[]>(
      apiUrl.doctorList,
      (response) => {
        console.log("response:", response);
        if (response?.code === "200") {
          setDoctors(response.list || []);
        } else {
          setDoctors([]);
        }
      },
      (error) => {
        console.error("Doctor List API error:", error);
      },
    );
  };
  // Fetch doctors
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <IMCBox style={styles.section} margin={spacing.none}>
      <IMCTypography variant="h2" style={commonStyles.sectionTitle}>
        {t("section.doctors")}
      </IMCTypography>

      <Grid container spacing={4} sx={styles.grid}>
        {doctors.map((doctor) => (
          <Grid key={doctor.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <DoctorCard
              id={doctor.id}
              image={doctor.image}
              name={isArabic ? doctor.name_ar : doctor.name_en}
              category={
                isArabic ? doctor.category.name_ar : doctor.category.name_en
              }
              experience={
                isArabic ? doctor.experience_ar : doctor.experience_en
              }
              about={isArabic ? doctor.about_ar : doctor.about_en}
              onViewProfile={() => navigate(`/doctors/${doctor.id}`)}
            />
          </Grid>
        ))}
      </Grid>

      {doctors.length > 4 && (
        <IMCBox style={commonStyles.exploreMoreContainer}>
          <Button
            variant="contained"
            onClick={() => navigate("/doctors")}
            sx={commonStyles.exploreMoreButton}
          >
            {t("section.exploreMore")}
          </Button>
        </IMCBox>
      )}
    </IMCBox>
  );
};

export default DoctorsSection;
