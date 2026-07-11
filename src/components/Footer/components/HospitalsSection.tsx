import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import IMCBox from "../../IMCBox";
import { Icons } from "../../../styles/icons";

import { useTranslation } from "react-i18next";

const HospitalsSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const hospitals = [
    {
      label: t("hospitals.max"),
      // path: "/hospitals/Max",
    },

    {
      label: t("hospitals.manipal"),
      // path: "/hospitals/Manipal",
    },
    // no links
    {
      label: t("hospitals.merango"),
      // path: "/hospitals/merango",
    },
    {
      label: t("hospitals.asian"),
      // path: "/hospitals/asian",
    },
    {
      label: t("hospitals.mgm"),
      // path: "/hospitals/mgm",
    },
    {
      label: t("hospitals.gleneagles"),
      // path: "/hospitals/gleneagles",
    },
    {
      label: t("hospitals.kims"),
      // path: "/hospitals/kims",
    },
  ];
  return (
    <Grid size={{ xs: 12, md: 3, sm: 6 }}>
      <IMCTypography
        variant="subtitle"
        size={fontSizes.xl}
        weight={fontWeights.semiBold}
        color={colors.white}
        style={{ marginBottom: spacing.sm }}
      >
        {t("footer.top_hospitals")}
      </IMCTypography>

      <Box />

      {hospitals.map((item, index) => (
        <IMCBox
          key={index}
          margin="0"
          padding="0"
          backgroundColor={colors.transparent}
          onClick={() => navigate(item.label)}
          style={{
            ...styles.iconTextRow("center", spacing.none, spacing.xs),
            cursor: "pointer",
            transition: "transform 0.2s ease, color 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateX(5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateX(0)")
          }
        >
          <Icons.KeyboardDoubleArrowRightIcon
            sx={{ color: colors.white, fontSize: fontSizes.xl }}
          />
          <IMCTypography
            variant="body"
            color={colors.white}
            size={fontSizes.md}
            style={{ margin: 0 }}
          >
            {item.label}
          </IMCTypography>
        </IMCBox>
      ))}
    </Grid>
  );
};

const styles = {
  iconTextRow: (align = "center", marginTop = "0", marginBottom = "0") => ({
    display: "flex",
    alignItems: align,
    gap: spacing.sm,
    marginTop,
    marginBottom,
  }),
};

export default HospitalsSection;
