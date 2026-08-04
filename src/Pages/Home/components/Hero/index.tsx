import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";
import { styles } from "./style";
import { useTranslation } from "react-i18next";
const Hero = () => {
  const { t } = useTranslation();

  return (
    <IMCBox margin={spacing.none} style={styles.hero}>
      <IMCBox style={styles.container}>
        <IMCBox style={styles.content}>
          {/* Badge */}
          <IMCBox style={styles.badge}>{t("section.trusted")} </IMCBox>

          {/* Heading */}
          <IMCTypography
            variant="h1"
            size={fontSizes.xxxxl}
            weight={fontWeights.bold}
            color={colors.white}
            style={styles.heading}
          >
            {t("section.heroTitle")}

            <br />
            <span style={styles.headingHighlight}>
              {" "}
              {t("section.heroSubtitle")}
            </span>
          </IMCTypography>

          {/* Description */}
          <IMCTypography
            variant="body"
            size={fontSizes.lg}
            color={colors.white}
            weight={fontWeights.regular}
            style={styles.description}
          >
            {t("section.heroDescription")}
          </IMCTypography>

          {/* Buttons */}
          <IMCBox style={styles.buttonContainer}>
            <button style={styles.primaryButton}>
              {t("section.getFreeConsultation")}
            </button>

            <button style={styles.secondaryButton}>
              {" "}
              {t("section.exploreTreatments")}
            </button>
          </IMCBox>
        </IMCBox>
      </IMCBox>
    </IMCBox>
  );
};

export default Hero;
