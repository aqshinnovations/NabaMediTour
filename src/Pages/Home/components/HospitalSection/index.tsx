import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import HospitalCard from "../../../../components/HospitalCard";
import { useTranslation } from "react-i18next";

import { hospitals } from "../../../../data/hospitals";
import { commonStyles } from "../../../../constants/commonStyles";
import { styles } from "./styles";
import { spacing } from "../../../../styles/spacing";

const HospitalSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <IMCBox style={styles.section} margin={spacing.none}>
      <IMCTypography variant="h2" style={commonStyles.sectionTitle}>
        {t("section.hospitals")}
      </IMCTypography>

      <Grid container spacing={2} sx={styles.grid}>
        {hospitals.slice(0, 4).map((hospital) => (
          <Grid key={hospital.id} size={{ xs: 12, md: 6 }} sx={styles.gridItem}>
            <HospitalCard
              id={hospital.id}
              image={hospital.image}
              name={hospital.name_en}
              location="Chennai, India"
              description={hospital.description_en}
              specializations={hospital.facilities.map(
                (facility) => facility.name_en,
              )}
            />
          </Grid>
        ))}
      </Grid>

      {hospitals.length > 4 && (
        <IMCBox style={commonStyles.exploreMoreContainer}>
          <Button
            variant="contained"
            onClick={() => navigate("/hospitals")}
            sx={commonStyles.exploreMoreButton}
          >
            {t("section.exploreMore")}
          </Button>
        </IMCBox>
      )}
    </IMCBox>
  );
};

export default HospitalSection;
