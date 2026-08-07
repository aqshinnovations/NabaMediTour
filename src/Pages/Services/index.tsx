import PageHero from "../../components/PageHero";

import { Grid } from "@mui/material";
import { services } from "../../data/services";
import ServiceCard from "../../components/ServiceCard";
import IMCBox from "../../components/IMCBox";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
const Services = () => {
  const { i18n, t } = useTranslation();

  const isArabic = i18n.language === "ar";

  return (
    <>
      <PageHero
        title={t("services.title")}
        description={t("services.description")}
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
                key={service.id}
                title={isArabic ? service.name_ar : service.name_en}
                description={
                  isArabic ? service.description_ar : service.description_en
                }
                image={service.image}
              />
            </Grid>
          ))}
        </Grid>
      </IMCBox>
    </>
  );
};

export default Services;
