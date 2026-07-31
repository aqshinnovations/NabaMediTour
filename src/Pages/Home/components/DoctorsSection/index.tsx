import { Grid, Button } from "@mui/material";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import DoctorCard from "../../../../components/DoctorCard";
import { doctors } from "../../../../data/doctors";
import { useNavigate } from "react-router-dom";
import { commonStyles } from "../../../../constants/commonStyles";
import { colors } from "../../../../styles/colors";
const DoctorsSection = () => {
  const navigate = useNavigate();

  const displayedDoctors = doctors.slice(0, 4);
  return (
    <IMCBox
      style={commonStyles.sectionContainer}
      backgroundColor={colors.lightBlue}
    >
      <IMCTypography variant="h1" style={commonStyles.sectionTitle}>
        Doctors
      </IMCTypography>

      <Grid container spacing={4}>
        {displayedDoctors.map((doctor) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={doctor.id}>
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
              // onViewProfile={() => console.log(doctor.id)}
              onViewProfile={() => navigate(`/Doctors/${doctor.id}`)}
            />
          </Grid>
        ))}
      </Grid>

      <IMCBox style={commonStyles.exploreMoreContainer}>
        <Button
          variant="contained"
          onClick={() => navigate("/doctors")}
          sx={commonStyles.exploreMoreButton}
        >
          Explore More
        </Button>
      </IMCBox>
    </IMCBox>
  );
};

export default DoctorsSection;
