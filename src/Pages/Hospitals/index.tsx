import HospitalCard from "../../components/HospitalCard";
import PageHero from "../../components/PageHero";
import { Grid } from "@mui/material";

import { hospitals } from "../../data/hospitals";
import { styles } from "./styles";

const Hospitals = () => {
  return (
    <>
      <PageHero
        title="Our Hospitals"
        description="Partner hospitals equipped with world-class facilities and advanced medical technology."
      />
      <Grid container spacing={3} sx={styles.grid}>
        {hospitals.map((hospital) => (
          <Grid
            key={hospital.id}
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex" }}
          >
            <HospitalCard
              id={hospital.id}
              image={hospital.image}
              name={hospital.name_en}
              location="India"
              description={hospital.description_en}
              specializations={hospital.facilities.map(
                (facility) => facility.name_en,
              )}
            />
          </Grid>
        ))}
      </Grid>
      {/* <Grid container spacing={3} sx={styles.grid}>
        {hospitals.map((hospital) => (
          <Grid
            key={hospital.id}
            size={{ xs: 12, md: 6 }} // MUI v7
          >
            <HospitalCard
              id={hospital.id}
              image={hospital.image}
              name={hospital.name_en}
              location="India"
              description={hospital.description_en}
              specializations={hospital.facilities.map(
                (facility) => facility.name_en,
              )}
            />
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default Hospitals;
