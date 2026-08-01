import IMCBox from "../../../../components/IMCBox";
import IMCTypography from "../../../../components/IMCTypography";
import { colors } from "../../../../styles/colors";
import { fontSizes } from "../../../../styles/fontSizes";
import { fontWeights } from "../../../../styles/fontWeights";
import { spacing } from "../../../../styles/spacing";
import { styles } from "./style";

const Hero = () => {
  return (
    <IMCBox margin={spacing.none} style={styles.hero}>
      <IMCBox style={styles.container}>
        <IMCBox style={styles.content}>
          {/* Badge */}
          <IMCBox style={styles.badge}>
            ❤️ Trusted by 50,000+ patients globally
          </IMCBox>

          {/* Heading */}
          <IMCTypography
            variant="h1"
            size={fontSizes.xxxxl}
            weight={fontWeights.bold}
            color={colors.white}
            style={styles.heading}
          >
            World-Class Healthcare,
            <br />
            <span style={styles.headingHighlight}>Anywhere in the World</span>
          </IMCTypography>

          {/* Description */}
          <IMCTypography
            variant="body"
            size={fontSizes.lg}
            color={colors.white}
            weight={fontWeights.regular}
            style={styles.description}
          >
            Connect with internationally accredited hospitals and renowned
            specialists. We handle every detail of your medical journey—from
            consultation to recovery.
          </IMCTypography>

          {/* Buttons */}
          <IMCBox style={styles.buttonContainer}>
            <button style={styles.primaryButton}>
              Get Free Consultation →
            </button>

            <button style={styles.secondaryButton}>Explore Treatments</button>
          </IMCBox>
        </IMCBox>
      </IMCBox>
    </IMCBox>
  );
};

export default Hero;
