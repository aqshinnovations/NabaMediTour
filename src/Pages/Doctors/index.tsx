import { useState } from "react";
import { Box, Chip, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import DoctorCard from "../../components/DoctorCard";
import PageHero from "../../components/PageHero";

import { doctors } from "../../data/doctors";
import { specializations } from "../../data/specializations";
import { styles } from "./styles";
import ContactCTA from "../../components/ContactCTA";

const Doctors = () => {
  const [selected, setSelected] = useState("All");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const filteredDoctors =
    selected === "All"
      ? doctors
      : doctors.filter((doctor) =>
          doctor.specialists.some(
            (specialist) => specialist.name_en === selected,
          ),
        );

  return (
    <>
      <PageHero
        title={t("doctors.title")}
        description={t("doctors.description")}
      />

      <Box sx={styles.filterSection}>
        {specializations.map((item) => (
          <Chip
            key={item}
            label={item}
            onClick={() => setSelected(item)}
            color={selected === item ? "primary" : "default"}
            sx={styles.chip}
          />
        ))}
      </Box>

      <Box sx={styles.doctorsSection}>
        <Grid container spacing={4} sx={styles.grid}>
          {filteredDoctors.map((doctor) => (
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
      </Box>
      <ContactCTA />
    </>
  );
};

export default Doctors;
