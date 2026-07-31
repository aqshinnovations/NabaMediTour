import { Grid, Button } from "@mui/material";
import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import DoctorCard from "../../../../components/DoctorCard";
import { doctors } from "../../../../data/doctors";
import { spacing } from "../../../../styles/spacing";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";
import { useNavigate } from "react-router-dom";
const DoctorsSection = () => {
  const navigate = useNavigate();

  // Show only first 4 cards initially
  const displayedDoctors = doctors.slice(0, 4);
  return (
    <IMCBox
      margin={spacing.none}
      style={{
        width: "100%",
        gap: 10,
        padding: "30px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <IMCTypography
        variant="h1"
        size={fontSizes.xxl}
        weight={fontWeights.ultraBold}
        color={colors.msBlue}
        style={{
          lineHeight: 1,
          textAlign: "center",
          marginBottom: "32px",
          width: "100%",
        }}
      >
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

      <IMCBox
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigate("/doctors")}
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: "30px",
            textTransform: "none",
            backgroundColor: colors.msBlue,
          }}
        >
          Explore More
        </Button>
      </IMCBox>
    </IMCBox>
  );
};

export default DoctorsSection;
