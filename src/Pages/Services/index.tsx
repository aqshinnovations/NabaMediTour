import PageHero from "../../components/PageHero";

import { Grid } from "@mui/material";
import { services } from "../../data/services";
import ServiceCard from "../../components/ServiceCard";
import IMCBox from "../../components/IMCBox";

import { styles } from "./styles";
const Services = () => {
  return (
    <>
      <PageHero
        title="Our Services"
        description="Highly qualified and experienced specialists dedicated to providing exceptional medical care."
      />

      <IMCBox style={styles.section}>
        <Grid container spacing={2}>
          {services.map((service) => (
            <Grid
              key={service.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
              }}
            >
              <ServiceCard
                // id={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                // path={service.path}
              />
            </Grid>
          ))}
        </Grid>
      </IMCBox>
    </>
  );
};

export default Services;
