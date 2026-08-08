import { useEffect, useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { FiMapPin } from "react-icons/fi";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import HospitalDoctorCard from "../../../../components/HospitalDoctorCard";
import ContactCTA from "../../../../components/ContactCTA";
import ProcedureCard from "../../../../components/ProcedureCard";
import NoDataFound from "../../../../components/NoDataFound";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";

import apiCallUnsecureGet, { apiUrl } from "../../../../utils/api";

import { commonStyles } from "../../../../constants/commonStyles";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";

import { backButtonStyle, backTextStyle, styles } from "./styles";
import type { Hospital } from "./types";

const HospitalDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [loading, setLoading] = useState(true);

  const isArabic = i18n.language === "ar";

  useEffect(() => {
    const url = `${apiUrl.hospitalsDetails}?hospital_id=${id}`;

    apiCallUnsecureGet(
      url,
      (res) => {
        if (res?.data) {
          setHospital(res.data as Hospital);
        } else {
          setHospital(null);
        }

        setLoading(false);
      },
      (error) => {
        console.error("Hospital API Error:", error);

        setHospital(null);
        setLoading(false);
      },
    );
  }, [id]);

  if (loading) {
    return null;
  }

  if (!hospital) {
    return <NoDataFound message={t("noData")} />;
  }

  const hospitalName = isArabic ? hospital.name_ar : hospital.name_en;

  const hospitalDescription = isArabic
    ? hospital.description_ar
    : hospital.description_en;

  return (
    <>
      {/* Hospital Hero */}

      <Box sx={styles.heroContainer}>
        <Box sx={styles.heroGrid}>
          <Box
            component="img"
            src={hospital.image}
            alt={hospitalName}
            sx={styles.hospitalImage}
          />

          <Box sx={styles.hospitalInfo}>
            <IMCBox
              onClick={() => navigate("/hospitals")}
              style={backButtonStyle}
            >
              {isArabic ? (
                <ArrowForwardIcon
                  sx={{
                    fontSize: fontSizes.md,
                    color: colors.white,
                  }}
                />
              ) : (
                <ArrowBackIcon
                  sx={{
                    fontSize: fontSizes.md,
                    color: colors.white,
                  }}
                />
              )}

              <IMCTypography
                variant="body"
                size={fontSizes.md}
                color={colors.white}
                style={backTextStyle}
              >
                {t("hospitalDetails.allHospitals")}
              </IMCTypography>
            </IMCBox>

            <Typography variant="h2" sx={styles.hospitalTitle}>
              {hospitalName}
            </Typography>

            <Box sx={styles.location}>
              <FiMapPin color={colors.white} />
              <Typography style={{ color: colors.white }}>
                {t("hospitalDetails.location")}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.alignCenter}>
        {/* Hospital Information */}
        <Box sx={styles.content}>
          <Typography sx={styles.description}>{hospitalDescription}</Typography>

          <Box sx={styles.grid}>
            {/* Facilities */}
            <Box>
              <Typography sx={commonStyles.sectionLabel}>
                {t("hospitalDetails.facilities")}
              </Typography>

              {hospital.facilities.length > 0 ? (
                hospital.facilities.map((facility) => (
                  <Box key={facility.id} sx={styles.facilityItem}>
                    <CheckCircleOutlineIcon sx={styles.facilityCheckIcon} />

                    <Typography sx={styles.facility}>
                      {isArabic ? facility.name_ar : facility.name_en}
                    </Typography>
                  </Box>
                ))
              ) : (
                <NoDataFound message={t("noData")} />
              )}
            </Box>

            {/* Specializations */}
            <Box>
              <Typography sx={commonStyles.sectionLabel}>
                {t("hospitalDetails.specialties")}
              </Typography>

              {hospital.specializations.length > 0 ? (
                <Box sx={styles.chips}>
                  {hospital.specializations.map((specialization) => (
                    <Chip
                      key={specialization.id}
                      label={
                        isArabic
                          ? specialization.name_ar
                          : specialization.name_en
                      }
                      sx={styles.chip}
                    />
                  ))}
                </Box>
              ) : (
                <NoDataFound message={t("noData")} />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* Procedures */}
      <Box sx={styles.proceduresSection}>
        <Typography sx={commonStyles.sectionTitle}>
          {t("hospitalDetails.procedures")}
        </Typography>

        {hospital.procedures.length > 0 ? (
          <Box sx={styles.cardsGrid}>
            {hospital.procedures.map((procedure) => (
              <ProcedureCard
                key={procedure.id}
                image={procedure.image}
                name={isArabic ? procedure.name_ar : procedure.name_en}
                description={
                  isArabic ? procedure.description_ar : procedure.description_en
                }
              />
            ))}
          </Box>
        ) : (
          <NoDataFound message={t("noData")} />
        )}
      </Box>

      {/* Doctors */}
      <Box sx={styles.doctorsSection}>
        <Typography sx={commonStyles.sectionTitle}>
          {t("hospitalDetails.ourDoctors")}
        </Typography>

        {hospital.doctors.length > 0 ? (
          <Box sx={styles.cardsGrid}>
            {hospital.doctors.map((doctor) => (
              <HospitalDoctorCard
                key={doctor.id}
                image={doctor.image}
                name={isArabic ? doctor.name_ar : doctor.name_en}
                specialization={
                  isArabic ? doctor.specialist_ar : doctor.specialist_en
                }
              />
            ))}
          </Box>
        ) : (
          <NoDataFound message={t("noData")} />
        )}
      </Box>

      <ContactCTA />
    </>
  );
};

export default HospitalDetails;
