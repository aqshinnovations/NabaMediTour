import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import ContactCTA from "../../../../components/ContactCTA";

import { colors } from "../../../../styles/colors";
import { fontWeights } from "../../../../styles/fontWeights";
import { fontSizes } from "../../../../styles/fontSizes";
import { styles } from "./styles";

import { apiCallUnsecureGet, apiUrl } from "../../../../utils/api";
import { commonStyles } from "../../../../constants/commonStyles";
import NoDataFound from "../../../../components/NoDataFound";
import type { Doctor } from "./types";
const DoctorsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const api = `${apiUrl.doctorDetails}?id=${id}`;

    apiCallUnsecureGet<Doctor>(
      api,
      (response) => {
        if (response.data) {
          setDoctor(response.data);
        } else {
          setDoctor(null);
        }
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );
  }, [id, loading]);

  if (loading) {
    return (
      <IMCBox style={styles.statusContainer}>
        <IMCTypography>{t("common.loading")}</IMCTypography>
      </IMCBox>
    );
  }

  if (!doctor) {
    return (
      <IMCBox style={styles.statusContainer}>
        <IMCTypography>{t("doctorsDetails.notFound")}</IMCTypography>
      </IMCBox>
    );
  }

  return (
    <>
      {/* Hero */}
      <IMCBox style={styles.hero}>
        <IMCBox style={styles.heroContainer}>
          {/* Back Button */}
          <IMCBox
            onClick={() => navigate("/doctors")}
            style={styles.backButton}
          >
            {isArabic ? (
              <ArrowForwardIcon style={styles.backIcon} />
            ) : (
              <ArrowBackIcon style={styles.backIcon} />
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
            <img
              src={doctor.image}
              alt={isArabic ? doctor.name_ar : doctor.name_en}
              style={styles.doctorImage}
            />

            <IMCBox>
              <IMCTypography
                variant="h2"
                size="42"
                weight={fontWeights.bold}
                color={colors.white}
              >
                {isArabic ? doctor.name_ar : doctor.name_en}
              </IMCTypography>

              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                color={colors.light}
                style={styles.speciality}
              >
                {isArabic ? doctor.position_ar : doctor.position_en}
              </IMCTypography>

              <IMCBox style={styles.experience}>
                <AccessTimeIcon style={styles.lightIcon} />

                <IMCTypography variant="body" size="18" color={colors.light}>
                  {isArabic ? doctor.experience_ar : doctor.experience_en}{" "}
                  {t("doctorsDetails.yearsExperience")}
                </IMCTypography>
              </IMCBox>
            </IMCBox>
          </IMCBox>
        </IMCBox>
      </IMCBox>

      {/* Body */}
      <IMCBox style={styles.body}>
        <IMCBox>
          <IMCTypography style={commonStyles.sectionLabel}>
            {t("doctorsDetails.about")}
          </IMCTypography>

          <IMCTypography variant="body" style={styles.about}>
            {isArabic ? doctor.about_ar : doctor.about_en}
          </IMCTypography>

          <Grid container spacing={4}>
            {/* Qualifications */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography style={commonStyles.sectionLabel}>
                {t("doctorsDetails.qualifications")}
              </IMCTypography>

              {doctor.qualifications?.length > 0 ? (
                doctor.qualifications.map((qualification) => (
                  <IMCBox key={qualification.id} style={styles.infoItem}>
                    <SchoolOutlinedIcon style={styles.primaryIcon} />

                    <IMCTypography variant="body" size={fontSizes.md}>
                      {isArabic ? qualification.name_ar : qualification.name_en}
                    </IMCTypography>
                  </IMCBox>
                ))
              ) : (
                <NoDataFound message={t("noData")} />
              )}
            </Grid>

            {/* Specializations */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={commonStyles.sectionLabel}
              >
                {t("doctorsDetails.specializations")}
              </IMCTypography>

              {doctor.specialists?.length > 0 ? (
                doctor.specialists.map((specialist) => (
                  <IMCBox key={specialist.id} style={styles.infoItem}>
                    <BookmarkBorderIcon style={styles.primaryIcon} />

                    <IMCTypography variant="body" size={fontSizes.md}>
                      {isArabic ? specialist.name_ar : specialist.name_en}
                    </IMCTypography>
                  </IMCBox>
                ))
              ) : (
                <NoDataFound message={t("noData")} />
              )}
            </Grid>

            {/* Awards */}
            <Grid size={{ xs: 12, md: 4 }}>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={commonStyles.sectionLabel}
              >
                {t("doctorsDetails.awards")}
              </IMCTypography>

              {doctor.awards?.length > 0 ? (
                doctor.awards.map((award) => (
                  <IMCBox key={award.id} style={styles.infoItem}>
                    <EmojiEventsOutlinedIcon style={styles.primaryIcon} />

                    <IMCTypography variant="body" size={fontSizes.md}>
                      {isArabic ? award.name_ar : award.name_en}
                    </IMCTypography>
                  </IMCBox>
                ))
              ) : (
                <NoDataFound message={t("noData")} />
              )}
            </Grid>

            {/* Specializations */}
          </Grid>
        </IMCBox>
      </IMCBox>

      {/* Gallery */}
      <IMCBox style={styles.gallery}>
        <IMCTypography variant="h3" style={commonStyles.sectionTitle}>
          {t("doctorsDetails.gallery")}
        </IMCTypography>

        {doctor.images?.length > 0 ? (
          <IMCBox style={styles.galleryGrid}>
            {doctor.images.map((img) => (
              <IMCBox key={img.id} style={styles.galleryItem}>
                <img
                  src={img.image}
                  alt={`Gallery ${img.id}`}
                  style={styles.galleryImage}
                />
              </IMCBox>
            ))}
          </IMCBox>
        ) : (
          <NoDataFound message={t("noData")} />
        )}
      </IMCBox>

      <ContactCTA />
    </>
  );
};

export default DoctorsDetails;
