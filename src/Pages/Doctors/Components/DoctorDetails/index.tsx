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

const DoctorsDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const doctor = doctors.find((item) => item.id === Number(id));

  if (!doctor) {
    return <IMCTypography>Doctor not found.</IMCTypography>;
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
            <ArrowBackIcon
              sx={{
                fontSize: fontSizes.md,
                color: colors.white,
              }}
            />

            <IMCTypography
              variant="body"
              size={fontSizes.md}
              color={colors.white}
              style={styles.backText}
            >
              All Doctors
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
                {doctor.name_en}{" "}
              </IMCTypography>

              <IMCTypography
                variant="h3"
                size={fontSizes.lg}
                color={colors.light}
                style={styles.speciality}
              >
                {doctor.category.name_en}{" "}
              </IMCTypography>

              <IMCBox style={styles.experience}>
                <AccessTimeIcon sx={{ color: colors.light }} />

                <IMCTypography variant="body" size="18" color={colors.light}>
                  {doctor.experience_en} Years Experience{" "}
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
            About
          </IMCTypography>

          <IMCTypography
            variant="body"
            size={fontSizes.md}
            color={colors.textSecondary}
            style={styles.about}
          >
            {doctor.about_en}
          </IMCTypography>

          {/* Specializations */}
          <IMCBox style={styles.infoGrid}>
            {/* Qualifications */}
            <IMCBox>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                Qualifications
              </IMCTypography>

              {doctor.qualifications.map((qualification) => (
                <IMCBox key={qualification.id} style={styles.infoItem}>
                  <SchoolOutlinedIcon sx={{ color: colors.primary }} />

                  <IMCTypography variant="body" size={fontSizes.md}>
                    {qualification.name_en}
                  </IMCTypography>
                </IMCBox>
              ))}
            </IMCBox>

            {/* Specializations */}
            <IMCBox>
              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size="30"
                style={{ marginBottom: 20 }}
              >
                Specializations
              </IMCTypography>

              {doctor.specialists.map((specialist) => (
                <IMCBox key={specialist.id} style={styles.infoItem}>
                  <BookmarkBorderIcon sx={{ color: colors.primary }} />

                  <IMCTypography variant="body" size={fontSizes.md}>
                    {specialist.name_en}
                  </IMCTypography>
                </IMCBox>
              ))}
            </IMCBox>
          </IMCBox>
        </IMCBox>

        {/* Right Card */}
      </IMCBox>
    </>
  );
};

export default DoctorsDetails;
