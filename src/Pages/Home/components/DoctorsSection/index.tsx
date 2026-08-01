import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import DoctorCard from "../../../../components/DoctorCard";

import { doctors } from "../../../../data/doctors";
import { commonStyles } from "../../../../constants/commonStyles";
import { styles } from "./styles";
import { spacing } from "../../../../styles/spacing";

const DoctorsSection = () => {
  const navigate = useNavigate();

  const displayedDoctors = doctors.slice(0, 4);

  return (
    <IMCBox style={styles.section} margin={spacing.none}>
      <IMCTypography variant="h2" style={commonStyles.sectionTitle}>
        Doctors
      </IMCTypography>

      <Grid container spacing={4} sx={styles.grid}>
        {displayedDoctors.map((doctor) => (
          <Grid key={doctor.id} size={{ xs: 12, sm: 6, md: 3 }}>
            <DoctorCard
              id={doctor.id}
              image={doctor.image}
              name_en={doctor.name_en}
              name_ar={doctor.name_ar}
              about_en={doctor.about_en}
              about_ar={doctor.about_ar}
              experience_en={doctor.experience_en}
              experience_ar={doctor.experience_ar}
              category={doctor.category}
              qualifications={doctor.qualifications}
              specialists={doctor.specialists}
              onViewProfile={() => navigate(`/Doctors/${doctor.id}`)}
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
            Explore More
          </Button>
        </IMCBox>
      )}
    </IMCBox>
  );
};

export default DoctorsSection;
