import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMCBox from "../../../../components/IMCBox";
import HospitalCard from "../../../../components/HospitalCard";
import { hospitals } from "../../../../data/hospitals";
import IMCTypography from "../../../../components/IMCTypography";
import { commonStyles } from "../../../../constants/commonStyles";
const HospitalSection = () => {
  const navigate = useNavigate();

  return (
    <IMCBox style={commonStyles.sectionContainer}>
      <IMCTypography variant="h1" style={commonStyles.sectionTitle}>
        Hospitals
      </IMCTypography>

      <Grid container spacing={2} p={4}>
        {hospitals.slice(0, 4).map((hospital) => (
          <Grid
            key={hospital.id}
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex" }}
          >
            <HospitalCard
              id={hospital.id}
              image={hospital.image}
              name={hospital.name_en}
              location="Chennai, India"
              description={hospital.description_en}
              specializations={hospital.facilities.map((f) => f.name_en)}
            />
          </Grid>
        ))}
      </Grid>

      {hospitals.length > 2 && (
        <IMCBox style={commonStyles.exploreMoreContainer}>
          <Button
            variant="contained"
            onClick={() => navigate("/hospitals")}
            sx={commonStyles.exploreMoreButton}
          >
            Explore More
          </Button>
        </IMCBox>
      )}
    </IMCBox>
  );
};

export default HospitalSection;
