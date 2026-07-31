// import { Grid } from "@mui/material";
// import IMCBox from "../../../../components/IMCBox";
// import HospitalCard from "../../../../components/HospitalCard";
// import { hospitals } from "../../../../data/hospitals"; // <-- Import local data
// import { fontSizes } from "../../../../styles/fontSizes";
// import { fontWeights } from "../../../../styles/fontWeights";
// import { colors } from "../../../../styles/colors";
// import IMCTypography from "../../../../components/IMCTypography";
// import { spacing } from "../../../../styles/spacing";

// const HospitalSection = () => {
//   return (
//     <IMCBox
//       style={{
//         padding: spacing.md,
//         background: colors.lightBlue,
//         margin: 0,
//       }}
//     >
//       <IMCTypography
//         variant="h1"
//         size={fontSizes.xxl}
//         weight={fontWeights.ultraBold}
//         color={colors.msBlue}
//         style={{
//           lineHeight: 1,
//           textAlign: "center",
//           marginBottom: "32px",
//           width: "100%",
//         }}
//       >
//         Hospitals
//       </IMCTypography>

//       <Grid container spacing={2} p={4}>
//         {hospitals.map((hospital) => (
//           <Grid
//             key={hospital.id}
//             size={{ xs: 12, md: 6 }}
//             sx={{ display: "flex" }}
//           >
//             <HospitalCard
//               image={hospital.image}
//               name={hospital.name_en}
//               location="Chennai, India"
//               description={hospital.description_en}
//               specializations={hospital.specializations.slice(0, 3)}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </IMCBox>
//   );
// };

// export default HospitalSection;
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMCBox from "../../../../components/IMCBox";
import HospitalCard from "../../../../components/HospitalCard";
import { hospitals } from "../../../../data/hospitals";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";
import IMCTypography from "../../../../components/IMCTypography";
import { spacing } from "../../../../styles/spacing";

const HospitalSection = () => {
  const navigate = useNavigate();

  return (
    <IMCBox
      style={{
        padding: spacing.md,
        background: colors.lightBlue,
        margin: 0,
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
        Hospitals
      </IMCTypography>

      <Grid container spacing={2} p={4}>
        {hospitals.slice(0, 2).map((hospital) => (
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
        <IMCBox
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "32px",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/hospitals")}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: "30px",
              textTransform: "none",
              backgroundColor: colors.msBlue,
              "&:hover": {
                backgroundColor: colors.msBlue,
              },
            }}
          >
            Explore More
          </Button>
        </IMCBox>
      )}
    </IMCBox>
  );
};

export default HospitalSection;
