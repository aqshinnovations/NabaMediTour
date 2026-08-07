import { Box } from "@mui/material";
import { FiMapPin } from "react-icons/fi";

import IMCBox from "../IMCBox";
import IMCTypography from "../IMCTypography";

import { colors } from "../../styles/colors";

import { styles } from "./styles";
import { fontWeights } from "../../styles/fontWeights";
import { fontSizes } from "../../styles/fontSizes";
import { commonStyles } from "../../constants/commonStyles";
import { spacing } from "../../styles/spacing";
import { useTranslation } from "react-i18next";

const serviceLocations = [
  {
    id: 1,
    key: "delhi",
  },
  {
    id: 2,
    key: "mumbai",
  },
  {
    id: 3,
    key: "chennai",
  },
  {
    id: 4,
    key: "hyderabad",
  },
];

const ServiceLocations = () => {
  const { t } = useTranslation();

  return (
    <IMCBox padding={spacing.base} backgroundColor={colors.iceBlue}>
      <IMCBox style={styles.container}>
        {/* Section Header */}
        <IMCBox margin={spacing.sm}>
          <IMCTypography
            variant="h2"
            weight={fontWeights.bold}
            size={fontSizes.xxxl}
            style={commonStyles.sectionTitle}
          >
            {t("serviceLocations.title")}
          </IMCTypography>

          <IMCTypography
            variant="body"
            size={fontSizes.md}
            style={styles.description}
          >
            {t("serviceLocations.description")}
          </IMCTypography>
        </IMCBox>

        {/* Locations */}
        <Box sx={styles.locations}>
          {serviceLocations.map((location) => (
            <Box key={location.id} sx={styles.locationCard}>
              <Box sx={styles.iconWrapper}>
                <FiMapPin size={22} color={colors.primary} />
              </Box>

              <IMCTypography
                variant="h3"
                weight={fontWeights.bold}
                size={fontSizes.lg}
                style={styles.locationName}
              >
                {t(`serviceLocations.cities.${location.key}`)}
              </IMCTypography>
            </Box>
          ))}
        </Box>
      </IMCBox>
    </IMCBox>
  );
};

export default ServiceLocations;
