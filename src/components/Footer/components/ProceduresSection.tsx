import { Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import IMCTypography from "../../IMCTypography";
import { fontSizes } from "../../../styles/fontSizes";
import { fontWeights } from "../../../styles/fontWeights";
import { colors } from "../../../styles/colors";
import { spacing } from "../../../styles/spacing";
import { Icons } from "../../../styles/icons";
import IMCBox from "../../IMCBox";
import { useTranslation } from "react-i18next";

const ProceduresSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Define your clickable procedure list
  const procedures = [
    {
      label: t("footer_procedure.brain_tumor_surgery"),
      // path: "/procedures/brain_tumor_surgery",
    },

    {
      label: t("transplants_replacements.heart_transplant_implant"),
      // path: "/procedures/HeartTransplantAndImplant",
    },
    {
      label: t("footer_procedure.heart_bypass_surgery"),
      // path: "/procedures/IVFTreheart_bypass_surgeryatment",
    },
    {
      label: t("footer_procedure.cancer_surgeries"),
      // path: "/procedures/cancer_surgeries",
    },
    {
      label: t("footer_procedure.bone_marrow_transplant"),
      // path: "/procedures/bone_marrow_transplant",
    },
    {
      label: t("footer_procedure.ivf_treatment"),
      // path: "/procedures/ivf_treatment",
    },
    {
      label: t("footer_procedure.eye_surgeries"),
      // path: "/procedures/eye_surgeries",
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
        {t("footer.top_procedures")}
      </IMCTypography>

      <Box />

      {procedures.map((item, index) => (
        <IMCBox
          key={index}
          margin="0"
          padding="0"
          backgroundColor={colors.transparent}
          onClick={() => {
            navigate(item.label);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
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

export default ProceduresSection;
