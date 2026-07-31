import IMCBox from "../IMCBox";
import IMCTypography from "../IMCTypography";
import { colors } from "../../styles/colors";

interface PageHeroProps {
  title: string;
  description: string;
  backgroundColor?: string;
}

const PageHero = ({
  title,
  description,
  backgroundColor = colors.primaryTeal,
}: PageHeroProps) => {
  return (
    <IMCBox
      style={{
        background: backgroundColor,
        padding: "70px 20px",
        textAlign: "center",
      }}
    >
      <IMCTypography variant="h2" color={colors.white}>
        {title}
      </IMCTypography>

      <IMCTypography
        color={colors.white}
        style={{
          marginTop: 16,
          opacity: 0.95,
          maxWidth: 700,
          marginInline: "auto",
        }}
      >
        {description}
      </IMCTypography>
    </IMCBox>
  );
};

export default PageHero;
