import HospitalCard from "../../components/HospitalCard";
import PageHero from "../../components/PageHero";
import { Grid } from "@mui/material";

// import { hospitals } from "../../data/hospitals";
import { styles } from "./styles";
import { useTranslation } from "react-i18next";
import ContactCTA from "../../components/ContactCTA";
import { useEffect, useState } from "react";
import apiCallUnsecureGet, { apiUrl } from "../../utils/api";
import NoDataFound from "../../components/NoDataFound";
import type { Hospital } from "./types";

const Hospitals = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    apiCallUnsecureGet(
      apiUrl.hospitalList,
      (res) => {
        console.log("Hospital API Response:", res);
        console.log("Hospital List:", res.list);

        setHospitals(res.list as Hospital[]);
      },
      (err) => {
        console.error("Hospital API Error:", err);
      },
    );
  }, []);
  return (
    <>
      <PageHero
        title={t("hospitals.title")}
        description={t("hospitals.description")}
      />
      <Grid container spacing={3} sx={styles.grid}>
        {hospitals.length > 0 ? (
          hospitals.map((hospital) => (
            <Grid
              key={hospital.id}
              size={{ xs: 12, md: 6 }}
              sx={{ display: "flex" }}
            >
              <HospitalCard
                id={hospital.id}
                image={hospital.images?.[0]?.image || ""}
                name={isArabic ? hospital.name_ar : hospital.name_en}
                location={
                  isArabic ? hospital.location_ar : hospital.location_en
                }
                description={
                  isArabic ? hospital.description_ar : hospital.description_en
                }
                specializations={hospital.facilities.map((facility) =>
                  isArabic ? facility.name_ar : facility.name_en,
                )}
              />
            </Grid>
          ))
        ) : (
          <NoDataFound message={t("noData")} />
        )}
      </Grid>
      <ContactCTA />
    </>
  );
};

export default Hospitals;
