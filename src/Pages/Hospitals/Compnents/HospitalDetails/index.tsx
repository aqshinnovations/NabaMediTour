import { Box, Chip, Typography } from "@mui/material";
import { FiCheckCircle, FiMapPin, FiHeart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { hospitals } from "../../../../data/hospitals";
import { styles } from "./styles";
import { commonStyles } from "../../../../constants/commonStyles";
import HospitalDoctorCard from "../../../../components/HospitalDoctorCard";
import ContactCTA from "../../../../components/ContactCTA";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";
import ProcedureCard from "../../../../components/ProcedureCard";
import { spacing } from "../../../../styles/spacing";
import { useTranslation } from "react-i18next";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { fontSizes } from "../../../../styles/fontSizes";
import { useNavigate } from "react-router-dom";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
const HospitalDetails = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const hospital = hospitals.find((item) => item.id === Number(id));
  const navigate = useNavigate();

  if (!hospital) {
    return <>{t("hospitalDetails.notFound")}</>;
  }
  return (
    <>
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: 5 }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "400px 1fr",
            },
            gap: 4,
            alignItems: "center",
          }}
        >
          {/* Hospital Image */}
          <Box
            component="img"
            src={hospital.image}
            alt={isArabic ? hospital.name_ar : hospital.name_en}
            sx={{
              width: "100%",
              height: {
                xs: 250,
                md: 350,
              },
              objectFit: "cover",
              borderRadius: 3,
              boxShadow: 3,
            }}
          />

          {/* Hospital Details */}
          <Box>
            {/*  */}
            <IMCBox
              onClick={() => navigate("/hospitals")}
              style={styles.backButton}
            >
              {isArabic ? (
                <ArrowForwardIcon
                  sx={{ fontSize: fontSizes.md, color: colors.primaryDarkBlue }}
                />
              ) : (
                <ArrowBackIcon
                  sx={{ fontSize: fontSizes.md, color: colors.primaryDarkBlue }}
                />
              )}

              <IMCTypography
                variant="body"
                size={fontSizes.md}
                color={colors.primaryDarkBlue}
                style={styles.backText}
              >
                {t("hospitalDetails.allHospitals")}
              </IMCTypography>
            </IMCBox>

            {/*  */}

            <Typography
              variant="h2"
              sx={{ fontWeight: fontWeights.bold, color: colors.mintGreen }}
            >
              {isArabic ? hospital.name_ar : hospital.name_en}{" "}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              <FiMapPin />
              <Typography>{t("hospitalDetails.location")}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={styles.content}>
        <Typography sx={styles.description}>
          {isArabic ? hospital.description_ar : hospital.description_en}{" "}
        </Typography>

        <Box sx={styles.grid}>
          <Box>
            <Typography sx={styles.sectionTitle}>
              <FiCheckCircle style={styles.facilityIcon} />
              {t("hospitalDetails.facilities")}
            </Typography>
            {hospital.facilities.length > 0 &&
              hospital.facilities.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: colors.primary,
                      fontSize: 20,
                      flexShrink: 0,
                    }}
                  />

                  <Typography sx={styles.facility}>
                    {isArabic ? item.name_ar : item.name_en}
                  </Typography>
                </Box>
              ))}
          </Box>

          <Box>
            <Typography sx={styles.sectionTitle}>
              <FiHeart style={styles.facilityIcon} />
              {t("hospitalDetails.specialties")}
            </Typography>

            <Box sx={styles.chips}>
              {hospital.specializations.map((item) => (
                <Chip
                  key={item.id}
                  label={isArabic ? item.name_ar : item.name_en}
                  sx={styles.chip}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* ----------------------------------Procedures----------------------------------- */}
      <Box sx={{ padding: spacing.base, background: colors.lightBlue }}>
        <Box>
          <Typography sx={commonStyles.sectionTitle}>
            {t("hospitalDetails.procedures")}
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(3, 1fr)",
                md: "repeat(4, 1fr)",
                lg: "repeat(6, 1fr)",
              },
              gap: 2,
              mt: 3,
            }}
          >
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
        </Box>
      </Box>
      {/* -------------------------------------------doctor ----------------------------------- */}
      <Box sx={{ padding: spacing.base }}>
        <Typography sx={commonStyles.sectionTitle}>
          {t("hospitalDetails.ourDoctors")}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
              lg: "repeat(6, 1fr)",
            },
            gap: 2,
            mt: 3,
          }}
        >
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
      </Box>

      <ContactCTA />
    </>
  );
};

export default HospitalDetails;
