import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import { colors } from "../../../../styles/colors";
import { fontWeights } from "../../../../styles/fontWeights";
import { styles } from "./styles";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { fontSizes } from "../../../../styles/fontSizes";
import { doctors } from "../../../../data/doctors";
import { useNavigate, useParams } from "react-router-dom";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { commonStyles } from "../../../../constants/commonStyles";
import { spacing } from "../../../../styles/spacing";
import ContactCTA from "../../../../components/ContactCTA";
import { useTranslation } from "react-i18next";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const DoctorsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return <IMCTypography>{t("doctorsDetails.notFound")}</IMCTypography>;
  }
  return (
    <>
      <IMCBox style={styles.hero}>
        <IMCBox style={styles.heroContainer}>
          {/* Back Button */}
          <IMCBox
            onClick={() => navigate("/doctors")}
            style={styles.backButton}
          >
            {isArabic ? (
              <ArrowForwardIcon
                sx={{ fontSize: fontSizes.md, color: colors.white }}
              />
            ) : (
              <ArrowBackIcon
                sx={{ fontSize: fontSizes.md, color: colors.white }}
              />
            )}

            <IMCTypography
              variant="body"
              size={fontSizes.md}
              color={colors.white}
              style={styles.backText}
            >
              {t("doctorsDetails.allDoctors")}
            </IMCTypography>
          </IMCBox>

          {/* Doctor Info */}
          <IMCBox style={styles.doctorHeader}>
            <img src={doctor.image} alt="doctor" style={styles.doctorImage} />

            <IMCBox>
              <IMCTypography
                variant="h2"
                size="42"
                weight={fontWeights.bold}
                color="#fff"
              >
                {isArabic ? doctor.name_ar : doctor.name_en}
              </IMCTypography>

              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                color={colors.light}
                style={styles.speciality}
              >
                {isArabic
                  ? doctor.category.name_ar
                  : doctor.category.name_en}{" "}
              </IMCTypography>

              <IMCBox style={styles.experience}>
                <AccessTimeIcon sx={{ color: colors.light }} />

                <IMCTypography variant="body" size="18" color={colors.light}>
                  {isArabic ? doctor.experience_ar : doctor.experience_en}{" "}
                  {t("doctorsDetails.yearsExperience")}{" "}
                </IMCTypography>
              </IMCBox>
            </IMCBox>
          </IMCBox>
        </IMCBox>
      </IMCBox>
      {/* Body */}
      <IMCBox style={styles.body}>
        {/* Left */}
        <IMCBox>
          <IMCTypography
            variant="h3"
            size={fontSizes.lg}
            weight={fontWeights.bold}
            style={styles.sectionTitle}
          >
            {t("doctorsDetails.about")}
          </IMCTypography>
          <IMCTypography
            variant="body"
            size={fontSizes.md}
            color={colors.textSecondary}
            style={styles.about}
          >
            {isArabic ? doctor.about_ar : doctor.about_en}
          </IMCTypography>
          <Grid container spacing={4}>
            {/* Qualifications */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                {t("doctorsDetails.qualifications")}
              </IMCTypography>

              {doctor.qualifications.map((qualification) => (
                <IMCBox key={qualification.id} style={styles.infoItem}>
                  <SchoolOutlinedIcon sx={{ color: colors.primary }} />
                  <IMCTypography variant="body" size={fontSizes.md}>
                    {isArabic
                      ? qualification.name_ar
                      : qualification.name_en}{" "}
                  </IMCTypography>
                </IMCBox>
              ))}
            </Grid>

            {/* Specializations */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                {t("doctorsDetails.specializations")}
              </IMCTypography>

              {doctor.specialists.map((specialist) => (
                <IMCBox key={specialist.id} style={styles.infoItem}>
                  <BookmarkBorderIcon sx={{ color: colors.primary }} />
                  <IMCTypography variant="body" size={fontSizes.md}>
                    {isArabic ? specialist.name_ar : specialist.name_en}{" "}
                  </IMCTypography>
                </IMCBox>
              ))}
            </Grid>

            {/* Awards */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                {t("doctorsDetails.awards")}
              </IMCTypography>

              {doctor.awards.map((award) => (
                <IMCBox key={award.id} style={styles.infoItem}>
                  <EmojiEventsOutlinedIcon sx={{ color: colors.primary }} />
                  <IMCTypography variant="body" size={fontSizes.md}>
                    {isArabic ? award.name_ar : award.name_en}{" "}
                  </IMCTypography>
                </IMCBox>
              ))}
            </Grid>
          </Grid>
        </IMCBox>

        {/* Right Card */}
      </IMCBox>
      {/* Gallery */}
      <IMCBox
        backgroundColor={colors.iceBlue}
        padding={spacing.md}
        margin={spacing.none}
      >
        <IMCTypography variant="h3" style={commonStyles.sectionTitle}>
          {t("doctorsDetails.gallery")}
        </IMCTypography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: 2,
          }}
        >
          {doctor.images.map((img) => (
            <Box
              key={img.id}
              sx={{
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: 2,
                cursor: "pointer",
              }}
            >
              <img
                src={img.image}
                alt={`Gallery ${img.id}`}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .3s ease",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </Box>
          ))}
        </Box>
      </IMCBox>
      <ContactCTA />
    </>
  );
};

export default DoctorsDetails;
