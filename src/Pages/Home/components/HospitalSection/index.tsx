import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

import HospitalCard from "../../../../components/HospitalCard";
import { getHospitals } from "./hospitalApi";
import type { Hospital } from "./hospitalApi";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { colors } from "../../../../styles/colors";
import IMCTypography from "../../../../components/IMCTypography";
const HospitalSection = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  useEffect(() => {
    getHospitals(
      (data) => {
        setHospitals(data);
      },
      (err) => {
        console.error(err);
      },
    );
  }, []);

  return (
    <>
      <IMCTypography
        variant="h1"
        size={fontSizes.xxl}
        weight={fontWeights.ultraBold}
        color={colors.mintGreen}
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
        {hospitals.map((hospital) => (
          <Grid
            key={hospital.id}
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex" }}
          >
            <HospitalCard
              image={hospital.image ?? ""}
              name={hospital.name_en}
              location="Chennai, India"
              description={hospital.description_en}
              specializations={
                hospital.specializations
                  ?.slice(0, 3)
                  .map((item) => item.name_en) ?? []
              }
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HospitalSection;
