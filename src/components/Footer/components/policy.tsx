import { useTranslation } from "react-i18next";
import IMCBox from "../../IMCBox";
import { spacing } from "../../../styles/spacing";
import { colors } from "../../../styles/colors";
import IMCTypography from "../../IMCTypography";
import { fontWeights } from "../../../styles/fontWeights";
import { fontSizes } from "../../../styles/fontSizes";

const Policy = () => {
  const { t } = useTranslation();

  return (
    <IMCBox
      margin={spacing.none}
      padding={spacing.md}
      backgroundColor={colors.primaryLight}
    >
      <IMCTypography variant="body" size={fontSizes.base} color={colors.dark}>
        <strong>{t("policy.disclaimerLabel")}</strong>{" "}
        {t("policy.disclaimerBody")}
      </IMCTypography>
      <IMCTypography
        variant="body"
        size={fontSizes.base}
        color={colors.black}
        weight={fontWeights.ultraBold}
        style={{ textAlign: "center" }}
      >
        {t("policy.allRight")}
      </IMCTypography>
    </IMCBox>
  );
};

export default Policy;
