import { Box, Chip, Typography } from "@mui/material";
import { FiCheckCircle, FiMapPin, FiHeart } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { hospitals } from "../../../../data/hospitals";
import { styles } from "./styles";
import { commonStyles } from "../../../../constants/commonStyles";
import HospitalDoctorCard from "../../../../components/HospitalDoctorCard";
import ContactCTA from "../../../../components/ContactCTA";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";
import ProcedureCard from "../../../../components/ProcedureCard";
import { spacing } from "../../../../styles/spacing";
const HospitalDetails = () => {
  const { id } = useParams();

  const hospital = hospitals.find((item) => item.id === Number(id));

  if (!hospital) return <>Hospital not found</>;

  return (
    <>
      {/* <Box sx={styles.hero(hospital.image)}>
        <Box sx={styles.heroContainer}>
          <Typography component={Link} to="/hospitals" sx={styles.backLink}>
            ← All Hospitals
          </Typography>

          <Typography variant="h2" sx={styles.heroTitle}>
            {hospital.name_en}
          </Typography>

          <Box sx={styles.location}>
            <FiMapPin />
            <Typography>India</Typography>
          </Box>
        </Box>
      </Box> */}
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
            alt={hospital.name_en}
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
            <Link to="/Hospitals" style={{ textDecoration: "none" }}>
              ← All Hospitals
            </Link>

            <Typography
              variant="h2"
              sx={{ fontWeight: fontWeights.bold, color: colors.mintGreen }}
            >
              {hospital.name_en}
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
              <Typography>India</Typography>
            </Box>

            {/* <Typography sx={styles.description}>
              {hospital.description_en}
            </Typography> */}
          </Box>
        </Box>
      </Box>
      <Box sx={styles.content}>
        <Typography sx={styles.description}>
          {hospital.description_en}
        </Typography>

        <Box sx={styles.grid}>
          <Box>
            <Typography sx={styles.sectionTitle}>
              <FiCheckCircle style={styles.facilityIcon} />
              Facilities
            </Typography>

            {hospital.facilities.length > 0 &&
              hospital.facilities.map((item) => (
                <Typography key={item.id} sx={styles.facility}>
                  • {item.name_en}
                </Typography>
              ))}
          </Box>

          <Box>
            <Typography sx={styles.sectionTitle}>
              <FiHeart style={styles.facilityIcon} />
              Specialties
            </Typography>

            <Box sx={styles.chips}>
              {hospital.specializations.map((item) => (
                <Chip
                  key={item.id}
                  label={item.name_en} // or item.name_ar for Arabic
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
          <Typography sx={commonStyles.sectionTitle}>Procedures</Typography>

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
                name={procedure.name_en}
                description={procedure.description_en}
              />
            ))}
          </Box>
        </Box>
      </Box>
      {/* -------------------------------------------doctor ----------------------------------- */}
      <Box sx={{ padding: spacing.base }}>
        <Typography sx={commonStyles.sectionTitle}>Our Doctors</Typography>

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
              name={doctor.name_en}
              specialization={doctor.specialist_en}
            />
          ))}
        </Box>
      </Box>

      <ContactCTA />
    </>
  );
};

export default HospitalDetails;
