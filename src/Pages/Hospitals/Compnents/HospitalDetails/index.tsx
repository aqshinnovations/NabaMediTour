import { Box, Chip, Typography } from "@mui/material";
import { FiCheckCircle, FiMapPin } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";

import { hospitals } from "../../../../data/hospitals";
import { styles } from "./styles";

const HospitalDetails = () => {
  const { id } = useParams();

  const hospital = hospitals.find((item) => item.id === Number(id));

  if (!hospital) return <>Hospital not found</>;

  const specialties = hospital.facilities.length
    ? hospital.facilities.map((item) => item.name_en)
    : [
        "Cardiology",
        "Oncology",
        "Neurology",
        "Orthopedics",
        "Transplant Surgery",
      ];

  return (
    <>
      <Box sx={styles.hero(hospital.image)}>
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
            <Typography sx={styles.sectionTitle}>Specialties</Typography>

            <Box sx={styles.chips}>
              {specialties.map((item) => (
                <Chip key={item} label={item} sx={styles.chip} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HospitalDetails;
