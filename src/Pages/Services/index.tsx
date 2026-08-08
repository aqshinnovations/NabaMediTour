import PageHero from "../../components/PageHero";

import { Grid } from "@mui/material";
import ServiceCard from "../../components/ServiceCard";
import IMCBox from "../../components/IMCBox";
import { useTranslation } from "react-i18next";
import { styles } from "./styles";
import { useEffect, useState } from "react";
import apiCallUnsecureGet, { apiUrl } from "../../utils/api";

export interface Service {
  id: number;
  name_en: string;
  name_ar: string;
  description_en: string;
  description_ar: string;
  image: string;
  created_at: string;
  updated_at: string;
}

const Services = () => {
  const { i18n, t } = useTranslation();
  const [services, setServices] = useState<Service[]>([]);

  const isArabic = i18n.language === "ar";
  useEffect(() => {
    apiCallUnsecureGet<Service[]>(
      apiUrl.servicesList,
      (res) => {
        console.log("Blogs API Response:", res);

        if (res.list) {
          setServices(res.list);
        }
      },
      (error) => {
        console.error("Blogs API Error:", error);
      },
    );
  }, []);

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
